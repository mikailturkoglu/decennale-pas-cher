import { defineSituation } from "@/content/_factories";

export const autoEntrepreneur = defineSituation({
  slug: "decennale-auto-entrepreneur",
  status: "published",
  priority: "P0",
  seo: {
    title: "Assurance décennale auto-entrepreneur : prix et devis",
    description:
      "Micro-entrepreneur du bâtiment : comparez des solutions de garantie décennale selon votre métier, votre expérience et votre chiffre d’affaires, et préparez votre dossier.",
    primaryKeyword: "assurance décennale auto entrepreneur",
    secondaryKeywords: [
      "décennale micro entrepreneur",
      "assurance décennale auto-entrepreneur bâtiment",
      "prix décennale auto entrepreneur",
      "attestation décennale micro entreprise",
      "décennale micro entrepreneur obligatoire",
    ],
  },
  h1: "Assurance décennale auto-entrepreneur du bâtiment",
  shortAnswer:
    "Le régime de la micro-entreprise ne change rien à l’obligation d’assurance : un auto-entrepreneur qui réalise des travaux de construction doit détenir une responsabilité civile décennale avant l’ouverture de son premier chantier. Il doit en outre mentionner son assureur et la couverture géographique du contrat sur ses devis et factures. Le chiffre d’affaires étant plafonné, la cotisation se situe généralement dans la partie basse des barèmes, mais elle reste calculée sur le métier réellement exercé.",
  summaryBullets: [
    "L’obligation d’assurance dépend des travaux, pas du régime fiscal.",
    "Les mentions d’assurance sont obligatoires sur les devis et factures.",
    "La fourniture de matériaux compte dans le chiffre d’affaires déclaré.",
    "Une activité non déclarée reste non garantie, même en micro-entreprise.",
  ],
  sections: [
    {
      id: "obligation",
      title: "L’assurance décennale est-elle obligatoire en micro-entreprise ?",
      paragraphs: [
        "Oui, dès lors que vous réalisez des travaux de construction relevant de la responsabilité décennale. Le régime micro-social et micro-fiscal n’a aucun effet sur cette obligation, qui découle du Code des assurances et du Code civil.",
        "Beaucoup d’artisans découvrent cette obligation après avoir démarré leur activité. Une régularisation est possible pour l’avenir, mais elle ne couvrira pas les chantiers déjà ouverts.",
      ],
      callout: {
        tone: "legal",
        title: "Mentions obligatoires",
        body: "Vos devis et factures doivent indiquer l’assurance souscrite au titre de votre activité, les coordonnées de l’assureur ou du garant, ainsi que la couverture géographique du contrat.",
      },
    },
    {
      id: "specificites",
      title: "Ce qui est spécifique aux auto-entrepreneurs",
      paragraphs: [
        "La micro-entreprise implique un plafond de chiffre d’affaires et l’absence de récupération de TVA. Deux conséquences pratiques en découlent pour l’assurance.",
      ],
      bullets: [
        "le chiffre d’affaires déclaré à l’assureur inclut la fourniture de matériaux si vous la facturez",
        "la cotisation est souvent proche d’un plancher tarifaire, car l’assiette reste limitée",
        "le passage en société en cours d’année impose de transférer ou de résilier le contrat",
        "l’attestation est établie au nom de l’entreprise individuelle, avec votre nom propre",
      ],
    },
    {
      id: "declaration-activites",
      title: "Déclarer précisément ses activités",
      paragraphs: [
        "Le principal risque d’un auto-entrepreneur du bâtiment est la polyvalence. Enchaîner de petits chantiers variés conduit souvent à exercer des activités qui ne figurent pas sur l’attestation.",
        "Un désordre survenant sur une activité non déclarée n’est pas garanti : l’artisan reste alors personnellement responsable pendant dix ans, sans plafond.",
      ],
      bullets: [
        "listez les prestations réellement vendues, pas seulement votre intitulé de code APE",
        "signalez les prestations occasionnelles, même minoritaires",
        "vérifiez que les travaux annexes courants sont bien intégrés à votre activité principale",
        "demandez une extension avant d’accepter un chantier hors périmètre",
      ],
    },
    {
      id: "prix",
      title: "Combien coûte une décennale en micro-entreprise",
      paragraphs: [
        "La cotisation dépend du métier, du chiffre d’affaires prévisionnel ou réalisé, de l’expérience et du nombre d’activités déclarées. Les métiers de finition sont généralement les moins chers, les lots structurels et l’étanchéité les plus élevés.",
        "Nous ne publions pas de tarif d’appel : un montant affiché sans hypothèses n’a aucune valeur comparative. Les repères indiqués sur le site précisent toujours le métier, le chiffre d’affaires, l’expérience et la date de référence.",
      ],
    },
    {
      id: "premier-chantier",
      title: "Obtenir son attestation avant le premier chantier",
      paragraphs: [
        "La garantie s’apprécie à la date d’ouverture du chantier. Si vous démarrez avant la prise d’effet du contrat, le chantier reste hors garantie pendant dix ans.",
        "Anticipez donc la demande avant de signer vos premiers devis, en particulier si votre client est un professionnel ou un syndic : l’attestation est presque toujours exigée avant tout démarrage.",
      ],
    },
    {
      id: "depassement-plafond",
      title: "Que faire en cas de dépassement de plafond ou de changement de statut",
      paragraphs: [
        "Le passage en entreprise individuelle classique, en EURL ou en SASU crée une nouvelle personne juridique dans la plupart des cas. Le contrat doit alors être adapté ou repris au nom de la nouvelle structure.",
        "Ne laissez aucune période sans garantie entre les deux structures : un chantier ouvert dans l’intervalle ne serait couvert par aucun contrat.",
      ],
    },
  ],
  documents: [
    "avis de situation SIRENE ou justificatif d’immatriculation",
    "pièce d’identité",
    "chiffre d’affaires réalisé ou prévisionnel",
    "description précise des prestations vendues",
    "CV et certificats de travail attestant de l’expérience du métier",
    "diplômes ou titre professionnel s’ils existent",
    "ancienne attestation d’assurance en cas de contrat précédent",
    "relevé de sinistralité si vous avez déjà été assuré",
    "date prévue du premier chantier",
  ],
  pricingFactors: [
    "métier principal déclaré",
    "chiffre d’affaires prévisionnel ou réalisé, fourniture comprise",
    "nombre d’activités déclarées",
    "années d’expérience dans le métier",
    "existence d’un diplôme ou d’une qualification",
    "antécédents d’assurance et sinistralité",
    "franchise retenue",
    "zone géographique d’intervention",
  ],
  commonMistakes: [
    "croire que la micro-entreprise dispense de l’obligation d’assurance",
    "oublier les mentions d’assurance sur les devis et factures",
    "déclarer uniquement l’activité principale alors que plusieurs sont exercées",
    "exclure la fourniture de matériaux du chiffre d’affaires déclaré",
    "confondre l’assurance responsabilité civile professionnelle et la décennale",
    "changer de statut juridique sans reprendre le contrat",
    "démarrer un chantier avant la date d’effet",
  ],
  faq: [
    {
      question: "Un auto-entrepreneur peut-il travailler sans décennale ?",
      answer:
        "Non, lorsque ses travaux relèvent de la garantie décennale. L’absence d’assurance obligatoire est un délit et expose le dirigeant à une responsabilité personnelle sur dix ans, sans plafond d’indemnisation.",
    },
    {
      question: "La décennale est-elle moins chère en micro-entreprise ?",
      answer:
        "Souvent oui, car l’assiette de cotisation est limitée par le plafond de chiffre d’affaires. Le métier exercé reste toutefois le facteur déterminant : un étancheur en micro-entreprise coûtera plus cher qu’un peintre à chiffre d’affaires équivalent.",
    },
    {
      question: "Quelles mentions doivent figurer sur mes devis ?",
      answer:
        "Vous devez indiquer l’assurance souscrite pour votre activité, les coordonnées de l’assureur ou du garant et la couverture géographique du contrat. Ces mentions sont exigées pour les activités relevant de l’assurance construction obligatoire.",
    },
    {
      question: "Faut-il déclarer les petits chantiers de dépannage ?",
      answer:
        "Le dépannage sans intervention sur l’ouvrage relève plutôt de la responsabilité civile professionnelle. Dès que vous modifiez ou remplacez un élément intégré au bâtiment, la décennale peut être concernée : mieux vaut décrire précisément ces prestations.",
    },
    {
      question: "Puis-je être assuré si je débute sans expérience ?",
      answer:
        "C’est possible mais plus difficile, et le périmètre d’activités accordé peut être réduit. La page consacrée aux artisans sans expérience détaille les justificatifs qui aident le plus dans ce cas.",
    },
    {
      question: "Que devient mon contrat si je passe en société ?",
      answer:
        "La nouvelle structure est une personne juridique distincte : le contrat doit être adapté ou souscrit au nom de la société. Veillez à ce qu’aucun chantier ne soit ouvert pendant une période sans garantie.",
    },
  ],
  suggestedTradeSlugs: [
    "assurance-decennale-peintre",
    "assurance-decennale-carreleur",
    "assurance-decennale-plaquiste",
    "assurance-decennale-plombier",
    "assurance-decennale-electricien",
    "assurance-decennale-menuisier",
  ],
  relatedPaths: [
    "/decennale-creation-entreprise/",
    "/decennale-sans-experience/",
    "/prix-assurance-decennale/",
    "/assurance-decennale-pas-chere/",
    "/assurance-decennale-artisan/",
    "/devis-assurance-decennale/",
    "/guides/assurance-decennale-obligatoire/",
    "/guides/attestation-assurance-decennale/",
  ],
  sources: [
    "servicePublicDecennale",
    "servicePublicAttestation",
    "codeAssurancesL241_1",
    "codeCivil1792",
  ],
});
