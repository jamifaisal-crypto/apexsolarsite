import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

// Ofgem energy price cap unit rate, £/kWh — update this quarterly
const UNIT_RATE = 0.2611;
// Smart Export Guarantee payment, £/kWh exported
const SEG_RATE = 0.1;
// Typical annual generation, kWh per kWp installed, by region
const GENERATION_PER_KWP: Record<Region, number> = {
  south: 950,
  midlands: 870,
  north: 800,
  scotland: 750,
};
// Share of generation used directly in the home, rather than exported
const SELF_CONSUMPTION = { withBattery: 0.7, withoutBattery: 0.35 };

const PACKAGES = [
  { name: "Essential Storage", kwp: 3.64, price: 8260, maxUsage: 3000 },
  { name: "Most Popular", kwp: 5.46, price: 9300, maxUsage: 4500 },
  { name: "Max Independence", kwp: 6.37, price: 11560, maxUsage: Infinity },
] as const;

type Region = "south" | "midlands" | "north" | "scotland";

const REGIONS: { value: Region; label: string }[] = [
  { value: "south", label: "South England" },
  { value: "midlands", label: "Midlands / Wales" },
  { value: "north", label: "North England" },
  { value: "scotland", label: "Scotland" },
];

function formatMoney(n: number) {
  return Math.round(n).toLocaleString("en-GB");
}

export function SavingsCalculator() {
  const [monthlyBill, setMonthlyBill] = useState(120);
  const [region, setRegion] = useState<Region>("south");
  const [hasBattery, setHasBattery] = useState(true);

  const results = useMemo(() => {
    const annualUsage = (monthlyBill * 12) / UNIT_RATE;
    const pkg = PACKAGES.find((p) => annualUsage < p.maxUsage) ?? PACKAGES[PACKAGES.length - 1];
    const generation = pkg.kwp * GENERATION_PER_KWP[region];
    const selfConsumptionRate = hasBattery ? SELF_CONSUMPTION.withBattery : SELF_CONSUMPTION.withoutBattery;
    const selfUsed = Math.min(generation * selfConsumptionRate, annualUsage);
    const exported = Math.max(generation - selfUsed, 0);
    const annualSaving = selfUsed * UNIT_RATE + exported * SEG_RATE;
    const payback = pkg.price / annualSaving;
    const lifetimeSaving = annualSaving * 25;

    return { pkg, annualSaving, payback, lifetimeSaving };
  }, [monthlyBill, region, hasBattery]);

  const regionLabel = REGIONS.find((r) => r.value === region)?.label ?? region;

  const whatsappMessage = [
    "Hi, I'd like to check my solar savings estimate:",
    `Monthly bill: £${monthlyBill}`,
    `Region: ${regionLabel}`,
    `Battery storage: ${hasBattery ? "Yes" : "No"}`,
    `Recommended package: ${results.pkg.name}`,
    `Estimated annual saving: £${formatMoney(results.annualSaving)}/yr`,
    `Estimated payback: ${results.payback.toFixed(1)} years`,
    "",
    "I'd like a free survey please.",
  ].join("\n");
  const whatsappUrl = `https://wa.me/447954303766?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      {/* Inputs */}
      <div className="card-soft space-y-8">
        <div>
          <label htmlFor="monthly-bill" className="flex items-center justify-between text-sm font-semibold text-navy mb-3">
            <span>Monthly electricity bill</span>
            <span className="text-2xl font-extrabold text-orange-brand">£{monthlyBill}</span>
          </label>
          <Slider
            id="monthly-bill"
            min={40}
            max={400}
            step={5}
            value={[monthlyBill]}
            onValueChange={([v]) => setMonthlyBill(v)}
            aria-label="Monthly electricity bill"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>£40</span>
            <span>£400</span>
          </div>
        </div>

        <div>
          <label htmlFor="region" className="block text-sm font-semibold text-navy mb-2">
            Region
          </label>
          <Select value={region} onValueChange={(v) => setRegion(v as Region)}>
            <SelectTrigger id="region" aria-label="Region">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {REGIONS.map((r) => (
                <SelectItem key={r.value} value={r.value}>
                  {r.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <span className="block text-sm font-semibold text-navy mb-2">Battery storage</span>
          <div className="grid grid-cols-2 gap-3" role="group" aria-label="Battery storage">
            <Button
              type="button"
              variant={hasBattery ? "default" : "outline"}
              onClick={() => setHasBattery(true)}
              aria-pressed={hasBattery}
              className={hasBattery ? "bg-green-brand hover:bg-green-brand/90" : ""}
            >
              Yes
            </Button>
            <Button
              type="button"
              variant={!hasBattery ? "default" : "outline"}
              onClick={() => setHasBattery(false)}
              aria-pressed={!hasBattery}
              className={!hasBattery ? "bg-green-brand hover:bg-green-brand/90" : ""}
            >
              No
            </Button>
          </div>
        </div>
      </div>

      {/* Results */}
      <div>
        <div className="grid grid-cols-2 gap-4">
          <div className="card-soft text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Recommended system</p>
            <p className="mt-2 text-3xl font-extrabold text-orange-brand">{results.pkg.kwp} kWp</p>
          </div>
          <div className="card-soft text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Annual saving</p>
            <p className="mt-2 text-3xl font-extrabold text-orange-brand">£{formatMoney(results.annualSaving)}/yr</p>
          </div>
          <div className="card-soft text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Payback period</p>
            <p className="mt-2 text-3xl font-extrabold text-orange-brand">{results.payback.toFixed(1)} yrs</p>
          </div>
          <div className="card-soft text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">25-year saving</p>
            <p className="mt-2 text-3xl font-extrabold text-orange-brand">£{formatMoney(results.lifetimeSaving)}</p>
          </div>
        </div>

        <p className="mt-5 text-center text-navy">
          We recommend the{" "}
          <Link to="/pricing-finance" className="font-bold text-green-brand underline underline-offset-2 hover:text-navy">
            {results.pkg.name}
          </Link>{" "}
          package for your home.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener"
          className="mt-6 flex items-center justify-center gap-2 w-full bg-green-brand text-white font-bold rounded-xl px-6 py-3.5 shadow-[0_8px_24px_-10px_rgba(46,158,62,0.65)] transition hover:-translate-y-0.5 hover:bg-green-brand/90"
        >
          <MessageCircle className="w-5 h-5" /> Send my results to us on WhatsApp
        </a>

        <p className="mt-4 text-xs text-muted-foreground text-center">
          Estimates only, based on typical performance and the figures you enter. Your exact saving is confirmed after a free home survey.
        </p>
      </div>
    </div>
  );
}
