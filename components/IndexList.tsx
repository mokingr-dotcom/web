import Link from "next/link";
import type { Spot } from "@/lib/data";
import Reveal from "./Reveal";

// 文字索引列表。传入 base（如 "/play"）时每一行可点击进入详情页。
export default function IndexList({
  spots,
  light = false,
  base,
}: {
  spots: Spot[];
  light?: boolean;
  base?: string;
}) {
  return (
    <ol className={`index-list${light ? " light" : ""}`}>
      {spots.map((s, i) => {
        const row = (
          <>
            <span className="ix-no">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="ix-title">{s.title}</h3>
            <span className="ix-tag">{s.tag}</span>
            <p className="ix-desc">{s.desc}</p>
            {base && <span className="ix-go" aria-hidden="true">→</span>}
          </>
        );
        return (
          <Reveal key={s.slug} delay={Math.min(i, 4) * 60}>
            <li>
              {base ? (
                <Link href={`${base}/${s.slug}`} className="ix-row has-go">{row}</Link>
              ) : (
                <div className="ix-row">{row}</div>
              )}
            </li>
          </Reveal>
        );
      })}
    </ol>
  );
}
