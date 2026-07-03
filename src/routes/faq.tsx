import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, CtaBand } from "@/components/site/Section";
import { faqs } from "@/lib/site-data";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Solar & Battery FAQs — Apex Aims Grants Ltd" },
      { name: "description", content: "Answers to 40+ common questions about solar panels, battery storage, MCS certification, finance, warranties and the installation process." },
      { property: "og:title", content: "Solar & Battery FAQs" },
      { property: "og:description", content: "Everything you need to know about solar and battery installation in the UK." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FAQ,
});

function FAQ() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Everything you need to know" subtitle="Straight answers about solar, storage, finance and installation." />
      <Section>
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="card-soft group">
              <summary className="cursor-pointer font-semibold text-navy list-none flex justify-between gap-4">
                {f.q}<span className="text-green-brand group-open:rotate-45 transition text-2xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
