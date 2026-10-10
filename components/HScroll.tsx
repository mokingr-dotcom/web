"use client";
import { useRef } from "react";

export default function HScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const go = (d: number) =>
    ref.current?.scrollBy({ left: d * ref.current.clientWidth * 0.8, behavior: "smooth" });
  return (
    <div className="hscroll-wrap">
      <div className="hscroll" ref={ref}>{children}</div>
      <div className="hscroll-ctrl">
        <button type="button" onClick={() => go(-1)} aria-label="上一组">←</button>
        <button type="button" onClick={() => go(1)} aria-label="下一组">→</button>
      </div>
    </div>
  );
}
