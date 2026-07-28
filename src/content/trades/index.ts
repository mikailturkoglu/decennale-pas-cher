import type { TradePage } from "@/types/content";

import { carreleur } from "@/content/trades/carreleur";
import { charpentier } from "@/content/trades/charpentier";
import { chauffagiste } from "@/content/trades/chauffagiste";
import { couvreur } from "@/content/trades/couvreur";
import { electricien } from "@/content/trades/electricien";
import { etancheur } from "@/content/trades/etancheur";
import { facadier } from "@/content/trades/facadier";
import { macon } from "@/content/trades/macon";
import { menuisier } from "@/content/trades/menuisier";
import { peintre } from "@/content/trades/peintre";
import { plaquiste } from "@/content/trades/plaquiste";
import { plombier } from "@/content/trades/plombier";
import { terrassier } from "@/content/trades/terrassier";

/**
 * Collection des pages métier rédigées.
 *
 * Ajouter un métier consiste à créer un fichier dans ce dossier puis à
 * l'importer ici. Le routeur, le sitemap et le maillage interne s'appuient
 * uniquement sur cette collection.
 */
export const tradePages: readonly TradePage[] = [
  macon,
  couvreur,
  plombier,
  electricien,
  menuisier,
  terrassier,
  etancheur,
  peintre,
  carreleur,
  plaquiste,
  charpentier,
  facadier,
  chauffagiste,
];
