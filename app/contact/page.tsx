import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { BookForm } from "@/components/BookForm";
import { Footer } from "@/components/Footer";
import { IconImg, icon } from "@/components/IconImg";
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
        mark="/icons/Contact/Office.png"
        title={<>Let&rsquo;s Start with <em>a Conversation</em></>}
        lead="A member of our team, not an autoresponder, will be in touch within one business day."
      />
      <main>
        <section className="sec ivory">
          <div className="w">
            <h2 className="h2">Visit <em>or Write</em></h2>
            <div className="rule2" />
            <div className="cards c2">
              <div className="frame card card-ic">
                <div className="fi">
                  <IconImg src={icon("Contact", "Office")} size={76} />
                  <h3>Our Office</h3>
                  <p>{a.street}<br />{a.city}, {a.regionLong} {a.zip}</p>
                </div>
              </div>
              <a className="frame card card-ic" href={`mailto:${SITE.email}`}>
                <div className="fi">
                  <IconImg src={icon("Contact", "Email")} size={76} />
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
