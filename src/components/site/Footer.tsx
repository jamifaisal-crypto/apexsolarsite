import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-navy text-white mt-24">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="bg-white rounded-xl p-3 inline-block">
            <img src={logo} alt="Apex Aims Grants Ltd" className="h-12 w-auto" width={1280} height={512} loading="lazy" />
          </div>
          <p className="mt-4 text-sm text-white/80 max-w-xs">
            MCS-certified solar PV, battery storage and energy efficiency across the UK. Powering homes, saving money, protecting the planet.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/solar-panels" className="hover:text-white">Solar Panels</Link></li>
            <li><Link to="/battery-storage" className="hover:text-white">Battery Storage</Link></li>
            <li><Link to="/commercial" className="hover:text-white">Commercial Solar</Link></li>
            <li><Link to="/finance" className="hover:text-white">Finance Options</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/cookies" className="hover:text-white">Cookie Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms &amp; Conditions</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 shrink-0 text-green-brand" /><a href="tel:+447954303766">+44 7954 303766</a></li>
            <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 shrink-0 text-green-brand" /><a href="tel:+442087092051">+44 20 8709 2051</a></li>
            <li className="flex gap-2"><Mail className="w-4 h-4 mt-0.5 shrink-0 text-green-brand" /><a href="mailto:info@apexaimsgrantsltd.co.uk">info@apexaimsgrantsltd.co.uk</a></li>
            <li className="flex gap-2"><MessageCircle className="w-4 h-4 mt-0.5 shrink-0 text-green-brand" /><a href="https://wa.me/447954303766" target="_blank" rel="noopener">WhatsApp Us</a></li>
            <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0 text-green-brand" /><span>1st Floor, Wellesley House, 98–102 Cranbrook Road, Ilford, IG1 4NH</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-5 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Apex Aims Grants Ltd. All rights reserved.</p>
          <p>MCS Certified · Fully Insured · Locally Based · Expert Local Team</p>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/447954303766"
      target="_blank"
      rel="noopener"
      aria-label="WhatsApp us"
      className="fixed bottom-5 right-5 z-40 bg-green-brand text-white rounded-full p-4 shadow-lift hover:scale-110 transition"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
