import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Guide } from "@/components/Guide";
import { HowItWorks } from "@/components/HowItWorks";
import { Values } from "@/components/Values";
import { BookForm } from "@/components/BookForm";
import { Footer } from "@/components/Footer";
import { SITE } from "@/content/site";

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.legalName,
  url: SITE.url,
  telephone: "+1-402-239-8086",
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.zip,
    addressCountry: "US",
  },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <main>
        <Hero />
        <Services />
        <Guide />
        <HowItWorks />
        <Values />
        <BookForm />
      </main>
      <Footer />
    </>
  );
}
