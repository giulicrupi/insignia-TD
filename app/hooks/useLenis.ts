"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: 1.3,
      wheelMultiplier: 1.2,
      lerp: 0.08,
    });


    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // para usar no console / anchors
    // @ts-ignore
    window.lenis = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);
}
