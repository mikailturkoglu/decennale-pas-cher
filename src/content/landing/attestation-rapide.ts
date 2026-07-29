import { defineLanding } from "@/content/_factories";

export const attestationRapide = defineLanding({
  slug: "attestation-decennale-rapide",
  name: "Attestation rapide",
  status: "published",
  priority: "P0",
  seo: {
    title: "Attestation décennale rapide : accélérer réellement son dossier",
    description:
      "Besoin d’une attestation d’assurance décennale rapidement ? Ce qui allonge les délais, les pièces à préparer et les erreurs qui font perdre le plus de temps.",
    primaryKeyword: "attestation décennale rapide",
    secondaryKeywords: [
      "décennale rapide",
      "attestation décennale urgente",
      "attestation décennale 24h",
      "obtenir attestation décennale vite",
      "décennale immédiate",
    ],
  },
  h1: "Attestation d’assurance décennale : comment accélérer votre dossier",
  heroTitle: "Obtenir son attestation plus vite",
  heroText:
    "Le délai d’obtention dépend surtout de la complétude de votre dossier. Cette page explique ce qui ralentit réellement une demande et comment préparer un dossier immédiatement exploitable.",
  shortAnswer:
    "Le délai d’émission d’une attestation dépend de l’assureur et de la qualité du dossier transmis, jamais du site sur lequel la demande est faite. Dans les faits, les demandes complètes — activités précisément décrites, chiffre d’affaires justifié, expérience documentée, antécédents fournis — sont traitées beaucoup plus vite que les demandes incomplètes, qui génèrent des allers-retours de plusieurs jours.",
  summaryBullets: [
    "Aucun délai ne peut être garanti : il dépend de l’assureur et du dossier.",
    "Les pièces manquantes sont la première cause de retard.",
    "Une situation atypique demande nécessairement plus de temps d’étude.",
    "L’attestation ne couvre que les chantiers ouverts après la date d’effet.",
  ],
  sections: [
    {
      id: "delais-reels",
      title: "Ce qui détermine réellement le délai",
      paragraphs: [
        "Nous n’affichons pas de promesse du type « attestation en quelques heures ». Un tel engagement ne dépend pas du site et ne serait pas tenable pour tous les profils.",
        "Nous rappelons sous une heure pour qualifier votre demande. Le délai d’obtention de l’attestation dépend ensuite du partenaire habilité et de la complétude du dossier : aucun délai d’attestation n’est garanti sur ce site.",
      ],
      bullets: [
        "complétude du dossier au premier envoi",
        "clarté de la description des activités exercées",
        "présence du relevé de sinistralité et de l’ancienne attestation",
        "existence d’une situation atypique : résiliation, sinistre, absence d’antécédent",
        "disponibilité et process du partenaire qui étudie la demande",
      ],
    },
    {
      id: "preparer",
      title: "Préparer un dossier immédiatement exploitable",
      paragraphs: [
        "Réunir ces éléments avant de transmettre votre demande est le seul levier réellement efficace pour gagner du temps.",
      ],
      bullets: [
        "Kbis ou avis de situation SIRENE récent",
        "pièce d’identité du dirigeant",
        "chiffre d’affaires réalisé ou prévisionnel, avec ventilation par activité",
        "liste écrite des prestations réellement facturées",
        "ancienne attestation d’assurance et relevé de sinistralité",
        "CV, diplômes et certificats de travail",
        "date d’ouverture du chantier concerné",
      ],
    },
    {
      id: "urgence-chantier",
      title: "Vous devez démarrer un chantier immédiatement",
      paragraphs: [
        "C’est la situation la plus fréquente et la plus délicate. La règle est simple : la garantie s’apprécie à la date d’ouverture du chantier. Un chantier démarré avant la date d’effet du contrat n’est pas couvert.",
        "Il est donc préférable de décaler l’ouverture du chantier de quelques jours plutôt que de démarrer sans garantie, ce qui vous exposerait pendant dix ans.",
      ],
      callout: {
        tone: "warning",
        title: "Ne démarrez pas sans attestation",
        body: "Aucune régularisation rétroactive n’est automatique. Seule une reprise du passé expressément accordée par l’assureur peut couvrir un chantier déjà ouvert, et elle reste rare.",
      },
    },
    {
      id: "erreurs",
      title: "Les erreurs qui font perdre le plus de temps",
      paragraphs: [
        "Chacune de ces erreurs génère un aller-retour, soit un à plusieurs jours perdus.",
      ],
      bullets: [
        "envoyer une demande sans préciser les activités réellement exercées",
        "annoncer un chiffre d’affaires sans pouvoir le justifier",
        "omettre une résiliation ou un sinistre, découvert ensuite dans le relevé",
        "transmettre des documents illisibles ou tronqués",
        "indiquer un mauvais numéro de téléphone ou une adresse email inactive",
        "demander une date d’effet antérieure à la demande",
      ],
    },
  ],
  modules: ["quote-form-teaser", "how-it-works", "situation-grid", "trade-grid"],
  faq: [
    {
      question: "Peut-on obtenir une attestation décennale en 24 heures ?",
      answer:
        "C’est parfois possible pour un dossier simple et complet, mais cela ne peut pas être garanti. Le délai dépend de l’assureur, de votre métier et de votre situation. Nous ne promettons donc aucun délai chiffré.",
    },
    {
      question: "Une attestation peut-elle être délivrée immédiatement en ligne ?",
      answer:
        "Non pour une garantie décennale, qui suppose une étude du risque. Les offres promettant une attestation instantanée reposent en réalité sur une acceptation ultérieure et peuvent laisser un chantier sans couverture.",
    },
    {
      question: "L’attestation couvre-t-elle un chantier déjà commencé ?",
      answer:
        "Non, sauf reprise du passé expressément accordée. La garantie s’apprécie à la date d’ouverture du chantier : un chantier démarré avant la date d’effet reste hors garantie.",
    },
    {
      question: "Que faire si mon client réclame l’attestation aujourd’hui ?",
      answer:
        "Informez-le du délai d’étude et convenez d’une date de démarrage compatible. Remettre une attestation qui ne couvre pas son chantier serait plus dommageable qu’un léger report.",
    },
    {
      question: "Un dossier atypique peut-il être traité rapidement ?",
      answer:
        "Une résiliation, un sinistre ou une absence d’antécédent nécessitent une analyse plus longue. Préparer une explication écrite et les pièces correspondantes reste le meilleur moyen de réduire ce délai.",
    },
    {
      question: "Puis-je obtenir une attestation provisoire ?",
      answer:
        "Certains assureurs émettent une note de couverture avant l’édition définitive. Sa portée dépend strictement de son contenu : lisez-la attentivement avant de la remettre à un client.",
    },
  ],
  relatedPaths: [
    "/devis-assurance-decennale/",
    "/assurance-decennale-en-ligne/",
    "/decennale-chantier-deja-commence/",
    "/decennale-creation-entreprise/",
    "/guides/attestation-assurance-decennale/",
    "/guides/date-effet-assurance-decennale/",
  ],
  sources: ["servicePublicAttestation", "servicePublicDecennale", "codeAssurancesA243_1"],
  breadcrumbParents: [{ name: "Assurance décennale", path: "/assurance-decennale/" }],
});
