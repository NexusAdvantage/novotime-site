import Link from "next/link";
import type { ReactNode } from "react";
import { Header } from "./Header";
import { CTA } from "@/content/site";

/**
 * Inner page hero. Same composition, height and entrance as the home hero.
 * `mark` is the page's icon, drawn large in a darker navy behind the text, so each page has its own shape.
 */
export function PageHero({ title, lead, ctaHref, mark }: { title: ReactNode; lead?: string; ctaHref?: string; mark?: string }) {
  const href = ctaHref ?? CTA.href;
  return (
    <section className="hero page-hero" style={mark ? { ["--mark" as string]: `url("${encodeURI(mark)}")` } : undefined}>
      {mark && <span className="ph-mark" aria-hidden="true" />}
      <Header ctaHref={ctaHref} />
      <div className="w hero-inner ph-inner">
        <h1 className="enter" style={{ ["--d" as string]: ".15s" }}>{title}</h1>
        <div className="goldrule enter" style={{ ["--d" as string]: ".55s" }} />
        {lead && <p className="hero-lead enter" style={{ ["--d" as string]: ".75s" }}>{lead}</p>}
        <Link className="btn-foil enter" style={{ ["--d" as string]: ".95s" }} href={href}>{CTA.label}</Link>
      </div>
    </section>
  );
}
