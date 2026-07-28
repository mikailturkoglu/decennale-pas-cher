import { defineSituation } from "@/content/_factories";
import { NOTICES } from "@/data/legal-notices";

export const reprisePasse = defineSituation({
  slug: "decennale-reprise-passe",
  status: "published",
  priority: "P1",
  seo: {
    title: "Reprise du passé en décennale : ce qu’elle couvre vraiment",
    description:
      "Comprenez la reprise du passé en assurance décennale : chantiers concernés, conditions habituelles, limites et pièces à réunir pour une demande sérieuse.",
    primaryKeyword: "reprise du passé décennale",
    secondaryKeywords: [
      "rétroactivité assurance décennale",
      "décennale reprise du passé conditions",
      "assurer chantiers antérieurs décennale",
      "décennale antériorité",
      "garantie chantiers passés BTP",
    ],
  },
  h1: "Reprise du passé en assurance décennale",
  shortAnswer:
    "La reprise du passé est une extension par laquelle un assureur accepte de garantir des chantiers ouverts avant la date d’effet du contrat. Elle n’est jamais automatique, doit être expressément prévue et suppose qu’aucun désordre ne soit connu sur les chantiers concernés. Elle ne transforme pas une période non assurée en période assurée de plein droit : son périmètre est défini chantier par chantier, ou par période, selon ce que l’assureur accepte.",
  summaryBullets: [
    "La reprise du passé doit être écrite dans le contrat pour exister.",
    "Elle exclut les désordres déjà connus ou déclarés.",
    "Un inventaire précis des chantiers concernés est indispensable.",
    "Elle est plus difficile à obtenir sur les métiers à forte sinistralité.",
  ],
  sections: [
    {
      id: "principe",
      title: "Le principe : le chantier détermine le contrat",
      paragraphs: [
        "En assurance construction, la garantie décennale suit le chantier ouvert pendant la période de validité du contrat. C’est donc la date d’ouverture du chantier, et non la date du sinistre, qui détermine quel contrat intervient.",
        "Une entreprise qui change d’assureur reste garantie par l’ancien contrat pour les chantiers ouverts avant le changement. Une entreprise qui n’était pas assurée reste sans garantie pour ces chantiers, sauf reprise du passé accordée.",
      ],
    },
    {
      id: "conditions",
      title: "Conditions habituellement demandées",
      paragraphs: [
        "Les conditions varient selon les assureurs, mais plusieurs exigences reviennent presque systématiquement.",
      ],
      bullets: [
        "un inventaire des chantiers concernés, avec dates d’ouverture et de réception",
        "une déclaration signée d’absence de désordre et de litige connus",
        "la description des travaux réalisés sur chaque chantier",
        "les montants des marchés concernés",
        "parfois une visite technique ou une expertise préalable",
        "une prime spécifique, distincte de la cotisation courante",
      ],
      callout: {
        tone: "warning",
        title: "Limite structurelle",
        body: NOTICES.pastCoverage,
      },
    },
    {
      id: "ce-qui-nest-jamais-couvert",
      title: "Ce qui n’est jamais couvert par une reprise du passé",
      paragraphs: [
        "La reprise du passé n’a pas pour objet de couvrir un sinistre déjà survenu ou déjà pressenti. Toute déclaration inexacte sur ce point expose à la nullité de l’extension, voire du contrat.",
      ],
      bullets: [
        "désordres déjà apparus, même non déclarés",
        "réserves formulées à la réception et non levées",
        "litiges en cours avec un client ou un maître d’ouvrage",
        "chantiers ayant déjà fait l’objet d’une expertise",
        "travaux réalisés dans une activité que l’assureur n’accepte pas",
      ],
    },
    {
      id: "cas-frequents",
      title: "Dans quels cas la question se pose",
      paragraphs: [
        "La reprise du passé est demandée dans des situations bien identifiées, souvent liées à un changement de structure ou à une période non assurée.",
      ],
      bullets: [
        "entreprise ayant travaillé sans assurance obligatoire pendant une période",
        "passage d’une entreprise individuelle à une société, avec des chantiers en cours",
        "trou de garantie entre deux contrats",
        "chantier ouvert avant la date d’effet du nouveau contrat",
        "reprise d’activité après une interruption",
      ],
    },
  ],
  documents: [
    "inventaire des chantiers concernés avec dates d’ouverture et de réception",
    "montants des marchés et nature des travaux réalisés",
    "procès-verbaux de réception et levée de réserves",
    "déclaration signée d’absence de désordre et de litige connus",
    "anciennes attestations d’assurance et relevé de sinistralité",
    "Kbis ou avis de situation SIRENE",
    "pièce d’identité du dirigeant",
    "photographies des ouvrages réalisés lorsqu’elles existent",
    "ventilation du chiffre d’affaires des périodes concernées",
  ],
  pricingFactors: [
    "durée de la période à reprendre",
    "nombre et montant des chantiers concernés",
    "activité exercée pendant cette période",
    "existence ou non de réserves et de litiges",
    "possibilité de justifier la qualité d’exécution",
    "métier et sinistralité moyenne associée",
    "franchise acceptée",
    "acceptation d’une visite technique préalable",
  ],
  commonMistakes: [
    "croire qu’un nouveau contrat couvre automatiquement les chantiers antérieurs",
    "omettre un chantier de l’inventaire pour alléger la demande",
    "déclarer une absence de désordre alors que des réserves existent",
    "confondre reprise du passé et garantie des chantiers en cours",
    "considérer la reprise du passé comme une régularisation de l’infraction passée",
    "renoncer à demander l’extension et laisser une période totalement non couverte",
  ],
  faq: [
    {
      question: "La reprise du passé est-elle obligatoire pour l’assureur ?",
      answer:
        "Non. C’est une extension facultative, accordée au cas par cas et généralement contre une prime spécifique. Aucun assureur n’est tenu de l’accorder.",
    },
    {
      question: "Peut-elle couvrir un sinistre déjà apparu ?",
      answer:
        "Non. Un désordre déjà survenu ou connu est exclu par nature. Le déclarer comme inexistant constituerait une fausse déclaration susceptible d’entraîner la nullité de la garantie.",
    },
    {
      question: "Quelle période peut être reprise ?",
      answer:
        "Cela dépend entièrement de l’assureur et du dossier. Certaines extensions portent sur quelques mois, d’autres sur plusieurs années, parfois chantier par chantier plutôt que par période.",
    },
    {
      question: "La reprise du passé régularise-t-elle une absence d’assurance ?",
      answer:
        "Elle apporte une garantie pour les chantiers concernés, mais elle n’efface pas le fait d’avoir exercé sans assurance obligatoire pendant cette période.",
    },
    {
      question: "Comment prouver la qualité des chantiers passés ?",
      answer:
        "Par les procès-verbaux de réception, les photographies, les factures et l’absence de réclamation client. Plus le dossier est documenté, plus la demande est crédible.",
    },
  ],
  suggestedTradeSlugs: [
    "assurance-decennale-macon",
    "assurance-decennale-couvreur",
    "assurance-decennale-plombier",
    "assurance-decennale-electricien",
    "assurance-decennale-etancheur",
    "assurance-decennale-charpentier",
  ],
  relatedPaths: [
    "/decennale-sans-antecedent-assurance/",
    "/decennale-chantier-deja-commence/",
    "/decennale-apres-resiliation/",
    "/devis-assurance-decennale/",
    "/guides/date-effet-assurance-decennale/",
    "/guides/que-couvre-assurance-decennale/",
  ],
  sources: [
    "codeAssurancesA243_1",
    "codeAssurancesL241_1",
    "codeCivil1792_4_1",
    "servicePublicDecennale",
  ],
});
