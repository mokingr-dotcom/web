import Link from "next/link";
import { site } from "@/lib/data";

const nav = [
  { href: "/dining", label: "餐饮" },
  { href: "/rooms", label: "住宿" },
  { href: "/play", label: "游玩" },
  { href: "/team", label: "团建活动" },
  { href: "/story", label: "千帆故事" },
  { href: "/shop", label: "田园好物" },
  { href: "/contact", label: "联系" },
];

export default function Header() {
  return (
    <header className="header">
      <div className="container header-in">
        <Link href="/" className="logo" aria-label={site.name}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/logo-dark.png" alt={site.short} height={46} />
        </Link>
        <nav className="nav" aria-label="主导航">
          {nav.map((n) => (
            <Link key={n.href} href={n.href}>{n.label}</Link>
          ))}
          <Link href="/booking" className="btn btn-sm">预订咨询</Link>
        </nav>
      </div>
    </header>
  );
}
