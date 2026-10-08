import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Faq } from "@/components/Faq";
import { BookForm } from "@/components/BookForm";
import { Footer } from "@/components/Footer";
import { Arrow } from "@/components/Arrow";
import { Ledger } from "@/components/Ledger";
import { SERVICES } from "@/content/services";
import { BEGIN, DISCLOSURES, detailFor } from "@/content/serviceDetails";

type Params = { slug: string };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  return s ? { title: s.title, description: s.summary } : {};
}

/** Puts the last two words of a heading in the gold accent. */
function accent(text: string) {
  const w = text.split(" ");
  const cut = Math.max(1, w.length - 2);
  return <>{w.slice(0, cut).join(" ")} <em>{w.slice(cut).join(" ")}</em></>;
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  const d = detailFor(slug);
  if (!s || !d) notFound();
  const related = d.related.map((r) => SERVICES.find((x) => x.slug === r)!).filter(Boolean);
  const n = d.items.length;
  const layout = n === 5 ? "bento5" : n === 4 ? "c2" : "c3";

  return (
    <>
      <PageHero title={s.title} lead={s.summary} />
      <main>
        <section className="sec ivory">
          <div className="w intro">
            <div className="intro-text">
              <h2 className="h2">{accent(d.headline)}</h2>
              <div className="rule2" />
              {d.intro.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
            </div>
            <aside className="frame dark glance">
              <div className="fi">
                {s.iconImage && <div className="glance-art"><img src={s.iconImage} alt="" /></div>}
                <dl>
                  <div>
                    <dt>Handled In House</dt>
                    <dd><ul>{d.inHouse.map((x) => <li key={x}>{x}</li>)}</ul></dd>
                  </div>
                  <div>
                    <dt>Coordinated With</dt>
                    <dd>{d.partners.length ? d.partners.join(", ") : "Delivered directly by our team"}</dd>
                  </div>
                  <div>
                    <dt>How It Is Billed</dt>
                    <dd>Part of one flat monthly fee. Never a percentage of assets.</dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>
        </section>

        <section className="sec ivory-2">
          <div className="w">
            <h2 className="h2">What We <em>Handle</em></h2>
            <div className="rule2" />
            <div className={`cards ${layout}`}>
              {d.items.map((it) => (
                <article className="frame card" key={it.t}>
                  <div className="fi">
                    <i className="dia" />
                    <h3>{it.t}</h3>
                    <p>{it.d}</p>
                  </div>
                </article>
              ))}
            </div>
            {d.disclosure && (
              <p className="disclose"><b>Important Disclosure</b>{DISCLOSURES[d.disclosure]}</p>
            )}
          </div>
        </section>

        <Ledger rows={d.ledger} closing={d.outcome} />

        <section className="sec ivory">
          <div className="w signs">
            <div>
              <h2 className="h2">Signs It May <em>Be Time</em></h2>
              <div className="rule2" />
            </div>
            <ul className="signs-list">
              {d.signs.map((x) => <li key={x}><span className="sg-box" aria-hidden="true" />{x}</li>)}
            </ul>
          </div>
        </section>

        <section className="sec ivory-2">
          <div className="w">
            <h2 className="h2">How We <em>Begin</em></h2>
            <div className="rule2" />
            <ol className="steps">
              {BEGIN.map((b, i) => (
                <li key={b.t}>
                  <span className="step-n foil">{["I", "II", "III", "IV"][i]}</span>
                  <h3>{b.t}</h3>
                  <p>{b.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <Faq items={d.faqs} tone="ivory" title={<>Questions About <em>{s.title}</em></>} />

        <section className="sec ivory-2">
          <div className="w">
            <h2 className="h2">Often Paired <em>With</em></h2>
            <div className="rule2" />
            <div className="svc-grid">
              {related.map((r) => (
                <Link className="sb" key={r.slug} href={`/services/${r.slug}`}>
                  <span className={r.iconImage ? "iconslot iconslot-img" : "iconslot"}>
                    {r.iconImage && <img src={r.iconImage} alt="" loading="lazy" />}
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
