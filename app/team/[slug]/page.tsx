import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { teamPrograms } from "@/lib/data";
import ProjectDetail from "@/components/ProjectDetail";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return teamPrograms.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const t = teamPrograms.find((x) => x.slug === slug);
  return { title: t?.title ?? "团建项目", description: t?.desc };
}

export default async function TeamDetail({ params }: Props) {
  const { slug } = await params;
  const idx = teamPrograms.findIndex((t) => t.slug === slug);
  if (idx < 0) notFound();
  const item = teamPrograms[idx];
  const prev = teamPrograms[(idx - 1 + teamPrograms.length) % teamPrograms.length];
  const next = teamPrograms[(idx + 1) % teamPrograms.length];
  return (
    <ProjectDetail
      eyebrow="TEAM · 团建项目"
      title={item.title}
      desc={item.desc}
      prefix={`team-${slug}`}
      facts={[
        ["适用场景", "企业年会、部门团建、新品发布会、亲子家庭日"],
        ["参与人数", "待确认"],
        ["活动时长", "待确认"],
        ["报价", "待确认，可按需求定制"],
      ]}
      prev={{ href: `/team/${prev.slug}`, title: prev.title }}
      next={{ href: `/team/${next.slug}`, title: next.title }}
      listHref="/team"
      listLabel="全部团建项目"
      ctaLabel="咨询团建方案"
    />
  );
}
