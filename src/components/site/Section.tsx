import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, subtitle, children }: { eyebrow?: string; title: string; subtitle?: string; children?: ReactNode }) {
  return (
    <section className="bg-gradient-to-b from-muted to-white border-b border-border">
      <div className="container-page py-16 md:py-24 text-center">
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
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, subtitle, center = true }: { eyebrow?: string; title: string; subtitle?: string; center?: boolean }) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-3xl mb-12`}>
      {eyebrow && <p className="text-xs font-semibold tracking-widest uppercase text-green-brand mb-3">{eyebrow}</p>}
      <h2 className="text-3xl md:text-5xl font-bold text-navy">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="bg-navy text-white">
      <div className="container-page py-14 md:py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Ready to lower your energy bills?</h2>
        <p className="mt-3 text-white/80 max-w-2xl mx-auto">Book a free, no-obligation survey. Our MCS-certified team will design the perfect solar and battery system for your property.</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a href="/contact" className="btn-primary btn-primary-hover">Book Free Survey</a>
          <a href="tel:+447954303766" className="btn-accent">Call Now</a>
          <a href="https://wa.me/447954303766" target="_blank" rel="noopener" className="btn-outline-navy !bg-transparent !text-white !border-white/40 hover:!bg-white/10">WhatsApp Us</a>
        </div>
      </div>
    </section>
  );
}
