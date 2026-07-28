import { ImageResponse } from "next/og";

import { siteConfig } from "@/data/site";

/**
 * Image Open Graph du site.
 *
 * Une seule image, sobre et générée au build : elle porte la marque et la
 * promesse, sans donnée susceptible de devenir fausse (ni prix, ni chiffre, ni
 * logo de partenaire). Les pages peuvent la remplacer en renseignant
 * `seo.ogImage`.
 */
export const alt = "DécennaleBTP.fr — l’assurance décennale adaptée à votre métier";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b1f33",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 56,
              background: "#f59e0b",
            }}
          />
          <span style={{ color: "#ffffff", fontSize: 40, fontWeight: 700 }}>
            Décennale<span style={{ color: "#f59e0b" }}>BTP</span>.fr
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span style={{ color: "#ffffff", fontSize: 72, fontWeight: 700, lineHeight: 1.1 }}>
            {siteConfig.baseline}
          </span>
          <span style={{ color: "#d9e0e8", fontSize: 32, lineHeight: 1.3 }}>
            Comparez des solutions d’assurance décennale adaptées aux activités que vous exercez
            réellement.
          </span>
        </div>

        <span style={{ color: "#d9e0e8", fontSize: 26 }}>
          Métiers du BTP · Situations de souscription · Guides sourcés
        </span>
      </div>
    ),
    size,
  );
}
