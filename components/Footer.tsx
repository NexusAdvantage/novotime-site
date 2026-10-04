import Link from "next/link";
import { SITE, NAV_LEFT, NAV_RIGHT } from "@/content/site";

export function Footer() {
  const a = SITE.address;
  return (
    <footer className="site-footer">
      <div className="w">
        <div className="fgrid">
          <div>
            <Link className="mark" href="/">Novo<i>Time</i></Link>
            <p style={{ marginTop: 14 }}>{SITE.tagline}</p>
          </div>
          <div>
            {[...NAV_LEFT, ...NAV_RIGHT].map((n) => <Link key={n.href} href={n.href}>{n.label}</Link>)}
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
          <div>
            {a.street}<br />{a.city}, {a.regionLong} {a.zip}<br /><br />
            <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </div>
        </div>
        <p className="legal">{SITE.compliance}<br /><br />&copy; {SITE.legalName} {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
