import { defineLanding } from "@/content/_factories";

export const entrepriseBtp = defineLanding({
  slug: "assurance-decennale-entreprise-btp",
  name: "Entreprise du BTP",
  status: "published",
  priority: "P0",
  seo: {
    title: "Assurance décennale entreprise BTP : multi-activités et salariés",
    description:
      "Entreprise du bâtiment avec salariés ou plusieurs lots : structurez la déclaration de vos activités, la sous-traitance et vos plafonds de garantie, puis demandez des propositions.",
    primaryKeyword: "assurance décennale entreprise BTP",
    secondaryKeywords: [
      "décennale société bâtiment",
      "assurance décennale entreprise générale",
      "décennale plusieurs activités",
      "décennale entreprise avec salariés",
      "décennale multi-activité BTP",
    ],
  },
  h1: "Assurance décennale d’une entreprise du BTP",
  heroTitle: "Assurance décennale des entreprises du bâtiment",
  heroText:
    "Plusieurs lots, des salariés, de la sous-traitance : plus l’entreprise se structure, plus la déclaration des activités et le dimensionnement des garanties deviennent déterminants.",
  shortAnswer:
    "Pour une entreprise du BTP employant des salariés ou intervenant sur plusieurs lots, trois points structurent le contrat : la liste exacte des activités déclarées, la part du chiffre d’affaires sous-traitée et le niveau des plafonds d’indemnisation. Une entreprise multi-lots qui déclare une seule activité générique s’expose à un refus de garantie sur la majorité de ses chantiers.",
  summaryBullets: [
    "Chaque lot exercé correspond à une activité à déclarer distinctement.",
    "La part sous-traitée doit être déclarée et influe sur la tarification.",
    "Les plafonds annuels doivent être cohérents avec le chiffre d’affaires.",
    "Les attestations des sous-traitants doivent être vérifiées chantier par chantier.",
  ],
  sections: [
    {
      id: "multi-activites",
      title: "Déclarer correctement une activité multi-lots",
      paragraphs: [
        "Une entreprise qui réalise plusieurs corps d’état ne peut pas se contenter d’une déclaration générique. La nomenclature utilisée par les assureurs raisonne par activité technique, et non par intitulé commercial ou par code APE.",
        "L’exercice consiste à traduire votre chiffre d’affaires en activités identifiées, en indiquant pour chacune sa part réelle. Cette ventilation est demandée à la souscription et vérifiée en cas de sinistre.",
      ],
      bullets: [
        "établir la ventilation du chiffre d’affaires par lot technique",
        "distinguer les travaux réalisés en interne et ceux confiés à des sous-traitants",
        "identifier les activités marginales mais réellement exercées",
        "mettre à jour la déclaration lorsque l’activité évolue",
      ],
    },
    {
      id: "sous-traitance",
      title: "Sous-traitance : ce que l’assureur attend",
      paragraphs: [
        "L’entreprise principale reste responsable devant le maître d’ouvrage des travaux réalisés par ses sous-traitants. Sa propre assurance intervient donc, avec un recours possible contre le sous-traitant.",
        "La part sous-traitée est un élément de tarification. Sa non-déclaration peut être analysée comme une déclaration inexacte du risque, avec des conséquences sur l’indemnisation.",
      ],
      bullets: [
        "déclarer le pourcentage de chiffre d’affaires sous-traité",
        "recueillir l’attestation de chaque sous-traitant avant l’ouverture du chantier",
        "vérifier la correspondance entre les activités déclarées et les travaux confiés",
        "conserver ces attestations pendant toute la durée de la responsabilité",
        "ne pas sous-traiter une activité que vous n’avez pas vous-même déclarée",
      ],
    },
    {
      id: "plafonds",
      title: "Dimensionner ses plafonds de garantie",
      paragraphs: [
        "Les contrats prévoient des plafonds par sinistre et par année d’assurance. Une entreprise réalisant des marchés importants doit vérifier que ces plafonds restent cohérents avec la taille de ses chantiers.",
        "Le montant du plus gros marché de l’année est un bon indicateur : un plafond inférieur au coût de reprise potentiel d’un ouvrage laisse un risque résiduel à la charge de l’entreprise.",
      ],
    },
    {
      id: "entreprise-generale",
      title: "Le cas particulier de l’entreprise générale",
      paragraphs: [
        "L’entreprise générale, qui prend l’engagement de réaliser l’ensemble d’un ouvrage, est locateur d’ouvrage pour la totalité des lots, y compris ceux qu’elle sous-traite intégralement.",
        "Son contrat doit donc couvrir un périmètre large, et sa tarification tient compte de la part sous-traitée et de la qualité de ses sous-traitants. Une page dédiée traitera spécifiquement ce profil.",
      ],
      callout: {
        tone: "info",
        title: "Responsabilité étendue",
        body: "Une entreprise générale répond devant le maître d’ouvrage de l’ensemble des lots, même réalisés par des tiers. Le contrôle des attestations de ses sous-traitants est donc déterminant.",
      },
    },
    {
      id: "organisation",
      title: "Organisation interne et prévention",
      paragraphs: [
        "Les entreprises structurées peuvent obtenir de meilleures conditions en démontrant une organisation qui réduit la sinistralité.",
      ],
      bullets: [
        "recours documenté à un bureau d’études pour les ouvrages sensibles",
        "fiches d’autocontrôle et procès-verbaux de réception de supports",
        "formation continue des équipes aux systèmes utilisés",
        "procédure de vérification des attestations de sous-traitants",
        "suivi des réserves et des levées de réserves",
      ],
    },
  ],
  modules: ["quote-form-teaser", "trade-grid", "comparison-criteria", "situation-grid"],
  faq: [
    {
      question: "Une entreprise multi-lots peut-elle déclarer une seule activité ?",
      answer:
        "Non, sauf si elle n’exerce réellement qu’une activité. Chaque lot technique exercé doit être déclaré. Une déclaration incomplète expose à un refus de garantie sur les travaux non déclarés.",
    },
    {
      question: "Faut-il déclarer la sous-traitance ?",
      answer:
        "Oui. La part de chiffre d’affaires sous-traitée est un élément de tarification. Son omission peut être qualifiée de déclaration inexacte du risque et réduire l’indemnisation.",
    },
    {
      question: "Que se passe-t-il si un sous-traitant n’est pas assuré ?",
      answer:
        "L’entreprise principale indemnise le maître d’ouvrage et exerce ensuite un recours. Face à un sous-traitant non assuré ou insolvable, ce recours reste souvent théorique.",
    },
    {
      question: "Comment savoir si mes plafonds sont suffisants ?",
      answer:
        "Comparez le plafond par sinistre au coût de reprise potentiel de votre plus gros chantier, et le plafond annuel à votre chiffre d’affaires. Un écart important signale un risque résiduel.",
    },
    {
      question: "Les salariés changent-ils l’obligation d’assurance ?",
      answer:
        "L’obligation est identique. En revanche, l’effectif, la masse salariale et l’encadrement technique entrent dans l’appréciation du risque par l’assureur.",
    },
    {
      question: "Faut-il un contrat par chantier ou un contrat annuel ?",
      answer:
        "Le contrat annuel couvrant l’ensemble des chantiers ouverts pendant la période est la formule courante. Des polices spécifiques existent pour certains grands chantiers, en complément et non en remplacement.",
    },
  ],
  relatedPaths: [
    "/assurance-decennale-artisan/",
    "/decennale-sous-traitant/",
    "/prix-assurance-decennale/",
    "/devis-assurance-decennale/",
    "/metiers/",
    "/guides/nomenclature-activites-btp/",
    "/guides/verifier-attestation-decennale/",
  ],
  sources: [
    "servicePublicDecennale",
    "codeCivil1792",
    "codeAssurancesL241_1",
    "nomenclatureBtp",
  ],
  breadcrumbParents: [{ name: "Assurance décennale", path: "/assurance-decennale/" }],
});
