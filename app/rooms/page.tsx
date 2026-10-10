import type { Metadata } from "next";
import { rooms } from "@/lib/data";
import RoomCard from "@/components/RoomCard";

export const metadata: Metadata = { title: "住宿" };

export default function RoomsPage() {
  return (
    <div className="container section">
      <h1>徽派民宿</h1>
      <p className="muted">房型与价格待确认，以下为示例。</p>
      <div className="grid grid-3">{rooms.map((r) => <RoomCard key={r.slug} room={r} />)}</div>
    </div>
  );
}
