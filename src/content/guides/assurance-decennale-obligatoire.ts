import { defineGuide } from "@/content/_factories";

export const assuranceDecennaleObligatoire = defineGuide({
  slug: "assurance-decennale-obligatoire",
  title: "L’assurance décennale est-elle obligatoire ?",
  category: "comprendre",
  status: "published",
  priority: "P0",
  seo: {
    title: "Assurance décennale obligatoire : qui est concerné et sanctions",
    description:
      "Qui doit souscrire une assurance décennale, pour quels travaux, à partir de quand, et que risque une entreprise du bâtiment non assurée ? Réponses sourcées.",
    primaryKeyword: "assurance décennale obligatoire",
    secondaryKeywords: [
      "obligation assurance décennale",
      "qui doit souscrire une décennale",
      "sanction absence décennale",
      "décennale obligatoire artisan",
      "travaux soumis à décennale",
    ],
  },
  h1: "L’assurance décennale est-elle obligatoire ?",
  summary:
    "Oui pour tout constructeur réalisant des travaux de bâtiment relevant de la responsabilité décennale. L’obligation découle de l’article L241-1 du Code des assurances et s’applique quel que soit le statut juridique. Elle doit être satisfaite avant l’ouverture du chantier, et son absence constitue un délit. Certaines prestations sans lien avec un ouvrage échappent toutefois à ce champ.",
  shortAnswer:
    "L’assurance de responsabilité civile décennale est obligatoire pour toute personne physique ou morale qui, en qualité de constructeur, réalise des travaux de bâtiment susceptibles d’engager la responsabilité décennale. Elle doit être souscrite avant l’ouverture du chantier. L’absence d’assurance est punie pénalement et laisse le dirigeant personnellement exposé pendant dix ans.",
  summaryBullets: [
    "Obligation posée par l’article L241-1 du Code des assurances.",
    "Applicable à tous les statuts, y compris la micro-entreprise.",
    "À satisfaire avant l’ouverture du chantier.",
    "Sanction pénale et responsabilité personnelle du dirigeant en cas d’absence.",
  ],
  sections: [
    {
      id: "qui-est-concerne",
      title: "Qui est soumis à l’obligation",
      paragraphs: [
        "Sont concernés tous ceux que la loi qualifie de constructeurs, c’est-à-dire les personnes liées au maître d’ouvrage par un contrat de louage d’ouvrage. La forme juridique et la taille de l’entreprise sont indifférentes.",
      ],
      bullets: [
        "entreprises de travaux, tous corps d’état confondus",
        "artisans, micro-entrepreneurs et entreprises individuelles",
        "architectes, maîtres d’œuvre et bureaux d’études",
        "contractants généraux et entreprises générales",
        "fabricants d’ouvrages ou de parties d’ouvrage assimilés à des constructeurs",
        "entreprises étrangères intervenant sur un chantier situé en France",
      ],
    },
    {
      id: "quels-travaux",
      title: "Quels travaux sont concernés",
      paragraphs: [
        "L’obligation suit la responsabilité décennale : elle concerne les travaux de construction susceptibles de compromettre la solidité de l’ouvrage ou de le rendre impropre à sa destination.",
        "Les travaux purement mobiliers, l’entretien courant ou certaines prestations paysagères sans ouvrage peuvent en revanche sortir de ce champ. La qualification s’apprécie prestation par prestation, jamais métier par métier.",
      ],
    },
    {
      id: "exceptions",
      title: "Les cas hors du champ de l’obligation",
      paragraphs: [
        "Certaines interventions échappent à l’obligation, sans que cela dispense d’une assurance de responsabilité civile professionnelle.",
      ],
      bullets: [
        "travaux sur des ouvrages exclus par la loi, notamment certains ouvrages de génie civil",
        "prestations d’entretien et de maintenance sans intervention sur l’ouvrage",
        "fournitures sans pose",
        "prestations intellectuelles sans mission de conception d’ouvrage",
        "travaux ne créant ni ouvrage ni élément d’équipement indissociable",
      ],
      callout: {
        tone: "warning",
        title: "Attention aux raccourcis",
        body: "Le fait qu’une prestation soit petite, ponctuelle ou peu coûteuse ne la fait pas sortir du champ de l’obligation. C’est la nature des travaux et leur incidence sur l’ouvrage qui comptent.",
      },
    },
    {
      id: "quand-souscrire",
      title: "À quel moment l’obligation doit être satisfaite",
      paragraphs: [
        "L’assurance doit être en vigueur à la date d’ouverture du chantier. Cette date correspond au début effectif des travaux, non à la signature du devis ni à la commande de matériaux.",
        "Un chantier ouvert avant la prise d’effet du contrat reste sans garantie pendant toute la durée de la responsabilité décennale, soit dix ans après la réception.",
      ],
    },
    {
      id: "sanctions",
      title: "Les sanctions en cas d’absence d’assurance",
      paragraphs: [
        "Le défaut d’assurance obligatoire est un délit prévu par le Code des assurances, sanctionné par une amende et une peine d’emprisonnement.",
        "Au-delà de la sanction pénale, les conséquences économiques sont souvent plus lourdes : indemnisation des désordres sur les fonds propres de l’entreprise, refus de paiement par le client, perte de marchés faute d’attestation, mise en cause du patrimoine personnel du dirigeant selon la forme juridique.",
      ],
    },
  ],
  checklist: [
    "vérifier que vos travaux relèvent bien de la responsabilité décennale",
    "identifier toutes les activités que vous facturez réellement",
    "obtenir l’attestation avant l’ouverture du premier chantier",
    "vérifier que la période de validité couvre chaque chantier ouvert",
    "faire figurer les mentions d’assurance sur les devis et factures",
    "conserver les attestations pendant toute la durée de responsabilité",
  ],
  faq: [
    {
      question: "Un auto-entrepreneur est-il vraiment obligé de s’assurer ?",
      answer:
        "Oui. L’obligation dépend de la nature des travaux et non du régime fiscal ou social. Un micro-entrepreneur du bâtiment est soumis exactement aux mêmes règles qu’une société.",
    },
    {
      question: "Un sous-traitant est-il soumis à l’obligation ?",
      answer:
        "Non au sens strict, car il n’est pas lié au maître d’ouvrage. Il reste toutefois exposé à un recours de l’entreprise principale, qui exige presque toujours une attestation avant intervention.",
    },
    {
      question: "Que risque une entreprise contrôlée sans assurance ?",
      answer:
        "Une sanction pénale prévue par le Code des assurances, ainsi qu’une exposition personnelle au coût des désordres pendant dix ans. Le client peut également refuser de payer et engager une action.",
    },
    {
      question: "L’obligation s’applique-t-elle aux travaux sur existant ?",
      answer:
        "Oui, dès lors que les travaux constituent un ouvrage ou un élément d’équipement indissociable, ce qui est le cas de la plupart des travaux de rénovation lourde.",
    },
  ],
  primaryCommercialPath: "/assurance-decennale/",
  relatedPaths: [
    "/assurance-decennale/",
    "/devis-assurance-decennale/",
    "/decennale-creation-entreprise/",
    "/guides/que-couvre-assurance-decennale/",
    "/guides/rc-pro-vs-decennale/",
    "/guides/attestation-assurance-decennale/",
  ],
  sources: ["servicePublicDecennale", "servicePublicAttestation"],
  legalSources: ["codeAssurancesL241_1", "codeCivil1792", "loiSpinetta", "codeCivil1792_4_1"],
});
