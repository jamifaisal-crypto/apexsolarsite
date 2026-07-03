import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, CtaBand } from "@/components/site/Section";
import { Battery, Zap, Moon, ShieldCheck, CheckCircle2 } from "lucide-react";
import img from "@/assets/battery.jpg";

export const Route = createFileRoute("/battery-storage")({
  head: () => ({
    meta: [
      { title: "Home Battery Storage UK — Fox ESS Installation | Apex Aims Grants" },
      { name: "description", content: "Store your solar energy for evenings and peak-tariff hours. Fox ESS EP6 and EP12 batteries installed with 10-year warranty across the UK." },
      { property: "og:title", content: "Home Battery Storage UK — Fox ESS Installation" },
      { property: "og:description", content: "Use your own solar around the clock. Expert Fox ESS battery installation with a 10-year warranty." },
      { property: "og:url", content: "/battery-storage" },
    ],
    links: [{ rel: "canonical", href: "/battery-storage" }],
  }),
  component: BatteryStorage,
});

function BatteryStorage() {
  return (
    <>
      <PageHero eyebrow="Battery Storage" title="Use your solar day and night" subtitle="Fox ESS lithium batteries with heating function, hybrid inverter and 10-year warranty — installed by our MCS-certified team.">
        <Link to="/contact" className="btn-primary btn-primary-hover">Book Free Survey</Link>
        <a href="https://wa.me/447954303766" className="btn-outline-navy" target="_blank" rel="noopener">WhatsApp Us</a>
      </PageHero>

      <Section>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHeading center={false} eyebrow="Fox ESS batteries" title="EP6 & EP12 lithium storage" subtitle="Modular Li-ion batteries designed for UK homes, with built-in heating for reliable cold-weather performance." />
            <ul className="space-y-3">
              {[
                "EP6 — 5.76 kWh usable (ideal for smaller homes)",
                "EP12 — 11.52 kWh usable (ideal for larger homes & EVs)",
                "H1-series single-phase hybrid inverter",
                "Time-of-use tariff arbitrage (e.g. Octopus Go, Cosy)",
                "Live monitoring app for phone and tablet",
                "10-year battery warranty · UK-based technical support",
              ].map((x) => (
                <li key={x} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-brand mt-0.5 shrink-0" /><span>{x}</span></li>
              ))}
            </ul>
          </div>
          <img src={img} alt="Fox ESS home battery installation" className="rounded-3xl shadow-card w-full object-cover aspect-[4/3]" loading="lazy" />
        </div>
      </Section>

      <Section className="bg-muted">
        <SectionHeading eyebrow="Why storage" title="Batteries pay you back three ways" />
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { i: Moon, t: "Evening usage", b: "Run the house on stored solar after sunset — instead of expensive grid electricity." },
            { i: Zap, t: "Cheap-rate charging", b: "Fill the battery overnight on off-peak tariffs and discharge during peak hours." },
            { i: ShieldCheck, t: "Resilience", b: "With optional EPS, keep essential circuits running through brief outages." },
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
        <SectionHeading eyebrow="Retrofit or new" title="Add storage to your existing solar" subtitle="No solar yet? We can install a hybrid battery-first system and add panels later. Already have solar? We integrate a Fox ESS battery to your existing PV." />
        <div className="grid md:grid-cols-2 gap-5">
          <div className="card-soft">
            <Battery className="w-8 h-8 text-green-brand" />
            <h3 className="mt-3 font-semibold text-navy text-lg">Battery-only / grid-charged</h3>
            <p className="mt-2 text-sm text-muted-foreground">Buy cheap, use expensive: charge overnight, run through peak hours. Great for homes without solar (yet).</p>
          </div>
          <div className="card-soft">
            <Battery className="w-8 h-8 text-green-brand" />
            <h3 className="mt-3 font-semibold text-navy text-lg">Solar + battery hybrid</h3>
            <p className="mt-2 text-sm text-muted-foreground">Capture every free daytime kWh and use it later — the highest-value setup for most UK homes.</p>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
