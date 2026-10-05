import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { BookForm } from "@/components/BookForm";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icon";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a discovery meeting with NovoTime, an independent family office at 9375 Burt Street in Omaha.",
};

export default function ContactPage() {
  const a = SITE.address;
  return (
    <>
      <PageHero
        kicker="Contact"
        title={<>Let&rsquo;s Start with <em>a Conversation</em></>}
        lead="Tell us a little about your family and what prompted you to reach out. A member of our team, not an autoresponder, will be in touch within one business day."
      />
      <main>
        <section className="sec ivory">
          <div className="w">
            <div className="sec-head">
              <h2 className="h2">Visit, Call, <em>or Write</em></h2>
              <div className="rule2" />
              <p className="sub">We prefer to meet in person whenever possible, at our Omaha office or wherever is most comfortable for your family.</p>
            </div>
            <div className="office-grid">
              <div>
                <span className="val-icon"><Icon name="i-house" className="vi" /></span>
                <span className="kicker">Our Office</span>
                <p>{a.street}<br />{a.city}, {a.regionLong} {a.zip}</p>
              </div>
              <div>
                <span className="val-icon"><Icon name="i-talk" className="vi" /></span>
                <span className="kicker">Call</span>
                <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
              </div>
              <div>
                <span className="val-icon"><Icon name="i-ledger" className="vi" /></span>
                <span className="kicker">Email</span>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </div>
            </div>
          </div>
        </section>
        <BookForm />
      </main>
      <Footer />
    </>
  );
}
