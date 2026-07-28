import { NOTICES } from "@/data/legal-notices";
import { editorial } from "@/content/_factories";
import { SOURCES, type SourceKey } from "@/data/sources";
import type { EditorialMeta, FaqItem, SourceReference } from "@/types/content";
import type { SeoFields } from "@/types/seo";

/**
 * Contenu de la page d'accueil.
 *
 * Isolé du composant de route pour la même raison que les autres collections :
 * les métadonnées, la FAQ et les sources sont vérifiables sans lire de JSX, et
 * l'audit SEO peut contrôler l'unicité du title et de la description.
 */
export interface HomeContent {
  seo: SeoFields;
  eyebrow: string;
  h1: string;
  heroText: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  /** Points clés du service, sans promesse chiffrée. */
  keyPoints: string[];
  faq: FaqItem[];
  sources: SourceReference[];
  editorial: EditorialMeta;
}

const sourceKeys: SourceKey[] = [
  "servicePublicDecennale",
  "codeCivil1792",
  "codeAssurancesL241_1",
  "nomenclatureBtp",
  "orias",
];

export const homeContent: HomeContent = {
  seo: {
    title: "Comparateur assurance décennale BTP | DécennaleBTP.fr",
    description:
      "Artisans et entreprises du bâtiment : comparez des solutions d’assurance décennale selon votre métier, votre CA, votre expérience et votre situation.",
    primaryKeyword: "comparateur assurance décennale",
    secondaryKeywords: [
      "assurance décennale BTP",
      "devis assurance décennale",
      "garantie décennale artisan",
      "RC décennale bâtiment",
      "assurance décennale en ligne",
    ],
    canonicalPath: "/",
  },
  eyebrow: "Assurance décennale pour les professionnels du bâtiment",
  h1: "Comparez votre assurance décennale BTP",
  heroText:
    "Indiquez votre métier, votre chiffre d’affaires et votre situation. Votre demande est étudiée afin de vous proposer des solutions adaptées aux activités que vous exercez réellement.",
  primaryCta: { label: "Comparer les offres", href: "/devis-assurance-decennale/" },
  secondaryCta: { label: "Voir les prix par métier", href: "/prix-assurance-decennale/" },
  keyPoints: [
    "Une qualification par activité réellement facturée, et non par simple code APE.",
    "Les situations difficiles traitées explicitement : création, absence d’antécédent, résiliation, sinistre, multi-activité.",
    "Des contenus signés, sourcés et datés, métier par métier.",
    "Aucune souscription sur le site : vous choisissez librement après étude de votre dossier.",
  ],
  faq: [
    {
      question: "L’assurance décennale est-elle obligatoire ?",
      answer:
        "Oui pour tout constructeur au sens de l’article 1792-1 du Code civil, dès lors qu’il réalise des travaux de construction relevant de la garantie décennale. L’article L241-1 du Code des assurances impose d’être couvert avant l’ouverture de tout chantier. Exercer sans cette assurance expose à des sanctions pénales et engage le patrimoine du dirigeant pendant dix ans.",
    },
    {
      question: "Combien coûte une assurance décennale ?",
      answer:
        "Il n’existe pas de tarif unique. La cotisation est assise sur le chiffre d’affaires, puis corrigée par le métier, le nombre d’activités déclarées, l’expérience du dirigeant, l’historique d’assurance et la part sous-traitée. Nous publions des repères par métier avec leurs hypothèses et leur date de référence, jamais un prix d’appel.",
    },
    {
      question: "Quels documents faut-il fournir ?",
      answer:
        "Selon votre profil : justificatif d’immatriculation ou de création, pièce d’identité du dirigeant, ventilation du chiffre d’affaires par activité, relevé de sinistralité des cinq dernières années, ancienne attestation, et pour une entreprise jeune les preuves d’expérience du dirigeant (certificats de travail, diplômes, CV).",
    },
    {
      question: "Peut-on s’assurer quand l’entreprise est en création ?",
      answer:
        "Oui, et c’est même l’ordre logique : la garantie doit être en place avant le premier chantier. L’étude porte alors sur l’expérience personnelle du dirigeant plutôt que sur l’historique de l’entreprise, d’où l’importance des certificats de travail et des diplômes.",
    },
    {
      question: "Que faire après une résiliation ?",
      answer:
        "Distinguez le motif, la régularisation éventuelle et votre situation actuelle : une résiliation pour non-paiement soldée ne s’analyse pas comme une résiliation après sinistres répétés. Rassemblez la lettre de résiliation, le relevé de sinistralité et les preuves de régularisation. En cas de refus répétés, le Bureau central de tarification peut être saisi.",
    },
    {
      question: "Combien de temps faut-il pour recevoir une attestation ?",
      answer:
        "Le délai dépend de l’assureur, de la complexité du dossier et surtout de la complétude des pièces fournies. Nous ne publions aucune durée garantie : un dossier complet dès la première demande reste le seul levier réellement à votre main.",
    },
    {
      question: "DécennaleBTP.fr vend-il des contrats d’assurance ?",
      answer: NOTICES.serviceRole,
    },
  ],
  sources: sourceKeys.map((key) => SOURCES[key]),
  editorial: editorial(),
};
