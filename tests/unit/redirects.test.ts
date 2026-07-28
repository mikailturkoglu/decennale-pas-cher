import { describe, expect, it } from "vitest";

import { permanentRedirects } from "@/data/redirects";
import { allContentPages, contentPath, knownPaths } from "@/lib/content";
import { normalizePath } from "@/lib/seo";

/**
 * Canonicalisation : une seule URL par contenu, toute variante étant redirigée.
 */

const destinations = new Set(knownPaths);

describe("redirections permanentes", () => {
  it("visent toutes une page réellement servie", () => {
    for (const redirect of permanentRedirects) {
      expect(destinations.has(redirect.destination), redirect.source).toBe(true);
    }
  });

  it("emploient la politique de slash final", () => {
    for (const redirect of permanentRedirects) {
      expect(redirect.source).toBe(normalizePath(redirect.source));
      expect(redirect.destination).toBe(normalizePath(redirect.destination));
    }
  });

  it("ne redirigent jamais une URL canonique existante", () => {
    const canonicals = new Set(allContentPages.map(contentPath));
    for (const redirect of permanentRedirects) {
      expect(canonicals.has(redirect.source), redirect.source).toBe(false);
    }
  });

  it("ne déclarent aucune source en doublon", () => {
    const sources = permanentRedirects.map((redirect) => redirect.source);
    expect(new Set(sources).size).toBe(sources.length);
  });

  it("ne créent aucune chaîne de redirection", () => {
    const sources = new Set(permanentRedirects.map((redirect) => redirect.source));
    for (const redirect of permanentRedirects) {
      expect(sources.has(redirect.destination), redirect.destination).toBe(false);
    }
  });

  it("couvrent les variantes annoncées dans le cadrage", () => {
    const map = new Map(
      permanentRedirects.map((redirect) => [redirect.source, redirect.destination]),
    );
    const expected: Record<string, string> = {
      "/decennale-macon/": "/assurance-decennale-macon/",
      "/assurance-decennale-maconnerie/": "/assurance-decennale-macon/",
      "/garantie-decennale-macon/": "/assurance-decennale-macon/",
      "/tarif-assurance-decennale/": "/prix-assurance-decennale/",
      "/assurance-decennale-rapide/": "/attestation-decennale-rapide/",
      "/assurance-decennale-immediate/": "/attestation-decennale-rapide/",
      "/decennale-24h/": "/attestation-decennale-rapide/",
      "/decennale-micro-entrepreneur/": "/decennale-auto-entrepreneur/",
      "/assurance-decennale-resilie/": "/decennale-apres-resiliation/",
      "/decennale-resilie-non-paiement/": "/decennale-non-paiement/",
    };

    for (const [source, destination] of Object.entries(expected)) {
      expect(map.get(source), source).toBe(destination);
    }
  });
});
