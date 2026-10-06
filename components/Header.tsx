import Link from "next/link";
import { NAV_LEFT, NAV_RIGHT, CTA } from "@/content/site";
import { SERVICES } from "@/content/services";

function Caret() {
  return (
    <svg className="caret" width="10" height="6" viewBox="0 0 10 6" aria-hidden="true">
      <path d="M1 1l4 4l4-4" fill="none" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export function Header({ ctaHref = CTA.href }: { ctaHref?: string }) {
  return (
    <header className="site-header">
      <div className="w masthead">
        <nav className="nav l" aria-label="Primary">
          {NAV_LEFT.map((n) =>
            n.label === "Services" ? (
              <div className="dd" key={n.href}>
                <Link href={n.href} className="dd-top">{n.label}<Caret /></Link>
                <div className="dd-panel dd-mega">
                  <div className="dd-grid">
                    {SERVICES.map((s) => (
                      <Link key={s.slug} href={`/services/${s.slug}`} className="dd-svc">
                        {s.iconImage && <img src={s.iconImage} alt="" />}
                        <span>{s.title}</span>
                      </Link>
                    ))}
                  </div>
                  <Link href="/services" className="dd-all">View All Services <span aria-hidden="true">&rarr;</span></Link>
                </div>
              </div>
            ) : n.children ? (
              <div className="dd" key={n.href}>
                <Link href={n.href} className="dd-top">{n.label}<Caret /></Link>
                <div className="dd-panel dd-list">
                  {n.children.map((c) => <Link key={c.href} href={c.href}>{c.label}</Link>)}
                </div>
              </div>
            ) : (
              <Link key={n.href} href={n.href}>{n.label}</Link>
            )
          )}
        </nav>
        <Link className="mark" href="/" aria-label="NovoTime home">
          Novo<i>Time</i>
        </Link>
        <nav className="nav r" aria-label="Secondary">
          <Link className="btn-outline" href={ctaHref}>{CTA.label}</Link>
          <details className="mnav">
            <summary aria-label="Menu"><span /><span /><span /></summary>
            <div className="mnav-panel">
              <Link href="/">Home</Link>
              <Link href="/#what-we-do">What We Do</Link>
              <Link href="/services">Services</Link>
              <div className="mnav-sub">
                {SERVICES.map((s) => <Link key={s.slug} href={`/services/${s.slug}`}>{s.title}</Link>)}
              </div>
              <Link href="/about">About</Link>
              {NAV_RIGHT.map((n) => <Link key={n.href} href={n.href}>{n.label}</Link>)}
            </div>
          </details>
        </nav>
      </div>
      <div className="w"><div className="total" /></div>
    </header>
  );
}
