import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { BookForm } from "@/components/BookForm";
import { Footer } from "@/components/Footer";
import { Arrow } from "@/components/Arrow";
import { SERVICES } from "@/content/services";
import { DISCLOSURES, detailFor } from "@/content/serviceDetails";

type Params = { slug: string };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  return s ? { title: s.title, description: s.summary } : {};
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  const d = detailFor(slug);
  if (!s || !d) notFound();
  const related = d.related.map((r) => SERVICES.find((x) => x.slug === r)!).filter(Boolean);

  return (
    <>
      <PageHero
        title={s.title}
        lead={d.lead}
        crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: s.title }]}
        aside={
          s.iconImage && (
            <div className="medal">
              <div className="medal-in"><img src={s.iconImage} alt="" /></div>
            </div>
          )
        }
      />
      <main>
        <section className="sec ivory">
          <div className="w">
            <div className="sec-head">
              <h2 className="h2">What We <em>Handle</em></h2>
              <div className="rule2" />
            </div>
            <div className="statements">
              {d.items.map((item) => (
                <div className="statement" key={item}><i /><p>{item}</p></div>
              ))}
            </div>
            {d.disclosure && (
              <p className="disclose"><b>Important Disclosure</b>{DISCLOSURES[d.disclosure]}</p>
            )}
          </div>
        </section>

        <section className="sec ivory-2">
          <div className="w">
            <div className="sec-head">
              <h2 className="h2">Who Does <em>the Work</em></h2>
              <div className="rule2" />
              <p className="sub">A lot of the work we do ourselves. Where a specialist belongs, we bring them in and keep everyone working from the same plan.</p>
            </div>
            <div className="split2">
              <div>
                <span className="kicker">In House</span>
                <h3>Handled by Our Team</h3>
                <ul className="ticks">{d.inHouse.map((x) => <li key={x}>{x}</li>)}</ul>
              </div>
              <div>
                <span className="kicker">Alongside Your Advisors</span>
                <h3>Coordinated with Your Professionals</h3>
                {d.partners.length ? (
                  <ul className="ticks">{d.partners.map((x) => <li key={x}>{x}</li>)}</ul>
                ) : (
                  <p className="ticks-note">Delivered directly by our team, at a pace and depth that suits each family member.</p>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="sec ivory">
          <div className="w">
            <div className="sec-head">
              <h2 className="h2">Often Paired <em>With</em></h2>
              <div className="rule2" />
            </div>
            <div className="svc-grid">
              {related.map((r) => (
                <Link className="sb" key={r.slug} href={`/services/${r.slug}`}>
                  <span className={r.iconImage ? "iconslot iconslot-img" : "iconslot"}>
                    {r.iconImage && <img src={r.iconImage} alt="" />}
                  </span>
                  <div className="sb-title"><h3>{r.title}</h3><Arrow /></div>
                  <p>{r.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <BookForm />
      </main>
      <Footer />
    </>
  );
}
