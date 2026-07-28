import { defineSituation } from "@/content/_factories";
import { NOTICES } from "@/data/legal-notices";

export const sansAntecedentAssurance = defineSituation({
  slug: "decennale-sans-antecedent-assurance",
  status: "published",
  priority: "P0",
  seo: {
    title: "Décennale sans antécédent d’assurance : constituer son dossier",
    description:
      "Entreprise du BTP jamais assurée ou sans relevé de sinistralité : comprenez ce qui est examiné et préparez un dossier recevable par un professionnel partenaire.",
    primaryKeyword: "décennale sans antécédent assurance",
    secondaryKeywords: [
      "entreprise jamais assurée décennale",
      "décennale sans relevé de sinistralité",
      "assurance décennale trou de garantie",
      "décennale entreprise non assurée",
      "régulariser assurance décennale",
    ],
  },
  h1: "Assurance décennale sans antécédent d’assurance",
  shortAnswer:
    "Une entreprise qui a exercé sans assurance décennale, ou qui ne peut produire aucun relevé de sinistralité, se trouve dans une situation examinée au cas par cas. Le point clé est de distinguer trois éléments : la période non assurée, qui restera non couverte, la situation actuelle de l’entreprise, et la qualité du dossier présenté. Aucune acceptation ne peut être garantie, mais un dossier documenté et transparent augmente nettement les chances d’une étude favorable.",
  summaryBullets: [
    "Les chantiers ouverts sans assurance ne seront pas couverts rétroactivement.",
    "Le relevé de sinistralité manquant se compense par un dossier détaillé.",
    "La transparence sur la période non assurée est indispensable.",
    "Certains métiers à forte sinistralité sont plus difficiles à replacer.",
  ],
  sections: [
    {
      id: "situations-concernees",
      title: "Trois situations différentes, souvent confondues",
      paragraphs: [
        "L’absence d’antécédent d’assurance recouvre des cas très différents, qui ne s’étudient pas de la même façon. Identifier précisément le vôtre est la première étape.",
      ],
      bullets: [
        "entreprise nouvellement créée, qui n’a simplement jamais eu de contrat : le sujet est celui de la création d’entreprise",
        "entreprise en activité qui a travaillé sans assurance obligatoire : la période concernée reste sans garantie",
        "entreprise assurée par le passé mais incapable d’obtenir son relevé de sinistralité auprès de l’ancien assureur",
        "entreprise ayant connu une interruption de garantie entre deux contrats, appelée trou de garantie",
      ],
    },
    {
      id: "periode-non-assuree",
      title: "Ce qu’un nouveau contrat ne pourra pas couvrir",
      paragraphs: [
        "Un contrat d’assurance décennale couvre les chantiers ouverts pendant sa période de validité. Souscrire aujourd’hui ne couvre donc pas les chantiers déjà ouverts hier, ni les désordres qui apparaîtront sur ces chantiers pendant les dix ans à venir.",
        "Une reprise du passé peut parfois être négociée, mais elle est rare, encadrée et jamais automatique. Elle suppose au minimum un inventaire précis des chantiers concernés et une absence de désordre connu.",
      ],
      callout: {
        tone: "warning",
        title: "Point à ne pas sous-estimer",
        body: NOTICES.pastCoverage,
      },
    },
    {
      id: "sans-releve",
      title: "Comment remplacer un relevé de sinistralité indisponible",
      paragraphs: [
        "Le relevé de sinistralité est un document que l’assureur précédent doit pouvoir fournir. Commencez toujours par le demander par écrit : sa production reste la solution la plus simple.",
        "Lorsqu’il est réellement impossible à obtenir, l’étude s’appuie sur d’autres éléments, qu’il faut réunir vous-même.",
      ],
      bullets: [
        "anciennes attestations d’assurance, même expirées",
        "appels de cotisation ou avis d’échéance montrant la continuité des paiements",
        "courriers de résiliation, s’ils existent",
        "déclaration écrite et signée de l’absence de sinistre connu",
        "attestation de votre expert-comptable sur les exercices concernés",
        "liste des chantiers réalisés, avec dates de réception",
      ],
    },
    {
      id: "regulariser",
      title: "Régulariser sa situation pour l’avenir",
      paragraphs: [
        "La régularisation vise à assurer les chantiers à venir. Elle ne fait pas disparaître le risque lié aux chantiers passés, mais elle met fin à une situation d’infraction et permet de continuer à travailler.",
        "Dans certains cas, l’entreprise peut aussi devoir traiter la question des chantiers en cours : un chantier déjà ouvert nécessite une analyse spécifique, développée dans la page consacrée à ce sujet.",
      ],
    },
    {
      id: "dossier-solide",
      title: "Ce qui rend un dossier plus solide",
      paragraphs: [
        "Un dossier bien préparé ne cache rien et explique tout. Les professionnels qui étudient ces demandes cherchent surtout à comprendre si l’entreprise est techniquement compétente et si sa situation s’est stabilisée.",
      ],
      bullets: [
        "explication écrite et factuelle de la période non assurée",
        "preuve de la compétence technique du dirigeant et des salariés",
        "comptabilité à jour et absence de dette de cotisation",
        "périmètre d’activités resserré sur ce que vous maîtrisez réellement",
        "acceptation d’une franchise plus élevée si elle est proposée",
      ],
    },
    {
      id: "metiers-sensibles",
      title: "Métiers plus difficiles à placer sans antécédent",
      paragraphs: [
        "À situation égale, certains métiers sont acceptés plus difficilement, car leur sinistralité moyenne est élevée et le coût des reprises important.",
      ],
      bullets: [
        "étanchéité, cuvelage et travaux enterrés",
        "gros œuvre avec reprise en sous-œuvre",
        "charpente et ossature bois de grande portée",
        "photovoltaïque et énergies renouvelables",
        "piscines, bassins et ouvrages hydrauliques",
        "entreprise générale multi-lots sans encadrement technique",
      ],
    },
  ],
  documents: [
    "Kbis ou avis de situation SIRENE",
    "pièce d’identité du dirigeant",
    "explication écrite de la période sans assurance",
    "anciennes attestations d’assurance, même expirées",
    "relevé de sinistralité si vous parvenez à l’obtenir",
    "liste des chantiers réalisés avec dates de réception",
    "déclaration signée d’absence de sinistre connu",
    "bilans ou situation comptable des deux derniers exercices",
    "CV, diplômes et certificats de travail du dirigeant",
    "ventilation détaillée du chiffre d’affaires par activité",
  ],
  pricingFactors: [
    "durée de la période non assurée",
    "métier exercé et sinistralité moyenne associée",
    "chiffre d’affaires et volume de chantiers réalisés",
    "existence de désordres connus ou de litiges en cours",
    "qualité et complétude des justificatifs fournis",
    "expérience technique du dirigeant",
    "franchise acceptée",
    "périmètre d’activités demandé",
  ],
  commonMistakes: [
    "présenter la demande comme une entreprise nouvellement créée alors qu’une activité a déjà été exercée",
    "espérer une couverture rétroactive automatique des chantiers passés",
    "omettre un litige ou un désordre déjà signalé par un client",
    "demander un périmètre d’activités très large pour se laisser des options",
    "négliger la demande écrite du relevé de sinistralité auprès de l’ancien assureur",
    "laisser une nouvelle interruption de garantie s’installer après la régularisation",
  ],
  faq: [
    {
      question: "Peut-on s’assurer après avoir travaillé sans décennale ?",
      answer:
        "C’est possible, mais l’étude est menée au cas par cas et aucune acceptation ne peut être promise. Le nouveau contrat portera sur les chantiers à venir, la période non assurée restant sans garantie.",
    },
    {
      question: "Un nouveau contrat couvre-t-il mes anciens chantiers ?",
      answer:
        "Non, sauf reprise du passé expressément accordée par l’assureur, ce qui est rare et encadré. Par défaut, seuls les chantiers ouverts après la date d’effet sont garantis.",
    },
    {
      question: "Que faire si mon ancien assureur ne répond pas ?",
      answer:
        "Adressez une demande écrite avec accusé de réception, en rappelant que ce document est nécessaire pour souscrire un nouveau contrat. Conservez la preuve de votre démarche : elle sera utile pour expliquer l’absence de relevé.",
    },
    {
      question: "L’absence d’assurance passée est-elle sanctionnée ?",
      answer:
        "L’exercice sans assurance obligatoire est un délit et le dirigeant reste personnellement exposé aux conséquences des désordres. Régulariser la situation pour l’avenir reste la démarche la plus protectrice.",
    },
    {
      question: "Faut-il déclarer un litige en cours ?",
      answer:
        "Oui, systématiquement. Une omission peut entraîner la nullité du contrat pour fausse déclaration, ce qui aggraverait considérablement votre situation.",
    },
    {
      question: "Un trou de garantie de quelques semaines est-il grave ?",
      answer:
        "Il est moins problématique qu’une longue période, mais il n’est jamais neutre : les chantiers ouverts pendant cette période resteront sans garantie pendant dix ans.",
    },
  ],
  suggestedTradeSlugs: [
    "assurance-decennale-macon",
    "assurance-decennale-couvreur",
    "assurance-decennale-etancheur",
    "assurance-decennale-plombier",
    "assurance-decennale-electricien",
    "assurance-decennale-facadier",
  ],
  relatedPaths: [
    "/decennale-apres-resiliation/",
    "/decennale-reprise-passe/",
    "/decennale-chantier-deja-commence/",
    "/decennale-creation-entreprise/",
    "/devis-assurance-decennale/",
    "/prix-assurance-decennale/",
    "/guides/documents-devis-assurance-decennale/",
    "/guides/assurance-decennale-obligatoire/",
  ],
  sources: [
    "servicePublicDecennale",
    "codeAssurancesL241_1",
    "codeCivil1792_4_1",
    "bct",
  ],
});
