"use client";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

export type Slide = {
  src: string;
  eyebrow: string;
  title: string;
  desc: string;
  href: string;
  cta: string;
};

// 整屏轮播：自动切换（鼠标悬停时暂停），支持箭头、圆点、键盘左右键、手机左右滑动。
export default function Showcase({
  slides,
  interval = 6500,
  label = "展示",
}: {
  slides: Slide[];
  interval?: number;
  label?: string;
}) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const touchX = useRef<number | null>(null);
  const n = slides.length;

  const go = useCallback((d: number) => setI((v) => (v + d + n) % n), [n]);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (paused || reduced || n < 2) return;
    const t = setTimeout(() => go(1), interval);
    return () => clearTimeout(t);
  }, [i, paused, reduced, n, interval, go]);

  if (n === 0) return null;
  const cur = slides[i];

  return (
    <section
      className="showcase"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }}
      onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
      }}
    >
      {slides.map((s, k) => (
        <div key={s.src} className={`sc-slide${k === i ? " on" : ""}`} aria-hidden={k !== i}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={s.src} alt={s.title} loading={k === 0 ? "eager" : "lazy"} />
        </div>
      ))}
      <div className="band-shade" />
      <div className="sc-cap" key={i}>
        <p className="eyebrow light">{cur.eyebrow}</p>
        <h2>{cur.title}</h2>
        <p>{cur.desc}</p>
        <Link href={cur.href} className="line-link">{cur.cta}</Link>
      </div>
      {n > 1 && (
        <>
          <button type="button" className="sc-arrow sc-prev" onClick={() => go(-1)} aria-label="上一张">←</button>
          <button type="button" className="sc-arrow sc-next" onClick={() => go(1)} aria-label="下一张">→</button>
          <div className="sc-dots" role="tablist" aria-label="选择画面">
            {slides.map((s, k) => (
              <button
                key={s.src}
                type="button"
                role="tab"
                aria-selected={k === i}
                aria-label={`第 ${k + 1} 张：${s.title}`}
                className={k === i ? "on" : ""}
                onClick={() => setI(k)}
              />
            ))}
            <span className="sc-count">{String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}</span>
          </div>
        </>
      )}
    </section>
  );
}
