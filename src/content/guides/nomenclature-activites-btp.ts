import { defineGuide } from "@/content/_factories";
import { NOTICES } from "@/data/legal-notices";

export const nomenclatureActivitesBtp = defineGuide({
  slug: "nomenclature-activites-btp",
  title: "La nomenclature des activités BTP en assurance",
  category: "metiers-et-nomenclature",
  status: "published",
  priority: "P0",
  seo: {
    title: "Nomenclature activités BTP : déclarer ses travaux à l’assureur",
    description:
      "Comprenez la nomenclature d’activités des assureurs construction, pourquoi elle diffère du code APE et comment traduire vos travaux en activités déclarées.",
    primaryKeyword: "nomenclature activités BTP assurance",
    secondaryKeywords: [
      "nomenclature activité décennale",
      "code APE et assurance décennale",
      "activités déclarées attestation",
      "traduire ses travaux en activités",
      "nomenclature France Assureurs BTP",
    ],
  },
  h1: "La nomenclature des activités BTP utilisée par les assureurs",
  summary:
    "Les assureurs construction ne raisonnent ni par métier, ni par code APE, mais par activité technique issue d’une nomenclature commune. C’est cette liste qui figure sur votre attestation et qui détermine l’étendue réelle de votre garantie. Ce guide explique la logique de cette nomenclature, les différences avec le code APE, et la méthode pour traduire vos prestations réelles en activités déclarées.",
  shortAnswer:
    "La nomenclature d’activités utilisée pour les attestations d’assurance construction découpe le bâtiment en activités techniques précises. Votre code APE, attribué par l’Insee à des fins statistiques, n’a aucune valeur pour définir votre couverture. Seules les activités figurant sur votre attestation sont garanties : la traduction de vos prestations réelles en libellés de nomenclature est donc l’étape la plus importante de la souscription.",
  summaryBullets: [
    "La nomenclature découpe le bâtiment en activités techniques, pas en métiers.",
    "Le code APE n’a aucune valeur pour définir la garantie.",
    "Seules les activités listées sur l’attestation sont couvertes.",
    "Les travaux accessoires sont admis dans des limites définies par le contrat.",
  ],
  sections: [
    {
      id: "logique",
      title: "La logique de la nomenclature",
      paragraphs: [
        "La nomenclature regroupe les activités par familles correspondant à la logique de construction : préparation du site, structure, clos et couvert, aménagements et finitions, lots techniques, conception.",
        "Chaque activité correspond à un risque technique identifié, avec sa propre sinistralité. C’est ce découpage qui explique qu’un étancheur et un peintre ne paient pas la même cotisation à chiffre d’affaires égal.",
      ],
      bullets: [
        "préparation et aménagement du site : terrassement, démolition, VRD, traitement des sols",
        "structure et gros œuvre : maçonnerie, béton armé, charpente, ossature",
        "clos et couvert : couverture, étanchéité, façade, menuiserie extérieure",
        "divisions, aménagements et finitions : plâtrerie, carrelage, peinture, menuiserie intérieure",
        "lots techniques : plomberie, chauffage, électricité, climatisation, énergies",
        "conception et maîtrise d’œuvre : architecte, maître d’œuvre, bureau d’études",
      ],
    },
    {
      id: "ape",
      title: "Pourquoi le code APE ne suffit pas",
      paragraphs: [
        "Le code APE est attribué par l’Insee à partir de la nomenclature d’activités françaises, dans un but statistique. Il décrit l’activité principale déclarée de l’entreprise, sans précision technique et sans lien avec l’assurance.",
        "Deux entreprises portant le même code APE peuvent exercer des activités très différentes en termes de risque. À l’inverse, une même entreprise peut exercer plusieurs activités de nomenclature sous un seul code APE.",
      ],
      callout: {
        tone: "warning",
        title: "Erreur fréquente",
        body: "Déclarer « conformément à mon code APE » ne protège pas. Seule la liste des activités figurant sur l’attestation détermine la garantie.",
      },
    },
    {
      id: "accessoire",
      title: "Activité principale, travaux accessoires, activité distincte",
      paragraphs: [
        "Les contrats admettent généralement des travaux accessoires réalisés dans le prolongement direct de l’activité principale, dans une limite fixée par le contrat, souvent exprimée en pourcentage du chiffre d’affaires.",
        "Trois catégories doivent être distinguées avec précision, car elles n’ont pas le même effet sur la garantie.",
      ],
      bullets: [
        "activité principale : celle qui constitue votre cœur de métier, explicitement déclarée",
        "travaux accessoires : indissociables de votre intervention principale, admis dans une limite contractuelle",
        "activité distincte : autonome et vendue comme telle, à déclarer séparément",
      ],
    },
    {
      id: "methode",
      title: "Méthode pour traduire vos travaux en activités",
      paragraphs: [
        "L’exercice consiste à partir de vos factures et non de votre intitulé commercial. C’est la seule façon d’obtenir une déclaration fidèle.",
      ],
      bullets: [
        "reprendre les factures des douze derniers mois",
        "lister chaque type de prestation facturée, même ponctuelle",
        "chiffrer la part de chiffre d’affaires de chaque prestation",
        "identifier celles qui sont vendues de façon autonome",
        "comparer cette liste avec les activités de votre attestation",
        "demander une extension pour toute prestation non couverte",
      ],
    },
    {
      id: "cas-frequents",
      title: "Cas fréquents de mauvaise déclaration",
      paragraphs: [
        "Ces situations reviennent régulièrement dans les refus de garantie et concernent des métiers courants.",
      ],
      bullets: [
        "couvreur réalisant de l’étanchéité de toiture-terrasse",
        "maçon réalisant une reprise en sous-œuvre",
        "carreleur réalisant l’étanchéité sous carrelage ou la chape",
        "plombier installant une pompe à chaleur",
        "électricien posant du photovoltaïque ou une borne de recharge",
        "peintre réalisant un enduit de façade ou une isolation par l’extérieur",
        "plaquiste réalisant une isolation par soufflage",
      ],
    },
  ],
  checklist: [
    "factures des douze derniers mois rassemblées",
    "liste des prestations facturées établie",
    "part de chiffre d’affaires par prestation calculée",
    "comparaison avec les activités de l’attestation effectuée",
    "extensions demandées par écrit pour les activités manquantes",
    "limites contractuelles des travaux accessoires vérifiées",
  ],
  faq: [
    {
      question: "Où trouver la nomenclature des activités BTP ?",
      answer:
        "France Assureurs publie une nomenclature des activités du BTP utilisée pour les attestations d’assurance des constructeurs. Le lien figure dans les sources de cette page.",
    },
    {
      question: "Mon code APE détermine-t-il ma couverture ?",
      answer:
        "Non. Le code APE est statistique. Seules les activités listées sur votre attestation d’assurance déterminent l’étendue de votre garantie.",
    },
    {
      question: "Combien d’activités peut-on déclarer ?",
      answer:
        "Il n’y a pas de limite théorique, mais chaque activité supplémentaire augmente la cotisation et doit être justifiée par une expérience réelle. Déclarer des activités que vous n’exercez pas est inutile et coûteux.",
    },
    {
      question: "Les travaux accessoires sont-ils toujours couverts ?",
      answer:
        "Ils le sont dans les limites prévues par le contrat, souvent exprimées en pourcentage du chiffre d’affaires. Au-delà, une déclaration spécifique devient nécessaire.",
    },
    {
      question: "Comment savoir si une prestation est accessoire ou distincte ?",
      answer:
        "Une prestation vendue de façon autonome, facturée séparément et pouvant exister sans votre activité principale est en principe une activité distincte. En cas de doute, faites trancher la question par écrit avant le chantier.",
    },
  ],
  primaryCommercialPath: "/metiers/",
  relatedPaths: [
    "/metiers/",
    "/assurance-decennale-entreprise-btp/",
    "/devis-assurance-decennale/",
    "/guides/attestation-assurance-decennale/",
    "/guides/exclusions-assurance-decennale/",
    "/outils/checklist-dossier-decennale/",
  ],
  sources: ["nomenclatureBtp", "insee", "servicePublicDecennale"],
  legalSources: ["codeAssurancesL241_1", "codeAssurancesA243_1"],
});

export const nomenclatureNotice = NOTICES.nomenclature;
