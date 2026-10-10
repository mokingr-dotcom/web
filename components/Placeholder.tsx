// 占位图：上线前把它换成 next/image + 真实照片。
export default function Placeholder({
  hue,
  label,
  className = "",
}: {
  hue: number;
  label?: string;
  className?: string;
}) {
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
