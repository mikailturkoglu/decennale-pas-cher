import Link from "next/link";

import { BulletList } from "@/components/content/Prose";
import { Callout } from "@/components/ui/Callout";
import { NOTICES } from "@/data/legal-notices";
import { pricingCriteria } from "@/data/service";

/**
 * Bloc tarifaire générique.
 *
 * Aucun montant n'y figure : les repères chiffrés sont publiés métier par
 * métier, avec leurs hypothèses, et uniquement lorsqu'une donnée validée existe.
 * Ce bloc explique la mécanique de tarification, ce qui reste exact en toutes
 * circonstances.
 */
export function PriceCriteria({
  title = "Combien coûte une assurance décennale ?",
}: {
  title?: string;
}) {
  return (
    <section aria-labelledby="prix-criteres" className="mt-12">
      <h2 id="prix-criteres" className="text-2xl sm:text-3xl">
        {title}
      </h2>
      <p className="mt-3 max-w-3xl">
        La cotisation est presque toujours assise sur le chiffre d’affaires, puis corrigée par le
        risque technique du métier et par votre profil. Deux entreprises réalisant le même chiffre
        d’affaires peuvent donc payer des cotisations très différentes.
      </p>
      <BulletList items={pricingCriteria} />

      <Callout tone="info" title="Pourquoi nous n’affichons pas de prix d’appel" className="mt-5">
        {NOTICES.price} Les repères publiés sur les pages métier précisent le chiffre d’affaires,
        l’expérience, l’historique d’assurance et la date de référence retenus.
      </Callout>

      <p className="mt-5">
        <Link
          href="/prix-assurance-decennale/"
          className="font-semibold text-action-700 underline underline-offset-4"
        >
          Comprendre en détail le prix d’une assurance décennale
        </Link>
      </p>
    </section>
  );
}
