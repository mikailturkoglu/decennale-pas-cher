import { defineInfoPage } from "@/content/_factories";

export const expertsHub = defineInfoPage({
  path: "/experts/",
  name: "Comité de relecture",
  status: "published",
  seo: {
    title: "Auteurs et comité de relecture | DécennaleBTP.fr",
    description:
      "Qui rédige et qui relit les contenus de DécennaleBTP.fr : parcours, qualifications, périmètre d’intervention et règles de vérification appliquées.",
    primaryKeyword: "auteurs DécennaleBTP.fr",
    secondaryKeywords: ["comité de relecture assurance décennale", "expert assurance construction"],
  },
  h1: "Auteurs et comité de relecture",
  intro:
    "L’assurance est un sujet juridique et financier : savoir qui écrit et qui vérifie est aussi important que le contenu lui-même. Chaque page indique son auteur, son relecteur, sa date de publication et sa date de dernière modification.",
  sections: [
    {
      id: "role-des-intervenants",
      title: "Le rôle de chaque intervenant",
      bullets: [
        "l’auteur rédige le contenu, le structure, le source et assure sa mise à jour",
        "le relecteur, professionnel de l’assurance construction, valide l’exactitude assurantielle et tarifaire",
        "toute mention réglementaire relative à l’intermédiation est validée avant publication",
      ],
    },
    {
      id: "regles-de-verification",
      title: "Les règles de vérification appliquées",
      paragraphs: [
        "Ces règles sont contraignantes : une page qui ne les respecte pas n’est pas publiée, quel que soit son intérêt pour le référencement.",
      ],
      bullets: [
        "toute affirmation juridique renvoie au texte applicable",
        "toute donnée tarifaire précise sa date, sa source et ses hypothèses",
        "aucune donnée non vérifiée n’est publiée sous forme d’estimation",
        "les pages tarifaires sont revues au moins deux fois par an",
        "les pages juridiques sont revues à chaque évolution des textes",
        "une information devenue inexacte est retirée sans attendre la révision programmée",
      ],
    },
    {
      id: "signaler-une-erreur",
      title: "Signaler une erreur",
      paragraphs: [
        "Si vous constatez une inexactitude, notamment sur le libellé d’une activité de nomenclature ou sur une pratique d’assureur, signalez-la : les corrections sont traitées en priorité et la date de modification de la page est mise à jour.",
      ],
    },
  ],
  relatedPaths: ["/notre-methode/", "/a-propos/", "/contact/", "/guides/"],
  sources: ["orias", "acpr", "nomenclatureBtp"],
});
