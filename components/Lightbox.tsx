"use client";
import { useCallback, useEffect, useState } from "react";

export type LightboxItem = { src: string | null; caption: string; hue: number };

export default function Lightbox({ items }: { items: LightboxItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const photos = items.map((it, i) => ({ ...it, i })).filter((it) => it.src);
  const move = useCallback(
    (d: number) => {
      if (open === null || photos.length === 0) return;
      const pos = photos.findIndex((p) => p.i === open);
      setOpen(photos[(pos + d + photos.length) % photos.length].i);
    },
    [open, photos]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, move]);

  const cur = open !== null ? items[open] : null;

  return (
    <>
      <div className="masonry">
        {items.map((it, i) => (
          <button
            key={i}
            type="button"
            className={`m-item m-${i % 6}`}
            onClick={() => it.src && setOpen(i)}
            disabled={!it.src}
            aria-label={`查看大图：${it.caption}`}
          >
            {it.src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={it.src} alt={it.caption} loading="lazy" />
            ) : (
              <span className="m-ph" style={{ background: `hsl(${it.hue} 30% 70%)` }} />
            )}
            <span className="m-cap">{it.caption}</span>
          </button>
        ))}
      </div>
      {cur && cur.src && (
        <div className="lb" role="dialog" aria-modal="true" onClick={() => setOpen(null)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={cur.src} alt={cur.caption} onClick={(e) => e.stopPropagation()} />
          <p className="lb-cap">{cur.caption}</p>
          <button type="button" className="lb-x" onClick={() => setOpen(null)} aria-label="关闭">✕</button>
          <button type="button" className="lb-p" onClick={(e) => { e.stopPropagation(); move(-1); }} aria-label="上一张">←</button>
          <button type="button" className="lb-n" onClick={(e) => { e.stopPropagation(); move(1); }} aria-label="下一张">→</button>
        </div>
      )}
    </>
  );
}
