import fs from "node:fs";
import path from "node:path";

const EXTS = ["jpg", "jpeg", "png", "webp"];

// 在 public/images/ 下找 <slot>.jpg|jpeg|png|webp，找不到就显示渐变占位。
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
  const src = findImage(slot);
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={label ?? ""} loading="lazy" className={`ph-img ${className}`} />;
  }
  return (
    <div
      className={`ph ${className}`}
      style={{
        background: `linear-gradient(135deg, hsl(${hue} 45% 62%), hsl(${(hue + 40) % 360} 50% 35%))`,
      }}
      role="img"
      aria-label={label ?? "图片占位"}
    >
      {label && <span>{label}</span>}
    </div>
  );
}
