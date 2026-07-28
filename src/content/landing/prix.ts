import { defineLanding, indicativeBand } from "@/content/_factories";
import { NOTICES } from "@/data/legal-notices";
import { PLACEHOLDER } from "@/lib/placeholders";

/**
 * Repères tarifaires transverses.
 *
 * Les montants restent volontairement absents : aucune fourchette n'est publiée
 * avant validation par le partenaire disposant des données, conformément au
 * brief. La structure et les hypothèses sont en place pour les recevoir.
 */
export const priceReferenceBands = [
  indicativeBand({
    label: "Artisan seul, métier de finition",
    annualRevenue: `CA ${PLACEHOLDER.toFill}`,
    experience: `Expérience ${PLACEHOLDER.toFill}`,
    insuranceHistory: "Continuité d’assurance, sans sinistre",
  }),
  indicativeBand({
    label: "Artisan seul, lot technique",
    annualRevenue: `CA ${PLACEHOLDER.toFill}`,
    experience: `Expérience ${PLACEHOLDER.toFill}`,
    insuranceHistory: "Continuité d’assurance, sans sinistre",
  }),
  indicativeBand({
    label: "Artisan seul, gros œuvre",
    annualRevenue: `CA ${PLACEHOLDER.toFill}`,
    experience: `Expérience ${PLACEHOLDER.toFill}`,
    insuranceHistory: "Continuité d’assurance, sans sinistre",
  }),
  indicativeBand({
    label: "Entreprise en création, sans antécédent",
    annualRevenue: `CA prévisionnel ${PLACEHOLDER.toFill}`,
    experience: `Expérience ${PLACEHOLDER.toFill}`,
    insuranceHistory: "Aucun antécédent d’assurance",
  }),
  indicativeBand({
    label: "TPE avec salariés, multi-activités",
    annualRevenue: `CA ${PLACEHOLDER.toFill}`,
    experience: `Expérience ${PLACEHOLDER.toFill}`,
    insuranceHistory: "Continuité d’assurance, sinistralité à préciser",
  }),
];

export const prix = defineLanding({
  slug: "prix-assurance-decennale",
  name: "Prix et tarifs",
  status: "published",
  priority: "P0",
  seo: {
    title: "Prix assurance décennale : critères de tarification et repères",
    description:
      "Comment se calcule le prix d’une assurance décennale : chiffre d’affaires, métier, expérience, sinistralité, franchise, et nos repères de lecture par profil.",
    primaryKeyword: "prix assurance décennale",
    secondaryKeywords: [
      "tarif décennale",
      "coût assurance décennale",
      "cotisation décennale",
      "prime assurance décennale",
      "tarif décennale artisan",
    ],
  },
  h1: "Prix d’une assurance décennale : comment se calcule votre cotisation",
  heroTitle: "Prix de l’assurance décennale",
  heroText:
    "La cotisation n’est jamais un forfait. Elle se construit à partir de votre chiffre d’affaires, de votre métier, de votre expérience et de vos antécédents. Cette page détaille chaque critère et la méthode que nous appliquons à nos repères tarifaires.",
  shortAnswer:
    "Le prix d’une assurance décennale se calcule le plus souvent en appliquant un taux au chiffre d’affaires déclaré, corrigé par le métier, l’expérience du dirigeant, le nombre d’activités, la sinistralité des cinq dernières années et le niveau de franchise. Un même chiffre d’affaires peut donc donner des cotisations très différentes selon le métier : les lots structurels et l’étanchéité sont nettement plus chers que les lots de finition.",
  summaryBullets: [
    "Le chiffre d’affaires est l’assiette principale de la cotisation.",
    "Le métier exercé est le second facteur le plus déterminant.",
    "L’absence d’antécédent d’assurance renchérit généralement le tarif.",
    "Une franchise plus élevée réduit la cotisation mais augmente votre exposition.",
  ],
  sections: [
    {
      id: "methode",
      title: "Comment nous présentons les prix",
      paragraphs: [
        "Nous refusons d’afficher un prix d’appel du type « à partir de X euros par mois ». Un tel montant, sans métier, sans chiffre d’affaires et sans date, n’a aucune valeur comparative et induit le lecteur en erreur.",
        "Chaque repère publié sur le site indique le métier concerné, le chiffre d’affaires, l’expérience, l’historique d’assurance et la date de référence. Tant que ces données ne sont pas validées par un partenaire disposant des chiffres réels, le montant reste affiché comme non renseigné.",
      ],
      callout: {
        tone: "info",
        title: "Méthodologie",
        body: "La page Notre méthode détaille l’origine des données, leur périmètre et leurs limites. Les repères sont revus au minimum deux fois par an.",
      },
    },
    {
      id: "criteres",
      title: "Les critères qui font varier la cotisation",
      paragraphs: [
        "Les assureurs raisonnent sur la probabilité d’un sinistre et sur son coût potentiel. Chaque critère ci-dessous agit dans un sens ou dans l’autre.",
      ],
      bullets: [
        "chiffre d’affaires réalisé ou prévisionnel, fourniture comprise",
        "métier principal et sinistralité moyenne de ce métier",
        "nombre et nature des activités déclarées",
        "ancienneté de l’entreprise et expérience personnelle du dirigeant",
        "antécédents d’assurance : continuité, interruption, résiliation",
        "sinistralité des cinq dernières années, réglée et provisionnée",
        "part du chiffre d’affaires sous-traitée",
        "techniques employées, notamment les techniques non courantes",
        "niveau de franchise et étendue des garanties annexes",
        "type de clientèle et nature des marchés",
      ],
    },
    {
      id: "franchise",
      title: "L’effet de la franchise sur le prix",
      paragraphs: [
        "Augmenter la franchise réduit la cotisation, parfois sensiblement. C’est un arbitrage de trésorerie : vous payez moins chaque mois, mais vous supportez une part plus importante en cas de sinistre.",
        "Attention aux franchises majorées sur certains postes, fréquentes en étanchéité, en infiltration ou sur les travaux structurels. Elles n’apparaissent pas toujours clairement sur une proposition commerciale.",
      ],
    },
    {
      id: "reduire",
      title: "Réduire sa cotisation sans se fragiliser",
      paragraphs: [
        "Il est possible d’agir sur le prix, à condition de ne pas dégrader la couverture réelle de votre activité.",
      ],
      bullets: [
        "déclarer un chiffre d’affaires exact plutôt que surestimé",
        "retirer une activité que vous n’exercez plus réellement",
        "documenter votre expérience et vos qualifications",
        "présenter un relevé de sinistralité sans sinistre",
        "arbitrer consciemment le niveau de franchise",
        "opter pour un paiement adapté à votre trésorerie afin d’éviter tout impayé",
      ],
    },
    {
      id: "erreurs",
      title: "Les fausses économies",
      paragraphs: [
        "Certaines décisions font baisser la cotisation immédiate mais créent un risque disproportionné.",
      ],
      bullets: [
        "omettre une activité réellement exercée",
        "sous-déclarer volontairement son chiffre d’affaires",
        "accepter une franchise incompatible avec sa trésorerie",
        "renoncer à la garantie dommages aux existants en travaillant en rénovation",
        "laisser une interruption de garantie entre deux contrats",
      ],
    },
  ],
  modules: ["price-table", "quote-form-teaser", "trade-grid", "situation-grid"],
  faq: [
    {
      question: "Combien coûte une assurance décennale par mois ?",
      answer:
        "Il n’existe pas de montant unique. La cotisation dépend du chiffre d’affaires, du métier, de l’expérience et des antécédents. Nos repères par profil précisent systématiquement ces hypothèses, ou restent affichés comme non renseignés tant qu’ils ne sont pas validés.",
    },
    {
      question: "Pourquoi deux artisans paient-ils des prix très différents ?",
      answer:
        "Parce que le métier et le profil pèsent autant que le chiffre d’affaires. Un étancheur et un peintre au même chiffre d’affaires ne présentent pas le même risque, ni la même exposition financière pour l’assureur.",
    },
    {
      question: "Le prix augmente-t-il chaque année ?",
      answer:
        "La cotisation est généralement révisée en fonction du chiffre d’affaires déclaré et de l’évolution du contrat. Une régularisation intervient lorsque le chiffre d’affaires réel dépasse le montant déclaré.",
    },
    {
      question: "Une entreprise en création paie-t-elle plus cher ?",
      answer:
        "Souvent, car l’absence de relevé de sinistralité et d’ancienneté est un facteur d’incertitude. L’expérience personnelle du dirigeant peut cependant compenser en grande partie ce désavantage.",
    },
    {
      question: "Peut-on payer sa décennale mensuellement ?",
      answer:
        "C’est fréquemment possible, parfois avec un léger surcoût. Le paiement mensuel réduit le risque d’impayé, dont les conséquences sont lourdes : suspension de garantie puis résiliation.",
    },
    {
      question: "La franchise est-elle négociable ?",
      answer:
        "Elle fait partie des paramètres du contrat et peut varier selon les propositions. Vérifiez toujours s’il existe des franchises majorées sur certains types de travaux.",
    },
  ],
  relatedPaths: [
    "/assurance-decennale-pas-chere/",
    "/comparateur-assurance-decennale/",
    "/devis-assurance-decennale/",
    "/assurance-decennale/",
    "/notre-methode/",
    "/guides/franchise-assurance-decennale/",
    "/metiers/",
  ],
  sources: ["servicePublicDecennale", "codeAssurancesL241_1", "nomenclatureBtp"],
  breadcrumbParents: [{ name: "Assurance décennale", path: "/assurance-decennale/" }],
});

export const priceMethodologyNotice = NOTICES.price;
