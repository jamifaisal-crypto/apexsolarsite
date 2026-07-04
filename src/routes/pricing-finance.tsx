import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, CtaBand, TrustBar } from "@/components/site/Section";
import { ShieldCheck, Star, HandCoins, Calculator } from "lucide-react";
import { packages, included, finance } from "@/lib/site-data";
import img from "@/assets/hero.jpg";

export const Route = createFileRoute("/pricing-finance")({
  head: () => ({
    meta: [
      { title: "Pricing & Finance — Solar Panel & Battery Packages | Apex Aims Grants" },
      { name: "description", content: "Transparent solar and battery pricing from £8,260. 0% APR, 5-year and 10-year finance available. MCS-certified installation across the UK." },
      { property: "og:title", content: "Pricing & Finance — Apex Aims Grants Ltd" },
      { property: "og:description", content: "Solar and battery packages with clear pricing and flexible finance options." },
      { property: "og:url", content: "/pricing-finance" },
    ],
    links: [{ rel: "canonical", href: "/pricing-finance" }],
  }),
  component: PricingFinance,
});

function headerClass(color: string) {
  if (color === "green") return "bg-green-brand text-white";
  if (color === "navy") return "bg-navy text-white";
  if (color === "orange") return "bg-orange-brand text-white";
  return "bg-navy text-white";
}

function PricingFinance() {
  return (
    <>
      <PageHero
        eyebrow="Pricing & Finance"
        title="Transparent Packages. Flexible Finance."
        subtitle="Choose from four MCS-certified installation packages, or spread the cost with 0% APR, 5-year and 10-year plans."
        image={img}
        imageAlt="Solar panels installed on a UK family home"
      >
        <Link to="/contact" className="btn-primary btn-primary-hover">Book Your Free Survey</Link>
        <a href="tel:+447954303766" className="btn-outline-navy">Call +44 7954 303766</a>
      </PageHero>
      <TrustBar />

      {/* Packages */}
      <Section id="packages">
        <SectionHeading eyebrow="Our Packages" title="Choose the right system for your home" subtitle="Every package includes design, installation, MCS certification and warranties." />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((p) => (
            <div key={p.tier} className={`relative card-soft card-hover !p-0 overflow-hidden flex flex-col ${p.highlight ? "ring-2 ring-orange-brand" : ""}`}>
              {p.highlight && (
                <div className="absolute top-3 right-3 z-10 flex items-center gap-1 bg-orange-brand text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full">
                  <Star className="w-3 h-3 fill-current" /> Most Popular
                </div>
              )}
              <div className={`${headerClass(p.color)} px-5 py-4`}>
                <p className="text-[10px] font-bold tracking-widest uppercase opacity-85">{p.tier}</p>
                <h3 className="text-lg font-bold mt-0.5">{p.name}</h3>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <p className="text-3xl font-extrabold text-orange-brand">{p.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground flex-1">
                  <li><strong className="text-navy">Panels:</strong> {p.panels}</li>
                  <li><strong className="text-navy">System:</strong> {p.system}</li>
                  <li><strong className="text-navy">Battery:</strong> {p.battery}</li>
                  <li><strong className="text-navy">Inverter:</strong> {p.inverter}</li>
                </ul>
                <p className="mt-4 text-sm text-muted-foreground italic">{p.blurb}</p>
                {p.tier === "Package 3" && (
                  <p className="mt-2 text-xs text-muted-foreground">Final panel quantity (12–14) confirmed after technical survey and roof assessment.</p>
                )}
                {p.tier === "Package 4" && (
                  <p className="mt-2 text-xs text-muted-foreground">Quotation provided following survey.</p>
                )}
                <Link to="/contact" className="btn-primary btn-primary-hover mt-5">Book Free Survey</Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 card-soft">
          <p className="text-xs font-bold uppercase tracking-widest text-green-brand">Included with all packages</p>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-sm">
            {included.map((i) => (
              <div key={i} className="flex items-start gap-2"><ShieldCheck className="w-4 h-4 text-green-brand mt-0.5 shrink-0" />{i}</div>
            ))}
          </div>
        </div>
      </Section>

      {/* Finance */}
      <Section id="finance" className="bg-muted">
        <SectionHeading eyebrow="Flexible Finance Options" title="Spread the cost, start saving now" subtitle="Finance provided by our approved partners. Subject to status and credit approval." />
        <div className="grid md:grid-cols-3 gap-5">
          {finance.map((f, i) => (
            <div key={f.name} className={`card-soft card-hover ${i === 0 ? "bg-green-brand text-white" : i === 1 ? "bg-navy text-white" : "bg-orange-brand text-white"}`}>
              <p className="text-xs font-bold uppercase tracking-widest opacity-85">{f.years}</p>
              <h3 className="text-2xl font-bold mt-1">{f.name}</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {f.features.map((x) => <li key={x} className="flex gap-2"><ShieldCheck className="w-4 h-4 mt-0.5 shrink-0" />{x}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-6 text-center">Finance options provided by our approved partners. Subject to status and credit approval.</p>
      </Section>

      <Section>
        <SectionHeading eyebrow="How finance works" title="Simple to arrange" />
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { i: Calculator, t: "1. Get a quote", b: "We size a system and propose finance options with monthly figures." },
            { i: HandCoins, t: "2. Apply online", b: "Quick soft-search application via our approved lending partner." },
            { i: ShieldCheck, t: "3. Install & save", b: "We install; your bill savings start from day one of switch-on." },
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
