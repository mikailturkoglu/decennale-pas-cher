import { describe, expect, it } from "vitest";

import { siteConfig } from "@/data/site";
import { absoluteUrl, buildMetadata, formatFrenchDate, normalizePath } from "@/lib/seo";

describe("normalizePath", () => {
  it("impose la politique d’URL du projet : minuscules et slash final", () => {
    expect(normalizePath("Assurance-Decennale-Macon")).toBe("/assurance-decennale-macon/");
    expect(normalizePath("/guides/loi-spinetta")).toBe("/guides/loi-spinetta/");
    expect(normalizePath("/")).toBe("/");
  });

  it("réduit les doubles slashs et retire les paramètres", () => {
    expect(normalizePath("//metiers//gros-oeuvre-structure//")).toBe(
      "/metiers/gros-oeuvre-structure/",
    );
    expect(normalizePath("/devis-assurance-decennale/?trade=macon")).toBe(
      "/devis-assurance-decennale/",
    );
    expect(normalizePath("/prix-assurance-decennale/#profils")).toBe("/prix-assurance-decennale/");
  });
});

describe("absoluteUrl", () => {
  it("préfixe le domaine officiel et conserve le slash final", () => {
    expect(absoluteUrl("/assurance-decennale-macon/")).toBe(
      `${siteConfig.url}/assurance-decennale-macon/`,
    );
    expect(absoluteUrl("/")).toBe(`${siteConfig.url}/`);
  });
});

describe("buildMetadata", () => {
  const seo = {
    title: "Assurance décennale maçon : prix et devis",
    description: "Description de test suffisamment longue pour représenter une vraie page.",
    primaryKeyword: "assurance décennale maçon",
    secondaryKeywords: ["prix décennale maçon"],
  };

  it("produit une canonical absolue avec slash final", () => {
    const metadata = buildMetadata({ seo, path: "/assurance-decennale-macon" });
    expect(metadata.alternates?.canonical).toBe(`${siteConfig.url}/assurance-decennale-macon/`);
  });

  it("respecte une canonical explicite", () => {
    const metadata = buildMetadata({
      seo: { ...seo, canonicalPath: "/assurance-decennale/" },
      path: "/assurance-decennale-macon/",
    });
    expect(metadata.alternates?.canonical).toBe(`${siteConfig.url}/assurance-decennale/`);
  });

  it("aligne l’URL Open Graph sur la canonical", () => {
    const metadata = buildMetadata({ seo, path: "/assurance-decennale-macon/" });
    expect(metadata.openGraph?.url).toBe(metadata.alternates?.canonical);
  });

  it("déclare une image Open Graph avec slash final, pour éviter une redirection", () => {
    const metadata = buildMetadata({ seo, path: "/" });
    const images = metadata.openGraph?.images;
    const url = Array.isArray(images)
      ? (images[0] as { url: string }).url
      : (images as { url: string }).url;
    expect(url).toBe(`${siteConfig.url}/opengraph-image/`);
  });

  it("laisse suivre les liens d’une page en noindex", () => {
    const metadata = buildMetadata({
      seo: { ...seo, noindex: true },
      path: "/devis-assurance-decennale/merci/",
    });
    expect(metadata.robots).toMatchObject({ index: false, follow: true });
  });
});

describe("formatFrenchDate", () => {
  it("formate en français et emploie « 1er » pour le premier du mois", () => {
    expect(formatFrenchDate("2026-08-01")).toBe("1er août 2026");
    expect(formatFrenchDate("2026-02-15")).toBe("15 février 2026");
  });

  it("restitue la valeur brute si la date est invalide", () => {
    expect(formatFrenchDate("date-inconnue")).toBe("date-inconnue");
  });
});
