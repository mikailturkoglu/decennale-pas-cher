import { defineGuide } from "@/content/_factories";

export const commentResilierAssuranceDecennale = defineGuide({
  slug: "comment-resilier-assurance-decennale",
  title: "Comment résilier son assurance décennale",
  category: "resiliation-et-refus",
  status: "published",
  priority: "P1",
  seo: {
    title: "Résilier son assurance décennale : délais, motifs et continuité",
    description:
      "Résiliation à l’échéance, changement de situation, hausse de tarif : les cas de résiliation d’une assurance décennale et comment éviter une interruption de garantie.",
    primaryKeyword: "comment résilier une assurance décennale",
    secondaryKeywords: [
      "résiliation assurance décennale",
      "changer assurance décennale",
      "lettre résiliation décennale",
      "préavis résiliation décennale",
      "interruption de garantie décennale",
    ],
  },
  h1: "Comment résilier son assurance décennale",
  summary:
    "La résiliation d’un contrat de décennale s’effectue principalement à l’échéance annuelle, avec un préavis prévu au contrat, généralement de deux mois. D’autres cas existent : modification du risque, augmentation de tarif, cessation d’activité. Le point critique n’est pas la résiliation elle-même mais la continuité : la date d’effet du nouveau contrat doit succéder immédiatement à la fin du précédent, sans un seul jour d’interruption.",
  shortAnswer:
    "La voie principale est la résiliation à l’échéance annuelle, en respectant le préavis prévu au contrat, souvent deux mois. D’autres motifs peuvent ouvrir un droit à résiliation en cours d’année, notamment une modification du risque ou une cessation d’activité. Dans tous les cas, faites coïncider exactement la fin de l’ancien contrat et la prise d’effet du nouveau : une interruption d’un seul jour laisse les chantiers ouverts ce jour-là sans garantie.",
  summaryBullets: [
    "Résiliation à l’échéance : préavis prévu au contrat, souvent deux mois.",
    "Autres motifs : modification du risque, hausse de tarif, cessation d’activité.",
    "Aucune interruption de garantie ne doit exister entre deux contrats.",
    "Les chantiers déjà ouverts restent couverts par l’ancien contrat.",
  ],
  sections: [
    {
      id: "echeance",
      title: "La résiliation à l’échéance annuelle",
      paragraphs: [
        "L’article L113-12 du Code des assurances permet à l’assuré de résilier son contrat à l’expiration d’un délai d’un an, en respectant un préavis fixé par le contrat, qui ne peut excéder deux mois.",
        "Repérez donc deux dates : l’échéance principale du contrat et la date limite d’envoi de votre demande. Un envoi tardif reporte la résiliation d’une année entière.",
      ],
      callout: {
        tone: "legal",
        title: "Référence",
        body: "Article L113-12 du Code des assurances : faculté de résiliation annuelle, avec un préavis contractuel ne pouvant excéder deux mois.",
      },
    },
    {
      id: "autres-cas",
      title: "Les autres cas de résiliation",
      paragraphs: [
        "En dehors de l’échéance, plusieurs situations peuvent ouvrir un droit à résiliation, selon le contrat et la réglementation applicable.",
      ],
      bullets: [
        "modification du risque : changement d’activité, de volume ou de statut",
        "augmentation de tarif non prévue contractuellement, selon les clauses du contrat",
        "cessation d’activité de l’entreprise",
        "liquidation judiciaire, dans les conditions prévues par la loi",
        "résiliation à l’initiative de l’assureur, qui doit être motivée",
      ],
    },
    {
      id: "lettre",
      title: "Comment formuler sa demande",
      paragraphs: [
        "La demande doit être écrite, datée et envoyée par un moyen laissant une preuve. Un courrier recommandé avec accusé de réception reste la référence, même lorsque le contrat admet l’email.",
      ],
      bullets: [
        "identité de l’entreprise et numéro de contrat",
        "mention explicite de la demande de résiliation",
        "date d’effet souhaitée, cohérente avec l’échéance et le préavis",
        "demande expresse du relevé de sinistralité",
        "demande de confirmation écrite de la résiliation",
      ],
    },
    {
      id: "continuite",
      title: "Le point critique : la continuité de garantie",
      paragraphs: [
        "La garantie décennale s’apprécie à la date d’ouverture du chantier. Un chantier ouvert pendant une interruption de garantie, même d’une journée, reste sans couverture pendant dix ans.",
        "L’ordre des opérations est donc toujours le même : obtenir d’abord l’accord et la date d’effet du nouveau contrat, résilier ensuite l’ancien.",
      ],
      bullets: [
        "ne jamais résilier avant d’avoir une confirmation écrite du nouveau contrat",
        "faire coïncider la date d’effet du nouveau contrat et la fin de l’ancien",
        "vérifier que les activités déclarées sont reprises à l’identique",
        "conserver les anciennes attestations pour les chantiers déjà ouverts",
      ],
    },
    {
      id: "anciens-chantiers",
      title: "Ce que devient la couverture des anciens chantiers",
      paragraphs: [
        "Résilier ne fait pas disparaître la garantie des chantiers ouverts pendant la période de validité de l’ancien contrat : ceux-ci restent couverts par cet ancien contrat pendant dix ans après leur réception.",
        "C’est pourquoi il est indispensable de conserver toutes vos anciennes attestations et conditions particulières, même après avoir changé d’assureur.",
      ],
    },
  ],
  checklist: [
    "date d’échéance du contrat identifiée",
    "durée du préavis vérifiée dans les conditions générales",
    "nouveau contrat confirmé par écrit avant toute résiliation",
    "dates de fin et de début exactement contiguës",
    "relevé de sinistralité demandé",
    "anciennes attestations archivées",
  ],
  faq: [
    {
      question: "Peut-on résilier une décennale à tout moment ?",
      answer:
        "Non. La faculté principale est la résiliation à l’échéance annuelle, avec un préavis contractuel. D’autres motifs, comme une modification du risque ou une cessation d’activité, peuvent permettre une résiliation en cours d’année.",
    },
    {
      question: "Quel est le préavis habituel ?",
      answer:
        "Le contrat fixe le préavis, qui ne peut excéder deux mois pour la résiliation annuelle. Vérifiez toujours la clause exacte de vos conditions générales.",
    },
    {
      question: "Mes anciens chantiers restent-ils couverts ?",
      answer:
        "Oui. Les chantiers ouverts pendant la validité de l’ancien contrat restent garantis par celui-ci pendant dix ans après leur réception, à condition qu’il n’ait pas été annulé pour fausse déclaration.",
    },
    {
      question: "Que se passe-t-il si j’ai un jour sans assurance ?",
      answer:
        "Les chantiers ouverts ce jour-là ne sont couverts par aucun contrat. C’est la raison pour laquelle la continuité doit être vérifiée à la journée près.",
    },
    {
      question: "Faut-il informer ses clients d’un changement d’assureur ?",
      answer:
        "Il est prudent de leur transmettre la nouvelle attestation, notamment sur les chantiers en cours et pour actualiser les mentions figurant sur vos devis et factures.",
    },
  ],
  primaryCommercialPath: "/assurance-decennale-pas-chere/",
  relatedPaths: [
    "/assurance-decennale-pas-chere/",
    "/comparateur-assurance-decennale/",
    "/devis-assurance-decennale/",
    "/decennale-apres-resiliation/",
    "/guides/date-effet-assurance-decennale/",
    "/guides/documents-devis-assurance-decennale/",
  ],
  sources: ["servicePublicDecennale"],
  legalSources: ["codeAssurancesL113_12", "codeAssurancesL113_3", "codeAssurancesL241_1"],
});
