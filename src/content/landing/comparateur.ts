import { defineLanding } from "@/content/_factories";
import { NOTICES } from "@/data/legal-notices";

export const comparateur = defineLanding({
  slug: "comparateur-assurance-decennale",
  name: "Comparer des devis",
  status: "published",
  priority: "P0",
  seo: {
    title: "Comparateur assurance décennale : demandez plusieurs devis",
    description:
      "Comparez des propositions de RC décennale adaptées à vos activités BTP. Décrivez votre métier : votre demande est étudiée par un professionnel partenaire.",
    primaryKeyword: "comparateur assurance décennale",
    secondaryKeywords: [
      "comparatif décennale",
      "comparer assurance décennale",
      "comparer devis décennale",
      "comparaison garanties décennale",
      "comparateur RC décennale BTP",
    ],
  },
  h1: "Comparez des devis d’assurance décennale adaptés à votre activité",
  heroTitle: "Comparez des devis d’assurance décennale",
  heroText:
    "Décrivez votre métier, vos activités réelles et votre situation. Votre demande est qualifiée puis transmise à un professionnel partenaire, qui étudie votre dossier et vous adresse des propositions.",
  shortAnswer:
    "Comparer une assurance décennale ne consiste pas à classer des prix : deux cotisations ne sont comparables que si les activités déclarées, les franchises, les plafonds et les garanties annexes sont équivalents. Cette page explique ce que nous faisons réellement, ce que nous ne faisons pas, et sur quels critères comparer sérieusement deux propositions.",
  summaryBullets: [
    "Une cotisation ne se compare qu’à périmètre d’activités identique.",
    "La franchise et les plafonds modifient fortement la valeur d’une offre.",
    "Le site facilite la mise en relation, il ne classe pas les contrats du marché.",
    "Un dossier complet permet des propositions plus rapides et plus fiables.",
  ],
  sections: [
    {
      id: "notre-role",
      title: "Ce que fait — et ne fait pas — DécennaleBTP.fr",
      paragraphs: [
        NOTICES.serviceRole,
        "Nous n’affichons pas de classement automatisé des assureurs du marché et nous ne recommandons pas un contrat plutôt qu’un autre. Notre travail consiste à qualifier précisément votre besoin pour qu’un professionnel habilité puisse l’étudier utilement.",
      ],
      bullets: [
        "nous collectons et structurons votre demande",
        "nous la transmettons à un professionnel partenaire habilité",
        "nous ne souscrivons pas de contrat et n’encaissons pas de cotisation",
        "nous ne prétendons pas comparer l’intégralité du marché français",
      ],
      callout: {
        tone: "info",
        title: "Périmètre du service",
        body: NOTICES.panelScope,
      },
    },
    {
      id: "criteres",
      title: "Les neuf critères qui rendent deux offres comparables",
      paragraphs: [
        "Avant de regarder le prix, vérifiez que les deux propositions portent bien sur le même risque. C’est la seule façon de comparer sérieusement.",
      ],
      bullets: [
        "liste exacte des activités déclarées, libellé par libellé",
        "montant de la cotisation et son assiette de calcul",
        "montant de la franchise par sinistre et ses éventuelles majorations",
        "plafonds d’indemnisation par sinistre et par année d’assurance",
        "garanties annexes : dommages aux existants, avant réception, effondrement",
        "présence d’une RC professionnelle et d’une protection juridique",
        "reprise du passé, si votre situation l’exige",
        "modalités de paiement, mensuel ou annuel, et conditions de révision",
        "accompagnement en cas de sinistre et interlocuteur dédié",
      ],
    },
    {
      id: "pieges",
      title: "Les pièges classiques d’une comparaison trop rapide",
      paragraphs: [
        "Un tarif plus bas s’explique souvent par un périmètre plus étroit. Ce n’est pas nécessairement un mauvais choix, mais il faut le savoir avant de signer.",
      ],
      bullets: [
        "une activité importante absente de la liste déclarée",
        "une franchise doublée sur les postes les plus sinistrogènes",
        "un plafond annuel insuffisant au regard de votre chiffre d’affaires",
        "l’absence de garantie dommages aux existants alors que vous travaillez en rénovation",
        "une cotisation attractive la première année, révisée dès la deuxième",
        "un chiffre d’affaires déclaré volontairement bas, source de régularisation",
      ],
    },
    {
      id: "deroulement",
      title: "Comment se déroule une demande",
      paragraphs: [
        "Le parcours est conçu pour éviter les allers-retours : plus votre demande est précise, plus l’étude est rapide et plus les propositions reçues sont exploitables.",
      ],
    },
  ],
  modules: ["quote-form-teaser", "how-it-works", "comparison-criteria", "trade-grid", "situation-grid"],
  faq: [
    {
      question: "Le service est-il payant ?",
      answer:
        "Les conditions financières du service sont précisées sur la page Notre méthode, avec la nature de notre rémunération. Aucune information tarifaire n’est affichée ici avant validation.",
    },
    {
      question: "Comparez-vous tous les assureurs du marché ?",
      answer:
        "Non. Le périmètre réellement étudié est indiqué sur la page Notre méthode. Prétendre comparer l’intégralité du marché serait inexact et nous ne le faisons pas.",
    },
    {
      question: "Recevrai-je plusieurs propositions ?",
      answer:
        "Le nombre de propositions dépend de votre profil, de votre métier et de l’appétence des partenaires pour votre risque. Nous ne garantissons pas un nombre de devis.",
    },
    {
      question: "Combien de temps faut-il pour obtenir une réponse ?",
      answer:
        "Le délai dépend de la complétude de votre dossier et du partenaire qui l’étudie. Nous n’affichons pas de délai garanti tant qu’il n’est pas mesuré sur des données réelles.",
    },
    {
      question: "Mes données sont-elles transmises à des tiers ?",
      answer:
        "Oui, à un ou plusieurs professionnels partenaires, uniquement après votre consentement explicite. La liste des destinataires et les finalités sont détaillées dans la politique de confidentialité.",
    },
    {
      question: "Puis-je comparer sans changer d’assureur ?",
      answer:
        "Oui. Une demande de propositions ne vous engage pas à résilier votre contrat en cours. Vérifiez simplement les conditions et délais de résiliation avant toute décision.",
    },
  ],
  relatedPaths: [
    "/devis-assurance-decennale/",
    "/assurance-decennale/",
    "/prix-assurance-decennale/",
    "/assurance-decennale-pas-chere/",
    "/notre-methode/",
    "/metiers/",
    "/guides/comment-choisir-assurance-decennale/",
  ],
  sources: ["servicePublicDecennale", "orias", "acpr", "codeAssurancesL241_1"],
  breadcrumbParents: [{ name: "Assurance décennale", path: "/assurance-decennale/" }],
});
