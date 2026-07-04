import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, CtaBand, TrustBar } from "@/components/site/Section";
import { CheckCircle2, Sun, Zap, Leaf, ShieldCheck, Home, Building2, Store, Tractor, TrendingUp } from "lucide-react";
import solarImg from "@/assets/solar-panels.jpg";
import commercialImg from "@/assets/commercial.jpg";

export const Route = createFileRoute("/solar-panels")({
  head: () => ({
    meta: [
      { title: "Solar Panels UK — Homes & Business | Apex Aims Grants" },
      { name: "description", content: "Premium tier-1 solar panels installed by MCS-certified engineers. Residential and commercial systems up to 50 kW+, across the UK." },
      { property: "og:title", content: "Solar Panels UK — For Homes & Business" },
      { property: "og:description", content: "MCS-certified solar installation for UK homes and businesses. Free surveys, transparent pricing." },
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
        title="Solar That Works — For Homes and Business"
        subtitle="Premium tier-1 solar panels installed by MCS-certified engineers. Whether you're powering a family home or a commercial building, we design the right system for you."
        image={solarImg}
        imageAlt="UK home with modern black solar panels"
      >
        <a href="#homes" className="btn-primary btn-primary-hover">For Homes</a>
        <a href="#business" className="btn-outline-navy">For Business</a>
      </PageHero>
      <TrustBar />

      {/* FOR HOMES */}
      <Section id="homes">
        <div className="mb-6 inline-flex items-center gap-2 bg-green-brand/10 text-green-brand text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
          <Home className="w-4 h-4" /> Solar for Homes
        </div>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <img src={solarImg} alt="Residential solar panel installation on a UK roof" className="rounded-3xl shadow-card w-full object-cover aspect-[4/3]" loading="lazy" />
          <div>
            <SectionHeading center={false} eyebrow="Residential" title="Reliable generation for 25+ years" subtitle="We only fit panels from bankable Tier-1 manufacturers with proven UK track records." />
            <ul className="space-y-3">
              {[
                "High-efficiency monocrystalline modules (400–450 W typical)",
                "MCS-approved mounting for slate, tile, metal or flat roofs",
                "Bird protection mesh included as standard",
                "Optimisers or panel-level shading solutions where needed",
                "Battery-ready hybrid inverter options (Fox ESS)",
                "25-year performance warranty from the manufacturer",
              ].map((x) => (
                <li key={x} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-brand mt-0.5 shrink-0" /><span>{x}</span></li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary btn-primary-hover">Book a Free Survey</Link>
              <Link to="/pricing-finance" className="btn-outline-navy">See Home Packages</Link>
            </div>
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {[
            { i: Sun, t: "Free daylight energy", b: "Generate power every daylight hour — not just when it's sunny." },
            { i: Zap, t: "Lower bills", b: "Slash grid imports and hedge against rising energy prices." },
            { i: Leaf, t: "Cleaner home", b: "Cut carbon emissions with clean, quiet rooftop generation." },
            { i: ShieldCheck, t: "SEG payments", b: "Get paid for surplus electricity exported back to the grid." },
            { i: Sun, t: "Roof-friendly design", b: "Panels help protect the roof beneath from UV and weather." },
            { i: Leaf, t: "Property value", b: "Solar PV can improve EPC ratings and resale appeal." },
          ].map(({ i: I, t, b }) => (
            <div key={t} className="card-soft card-hover">
              <I className="w-8 h-8 text-green-brand" />
              <h3 className="mt-3 font-semibold text-navy">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FOR BUSINESS */}
      <Section id="business" className="bg-muted">
        <div className="mb-6 inline-flex items-center gap-2 bg-navy text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
          <Building2 className="w-4 h-4" /> Solar for Business
        </div>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHeading center={false} eyebrow="Commercial" title="Solar & storage for UK businesses" subtitle="Warehouses, farms, offices, shops and industrial units. We design, install and commission systems up to 50 kW+ and beyond, with clear ROI analysis." />
            <ul className="space-y-3">
              {[
                "Full feasibility study and financial modelling",
                "Structural, DNO and G99 applications handled end-to-end",
                "Battery storage and load-shifting design",
                "Roof-mount and ground-mount installations",
                "Ongoing O&M and remote monitoring packages",
                "MCS certification and full documentation",
              ].map((x) => (
                <li key={x} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-brand mt-0.5 shrink-0" /><span>{x}</span></li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary btn-primary-hover">Request a Commercial Quote</Link>
              <a href="tel:+442087092051" className="btn-outline-navy">Call Our Office</a>
            </div>
          </div>
          <img src={commercialImg} alt="Large warehouse rooftop with commercial solar panel installation" className="rounded-3xl shadow-card w-full object-cover aspect-[4/3] order-first lg:order-none" loading="lazy" />
        </div>

        <div className="mt-14">
          <SectionHeading eyebrow="Sectors we serve" title="Industry-specific expertise" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { i: Building2, t: "Warehousing & logistics" },
              { i: Store, t: "Retail & hospitality" },
              { i: Tractor, t: "Agriculture & farms" },
              { i: Building2, t: "Offices & professional" },
            ].map(({ i: I, t }) => (
              <div key={t} className="card-soft text-center">
                <I className="mx-auto w-8 h-8 text-orange-brand" />
                <p className="mt-3 font-semibold text-navy">{t}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {[
            { i: TrendingUp, t: "Price certainty", b: "Insulate your business from volatile grid tariffs for 25+ years." },
            { i: ShieldCheck, t: "Capital allowances", b: "Explore full-expensing and other allowances with your accountant." },
            { i: Leaf, t: "ESG & CSR", b: "Report tangible Scope-2 emissions reductions to customers and investors." },
          ].map(({ i: I, t, b }) => (
            <div key={t} className="card-soft card-hover">
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
