import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer, WhatsAppFloat } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <>
      <Header />
      <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-green-brand">Error 404</p>
          <h1 className="mt-3 text-7xl font-bold text-navy">Off the grid</h1>
          <p className="mt-4 text-muted-foreground">
            The page you're looking for doesn't exist or has moved. Let's get you back on track.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/" className="btn-primary btn-primary-hover">Go home</Link>
            <Link to="/contact" className="btn-outline-navy">Contact us</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-navy">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try refreshing or head home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-primary btn-primary-hover">Try again</button>
          <a href="/" className="btn-outline-navy">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Apex Aims Grants Ltd — MCS Solar PV & Battery Storage UK" },
      { name: "description", content: "MCS-certified solar panel and battery storage installation across the UK. Book a free survey and cut your energy bills with Apex Aims Grants Ltd." },
      { name: "author", content: "Apex Aims Grants Ltd" },
      { property: "og:site_name", content: "Apex Aims Grants Ltd" },
      { property: "og:title", content: "Apex Aims Grants Ltd — Solar PV & Battery Storage" },
      { property: "og:description", content: "MCS-certified solar and battery installation across the UK. Free surveys, flexible finance, 10-year battery warranty." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0D2B45" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Apex Aims Grants Ltd",
          image: "/favicon.ico",
          telephone: "+44 7954 303766",
          email: "info@apexaimsgrantsltd.co.uk",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1st Floor, Wellesley House, 98–102 Cranbrook Road",
            addressLocality: "Ilford",
            postalCode: "IG1 4NH",
            addressCountry: "GB",
          },
          areaServed: "United Kingdom",
          priceRange: "££",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </QueryClientProvider>
  );
}
