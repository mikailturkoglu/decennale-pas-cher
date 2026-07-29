import type { Metadata, Viewport } from "next";

import "@/app/globals.css";

import { ConsentManager, MeasurementLoader } from "@/components/analytics/ConsentManager";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/data/site";
import { jsonLdGraph, organizationSchema, webSiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Comparateur assurance décennale BTP | DécennaleBTP.fr",
    template: "%s",
  },
  description: siteConfig.shortDescription,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1f33",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={siteConfig.language}>
      <body className="flex min-h-screen flex-col">
        <GoogleAnalytics />
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
        >
          Aller au contenu principal
        </a>
        <Header />
        <main id="contenu" className="flex-1">
          {children}
        </main>
        <Footer />
        <ConsentManager />
        <MeasurementLoader />
        <JsonLd data={jsonLdGraph([organizationSchema(), webSiteSchema()])} />
      </body>
    </html>
  );
}
