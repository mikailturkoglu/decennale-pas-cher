import { defineInfoPage } from "@/content/_factories";
import { NOTICES } from "@/data/legal-notices";
import { siteConfig } from "@/data/site";

export const partenaires = defineInfoPage({
  path: "/partenaires/",
  name: "Nos partenaires",
  status: "published",
  seo: {
    title: "Nos partenaires en assurance construction | DécennaleBTP.fr",
    description:
      "À qui votre demande de devis est transmise, comment vérifier l’habilitation d’un partenaire et comment exercer vos droits sur les données transmises.",
    primaryKeyword: "partenaires assurance décennale",
    secondaryKeywords: [
      "à qui sont transmises mes données décennale",
      "courtier partenaire assurance construction",
    ],
  },
  h1: "Nos partenaires",
  intro:
    "Votre demande de devis est étudiée par un professionnel habilité. Cette page identifie les destinataires, précise la finalité de la transmission et explique comment vérifier leur immatriculation.",
  sections: [
    {
      id: "destinataires",
      title: "À qui votre demande est transmise",
      paragraphs: [
        `Liste des destinataires à jour : ${siteConfig.intermediation.partners}.`,
        "Cette liste est tenue à jour sur cette page. Elle constitue l’information de référence à laquelle renvoie le formulaire de demande de devis et la politique de confidentialité.",
      ],
      callout: {
        tone: "legal",
        title: "Consentement distinct",
        body: "La transmission de votre demande à un partenaire fait l’objet d’un consentement séparé, distinct du traitement de la demande elle-même et de toute prospection commerciale ultérieure. Aucune case n’est précochée.",
      },
    },
    {
      id: "verifier",
      title: "Vérifier l’habilitation d’un partenaire",
      paragraphs: [
        "Tout intermédiaire en assurance exerçant en France doit être immatriculé au registre unique tenu par l’ORIAS. Cette immatriculation est publique et vérifiable gratuitement à partir du nom de la société ou de son numéro.",
        "Nous vous encourageons à effectuer cette vérification avant de transmettre des documents à un interlocuteur, y compris lorsqu’il vous contacte à la suite d’une demande faite sur ce site.",
      ],
      bullets: [
        "rechercher le partenaire dans le registre ORIAS",
        "contrôler la catégorie d’immatriculation et sa validité",
        "vérifier la concordance entre la raison sociale annoncée et l’immatriculation",
        "en cas de doute, interrompre l’échange et nous le signaler",
      ],
    },
    {
      id: "role-respectif",
      title: "Le rôle de chacun",
      paragraphs: [
        NOTICES.serviceRole,
        "Le partenaire, lui, analyse votre situation, présente les garanties, établit les propositions et assume le devoir de conseil correspondant à son statut. La décision d’acceptation appartient à l’assureur.",
      ],
    },
    {
      id: "logos",
      title: "Marques et logos",
      paragraphs: [
        "Aucun logo d’assureur ou de partenaire n’est affiché sur ce site sans autorisation écrite préalable. L’absence de logo n’a donc aucune signification sur la qualité ou l’étendue d’une relation commerciale.",
      ],
    },
    {
      id: "devenir-partenaire",
      title: "Devenir partenaire",
      paragraphs: [
        `Les courtiers et assureurs spécialisés en assurance construction souhaitant recevoir des demandes qualifiées peuvent nous écrire à ${siteConfig.contact.email}. Les critères de sélection sont publiés sur la page consacrée à notre méthode.`,
      ],
    },
  ],
  relatedPaths: [
    "/notre-methode/",
    "/a-propos/",
    "/politique-confidentialite/",
    "/reclamation/",
    "/devis-assurance-decennale/",
  ],
  sources: ["orias", "acpr"],
});
