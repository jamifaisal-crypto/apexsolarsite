import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // Simulate submit; wire to backend later
    setTimeout(() => navigate({ to: "/thank-you" }), 400);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <div className={`grid gap-3 ${compact ? "" : "md:grid-cols-2"}`}>
        <Field name="name" label="Full name" placeholder="Jane Smith" required />
        <Field name="phone" label="Phone" type="tel" placeholder="07…" required />
        <Field name="email" label="Email" type="email" placeholder="you@email.com" required />
        <Field name="postcode" label="Postcode" placeholder="IG1 4NH" required />
      </div>
      <label className="text-sm font-medium text-navy">
        Property type
        <select name="property" required className="mt-1 w-full rounded-xl border border-input bg-white px-3 py-3 text-base focus:outline-none focus:ring-2 focus:ring-ring">
          <option value="">Select…</option>
          <option>Detached house</option>
          <option>Semi-detached</option>
          <option>Terraced</option>
          <option>Bungalow</option>
          <option>Flat</option>
          <option>Commercial</option>
        </select>
      </label>
      <label className="text-sm font-medium text-navy">
        Message (optional)
        <textarea name="message" rows={3} placeholder="Tell us about your energy use, roof, or timing…" className="mt-1 w-full rounded-xl border border-input bg-white px-3 py-3 text-base focus:outline-none focus:ring-2 focus:ring-ring" />
      </label>
      <button disabled={submitting} className="btn-primary btn-primary-hover mt-2 disabled:opacity-70">
        {submitting ? "Sending…" : "Book my free survey"}
      </button>
      <p className="text-xs text-muted-foreground flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-green-brand" /> No obligation. We reply within 1 working day.</p>
    </form>
  );
}

function Field({ name, label, type = "text", placeholder, required }: { name: string; label: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <label className="text-sm font-medium text-navy">
      {label}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-1 w-full rounded-xl border border-input bg-white px-3 py-3 text-base focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </label>
  );
}
