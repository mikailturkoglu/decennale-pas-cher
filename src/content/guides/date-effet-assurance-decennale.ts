import { defineGuide } from "@/content/_factories";

export const dateEffetAssuranceDecennale = defineGuide({
  slug: "date-effet-assurance-decennale",
  title: "La date d’effet d’une assurance décennale",
  category: "souscrire",
  status: "published",
  priority: "P1",
  seo: {
    title: "Date d’effet assurance décennale : ce qui est réellement couvert",
    description:
      "Comment fonctionne la date d’effet d’un contrat de décennale, pourquoi elle doit précéder l’ouverture du chantier et ce qu’un contrat ne rattrape jamais.",
    primaryKeyword: "date d’effet assurance décennale",
    secondaryKeywords: [
      "date effet décennale chantier",
      "ouverture de chantier assurance décennale",
      "décennale rétroactive",
      "prise d’effet garantie décennale",
    ],
  },
  h1: "La date d’effet d’une assurance décennale",
  summary:
    "La date d’effet est la date à partir de laquelle le contrat s’applique. En assurance décennale, elle se combine avec une notion décisive : la date d’ouverture du chantier. Un contrat couvre les chantiers ouverts pendant sa période de validité, même si la réception et le sinistre interviennent des années plus tard. Un chantier ouvert avant la date d’effet reste donc sans garantie pendant dix ans, sauf reprise du passé expressément accordée.",
  shortAnswer:
    "La garantie décennale s’apprécie chantier par chantier, à sa date d’ouverture. Si le chantier est ouvert alors que le contrat est en vigueur, il reste couvert jusqu’à l’expiration de la responsabilité décennale, y compris après résiliation du contrat. À l’inverse, un chantier commencé avant la date d’effet n’entre pas dans le champ du contrat : seule une clause de reprise du passé, accordée après examen, peut modifier cette situation.",
  summaryBullets: [
    "Le critère déterminant est la date d’ouverture du chantier, pas celle du sinistre.",
    "Un chantier couvert le reste dix ans, même après résiliation du contrat.",
    "Un chantier ouvert avant la date d’effet n’est pas couvert par défaut.",
    "La date d’effet ne peut pas être antériorisée sur simple demande.",
  ],
  sections: [
    {
      id: "trois-dates",
      title: "Trois dates à ne pas confondre",
      paragraphs: [
        "Les difficultés viennent presque toujours d’une confusion entre des dates qui n’ont pas le même effet juridique. Les distinguer permet de comprendre pourquoi un contrat en vigueur ne suffit pas toujours.",
      ],
      bullets: [
        "la date d’effet : début d’application du contrat, indiquée sur les conditions particulières et sur l’attestation",
        "la date d’ouverture du chantier : début effectif des travaux, qui détermine si le chantier entre dans le champ du contrat",
        "la date de réception : point de départ du délai de dix ans de la responsabilité décennale",
      ],
      callout: {
        tone: "info",
        title: "La règle en une phrase",
        body: "Le contrat en vigueur au jour de l’ouverture du chantier est celui qui suivra ce chantier pendant toute la durée de la garantie décennale.",
      },
    },
    {
      id: "ouverture-de-chantier",
      title: "Ce qui constitue l’ouverture du chantier",
      paragraphs: [
        "L’ouverture du chantier correspond au démarrage matériel des travaux, et non à un acte administratif ou commercial. Signer un devis, encaisser un acompte ou commander des matériaux ne l’enclenche pas ; installer, déposer, terrasser ou mettre en œuvre, oui.",
        "Pour les opérations soumises à déclaration, la déclaration d’ouverture de chantier constitue un indice fort, mais c’est la réalité des travaux qui est examinée en cas de sinistre. Conservez donc les éléments datés : ordres de service, plannings, bons de livraison, photographies, procès-verbaux de réunion.",
      ],
    },
    {
      id: "changement-assureur",
      title: "Changement d’assureur et continuité de garantie",
      paragraphs: [
        "Puisque chaque chantier reste rattaché au contrat en vigueur à son ouverture, changer d’assureur ne fait pas perdre la couverture des chantiers passés : l’ancien contrat continue de suivre les opérations qu’il a couvertes, même après résiliation.",
        "Le risque se situe ailleurs : dans l’interruption. Un intervalle de quelques jours entre deux contrats laisse sans garantie tous les chantiers ouverts pendant cette fenêtre. C’est un défaut fréquent lors d’un changement d’assureur mal calé sur l’échéance annuelle.",
      ],
      bullets: [
        "faire coïncider la date d’effet du nouveau contrat avec le lendemain de la fin du précédent",
        "obtenir l’attestation du nouveau contrat avant de résilier l’ancien",
        "ne planifier aucune ouverture de chantier pendant une période non couverte",
        "vérifier que les activités déclarées sont identiques d’un contrat à l’autre",
      ],
    },
    {
      id: "reprise-du-passe",
      title: "Le cas des chantiers déjà ouverts",
      paragraphs: [
        "Lorsqu’un chantier a démarré sans assurance, la souscription d’un contrat ne régularise pas la situation de façon automatique. La seule voie est une reprise du passé, c’est-à-dire une extension expresse acceptée par l’assureur après examen du dossier.",
        "Cette extension est étudiée au cas par cas, souvent refusée pour les chantiers déjà réceptionnés ou présentant des désordres connus, et ne couvre jamais un sinistre déjà survenu ou déjà déclaré.",
      ],
      callout: {
        tone: "legal",
        title: "Aucune antériorisation possible",
        body: "Demander une date d’effet antérieure à la réalité de la souscription pour couvrir un chantier commencé constitue une fausse déclaration, susceptible d’entraîner la nullité du contrat et la perte de toute garantie.",
      },
    },
    {
      id: "en-pratique",
      title: "En pratique, comment fixer sa date d’effet",
      bullets: [
        "en création d’entreprise : à la date du premier chantier envisagé, jamais après",
        "en changement d’assureur : au lendemain de l’échéance du contrat en cours",
        "en reprise d’activité après une interruption : avant toute nouvelle intervention",
        "en cas d’ajout d’activité : avant le premier chantier faisant appel à cette activité",
        "prévoir un délai d’instruction : la date d’effet dépend de l’acceptation du dossier, pas de la demande",
      ],
    },
  ],
  checklist: [
    "identifier la date d’ouverture réelle de chaque chantier à venir",
    "vérifier que la date d’effet précède cette ouverture",
    "conserver la preuve datée du démarrage des travaux",
    "aligner les dates lors d’un changement d’assureur, sans interruption",
    "demander une extension avant toute nouvelle activité",
    "signaler tout chantier déjà ouvert lors de la demande, sans exception",
  ],
  faq: [
    {
      question: "Une assurance décennale peut-elle être rétroactive ?",
      answer:
        "Pas par principe. Un contrat couvre les chantiers ouverts pendant sa période de validité. Couvrir un chantier antérieur suppose une clause de reprise du passé, accordée expressément après étude, et jamais pour un sinistre déjà survenu.",
    },
    {
      question: "Que se passe-t-il si je résilie mon contrat ?",
      answer:
        "Les chantiers ouverts pendant la validité du contrat restent suivis par ce contrat jusqu’à l’expiration de la garantie décennale. En revanche, aucun nouveau chantier ne sera couvert après la résiliation.",
    },
    {
      question: "Le sinistre doit-il survenir pendant la validité du contrat ?",
      answer:
        "Non. C’est l’ouverture du chantier qui rattache l’opération au contrat. Un désordre déclaré huit ans après la réception relève du contrat en vigueur au moment de l’ouverture du chantier concerné.",
    },
    {
      question: "Combien de temps faut-il pour obtenir une date d’effet ?",
      answer:
        "Le délai dépend de la complétude du dossier et de l’étude par l’assureur. Un dossier complet dès la première demande est le principal levier pour obtenir une date d’effet rapprochée.",
    },
    {
      question: "Puis-je démarrer un chantier avant de recevoir l’attestation ?",
      answer:
        "C’est fortement déconseillé. Ce qui compte est la prise d’effet du contrat, mais sans confirmation écrite de l’assureur vous n’avez aucune preuve de couverture, ni pour votre client, ni en cas de sinistre.",
    },
    {
      question: "L’attestation mentionne-t-elle la date d’effet ?",
      answer:
        "Elle mentionne la période de validité de la garantie. C’est cette période que vos clients et les entreprises principales vérifient au regard de la date d’ouverture du chantier.",
    },
  ],
  primaryCommercialPath: "/devis-assurance-decennale/",
  relatedPaths: [
    "/decennale-chantier-deja-commence/",
    "/decennale-reprise-passe/",
    "/devis-assurance-decennale/",
    "/attestation-decennale-rapide/",
    "/guides/attestation-assurance-decennale/",
    "/guides/comment-resilier-assurance-decennale/",
  ],
  sources: ["servicePublicDecennale", "servicePublicAttestation"],
  legalSources: ["codeCivil1792", "codeCivil1792_4_1", "codeAssurancesA243_1"],
});
