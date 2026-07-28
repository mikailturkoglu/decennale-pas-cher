import { describe, expect, it } from "vitest";

import { tradeSearchIndex } from "@/data/trades";
import { matchesTokens, normalizeSearch, searchTokens } from "@/lib/search";

describe("normalizeSearch", () => {
  it("retire accents, apostrophes et ligatures", () => {
    expect(normalizeSearch("Maçon")).toBe("macon");
    expect(normalizeSearch("Maître d’œuvre")).toBe("maitre d oeuvre");
    expect(normalizeSearch("Électricien")).toBe("electricien");
  });

  it("réduit la ponctuation à des espaces simples", () => {
    expect(normalizeSearch("  VRD (voirie/réseaux)  ")).toBe("vrd voirie reseaux");
  });
});

describe("searchTokens", () => {
  it("ignore les termes d’un seul caractère", () => {
    expect(searchTokens("gros œuvre à Bordeaux")).toEqual(["gros", "oeuvre", "bordeaux"]);
  });

  it("renvoie une liste vide pour une saisie vide", () => {
    expect(searchTokens("   ")).toEqual([]);
  });
});

describe("recherche de métier", () => {
  function find(query: string): string[] {
    const tokens = searchTokens(query);
    return tradeSearchIndex
      .filter((trade) => matchesTokens(trade.haystack, tokens))
      .map((trade) => trade.value);
  }

  it("trouve un métier saisi sans accent", () => {
    expect(find("macon")).toContain("macon");
    expect(find("electricite")).toContain("electricien");
  });

  it("trouve un métier par un synonyme du registre", () => {
    expect(find("maçonnerie")).toContain("macon");
    expect(find("toiture-terrasse")).toContain("etancheur");
    expect(find("pompe à chaleur")).toContain("chauffagiste");
    expect(find("cloisons sèches")).toContain("plaquiste");
  });

  it("permet de filtrer par famille de métiers", () => {
    const results = find("gros œuvre");
    expect(results).toContain("macon");
    expect(results).not.toContain("peintre");
  });

  it("exige la présence de tous les mots saisis", () => {
    expect(find("macon")).toContain("macon");
    expect(find("macon photovoltaique")).toHaveLength(0);
  });

  it("ne renvoie rien pour une saisie hors sujet", () => {
    expect(find("boulanger")).toHaveLength(0);
  });
});
