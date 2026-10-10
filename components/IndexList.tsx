import type { Spot } from "@/lib/data";
import Reveal from "./Reveal";

// 文字索引列表：没有照片时比卡通占位图更高级，也方便以后逐项换成图片。
export default function IndexList({ spots }: { spots: Spot[] }) {
  return (
    <ol className="index-list">
      {spots.map((s, i) => (
        <Reveal key={s.slug} delay={Math.min(i, 4) * 60}>
          <li>
            <span className="ix-no">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="ix-title">{s.title}</h3>
            <span className="ix-tag">{s.tag}</span>
            <p className="ix-desc">{s.desc}</p>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
