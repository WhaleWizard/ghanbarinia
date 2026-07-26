import { useEffect, type RefObject } from "react";

interface Options {
  /** Milliseconds between slides. */
  interval?: number;
  enabled?: boolean;
}

/**
 * Moves a horizontal track on one card at a time, centring each in turn.
 *
 * A slow continuous drift turned out to be too subtle to read as motion, so
 * this steps instead: one card every few seconds, with the browser's own
 * smooth scrolling doing the animation.
 *
 * The track renders its items twice. When the step lands on the first
 * duplicate — which looks identical to the first card — the scroll position
 * is snapped back by one period without animation, so the loop is invisible
 * and there is never a long rewind.
 *
 * The current card is derived from the scroll position on every step rather
 * than counted, so dragging the track by hand cannot put it out of sync.
 */
export function useAutoAdvance(
  ref: RefObject<HTMLElement | null>,
  { interval = 3000, enabled = true }: Options = {}
) {
  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;

    let holds = 0;
    let rewind = 0;

    const centreOf = (index: number) => {
      const child = el.children[index] as HTMLElement | undefined;
      if (!child) return 0;
      return child.offsetLeft - (el.clientWidth - child.offsetWidth) / 2;
    };

    /** Whichever card currently sits closest to the middle of the track. */
    const nearest = () => {
      const middle = el.scrollLeft + el.clientWidth / 2;
      let best = 0;
      let bestDistance = Infinity;
      for (let i = 0; i < el.children.length; i += 1) {
        const child = el.children[i] as HTMLElement;
        const distance = Math.abs(child.offsetLeft + child.offsetWidth / 2 - middle);
        if (distance < bestDistance) {
          bestDistance = distance;
          best = i;
        }
      }
      return best;
    };

    const step = () => {
      if (holds > 0) return;

      const half = Math.floor(el.children.length / 2);
      let index = nearest();

      // Past the halfway mark the second copy is on screen; jump back to the
      // identical card in the first copy before animating on.
      if (index >= half) {
        index -= half;
        el.scrollTo({ left: centreOf(index), behavior: "auto" });
      }

      el.scrollTo({ left: centreOf(index + 1), behavior: "smooth" });
    };

    // Start centred rather than flush against the left edge.
    el.scrollTo({ left: centreOf(0), behavior: "auto" });

    /**
     * Only advance while the track is actually on screen.
     *
     * Left running, it fired a smooth horizontal scroll every few seconds no
     * matter where the visitor was on the page — so scrolling back up into
     * this section landed in the middle of an animation the visitor had not
     * asked for, and the two scrolls fought each other.
     */
    let timer = 0;
    const start = () => {
      if (!timer) timer = window.setInterval(step, interval);
    };
    const stop = () => {
      window.clearInterval(timer);
      timer = 0;
    };

    const visibility = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0.2 }
    );
    visibility.observe(el);

    const hold = () => {
      holds += 1;
    };
    const release = () => {
      holds = Math.max(0, holds - 1);
      // Settle back onto the nearest card after a manual drag.
      window.clearTimeout(rewind);
      rewind = window.setTimeout(() => {
        if (holds === 0) el.scrollTo({ left: centreOf(nearest()), behavior: "smooth" });
      }, 400);
    };

    el.addEventListener("pointerenter", hold);
    el.addEventListener("pointerleave", release);
    el.addEventListener("pointerdown", hold);
    window.addEventListener("pointerup", release);
    window.addEventListener("pointercancel", release);
    el.addEventListener("touchstart", hold, { passive: true });
    el.addEventListener("touchend", release, { passive: true });
    el.addEventListener("focusin", hold);
    el.addEventListener("focusout", release);

    return () => {
      visibility.disconnect();
      stop();
      window.clearTimeout(rewind);
      el.removeEventListener("pointerenter", hold);
      el.removeEventListener("pointerleave", release);
      el.removeEventListener("pointerdown", hold);
      window.removeEventListener("pointerup", release);
      window.removeEventListener("pointercancel", release);
      el.removeEventListener("touchstart", hold);
      el.removeEventListener("touchend", release);
      el.removeEventListener("focusin", hold);
      el.removeEventListener("focusout", release);
    };
  }, [ref, interval, enabled]);
}
