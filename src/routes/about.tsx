import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, CtaBand, TrustBar, CertificationCards, PartnerLogosStrip } from "@/components/site/Section";
import { Award, Users, ShieldCheck, Leaf } from "lucide-react";
import img from "@/assets/installer.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Apex Aims Grants Ltd — MCS Solar Installers UK" },
      { name: "description", content: "Meet Apex Aims Grants Ltd. A UK-based MCS-certified solar and battery installer helping homes and businesses lower bills and protect the planet." },
      { property: "og:title", content: "About Apex Aims Grants Ltd" },
      { property: "og:description", content: "A local, expert team delivering solar and battery installations across the UK." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="A Local Team, National Reach"
        subtitle="We're on a mission to help UK homes and businesses generate their own clean energy and take control of rising bills."
        image={img}
        imageAlt="Apex Aims installation team working on a UK roof"
      />
      <TrustBar />

      <Section>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <img src={img} alt="Apex Aims installer on a UK roof" className="rounded-3xl shadow-card w-full object-cover aspect-[4/3]" loading="lazy" />
          <div>
            <SectionHeading center={false} eyebrow="Who we are" title="Powering homes, saving money, protecting our planet" subtitle="Apex Aims Grants Ltd is a UK renewable energy specialist based in Ilford, delivering MCS-certified solar PV, battery storage and energy efficiency solutions nationwide." />
            <p className="text-muted-foreground">We combine hands-on installation experience with careful system design, so you get the right kit for your roof, your usage, and your goals — not a generic package.</p>
          </div>
        </div>
      </Section>

      <Section className="bg-muted">
        <SectionHeading eyebrow="Our values" title="What guides every install" />
        <div className="grid md:grid-cols-4 gap-5">
          {[
            { i: Award, t: "Quality first", b: "Tier-1 components, MCS standards, tidy workmanship." },
            { i: Users, t: "Customer-led", b: "We listen, we survey, we recommend — no pressure sales." },
            { i: ShieldCheck, t: "Full accountability", b: "Warranties, aftercare and remote monitoring included." },
            { i: Leaf, t: "Sustainability", b: "Real emissions reductions for every home we help." },
          ].map(({ i: I, t, b }) => (
            <div key={t} className="card-soft">
              <I className="w-8 h-8 text-green-brand" />
              <h3 className="mt-3 font-semibold text-navy">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Credentials" title="Fully certified and insured" subtitle="Real accreditations, not marketing badges. Every installation is delivered to the standards below." />
        <CertificationCards />
      </Section>

      <Section className="bg-muted">
        <SectionHeading eyebrow="Trusted memberships" title="Our trusted partners & certifications" />
        <PartnerLogosStrip />
      </Section>

      <CtaBand />
    </>
  );
}
