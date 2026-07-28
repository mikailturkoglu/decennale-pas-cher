import type { ContentPriority, TradeCategorySlug } from "@/types/content";

/**
 * Registre des métiers du BTP.
 *
 * Ce fichier est la source de vérité pour :
 * - la liste déroulante du formulaire de devis (tous les métiers acceptés en
 *   qualification, y compris ceux dont la page éditoriale n'est pas publiée) ;
 * - le hub /metiers/ et ses sous-hubs par catégorie ;
 * - la feuille de route de publication (priorité P0/P1/P2).
 *
 * Une page métier n'est publiée que si un contenu spécifique existe dans
 * `src/content/trades/`. Un test de cohérence vérifie l'alignement des deux.
 */
export interface TradeRegistryEntry {
  /** Slug complet de la page commerciale, à la racine du site. */
  slug: string;
  /** Nom affiché du métier. */
  name: string;
  /** Valeur technique transmise au formulaire (champ `trade`). */
  value: string;
  category: TradeCategorySlug;
  priority: ContentPriority;
  /** Synonymes utilisés par la recherche du sélecteur de métier. */
  synonyms?: string[];
}

function entry(
  value: string,
  name: string,
  category: TradeCategorySlug,
  priority: ContentPriority,
  synonyms?: string[],
): TradeRegistryEntry {
  return {
    slug: `assurance-decennale-${value}`,
    name,
    value,
    category,
    priority,
    ...(synonyms ? { synonyms } : {}),
  };
}

export const tradeRegistry: readonly TradeRegistryEntry[] = [
  // Préparation et aménagement du site
  entry("demolisseur", "Démolisseur", "preparation-amenagement-site", "P1", ["démolition", "curage"]),
  entry("terrassier", "Terrassier", "preparation-amenagement-site", "P0", [
    "terrassement",
    "fouilles",
    "remblais",
  ]),
  entry("forage", "Entreprise de forage", "preparation-amenagement-site", "P2", ["sondage", "puits"]),
  entry("amelioration-sols", "Amélioration des sols", "preparation-amenagement-site", "P2", [
    "injection",
    "compactage",
    "traitement de sol",
  ]),
  entry("vrd", "VRD (voirie et réseaux divers)", "preparation-amenagement-site", "P1", [
    "voirie",
    "assainissement",
    "réseaux",
  ]),
  entry("paysagiste", "Paysagiste", "preparation-amenagement-site", "P2", ["jardin", "espaces verts"]),
  entry("echafaudage", "Échafaudage", "preparation-amenagement-site", "P2", ["étaiement"]),
  entry("desamiantage", "Désamiantage", "preparation-amenagement-site", "P2", ["amiante"]),
  entry("traitement-bois", "Traitement des bois", "preparation-amenagement-site", "P2", [
    "termites",
    "charpente traitement",
  ]),
  entry("assechement-murs", "Assèchement des murs", "preparation-amenagement-site", "P2", [
    "humidité",
    "remontées capillaires",
  ]),

  // Structure et gros œuvre
  entry("fondations-speciales", "Fondations spéciales", "gros-oeuvre-structure", "P2", [
    "micropieux",
    "pieux",
    "parois",
  ]),
  entry("macon", "Maçon", "gros-oeuvre-structure", "P0", [
    "maconnerie",
    "maçonnerie",
    "gros œuvre",
    "béton armé",
  ]),
  entry("beton-precontraint", "Béton précontraint", "gros-oeuvre-structure", "P2"),
  entry("charpentier", "Charpentier", "gros-oeuvre-structure", "P0", ["charpente bois", "couverture bois"]),
  entry("ossature-bois", "Constructeur ossature bois", "gros-oeuvre-structure", "P2", ["MOB", "bois"]),
  entry("charpente-metallique", "Charpente métallique", "gros-oeuvre-structure", "P2", ["métallier structure"]),

  // Clos et couvert
  entry("couvreur", "Couvreur", "clos-couvert", "P0", ["couverture", "zinguerie", "toiture"]),
  entry("etancheur", "Étancheur", "clos-couvert", "P0", ["étanchéité", "toiture terrasse"]),
  entry("cuvelage", "Cuvelage", "clos-couvert", "P2", ["sous-sol", "étanchéité enterrée"]),
  entry("facadier", "Façadier", "clos-couvert", "P0", ["enduit", "ravalement", "façade"]),
  entry("isolation-exterieure", "Isolation thermique par l’extérieur", "clos-couvert", "P1", [
    "ITE",
    "isolation extérieure",
  ]),
  entry("bardeur", "Bardeur", "clos-couvert", "P1", ["bardage"]),
  entry("facade-rideau", "Façade rideau", "clos-couvert", "P2", ["mur rideau"]),
  entry("couverture-textile", "Couverture textile", "clos-couvert", "P2", ["membrane", "toile tendue"]),
  entry("menuisier", "Menuisier", "clos-couvert", "P0", [
    "menuiserie extérieure",
    "fenêtres",
    "PVC",
    "aluminium",
  ]),
  entry("veranda", "Véranda", "clos-couvert", "P1", ["pergola", "extension vitrée"]),

  // Divisions, aménagements et finitions
  entry("menuiserie-interieure", "Menuiserie intérieure", "amenagement-finitions", "P2", ["agencement"]),
  entry(
    "amenagement-salle-de-bains",
    "Aménagement de salle de bains",
    "amenagement-finitions",
    "P2",
    ["sanitaire", "douche"],
  ),
  entry("cuisiniste", "Cuisiniste", "amenagement-finitions", "P2", ["cuisine"]),
  entry("plaquiste", "Plaquiste", "amenagement-finitions", "P0", ["plâtrerie", "cloison", "plaque de plâtre"]),
  entry("serrurier-metallier", "Serrurier-métallier", "amenagement-finitions", "P1", [
    "métallerie",
    "garde-corps",
  ]),
  entry("vitrier", "Vitrier", "amenagement-finitions", "P1", ["miroiterie", "verre"]),
  entry("peintre", "Peintre", "amenagement-finitions", "P0", ["peinture", "ravalement léger", "décoration"]),
  entry("parqueteur", "Parqueteur", "amenagement-finitions", "P2", ["parquet", "sol souple"]),
  entry("carreleur", "Carreleur", "amenagement-finitions", "P0", ["carrelage", "faïence", "chape"]),
  entry("revetement-mural", "Revêtement mural", "amenagement-finitions", "P2", ["papier peint", "toile"]),
  entry("isolation-interieure", "Isolation thermique intérieure", "amenagement-finitions", "P1", [
    "ITI",
    "isolation combles",
  ]),
  entry("isolation-frigorifique", "Isolation frigorifique", "amenagement-finitions", "P2", ["chambre froide"]),

  // Lots techniques
  entry("plombier", "Plombier", "lots-techniques", "P0", ["plomberie", "sanitaire", "chauffage eau"]),
  entry("chauffagiste", "Chauffagiste", "lots-techniques", "P0", ["chauffage", "pompe à chaleur", "chaudière"]),
  entry("fumiste", "Fumiste", "lots-techniques", "P2", ["conduit de fumée", "poêle", "cheminée"]),
  entry("climaticien", "Climaticien", "lots-techniques", "P1", ["climatisation", "VMC", "ventilation"]),
  entry("electricien", "Électricien", "lots-techniques", "P0", ["électricité", "courants faibles"]),
  entry("ascensoriste", "Ascensoriste", "lots-techniques", "P2", ["ascenseur", "monte-charge"]),
  entry("pisciniste", "Pisciniste", "lots-techniques", "P1", ["piscine", "spa"]),
  entry("geothermie", "Géothermie", "lots-techniques", "P1", ["capteurs enterrés"]),
  entry("photovoltaique", "Photovoltaïque", "lots-techniques", "P1", ["solaire", "panneaux"]),
  entry("eolien", "Éolien", "lots-techniques", "P2", ["petit éolien"]),
  entry(
    "four-cheminee-industrielle",
    "Fours et cheminées industrielles",
    "lots-techniques",
    "P2",
  ),

  // Conception et maîtrise d'œuvre
  entry("architecte", "Architecte", "conception-maitrise-oeuvre", "P1", ["maîtrise d’œuvre conception"]),
  entry("maitre-oeuvre", "Maître d’œuvre", "conception-maitrise-oeuvre", "P1", ["MOE", "maitre d oeuvre"]),
  entry("bureau-etudes", "Bureau d’études", "conception-maitrise-oeuvre", "P1", [
    "BET",
    "structure",
    "thermique",
  ]),
  entry(
    "economiste-construction",
    "Économiste de la construction",
    "conception-maitrise-oeuvre",
    "P2",
  ),
  entry("contractant-general", "Contractant général", "conception-maitrise-oeuvre", "P2"),
  entry("opc", "OPC (ordonnancement, pilotage, coordination)", "conception-maitrise-oeuvre", "P2"),
  entry(
    "entreprise-generale-batiment",
    "Entreprise générale du bâtiment",
    "conception-maitrise-oeuvre",
    "P1",
    ["multi-activité", "tous corps d’état", "TCE"],
  ),
];

const registryByValue = new Map(tradeRegistry.map((trade) => [trade.value, trade]));
const registryBySlug = new Map(tradeRegistry.map((trade) => [trade.slug, trade]));

export function findTradeByValue(value: string): TradeRegistryEntry | undefined {
  return registryByValue.get(value);
}

export function findTradeBySlug(slug: string): TradeRegistryEntry | undefined {
  return registryBySlug.get(slug);
}

export function tradesByCategory(category: TradeCategorySlug): TradeRegistryEntry[] {
  return tradeRegistry.filter((trade) => trade.category === category);
}

/** Valeurs acceptées par le formulaire pour le champ métier. */
export const tradeValues: readonly string[] = tradeRegistry.map((trade) => trade.value);
