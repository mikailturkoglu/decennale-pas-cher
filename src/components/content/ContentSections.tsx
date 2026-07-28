import { BulletList, Paragraphs } from "@/components/content/Prose";
import { Callout } from "@/components/ui/Callout";
import type { ContentSection } from "@/types/content";

/**
 * Rend les sections d'une page.
 *
 * Les identifiants proviennent du contenu : ils servent à la fois d'ancres de
 * sommaire et de cibles de liens profonds, et ne doivent donc pas être générés
 * dynamiquement.
 */
export function ContentSections({ sections }: { sections: readonly ContentSection[] }) {
  return (
    <>
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="mt-10">
          <h2 className="text-2xl sm:text-3xl">{section.title}</h2>
          <Paragraphs items={section.paragraphs} className="mt-4" />
          <BulletList items={section.bullets} />
          {section.callout ? (
            <Callout tone={section.callout.tone} title={section.callout.title} className="mt-5">
              {section.callout.body}
            </Callout>
          ) : null}
        </section>
      ))}
    </>
  );
}
