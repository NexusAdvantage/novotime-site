import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Values } from "@/components/Values";
import { BookForm } from "@/components/BookForm";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Values",
  description: "The five values behind every NovoTime engagement: integrity, one interest, finding a way, challenging the playbook, and humility.",
};

export default function ValuesPage() {
  return (
    <>
      <PageHero
        mark="/icons/What We Stand For/Integrity.png"
        title={<>The Values Behind <em>Every Engagement</em></>}
        lead="Five commitments that shape how we work with your family and the advisors around you."
      />
      <main>
        <Values heading={false} />
        <BookForm />
      </main>
      <Footer />
    </>
  );
}
