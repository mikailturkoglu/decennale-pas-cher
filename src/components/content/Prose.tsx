import { cn } from "@/lib/cn";

export function Paragraphs({
  items,
  className,
}: {
  items: readonly string[] | undefined;
  className?: string;
}) {
  if (!items || items.length === 0) return null;

  return (
    <div className={cn("rich-text", className)}>
      {items.map((paragraph) => (
        <p key={paragraph.slice(0, 60)}>{paragraph}</p>
      ))}
    </div>
  );
}

interface BulletListProps {
  items: readonly string[] | undefined;
  /** `check` pour les listes de points acquis, `disc` pour les énumérations neutres. */
  variant?: "check" | "disc";
  className?: string;
}

/**
 * Liste à puces.
 *
 * Le marqueur `check` est décoratif : il est masqué aux technologies
 * d'assistance, la sémantique restant portée par la liste elle-même.
 */
export function BulletList({ items, variant = "disc", className }: BulletListProps) {
  if (!items || items.length === 0) return null;

  if (variant === "check") {
    return (
      <ul className={cn("mt-4 space-y-2", className)}>
        {items.map((item) => (
          <li key={item.slice(0, 60)} className="flex gap-3">
            <span aria-hidden="true" className="mt-0.5 font-bold text-success">
              ✓
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className={cn("mt-4 list-disc space-y-2 pl-5", className)}>
      {items.map((item) => (
        <li key={item.slice(0, 60)}>{item}</li>
      ))}
    </ul>
  );
}
