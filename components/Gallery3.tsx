import Link from "next/link";
import Placeholder from "./Placeholder";
import Reveal from "./Reveal";

export type G3Item = {
  slot: string;
  label: string;
  eyebrow?: string;
  title: string;
  desc?: string;
  href?: string;
};

// 等大图片并排、文字居中：对称、稳定。
export default function Gallery3({ items, cols = 3 }: { items: G3Item[]; cols?: 2 | 3 }) {
  return (
    <div className={`tri tri-${cols}`}>
      {items.map((it, i) => {
        const body = (
          <>
            <Reveal className="tri-img" wipe delay={i * 120}>
              <Placeholder label={it.label} slot={it.slot} className="cover" />
            </Reveal>
            <div className="tri-cap">
              {it.eyebrow && <p className="eyebrow">{it.eyebrow}</p>}
              <h3>{it.title}</h3>
              {it.desc && <p className="muted">{it.desc}</p>}
              {it.href && <span className="more">查看详情</span>}
            </div>
          </>
        );
        return it.href ? (
          <Link key={it.slot} href={it.href} className="tri-item">{body}</Link>
        ) : (
          <div key={it.slot} className="tri-item">{body}</div>
        );
      })}
    </div>
  );
}
