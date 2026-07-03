import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, CtaBand } from "@/components/site/Section";
import { ShieldCheck, HandCoins, Calculator } from "lucide-react";
import { finance } from "@/lib/site-data";

export const Route = createFileRoute("/finance")({
  head: () => ({
    meta: [
      { title: "Solar Finance UK — 0% APR & 10-Year Plans | Apex Aims Grants" },
      { name: "description", content: "Spread the cost of solar and battery installation with 0% APR (1–3 years), 5-year and 10-year finance plans. Subject to credit approval." },
      { property: "og:title", content: "Solar Finance UK — 0% APR & 10-Year Plans" },
      { property: "og:description", content: "Flexible finance options for solar PV and battery storage across the UK." },
      { property: "og:url", content: "/finance" },
    ],
    links: [{ rel: "canonical", href: "/finance" }],
  }),
  component: Finance,
});

function Finance() {
  return (
    <>
      <PageHero eyebrow="Flexible finance" title="Start saving from day one" subtitle="Multiple finance options so you can install solar and batteries without a big upfront cost.">
        <Link to="/contact" className="btn-primary btn-primary-hover">Book Free Survey</Link>
      </PageHero>

      <Section>
        <div className="grid md:grid-cols-3 gap-5">
          {finance.map((f, i) => (
            <div key={f.name} className={`card-soft card-hover ${i === 0 ? "bg-green-brand text-white" : i === 1 ? "bg-navy text-white" : "bg-orange-brand text-navy"}`}>
              <p className="text-xs font-bold uppercase tracking-widest opacity-80">{f.years}</p>
              <h3 className="text-2xl font-bold mt-1">{f.name}</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {f.features.map((x) => <li key={x} className="flex gap-2"><ShieldCheck className="w-4 h-4 mt-0.5 shrink-0" />{x}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-6 text-center">Finance options provided by our approved partners. Subject to status and credit approval.</p>
      </Section>

      <Section className="bg-muted">
        <SectionHeading eyebrow="Simple to arrange" title="How our finance works" />
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { i: Calculator, t: "1. Get a quote", b: "We size a system and propose finance options with monthly figures." },
            { i: HandCoins, t: "2. Apply online", b: "Quick soft-search application via our approved lending partner." },
            { i: ShieldCheck, t: "3. Install & save", b: "We install; your first bill savings start from day one of switch-on." },
          ].map(({ i: I, t, b }) => (
            <div key={t} className="card-soft">
              <I className="w-8 h-8 text-green-brand" />
              <h3 className="mt-3 font-semibold text-navy">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
