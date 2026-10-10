import Link from "next/link";
import Placeholder from "./Placeholder";
import Reveal from "./Reveal";

// 大图 + 文字交错排列，奇偶行左右互换。
export default function FeatureRow({
  index,
  slot,
  label,
  eyebrow,
  title,
  desc,
  meta,
  href,
  cta = "查看详情",
}: {
  index: number;
  slot: string;
  label: string;
  eyebrow: string;
  title: string;
  desc: string;
  meta?: string;
  href?: string;
  cta?: string;
}) {
  return (
    <article className={`feature ${index % 2 ? "rev" : ""}`}>
      <Reveal className="feature-img" wipe>
        <div className="frame">
          <Placeholder label={label} slot={slot} className="cover" />
        </div>
      </Reveal>
      <Reveal className="feature-body" delay={160}>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p className="lead-sm">{desc}</p>
        {meta && <p className="meta">{meta}</p>}
        {href && <Link href={href} className="more">{cta} →</Link>}
      </Reveal>
    </article>
  );
}
