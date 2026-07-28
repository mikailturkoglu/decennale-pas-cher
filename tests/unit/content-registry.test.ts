import { describe, expect, it } from "vitest";

import { infoPages } from "@/content/corporate";
import { guidePages } from "@/content/guides";
import { situationPages } from "@/content/situations";
import { tradePages } from "@/content/trades";
import { situationRegistry } from "@/data/situations";
import { tradeCategories } from "@/data/trade-categories";
import { findTradeBySlug, tradeRegistry, tradeSearchIndex } from "@/data/trades";
import {
  allContentPages,
  contentPath,
  findRootPage,
  knownPaths,
  resolveInternalLink,
  rootSlugAllowlist,
  sitemapEntries,
} from "@/lib/content";
import { normalizePath } from "@/lib/seo";

/**
 * Cohérence du registre de contenu.
 *
 * Ces tests protègent les garde-fous du brief : pas d'URL fantôme, pas de
 * métadonnée dupliquée, pas de lien interne mort, pas de page non indexable
 * dans le sitemap, et un contenu réellement spécifique par page métier.
 */

describe("route dynamique racine", () => {
  it("ne sert que les slugs de l’allowlist", () => {
    for (const slug of rootSlugAllowlist) {
      expect(findRootPage(slug)).toBeDefined();
    }
  });

  it("refuse tout slug arbitraire", () => {
    for (const slug of [
      "assurance-decennale-paris",
      "assurance-decennale-plombier-lyon",
      "../mentions-legales",
      "",
    ]) {
      expect(findRootPage(slug)).toBeUndefined();
    }
  });

  it("n’expose aucun doublon de slug", () => {
    expect(new Set(rootSlugAllowlist).size).toBe(rootSlugAllowlist.length);
  });
});

describe("métadonnées", () => {
  it("sont uniques par page", () => {
    const titles = allContentPages.map((page) => page.seo.title);
    const descriptions = allContentPages.map((page) => page.seo.description);
    expect(new Set(titles).size).toBe(titles.length);
    expect(new Set(descriptions).size).toBe(descriptions.length);
  });

  it("respectent les longueurs conseillées", () => {
    for (const page of allContentPages) {
      expect(page.seo.title.length, `title de ${contentPath(page)}`).toBeLessThanOrEqual(70);
      expect(
        page.seo.description.length,
        `description de ${contentPath(page)}`,
      ).toBeLessThanOrEqual(165);
      expect(page.seo.description.length).toBeGreaterThanOrEqual(80);
    }
  });

  it("déclarent un mot-clé principal", () => {
    for (const page of allContentPages) {
      expect(page.seo.primaryKeyword.trim().length, contentPath(page)).toBeGreaterThan(0);
    }
  });
});

describe("chemins", () => {
  it("suivent la politique d’URL : minuscules, sans accent, slash final", () => {
    for (const page of allContentPages) {
      const path = contentPath(page);
      expect(path).toBe(normalizePath(path));
      expect(path).toMatch(/^\/[a-z0-9/-]*\/$/);
    }
  });

  it("sont uniques", () => {
    const paths = allContentPages.map(contentPath);
    expect(new Set(paths).size).toBe(paths.length);
  });
});

/**
 * Chemins qu'une page déclare pointer, tous champs de maillage confondus.
 *
 * Les renvois entre métiers peuvent citer un métier voisin dont la page n'est
 * pas encore publiée : le gabarit ne rend alors que les liens résolus. Ces
 * slugs de feuille de route sont donc écartés du contrôle des liens réels et
 * vérifiés séparément contre le registre.
 */
function declaredLinks(page: (typeof allContentPages)[number]): string[] {
  const paths = [...(page.relatedPaths ?? [])];

  if (page.type === "trade") {
    paths.push(...page.relatedTradeSlugs.map((slug) => `/${slug}/`));
  }
  if (page.type === "situation") {
    paths.push(...page.suggestedTradeSlugs.map((slug) => `/${slug}/`));
  }
  if (page.type === "guide") {
    paths.push(page.primaryCommercialPath);
  }

  return paths;
}

describe("maillage interne", () => {
  it("ne référence que des pages existantes ou des métiers du registre", () => {
    for (const page of allContentPages) {
      for (const path of declaredLinks(page)) {
        const resolved = resolveInternalLink(path) ?? findTradeBySlug(path.replaceAll("/", ""));
        expect(resolved, `${contentPath(page)} → ${path}`).toBeDefined();
      }
    }
  });

  it("laisse au moins deux métiers voisins réellement accessibles depuis une page métier", () => {
    for (const page of tradePages) {
      if (page.status !== "published") continue;
      const resolved = page.relatedTradeSlugs.filter((slug) => resolveInternalLink(`/${slug}/`));
      expect(resolved.length, page.slug).toBeGreaterThanOrEqual(2);
    }
  });

  it("donne au moins un lien entrant à chaque page éditoriale", () => {
    const inbound = new Map<string, number>();
    for (const page of allContentPages) {
      const origin = contentPath(page);
      for (const path of declaredLinks(page)) {
        const target = normalizePath(path);
        if (target === origin) continue;
        inbound.set(target, (inbound.get(target) ?? 0) + 1);
      }
    }

    // Les hubs et pages institutionnelles reçoivent leurs liens de la navigation
    // et du pied de page, hors modèle de contenu : l'audit du HTML construit
    // vérifie ce cas. Ici, seules les pages éditoriales sont contrôlées.
    for (const page of [...tradePages, ...situationPages, ...guidePages]) {
      if (page.status !== "published" || page.seo.noindex) continue;
      expect(inbound.get(contentPath(page)) ?? 0, contentPath(page)).toBeGreaterThan(0);
    }
  });

  it("ne laisse aucune page métier se lier à elle-même", () => {
    for (const page of tradePages) {
      expect(page.relatedTradeSlugs, page.slug).not.toContain(page.slug);
    }
  });

  it("n’expose aucun lien vers une page hors du site", () => {
    for (const path of knownPaths) {
      expect(path.startsWith("/")).toBe(true);
    }
  });
});

describe("sitemap", () => {
  const entries = sitemapEntries();

  it("contient l’accueil et aucune entrée en doublon", () => {
    const paths = entries.map((entry) => entry.path);
    expect(paths).toContain("/");
    expect(new Set(paths).size).toBe(paths.length);
  });

  it("exclut les pages non indexables", () => {
    const paths = new Set(entries.map((entry) => entry.path));
    for (const page of allContentPages) {
      if (!page.seo.noindex) continue;
      expect(paths.has(contentPath(page))).toBe(false);
    }
    expect(paths.has("/devis-assurance-decennale/merci/")).toBe(false);
    expect(paths.has("/recherche/")).toBe(false);
  });

  it("porte une date de dernière modification exploitable", () => {
    for (const entry of entries) {
      expect(entry.lastModified, entry.path).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
  });
});

describe("registre des métiers", () => {
  it("associe chaque page métier à une entrée du registre", () => {
    const values = new Set(tradeRegistry.map((trade) => trade.value));
    for (const page of tradePages) {
      expect(values.has(page.formTradeValue), page.slug).toBe(true);
    }
  });

  it("rattache chaque métier à une famille connue", () => {
    const slugs = new Set(tradeCategories.map((category) => category.slug));
    for (const trade of tradeRegistry) {
      expect(slugs.has(trade.category), trade.value).toBe(true);
    }
  });

  it("dérive le slug de la valeur du métier", () => {
    for (const trade of tradeRegistry) {
      expect(trade.slug).toBe(`assurance-decennale-${trade.value}`);
    }
  });

  it("indexe les métiers sans accent pour la recherche", () => {
    const macon = tradeSearchIndex.find((trade) => trade.value === "macon");
    expect(macon?.haystack).toContain("macon");
    const etancheur = tradeSearchIndex.find((trade) => trade.value === "etancheur");
    expect(etancheur?.haystack).toContain("etancheite");
  });
});

describe("registre des situations", () => {
  it("associe chaque page situation à une entrée du registre", () => {
    const slugs = new Set(situationRegistry.map((situation) => situation.slug));
    for (const page of situationPages) {
      expect(slugs.has(page.slug), page.slug).toBe(true);
    }
  });
});

describe("contenu spécifique par page métier", () => {
  it("fournit travaux, sinistres, FAQ et facteurs de prix propres au métier", () => {
    for (const page of tradePages) {
      expect(page.coveredWork.length, page.slug).toBeGreaterThanOrEqual(5);
      expect(page.riskScenarios.length, page.slug).toBeGreaterThanOrEqual(3);
      expect(page.faq.length, page.slug).toBeGreaterThanOrEqual(6);
      expect(page.pricingFactors.length, page.slug).toBeGreaterThanOrEqual(5);
      expect(page.requiredDocuments.length, page.slug).toBeGreaterThanOrEqual(5);
    }
  });

  it("n’emploie pas la même réponse courte d’une page métier à l’autre", () => {
    const answers = tradePages.map((page) => page.shortAnswer);
    expect(new Set(answers).size).toBe(answers.length);
  });

  it("n’emploie pas les mêmes questions de FAQ d’une page métier à l’autre", () => {
    const firstQuestions = tradePages.map((page) => page.faq[0]?.question);
    expect(new Set(firstQuestions).size).toBe(firstQuestions.length);
  });

  it("signe et date chaque page éditoriale", () => {
    for (const page of [...tradePages, ...situationPages, ...guidePages]) {
      expect(page.editorial.authorId, contentPath(page)).toBeTruthy();
      expect(page.editorial.publishedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(page.editorial.modifiedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(page.sources.length, contentPath(page)).toBeGreaterThan(0);
    }
  });
});

describe("pages institutionnelles", () => {
  it("affichent toutes une date de mise à jour", () => {
    for (const page of infoPages) {
      expect(page.editorial?.modifiedAt ?? page.updatedAt, page.path).toMatch(
        /^\d{4}-\d{2}-\d{2}$/,
      );
    }
  });

  it("couvrent les pages légales exigées avant mise en ligne", () => {
    const paths = new Set(infoPages.map((page) => page.path));
    for (const required of [
      "/mentions-legales/",
      "/politique-confidentialite/",
      "/politique-cookies/",
      "/conditions-utilisation/",
      "/reclamation/",
      "/mediation/",
      "/notre-methode/",
      "/a-propos/",
      "/partenaires/",
    ]) {
      expect(paths.has(required), required).toBe(true);
    }
  });
});
