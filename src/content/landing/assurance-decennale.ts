import { defineLanding } from "@/content/_factories";

export const assuranceDecennale = defineLanding({
  slug: "assurance-decennale",
  name: "Assurance décennale",
  status: "published",
  priority: "P0",
  seo: {
    title: "Assurance décennale : obligation, garanties et devis | DécennaleBTP.fr",
    description:
      "La garantie décennale des professionnels du bâtiment : obligation légale, travaux couverts, durée, attestation, prix et démarches pour obtenir des propositions.",
    primaryKeyword: "assurance décennale",
    secondaryKeywords: [
      "garantie décennale",
      "RC décennale",
      "RCD",
      "assurance décennale obligatoire",
      "responsabilité civile décennale",
    ],
  },
  h1: "Assurance décennale : ce que tout professionnel du bâtiment doit savoir",
  heroTitle: "Assurance de responsabilité civile décennale",
  heroText:
    "Obligation légale, travaux couverts, durée de garantie, attestation, prix : cette page rassemble l’essentiel, puis oriente vers les informations propres à votre métier et à votre situation.",
  shortAnswer:
    "L’assurance de responsabilité civile décennale couvre les dommages qui, dans les dix ans suivant la réception des travaux, compromettent la solidité de l’ouvrage ou le rendent impropre à sa destination. Elle est obligatoire pour tout constructeur au sens de la loi, quel que soit son statut juridique, et doit être souscrite avant l’ouverture du chantier. Le contrat ne garantit que les activités effectivement déclarées sur l’attestation.",
  summaryBullets: [
    "Obligation légale pour tout constructeur, y compris en micro-entreprise.",
    "Durée : dix ans à compter de la réception des travaux.",
    "Seules les activités déclarées sur l’attestation sont garanties.",
    "La garantie s’apprécie à la date d’ouverture du chantier.",
  ],
  sections: [
    {
      id: "definition",
      title: "Qu’est-ce que la garantie décennale ?",
      paragraphs: [
        "La garantie décennale n’est pas une assurance de la qualité du travail : c’est une responsabilité de plein droit posée par l’article 1792 du Code civil. Le constructeur est présumé responsable des dommages relevant de cette garantie, sans que le maître d’ouvrage ait à démontrer une faute.",
        "Deux critères déclenchent la garantie : l’atteinte à la solidité de l’ouvrage, ou l’impropriété à sa destination. Le second est souvent le plus large : une infiltration, un chauffage insuffisant ou un sol inutilisable suffisent, sans qu’aucune structure ne soit menacée.",
      ],
      bullets: [
        "responsabilité de plein droit, sans preuve de faute",
        "durée de dix ans à compter de la réception",
        "s’applique aux ouvrages et à certains éléments d’équipement",
        "assurance obligatoire adossée à cette responsabilité",
      ],
    },
    {
      id: "qui-est-concerne",
      title: "Qui est concerné par l’obligation d’assurance ?",
      paragraphs: [
        "L’obligation pèse sur toute personne qui, en qualité de constructeur, est liée au maître d’ouvrage par un contrat de louage d’ouvrage. Cela inclut les entreprises de travaux, mais aussi les architectes, maîtres d’œuvre, bureaux d’études et contractants généraux.",
        "Le statut juridique est indifférent : micro-entrepreneur, entreprise individuelle, EURL, SARL, SAS ou société étrangère intervenant en France sont soumis à la même obligation dès lors qu’ils réalisent des travaux relevant de la responsabilité décennale.",
      ],
    },
    {
      id: "ce-qui-est-couvert",
      title: "Ce qui est couvert, ce qui ne l’est pas",
      paragraphs: [
        "La frontière se joue sur la gravité du désordre et sur sa nature. Un défaut purement esthétique n’ouvre pas droit à la garantie décennale ; il relève de la garantie de parfait achèvement la première année, puis de la responsabilité contractuelle.",
        "Les éléments d’équipement suivent une logique propre : indissociables de l’ouvrage, ils relèvent de la décennale ; dissociables, ils relèvent plutôt de la garantie de bon fonctionnement de deux ans.",
      ],
      bullets: [
        "atteinte à la solidité : fissuration structurelle, effondrement, tassement",
        "impropriété à destination : infiltration, absence de chauffage, sol inutilisable",
        "éléments d’équipement indissociables : réseaux encastrés, plancher chauffant",
        "hors décennale : défauts d’aspect, usure normale, défaut d’entretien",
      ],
    },
    {
      id: "activites-declarees",
      title: "Le point critique : les activités déclarées",
      paragraphs: [
        "Un contrat de décennale ne couvre pas « le bâtiment » mais une liste d’activités précises, reprise sur l’attestation. Un désordre survenant sur une activité absente de cette liste n’est pas garanti, même si l’entreprise paie régulièrement ses cotisations.",
        "C’est la première cause de mauvaise surprise. Un couvreur qui réalise une étanchéité, un maçon qui reprend des fondations en sous-œuvre, un électricien qui pose du photovoltaïque doivent avoir déclaré ces activités spécifiques.",
      ],
      callout: {
        tone: "warning",
        title: "Vérifiez votre attestation",
        body: "Comparez la liste des activités figurant sur votre attestation avec les prestations que vous facturez réellement. Toute différence constitue un risque non couvert.",
      },
    },
    {
      id: "attestation",
      title: "L’attestation d’assurance",
      paragraphs: [
        "L’attestation est le document que vous remettez à vos clients. Elle mentionne l’assureur, la période de validité, les activités garanties et la couverture géographique. Depuis les modèles réglementaires en vigueur, sa structure est normalisée pour faciliter les vérifications.",
        "Elle n’est pas un contrat : elle atteste de son existence à une date donnée. Un maître d’ouvrage prudent vérifie la validité de l’attestation à la date d’ouverture du chantier et non seulement à la signature du devis.",
      ],
    },
    {
      id: "prix",
      title: "Combien coûte une assurance décennale ?",
      paragraphs: [
        "La cotisation est principalement assise sur le chiffre d’affaires, puis corrigée par le métier, l’expérience, le nombre d’activités, la sinistralité et la franchise retenue. Deux entreprises au même chiffre d’affaires peuvent payer des cotisations très différentes.",
        "Nous ne publions pas de prix d’appel. Les repères tarifaires du site précisent toujours le métier, le chiffre d’affaires, l’expérience, l’historique d’assurance et la date de référence, ou restent affichés comme non renseignés.",
      ],
    },
    {
      id: "sanctions",
      title: "Que risque une entreprise non assurée ?",
      paragraphs: [
        "L’absence d’assurance obligatoire est un délit. Au-delà de la sanction pénale, le dirigeant reste personnellement exposé au coût des réparations pendant dix ans, sans plafond, ce qui met souvent en cause la survie de l’entreprise.",
        "Le client peut également refuser le paiement, demander la résolution du marché ou faire valoir l’absence d’assurance devant un tribunal.",
      ],
    },
  ],
  modules: ["quote-form-teaser", "trade-grid", "situation-grid", "how-it-works", "guides"],
  faq: [
    {
      question: "L’assurance décennale est-elle obligatoire pour tous les artisans ?",
      answer:
        "Elle est obligatoire pour tout constructeur réalisant des travaux relevant de la responsabilité décennale, quel que soit son statut. Certaines prestations sans lien avec un ouvrage échappent à ce champ, mais elles sont minoritaires dans le bâtiment.",
    },
    {
      question: "Quelle est la différence entre décennale et RC professionnelle ?",
      answer:
        "La décennale couvre les dommages graves affectant l’ouvrage pendant dix ans après réception. La RC professionnelle couvre les dommages causés aux tiers pendant l’exécution des travaux. Les deux garanties sont complémentaires et ne se remplacent pas.",
    },
    {
      question: "À partir de quand la garantie court-elle ?",
      answer:
        "Le point de départ est la réception des travaux. En revanche, l’application du contrat dépend de la date d’ouverture du chantier : un chantier ouvert avant la date d’effet n’est pas couvert.",
    },
    {
      question: "Un artisan peut-il être assuré pour une seule activité ?",
      answer:
        "Oui, et c’est fréquent au démarrage. Le contrat couvre alors précisément cette activité. Toute prestation supplémentaire doit faire l’objet d’une extension avant d’être réalisée.",
    },
    {
      question: "Faut-il une dommages-ouvrage en plus ?",
      answer:
        "L’assurance dommages-ouvrage incombe au maître d’ouvrage, pas à l’entreprise. Elle permet une indemnisation rapide sans recherche de responsabilité, avant que les recours entre intervenants soient exercés.",
    },
    {
      question: "Comment vérifier qu’une attestation est valable ?",
      answer:
        "Il faut contrôler la période de validité, le nom exact de l’entreprise, les activités déclarées et la couverture géographique, puis en cas de doute interroger directement l’assureur mentionné. Le guide dédié détaille la méthode.",
    },
  ],
  relatedPaths: [
    "/comparateur-assurance-decennale/",
    "/devis-assurance-decennale/",
    "/prix-assurance-decennale/",
    "/metiers/",
    "/situations/",
    "/guides/assurance-decennale-obligatoire/",
    "/guides/que-couvre-assurance-decennale/",
    "/guides/rc-pro-vs-decennale/",
  ],
  sources: [
    "servicePublicDecennale",
    "codeCivil1792",
    "codeCivil1792_3",
    "codeAssurancesL241_1",
    "codeAssurancesL242_1",
    "loiSpinetta",
  ],
});
