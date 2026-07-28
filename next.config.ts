import type { NextConfig } from "next";

import { permanentRedirects } from "./src/data/redirects";
import { securityHeaders } from "./src/lib/security-headers";

const nextConfig: NextConfig = {
  // Politique d'URL du projet : une seule forme canonique, avec slash final.
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["zod"],
  },
  async redirects() {
    return permanentRedirects.map((redirect) => ({
      source: redirect.source,
      destination: redirect.destination,
      permanent: true,
    }));
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
