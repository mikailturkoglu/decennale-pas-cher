import { defineInfoPage } from "@/content/_factories";

export const planDuSite = defineInfoPage({
  path: "/plan-du-site/",
  name: "Plan du site",
  status: "published",
  seo: {
    title: "Plan du site | DécennaleBTP.fr",
    description:
      "Toutes les pages publiées de DécennaleBTP.fr : pages commerciales, métiers du BTP, situations de souscription, guides, outils et pages légales.",
    primaryKeyword: "plan du site DécennaleBTP",
    secondaryKeywords: ["toutes les pages", "sommaire du site"],
  },
  h1: "Plan du site",
  intro:
    "L’intégralité des pages publiées, regroupées par silo. Cette page sert autant à la navigation qu’au contrôle interne : toute page publiée y figure automatiquement, ce qui garantit qu’aucune ne reste sans lien entrant.",
  sections: [],
  relatedPaths: ["/", "/metiers/", "/situations/", "/guides/", "/outils/"],
});
