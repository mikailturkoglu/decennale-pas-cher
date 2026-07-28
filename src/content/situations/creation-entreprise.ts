import { defineSituation } from "@/content/_factories";

export const creationEntreprise = defineSituation({
  slug: "decennale-creation-entreprise",
  status: "published",
  priority: "P0",
  seo: {
    title: "Assurance décennale création d’entreprise BTP : devis et documents",
    description:
      "Vous créez votre entreprise du bâtiment ? Découvrez les justificatifs d’expérience attendus et demandez des propositions adaptées à votre premier chantier.",
    primaryKeyword: "assurance décennale création entreprise",
    secondaryKeywords: [
      "décennale entreprise en création",
      "assurance décennale premier chantier",
      "attestation décennale création",
      "décennale jeune entreprise bâtiment",
      "justificatifs expérience décennale",
    ],
  },
  h1: "Assurance décennale pour une entreprise du BTP en création",
  shortAnswer:
    "Une entreprise en création peut être assurée en responsabilité civile décennale : les assureurs ne regardent pas l’ancienneté de la société mais l’expérience professionnelle du dirigeant. Le contrat doit prendre effet avant l’ouverture du premier chantier, et non à la signature du devis client. Les justificatifs d’expérience — certificats de travail, bulletins de salaire, diplômes — sont les pièces qui décident réellement de l’acceptation et du tarif.",
  summaryBullets: [
    "La création d’entreprise n’est pas un obstacle : l’expérience du dirigeant est l’élément clé.",
    "L’attestation doit exister avant le début des travaux, pas avant la facturation.",
    "Un dossier complet dès la première demande réduit fortement les délais.",
    "Le chiffre d’affaires prévisionnel doit être réaliste et cohérent avec l’activité.",
  ],
  sections: [
    {
      id: "peut-on-etre-assure",
      title: "Peut-on souscrire une décennale sans historique d’entreprise ?",
      paragraphs: [
        "Oui. L’assurance de responsabilité civile décennale s’adresse à toute entreprise réalisant des travaux de construction, y compris à celles dont le SIREN vient d’être attribué. Les assureurs raisonnent sur le risque technique du métier et sur la compétence des personnes qui exécuteront les travaux.",
        "Ce qui manque à une entreprise nouvelle, c’est un relevé de sinistralité. Ce document, remis par l’assureur précédent, résume les sinistres des cinq dernières années. En son absence, l’assureur reconstitue le profil à partir de votre parcours professionnel : c’est pourquoi les justificatifs d’expérience prennent une importance décisive.",
      ],
      bullets: [
        "un statut juridique déjà choisi, même si le Kbis n’est pas encore délivré",
        "une description précise des travaux que vous allez vendre",
        "un chiffre d’affaires prévisionnel argumenté",
        "des preuves d’expérience dans le métier déclaré",
      ],
    },
    {
      id: "avant-premier-chantier",
      title: "Pourquoi souscrire avant le premier chantier",
      paragraphs: [
        "La garantie décennale s’apprécie à la date d’ouverture du chantier. Si un chantier démarre avant la date d’effet du contrat, il n’est pas couvert, même si vous êtes assuré au moment de la réception ou du sinistre.",
        "Concrètement, la date d’effet doit précéder la première intervention physique sur le chantier : installation, dépose, terrassement, livraison de matériaux mis en œuvre. Ce point est vérifié en cas de sinistre et ne se rattrape pas après coup.",
      ],
      callout: {
        tone: "legal",
        title: "Obligation légale",
        body: "Exercer sans assurance décennale lorsqu’elle est obligatoire est un délit pénalement sanctionné. Le client peut également refuser le paiement ou engager la responsabilité personnelle du dirigeant.",
      },
    },
    {
      id: "experience-prise-en-compte",
      title: "Quelle expérience professionnelle est prise en compte",
      paragraphs: [
        "L’expérience recherchée est celle du métier déclaré, exercée en France ou à l’étranger, en tant que salarié, apprenti, artisan ou dirigeant. Elle est appréciée en années et en nature de travaux réalisés.",
        "Une expérience partielle n’est pas disqualifiante mais elle peut conduire à réduire le périmètre des activités accordées au démarrage : le contrat couvre alors les travaux que vous maîtrisez, et pourra être étendu plus tard.",
      ],
      bullets: [
        "années travaillées dans le métier, avec les périodes précises",
        "types de chantiers réalisés : neuf, rénovation, particuliers, professionnels",
        "niveau de responsabilité exercé : exécution, encadrement, conduite de travaux",
        "techniques particulières pratiquées, notamment celles jugées sensibles",
      ],
    },
    {
      id: "diplomes-et-justificatifs",
      title: "Diplômes et justificatifs acceptés",
      paragraphs: [
        "Aucune liste unique ne s’impose à tous les assureurs, mais un socle de pièces revient systématiquement. Plus les documents sont datés, nominatifs et cohérents entre eux, plus l’étude est rapide.",
      ],
      bullets: [
        "CAP, BEP, BP, bac professionnel ou titre professionnel du métier",
        "certificats de travail précisant les fonctions et les périodes",
        "bulletins de salaire, utiles pour confirmer la continuité d’activité",
        "attestation de formation continue ou de qualification professionnelle",
        "CV détaillé chantier par chantier lorsque les diplômes manquent",
        "qualifications professionnelles éventuelles, notamment RGE ou Qualibat",
      ],
    },
    {
      id: "prix-en-creation",
      title: "Ce qui fait varier le prix pour une entreprise en création",
      paragraphs: [
        "En création, le chiffre d’affaires prévisionnel remplace le chiffre d’affaires réalisé. Il constitue la principale assiette de calcul, corrigée par l’expérience et par le métier déclaré.",
        "Un prévisionnel volontairement bas peut sembler avantageux mais expose à une régularisation en fin d’exercice, parfois accompagnée d’une réduction d’indemnité en cas de sous-déclaration importante.",
      ],
    },
    {
      id: "delais",
      title: "Combien de temps prend l’étude d’un dossier de création",
      paragraphs: [
        "Le délai dépend de la complétude du dossier et du métier concerné. Une demande accompagnée de l’ensemble des justificatifs est étudiée plus rapidement qu’un dossier renvoyant à des pièces à fournir ultérieurement.",
        "Nous n’affichons pas de délai garanti : le délai réel dépend du professionnel partenaire qui étudie votre demande et de la complexité de votre situation.",
      ],
    },
    {
      id: "activites-difficiles",
      title: "Activités plus difficiles à obtenir en création",
      paragraphs: [
        "Certaines activités sont rarement accordées à une entreprise sans référence, en raison de leur sinistralité. Il est préférable de les annoncer d’emblée plutôt que de les découvrir exclues après un sinistre.",
      ],
      bullets: [
        "étanchéité de toiture-terrasse et cuvelage",
        "reprise en sous-œuvre et fondations spéciales",
        "isolation thermique par l’extérieur sans formation au système",
        "photovoltaïque et installations de production d’énergie",
        "piscines et bassins",
        "techniques non courantes sans avis technique",
      ],
    },
  ],
  documents: [
    "justificatif de création : Kbis, avis de situation SIRENE ou récépissé de dépôt",
    "pièce d’identité du dirigeant",
    "CV détaillé du dirigeant, chantier par chantier",
    "diplômes et titres professionnels du métier",
    "certificats de travail des employeurs précédents",
    "bulletins de salaire des dernières années d’exercice salarié",
    "chiffre d’affaires prévisionnel et ventilation par activité",
    "date prévue du premier chantier",
    "devis ou marchés déjà signés, s’ils existent",
    "attestations de qualification éventuelles",
  ],
  pricingFactors: [
    "chiffre d’affaires prévisionnel déclaré",
    "métier principal et sinistralité moyenne de ce métier",
    "nombre d’activités déclarées",
    "années d’expérience du dirigeant dans le métier",
    "présence ou absence de diplôme dans le métier",
    "recours envisagé à la sous-traitance",
    "type de clientèle visée",
    "niveau de franchise retenu",
  ],
  commonMistakes: [
    "attendre le premier chantier pour demander l’attestation",
    "déclarer un chiffre d’affaires prévisionnel très inférieur à la réalité",
    "oublier une activité secondaire réellement exercée",
    "confondre RC professionnelle et responsabilité civile décennale",
    "signer un devis client avant d’avoir la confirmation de la date d’effet",
    "négliger les certificats de travail alors qu’ils sont plus convaincants qu’un CV",
    "démarrer un chantier en pensant qu’une régularisation rétroactive sera possible",
  ],
  faq: [
    {
      question: "Peut-on obtenir une décennale sans Kbis ?",
      answer:
        "Une étude peut généralement être lancée avec un récépissé de dépôt de création ou un avis de situation SIRENE. En revanche, l’émission du contrat et de l’attestation suppose une entreprise réellement immatriculée.",
    },
    {
      question: "Faut-il un diplôme pour être assuré en création d’entreprise ?",
      answer:
        "Le diplôme n’est pas toujours indispensable, mais son absence doit être compensée par une expérience professionnelle documentée. Certains métiers réglementés imposent par ailleurs une qualification indépendamment de l’assurance.",
    },
    {
      question: "Le contrat peut-il prendre effet le jour de la demande ?",
      answer:
        "La date d’effet est fixée par l’assureur après acceptation du dossier. Elle ne peut pas être antérieure à cette acceptation : c’est pourquoi il faut anticiper avant de planifier votre premier chantier.",
    },
    {
      question: "Que se passe-t-il si mon chiffre d’affaires dépasse le prévisionnel ?",
      answer:
        "Une régularisation est généralement prévue au contrat. Il est préférable de signaler la hausse en cours d’année plutôt que de la découvrir lors d’un appel de régularisation, voire au moment d’un sinistre.",
    },
    {
      question: "Puis-je démarrer avec un périmètre d’activités réduit ?",
      answer:
        "Oui, c’est souvent la solution retenue en création. Le contrat couvre les activités que vous maîtrisez, et une extension peut être demandée ensuite, à mesure que votre expérience se documente.",
    },
    {
      question: "Une micro-entreprise est-elle traitée différemment ?",
      answer:
        "L’obligation d’assurance est identique. Les différences portent sur les niveaux de chiffre d’affaires et parfois sur les offres disponibles. La page dédiée aux auto-entrepreneurs détaille ces points.",
    },
  ],
  suggestedTradeSlugs: [
    "assurance-decennale-macon",
    "assurance-decennale-plombier",
    "assurance-decennale-electricien",
    "assurance-decennale-peintre",
    "assurance-decennale-carreleur",
    "assurance-decennale-menuisier",
  ],
  relatedPaths: [
    "/decennale-auto-entrepreneur/",
    "/decennale-sans-experience/",
    "/decennale-sans-antecedent-assurance/",
    "/prix-assurance-decennale/",
    "/attestation-decennale-rapide/",
    "/devis-assurance-decennale/",
    "/guides/documents-devis-assurance-decennale/",
    "/guides/assurance-decennale-obligatoire/",
  ],
  sources: ["servicePublicDecennale", "codeAssurancesL241_1", "codeCivil1792", "nomenclatureBtp"],
});
