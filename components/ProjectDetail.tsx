import Link from "next/link";
import { findGallery, findImage } from "@/lib/images";
import BandBg from "./BandBg";
import ProjectGallery from "./ProjectGallery";

export type Facts = [string, string | undefined][];

// 项目详情页（游玩、团建等共用）：顶图、要点表、图集（点击放大）、上一个 / 下一个。
export default function ProjectDetail({
  eyebrow,
  title,
  desc,
  prefix,
  facts,
  prev,
  next,
  listHref,
  listLabel,
  ctaLabel = "预订咨询",
}: {
  eyebrow: string;
  title: string;
  desc: string;
  prefix: string; // 图片前缀，如 spot-rainbow-slide / team-ironpot
  facts: Facts;
  prev: { href: string; title: string };
  next: { href: string; title: string };
  listHref: string;
  listLabel: string;
  ctaLabel?: string;
}) {
  const cover = findImage(prefix) ?? findGallery(prefix)[0] ?? null;
  return (
    <>
      {cover ? (
        <section className="proj-hero">
          <BandBg src={cover} />
          <div className="band-shade" />
          <div className="proj-hero-cap">
            <p className="eyebrow light">{eyebrow}</p>
            <h1>{title}</h1>
          </div>
        </section>
      ) : (
        <div className="page-title">
          <div className="container">
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
          </div>
        </div>
      )}

      <div className="container section proj-body">
        <p className="lead center">{desc}</p>
        <dl className="facts-table">
          {facts.filter(([, v]) => v).map(([k, v]) => (
            <div key={k}><dt>{k}</dt><dd className={v === "待确认" ? "muted" : ""}>{v}</dd></div>
          ))}
        </dl>
        <p className="center"><Link href="/booking" className="btn">{ctaLabel}</Link></p>
      </div>

      <div className="container section proj-gal-wrap">
        <ProjectGallery prefix={prefix} title={title} />
      </div>

      <nav className="pager" aria-label="上一个 / 下一个">
        <Link href={prev.href}><span>上一个</span><strong>{prev.title}</strong></Link>
        <Link href={listHref} className="pager-all"><span>{listLabel}</span></Link>
        <Link href={next.href} className="pager-next"><span>下一个</span><strong>{next.title}</strong></Link>
      </nav>
    </>
  );
}
