import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/solar-panels", label: "Solar Panels" },
  { to: "/battery-storage", label: "Battery Storage" },
  { to: "/commercial", label: "Commercial Solar" },
  { to: "/finance", label: "Finance" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
      {/* Top info bar */}
      <div className="hidden md:block bg-navy text-white/90 text-xs">
        <div className="container-page flex items-center justify-between py-1.5">
          <span className="opacity-80">MCS Certified · Fully Insured · UK-wide Installation</span>
          <div className="flex items-center gap-5">
            <a href="tel:+447954303766" className="flex items-center gap-1.5 hover:text-white">
              <Phone className="w-3.5 h-3.5" /> +44 7954 303766
            </a>
            <a href="mailto:info@apexaimsgrantsltd.co.uk" className="flex items-center gap-1.5 hover:text-white">
              <Mail className="w-3.5 h-3.5" /> info@apexaimsgrantsltd.co.uk
            </a>
          </div>
        </div>
      </div>

      <div className="container-page flex items-center justify-between py-3 gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Apex Aims Grants Ltd" className="h-11 md:h-14 w-auto" width={1280} height={512} />
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-2 rounded-lg text-sm font-medium text-navy hover:bg-muted transition"
              activeProps={{ className: "px-3 py-2 rounded-lg text-sm font-semibold text-green-brand bg-muted" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Link to="/contact" className="btn-primary btn-primary-hover text-sm !py-2.5 !px-4">
            Book Free Survey
          </Link>
        </div>
        <button
          className="lg:hidden p-2 rounded-lg text-navy"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="container-page py-3 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-lg text-navy font-medium hover:bg-muted"
              >
                {n.label}
              </Link>
            ))}
            <div className="pt-3">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="btn-primary btn-primary-hover w-full text-sm"
              >
                Book Free Survey
              </Link>
              <a
                href="tel:+447954303766"
                className="mt-2 flex items-center justify-center gap-2 text-sm text-navy py-2"
              >
                <Phone className="w-4 h-4 text-green-brand" /> +44 7954 303766
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
