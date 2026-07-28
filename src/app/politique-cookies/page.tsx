import type { Metadata } from "next";

import { InfoPageTemplate } from "@/components/templates/InfoPageTemplate";
import { DataTable } from "@/components/ui/DataTable";
import { PlaceholderValue } from "@/components/ui/PlaceholderValue";
import { politiqueCookies } from "@/content/corporate";
import { cookieCategories, cookieRegistry } from "@/data/cookies";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  seo: politiqueCookies.seo,
  path: politiqueCookies.path,
});

const categoryName = new Map(cookieCategories.map((category) => [category.id, category.name]));

export default function PolitiqueCookiesPage() {
  return (
    <InfoPageTemplate page={politiqueCookies} hideStickyCta>
      <section aria-labelledby="tableau-cookies" className="mt-10">
        <h2 id="tableau-cookies" className="text-2xl">
          Cookies susceptibles d’être déposés
        </h2>
        <DataTable
          caption="Liste des cookies, finalité, durée de conservation et éditeur"
          headers={["Nom", "Catégorie", "Finalité", "Durée", "Éditeur"]}
          rows={cookieRegistry.map((cookie) => [
            <PlaceholderValue key="name" value={cookie.name} fallback="Nom à renseigner" />,
            categoryName.get(cookie.category) ?? cookie.category,
            cookie.purpose,
            <PlaceholderValue key="retention" value={cookie.retention} />,
            <PlaceholderValue key="editor" value={cookie.editor} />,
          ])}
          notice="Ce tableau est mis à jour à chaque ajout ou retrait d’outil. Un traceur non listé ne peut pas être déposé."
        />
      </section>
    </InfoPageTemplate>
  );
}
