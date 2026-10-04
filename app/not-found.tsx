import Link from "next/link";
import { Header } from "@/components/Header";
import { CTA } from "@/content/site";

export default function NotFound() {
  return (
    <section className="hero">
      <Header />
      <div className="w hero-inner">
        <h1>This Page Is <em className="foil">Still Being Built</em></h1>
        <div className="goldrule" />
        <p className="hero-lead">The page you were looking for isn&rsquo;t here yet.</p>
        <Link className="btn-foil" href="/">Back to Home</Link>
        <p style={{ marginTop: 20 }}><Link href={CTA.href} style={{ color: "var(--color-gold-light)" }}>{CTA.label}</Link></p>
      </div>
    </section>
  );
}
