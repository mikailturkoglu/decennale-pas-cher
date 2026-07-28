import { defineSituation } from "@/content/_factories";
import { NOTICES } from "@/data/legal-notices";

export const nonPaiement = defineSituation({
  slug: "decennale-non-paiement",
  status: "published",
  priority: "P0",
  seo: {
    title: "Décennale résilié pour non-paiement : régulariser et se réassurer",
    description:
      "Résiliation pour non-paiement de prime : comprenez la procédure, la dette de cotisation et les éléments attendus pour qu’un partenaire puisse étudier votre dossier.",
    primaryKeyword: "décennale résilié non paiement",
    secondaryKeywords: [
      "assurance décennale non-paiement",
      "résiliation prime impayée décennale",
      "régulariser dette cotisation décennale",
      "décennale suspension de garantie",
      "se réassurer après impayé décennale",
    ],
  },
  h1: "Assurance décennale après une résiliation pour non-paiement",
  shortAnswer:
    "La résiliation pour non-paiement suit une procédure précise : mise en demeure, suspension de la garantie trente jours plus tard, puis résiliation dix jours après. Deux conséquences sont souvent mal comprises : la prime reste due pour la période de suspension, et les chantiers ouverts pendant cette suspension ne sont pas garantis. Pour se réassurer, il faut traiter séparément la dette, l’historique et la situation actuelle de l’entreprise.",
  summaryBullets: [
    "La garantie est suspendue trente jours après la mise en demeure.",
    "La prime reste due pour la période de suspension.",
    "Les chantiers ouverts pendant la suspension restent sans garantie.",
    "La régularisation de la dette est le premier levier d’un nouveau dossier.",
  ],
  sections: [
    {
      id: "procedure",
      title: "La procédure de résiliation pour non-paiement",
      paragraphs: [
        "Le Code des assurances encadre strictement cette procédure. À défaut de paiement dans les dix jours suivant l’échéance, l’assureur peut adresser une mise en demeure. La garantie est alors suspendue trente jours après l’envoi de cette lettre, et le contrat peut être résilié dix jours après cette suspension.",
        "Pendant la suspension, le contrat existe toujours et la prime continue de courir, mais aucune garantie n’est acquise. C’est la période la plus dangereuse pour une entreprise du bâtiment, car elle continue souvent d’ouvrir des chantiers sans le savoir.",
      ],
      callout: {
        tone: "legal",
        title: "Repère de délais",
        body: "Dix jours après l’échéance pour la mise en demeure, trente jours après la mise en demeure pour la suspension de garantie, dix jours supplémentaires pour la résiliation. Ces délais figurent au Code des assurances.",
      },
    },
    {
      id: "chantiers-concernes",
      title: "Quels chantiers restent couverts",
      paragraphs: [
        "Les chantiers ouverts avant la suspension de garantie demeurent en principe couverts, car la garantie décennale suit le chantier ouvert pendant la période de validité du contrat.",
        "En revanche, les chantiers ouverts pendant la période de suspension puis après la résiliation ne bénéficient d’aucune garantie. Cette situation vous expose pendant dix ans et n’est régularisable qu’au cas par cas, avec l’accord exprès d’un assureur.",
      ],
    },
    {
      id: "regulariser-dette",
      title: "Régulariser la dette de cotisation",
      paragraphs: [
        "Le paiement de la prime due, y compris pour la période de suspension, est presque toujours un préalable à toute nouvelle souscription. Un impayé non réglé est visible dans le dossier et constitue un signal négatif fort.",
        "Si vous ne pouvez pas régler en une fois, demandez un échéancier écrit à l’ancien assureur et conservez la trace de son accord et de vos paiements.",
      ],
      bullets: [
        "obtenir le décompte exact de la somme due",
        "négocier un échéancier écrit si nécessaire",
        "conserver les justificatifs de paiement",
        "demander une attestation de régularisation en fin de remboursement",
      ],
    },
    {
      id: "trois-elements",
      title: "Distinguer la dette, l’historique et la situation actuelle",
      paragraphs: [
        "Un dossier convaincant traite ces trois dimensions séparément. Les mélanger donne l’impression d’une entreprise qui minimise le sujet.",
      ],
      bullets: [
        "la dette : montant, régularisation, justificatifs",
        "l’historique : sinistres éventuels, indépendants de l’impayé",
        "la situation actuelle : trésorerie, carnet de commandes, organisation, mode de paiement envisagé",
      ],
    },
    {
      id: "eviter-recidive",
      title: "Éviter que la situation se reproduise",
      paragraphs: [
        "Les résiliations pour non-paiement sont souvent liées à un décalage de trésorerie plutôt qu’à une difficulté durable. Quelques choix pratiques réduisent nettement le risque de récidive.",
      ],
      bullets: [
        "privilégier un prélèvement mensuel plutôt qu’une prime annuelle",
        "aligner la date de prélèvement sur vos encaissements clients",
        "prévoir la régularisation de chiffre d’affaires dans votre trésorerie",
        "traiter immédiatement tout courrier de mise en demeure",
        "signaler à l’assureur une difficulté avant l’échéance plutôt qu’après",
      ],
    },
    {
      id: "reserve",
      title: "Ce que nous ne pouvons pas promettre",
      paragraphs: [NOTICES.noAcceptancePromise],
    },
  ],
  documents: [
    "mise en demeure et courrier de résiliation de l’assureur",
    "décompte de la somme due et justificatifs de paiement",
    "attestation de régularisation si elle a été obtenue",
    "relevé de sinistralité sur cinq ans",
    "Kbis ou avis de situation SIRENE",
    "pièce d’identité du dirigeant",
    "situation comptable ou bilan récent",
    "liste des chantiers ouverts pendant la période de suspension",
    "ventilation du chiffre d’affaires par activité",
    "carnet de commandes ou devis signés",
  ],
  pricingFactors: [
    "régularisation ou non de la dette de cotisation",
    "durée de la période sans garantie",
    "existence de sinistres en plus de l’impayé",
    "métier exercé et sinistralité associée",
    "santé financière actuelle de l’entreprise",
    "mode de paiement retenu pour le nouveau contrat",
    "franchise acceptée",
    "périmètre d’activités demandé",
  ],
  commonMistakes: [
    "penser que la garantie cesse dès le premier impayé, alors que la suspension intervient plus tard",
    "croire que la prime n’est plus due pendant la suspension",
    "ouvrir des chantiers pendant la suspension de garantie",
    "ne pas ouvrir les courriers de mise en demeure",
    "solliciter un nouvel assureur sans avoir régularisé la dette",
    "omettre la résiliation dans la nouvelle demande",
    "reprendre une prime annuelle alors que la trésorerie ne le permet pas",
  ],
  faq: [
    {
      question: "À partir de quand ma garantie est-elle suspendue ?",
      answer:
        "Trente jours après l’envoi de la mise en demeure par l’assureur, si la prime n’a pas été réglée. Le contrat peut ensuite être résilié dix jours après cette suspension.",
    },
    {
      question: "Dois-je payer la prime de la période de suspension ?",
      answer:
        "Oui. Le contrat reste en vigueur pendant la suspension, la prime continue donc de courir alors qu’aucune garantie n’est acquise. C’est l’un des effets les plus mal compris de cette procédure.",
    },
    {
      question: "Puis-je faire annuler la résiliation en payant ?",
      answer:
        "Un paiement intervenant avant la résiliation peut remettre la garantie en vigueur, dans les conditions prévues par le Code des assurances et le contrat. Après la résiliation, il faut souscrire un nouveau contrat.",
    },
    {
      question: "Les chantiers ouverts pendant la suspension sont-ils couverts ?",
      answer:
        "Non. Aucune garantie n’est acquise pendant la suspension. Ces chantiers restent sans couverture décennale, ce qui engage l’entreprise et son dirigeant pendant dix ans.",
    },
    {
      question: "Faut-il déclarer une résiliation pour non-paiement ?",
      answer:
        "Oui, comme toute résiliation. L’omission expose à la nullité du nouveau contrat pour fausse déclaration, ce qui aggraverait fortement votre situation.",
    },
    {
      question: "Le nouveau contrat sera-t-il plus cher ?",
      answer:
        "C’est possible, notamment si la dette n’est pas régularisée ou si des sinistres s’ajoutent à l’impayé. Le montant dépend du dossier et des partenaires : nous ne publions pas de fourchette sans hypothèses vérifiées.",
    },
  ],
  suggestedTradeSlugs: [
    "assurance-decennale-macon",
    "assurance-decennale-plombier",
    "assurance-decennale-couvreur",
    "assurance-decennale-electricien",
    "assurance-decennale-peintre",
    "assurance-decennale-plaquiste",
  ],
  relatedPaths: [
    "/decennale-apres-resiliation/",
    "/decennale-sans-antecedent-assurance/",
    "/decennale-chantier-deja-commence/",
    "/devis-assurance-decennale/",
    "/prix-assurance-decennale/",
    "/guides/bureau-central-tarification-decennale/",
    "/guides/franchise-assurance-decennale/",
  ],
  sources: [
    "codeAssurancesL113_3",
    "codeAssurancesL241_1",
    "servicePublicDecennale",
    "bct",
  ],
});
