import Link from "next/link";
import { site, rooms, attractions, highlights, gallery } from "@/lib/data";
import RoomCard from "@/components/RoomCard";
import Placeholder from "@/components/Placeholder";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>{site.name}</h1>
          <p className="hero-sub">{site.tagline}</p>
          <div className="hero-cta">
            <Link href="/booking" className="btn">立即预订</Link>
            <Link href="/park" className="btn btn-ghost">探索园区</Link>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="grid grid-4">
          {highlights.map((h) => (
            <div key={h.title} className="highlight">
              <h3>{h.title}</h3>
              <p className="muted">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="section-head">
          <h2>精选住宿</h2>
          <Link href="/rooms">查看全部 →</Link>
        </div>
        <div className="grid grid-2">
          {rooms.slice(0, 4).map((r) => <RoomCard key={r.slug} room={r} />)}
        </div>
      </section>

      <section className="band">
        <div className="container section">
          <div className="section-head">
            <h2>园区玩乐</h2>
            <Link href="/park">了解更多 →</Link>
          </div>
          <div className="grid grid-3">
            {attractions.slice(0, 3).map((a) => (
              <div key={a.title} className="card">
                <Placeholder hue={a.hue} label={a.tag} className="card-img" />
                <div className="card-body">
                  <h3>{a.title}</h3>
                  <p className="muted">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="section-head">
          <h2>影像</h2>
          <Link href="/gallery">更多图集 →</Link>
        </div>
        <div className="grid grid-3 gallery-mini">
          {gallery.slice(0, 3).map((g) => (
            <Placeholder key={g.id} hue={g.hue} label={g.caption} className="g-item" />
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>准备好出发了吗？</h2>
          <Link href="/booking" className="btn">提交预订 / 询价</Link>
        </div>
      </section>
    </>
  );
}
