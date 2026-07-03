import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You — Your Free Survey is Booked | Apex Aims Grants" },
      { name: "description", content: "Thanks for your enquiry. Our team will contact you within one working day to arrange your free solar and battery survey." },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/thank-you" }],
  }),
  component: ThankYou,
});

function ThankYou() {
  return (
    <Section>
      <div className="max-w-2xl mx-auto text-center">
        <CheckCircle2 className="w-16 h-16 text-green-brand mx-auto" />
        <h1 className="mt-4 text-4xl md:text-5xl font-bold text-navy">Thank you!</h1>
        <p className="mt-4 text-muted-foreground">Your enquiry has been received. One of our MCS-certified surveyors will contact you within one working day to confirm your free survey.</p>
        <div className="mt-8 grid sm:grid-cols-3 gap-3 text-left">
          {["We review your details", "We call you to confirm timing", "We arrange the survey"].map((s, i) => (
            <div key={s} className="card-soft"><div className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center font-bold">{i + 1}</div><p className="mt-2 font-medium text-navy">{s}</p></div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-outline-navy">Back to home</Link>
          <a href="https://wa.me/447954303766" target="_blank" rel="noopener" className="btn-primary btn-primary-hover">WhatsApp us now</a>
        </div>
      </div>
    </Section>
  );
}
