import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/solar-panels", label: "Solar Panels" },
  { to: "/battery-storage", label: "Battery Storage" },
  { to: "/commercial", label: "Commercial" },
  { to: "/finance", label: "Finance" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-border">
      <div className="container-page flex items-center justify-between py-3 gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Apex Aims Grants Ltd" className="h-10 md:h-12 w-auto" width={1280} height={512} />
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
        <div className="hidden md:flex items-center gap-2">
          <a href="tel:+447954303766" className="btn-outline-navy text-sm !py-2 !px-3">
            <Phone className="w-4 h-4" /> Call Now
          </a>
          <Link to="/contact" className="btn-primary btn-primary-hover text-sm !py-2 !px-4">
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
            <div className="flex gap-2 pt-3">
              <a href="tel:+447954303766" className="btn-outline-navy flex-1 text-sm">
                <Phone className="w-4 h-4" /> Call
              </a>
              <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary btn-primary-hover flex-1 text-sm">
                Book Survey
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
