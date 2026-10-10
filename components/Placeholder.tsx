import { findImage } from "@/lib/images";

// 有照片就显示照片；没有则显示克制的“待补充”色块，不放示意插画。
export default function Placeholder({
  label,
  slot,
  className = "",
}: {
  hue?: number;
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
    <div className={`ph ${className}`} role="img" aria-label={label ?? "待补充照片"}>
      {label && <span className="ph-label">{label}</span>}
      <span className="ph-note">待补充照片</span>
    </div>
  );
}
