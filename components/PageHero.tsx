import Link from "next/link";
import type { ReactNode } from "react";
import { Header } from "./Header";
import { CTA } from "@/content/site";

/** Inner page hero. Same composition and size as the home hero, with the same entrance. */
export function PageHero({ title, lead, ctaHref }: { title: ReactNode; lead?: string; ctaHref?: string }) {
  const href = ctaHref ?? CTA.href;
  return (
    <section className="hero page-hero">
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
