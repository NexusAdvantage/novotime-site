import Link from "next/link";
import { SITE } from "@/content/site";
import { SERVICES } from "@/content/services";

const COMPANY = [
  { label: "Home", href: "/" },
  { label: "Our Approach", href: "/approach" },
  { label: "Our Story", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const a = SITE.address;
  return (
    <footer className="site-footer">
      <div className="w">
        <div className="fmap">
          <div className="fbrand">
            <Link className="mark" href="/">Novo<i>Time</i></Link>
            <p>{SITE.tagline}</p>
            <Link className="btn-outline fcta" href="/contact#book">Book a Discovery Meeting</Link>
          </div>

          <nav className="fcol fcol-svc" aria-label="Services">
            <h3><Link href="/services">Services</Link></h3>
            <div className="fsvc">
              {SERVICES.map((s) => <Link key={s.slug} href={`/services/${s.slug}`}>{s.title}</Link>)}
            </div>
          </nav>

          <nav className="fcol" aria-label="Company">
            <h3>Company</h3>
            {COMPANY.map((n) => <Link key={n.href} href={n.href}>{n.label}</Link>)}
            <Link href="/privacy-policy">Privacy Policy</Link>
          </nav>

          <div className="fcol">
            <h3>Visit the Office</h3>
            <p>{a.street}<br />{a.city}, {a.regionLong} {a.zip}</p>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </div>
        </div>
        <div className="fbase">
          <p className="legal">{SITE.compliance}</p>
          <p className="fcopy">&copy; {SITE.legalName} {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
