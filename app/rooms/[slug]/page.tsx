import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { rooms } from "@/lib/data";
import Placeholder from "@/components/Placeholder";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return rooms.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const room = rooms.find((r) => r.slug === slug);
  return { title: room?.name ?? "房型" };
}

export default async function RoomDetail({ params }: Props) {
  const { slug } = await params;
  const room = rooms.find((r) => r.slug === slug);
  if (!room) notFound();

  return (
    <div className="container section detail">
      <Placeholder hue={room.hue} label={room.name} className="detail-img" />
      <div>
        <p className="tag">{room.type}</p>
        <h1>{room.name}</h1>
        <p className="muted">{room.summary}</p>
        <p className="meta">{room.size}㎡ · 宜住 {room.guests} 人 · {room.bed}</p>
        <ul className="features">
          {room.features.map((f) => <li key={f}>{f}</li>)}
        </ul>
        <p className="price big">¥{room.price}<small> 起 / 晚</small></p>
        <Link href={`/booking?room=${room.slug}`} className="btn">预订此房型</Link>
      </div>
    </div>
  );
}
