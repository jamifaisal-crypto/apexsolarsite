import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, CtaBand, TrustBar } from "@/components/site/Section";
import { CheckCircle2, Sun, Zap, Leaf, ShieldCheck } from "lucide-react";
import img from "@/assets/solar-panels.jpg";

export const Route = createFileRoute("/solar-panels")({
  head: () => ({
    meta: [
      { title: "Solar Panels UK — MCS Certified Installation | Apex Aims Grants" },
      { name: "description", content: "Premium tier-1 solar panels installed by MCS-certified engineers across the UK. Reduce bills, earn from SEG, and get a 25-year performance warranty." },
      { property: "og:title", content: "Solar Panels UK — MCS Certified Installation" },
      { property: "og:description", content: "Premium solar PV installation across the UK. Free survey, transparent pricing, flexible finance." },
      { property: "og:url", content: "/solar-panels" },
    ],
    links: [{ rel: "canonical", href: "/solar-panels" }],
  }),
  component: SolarPanels,
});

function SolarPanels() {
  return (
    <>
      <PageHero
        eyebrow="Solar Panel Installation"
        title="Professional Solar Panel Installation Across the UK"
        subtitle="Reduce your electricity bills with premium Tier-1 solar panels installed by experienced MCS-certified professionals."
        image={img}
        imageAlt="Modern UK home with black solar panels at golden hour"
      >
        <Link to="/contact" className="btn-primary btn-primary-hover">Book Free Survey</Link>
        <a href="tel:+447954303766" className="btn-outline-navy">Call Now</a>
        <ul className="w-full grid grid-cols-2 gap-x-6 gap-y-2 mt-2 text-sm text-navy">
          {["MCS Certified", "25+ Year Panel Performance", "Finance Available", "Free Survey"].map((x) => (
            <li key={x} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-brand" /> {x}</li>
          ))}
        </ul>
      </PageHero>
      <TrustBar />

      <Section>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <img src={img} alt="Solar panels on UK roof" className="rounded-3xl shadow-card w-full object-cover aspect-[4/3]" loading="lazy" />
          <div>
            <SectionHeading center={false} eyebrow="What you get" title="Reliable generation for 25+ years" subtitle="We only fit panels from bankable Tier-1 manufacturers with proven UK track records." />
            <ul className="space-y-3">
              {[
                "High-efficiency monocrystalline modules (400–450 W typical)",
                "MCS-approved mounting system for slate, tile, metal or flat roofs",
                "Bird protection mesh included as standard",
                "Optimisers or panel-level shading solutions where needed",
                "Neat cabling and discreet roof penetrations",
                "25-year performance warranty from the manufacturer",
              ].map((x) => (
                <li key={x} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-brand mt-0.5 shrink-0" /><span>{x}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-muted">
        <SectionHeading eyebrow="Benefits" title="Why solar makes sense in the UK" />
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { i: Sun, t: "Free daylight energy", b: "Generate electricity every daylight hour — not just when it's sunny." },
            { i: Zap, t: "Lower bills", b: "Slash grid imports and hedge against rising energy prices." },
            { i: Leaf, t: "Cleaner home", b: "Cut carbon emissions with clean, quiet generation on your roof." },
            { i: ShieldCheck, t: "SEG payments", b: "Get paid for surplus electricity exported back to the grid." },
            { i: Sun, t: "Roof-friendly design", b: "Panels help protect the roof beneath from UV and weather." },
            { i: Leaf, t: "Property value", b: "Solar PV can improve EPC ratings and resale appeal." },
          ].map(({ i: I, t, b }) => (
            <div key={t} className="card-soft card-hover">
              <I className="w-8 h-8 text-orange-brand" />
              <h3 className="mt-3 font-semibold text-navy">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Our process" title="From free survey to switch-on" />
        <div className="grid md:grid-cols-4 gap-5">
          {[
            { t: "1. Free survey", b: "We check your roof, shading, usage and goals." },
            { t: "2. System design", b: "Custom layout, generation forecast and quote." },
            { t: "3. Professional install", b: "Scaffolding, mounting, wiring and commissioning." },
            { t: "4. MCS handover", b: "Paperwork, monitoring, and SEG registration support." },
          ].map((s) => (
            <div key={s.t} className="card-soft">
              <p className="font-semibold text-navy">{s.t}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.b}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
