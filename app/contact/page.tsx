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
        title={<>Let&rsquo;s Start with <em>a Conversation</em></>}
        lead="A member of our team, not an autoresponder, will be in touch within one business day."
      />
      <main>
        <section className="sec ivory">
          <div className="w">
            <h2 className="h2">Visit, Call, <em>or Write</em></h2>
            <div className="rule2" />
            <div className="cards c3">
              <div className="frame card card-ic">
                <div className="fi">
                  <span className="val-icon"><Icon name="i-house" className="vi" /></span>
                  <h3>Our Office</h3>
                  <p>{a.street}<br />{a.city}, {a.regionLong} {a.zip}</p>
                </div>
              </div>
              <a className="frame card card-ic" href={SITE.phoneHref}>
                <div className="fi">
                  <span className="val-icon"><Icon name="i-talk" className="vi" /></span>
                  <h3>Call</h3>
                  <p className="num">{SITE.phoneDisplay}</p>
                </div>
              </a>
              <a className="frame card card-ic" href={`mailto:${SITE.email}`}>
                <div className="fi">
                  <span className="val-icon"><Icon name="i-ledger" className="vi" /></span>
                  <h3>Email</h3>
                  <p>{SITE.email}</p>
                </div>
              </a>
            </div>
          </div>
        </section>
        <BookForm />
      </main>
      <Footer />
    </>
  );
}
