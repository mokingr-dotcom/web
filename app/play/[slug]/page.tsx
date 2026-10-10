import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { playSpots, spotSuit } from "@/lib/data";
import ProjectDetail from "@/components/ProjectDetail";

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
  return (
    <ProjectDetail
      eyebrow={`PLAY · 游玩${spot.tag !== "游玩" ? ` · ${spot.tag}` : ""}`}
      title={spot.title}
      desc={spot.desc}
      prefix={`spot-${slug}`}
      facts={[
        ["适合", spotSuit[slug]],
        ["开放时间", "待确认"],
        ["票价", "待确认"],
        ["预约方式", "待确认"],
      ]}
      prev={{ href: `/play/${prev.slug}`, title: prev.title }}
      next={{ href: `/play/${next.slug}`, title: next.title }}
      listHref="/play"
      listLabel="全部项目"
    />
  );
}
