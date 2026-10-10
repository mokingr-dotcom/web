import type { Spot } from "@/lib/data";
import Placeholder from "./Placeholder";

export default function SpotGrid({ spots, cols = 3 }: { spots: Spot[]; cols?: 2 | 3 }) {
  return (
    <div className={`grid grid-${cols}`}>
      {spots.map((s, i) => (
        <article key={s.slug} className="card">
          <div className="card-media">
            <Placeholder hue={s.hue} label={s.title} slot={`spot-${s.slug}`} className="card-img" />
          </div>
          <div className="card-body">
            <p className="eyebrow">{String(i + 1).padStart(2, "0")} · {s.tag}</p>
            <h3>{s.title}</h3>
            <p className="muted">{s.desc}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
