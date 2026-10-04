import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE } from "@/content/site";

export const metadata: Metadata = { title: "Privacy Policy", robots: { index: false, follow: false } };

// DRAFT: standard small business policy. Must be reviewed by NovoTime's counsel before launch.
export default function PrivacyPolicy() {
  return (
    <>
      <section className="hero" style={{ minHeight: 0 }}>
        <Header />
        <div className="w" style={{ padding: "70px 40px 90px", position: "relative", zIndex: 2 }}>
          <h1 style={{ fontSize: "clamp(44px,5vw,72px)", textAlign: "left" }}>Privacy Policy</h1>
        </div>
      </section>
      <main className="sec ivory">
        <div className="w legal-page">
          <p className="kicker">Draft pending legal review</p>
          <h2 className="h2" style={{ fontSize: 32, marginTop: 24 }}>What We Collect</h2>
          <p className="sub">When you request a discovery meeting, we collect your name, email address, phone number, and anything you choose to share in your message. We use it only to respond to your request and schedule a conversation.</p>
          <h2 className="h2" style={{ fontSize: 32, marginTop: 40 }}>How We Use and Share It</h2>
          <p className="sub">We never sell your information. We do not share it with third parties except service providers needed to operate this website and deliver your message to our team.</p>
          <h2 className="h2" style={{ fontSize: 32, marginTop: 40 }}>Retention and Removal</h2>
          <p className="sub">We keep inquiry information only as long as needed to respond and maintain our records. To request removal, email {SITE.email}.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
