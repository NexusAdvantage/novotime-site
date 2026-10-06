import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";
import { SITE } from "@/content/site";

export const metadata: Metadata = { title: "Privacy Policy", robots: { index: false, follow: false } };

// DRAFT: standard small business policy. Must be reviewed by NovoTime's counsel before launch.
export default function PrivacyPolicy() {
  return (
    <>
      <PageHero title="Privacy Policy" ctaHref="/contact#book" />
      <main className="sec ivory">
        <div className="w legal-page">
          <p className="kicker">Draft pending legal review</p>
          <h2 className="h2">What We Collect</h2>
          <p className="sub">When you request a discovery meeting, we collect your name, email address, phone number, and anything you choose to share in your message. We use it only to respond to your request and schedule a conversation.</p>
          <h2 className="h2">How We Use and Share It</h2>
          <p className="sub">We never sell your information. We do not share it with third parties except service providers needed to operate this website and deliver your message to our team.</p>
          <h2 className="h2">Retention and Removal</h2>
          <p className="sub">We keep inquiry information only as long as needed to respond and maintain our records. To request removal, email {SITE.email}.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
