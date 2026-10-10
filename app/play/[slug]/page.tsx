import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { playSpots, spotSuit } from "@/lib/data";
import { findGallery, findImage } from "@/lib/images";
import BandBg from "@/components/BandBg";
import ProjectGallery from "@/components/ProjectGallery";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return playSpots.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const spot = playSpots.find((s) => s.slug === slug);
  return { title: spot?.title ?? "游玩项目", description: spot?.desc };
}

export default async function SpotDetail({ params }: Props) {
  const { slug } = await params;
  const idx = playSpots.findIndex((s) => s.slug === slug);
  if (idx < 0) notFound();
  const spot = playSpots[idx];
  const prev = playSpots[(idx - 1 + playSpots.length) % playSpots.length];
  const next = playSpots[(idx + 1) % playSpots.length];
  const cover = findImage(`spot-${slug}`) ?? findGallery(`spot-${slug}`)[0] ?? null;
  const facts: [string, string | undefined][] = [
    ["适合", spotSuit[slug]],
    ["开放时间", "待确认"],
    ["票价", "待确认"],
    ["预约方式", "待确认"],
  ];

  return (
    <>
      {cover ? (
        <section className="proj-hero">
          <BandBg src={cover} />
          <div className="band-shade" />
          <div className="proj-hero-cap">
            <p className="eyebrow light">PLAY · 游玩{spot.tag !== "游玩" ? ` · ${spot.tag}` : ""}</p>
            <h1>{spot.title}</h1>
          </div>
        </section>
      ) : (
        <div className="page-title">
          <div className="container">
            <p className="eyebrow">PLAY · 游玩{spot.tag !== "游玩" ? ` · ${spot.tag}` : ""}</p>
            <h1>{spot.title}</h1>
          </div>
        </div>
      )}

      <div className="container section proj-body">
        <p className="lead center">{spot.desc}</p>
        <dl className="facts-table">
          {facts.filter(([, v]) => v).map(([k, v]) => (
            <div key={k}><dt>{k}</dt><dd className={v === "待确认" ? "muted" : ""}>{v}</dd></div>
          ))}
        </dl>
        <p className="center"><Link href="/booking" className="btn">预订咨询</Link></p>
      </div>

      <div className="container section proj-gal-wrap">
        <ProjectGallery prefix={`spot-${slug}`} title={spot.title} />
      </div>

      <nav className="pager" aria-label="上一个 / 下一个项目">
        <Link href={`/play/${prev.slug}`}><span>上一个</span><strong>{prev.title}</strong></Link>
        <Link href="/play" className="pager-all"><span>全部项目</span></Link>
        <Link href={`/play/${next.slug}`} className="pager-next"><span>下一个</span><strong>{next.title}</strong></Link>
      </nav>
    </>
  );
}
