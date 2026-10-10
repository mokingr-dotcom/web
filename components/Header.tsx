import Link from "next/link";
import { site } from "@/lib/data";

const nav = [
  { href: "/rooms", label: "客房民宿" },
  { href: "/park", label: "园区游玩" },
  { href: "/gallery", label: "图集" },
  { href: "/contact", label: "联系我们" },
];

export default function Header() {
  return (
    <header className="header">
      <div className="container header-in">
        <Link href="/" className="logo">{site.name}</Link>
        <nav className="nav" aria-label="主导航">
          {nav.map((n) => (
            <Link key={n.href} href={n.href}>{n.label}</Link>
          ))}
          <Link href="/booking" className="btn btn-sm">立即预订</Link>
        </nav>
      </div>
    </header>
  );
}
