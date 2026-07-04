import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, TrustBar, CtaBand } from "@/components/site/Section";
import { SavingsCalculator } from "@/components/site/SavingsCalculator";

export const Route = createFileRoute("/savings-calculator")({
  head: () => ({
    meta: [
      { title: "Solar Savings Calculator — Apex Aims Grants Ltd" },
      { name: "description", content: "Estimate your solar and battery savings in seconds. Enter your bill, region and battery preference to see your recommended system, annual saving and payback period." },
      { property: "og:title", content: "Solar Savings Calculator — Apex Aims Grants" },
      { property: "og:description", content: "See your estimated solar savings, payback period and recommended package in seconds." },
      { property: "og:url", content: "/savings-calculator" },
    ],
    links: [{ rel: "canonical", href: "/savings-calculator" }],
  }),
  component: SavingsCalculatorPage,
});

function SavingsCalculatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Free Calculator"
        title="Solar Savings Calculator"
        subtitle="Enter your monthly bill, region and battery preference to see your recommended system, estimated annual saving and payback period."
      />
      <TrustBar />
      <Section>
        <SavingsCalculator />
      </Section>
      <CtaBand />
    </>
  );
}
