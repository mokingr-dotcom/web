import Link from "next/link";
import { site, zones, playSpots, events } from "@/lib/data";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";
import IndexList from "@/components/IndexList";
import ParallaxBg from "@/components/ParallaxBg";
import BandBg from "@/components/BandBg";
import Gallery3 from "@/components/Gallery3";
import { findImage } from "@/lib/images";

function Band({
  slot,
  eyebrow,
  title,
  desc,
  href,
  cta,
}: {
  slot: string;
  eyebrow: string;
  title: string;
  desc: string;
  href: string;
  cta: string;
}) {
  const src = findImage(slot);
  return (
    <section className="band">
      {src ? <BandBg src={src} /> : <div className="band-bg band-empty" />}
      <div className="band-shade" />
      <Reveal className="band-cap">
        <p className="eyebrow light">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{desc}</p>
        <Link href={href} className="line-link">{cta}</Link>
      </Reveal>
    </section>
  );
}

export default function Home() {
  const heroImg = findImage("hero");
  return (
    <>
      <section className="hero">
        {heroImg ? (
          <>
            <ParallaxBg src={heroImg} />
            <div className="hero-shade" />
          </>
        ) : (
          <div className="hero-sky" />
        )}
        <div className="hero-in">
          <p className="hero-kicker">BEIJING · TONGZHOU · GRAND CANAL</p>
          <h1>千帆集</h1>
          <p className="hero-sub">文化艺术共创园</p>
          <Link href="/booking" className="btn-line">预订咨询</Link>
        </div>
        <a href="#intro" className="scroll-cue" aria-label="向下滚动"><span /></a>
      </section>

      <section className="manifesto" id="intro">
        <Reveal>
          <p className="eyebrow">ABOUT</p>
          <h2>{site.tagline}</h2>
          <p className="mf-body">
            位于大运河畔马头村的 {site.area}徽派京郊微度假目的地。白墙黑瓦的诗意居住，吃喝玩乐购的一站式体验，让心灵在这里微度假。
          </p>
          <p className="mf-meta">{site.area}　·　{site.openedAt}开园　·　大运河畔马头村</p>
        </Reveal>
      </section>

      <nav className="zonebar" aria-label="园区板块">
        {zones.map((z) => (
          <Link key={z.key} href={z.href}>
            <span className="zb-glyph">{z.icon}</span>
            <span className="zb-label">{z.title}</span>
          </Link>
        ))}
      </nav>

      <Band
        slot="band-stay"
        eyebrow="STAY · 住"
        title="枕着运河，住进徽派庭院"
        desc="保留经典马头墙与青砖黛瓦，内部是现代舒适的居住体验。"
        href="/rooms"
        cta="查看房型"
      />

      <section className="dark-panel">
        <div className="container">
          <Reveal>
            <SectionHead light no="PLAY · 玩" title="玩在千帆集" sub="从孩子的萌宠乐园，到大人的森林与星空。" href="/play" more="全部项目" />
          </Reveal>
          <IndexList light spots={playSpots.slice(0, 6)} />
        </div>
      </section>

      <Band
        slot="band-dine"
        eyebrow="DINE · 吃"
        title="吃在码头"
        desc="运河铁锅炖、特色砂锅与墨脱石锅菜；Sharklāka 咖啡厅与“渡”牌啤酒。"
        href="/dining"
        cta="餐饮详情"
      />

      <section className="container section">
        <Gallery3
          cols={2}
          items={[
            { slot: "spot-village-cafe", label: "Sharklāka 咖啡厅", eyebrow: "CAFÉ", title: "Sharklāka 咖啡厅", desc: "原木基底融合徽派院落美学，暖光卡座。" },
            { slot: "dining-1", label: "宴客长桌包间", eyebrow: "PRIVATE ROOM", title: "宴客长桌包间", desc: "木梁、蓝窗帘与整块石面的长桌。" },
          ]}
        />
      </section>

      <section className="night">
        <div className="stars" aria-hidden="true" />
        <div className="container section night-in">
          <Reveal>
            <p className="eyebrow light">NIGHT · 夜</p>
            <h2>夜里，是另一个千帆集</h2>
            <p>低光污染、视野开阔，是北京近郊的观星点位；草地上的露天星空巨幕，篝火与音乐。</p>
            <Link href="/play#events" className="btn-line">夜游与活动</Link>
          </Reveal>
        </div>
      </section>

      <section className="container section">
        <Reveal><SectionHead no="EVENTS · 活动" title="近期与持续活动" /></Reveal>
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
      </section>

      <section className="cta">
        <div className="cta-bg" />
        <div className="container">
          <Reveal>
            <p className="eyebrow light">VISIT · 到访</p>
            <h2>周末，来马头村看千帆</h2>
            <Link href="/booking" className="btn-line">预订咨询</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
