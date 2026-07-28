import { defineSituation } from "@/content/_factories";
import { NOTICES } from "@/data/legal-notices";

export const apresSinistre = defineSituation({
  slug: "decennale-apres-sinistre",
  status: "published",
  priority: "P1",
  seo: {
    title: "Assurance décennale après un sinistre : présenter son dossier",
    description:
      "Entreprise du BTP ayant déclaré un ou plusieurs sinistres décennaux : comprenez ce qui est examiné et comment documenter vos mesures correctives.",
    primaryKeyword: "assurance décennale après sinistre",
    secondaryKeywords: [
      "entreprise sinistrée décennale",
      "décennale plusieurs sinistres",
      "relevé de sinistralité décennale",
      "décennale résiliée après sinistre",
      "se réassurer après sinistre BTP",
    ],
  },
  h1: "Assurance décennale après un ou plusieurs sinistres",
  shortAnswer:
    "Un sinistre déclaré n’interdit pas de se réassurer, mais il change la lecture du dossier. Ce qui est examiné, c’est la nature du désordre, son coût, sa cause technique et surtout ce que l’entreprise a modifié depuis. Un sinistre isolé lié à une cause identifiée et corrigée se traite très différemment d’une série de sinistres sur la même activité. Aucune acceptation ne peut être garantie avant l’examen du relevé de sinistralité.",
  summaryBullets: [
    "La cause technique du sinistre compte plus que son montant.",
    "Le relevé de sinistralité est la pièce centrale du dossier.",
    "Les mesures correctives doivent être concrètes et vérifiables.",
    "Une série de sinistres sur une même activité conduit souvent à l’exclure.",
  ],
  sections: [
    {
      id: "ce-qui-est-examine",
      title: "Ce qui est réellement examiné",
      paragraphs: [
        "Un sinistre décennal n’est pas seulement une somme sur un relevé. Le professionnel qui reprend votre dossier cherche à savoir si le même désordre peut se reproduire.",
      ],
      bullets: [
        "l’activité concernée et sa part dans votre chiffre d’affaires",
        "la cause technique retenue par l’expertise",
        "le coût réglé et les provisions éventuellement encore ouvertes",
        "le caractère isolé ou répétitif du désordre",
        "l’ancienneté du sinistre",
        "les mesures prises depuis, et leur traçabilité",
      ],
    },
    {
      id: "releve-sinistralite",
      title: "Le relevé de sinistralité, pièce centrale",
      paragraphs: [
        "Votre assureur doit pouvoir vous délivrer un relevé récapitulant les sinistres des cinq dernières années. Demandez-le par écrit dès le début de vos démarches : sans lui, aucune étude sérieuse n’est possible.",
        "Relisez ce document avant de le transmettre. Les erreurs sont fréquentes : sinistre imputé à tort, montant non actualisé, dossier clos présenté comme ouvert. Une contestation écrite auprès de l’assureur est possible et parfois décisive.",
      ],
    },
    {
      id: "mesures-correctives",
      title: "Documenter les mesures correctives",
      paragraphs: [
        "C’est le point qui distingue un dossier étudiable d’un dossier refusé d’emblée. Il ne s’agit pas d’affirmer que la situation s’est améliorée, mais de le démontrer.",
      ],
      bullets: [
        "abandon de l’activité ou de la technique à l’origine du sinistre",
        "recours systématique à un bureau d’études pour les ouvrages sensibles",
        "formation suivie par le dirigeant ou les salariés",
        "changement de fournisseur, de système ou de procédé",
        "mise en place de contrôles internes et de fiches d’autocontrôle",
        "réduction du volume sous-traité ou vérification systématique des attestations",
      ],
    },
    {
      id: "consequences-tarifaires",
      title: "Conséquences tarifaires et contractuelles possibles",
      paragraphs: [
        "Après un sinistre, plusieurs ajustements sont fréquents : majoration de la cotisation, augmentation de la franchise, exclusion de l’activité concernée, plafonnement plus strict ou surveillance renforcée.",
        "Ces ajustements ne sont pas systématiques et dépendent du dossier. Nous ne publions pas de fourchette chiffrée sans hypothèses vérifiées ni source.",
      ],
    },
    {
      id: "reserve",
      title: "Ce que nous ne pouvons pas promettre",
      paragraphs: [NOTICES.noAcceptancePromise],
    },
  ],
  documents: [
    "relevé de sinistralité sur cinq ans",
    "rapports d’expertise disponibles",
    "description écrite de chaque sinistre et de sa cause",
    "justificatifs des mesures correctives mises en place",
    "courrier de résiliation le cas échéant",
    "Kbis ou avis de situation SIRENE",
    "ventilation actuelle du chiffre d’affaires par activité",
    "attestations de formation récentes",
    "contrats de sous-traitance et attestations des sous-traitants",
    "situation comptable récente",
  ],
  pricingFactors: [
    "nombre de sinistres sur cinq ans",
    "coût total réglé et provisions ouvertes",
    "activité concernée par les sinistres",
    "cause technique retenue et sa récurrence possible",
    "ancienneté du dernier sinistre",
    "mesures correctives documentées",
    "périmètre d’activités demandé",
    "franchise acceptée",
  ],
  commonMistakes: [
    "transmettre un relevé de sinistralité sans l’avoir relu",
    "minimiser un sinistre ou en omettre un",
    "présenter des mesures correctives générales sans preuve",
    "conserver dans sa demande l’activité à l’origine des sinistres sans justification",
    "ignorer les provisions encore ouvertes, qui pèsent autant que les montants réglés",
    "attendre la résiliation pour préparer le dossier",
  ],
  faq: [
    {
      question: "Un sinistre décennal empêche-t-il de se réassurer ?",
      answer:
        "Non, pas en soi. Un sinistre isolé, ancien et dont la cause a été corrigée est fréquemment accepté. Une accumulation de sinistres sur la même activité est en revanche beaucoup plus difficile à replacer.",
    },
    {
      question: "Mon assureur peut-il me résilier après un sinistre ?",
      answer:
        "Cela dépend des conditions générales du contrat, qui peuvent prévoir une faculté de résiliation après sinistre. Le courrier de résiliation doit mentionner le fondement retenu.",
    },
    {
      question: "Comment contester une erreur sur mon relevé de sinistralité ?",
      answer:
        "Adressez une contestation écrite et motivée à votre assureur, en joignant les pièces utiles. Une erreur corrigée peut modifier sensiblement la lecture de votre dossier.",
    },
    {
      question: "Les provisions non réglées comptent-elles ?",
      answer:
        "Oui. Un dossier encore ouvert avec une provision importante est considéré comme un engagement potentiel, parfois autant qu’un sinistre déjà réglé.",
    },
    {
      question: "Vaut-il mieux abandonner l’activité concernée ?",
      answer:
        "Si cette activité est marginale dans votre chiffre d’affaires et à l’origine de vos sinistres, son abandon est souvent l’argument le plus efficace. Si elle constitue votre cœur de métier, il faut alors démontrer un changement de méthode.",
    },
  ],
  suggestedTradeSlugs: [
    "assurance-decennale-etancheur",
    "assurance-decennale-macon",
    "assurance-decennale-couvreur",
    "assurance-decennale-charpentier",
    "assurance-decennale-plombier",
    "assurance-decennale-facadier",
  ],
  relatedPaths: [
    "/decennale-apres-resiliation/",
    "/decennale-non-paiement/",
    "/decennale-sans-antecedent-assurance/",
    "/devis-assurance-decennale/",
    "/prix-assurance-decennale/",
    "/guides/franchise-assurance-decennale/",
    "/guides/bureau-central-tarification-decennale/",
  ],
  sources: [
    "servicePublicDecennale",
    "codeAssurancesL113_12",
    "codeCivil1792",
    "bct",
  ],
});
