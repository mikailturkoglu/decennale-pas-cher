import { defineInfoPage } from "@/content/_factories";
import { cookieCategories } from "@/data/cookies";

export const politiqueCookies = defineInfoPage({
  path: "/politique-cookies/",
  name: "Politique cookies",
  status: "published",
  seo: {
    title: "Politique cookies et gestion du consentement | DécennaleBTP.fr",
    description:
      "Quels cookies sont utilisés sur DécennaleBTP.fr, à quelle fin, pendant combien de temps, et comment accepter, refuser ou modifier votre choix à tout moment.",
    primaryKeyword: "politique cookies DécennaleBTP.fr",
    secondaryKeywords: ["gérer les cookies", "refuser les cookies décennale"],
  },
  h1: "Politique cookies",
  intro:
    "Un cookie est un petit fichier déposé sur votre terminal lors de la consultation d’un site. Sur DécennaleBTP.fr, aucun traceur soumis à consentement n’est déposé avant votre accord : les scripts concernés ne sont pas chargés tant que vous n’avez pas choisi.",
  sections: [
    {
      id: "categories",
      title: "Les catégories utilisées",
      bullets: cookieCategories.map(
        (category) =>
          `${category.name} — ${category.description}${category.required ? " Ces cookies ne peuvent pas être désactivés." : ""}`,
      ),
    },
    {
      id: "vos-choix",
      title: "Accepter, refuser, modifier",
      paragraphs: [
        "Lors de votre première visite, un panneau vous permet de tout accepter, de tout refuser ou de choisir catégorie par catégorie. Les deux options d’acceptation et de refus sont présentées avec la même visibilité.",
        "Votre choix est conservé six mois, puis vous est redemandé. Vous pouvez le modifier ou le retirer à tout moment depuis le lien « Gérer les cookies » présent dans le pied de page de chaque page.",
      ],
      callout: {
        tone: "info",
        title: "Refuser n’altère pas le site",
        body: "Le contenu éditorial et le formulaire de demande de devis fonctionnent intégralement sans cookie de mesure d’audience ni cookie publicitaire.",
      },
    },
    {
      id: "liste",
      title: "Liste détaillée",
      paragraphs: [
        "Le tableau ci-dessous recense les cookies susceptibles d’être déposés, leur finalité, leur durée de conservation et leur éditeur. Il est mis à jour à chaque ajout ou retrait d’outil.",
      ],
    },
    {
      id: "suppression",
      title: "Supprimer les cookies depuis votre navigateur",
      paragraphs: [
        "Indépendamment de votre choix sur ce site, votre navigateur permet de consulter et de supprimer les cookies déjà déposés. La procédure figure dans les réglages de confidentialité de chaque navigateur.",
        "La suppression du cookie conservant votre choix entraînera un nouvel affichage du panneau de consentement lors de votre prochaine visite.",
      ],
    },
  ],
  relatedPaths: ["/politique-confidentialite/", "/mentions-legales/", "/conditions-utilisation/"],
  sources: ["cnilCookies"],
});
