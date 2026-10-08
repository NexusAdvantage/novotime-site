import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Guide } from "@/components/Guide";
import { BookForm } from "@/components/BookForm";
import { Footer } from "@/components/Footer";
import { Arrow } from "@/components/Arrow";
import { SERVICES } from "@/content/services";

export const metadata: Metadata = {
  title: "Family Office Services",
  description:
    "Financial administration, tax, investment coordination, insurance, estate, governance, education, documents, and property. Choose the services your family needs.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        mark="/icons/Our Approach/Customization.png"
        title={<>Everything Your Wealth <em>Touches</em></>}
        lead="A menu, not a mandate. Some families begin with the handful of services that matter most and add the rest as their needs grow. Either way, we work alongside the advisors you already trust."
      />
      <main>
        <section className="sec ivory">
          <div className="w">
            <div className="svc-rows">
              {SERVICES.map((s) => (
                <Link className="svc-row" key={s.slug} href={`/services/${s.slug}`}>
                  {s.iconImage && <img src={s.iconImage} alt="" loading="lazy" />}
                  <h2>{s.title}</h2>
                  <p>{s.summary}</p>
                  <Arrow />
                </Link>
              ))}
            </div>
          </div>
        </section>
        <Guide tone="ivory-2" />
        <BookForm />
      </main>
      <Footer />
    </>
  );
}
