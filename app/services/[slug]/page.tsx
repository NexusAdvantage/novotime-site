import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Faq } from "@/components/Faq";
import { BookForm } from "@/components/BookForm";
import { Footer } from "@/components/Footer";
import { Arrow } from "@/components/Arrow";
import { Ledger } from "@/components/Ledger";
import { CtaRow, CtaCard } from "@/components/Cta";
import { SERVICES } from "@/content/services";
import { BEGIN, DISCLOSURES, detailFor } from "@/content/serviceDetails";
import { CONNECTS } from "@/content/connects";

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
  const related = d.related.map((r) => ({ ...SERVICES.find((x) => x.slug === r)!, why: CONNECTS[slug]?.[r] ?? "" }));
  const n = d.items.length;
  const layout = n === 5 ? "bento5" : n === 4 ? "c2" : "c3";

  return (
    <>
      <PageHero title={s.title} lead={s.summary} mark={s.iconImage} />
      <main>
        <section className="sec ivory">
          <div className="w intro">
            <div className="intro-text">
              <h2 className="h2">{accent(d.headline)}</h2>
              <div className="rule2" />
              <p>{d.intro[1]}</p>
              <CtaRow />
            </div>
            <aside className="frame dark glance">
              <div className="fi">
                {s.iconImage && <div className="glance-art"><img src={s.iconImage} alt="" /></div>}
                <ul className="glance-list">
                  {d.inHouse.map((x) => <li key={x}>{x}</li>)}
                </ul>
                <p className="glance-note">
                  {d.partners.length ? <>Handled by our team and coordinated with {d.partners.join(", ").replace(/, ([^,]*)$/, " and $1").toLowerCase().replace(/\bcpa\b/g, "CPA")}.</> : <>Delivered directly by our team.</>}{" "}
                  Part of one flat monthly fee, never a percentage of assets.
                </p>
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

        <Ledger rows={d.ledger} closing={d.outcome} cta />

        <section className="sec ivory">
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

        <Faq
          items={d.faqs}
          tone="ivory-2"
          title={<>Questions About <em>{s.title}</em></>}
          aside={<CtaCard title={<>Still Have <em>Questions?</em></>} body="Talk to our team directly. A real person answers, not an autoresponder." />}
        />

        <section className="sec ivory">
          <div className="w">
            <h2 className="h2">How It <em>Connects</em></h2>
            <div className="rule2" />
            <div className="svc-grid">
              {related.map((r) => (
                <Link className="sb" key={r.slug} href={`/services/${r.slug}`}>
                  <span className={r.iconImage ? "iconslot iconslot-img" : "iconslot"}>
                    {r.iconImage && <img src={r.iconImage} alt="" loading="lazy" />}
                  </span>
                  <div className="sb-title"><h3>{r.title}</h3><Arrow /></div>
                  <p>{r.why}</p>
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
