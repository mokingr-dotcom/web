import type { Metadata } from "next";
import { rooms } from "@/lib/data";
import RoomCard from "@/components/RoomCard";

export const metadata: Metadata = { title: "客房民宿" };

export default function RoomsPage() {
  const hotel = rooms.filter((r) => r.type === "酒店");
  const bnb = rooms.filter((r) => r.type === "民宿");
  return (
    <div className="container section">
      <h1>客房与民宿</h1>
      <h2 className="sub">精品酒店</h2>
      <div className="grid grid-2">{hotel.map((r) => <RoomCard key={r.slug} room={r} />)}</div>
      <h2 className="sub">特色民宿</h2>
      <div className="grid grid-2">{bnb.map((r) => <RoomCard key={r.slug} room={r} />)}</div>
    </div>
  );
}
