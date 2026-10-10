import type { Spot } from "@/lib/data";
import Placeholder from "./Placeholder";
import Reveal from "./Reveal";

export default function SpotGrid({
  spots,
  cols = 3,
  shape = "leaf",
}: {
  spots: Spot[];
  cols?: 2 | 3;
  shape?: "leaf" | "arch";
}) {
  return (
    <div className={`grid grid-${cols} stagger`}>
      {spots.map((s, i) => (
        <Reveal key={s.slug} delay={(i % cols) * 100}>
          <article className="card">
            <div className={`card-media shape-${shape}`}>
              <Placeholder hue={s.hue} label={s.title} slot={`spot-${s.slug}`} className={`card-img r-${shape}`} />
            </div>
            <div className="card-body">
              <p className="eyebrow">{String(i + 1).padStart(2, "0")} · {s.tag}</p>
              <h3>{s.title}</h3>
              <p className="muted">{s.desc}</p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
