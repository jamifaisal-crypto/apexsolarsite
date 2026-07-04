import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Star, ShieldCheck, Award, HandCoins, Battery, ClipboardCheck } from "lucide-react";
import mcsLogo from "@/assets/mcs.png.asset.json";
import niceicLogo from "@/assets/niceic.png.asset.json";
import reccLogo from "@/assets/recc.png.asset.json";
import plLogo from "@/assets/public-liability.png.asset.json";
import ctaBg from "@/assets/hero.jpg";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  if (image) {
    return (
      <section className="bg-white border-b border-border">
        <div className="container-page grid lg:grid-cols-[55fr_45fr] gap-10 items-center py-12 md:py-20">
          <div>
            {eyebrow && (
              <p className="text-xs font-semibold tracking-widest uppercase text-green-brand mb-3">{eyebrow}</p>
            )}
            <h1 className="text-4xl md:text-6xl font-extrabold text-navy leading-[1.05]">{title}</h1>
            {subtitle && <p className="mt-5 text-lg text-muted-foreground max-w-xl">{subtitle}</p>}
            {children && <div className="mt-7 flex flex-wrap gap-3">{children}</div>}
          </div>
          <div className="relative">
            <img
              src={image}
              alt={imageAlt ?? title}
              className="rounded-3xl shadow-lift w-full object-cover aspect-[4/5] lg:aspect-[3/4]"
              loading="eager"
            />
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="bg-gradient-to-b from-muted to-white border-b border-border">
      <div className="container-page py-14 md:py-20 text-center">
        {eyebrow && <p className="text-xs font-semibold tracking-widest uppercase text-green-brand mb-3">{eyebrow}</p>}
        <h1 className="text-4xl md:text-6xl font-bold text-navy max-w-4xl mx-auto">{title}</h1>
        {subtitle && <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
        {children && <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div>}
      </div>
    </section>
  );
}

export function Section({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`py-14 md:py-20 ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, subtitle, center = true }: { eyebrow?: string; title: string; subtitle?: string; center?: boolean }) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-3xl mb-10 md:mb-12`}>
      {eyebrow && <p className="text-xs font-semibold tracking-widest uppercase text-green-brand mb-3">{eyebrow}</p>}
      <h2 className="text-3xl md:text-5xl font-bold text-navy">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

export function TrustBar() {
  const items = [
    { i: Award, t: "MCS Certified" },
    { i: ShieldCheck, t: "Fully Insured" },
    { i: HandCoins, t: "Finance Available" },
    { i: ClipboardCheck, t: "Free Survey" },
    { i: Battery, t: "10-Year Battery Warranty" },
  ];
  return (
    <div className="bg-navy text-white border-y border-white/10">
      <div className="container-page py-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
        <div className="flex items-center gap-2 font-semibold">
          <div className="flex gap-0.5 text-orange-brand">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span>Trusted Across the UK</span>
        </div>
        {items.map(({ i: I, t }) => (
          <div key={t} className="flex items-center gap-1.5 text-white/85">
            <I className="w-4 h-4 text-green-brand" />
            <span>{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={ctaBg}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-navy/85" />
      <div className="relative container-page py-20 md:py-28 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold max-w-3xl mx-auto">Ready to Reduce Your Energy Bills?</h2>
        <p className="mt-4 text-white/85 max-w-2xl mx-auto text-lg">
          Book a FREE home survey and receive a tailored solar solution designed specifically for your property.
        </p>
        <div className="mt-8">
          <Link to="/contact" className="btn-primary btn-primary-hover text-base">Book Free Survey</Link>
        </div>
      </div>
    </section>
  );
}

const CERTS = [
  {
    logo: mcsLogo.url,
    name: "MCS Certified",
    desc: "Certified installer for domestic and commercial solar PV installations.",
  },
  {
    logo: niceicLogo.url,
    name: "NICEIC Approved",
    desc: "Qualified electrical installation specialists you can trust.",
  },
  {
    logo: reccLogo.url,
    name: "RECC",
    desc: "Renewable Energy Consumer Code — consumer protection and best practice.",
  },
  {
    logo: plLogo.url,
    name: "Public Liability Insured",
    desc: "Fully insured for complete customer peace of mind.",
  },
];

export function CertificationCards() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {CERTS.map((c) => (
        <div key={c.name} className="card-soft card-hover text-center flex flex-col items-center">
          <div className="h-20 flex items-center justify-center w-full">
            <img src={c.logo} alt={`${c.name} logo`} className="max-h-16 max-w-[80%] object-contain" loading="lazy" />
          </div>
          <h3 className="mt-4 font-semibold text-navy">{c.name}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
        </div>
      ))}
    </div>
  );
}

export function PartnerLogosStrip() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {CERTS.map((c) => (
        <div
          key={c.name}
          className="card-soft flex items-center justify-center h-24 transition hover:-translate-y-1 hover:shadow-lift hover:ring-2 hover:ring-green-brand"
        >
          <img src={c.logo} alt={`${c.name} logo`} className="max-h-14 max-w-[75%] object-contain" loading="lazy" />
        </div>
      ))}
    </div>
  );
}
