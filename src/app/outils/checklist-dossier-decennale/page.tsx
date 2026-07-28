import type { Metadata } from "next";

import { ChecklistTool } from "@/components/forms/ChecklistTool";
import { InfoPageTemplate } from "@/components/templates/InfoPageTemplate";
import { checklistDossierDecennale } from "@/content/corporate";
import { checklistItems } from "@/data/document-checklist";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  seo: checklistDossierDecennale.seo,
  path: checklistDossierDecennale.path,
});

export default function ChecklistPage() {
  return (
    <InfoPageTemplate
      page={checklistDossierDecennale}
      beforeSections={
        <>
          <ChecklistTool />
          {/* Repli sans JavaScript : la liste complète reste consultable et indexable. */}
          <noscript>
            <section className="mt-8">
              <h2 className="text-2xl">Toutes les pièces possibles</h2>
              <ul className="mt-4 space-y-3">
                {checklistItems.map((item) => (
                  <li key={item.id} className="rounded-card border border-line bg-white p-4">
                    <p className="font-semibold text-navy">
                      {item.label}
                      {item.optional ? " (facultatif)" : ""}
                    </p>
                    <p className="mt-1 text-sm text-ink-600">{item.reason}</p>
                  </li>
                ))}
              </ul>
            </section>
          </noscript>
        </>
      }
    />
  );
}
