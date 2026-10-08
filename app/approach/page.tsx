import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Faq } from "@/components/Faq";
import { BookForm } from "@/components/BookForm";
import { Footer } from "@/components/Footer";
import { IconImg, icon } from "@/components/IconImg";
import { PRINCIPLES, NOT_LIST, ARE_LIST, FEE_TERMS } from "@/content/approach";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "How NovoTime works: independent, coordinated with your advisors, and paid only by you through one flat monthly fee.",
};

export default function ApproachPage() {
  return (
    <>
      <PageHero
        title={<>How We Work with <em>Your Family</em></>}
        lead="Independent, coordinated with the advisors you already trust, and paid only by you."
      />
      <main>
        <section className="sec ivory">
          <div className="w">
            <h2 className="h2">Four Principles Behind <em>Every Engagement</em></h2>
            <div className="rule2" />
            <div className="cards c4">
              {PRINCIPLES.map((p) => (
                <article className="frame card card-ic" key={p.title}>
                  <div className="fi">
                    <IconImg src={icon("Our Approach", p.title)} size={76} />
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sec navy">
          <div className="w">
            <h2 className="h2">Independent <em className="foil">by Design</em></h2>
            <div className="rule2" />
            <div className="compare">
              <div className="cmp cmp-not">
                <h3>We Are Not</h3>
                <ul>{NOT_LIST.map((x) => <li key={x}>{x}</li>)}</ul>
              </div>
              <div className="cmp cmp-are">
                <h3>We Are</h3>
                <ul>{ARE_LIST.map((x) => <li key={x}>{x}</li>)}</ul>
              </div>
            </div>
          </div>
        </section>

        <section className="sec ivory-2">
          <div className="w">
            <h2 className="h2">One Flat <em>Monthly Fee</em></h2>
            <div className="rule2" />
            <div className="frame dark feecard">
              <div className="fi">
                {FEE_TERMS.map((f) => (
                  <article className="fee" key={f.title}>
                    <i className="dia" />
                    <h3>{f.title}</h3>
                    <p>{f.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Faq />
        <BookForm />
      </main>
      <Footer />
    </>
  );
}
