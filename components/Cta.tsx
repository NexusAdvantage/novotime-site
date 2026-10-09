import Link from "next/link";
import { CTA } from "@/content/site";

/** Gold booking button. Used inline at the end of sections. */
export function CtaRow({ center = false, light = false }: { center?: boolean; light?: boolean }) {
  return (
    <div className={`cta-row${center ? " c" : ""}${light ? " on-navy" : ""}`}>
      <Link className="btn-foil" href={CTA.href}>{CTA.label}</Link>
    </div>
  );
}

/** Framed navy card that closes a section with a call to action. */
export function CtaCard({ title, body }: { title: React.ReactNode; body: string }) {
  return (
    <div className="frame dark cta-card">
      <div className="fi">
        <h3>{title}</h3>
        <p>{body}</p>
        <Link className="btn-foil" href={CTA.href}>{CTA.label}</Link>
      </div>
    </div>
  );
}
