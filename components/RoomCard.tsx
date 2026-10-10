import Link from "next/link";
import type { Room } from "@/lib/data";
import Placeholder from "./Placeholder";

export default function RoomCard({ room }: { room: Room }) {
  return (
    <Link href={`/rooms/${room.slug}`} className="card">
      <div className="card-media shape-arch">
        <Placeholder hue={room.hue} label={room.name} slot={`room-${room.slug}`} className="card-img r-arch" />
      </div>
      <div className="card-body">
        <p className="eyebrow">{room.type} · 宜住 {room.guests} 人</p>
        <h3>{room.name}</h3>
        <p className="muted">{room.summary}</p>
        <p className="price">
          {room.price ? <>¥{room.price}<small> 起 / 晚</small></> : <small>价格请咨询</small>}
          <span className="arrow">→</span>
        </p>
      </div>
    </Link>
  );
}
