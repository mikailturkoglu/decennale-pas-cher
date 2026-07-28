import { defineGuide } from "@/content/_factories";

export const queCouvreAssuranceDecennale = defineGuide({
  slug: "que-couvre-assurance-decennale",
  title: "Que couvre la garantie décennale ?",
  category: "comprendre",
  status: "published",
  priority: "P0",
  seo: {
    title: "Que couvre la garantie décennale ? Dommages, ouvrages, équipements",
    description:
      "Solidité de l’ouvrage, impropriété à destination, éléments d’équipement : ce que couvre précisément la garantie décennale et ce qui relève d’autres garanties.",
    primaryKeyword: "que couvre une assurance décennale",
    secondaryKeywords: [
      "travaux couverts par la garantie décennale",
      "dommages couverts décennale",
      "impropriété à destination",
      "éléments d’équipement décennale",
      "garantie de bon fonctionnement",
    ],
  },
  h1: "Que couvre la garantie décennale ?",
  summary:
    "La garantie décennale couvre les dommages qui compromettent la solidité de l’ouvrage ou le rendent impropre à sa destination, pendant dix ans à compter de la réception. Elle couvre aussi les éléments d’équipement indissociables. Les désordres esthétiques, l’usure et les équipements dissociables relèvent d’autres garanties : parfait achèvement, bon fonctionnement, garantie du fabricant ou responsabilité civile professionnelle.",
  shortAnswer:
    "Deux critères déclenchent la garantie décennale : l’atteinte à la solidité de l’ouvrage, et l’impropriété à sa destination. Le second est le plus fréquent en pratique : une infiltration, un chauffage insuffisant ou un sol inutilisable suffisent, sans qu’aucune structure ne soit menacée. Un défaut purement esthétique, en revanche, n’ouvre pas droit à cette garantie.",
  summaryBullets: [
    "Atteinte à la solidité : fissuration structurelle, tassement, effondrement.",
    "Impropriété à destination : infiltration, absence de chauffage, sol inutilisable.",
    "Éléments d’équipement indissociables : réseaux encastrés, plancher chauffant.",
    "Hors décennale : esthétique, usure, défaut d’entretien, équipements dissociables.",
  ],
  sections: [
    {
      id: "solidite",
      title: "L’atteinte à la solidité de l’ouvrage",
      paragraphs: [
        "C’est le cas le plus évident : le dommage met en cause la structure ou la stabilité du bâtiment. Il n’est pas nécessaire que l’effondrement soit imminent, il suffit que la solidité soit compromise.",
      ],
      bullets: [
        "fissuration traversante et évolutive d’un mur porteur",
        "tassement différentiel de fondations",
        "fléchissement excessif d’une charpente ou d’un plancher",
        "dégradation structurelle du bois par pourriture",
        "corrosion affectant une structure métallique porteuse",
      ],
    },
    {
      id: "impropriete",
      title: "L’impropriété à destination",
      paragraphs: [
        "Ce critère est plus large et concerne la majorité des sinistres décennaux. L’ouvrage ne peut plus être utilisé normalement pour l’usage auquel il était destiné, même si sa structure est intacte.",
        "La jurisprudence retient régulièrement l’impropriété pour des infiltrations répétées, une isolation phonique insuffisante entre logements, une installation de chauffage incapable d’atteindre une température normale, ou un local non conforme à une exigence réglementaire.",
      ],
      bullets: [
        "infiltrations récurrentes par la toiture ou la façade",
        "dégât des eaux consécutif à un réseau encastré défectueux",
        "chauffage ne permettant pas d’atteindre une température normale",
        "défaut d’isolement acoustique entre deux logements",
        "non-conformité réglementaire empêchant l’usage du local",
        "sol dangereux ou impraticable",
      ],
    },
    {
      id: "equipements",
      title: "Les éléments d’équipement",
      paragraphs: [
        "Le Code civil distingue deux catégories. Les éléments d’équipement indissociables, dont le retrait ne peut se faire sans détériorer l’ouvrage, relèvent de la garantie décennale. Les éléments dissociables relèvent en principe de la garantie de bon fonctionnement de deux ans.",
        "La frontière est un enjeu majeur en lots techniques : un réseau encastré ou un plancher chauffant est indissociable, un radiateur ou un robinet est dissociable.",
      ],
      callout: {
        tone: "legal",
        title: "Référence",
        body: "Articles 1792-2 et 1792-3 du Code civil : éléments d’équipement indissociables et garantie de bon fonctionnement de deux ans.",
      },
    },
    {
      id: "hors-champ",
      title: "Ce qui ne relève pas de la décennale",
      paragraphs: [
        "Identifier ce qui sort du champ décennal est aussi utile que de savoir ce qui y entre : cela évite des déclarations inutiles et des attentes irréalistes.",
      ],
      bullets: [
        "désordres purement esthétiques : nuances de teinte, petites fissures de retrait",
        "usure normale et vieillissement des matériaux",
        "défaut d’entretien après réception",
        "dommages causés par un tiers ou par l’usager",
        "dommages immatériels seuls, sauf garantie complémentaire",
        "réserves formulées à la réception, qui relèvent du parfait achèvement",
      ],
    },
    {
      id: "autres-garanties",
      title: "Les garanties voisines à ne pas confondre",
      paragraphs: [
        "Quatre garanties se succèdent ou se complètent après la réception. Les distinguer permet d’orienter correctement une réclamation client.",
      ],
      bullets: [
        "garantie de parfait achèvement : un an, pour les réserves et les désordres signalés",
        "garantie de bon fonctionnement : deux ans, pour les équipements dissociables",
        "garantie décennale : dix ans, pour la solidité et l’impropriété à destination",
        "responsabilité civile professionnelle : dommages causés pendant les travaux",
      ],
    },
  ],
  faq: [
    {
      question: "Une fissure est-elle toujours un sinistre décennal ?",
      answer:
        "Non. Une microfissure de retrait sans conséquence relève de l’esthétique. Une fissure traversante, évolutive, laissant passer l’eau ou affectant un élément porteur relève en revanche de la garantie décennale.",
    },
    {
      question: "Un carrelage décollé est-il couvert ?",
      answer:
        "Oui si le décollement est étendu et rend le sol dangereux ou inutilisable. Quelques carreaux isolés qui sonnent creux relèvent plutôt de la garantie de parfait achèvement dans la première année.",
    },
    {
      question: "Les dommages immatériels sont-ils couverts ?",
      answer:
        "La garantie décennale obligatoire porte sur les dommages matériels à l’ouvrage. Les préjudices immatériels, comme une perte d’exploitation, nécessitent une garantie complémentaire expressément souscrite.",
    },
    {
      question: "Une pompe à chaleur est-elle couverte dix ans ?",
      answer:
        "Cela dépend de son caractère dissociable ou non et de la nature du désordre. Une installation qui ne chauffe pas le logement peut être analysée comme rendant l’ouvrage impropre à sa destination.",
    },
    {
      question: "La garantie court-elle à partir de la fin des travaux ?",
      answer:
        "Non, à partir de la réception, c’est-à-dire de l’acte par lequel le maître d’ouvrage déclare accepter l’ouvrage. C’est pourquoi le procès-verbal de réception est un document essentiel.",
    },
  ],
  primaryCommercialPath: "/assurance-decennale/",
  relatedPaths: [
    "/assurance-decennale/",
    "/devis-assurance-decennale/",
    "/guides/exclusions-assurance-decennale/",
    "/guides/rc-pro-vs-decennale/",
    "/guides/assurance-decennale-obligatoire/",
    "/metiers/",
  ],
  sources: ["servicePublicDecennale"],
  legalSources: [
    "codeCivil1792",
    "codeCivil1792_2",
    "codeCivil1792_3",
    "codeCivil1792_4_1",
    "codeAssurancesA243_1",
  ],
});
