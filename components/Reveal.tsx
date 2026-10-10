"use client";
import { useEffect, useRef } from "react";

// 滚动到视野内时渐入。首屏已可见的内容不做动画，避免闪烁；无 JS 时内容始终可见。
export default function Reveal({
  children,
  delay = 0,
  className = "",
  wipe = false,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  wipe?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;
    el.classList.add("reveal");
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`${className}${wipe ? " has-wipe" : ""}`} style={{ ["--d" as string]: `${delay}ms` }}>
      {wipe ? <div className="wipe-inner">{children}</div> : children}
    </div>
  );
}
