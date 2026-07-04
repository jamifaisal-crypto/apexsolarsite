import { createFileRoute, Link } from "@tanstack/react-router";
import { Sun, Battery, PoundSterling, ShieldCheck, ClipboardCheck, Ruler, PenTool, Wrench, Sparkles, Building2, Home, Store, Tractor, Star, Award, HandCoins } from "lucide-react";
import hero from "@/assets/hero.jpg";
import solar from "@/assets/solar-panels.jpg";
import battery from "@/assets/battery.jpg";
import commercial from "@/assets/commercial.jpg";
import { Section, SectionHeading, CtaBand, TrustBar, CertificationCards } from "@/components/site/Section";
import { LeadForm } from "@/components/site/LeadForm";
import { packages, included, finance, faqs } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Apex Aims Grants Ltd — Solar Panels & Battery Storage UK" },
      { name: "description", content: "Power your home, lower your bills, protect your future. MCS-certified solar PV and battery storage installation across the UK. Book your free survey today." },
      { property: "og:title", content: "Apex Aims Grants Ltd — Solar Panels & Battery Storage UK" },
      { property: "og:description", content: "MCS-certified solar and battery installation across the UK. Free surveys, 0% finance, 10-year battery warranty." },
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
            <span className="inline-block bg-green-brand/10 text-green-brand text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full">MCS Certified · 10-Year Warranty</span>
            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold text-navy leading-[1.05]">
              Power Your Home.<br />
              <span className="text-green-brand">Lower Your Bills.</span><br />
              Protect Your Future.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-lg">
              Professional MCS-certified solar &amp; battery installation across the UK. Free surveys, flexible finance, and a 10-year battery warranty.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary btn-primary-hover">Book Free Survey</Link>
              <a href="tel:+447954303766" className="btn-accent">Call Now</a>
              <a href="https://wa.me/447954303766" target="_blank" rel="noopener" className="btn-outline-navy">WhatsApp Us</a>
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { icon: Award, label: "MCS Certified" },
                { icon: HandCoins, label: "Finance Available" },
                { icon: ShieldCheck, label: "10-Year Warranty" },
                { icon: Star, label: "Fully Insured" },
              ].map(({ icon: I, label }) => (
                <div key={label} className="flex items-center gap-2 bg-white border border-border rounded-xl px-3 py-2.5 shadow-sm">
                  <I className="w-5 h-5 text-green-brand shrink-0" />
                  <span className="text-xs font-semibold text-navy">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={hero} alt="Modern UK home with solar panels at golden hour" width={1920} height={1280} className="rounded-3xl shadow-lift w-full object-cover aspect-[4/3]" />
            <div className="hidden md:block absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lift p-4 border border-border">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Average annual saving</p>
              <p className="text-3xl font-bold text-green-brand">£1,200+</p>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Recent Installations */}
      <Section>
        <SectionHeading eyebrow="Recent Installations" title="Real projects, real savings" subtitle="A snapshot of recent solar and battery installations we've completed for UK homeowners." />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { img: hero, location: "Essex", size: "5.46 kWp", battery: "Fox ESS EP6 (5.76 kWh)", time: "2 days" },
            { img: solar, location: "Kent", size: "6.80 kWp", battery: "Fox ESS EP12 (11.52 kWh)", time: "2 days" },
            { img: battery, location: "London", size: "4.10 kWp", battery: "Fox ESS EP6 (5.76 kWh)", time: "1 day" },
          ].map((p) => (
            <div key={p.location} className="card-soft card-hover !p-0 overflow-hidden">
              <img src={p.img} alt={`Solar installation in ${p.location}`} className="w-full aspect-[4/3] object-cover" loading="lazy" />
              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-green-brand">{p.location}</p>
                <div className="mt-3 grid grid-cols-2 gap-y-2 text-sm">
                  <span className="text-muted-foreground">System size</span><span className="font-semibold text-navy text-right">{p.size}</span>
                  <span className="text-muted-foreground">Battery</span><span className="font-semibold text-navy text-right">{p.battery}</span>
                  <span className="text-muted-foreground">Install time</span><span className="font-semibold text-navy text-right">{p.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/gallery" className="btn-outline-navy">View All Projects</Link>
        </div>
      </Section>

      {/* Why choose us */}
      <Section>
        <SectionHeading eyebrow="Why Apex Aims" title="Why homeowners choose us" subtitle="A specialist team focused on quality installations and long-term savings." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: PoundSterling, title: "Reduce Bills", body: "Cut electricity costs with generation and smart storage." },
            { icon: Battery, title: "Battery Storage", body: "Use your own solar day and night with Fox ESS batteries." },
            { icon: Wrench, title: "Professional Install", body: "MCS-certified, NICEIC electricians, no cut corners." },
            { icon: HandCoins, title: "Flexible Finance", body: "0% APR options and long-term plans available." },
          ].map(({ icon: I, title, body }) => (
            <div key={title} className="card-soft card-hover">
              <div className="w-12 h-12 rounded-xl bg-green-brand/10 text-green-brand flex items-center justify-center"><I className="w-6 h-6" /></div>
              <h3 className="mt-4 text-lg font-semibold text-navy">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-muted">
        <SectionHeading eyebrow="Simple process" title="From enquiry to switching on — in 5 steps" />
        <ol className="grid gap-4 md:grid-cols-5">
          {[
            { icon: ClipboardCheck, t: "Book Survey" },
            { icon: Ruler, t: "Survey" },
            { icon: PenTool, t: "Design" },
            { icon: Wrench, t: "Install" },
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

      {/* Services */}
      <Section>
        <SectionHeading eyebrow="Our services" title="Everything you need under one roof" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { img: solar, title: "Solar Panels", to: "/solar-panels", desc: "Tier-1 panels sized for your roof and usage." },
            { img: battery, title: "Battery Storage", to: "/battery-storage", desc: "Store daytime solar for evenings and peak tariffs." },
            { img: commercial, title: "Commercial Solar", to: "/commercial", desc: "Offices, warehouses, farms and retail." },
            { img: hero, title: "Consultation", to: "/contact", desc: "Free surveys and honest, tailored advice." },
          ].map((s) => (
            <Link key={s.title} to={s.to} className="card-soft card-hover overflow-hidden !p-0 block">
              <img src={s.img} alt={s.title} className="w-full aspect-[4/3] object-cover" loading="lazy" />
              <div className="p-5">
                <h3 className="font-semibold text-navy text-lg">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Packages */}
      <Section id="packages" className="bg-muted">
        <SectionHeading eyebrow="Popular packages" title="Transparent pricing for every home" subtitle="All packages include scaffolding, MCS certification, monitoring, and workmanship warranty." />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {packages.map((p) => (
            <div key={p.tier} className={`card-soft card-hover flex flex-col ${p.highlight ? "ring-2 ring-green-brand" : ""}`}>
              <div className={`inline-block self-start text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${p.color === "green" ? "bg-green-brand/10 text-green-brand" : p.color === "navy" ? "bg-navy text-white" : p.color === "orange" ? "bg-orange-brand/15 text-orange-brand" : "bg-destructive/10 text-destructive"}`}>{p.tier}</div>
              <h3 className="mt-3 text-xl font-bold text-navy">{p.name}</h3>
              <p className="mt-2 text-3xl font-extrabold text-green-brand">{p.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground flex-1">
                <li><strong className="text-navy">Panels:</strong> {p.panels}</li>
                <li><strong className="text-navy">System:</strong> {p.system}</li>
                <li><strong className="text-navy">Battery:</strong> {p.battery}</li>
                <li><strong className="text-navy">Inverter:</strong> {p.inverter}</li>
              </ul>
              <p className="mt-4 text-sm text-muted-foreground italic">{p.blurb}</p>
              <Link to="/contact" className="btn-primary btn-primary-hover mt-5">Get this package</Link>
            </div>
          ))}
        </div>

        <div className="mt-10 card-soft">
          <p className="text-xs font-bold uppercase tracking-widest text-green-brand">Included with all packages</p>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 text-sm">
            {included.map((i) => (
              <div key={i} className="flex items-start gap-2"><ShieldCheck className="w-4 h-4 text-green-brand mt-0.5 shrink-0" />{i}</div>
            ))}
          </div>
        </div>
      </Section>

      {/* Finance */}
      <Section>
        <SectionHeading eyebrow="Flexible finance" title="Spread the cost, start saving now" subtitle="Finance provided by our approved partners. Subject to status and credit approval." />
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
      </Section>

      {/* Who we help */}
      <Section className="bg-muted">
        <SectionHeading eyebrow="Who we help" title="Domestic and commercial across the UK" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { i: Home, t: "Homes" },
            { i: Store, t: "Shops" },
            { i: Tractor, t: "Farms" },
            { i: Building2, t: "Commercial" },
          ].map(({ i: I, t }) => (
            <div key={t} className="card-soft text-center">
              <I className="mx-auto w-8 h-8 text-orange-brand" />
              <p className="mt-3 font-semibold text-navy">{t}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionHeading eyebrow="Trusted by homeowners" title="What our customers say" />
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { n: "Sarah, Essex", q: "Bills more than halved after our first summer. The team was professional from survey to switch-on." },
            { n: "Mark, Kent", q: "Excellent installation. Scaffolding, install and paperwork all handled — nothing to worry about." },
            { n: "Priya, London", q: "The battery makes a huge difference in the evenings. Really glad we went with Apex Aims." },
          ].map((t) => (
            <div key={t.n} className="card-soft">
              <div className="flex gap-0.5 text-orange-brand">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}</div>
              <p className="mt-3 text-navy">"{t.q}"</p>
              <p className="mt-3 text-sm font-semibold text-muted-foreground">— {t.n}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ preview */}
      <Section className="bg-muted">
        <SectionHeading eyebrow="FAQ" title="Common questions" />
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {faqs.slice(0, 6).map((f) => (
            <details key={f.q} className="card-soft group">
              <summary className="cursor-pointer font-semibold text-navy list-none flex justify-between gap-4">
                {f.q}<span className="text-green-brand group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/faq" className="btn-outline-navy">See all FAQs</Link>
        </div>
      </Section>

      {/* Lead form */}
      <Section id="book">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-green-brand">Book Free Survey</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-navy">Get a personalised quote in 24 hours</h2>
            <p className="mt-4 text-muted-foreground">Tell us a little about your property. One of our MCS-certified surveyors will call you back with next steps and a rough saving estimate.</p>
            <div className="mt-6 space-y-3 text-sm">
              <p className="flex gap-2"><Sun className="w-5 h-5 text-orange-brand" /> No-obligation survey and design</p>
              <p className="flex gap-2"><Battery className="w-5 h-5 text-green-brand" /> Battery and EV charging options included</p>
              <p className="flex gap-2"><HandCoins className="w-5 h-5 text-navy" /> Finance options presented up front</p>
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
