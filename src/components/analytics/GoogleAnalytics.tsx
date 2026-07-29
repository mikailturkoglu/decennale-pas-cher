import Script from "next/script";

import { ANALYTICS_MEASUREMENT_ID } from "@/lib/analytics";

/**
 * Charge Google Analytics 4 (gtag.js) dès le chargement de la page.
 */
export function GoogleAnalytics() {
  if (!ANALYTICS_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${ANALYTICS_MEASUREMENT_ID}', {
            anonymize_ip: true,
            send_page_view: false
          });
        `}
      </Script>
    </>
  );
}
