import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Apex Aims Grants Ltd" },
      { name: "description", content: "How Apex Aims Grants Ltd collects, uses and protects your personal data." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <PageHero title="Privacy Policy" subtitle="Last updated: January 2026" />
      <Section>
        <article className="prose max-w-3xl mx-auto text-navy">
          <h2 className="text-2xl font-bold mt-6">1. Who we are</h2>
          <p>Apex Aims Grants Ltd ("we", "us", "our") is a company registered in England and Wales. Registered office: 1st Floor, Wellesley House, 98–102 Cranbrook Road, Ilford, IG1 4NH.</p>
          <h2 className="text-2xl font-bold mt-6">2. What data we collect</h2>
          <p>Name, phone, email, postcode, property type, and any information you include in your enquiry message.</p>
          <h2 className="text-2xl font-bold mt-6">3. How we use it</h2>
          <p>Solely to respond to your enquiry, provide a survey/quotation, and administer any contract for services.</p>
          <h2 className="text-2xl font-bold mt-6">4. Lawful basis</h2>
          <p>Consent when you submit our form, and contract necessity when you proceed with an installation.</p>
          <h2 className="text-2xl font-bold mt-6">5. Sharing</h2>
          <p>With approved finance partners (only if you choose finance), MCS/DNO/manufacturers as required, and IT service providers acting on our behalf.</p>
          <h2 className="text-2xl font-bold mt-6">6. Retention</h2>
          <p>Enquiry data is retained for up to 24 months. Contract records are retained for 7 years for tax and warranty purposes.</p>
          <h2 className="text-2xl font-bold mt-6">7. Your rights</h2>
          <p>Access, rectification, erasure, restriction, portability and objection. Email <a className="text-green-brand" href="mailto:info@apexaimsgrantsltd.co.uk">info@apexaimsgrantsltd.co.uk</a>.</p>
          <h2 className="text-2xl font-bold mt-6">8. ICO</h2>
          <p>You can complain to the Information Commissioner's Office (ico.org.uk) at any time.</p>
        </article>
      </Section>
    </>
  );
}
