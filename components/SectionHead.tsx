import Link from "next/link";

export default function SectionHead({
  no,
  title,
  sub,
  href,
  more,
  light = false,
}: {
  no: string;
  title: string;
  sub?: string;
  href?: string;
  more?: string;
  light?: boolean;
}) {
  return (
    <div className={`section-head${light ? " light" : ""}`}>
      <p className="eyebrow">{no}</p>
      <h2>{title}</h2>
      {sub && <p className="sh-sub">{sub}</p>}
      {href && <Link href={href} className="more">{more ?? "查看全部"}</Link>}
    </div>
  );
}
