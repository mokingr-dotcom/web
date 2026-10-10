import Link from "next/link";
import { site, zones, rooms, playSpots, diningSpots, events } from "@/lib/data";
import RoomCard from "@/components/RoomCard";
import SpotGrid from "@/components/SpotGrid";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="hero-kicker">北京 · 通州 · 马头村</p>
          <h1>{site.name}</h1>
          <p className="hero-sub">{site.tagline}</p>
          <p className="hero-sub small">{site.area}农文商旅综合体 · 古村 + 运河 + 田园</p>
          <div className="hero-cta">
            <Link href="/booking" className="btn">预订咨询</Link>
            <Link href="/play" className="btn btn-ghost">看看玩什么</Link>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="grid grid-3">
          {zones.map((z) => (
            <Link key={z.key} href={z.href} className="zone">
              <span className="zone-icon">{z.icon}</span>
              <div>
                <h3>{z.title}</h3>
                <p className="muted">{z.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="band">
        <div className="container section">
          <div className="section-head"><h2>热门游玩</h2><Link href="/play">全部项目 →</Link></div>
          <SpotGrid spots={playSpots.slice(0, 3)} />
        </div>
      </section>

      <section className="container section">
        <div className="section-head"><h2>吃在码头</h2><Link href="/dining">餐饮详情 →</Link></div>
        <SpotGrid spots={diningSpots} />
      </section>

      <section className="band">
        <div className="container section">
          <div className="section-head"><h2>徽派民宿</h2><Link href="/rooms">全部房型 →</Link></div>
          <div className="grid grid-3">
            {rooms.map((r) => <RoomCard key={r.slug} room={r} />)}
          </div>
        </div>
      </section>

      <section className="container section">
        <h2>近期与持续活动</h2>
        <ul className="activities">
          {events.map((e) => (
            <li key={e.title}><span>{e.time}</span><div><strong>{e.title}</strong><p className="muted">{e.desc}</p></div></li>
          ))}
        </ul>
      </section>

      <section className="cta">
        <div className="container">
          <h2>周末，来马头村看千帆</h2>
          <Link href="/booking" className="btn">预订咨询</Link>
        </div>
      </section>
    </>
  );
}
