import fs from "node:fs";
import path from "node:path";
import { useId } from "react";

const EXTS = ["jpg", "jpeg", "png", "webp"];

// 在 public/images/ 下找 <slot>.jpg|jpeg|png|webp，找不到就显示水墨风示意图。
function findImage(slot?: string) {
  if (!slot) return null;
  for (const ext of EXTS) {
    const file = `${slot}.${ext}`;
    if (fs.existsSync(path.join(process.cwd(), "public", "images", file))) {
      return `/images/${file}`;
    }
  }
  return null;
}

export default function Placeholder({
  hue,
  label,
  slot,
  className = "",
}: {
  hue: number;
  label?: string;
  slot?: string;
  className?: string;
}) {
  const id = useId().replace(/:/g, "");
  const src = findImage(slot);
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={label ?? ""} loading="lazy" className={`ph-img ${className}`} />;
  }
  const sunX = 70 + ((hue * 7) % 260);
  const sailX = 90 + ((hue * 13) % 220);
  return (
    <div className={`ph ${className}`} role="img" aria-label={label ?? "示意图"}>
      <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id={`s${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={`hsl(${hue} 30% 90%)`} />
            <stop offset="1" stopColor={`hsl(${(hue + 20) % 360} 38% 76%)`} />
          </linearGradient>
          <linearGradient id={`w${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={`hsl(${(hue + 10) % 360} 28% 46%)`} />
            <stop offset="1" stopColor={`hsl(${(hue + 10) % 360} 32% 28%)`} />
          </linearGradient>
        </defs>
        <rect width="400" height="250" fill={`url(#s${id})`} />
        <circle cx={sunX} cy="78" r="26" fill="#c4473a" opacity=".85" />
        <path d="M0 150 Q60 110 120 140 T240 130 T400 145 V250 H0Z" fill={`hsl(${hue} 18% 62%)`} opacity=".55" />
        <path d="M0 170 Q80 135 170 160 T330 150 T400 165 V250 H0Z" fill={`hsl(${hue} 22% 42%)`} opacity=".8" />
        <rect y="185" width="400" height="65" fill={`url(#w${id})`} />
        <g stroke="#fff" strokeOpacity=".25" strokeWidth="1">
          <path d="M20 205h60M120 218h90M250 202h70M310 226h60M60 235h50" />
        </g>
        <g transform={`translate(${sailX} 150)`} fill="#f7f1e3">
          <path d="M0 0 L0 -44 L26 -6Z" opacity=".95" />
          <path d="M-4 0 L-4 -34 L-24 -6Z" opacity=".8" />
          <path d="M-16 4 H32 L24 14 H-8Z" fill="#2a2018" />
        </g>
      </svg>
      {label && <span className="ph-label">{label}</span>}
      <span className="ph-note">示意图</span>
    </div>
  );
}
