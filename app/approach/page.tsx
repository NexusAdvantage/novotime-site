import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Faq } from "@/components/Faq";
import { BookForm } from "@/components/BookForm";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icon";
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
            <div className="pcards">
              {PRINCIPLES.map((p) => (
                <article className="pcard" key={p.title}>
                  <span className="val-icon"><Icon name={p.icon} className="vi" /></span>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
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
            <div className="fees">
              {FEE_TERMS.map((f) => (
                <article className="fee" key={f.title}>
                  <i className="dia" />
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </article>
              ))}
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
