import Link from "next/link";
import type { Room } from "@/lib/data";
import Placeholder from "./Placeholder";

export default function RoomCard({ room }: { room: Room }) {
  return (
    <Link href={`/rooms/${room.slug}`} className="card">
      <Placeholder hue={room.hue} label={room.name} slot={`room-${room.slug}`} className="card-img" />
      <div className="card-body">
        <h3>{room.name}</h3>
        <p className="muted">{room.summary}</p>
        <p className="meta">宜住 {room.guests} 人 · {room.bed}</p>
        <p className="price">
          {room.price ? <>¥{room.price}<small> 起 / 晚</small></> : <small>价格请咨询</small>}
        </p>
      </div>
    </Link>
  );
}
