import { DataTable } from "@/components/ui/DataTable";
import { NOTICES } from "@/data/legal-notices";
import type { WorkClassificationRow } from "@/types/content";

/**
 * Tableau des travaux d'un métier.
 *
 * Présenté comme un repère pédagogique : la mention rappelle que la
 * nomenclature et le contrat de l'assureur prévalent sur cette lecture.
 */
export function WorkTable({
  rows,
  tradeName,
}: {
  rows: readonly WorkClassificationRow[];
  tradeName: string;
}) {
  if (rows.length === 0) return null;

  return (
    <DataTable
      caption={`Travaux et déclaration d’activité : repères pour un ${tradeName.toLowerCase()}`}
      headers={[
        "Type de travaux",
        "Généralement intégré à l’activité",
        "Déclaration spécifique",
        "Point de vigilance",
      ]}
      rows={rows.map((row) => [
        <span key="work" className="font-semibold text-navy">
          {row.work}
        </span>,
        row.usuallyIncluded,
        row.separateDeclaration,
        row.watchOut,
      ])}
      notice={NOTICES.nomenclature}
    />
  );
}
