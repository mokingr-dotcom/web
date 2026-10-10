import type { Spot } from "@/lib/data";
import Placeholder from "./Placeholder";

export default function SpotGrid({ spots }: { spots: Spot[] }) {
  return (
    <div className="grid grid-3">
      {spots.map((s) => (
        <div key={s.slug} className="card">
          <Placeholder hue={s.hue} label={s.tag} className="card-img" />
          <div className="card-body">
            <h3>{s.title}</h3>
            <p className="muted">{s.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
