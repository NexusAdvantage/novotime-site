import Link from "next/link";
import type { ReactNode } from "react";
import { Header } from "./Header";

type Crumb = { label: string; href?: string };

export function PageHero({
  kicker,
  title,
  lead,
  crumbs,
  aside,
  ctaHref,
}: {
  kicker?: string;
  title: ReactNode;
  lead?: string;
  crumbs?: Crumb[];
  aside?: ReactNode;
  ctaHref?: string;
}) {
  return (
    <section className="hero page-hero">
      <Header ctaHref={ctaHref} />
      <div className={`w ph-inner${aside ? " ph-split" : ""}`}>
        <div className="ph-text">
          {crumbs && (
            <nav className="crumbs" aria-label="Breadcrumb">
              {crumbs.map((c, i) => (
                <span key={c.label}>
                  {c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
                  {i < crumbs.length - 1 && <i aria-hidden="true">/</i>}
                </span>
              ))}
            </nav>
          )}
          {kicker && <span className="kicker kicker-light">{kicker}</span>}
          <h1>{title}</h1>
          <div className="goldrule ph-rule" />
          {lead && <p className="ph-lead">{lead}</p>}
        </div>
        {aside && <div className="ph-aside">{aside}</div>}
      </div>
    </section>
  );
}
