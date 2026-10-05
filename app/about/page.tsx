import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Faq } from "@/components/Faq";
import { BookForm } from "@/components/BookForm";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icon";
import { MISSION, NAME, FOUNDER, PRINCIPLES, INDEPENDENCE } from "@/content/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "NovoTime is an independent multi family office in Omaha, founded by Diana V. Novoselska to give families back their time and peace of mind.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About NovoTime"
        title={<>A New Way to Protect What Is <em>Truly Irreplaceable</em></>}
        lead="NovoTime is an independent multi family office in Omaha. We bring your advisors, your planning, and the work behind your wealth together, with precision and discretion."
      />
      <main>
        <section className="sec ivory" id="mission">
          <div className="w">
            <span className="kicker">Our Mission</span>
            <p className="mission-line" style={{ marginTop: 22 }}>
              To give people back their most valuable resources: <em>time and peace of mind.</em>
            </p>
            <p className="mission-body">{MISSION.body}</p>
            <div className="times">
              {MISSION.times.map((t) => (
                <div className="time" key={t.title}>
                  <span className="val-icon"><Icon name={t.icon} className="vi" /></span>
                  <h3>{t.title}</h3>
                </div>
              ))}
            </div>
            <p className="mission-close">{MISSION.close}</p>
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
            <div className="sec-head">
              <span className="kicker">Our Founder</span>
              <h2 className="h2" style={{ marginTop: 18 }}>{FOUNDER.headline}</h2>
              <div className="rule2" />
            </div>
            <div className="founder-grid">
              <div className="founder-bio">
                {FOUNDER.paragraphs.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
              </div>
              <figure className="quote-card">
                <blockquote>&ldquo;Investment performance may fluctuate, but <em>fees are constant.</em>&rdquo;</blockquote>
                <figcaption className="fwho">{FOUNDER.name}<span>{FOUNDER.role}</span></figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="sec ivory" id="approach">
          <div className="w">
            <div className="vals-head">
              <h2 className="h2">How We <em>Work</em></h2>
              <div className="rule2" />
              <p className="sub">Four principles shape every engagement, from the first conversation to the next generation.</p>
            </div>
            <div className="vals">
              {PRINCIPLES.map((p) => (
                <article className="val" key={p.title}>
                  <span className="val-icon"><Icon name={p.icon} className="vi" /></span>
                  <div className="val-body">
                    <h3>{p.title}</h3>
                    <div className="val-lines"><p>{p.body}</p></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sec navy" id="independence">
          <div className="w c">
            <h2 className="h2">Conductors, <em className="foil">Not Soloists</em></h2>
            <div className="rule2" />
            <p className="sub" style={{ maxWidth: 860 }}>{INDEPENDENCE.body}</p>
          </div>
        </section>

        <Faq />
        <BookForm />
      </main>
      <Footer />
    </>
  );
}
