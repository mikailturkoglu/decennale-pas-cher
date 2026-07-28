import { defineLanding } from "@/content/_factories";

export const artisan = defineLanding({
  slug: "assurance-decennale-artisan",
  name: "Artisan du bâtiment",
  status: "published",
  priority: "P0",
  seo: {
    title: "Assurance décennale artisan du bâtiment : garanties et devis",
    description:
      "Artisan du bâtiment seul ou avec un salarié : comprenez vos obligations, les garanties utiles à votre activité et demandez des propositions adaptées à votre métier.",
    primaryKeyword: "assurance décennale artisan",
    secondaryKeywords: [
      "garantie décennale artisan bâtiment",
      "décennale artisan seul",
      "assurance artisan BTP",
      "décennale artisan multi-activités",
      "attestation décennale artisan",
    ],
  },
  h1: "Assurance décennale de l’artisan du bâtiment",
  heroTitle: "Assurance décennale pour artisans du bâtiment",
  heroText:
    "Travailler seul ou à deux ne change rien à l’obligation d’assurance, mais change la façon de constituer son dossier. Cette page traite les points spécifiques aux artisans : polyvalence, chiffre d’affaires modeste, trésorerie et gestion des chantiers.",
  shortAnswer:
    "L’artisan du bâtiment est soumis à la même obligation d’assurance décennale qu’une entreprise de plusieurs salariés. Sa difficulté principale est différente : sa polyvalence l’amène souvent à réaliser des travaux qui ne figurent pas sur son attestation. Le second enjeu est la trésorerie, car un impayé de cotisation entraîne une suspension de garantie puis une résiliation, avec des conséquences durables.",
  summaryBullets: [
    "L’obligation est identique quelle que soit la taille de l’entreprise.",
    "La polyvalence est le principal risque de non-couverture.",
    "Le mode de paiement de la cotisation est un choix stratégique.",
    "Les mentions d’assurance sont obligatoires sur les devis et factures.",
  ],
  sections: [
    {
      id: "polyvalence",
      title: "La polyvalence, principal risque de l’artisan",
      paragraphs: [
        "Un artisan accepte rarement de refuser un chantier. En pratique, il enchaîne des prestations connexes : un plaquiste qui peint, un carreleur qui fait une chape, un plombier qui pose un chauffe-eau puis une pompe à chaleur.",
        "Chacune de ces prestations correspond à une activité dans la nomenclature utilisée par les assureurs. Celles qui ne figurent pas sur l’attestation ne sont pas garanties, quelle que soit leur importance dans le chiffre d’affaires.",
      ],
      bullets: [
        "listez toutes les prestations que vous facturez sur une année",
        "identifiez celles qui n’apparaissent pas sur votre attestation",
        "demandez une extension avant d’accepter un chantier hors périmètre",
        "conservez la trace écrite de chaque extension obtenue",
      ],
    },
    {
      id: "tresorerie",
      title: "Cotisation et trésorerie",
      paragraphs: [
        "Pour un artisan seul, la cotisation de décennale représente une charge fixe significative. Le choix entre paiement annuel et mensuel n’est donc pas neutre.",
        "Le paiement mensuel lisse la charge et réduit le risque d’impayé. Or un impayé déclenche une procédure lourde : mise en demeure, suspension de garantie trente jours plus tard, puis résiliation. Les chantiers ouverts pendant la suspension restent définitivement sans couverture.",
      ],
    },
    {
      id: "garanties-utiles",
      title: "Les garanties réellement utiles à un artisan",
      paragraphs: [
        "Au-delà de la décennale obligatoire, certaines garanties correspondent à des risques quotidiens de l’artisan, en particulier en rénovation et en site occupé.",
      ],
      bullets: [
        "responsabilité civile professionnelle, pour les dommages causés pendant les travaux",
        "dommages aux existants, indispensable en rénovation",
        "garantie des travaux avant réception",
        "protection juridique, utile face à un litige client",
        "garantie du matériel et de l’outillage, souvent négligée",
      ],
    },
    {
      id: "mentions",
      title: "Obligations d’information envers vos clients",
      paragraphs: [
        "Vos devis et factures doivent mentionner l’assurance souscrite au titre de votre activité, les coordonnées de l’assureur ou du garant et la couverture géographique du contrat.",
        "Remettre spontanément votre attestation avant l’ouverture du chantier est aussi un argument commercial : c’est l’un des premiers documents qu’un particulier averti ou un syndic demande.",
      ],
      callout: {
        tone: "legal",
        title: "Mentions obligatoires",
        body: "Pour les activités soumises à l’assurance construction obligatoire, ces mentions doivent figurer sur les devis et factures adressés aux clients.",
      },
    },
  ],
  modules: ["quote-form-teaser", "trade-grid", "situation-grid", "how-it-works"],
  faq: [
    {
      question: "Un artisan seul doit-il une assurance décennale ?",
      answer:
        "Oui. L’obligation dépend de la nature des travaux réalisés, pas du nombre de salariés. Un artisan seul réalisant des travaux relevant de la responsabilité décennale doit être assuré avant l’ouverture du chantier.",
    },
    {
      question: "Comment gérer les petits chantiers polyvalents ?",
      answer:
        "Il faut déclarer les activités correspondantes, même minoritaires. Une prestation ponctuelle non déclarée reste non garantie, y compris si elle ne représente que quelques centaines d’euros de chiffre d’affaires.",
    },
    {
      question: "Vaut-il mieux payer sa cotisation au mois ou à l’année ?",
      answer:
        "Le paiement mensuel lisse la charge et limite le risque d’impayé, dont les conséquences sont lourdes. Le paiement annuel peut être légèrement moins coûteux mais exige une trésorerie disponible.",
    },
    {
      question: "L’artisan doit-il aussi une RC professionnelle ?",
      answer:
        "Elle n’est pas obligatoire dans tous les cas mais elle couvre des risques quotidiens que la décennale ignore : dommages causés à un tiers ou à un bien pendant le chantier. La plupart des artisans en rénovation en ont réellement besoin.",
    },
    {
      question: "Un artisan doit-il assurer son outillage ?",
      answer:
        "Ce n’est pas une obligation légale, mais le vol d’outillage dans un véhicule est un sinistre fréquent qui peut interrompre l’activité. Cette garantie est distincte de la décennale.",
    },
    {
      question: "Que faire en cas de baisse d’activité ?",
      answer:
        "Signalez la baisse de chiffre d’affaires à votre assureur : la cotisation peut être ajustée. Ne cessez jamais de payer sans avoir obtenu un accord écrit, sous peine de suspension de garantie.",
    },
  ],
  relatedPaths: [
    "/assurance-decennale-entreprise-btp/",
    "/decennale-auto-entrepreneur/",
    "/prix-assurance-decennale/",
    "/devis-assurance-decennale/",
    "/metiers/",
    "/guides/rc-pro-vs-decennale/",
    "/guides/nomenclature-activites-btp/",
  ],
  sources: [
    "servicePublicDecennale",
    "servicePublicAttestation",
    "codeAssurancesL113_3",
    "codeAssurancesL241_1",
  ],
  breadcrumbParents: [{ name: "Assurance décennale", path: "/assurance-decennale/" }],
});
