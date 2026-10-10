"use client";
import { useEffect, useRef } from "react";

// 整幅图片带：背景随滚动轻微位移（视差），克制而缓慢。
export default function BandBg({ src }: { src: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    const host = el?.parentElement;
    if (!el || !host) return;
    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = host.getBoundingClientRect();
        if (r.bottom < -200 || r.top > window.innerHeight + 200) return;
        const y = (r.top + r.height / 2 - window.innerHeight / 2) * -0.12;
        el.style.transform = `translate3d(0, ${y}px, 0)`;
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  return <div ref={ref} className="band-bg" style={{ backgroundImage: `url(${src})` }} />;
}
