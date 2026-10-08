import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { BookForm } from "@/components/BookForm";
import { Footer } from "@/components/Footer";
import { IconImg, icon } from "@/components/IconImg";
import { MISSION, NAME, FOUNDER } from "@/content/about";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Why Diana V. Novoselska founded NovoTime, an independent multi family office in Omaha built to give families back their time and peace of mind.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        mark="/icons/Our Story/Present with Family.png"
        title={<>Built to Protect What Is <em>Truly Irreplaceable</em></>}
        lead="An independent multi family office in Omaha, founded on one belief: clients should always come first."
      />
      <main>
        <section className="sec ivory" id="mission">
          <div className="w">
            <h2 className="h2">Our Mission: <em>Time and Peace of Mind</em></h2>
            <div className="rule2" />
            <div className="cards c3">
              {MISSION.times.map((t) => (
                <div className="frame card card-ic" key={t.title}>
                  <div className="fi">
                    <IconImg src={icon("Our Story", t.title.replace("Time to Be ", "").replace("Time to ", ""))} size={76} />
                    <h3>{t.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            <p className="body-close">{MISSION.close}</p>
          </div>
        </section>

        <section className="sec navy" id="name">
          <div className="w">
            <h2 className="h2">The Meaning Behind <em className="foil">the Name</em></h2>
            <div className="rule2" />
            <div className="name-grid">
              {NAME.map((n) => (
                <div key={n.word}>
                  <span className="big-word foil">{n.word}</span>
                  <h3>{n.title}</h3>
                  <p>{n.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sec ivory-2" id="founder">
          <div className="w">
            <h2 className="h2">Meet Our <em>Founder</em></h2>
            <div className="rule2" />
            <ol className="tline">
              {FOUNDER.chapters.map((c) => (
                <li key={c.title}>
                  <i className="tnode" />
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </li>
              ))}
            </ol>
            <figure className="frame dark fquote">
              <div className="fi">
                <blockquote>&ldquo;Investment performance may fluctuate, but <em>fees are constant.</em>&rdquo;</blockquote>
                <figcaption className="fwho">{FOUNDER.name}<span>{FOUNDER.role}</span></figcaption>
              </div>
            </figure>
          </div>
        </section>
        <BookForm />
      </main>
      <Footer />
    </>
  );
}
