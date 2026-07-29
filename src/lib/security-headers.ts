/**
 * En-têtes de sécurité appliqués à toutes les réponses (voir next.config.ts).
 *
 * La CSP autorise `'unsafe-inline'` pour les scripts : Next.js injecte des
 * scripts d'hydratation inline et le site est majoritairement prérendu, ce qui
 * empêche l'usage d'un nonce sans rendre chaque page dynamique. Le durcissement
 * prévu consiste à générer un nonce dans un middleware une fois les pages
 * dynamiques identifiées ; les autres directives restent volontairement
 * restrictives.
 */

/** Domaines du vérificateur anti-robot, ajoutés uniquement s'il est configuré. */
const TURNSTILE_ORIGIN = "https://challenges.cloudflare.com";

/** Domaines Google Analytics / Tag Manager, ajoutés uniquement si GA4 est configuré. */
const GTAG_SCRIPT_ORIGINS = "https://www.googletagmanager.com";
const GTAG_CONNECT_ORIGINS =
  "https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com https://www.googletagmanager.com";
const GTAG_IMG_ORIGINS = "https://www.google-analytics.com https://www.googletagmanager.com";

const usesTurnstile = Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);
const usesAnalytics = Boolean(process.env.NEXT_PUBLIC_ANALYTICS_ID?.trim());

const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${usesTurnstile ? ` ${TURNSTILE_ORIGIN}` : ""}${usesAnalytics ? ` ${GTAG_SCRIPT_ORIGINS}` : ""}`,
  "style-src 'self' 'unsafe-inline'",
  `img-src 'self' data: blob:${usesAnalytics ? ` ${GTAG_IMG_ORIGINS}` : ""}`,
  "font-src 'self' data:",
  `connect-src 'self'${usesAnalytics ? ` ${GTAG_CONNECT_ORIGINS}` : ""}`,
  `frame-src ${usesTurnstile ? TURNSTILE_ORIGIN : "'none'"}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
]
  .join("; ")
  .concat(";");

export const securityHeaders: { key: string; value: string }[] = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "X-DNS-Prefetch-Control", value: "off" },
];
