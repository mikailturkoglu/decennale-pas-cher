import type { Metadata } from "next";

import { SituationGrid } from "@/components/content/modules/SituationGrid";
import { InfoPageTemplate } from "@/components/templates/InfoPageTemplate";
import { situationsHub } from "@/content/hubs";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  seo: situationsHub.seo,
  path: situationsHub.path,
});

export default function SituationsHubPage() {
  return (
    <InfoPageTemplate
      page={situationsHub}
      width="default"
      beforeSections={
        <SituationGrid
          title="Toutes les situations traitées"
          intro="Chaque page décrit ce qui est examiné, les documents attendus et les erreurs qui bloquent un dossier."
        />
      }
    />
  );
}
