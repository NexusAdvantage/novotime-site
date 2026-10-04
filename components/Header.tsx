import Link from "next/link";
import { NAV_LEFT, NAV_RIGHT, CTA } from "@/content/site";

export function Header() {
  return (
    <header className="site-header">
      <div className="w masthead">
        <nav className="nav l" aria-label="Primary">
          {NAV_LEFT.map((n) => (
            <Link key={n.href} href={n.href}>{n.label}</Link>
          ))}
        </nav>
        <Link className="mark" href="/" aria-label="NovoTime home">
          Novo<i>Time</i>
        </Link>
        <nav className="nav r" aria-label="Secondary">
          {NAV_RIGHT.map((n) => (
            <Link key={n.href} href={n.href}>{n.label}</Link>
          ))}
          <Link className="btn-outline" href={CTA.href}>{CTA.label}</Link>
        </nav>
      </div>
      <div className="w"><div className="total" /></div>
    </header>
  );
}
