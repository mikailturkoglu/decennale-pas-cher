import { describe, expect, it } from "vitest";

import { macon } from "@/content/trades/macon";
import { experts } from "@/data/experts";
import { siteConfig } from "@/data/site";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  jsonLdGraph,
  organizationSchema,
  serviceSchema,
  webPageSchema,
  webSiteSchema,
} from "@/lib/schema";
import { PLACEHOLDER } from "@/lib/placeholders";

type Graph = { "@context": string; "@graph": Record<string, unknown>[] };

function graph(nodes: Parameters<typeof jsonLdGraph>[0]): Graph {
  return JSON.parse(jsonLdGraph(nodes)) as Graph;
}

describe("jsonLdGraph", () => {
  it("produit un JSON valide avec un contexte Schema.org", () => {
    const parsed = graph([organizationSchema(), webSiteSchema()]);
    expect(parsed["@context"]).toBe("https://schema.org");
    expect(parsed["@graph"]).toHaveLength(2);
  });

  it("écarte les nœuds absents", () => {
    expect(graph([organizationSchema(), undefined])["@graph"]).toHaveLength(1);
  });
});

describe("organizationSchema", () => {
  const organization = organizationSchema();

  it("ne déclare pas d’activité de distribution tant que le modèle est la mise en relation", () => {
    expect(organization["@type"]).toBe("Organization");
  });

  it("n’expose aucun placeholder non renseigné", () => {
    const serialized = JSON.stringify(organization);
    for (const placeholder of Object.values(PLACEHOLDER)) {
      expect(serialized).not.toContain(placeholder);
    }
  });

  it("ne déclare ni note moyenne ni avis", () => {
    expect(organization).not.toHaveProperty("aggregateRating");
    expect(organization).not.toHaveProperty("review");
  });
});

describe("breadcrumbSchema", () => {
  it("numérote les segments et produit des URL absolues", () => {
    const parsed = breadcrumbSchema(macon.breadcrumb, `/${macon.slug}/`) as {
      itemListElement: { position: number; name: string; item: string }[];
    };

    expect(parsed.itemListElement).toHaveLength(macon.breadcrumb.length);
    expect(parsed.itemListElement[0]).toMatchObject({ position: 1, name: "Accueil" });
    for (const item of parsed.itemListElement) {
      expect(item.item.startsWith(`${siteConfig.url}/`)).toBe(true);
      expect(item.item.endsWith("/")).toBe(true);
    }
  });

  it("fait pointer le dernier segment sur la page courante", () => {
    const parsed = breadcrumbSchema(macon.breadcrumb, `/${macon.slug}/`) as {
      itemListElement: { item: string }[];
    };
    const last = parsed.itemListElement.at(-1);
    expect(last?.item).toBe(`${siteConfig.url}/${macon.slug}/`);
  });
});

describe("faqSchema", () => {
  it("reprend les questions réellement affichées sur la page", () => {
    const parsed = faqSchema(macon.faq) as {
      mainEntity: { name: string; acceptedAnswer: { text: string } }[];
    };
    expect(parsed.mainEntity).toHaveLength(macon.faq.length);
    expect(parsed.mainEntity[0]?.name).toBe(macon.faq[0]?.question);
    expect(parsed.mainEntity[0]?.acceptedAnswer.text).toBe(macon.faq[0]?.answer);
  });
});

describe("articleSchema", () => {
  const author = experts[0]!;

  it("porte les dates de publication et de modification", () => {
    const parsed = articleSchema({
      headline: "Titre du guide",
      description: "Description du guide.",
      path: "/guides/loi-spinetta/",
      publishedAt: "2026-08-01",
      modifiedAt: "2026-08-15",
      author,
    });
    expect(parsed.datePublished).toBe("2026-08-01");
    expect(parsed.dateModified).toBe("2026-08-15");
  });

  it("attribue l’article à l’organisation tant que l’auteur n’est pas identifié", () => {
    const parsed = articleSchema({
      headline: "Titre du guide",
      description: "Description du guide.",
      path: "/guides/loi-spinetta/",
      publishedAt: "2026-08-01",
      modifiedAt: "2026-08-01",
      author,
    });
    // Aucun auteur fictif : sans identité renseignée, l'éditeur est cité.
    expect(parsed.author).toEqual({ "@id": `${siteConfig.url}/#organization` });
  });

  it("cite les sources fournies", () => {
    const parsed = articleSchema({
      headline: "Titre",
      description: "Description.",
      path: "/guides/loi-spinetta/",
      publishedAt: "2026-08-01",
      modifiedAt: "2026-08-01",
      author,
      sources: [
        { label: "Légifrance", publisher: "DILA", url: "https://www.legifrance.gouv.fr/" },
      ],
    });
    expect(parsed.citation).toEqual(["https://www.legifrance.gouv.fr/"]);
  });
});

describe("serviceSchema", () => {
  it("ne déclare aucun prix : le site ne propose pas de tarif contractuel", () => {
    const parsed = serviceSchema({
      name: "Comparaison de devis d’assurance décennale",
      description: "Mise en relation avec des professionnels de l’assurance construction.",
      path: "/comparateur-assurance-decennale/",
    });
    expect(parsed).not.toHaveProperty("offers");
    expect(JSON.stringify(parsed)).not.toMatch(/price/i);
  });
});

describe("webPageSchema", () => {
  it("omet la date de modification lorsqu’elle est inconnue", () => {
    const parsed = webPageSchema({
      name: "Mentions légales",
      description: "Informations sur l’éditeur du site.",
      path: "/mentions-legales/",
    });
    expect(parsed).not.toHaveProperty("dateModified");
  });
});
