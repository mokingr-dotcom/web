import Link from "next/link";

export default function SectionHead({
  no,
  title,
  sub,
  href,
  more,
}: {
  no: string;
  title: string;
  sub?: string;
  href?: string;
  more?: string;
}) {
  return (
    <div className="section-head">
      <div>
        <p className="eyebrow">{no}</p>
        <h2>{title}</h2>
        {sub && <p className="muted">{sub}</p>}
      </div>
      {href && <Link href={href} className="more">{more ?? "查看全部"} →</Link>}
    </div>
  );
}
