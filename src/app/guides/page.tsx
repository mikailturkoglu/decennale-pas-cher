import type { Metadata } from "next";

import { CardLink } from "@/components/ui/Card";
import { InfoPageTemplate } from "@/components/templates/InfoPageTemplate";
import { guideCategories, guidesByCategory } from "@/content/guides";
import { guidesHub } from "@/content/hubs";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ seo: guidesHub.seo, path: guidesHub.path });

export default function GuidesHubPage() {
  return (
    <InfoPageTemplate
      page={guidesHub}
      width="default"
      beforeSections={
        <div className="mt-8 space-y-10">
          {guideCategories.map((category) => {
            const guides = guidesByCategory(category.slug);
            if (guides.length === 0) return null;

            return (
              <section key={category.slug} id={category.slug} aria-labelledby={`${category.slug}-titre`}>
                <h2 id={`${category.slug}-titre`} className="text-2xl">
                  {category.name}
                </h2>
                <p className="mt-1 text-ink-600">{category.description}</p>
                <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {guides.map((guide) => (
                    <li key={guide.slug}>
                      <CardLink
                        href={`/guides/${guide.slug}/`}
                        title={guide.title}
                        description={`${guide.summary.split(". ")[0]}.`}
                      />
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      }
    />
  );
}
