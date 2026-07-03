import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, CtaBand } from "@/components/site/Section";
import hero from "@/assets/hero.jpg";
import solar from "@/assets/solar-panels.jpg";
import battery from "@/assets/battery.jpg";
import commercial from "@/assets/commercial.jpg";
import installer from "@/assets/installer.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Recent Solar & Battery Installations | Apex Aims" },
      { name: "description", content: "Photos of recent solar panel and battery storage installations by Apex Aims Grants Ltd across the UK." },
      { property: "og:title", content: "Gallery — Recent Installations" },
      { property: "og:description", content: "See recent Apex Aims solar and battery projects." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const shots = [
  { src: hero, cap: "5.4 kWp system — Essex" },
  { src: solar, cap: "Tier-1 monocrystalline panels" },
  { src: battery, cap: "Fox ESS EP6 install" },
  { src: commercial, cap: "Commercial warehouse rooftop" },
  { src: installer, cap: "MCS-certified installer on site" },
  { src: hero, cap: "Family home retrofit" },
  { src: solar, cap: "Slate roof — Kent" },
  { src: battery, cap: "11.5 kWh EP12 with hybrid inverter" },
  { src: commercial, cap: "50 kW industrial system" },
];

function Gallery() {
  return (
    <>
      <PageHero eyebrow="Our work" title="Recent installations" subtitle="A glimpse of the systems we've delivered for UK homes and businesses." />
      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {shots.map((s, i) => (
            <figure key={i} className="card-soft card-hover !p-0 overflow-hidden">
              <img src={s.src} alt={s.cap} className="w-full aspect-[4/3] object-cover" loading="lazy" />
              <figcaption className="p-4 text-sm font-medium text-navy">{s.cap}</figcaption>
            </figure>
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
