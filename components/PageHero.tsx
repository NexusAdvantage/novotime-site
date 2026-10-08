import Link from "next/link";
import type { ReactNode } from "react";
import { Header } from "./Header";
import { CTA } from "@/content/site";

/** Inner page hero. Same composition as the home hero (centered H1, gold rule, lead, foil button), shorter. */
export function PageHero({ title, lead, ctaHref }: { title: ReactNode; lead?: string; ctaHref?: string }) {
  const href = ctaHref ?? CTA.href;
  return (
    <section className="hero page-hero">
      <Header ctaHref={ctaHref} />
      <div className="w hero-inner ph-inner">
        <h1>{title}</h1>
        <div className="goldrule" />
        {lead && <p className="hero-lead">{lead}</p>}
        <Link className="btn-foil" href={href}>{CTA.label}</Link>
      </div>
    </section>
  );
}
