"use client";
import { useEffect, useRef } from "react";

export default function ParallaxBg({ src }: { src: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 900);
        if (ref.current) ref.current.style.transform = `translate3d(0, ${y * 0.22}px, 0) scale(1.08)`;
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update);
    };
  }, []);
  return <div ref={ref} className="hero-photo" style={{ backgroundImage: `url(${src})` }} />;
}
