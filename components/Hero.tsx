import Link from "next/link";
import { Header } from "./Header";
import { Words } from "./Words";
import { CTA } from "@/content/site";

export function Hero() {
  return (
    <section className="hero">
      <Header />
      <div className="w hero-inner">
        <h1 className="h1-words">
          <Words text="Partnering with Families from the" />
          <em><Words text="Same Side of the Table" start={6} accent /></em>
        </h1>
        <div className="goldrule enter" style={{ ["--d" as string]: "1.2s" }} />
        <p className="hero-lead enter" style={{ ["--d" as string]: "1.4s" }}>
          We don&rsquo;t manage your money or sell you products. We do the work behind your wealth and
          direct your advisors, with one interest in mind: yours.
        </p>
        <Link className="btn-foil enter" style={{ ["--d" as string]: "1.6s" }} href={CTA.href}>{CTA.label}</Link>
      </div>
    </section>
  );
}
