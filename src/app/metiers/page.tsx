import type { Metadata } from "next";

import { TradeCategoryList, TradeGrid } from "@/components/content/modules/TradeGrid";
import { TradeFinderSection } from "@/components/navigation/TradeFinderSection";
import { InfoPageTemplate } from "@/components/templates/InfoPageTemplate";
import { metiersHub } from "@/content/hubs";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ seo: metiersHub.seo, path: metiersHub.path });

export default function MetiersHubPage() {
  return (
    <InfoPageTemplate
      page={metiersHub}
      width="default"
      beforeSections={
        <section aria-labelledby="familles-metiers" className="mt-8">
          <h2 id="familles-metiers" className="text-2xl">
            Les six familles de métiers du BTP
          </h2>
          <TradeCategoryList />
        </section>
      }
    >
      <TradeGrid
        title="Toutes les pages métier publiées"
        intro="Chaque page détaille les travaux à déclarer, les exclusions fréquentes, des scénarios de sinistre réels et les critères qui font varier la cotisation."
      />
      <TradeFinderSection />
    </InfoPageTemplate>
  );
}
