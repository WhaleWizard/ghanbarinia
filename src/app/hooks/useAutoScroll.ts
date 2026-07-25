import { useEffect, type RefObject } from "react";

interface Options {
  /** Pixels per second. */
  speed?: number;
  enabled?: boolean;
}

/**
 * Drifts a horizontal scroller along on its own, and gets out of the way the
 * moment the visitor takes over.
 *
 * The track renders its items twice; once the scroll passes the halfway mark
 * we subtract half the width, which lands on an identical frame — so the loop
 * has no visible seam and no snap-back. Because it moves `scrollLeft` rather
 * than transforming the track, native touch scrolling, trackpad swipes and
 * keyboard focus all keep working.
 */
export function useAutoScroll(
  ref: RefObject<HTMLElement | null>,
  { speed = 26, enabled = true }: Options = {}
) {
  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;

    let frame = 0;
    let previous = performance.now();
    let holds = 0;
    let period = 0;

    /**
     * One period is the distance from the first card to its duplicate — not
     * half of scrollWidth, which also counts the track's side padding and
     * would leave the loop a dozen pixels short every time round.
     */
    const measure = () => {
      const items = el.children;
      const half = Math.floor(items.length / 2);
      period =
        half > 0
          ? (items[half] as HTMLElement).offsetLeft - (items[0] as HTMLElement).offsetLeft
          : 0;
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);

    const tick = (now: number) => {
      const delta = Math.min(now - previous, 64); // ignore background-tab jumps
      previous = now;

      if (holds === 0) el.scrollLeft += (speed * delta) / 1000;

      if (period > 0) {
        if (el.scrollLeft >= period) el.scrollLeft -= period;
        else if (el.scrollLeft <= 0) el.scrollLeft += period;
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);

    const hold = () => {
      holds += 1;
    };
    const release = () => {
      holds = Math.max(0, holds - 1);
    };

    // Pointer events cover mouse, pen and touch; the window listener catches
    // a drag that ends outside the track.
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
      cancelAnimationFrame(frame);
      observer.disconnect();
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
  }, [ref, speed, enabled]);
}
