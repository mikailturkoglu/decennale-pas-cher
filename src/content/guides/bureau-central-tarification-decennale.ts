import { defineGuide } from "@/content/_factories";

export const bureauCentralTarificationDecennale = defineGuide({
  slug: "bureau-central-tarification-decennale",
  title: "Le Bureau central de tarification (BCT) en assurance décennale",
  category: "resiliation-et-refus",
  status: "published",
  priority: "P1",
  seo: {
    title: "BCT assurance décennale : recours après un refus d’assurance",
    description:
      "Le Bureau central de tarification permet à une entreprise du bâtiment refusée par les assureurs d’obtenir une couverture décennale. Rôle, conditions et limites.",
    primaryKeyword: "bureau central de tarification décennale",
    secondaryKeywords: [
      "BCT assurance décennale",
      "refus assurance décennale recours",
      "entreprise refusée par les assureurs décennale",
      "saisir le BCT construction",
    ],
  },
  h1: "Le Bureau central de tarification (BCT) en assurance décennale",
  summary:
    "Le Bureau central de tarification est le recours prévu par la loi lorsqu’une entreprise soumise à une obligation d’assurance ne trouve pas d’assureur. Il ne délivre pas lui-même de contrat : il fixe la prime moyennant laquelle une entreprise d’assurance désignée est tenue de garantir le risque. La procédure est encadrée, formaliste et suppose un refus caractérisé ainsi qu’un dossier technique complet.",
  shortAnswer:
    "Le BCT est un organisme institué pour les assurances obligatoires, dont l’assurance de responsabilité décennale. Il intervient lorsqu’une entreprise s’est vu refuser sa garantie : il détermine alors le montant de la prime pour lequel l’assureur désigné doit accepter le risque. Il ne s’agit ni d’un assureur, ni d’un médiateur commercial, et le recours n’aboutit pas à une couverture gratuite ou avantageuse : la prime fixée peut être sensiblement plus élevée que celle du marché.",
  summaryBullets: [
    "Recours prévu pour les assurances obligatoires, dont la décennale.",
    "Le BCT fixe une prime ; il ne vend pas de contrat.",
    "Un refus caractérisé et un dossier complet sont nécessaires.",
    "Les délais de saisine sont brefs : vérifiez-les dès la réception du refus.",
  ],
  sections: [
    {
      id: "role",
      title: "Le rôle exact du BCT",
      paragraphs: [
        "Le législateur a assorti les obligations d’assurance d’un mécanisme de garantie d’accès : si une entreprise est légalement contrainte de s’assurer, elle doit pouvoir trouver une couverture. Le Bureau central de tarification est l’instrument de cette garantie pour l’assurance construction.",
        "Son rôle est strictement tarifaire : saisi d’une demande, il fixe le montant de la prime moyennant laquelle l’entreprise d’assurance concernée est tenue de garantir le risque qui lui a été proposé. Il ne réécrit pas le contrat, ne choisit pas les garanties annexes et n’apprécie pas la qualité commerciale de la relation.",
      ],
      bullets: [
        "il n’émet pas d’attestation d’assurance",
        "il ne se substitue pas au courtier dans la constitution du dossier",
        "il ne juge pas le bien-fondé commercial du refus",
        "il ne traite pas les litiges d’indemnisation, qui relèvent de la médiation ou du juge",
      ],
    },
    {
      id: "quand-y-recourir",
      title: "Quand ce recours a du sens",
      paragraphs: [
        "Le BCT s’adresse aux situations de blocage réel, après épuisement des solutions de marché. Avant d’y recourir, il est presque toujours utile de faire réétudier le dossier par un intermédiaire spécialisé en assurance construction : une large part des refus s’explique par un dossier incomplet, des activités mal formulées ou un chiffre d’affaires incohérent avec le métier déclaré.",
        "Le recours devient pertinent lorsque le refus persiste malgré un dossier techniquement solide, par exemple pour une activité à forte sinistralité, une entreprise sortant d’une résiliation ou une structure présentant un historique de sinistres important.",
      ],
      callout: {
        tone: "warning",
        title: "Un recours ne garantit pas un tarif avantageux",
        body: "La prime fixée reflète le risque tel qu’il est apprécié. Elle peut être nettement supérieure aux cotisations habituelles du métier, avec des garanties limitées au strict périmètre obligatoire.",
      },
    },
    {
      id: "conditions",
      title: "Les conditions à réunir",
      paragraphs: [
        "La procédure suppose de démontrer trois éléments : que vous êtes soumis à l’obligation d’assurance, que vous avez présenté une demande complète à une entreprise d’assurance, et que celle-ci a refusé de garantir le risque.",
        "Les délais applicables sont courts et courent à compter du refus. Ils doivent être vérifiés dans le texte en vigueur et auprès du bureau avant de constituer le dossier : un dépôt tardif entraîne l’irrecevabilité de la demande, sans examen du fond.",
      ],
      bullets: [
        "identité complète et situation juridique de l’entreprise",
        "description précise des activités à garantir, formulée selon la nomenclature d’assurance",
        "chiffre d’affaires réalisé et prévisionnel, ventilé par activité",
        "preuve écrite du refus opposé par l’entreprise d’assurance",
        "historique d’assurance et relevé de sinistralité",
        "éléments d’expérience et de qualification du dirigeant et des équipes",
      ],
    },
    {
      id: "apres-la-decision",
      title: "Ce qui se passe après la décision",
      paragraphs: [
        "Lorsque le bureau fixe la prime, l’entreprise d’assurance désignée est tenue de garantir le risque à ce tarif. Le contrat est alors établi dans les conditions correspondant à l’obligation légale, ce qui signifie fréquemment un périmètre limité aux garanties obligatoires, sans extensions de confort.",
        "Cette solution doit être considérée comme transitoire. L’objectif est de revenir vers une offre de marché dès que le profil de l’entreprise s’est amélioré : continuité d’assurance rétablie, sinistralité stabilisée, activités clarifiées, dette de prime régularisée.",
      ],
    },
    {
      id: "alternatives",
      title: "Les démarches à mener en parallèle",
      bullets: [
        "faire reformuler les activités à déclarer avec un spécialiste de l’assurance construction",
        "régulariser toute dette de prime auprès de l’assureur précédent",
        "réunir les justificatifs d’expérience manquants",
        "documenter les mesures correctives prises après un sinistre",
        "réduire temporairement le périmètre d’activités aux prestations réellement maîtrisées",
        "vérifier la cohérence entre le code APE, les statuts et les travaux facturés",
      ],
    },
  ],
  checklist: [
    "conserver par écrit chaque refus reçu, daté et signé",
    "vérifier le délai de saisine applicable dès réception du refus",
    "faire réétudier le dossier par un intermédiaire spécialisé avant toute démarche",
    "constituer la description exacte des activités à garantir",
    "rassembler relevé de sinistralité et historique d’assurance complets",
    "préparer une trésorerie compatible avec une prime supérieure au marché",
  ],
  faq: [
    {
      question: "Le BCT peut-il obliger un assureur à m’assurer ?",
      answer:
        "Le bureau fixe la prime moyennant laquelle l’entreprise d’assurance concernée est tenue de garantir le risque présenté. C’est cette tarification, et non une injonction commerciale, qui débloque la situation.",
    },
    {
      question: "Faut-il un refus écrit pour saisir le bureau ?",
      answer:
        "Oui, un refus opposé à une demande complète doit pouvoir être établi. Un simple échange téléphonique ou l’absence de réponse à un dossier incomplet ne constituent pas une base solide.",
    },
    {
      question: "Combien de temps dure la procédure ?",
      answer:
        "La durée dépend de la complétude du dossier et de l’instruction. Cette voie n’est donc pas adaptée à l’urgence d’un chantier qui démarre : elle se prépare en amont, pendant que d’autres solutions sont explorées.",
    },
    {
      question: "Le tarif fixé est-il définitif ?",
      answer:
        "Il correspond au risque tel qu’il a été présenté. Toute évolution significative de l’activité, du chiffre d’affaires ou de la sinistralité justifie de faire réexaminer la situation, y compris pour revenir vers une offre de marché.",
    },
    {
      question: "Une entreprise résiliée pour non-paiement peut-elle y recourir ?",
      answer:
        "Le mécanisme n’a pas pour objet de neutraliser une dette de prime. La régularisation du solde dû à l’assureur précédent reste, dans la pratique, un préalable pour retrouver une couverture durable.",
    },
    {
      question: "Le recours dispense-t-il de déclarer toutes mes activités ?",
      answer:
        "Non. Comme pour tout contrat, seules les activités effectivement déclarées sont garanties. Une déclaration incomplète reproduirait le défaut de couverture que la démarche vise à corriger.",
    },
  ],
  primaryCommercialPath: "/devis-assurance-decennale/",
  relatedPaths: [
    "/decennale-apres-resiliation/",
    "/decennale-non-paiement/",
    "/decennale-apres-sinistre/",
    "/devis-assurance-decennale/",
    "/guides/documents-devis-assurance-decennale/",
    "/guides/nomenclature-activites-btp/",
  ],
  sources: ["bct", "servicePublicDecennale", "acpr"],
  legalSources: ["codeAssurances", "codeAssurancesL241_1"],
});
