import { defineGuide } from "@/content/_factories";

export const exclusionsAssuranceDecennale = defineGuide({
  slug: "exclusions-assurance-decennale",
  title: "Exclusions de l’assurance décennale",
  category: "sinistres-et-couverture",
  status: "published",
  priority: "P1",
  seo: {
    title: "Exclusions assurance décennale : les cas de refus de garantie",
    description:
      "Activité non déclarée, technique non courante, défaut d’entretien, fausse déclaration : les principales causes de refus de garantie en assurance décennale.",
    primaryKeyword: "exclusions assurance décennale",
    secondaryKeywords: [
      "refus de garantie décennale",
      "activité non déclarée décennale",
      "technique non courante décennale",
      "déchéance de garantie décennale",
      "fausse déclaration assurance construction",
    ],
  },
  h1: "Les exclusions de l’assurance décennale",
  summary:
    "Les clauses types du Code des assurances encadrent strictement ce qu’un contrat de décennale peut exclure. En pratique, les refus de garantie proviennent moins d’exclusions exotiques que de trois causes récurrentes : une activité non déclarée, une technique non courante employée sans avis technique, et une déclaration inexacte du risque. Ce guide détaille chacune, avec les réflexes qui permettent de les éviter.",
  shortAnswer:
    "Les exclusions applicables à un contrat de responsabilité décennale sont encadrées par les clauses types annexées au Code des assurances : un assureur ne peut pas exclure librement ce qu’il souhaite. La première cause réelle de refus de garantie n’est pas une clause, mais l’exercice d’une activité absente de l’attestation. Viennent ensuite les techniques non courantes et les déclarations inexactes.",
  summaryBullets: [
    "Les exclusions sont encadrées par les clauses types du Code des assurances.",
    "Première cause de refus : une activité non déclarée sur l’attestation.",
    "Deuxième cause : technique non courante sans avis technique ni ATEx.",
    "Troisième cause : déclaration inexacte du risque ou du chiffre d’affaires.",
  ],
  sections: [
    {
      id: "clauses-types",
      title: "Ce que le contrat peut légalement exclure",
      paragraphs: [
        "L’annexe I à l’article A243-1 du Code des assurances fixe des clauses types applicables aux contrats d’assurance de responsabilité décennale. Elles limitent la liberté de l’assureur et énumèrent les seules exclusions admissibles.",
        "Une clause d’exclusion qui sortirait de ce cadre est réputée non écrite. C’est un point important : face à un refus de garantie, la première vérification consiste à confronter le motif invoqué à ces clauses types.",
      ],
      bullets: [
        "dommages résultant du fait intentionnel ou du dol de l’assuré",
        "effets de l’usure normale, du défaut d’entretien ou de l’usage anormal",
        "causes étrangères : guerre, cataclysme naturel dans les cas prévus",
        "dommages résultant du non-respect délibéré des règles de l’art dans certains cas",
      ],
      callout: {
        tone: "legal",
        title: "Référence",
        body: "Annexe I à l’article A243-1 du Code des assurances : clauses types applicables aux contrats d’assurance de responsabilité décennale.",
      },
    },
    {
      id: "activite-non-declaree",
      title: "L’activité non déclarée, première cause de refus",
      paragraphs: [
        "Un contrat de décennale ne couvre pas « le bâtiment » mais une liste d’activités précises. Un désordre survenant sur une activité absente de l’attestation ne relève pas du contrat : ce n’est pas une exclusion, c’est une absence de garantie.",
        "Le cas typique est celui du professionnel polyvalent : un couvreur qui réalise une étanchéité, un maçon qui reprend des fondations en sous-œuvre, un électricien qui pose du photovoltaïque, un carreleur qui réalise une chape.",
      ],
      bullets: [
        "comparer chaque année la liste des activités déclarées et les prestations facturées",
        "demander une extension avant d’accepter un chantier hors périmètre",
        "conserver la preuve écrite de chaque extension",
        "refuser un chantier qui ne peut pas être couvert plutôt que d’espérer une tolérance",
      ],
    },
    {
      id: "technique-non-courante",
      title: "Les techniques non courantes",
      paragraphs: [
        "Les contrats couvrent les techniques dites courantes : celles qui font l’objet d’une norme, d’un DTU ou de règles professionnelles reconnues. Une technique innovante ou un procédé sans référentiel relève d’une technique non courante.",
        "Ces techniques ne sont pas interdites, mais elles nécessitent un accord préalable de l’assureur, généralement adossé à un avis technique, un document technique d’application ou une appréciation technique d’expérimentation.",
      ],
      bullets: [
        "vérifier l’existence d’un DTU ou d’une norme pour le procédé employé",
        "demander l’avis technique du fabricant et le conserver",
        "solliciter l’accord écrit de l’assureur avant le chantier",
        "ne pas mélanger des composants issus de systèmes différents",
      ],
    },
    {
      id: "declaration-inexacte",
      title: "Déclaration inexacte et déchéance",
      paragraphs: [
        "Le risque déclaré doit correspondre au risque réel. Une omission ou une inexactitude peut entraîner une réduction proportionnelle de l’indemnité, voire la nullité du contrat en cas de mauvaise foi.",
        "Les inexactitudes les plus fréquentes portent sur le chiffre d’affaires, la part sous-traitée, les antécédents de résiliation et la sinistralité passée.",
      ],
      bullets: [
        "chiffre d’affaires volontairement sous-évalué",
        "part sous-traitée non déclarée",
        "résiliation antérieure passée sous silence",
        "sinistres omis lors de la souscription",
        "activité principale déclarée à la place d’une activité réellement dominante",
      ],
    },
    {
      id: "que-faire",
      title: "Que faire face à un refus de garantie",
      paragraphs: [
        "Un refus n’est pas nécessairement définitif. Il doit être motivé, et son fondement peut être discuté.",
      ],
      bullets: [
        "demander par écrit le motif précis et la clause invoquée",
        "vérifier la conformité de ce motif aux clauses types",
        "relire l’attestation et les conditions particulières",
        "solliciter l’avis d’un professionnel de l’assurance ou d’un conseil",
        "utiliser la procédure de réclamation puis la médiation si nécessaire",
      ],
    },
  ],
  checklist: [
    "relire l’attestation activité par activité",
    "lister les prestations facturées sur les douze derniers mois",
    "identifier les techniques employées sans DTU ni avis technique",
    "vérifier la cohérence du chiffre d’affaires déclaré",
    "déclarer la part sous-traitée",
    "conserver les réserves écrites sur les supports existants",
  ],
  faq: [
    {
      question: "Un assureur peut-il exclure ce qu’il veut ?",
      answer:
        "Non. Les clauses types annexées au Code des assurances limitent les exclusions possibles en assurance de responsabilité décennale. Une clause hors de ce cadre est réputée non écrite.",
    },
    {
      question: "Que se passe-t-il si j’ai exercé une activité non déclarée ?",
      answer:
        "Les travaux correspondants ne sont pas garantis. L’entreprise et son dirigeant restent responsables pendant dix ans, sans plafond, ce qui met souvent en cause la survie de l’entreprise.",
    },
    {
      question: "Le défaut d’entretien est-il opposable au client ?",
      answer:
        "Oui, lorsque le désordre résulte exclusivement d’un manque d’entretien après réception. Il est utile de remettre au client une notice d’entretien et d’en conserver la preuve.",
    },
    {
      question: "Une technique non courante est-elle interdite ?",
      answer:
        "Non, mais elle doit faire l’objet d’un accord préalable de l’assureur, généralement adossé à un avis technique ou à une appréciation technique d’expérimentation.",
    },
  ],
  primaryCommercialPath: "/assurance-decennale/",
  relatedPaths: [
    "/assurance-decennale/",
    "/devis-assurance-decennale/",
    "/guides/que-couvre-assurance-decennale/",
    "/guides/nomenclature-activites-btp/",
    "/reclamation/",
    "/mediation/",
  ],
  sources: ["servicePublicDecennale", "nomenclatureBtp"],
  legalSources: ["codeAssurancesA243_1", "codeCivil1792", "codeAssurances"],
});
