import { useEffect, useState } from "react";

/** Subscribes to a CSS media query so components can drop heavy desktop-only
 *  behaviour (scroll animation, 3D transforms) on phones instead of merely
 *  hiding it with CSS. */
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() =>
    typeof window === "undefined" ? false : window.matchMedia(query).matches
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e: MediaQueryListEvent) => setMatches(e.matches);
    setMatches(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

/** True on tablets and desktops (Tailwind's `lg` breakpoint). */
export function useIsDesktop() {
  return useMediaQuery("(min-width: 1024px)");
}

/** True when the visitor asked the OS to reduce animation. */
export function usePrefersReducedMotion() {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
