import Link from "next/link";
import { site, zones, rooms, playSpots, diningSpots, events } from "@/lib/data";
import SpotGrid from "@/components/SpotGrid";
import SectionHead from "@/components/SectionHead";
import Placeholder from "@/components/Placeholder";
import Reveal from "@/components/Reveal";
import HScroll from "@/components/HScroll";
import ParallaxBg from "@/components/ParallaxBg";
import { findImage } from "@/lib/images";

export default function Home() {
  const heroImg = findImage("hero");
  return (
    <>
      <section className={`hero${heroImg ? " has-photo" : ""}`}>
        {heroImg ? (
          <>
            <ParallaxBg src={heroImg} />
            <div className="hero-shade" />
          </>
        ) : (
          <>
            <div className="hero-sky" />
            <div className="hero-sun" />
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
        <a href="#intro" className="scroll-cue" aria-label="向下滚动"><span /></a>
      </section>

      <section className="facts" id="intro">
        <div className="container facts-in">
          <div><strong>{site.area}</strong><span>园区面积</span></div>
          <div><strong>2026.04.27</strong><span>正式开园</span></div>
          <div><strong>吃住玩乐购</strong><span>一站式微度假</span></div>
          <div><strong>徽派京郊</strong><span>大运河畔 · 马头村</span></div>
        </div>
      </section>

      <section className="container section">
        <Reveal>
          <SectionHead no="壹" title="一座园，六种过法" sub="从一顿码头鱼馆的午饭，到星空下的露天电影，一天不够用。" />
        </Reveal>
        <div className="zones">
          {zones.map((z, i) => (
            <Reveal key={z.key} delay={(i % 3) * 90}>
              <Link href={z.href} className="zone">
                <span className="zone-glyph">{z.icon}</span>
                <div>
                  <h3>{z.title}</h3>
                  <p>{z.desc}</p>
                </div>
                <span className="zone-go">→</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="split">
          <Reveal className="split-media">
            <div className="shape-arch">
              <Placeholder hue={30} label="运河徽派庭院" slot="room-huipai-courtyard" className="ratio-34" />
            </div>
            <span className="split-badge">马头墙<br />青砖黛瓦</span>
          </Reveal>
          <Reveal className="split-body" delay={140}>
            <p className="eyebrow">贰 · 住</p>
            <h2>枕着运河，住进徽派庭院</h2>
            <p className="muted">保留经典马头墙与青砖黛瓦，内部是现代舒适的居住体验。推窗即景，家庭出游、朋友聚会都有一个温馨的家。</p>
            <ul className="room-list">
              {rooms.map((r) => (
                <li key={r.slug}>
                  <Link href={`/rooms/${r.slug}`}>
                    <span className="thumb">
                      <Placeholder hue={r.hue} label={r.name} slot={`room-${r.slug}`} />
                    </span>
                    <span className="room-txt"><strong>{r.name}</strong><em>{r.summary}</em></span>
                    <span className="arrow">→</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/rooms" className="more">全部房型 →</Link>
          </Reveal>
        </div>
      </section>

      <section className="paper-alt">
        <div className="container section">
          <Reveal>
            <SectionHead no="叁" title="玩" sub="从孩子的萌宠乐园，到大人的森林与星空。" href="/play" more="全部项目" />
          </Reveal>
          <HScroll>
            {playSpots.map((s, i) => (
              <article key={s.slug} className="arch-card">
                <div className="shape-arch">
                  <Placeholder hue={s.hue} label={s.title} slot={`spot-${s.slug}`} className="ratio-34" />
                </div>
                <p className="eyebrow">{String(i + 1).padStart(2, "0")} · {s.tag}</p>
                <h3>{s.title}</h3>
                <p className="muted">{s.desc}</p>
              </article>
            ))}
          </HScroll>
        </div>
      </section>

      <section className="night">
        <div className="stars" aria-hidden="true" />
        <div className="container section night-in">
          <Reveal>
            <p className="eyebrow light">肆 · 夜</p>
            <h2>夜里，是另一个千帆集</h2>
            <p>低光污染、视野开阔，是北京近郊的观星点位；草地上的露天星空巨幕，篝火与音乐，慢慢熬过一个夜晚。</p>
            <Link href="/play#events" className="btn btn-ghost">夜游与活动</Link>
          </Reveal>
        </div>
      </section>

      <section className="container section">
        <Reveal>
          <SectionHead no="伍" title="吃 · 在码头" sub="码头鱼馆、Sharklāka 咖啡厅、“渡”牌啤酒。" href="/dining" more="餐饮详情" />
        </Reveal>
        <SpotGrid spots={diningSpots.slice(0, 3)} />
      </section>

      <section className="paper-alt">
        <div className="container section">
          <Reveal><SectionHead no="陆" title="近期与持续活动" /></Reveal>
          <ul className="timeline">
            {events.map((e, i) => (
              <Reveal key={e.title} delay={i * 80}>
                <li>
                  <span className="t-time">{e.time}</span>
                  <div><strong>{e.title}</strong><p className="muted">{e.desc}</p></div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="container section">
        <Reveal>
          <div className="shop-banner">
            <div>
              <p className="eyebrow light">购 · 筹备中</p>
              <h2>把田园带回家</h2>
              <p>龅牙薯文创、时令蔬果、会员套餐，即将上线。</p>
            </div>
            <Link href="/shop" className="btn btn-light">了解更多</Link>
          </div>
        </Reveal>
      </section>

      <section className="cta">
        <div className="container">
          <Reveal>
            <h2>周末，来马头村看千帆</h2>
            <Link href="/booking" className="btn btn-light">预订咨询</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
