import { createFileRoute, Link } from "@tanstack/react-router";
import { Sun, Battery, PoundSterling, ShieldCheck, ClipboardCheck, Ruler, PenTool, Wrench, Sparkles, Star, Award, HandCoins, Leaf, Zap, MapPin, Users } from "lucide-react";
import hero from "@/assets/hero.jpg";
import solar from "@/assets/solar-panels.jpg";
import battery from "@/assets/battery.jpg";
import commercial from "@/assets/commercial.jpg";
import { Section, SectionHeading, CtaBand, TrustBar } from "@/components/site/Section";
import { LeadForm } from "@/components/site/LeadForm";
import { faqs } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Apex Aims Grants Ltd — Solar Panels & Battery Storage UK" },
      { name: "description", content: "Power your home, lower your bills, protect your future. MCS-certified solar PV and Fox ESS battery storage installation across the UK." },
      { property: "og:title", content: "Apex Aims Grants Ltd — Solar Panels & Battery Storage UK" },
      { property: "og:description", content: "MCS-certified solar and Fox ESS battery installation across the UK. Free surveys, 0% finance, 10-year battery warranty." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-muted">
        <div className="container-page grid lg:grid-cols-2 gap-10 items-center py-12 md:py-20">
          <div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 bg-green-brand/10 text-green-brand text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">
                <Award className="w-3.5 h-3.5" /> MCS Certified Installer
              </span>
              <span className="inline-flex items-center gap-1.5 bg-orange-brand/15 text-orange-brand text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" /> 10-Year Battery Warranty
              </span>
            </div>
            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold text-navy leading-[1.05]">
              Power Your Home.<br />
              <span className="text-green-brand">Lower Your Bills.</span><br />
              Protect Your Future.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-lg">
              Professional MCS-certified solar &amp; Fox ESS battery installation across the UK. Free surveys, flexible finance, and a 10-year battery warranty.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary btn-primary-hover">Book Free Survey</Link>
              <a href="tel:+447954303766" className="btn-outline-navy">Call Now</a>
            </div>
          </div>
          <div className="relative">
            <img src={hero} alt="Modern UK home with solar panels at golden hour" width={1920} height={1280} className="rounded-3xl shadow-lift w-full object-cover aspect-[4/3]" />
            <div className="hidden md:block absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lift p-4 border border-border">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Average annual saving</p>
              <p className="text-3xl font-bold text-orange-brand">£1,200+</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4-icon benefits strip */}
      <section className="bg-white border-y border-border">
        <div className="container-page py-10 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { i: Sun, t: "Generate Clean Energy" },
            { i: Battery, t: "Store Your Own Energy" },
            { i: PoundSterling, t: "Reduce Your Energy Bills" },
            { i: Leaf, t: "Reduce Your Carbon Footprint" },
          ].map(({ i: I, t }) => (
            <div key={t} className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-full bg-green-brand/10 text-green-brand flex items-center justify-center">
                <I className="w-6 h-6" />
              </div>
              <p className="text-sm font-semibold text-navy">{t}</p>
            </div>
          ))}
        </div>
      </section>

      <TrustBar />

      {/* Why choose us — 3 cards */}
      <Section>
        <SectionHeading eyebrow="Why Apex Aims" title="Why homeowners choose us" subtitle="A specialist team focused on quality installations and long-term savings." />
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { i: Award, t: "MCS-Certified Quality", b: "Fully certified installers, Tier-1 panels and Fox ESS batteries — no cut corners." },
            { i: HandCoins, t: "Transparent Pricing", b: "Clear packages from £8,260 with 0% APR, 5-year and 10-year finance available." },
            { i: ShieldCheck, t: "Aftercare You Can Trust", b: "10-year battery warranty, workmanship guarantee, and remote monitoring included." },
          ].map(({ i: I, t, b }) => (
            <div key={t} className="card-soft card-hover">
              <div className="w-12 h-12 rounded-xl bg-orange-brand/15 text-orange-brand flex items-center justify-center"><I className="w-6 h-6" /></div>
              <h3 className="mt-4 text-lg font-semibold text-navy">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Condensed 5-step process */}
      <Section className="bg-muted">
        <SectionHeading eyebrow="Simple process" title="From enquiry to switching on — in 5 steps" />
        <ol className="grid gap-4 md:grid-cols-5">
          {[
            { icon: ClipboardCheck, t: "Book Survey" },
            { icon: Ruler, t: "Free Site Survey" },
            { icon: PenTool, t: "Bespoke Design" },
            { icon: Wrench, t: "Professional Install" },
            { icon: Sparkles, t: "Start Saving" },
          ].map(({ icon: I, t }, i) => (
            <li key={t} className="card-soft text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center font-bold">{i + 1}</div>
              <I className="mx-auto mt-3 w-6 h-6 text-green-brand" />
              <p className="mt-2 font-semibold text-navy">{t}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Services grid */}
      <Section>
        <SectionHeading eyebrow="Our services" title="Everything you need under one roof" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { img: solar, title: "Solar Panels", to: "/solar-panels", desc: "Tier-1 panels sized for your roof and usage." },
            { img: battery, title: "Battery Storage", to: "/battery-storage", desc: "Fox ESS batteries — store daytime solar for evenings." },
            { img: commercial, title: "Commercial Solar", to: "/solar-panels", hash: "business", desc: "Offices, warehouses, farms and retail — up to 50 kW+." },
            { img: hero, title: "Pricing & Finance", to: "/pricing-finance", desc: "Transparent packages and 0% APR finance." },
          ].map((s) => (
            <Link key={s.title} to={s.to} hash={s.hash} className="card-soft card-hover overflow-hidden !p-0 block">
              <img src={s.img} alt={s.title} className="w-full aspect-[4/3] object-cover" loading="lazy" />
              <div className="p-5">
                <h3 className="font-semibold text-navy text-lg">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Pricing teaser */}
      <Section className="bg-muted">
        <div className="card-soft max-w-5xl mx-auto grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-orange-brand">Packages & Finance</p>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-navy">Packages from £8,260 · 0% APR available</h2>
            <p className="mt-2 text-muted-foreground">See our four MCS-certified packages, everything that's included, and flexible finance options — all on one page.</p>
          </div>
          <Link to="/pricing-finance" className="btn-primary btn-primary-hover shrink-0">See Packages & Finance</Link>
        </div>
      </Section>

      {/* Testimonials — 3 */}
      <Section>
        <SectionHeading eyebrow="Trusted by homeowners" title="What our customers say" />
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { n: "Sarah, Essex", q: "Bills more than halved after our first summer. The team was professional from survey to switch-on." },
            { n: "Mark, Kent", q: "Excellent installation. Scaffolding, install and paperwork all handled — nothing to worry about." },
            { n: "Priya, London", q: "The Fox ESS battery makes a huge difference in the evenings. Really glad we went with Apex Aims." },
          ].map((t) => (
            <div key={t.n} className="card-soft">
              <div className="flex gap-0.5 text-orange-brand">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}</div>
              <p className="mt-3 text-navy">"{t.q}"</p>
              <p className="mt-3 text-sm font-semibold text-muted-foreground">— {t.n}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ teaser */}
      <Section className="bg-muted">
        <SectionHeading eyebrow="FAQ" title="Have a question?" subtitle={faqs[0].q} />
        <div className="text-center">
          <Link to="/faq" className="btn-outline-navy">See all FAQs</Link>
        </div>
      </Section>

      {/* Brochure-style trust strip */}
      <section className="bg-white border-y border-border">
        <div className="container-page py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { i: MapPin, t: "Locally Based", b: "Ilford-based team serving the UK" },
            { i: ShieldCheck, t: "Fully Insured", b: "Public liability & workmanship cover" },
            { i: Users, t: "Expert Local Team", b: "MCS, NICEIC & RECC accredited" },
          ].map(({ i: I, t, b }) => (
            <div key={t} className="flex items-center justify-center gap-3">
              <I className="w-8 h-8 text-green-brand shrink-0" />
              <div className="text-left">
                <p className="font-bold text-navy">{t}</p>
                <p className="text-xs text-muted-foreground">{b}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA + short enquiry form */}
      <Section id="book">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-orange-brand">Book Free Survey</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-navy">Get a personalised quote in 24 hours</h2>
            <p className="mt-4 text-muted-foreground">Tell us a little about your property. One of our MCS-certified surveyors will call you back with next steps and a rough saving estimate.</p>
            <div className="mt-6 space-y-3 text-sm">
              <p className="flex gap-2"><Sun className="w-5 h-5 text-orange-brand" /> No-obligation survey and design</p>
              <p className="flex gap-2"><Battery className="w-5 h-5 text-green-brand" /> Fox ESS battery and EV charging options included</p>
              <p className="flex gap-2"><Zap className="w-5 h-5 text-navy" /> Finance options presented up front</p>
            </div>
          </div>
          <div className="card-soft">
            <LeadForm />
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
