import { DataTable } from "@/components/ui/DataTable";
import { PlaceholderValue } from "@/components/ui/PlaceholderValue";
import { formatPremiumRange, formatPriceSource } from "@/lib/format";
import type { PriceBand } from "@/types/content";

interface PriceBandsProps {
  bands: readonly PriceBand[];
  caption: string;
}

/**
 * Repères tarifaires par profil.
 *
 * Aucun prix n'est affiché sans montant renseigné : la cellule signale alors
 * explicitement l'absence de donnée validée. Chaque tableau porte la mention
 * rappelant que seul un devis engage l'assureur, ainsi que la source lorsqu'elle
 * existe.
 */
export function PriceBands({ bands, caption }: PriceBandsProps) {
  if (bands.length === 0) return null;

  const sources = [...new Set(bands.map(formatPriceSource).filter(Boolean))].join(" ; ");
  const disclaimer = bands[0]?.disclaimer ?? "";

  return (
    <DataTable
      caption={caption}
      headers={["Profil", "Chiffre d’affaires", "Expérience", "Antécédent d’assurance", "Repère annuel"]}
      rows={bands.map((band) => {
        const range = formatPremiumRange(band);
        return [
          <span key="label" className="font-semibold text-navy">
            {band.label}
          </span>,
          <PlaceholderValue key="revenue" value={band.annualRevenue} />,
          <PlaceholderValue key="experience" value={band.experience} />,
          <PlaceholderValue key="history" value={band.insuranceHistory} />,
          range ?? <PlaceholderValue key="range" value={undefined} fallback="Donnée à valider" />,
        ];
      })}
      notice={[disclaimer, sources].filter(Boolean).join(" ")}
    />
  );
}
