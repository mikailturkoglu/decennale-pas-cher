import type { Metadata } from "next";
import Link from "next/link";

import { BulletList } from "@/components/content/Prose";
import { DocumentUpload } from "@/components/forms/DocumentUpload";
import { PageShell } from "@/components/templates/PageShell";
import { Callout } from "@/components/ui/Callout";
import { PlaceholderValue } from "@/components/ui/PlaceholderValue";
import { siteConfig } from "@/data/site";
import { buildNoindexMetadata } from "@/lib/seo";

const PATH = "/devis-assurance-decennale/merci/";

/**
 * Page de confirmation.
 *
 * Explicitement en `noindex, follow` : c'est une page de fin de parcours, sans
 * valeur pour un internaute arrivant depuis un moteur. L'exclusion repose sur la
 * balise `robots`, pas sur le fichier robots.txt, afin qu'elle soit réellement
 * respectée.
 */
export const metadata: Metadata = buildNoindexMetadata({
  title: "Demande envoyée | DécennaleBTP.fr",
  description:
    "Votre demande de devis d’assurance décennale a été enregistrée. Vous pouvez maintenant déposer vos justificatifs.",
  path: PATH,
});

const REFERENCE_PATTERN = /^DBTP-\d{6}-[A-Z0-9]{6}$/;

const EXPECTED_DOCUMENTS = [
  "Kbis, ou justificatif de création si l’entreprise n’est pas encore immatriculée",
  "Attestation d’assurance décennale précédente, le cas échéant",
  "Relevé de sinistralité des cinq dernières années, délivré par votre ancien assureur",
  "CV, diplômes et certificats de travail justifiant votre expérience dans le métier",
  "Ventilation de votre chiffre d’affaires par activité",
  "Questionnaire assureur, s’il vous en a été transmis un",
];

export default async function ThanksPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const raw = Array.isArray(params.ref) ? params.ref[0] : params.ref;
  const reference = raw && REFERENCE_PATTERN.test(raw) ? raw : undefined;

  return (
    <PageShell
      breadcrumb={[
        { name: "Accueil", path: "/" },
        { name: "Demander des devis", path: "/devis-assurance-decennale/" },
        { name: "Demande envoyée" },
      ]}
      h1="Votre demande a été enregistrée"
      hideStickyCta
    >
      <section className="mt-6 rounded-card border-l-4 border-success bg-success-50 p-5">
        <p className="text-lg">
          Merci. Votre demande est enregistrée et va être qualifiée avant transmission à un
          professionnel partenaire habilité.
        </p>
        {reference ? (
          <p className="mt-3">
            Référence de votre demande :{" "}
            <strong className="font-mono text-navy">{reference}</strong>. Conservez-la : elle permet
            de retrouver votre dossier sans communiquer d’information personnelle.
          </p>
        ) : null}
      </section>

      <section className="mt-10">
        <h2 className="text-2xl sm:text-3xl">Ce qui se passe maintenant</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5">
          <li>Votre demande est relue et vos travaux traduits en activités déclarables.</li>
          <li>Elle est transmise à un ou plusieurs professionnels partenaires habilités.</li>
          <li>
            Un interlocuteur vous recontacte sur le canal et le créneau que vous avez indiqués.
          </li>
          <li>
            Vous comparez librement les propositions reçues. Aucune souscription n’a lieu sur ce
            site.
          </li>
        </ol>
        <p className="mt-4 text-ink-600">
          Délai de réponse annoncé : <PlaceholderValue value={siteConfig.contact.responseTime} />.
          Horaires de rappel : <PlaceholderValue value={siteConfig.contact.callbackHours} />.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl sm:text-3xl">Déposer vos justificatifs</h2>
        <p className="mt-3">
          Cette étape est facultative, mais c’est le principal levier pour réduire le délai d’étude :
          un dossier complet évite les allers-retours.
        </p>
        <BulletList items={EXPECTED_DOCUMENTS} />

        {reference ? (
          <DocumentUpload reference={reference} />
        ) : (
          <Callout tone="info" title="Référence de demande manquante" className="mt-5">
            L’espace de dépôt s’ouvre depuis le lien de confirmation contenant votre référence.
            Utilisez le lien reçu par courriel, ou contactez-nous en indiquant votre référence.
          </Callout>
        )}

        <Callout tone="legal" title="Conservation de vos documents" className="mt-6">
          Les pièces déposées sont conservées le temps nécessaire à l’étude de votre demande, selon
          la durée indiquée dans la{" "}
          <Link
            href="/politique-confidentialite/"
            className="text-action-700 underline underline-offset-4"
          >
            politique de confidentialité
          </Link>
          , puis supprimées.
        </Callout>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl sm:text-3xl">En attendant</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          <li>
            <Link
              href="/guides/documents-devis-assurance-decennale/"
              className="text-action-700 underline underline-offset-4"
            >
              Quels documents préparer, selon votre profil
            </Link>
          </li>
          <li>
            <Link
              href="/guides/nomenclature-activites-btp/"
              className="text-action-700 underline underline-offset-4"
            >
              Vérifier que vos activités sont correctement déclarées
            </Link>
          </li>
          <li>
            <Link
              href="/guides/comment-choisir-assurance-decennale/"
              className="text-action-700 underline underline-offset-4"
            >
              Comment comparer les propositions que vous allez recevoir
            </Link>
          </li>
          <li>
            <Link href="/contact/" className="text-action-700 underline underline-offset-4">
              Nous contacter au sujet de votre demande
            </Link>
          </li>
        </ul>
      </section>
    </PageShell>
  );
}
