import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy | Apex Aims Grants Ltd" },
      { name: "description", content: "How Apex Aims Grants Ltd uses cookies and similar technologies on our website." },
      { property: "og:url", content: "/cookies" },
    ],
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
  component: Cookies,
});

function Cookies() {
  return (
    <>
      <PageHero title="Cookie Policy" subtitle="Last updated: January 2026" />
      <Section>
        <article className="prose max-w-3xl mx-auto text-navy">
          <h2 className="text-2xl font-bold mt-6">What are cookies?</h2>
          <p>Small text files stored on your device to make websites work efficiently and to provide information to site owners.</p>
          <h2 className="text-2xl font-bold mt-6">Cookies we use</h2>
          <ul className="list-disc pl-6">
            <li><strong>Strictly necessary</strong> — session and security cookies needed for the site to function.</li>
            <li><strong>Analytics (optional)</strong> — anonymous statistics about site usage to improve content.</li>
          </ul>
          <h2 className="text-2xl font-bold mt-6">Managing cookies</h2>
          <p>You can control or delete cookies in your browser settings. Doing so may affect site functionality.</p>
          <h2 className="text-2xl font-bold mt-6">Contact</h2>
          <p>Questions about cookies? Email <a className="text-green-brand" href="mailto:info@apexaimsgrantsltd.co.uk">info@apexaimsgrantsltd.co.uk</a>.</p>
        </article>
      </Section>
    </>
  );
}
