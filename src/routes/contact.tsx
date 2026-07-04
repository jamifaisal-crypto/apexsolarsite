import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, TrustBar } from "@/components/site/Section";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { LeadForm } from "@/components/site/LeadForm";
import img from "@/assets/installer.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Apex Aims Grants Ltd — Book a Free Solar Survey" },
      { name: "description", content: "Call, WhatsApp or email Apex Aims Grants Ltd. Book your free, no-obligation solar and battery survey anywhere in the UK." },
      { property: "og:title", content: "Contact Apex Aims Grants Ltd" },
      { property: "og:description", content: "Book a free solar and battery survey. Call, WhatsApp or email us today." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Book Your Free Survey"
        subtitle="One of our MCS-certified surveyors will reply within one working day."
        image={img}
        imageAlt="Apex Aims engineer meeting a customer to plan a solar installation"
      >
        <a href="tel:+447954303766" className="btn-primary btn-primary-hover"><Phone className="w-4 h-4" /> Call +44 7954 303766</a>
        <a href="https://wa.me/447954303766" target="_blank" rel="noopener" className="btn-outline-navy"><MessageCircle className="w-4 h-4" /> WhatsApp</a>
      </PageHero>
      <TrustBar />

      <Section>
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 card-soft">
            <LeadForm />
          </div>
          <div className="lg:col-span-2 space-y-4">
            <div className="card-soft">
              <h3 className="font-semibold text-navy text-lg">Contact details</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex gap-3"><Phone className="w-5 h-5 text-green-brand" /> <a href="tel:+447954303766">+44 7954 303766</a></li>
                <li className="flex gap-3"><Phone className="w-5 h-5 text-green-brand" /> <a href="tel:+442087092051">+44 20 8709 2051</a></li>
                <li className="flex gap-3"><Mail className="w-5 h-5 text-green-brand" /> <a href="mailto:info@apexaimsgrantsltd.co.uk">info@apexaimsgrantsltd.co.uk</a></li>
                <li className="flex gap-3"><MessageCircle className="w-5 h-5 text-green-brand" /> <a href="https://wa.me/447954303766" target="_blank" rel="noopener">WhatsApp us</a></li>
                <li className="flex gap-3"><MapPin className="w-5 h-5 text-green-brand" /> <a href="https://www.google.com/maps/search/?api=1&query=1st%20Floor%2C%20Wellesley%20House%2C%2098-102%20Cranbrook%20Road%2C%20Ilford%2C%20IG1%204NH" target="_blank" rel="noopener" className="hover:text-navy">1st Floor, Wellesley House, 98–102 Cranbrook Road, Ilford, IG1 4NH</a></li>
                <li className="flex gap-3"><Clock className="w-5 h-5 text-green-brand" /> Mon–Sat 8:00–18:00</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
