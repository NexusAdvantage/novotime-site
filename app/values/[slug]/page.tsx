import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { BookForm } from "@/components/BookForm";
import { Footer } from "@/components/Footer";
import { CtaRow } from "@/components/Cta";
import { icon } from "@/components/IconImg";
import { VALUES, valueHref } from "@/content/values";

type Params = { slug: string };

export function generateStaticParams() {
  return VALUES.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const v = VALUES.find((x) => x.slug === slug);
  return v ? { title: v.title.replace(/<\/?em>/g, ""), description: v.summary } : {};
}

export default async function ValuePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const v = VALUES.find((x) => x.slug === slug);
  if (!v) notFound();
  const others = VALUES.filter((x) => x.slug !== v.slug);
  const art = icon("What We Stand For", v.file);

  return (
    <>
      <PageHero mark={art} title={<span dangerouslySetInnerHTML={{ __html: v.title }} />} lead={v.summary} />
      <main>
        <section className="sec ivory">
          <div className="w vp-intro">
            <div>
              <h2 className="h2">{v.headline}</h2>
              <div className="rule2" />
              <p>{v.intro}</p>
              <CtaRow />
            </div>
            <div className="vp-seal" aria-hidden="true">
              <span className="vp-ring" />
              <span className="vp-medal"><Image src={encodeURI(art)} alt="" width={180} height={180} sizes="180px" /></span>
            </div>
          </div>
        </section>

        <section className="sec navy">
          <div className="w">
            <h2 className="h2">{v.practiceTitle}</h2>
            <div className="rule2" />
            <div className="cards c3 vp-cards">
              {v.practice.map((p) => (
                <article className="frame dark card" key={p.t}>
                  <div className="fi">
                    <i className="dia" />
                    <h3>{p.t}</h3>
                    <p>{p.d}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sec ivory">
          <div className="w">
            <h2 className="h2">The Rest of <em>Our Values</em></h2>
            <div className="rule2" />
            <div className="vp-others">
              {others.map((o) => (
                <Link className="vp-other" href={valueHref(o.slug)} key={o.slug}>
                  <span className="vp-other-ic">
                    <Image src={encodeURI(icon("What We Stand For", o.file))} alt="" width={56} height={56} sizes="56px" />
                  </span>
                  <h3 dangerouslySetInnerHTML={{ __html: o.title }} />
                  <p>{o.summary}</p>
                  <span className="more">Read More <span aria-hidden="true">&rarr;</span></span>
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
