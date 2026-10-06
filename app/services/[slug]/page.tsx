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
  const cols = d.items.length % 3 === 0 ? "c3" : "c2";

  return (
    <>
      <PageHero
        title={s.title}
        lead={s.summary}
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
            <h2 className="h2">What We <em>Handle</em></h2>
            <div className="rule2" />
            <div className={`icards ${cols}`}>
              {d.items.map((it) => (
                <article className="icard" key={it.t}>
                  <i className="dia" />
                  <h3>{it.t}</h3>
                  <p>{it.d}</p>
                </article>
              ))}
            </div>
            {d.disclosure && (
              <p className="disclose"><b>Important Disclosure</b>{DISCLOSURES[d.disclosure]}</p>
            )}
          </div>
        </section>

        <section className="sec navy outcome">
          <div className="w c">
            <p className="outcome-line">{d.outcome}</p>
            <div className="goldrule" />
          </div>
        </section>

        <section className="sec ivory-2">
          <div className="w">
            <h2 className="h2">Who Does <em>the Work</em></h2>
            <div className="rule2" />
            <div className="who">
              <div className="who-card">
                <h3>Handled by Our Team</h3>
                <ul className="ticks">{d.inHouse.map((x) => <li key={x}>{x}</li>)}</ul>
              </div>
              <div className="who-card">
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
            <h2 className="h2">Often Paired <em>With</em></h2>
            <div className="rule2" />
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
