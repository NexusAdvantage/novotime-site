import Link from "next/link";
import { Header } from "./Header";
import { CTA } from "@/content/site";

export function Hero() {
  return (
    <section className="hero">
      <Header />
      <div className="w hero-inner">
        <h1>
          Partnering with Families from the <em className="foil">Same Side of the Table</em>
        </h1>
        <div className="goldrule" />
        <p className="hero-lead">
          We don&rsquo;t manage your money or sell you products. We do the work behind your wealth and
          direct your advisors, with one interest in mind: yours.
        </p>
        <Link className="btn-foil" href={CTA.href}>{CTA.label}</Link>
      </div>
    </section>
  );
}
