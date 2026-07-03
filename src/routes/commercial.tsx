import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, CtaBand } from "@/components/site/Section";
import { Building2, Tractor, Store, ShieldCheck, TrendingUp, Leaf, CheckCircle2 } from "lucide-react";
import img from "@/assets/commercial.jpg";

export const Route = createFileRoute("/commercial")({
  head: () => ({
    meta: [
      { title: "Commercial Solar UK — Warehouses, Farms, Offices | Apex Aims" },
      { name: "description", content: "Commercial solar PV and battery storage for UK businesses. Systems up to 50 kW+ with ROI analysis, MCS certification and full project management." },
      { property: "og:title", content: "Commercial Solar UK — Warehouses, Farms, Offices" },
      { property: "og:description", content: "Cut business energy costs and hit sustainability targets with MCS commercial solar." },
      { property: "og:url", content: "/commercial" },
    ],
    links: [{ rel: "canonical", href: "/commercial" }],
  }),
  component: Commercial,
});

function Commercial() {
  return (
    <>
      <PageHero eyebrow="Commercial" title="Solar & storage for UK businesses" subtitle="Warehouses, farms, offices, retail. We design, install and commission systems up to 50 kW+ with clear ROI analysis.">
        <Link to="/contact" className="btn-primary btn-primary-hover">Request Commercial Quote</Link>
        <a href="tel:+442087092051" className="btn-accent">Call Our Office</a>
      </PageHero>

      <Section>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <img src={img} alt="Warehouse rooftop solar installation" className="rounded-3xl shadow-card w-full object-cover aspect-[4/3]" loading="lazy" />
          <div>
            <SectionHeading center={false} eyebrow="Business case" title="A financial and sustainability win" subtitle="Long-term energy price certainty, meaningful carbon reduction, and ESG reporting evidence — from one system." />
            <ul className="space-y-3">
              {[
                "Full feasibility study and financial modelling",
                "Structural and DNO liaison handled end-to-end",
                "G99 applications for larger systems",
                "Battery storage and load-shifting design",
                "Roof- or ground-mount installations",
                "Ongoing O&M and monitoring packages",
              ].map((x) => (
                <li key={x} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-brand mt-0.5 shrink-0" /><span>{x}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-muted">
        <SectionHeading eyebrow="Sectors we serve" title="Industry-specific expertise" />
        <div className="grid md:grid-cols-4 gap-5">
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
      </Section>

      <Section>
        <SectionHeading eyebrow="Why now" title="Three commercial advantages" />
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { i: TrendingUp, t: "Price certainty", b: "Insulate your business from volatile grid tariffs for the next 25 years." },
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
