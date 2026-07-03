import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Apex Aims Grants Ltd" },
      { name: "description", content: "Terms and conditions governing the use of the Apex Aims Grants Ltd website and services." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <>
      <PageHero title="Terms & Conditions" subtitle="Last updated: January 2026" />
      <Section>
        <article className="prose max-w-3xl mx-auto text-navy">
          <h2 className="text-2xl font-bold mt-6">1. About these terms</h2>
          <p>These terms govern your use of apexaimsgrantsltd.co.uk and any enquiry, survey or installation contract you enter with Apex Aims Grants Ltd.</p>
          <h2 className="text-2xl font-bold mt-6">2. Quotations</h2>
          <p>Quotations are valid for 30 days unless stated otherwise and are subject to on-site survey and DNO approval.</p>
          <h2 className="text-2xl font-bold mt-6">3. Deposits & payment</h2>
          <p>A deposit may be required to secure your installation slot. Balance is due per the payment schedule in your contract.</p>
          <h2 className="text-2xl font-bold mt-6">4. Cancellation</h2>
          <p>You have a 14-day cooling-off period under Consumer Contracts Regulations 2013. After installation begins, cancellation may attract costs for materials and labour committed.</p>
          <h2 className="text-2xl font-bold mt-6">5. Warranties</h2>
          <p>Manufacturer warranties apply to panels, inverters and batteries. We provide a workmanship warranty as described in your contract.</p>
          <h2 className="text-2xl font-bold mt-6">6. Liability</h2>
          <p>Nothing in these terms excludes or limits liability that cannot be excluded under English law. Otherwise, our liability is limited to the contract value.</p>
          <h2 className="text-2xl font-bold mt-6">7. Governing law</h2>
          <p>These terms are governed by the laws of England and Wales.</p>
        </article>
      </Section>
    </>
  );
}
