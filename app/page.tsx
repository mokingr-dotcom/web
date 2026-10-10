import Link from "next/link";
import { site, zones, rooms, playSpots, diningSpots, events } from "@/lib/data";
import RoomCard from "@/components/RoomCard";
import SpotGrid from "@/components/SpotGrid";
import SectionHead from "@/components/SectionHead";
import { findImage } from "@/lib/images";

export default function Home() {
  const heroImg = findImage("hero");
  return (
    <>
      <section className={`hero${heroImg ? " has-photo" : ""}`}>
        {heroImg ? (
          <>
            <div className="hero-photo" style={{ backgroundImage: `url(${heroImg})` }} />
            <div className="hero-shade" />
          </>
        ) : (
          <>
            <div className="hero-sky" />
            <div className="hero-sun" />
            <svg className="hero-hills" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 200 Q180 120 360 180 T720 150 T1080 190 T1440 140 V320 H0Z" fill="#4a382b" opacity=".55" />
              <path d="M0 240 Q240 170 480 220 T960 200 T1440 230 V320 H0Z" fill="#33261c" />
            </svg>
          </>
        )}
        <div className="container hero-in">
          <p className="hero-kicker">北京 · 通州 · 大运河畔马头村</p>
          <h1>千帆集<span>文化艺术共创园</span></h1>
          <p className="hero-sub">{site.area}徽派京郊微度假目的地　{site.tagline}</p>
          <div className="hero-cta">
            <Link href="/booking" className="btn btn-light">预订咨询</Link>
            <Link href="/play" className="btn btn-ghost">看看玩什么</Link>
          </div>
          <p className="hero-vertical" aria-label={site.slogan}>{site.slogan}</p>
        </div>
      </section>

      <section className="facts">
        <div className="container facts-in">
          <div><strong>{site.area}</strong><span>园区面积</span></div>
          <div><strong>2026.04.27</strong><span>正式开园</span></div>
          <div><strong>吃住玩乐购</strong><span>一站式微度假</span></div>
          <div><strong>徽派京郊</strong><span>大运河畔 · 马头村</span></div>
        </div>
      </section>

      <section className="container section">
        <SectionHead no="壹" title="一座园，六种过法" sub="从一顿码头鱼馆的午饭，到星空下的露天电影，一天不够用。" />
        <div className="zones">
          {zones.map((z) => (
            <Link key={z.key} href={z.href} className="zone">
              <span className="zone-glyph">{z.icon}</span>
              <div>
                <h3>{z.title}</h3>
                <p>{z.desc}</p>
              </div>
              <span className="zone-go">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="paper-alt">
        <div className="container section">
          <SectionHead no="贰" title="玩" sub="彩虹滑道、小火车，孩子最爱的一天。" href="/play" more="全部项目" />
          <SpotGrid spots={playSpots.slice(0, 3)} />
        </div>
      </section>

      <section className="container section">
        <SectionHead no="叁" title="住 · 运河徽派庭院" sub="马头墙、青砖黛瓦，推窗是田园。" href="/rooms" more="全部房型" />
        <div className="grid grid-3">
          {rooms.map((r) => <RoomCard key={r.slug} room={r} />)}
        </div>
      </section>

      <section className="night">
        <div className="stars" aria-hidden="true" />
        <div className="container section night-in">
          <p className="eyebrow light">肆 · 夜</p>
          <h2>夜里，是另一个千帆集</h2>
          <p>低光污染、视野开阔，是北京近郊的观星点位；草地上的露天影音，围炉煮茶，慢慢熬过一个夜晚。</p>
          <Link href="/play#events" className="btn btn-ghost">夜游与活动</Link>
        </div>
      </section>

      <section className="container section">
        <SectionHead no="伍" title="吃 · 在码头" sub="码头鱼馆、Sharklāka 咖啡厅、“渡”牌啤酒。" href="/dining" more="餐饮详情" />
        <SpotGrid spots={diningSpots.slice(0, 3)} />
      </section>

      <section className="paper-alt">
        <div className="container section">
          <SectionHead no="陆" title="近期与持续活动" />
          <ul className="timeline">
            {events.map((e) => (
              <li key={e.title}>
                <span className="t-time">{e.time}</span>
                <div><strong>{e.title}</strong><p className="muted">{e.desc}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container section">
        <div className="shop-banner">
          <div>
            <p className="eyebrow light">购 · 筹备中</p>
            <h2>把田园带回家</h2>
            <p>龅牙薯文创、时令蔬果、会员套餐，即将上线。</p>
          </div>
          <Link href="/shop" className="btn btn-light">了解更多</Link>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>周末，来马头村看千帆</h2>
          <Link href="/booking" className="btn btn-light">预订咨询</Link>
        </div>
      </section>
    </>
  );
}
