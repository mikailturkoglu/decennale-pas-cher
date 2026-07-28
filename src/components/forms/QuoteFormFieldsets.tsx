import Link from "next/link";

import {
  CheckboxField,
  MultiSelectField,
  RadioGroup,
  SelectField,
  TextareaField,
  TextField,
} from "@/components/forms/Field";
import { fieldId, type QuoteDefaults } from "@/components/forms/quote-form-fields";
import {
  callbackSlotOptions,
  claimsCountOptions,
  clientTypeOptions,
  companyStatusOptions,
  contactChannelOptions,
  experienceOptions,
  headcountOptions,
  insuredYearsOptions,
  interventionAreaOptions,
  legalFormOptions,
  subcontractingOptions,
  terminationReasonOptions,
  tradeOptionGroups,
  workNatureOptions,
  yesNoOptions,
} from "@/data/form-options";
import { NOTICES } from "@/data/legal-notices";

/**
 * Champs du tunnel de devis, une fonction par étape.
 *
 * Les champs conditionnels (motif de résiliation, détail des sinistres, part
 * sous-traitée) restent toujours visibles, avec une consigne explicite. Les
 * masquer supposerait de réagir à la saisie, donc de dépendre du JavaScript
 * pour un champ dont la validation est parfois obligatoire côté serveur.
 */

export type ErrorLookup = (name: string) => string | undefined;

interface StepProps {
  errorFor: ErrorLookup;
  defaults: QuoteDefaults;
}

/** Rassemble les propriétés communes d'un champ à partir de son nom. */
function field(name: string, errorFor: ErrorLookup) {
  const error = errorFor(name);
  return { id: fieldId(name), name, ...(error ? { error } : {}) };
}

export function ActivityFields({ errorFor, defaults }: StepProps) {
  return (
    <>
      <SelectField
        {...field("activity.trade", errorFor)}
        label="Votre métier principal"
        hint="Celui qui représente la plus grande part de votre chiffre d’affaires."
        groups={tradeOptionGroups}
        {...(defaults.trade ? { defaultValue: defaults.trade } : {})}
        required
      />

      <MultiSelectField
        {...field("activity.secondaryTrades", errorFor)}
        label="Vos activités secondaires"
        hint="Sélectionnez tous les autres travaux que vous facturez, même occasionnellement. Maintenez Ctrl (ou Cmd) pour en choisir plusieurs."
        groups={tradeOptionGroups}
      />

      <TextareaField
        {...field("activity.worksDescription", errorFor)}
        label="Décrivez les travaux que vous réalisez"
        hint="Exemple : construction de murs porteurs en blocs béton, dalles, chapes, ouvertures de baies avec reprise en sous-œuvre. Plus la description est précise, plus l’étude est rapide."
        rows={5}
        required
      />

      <RadioGroup
        {...field("activity.generalContractor", errorFor)}
        legend="Intervenez-vous comme entreprise générale ?"
        hint="Vous signez un marché global et confiez certains lots à d’autres entreprises."
        options={yesNoOptions}
        required
      />

      <RadioGroup
        {...field("activity.subcontracting", errorFor)}
        legend="Faites-vous appel à la sous-traitance ?"
        options={subcontractingOptions}
        required
      />

      <TextField
        {...field("activity.subcontractedShare", errorFor)}
        label="Part de votre chiffre d’affaires sous-traitée"
        hint="En pourcentage. À renseigner uniquement si vous sous-traitez."
        type="number"
        inputMode="numeric"
        min={0}
        max={100}
      />
    </>
  );
}

export function CompanyFields({ errorFor, defaults }: StepProps) {
  return (
    <>
      <RadioGroup
        {...field("company.companyStatus", errorFor)}
        legend="Où en est votre entreprise ?"
        options={companyStatusOptions}
        required
      />

      <SelectField
        {...field("company.legalForm", errorFor)}
        label="Forme juridique"
        options={legalFormOptions}
        required
      />

      <TextField
        {...field("company.siren", errorFor)}
        label="Numéro SIREN"
        hint="Neuf chiffres. Inutile si votre entreprise n’est pas encore immatriculée."
        inputMode="numeric"
        pattern="[0-9]{9}"
      />

      <TextField
        {...field("company.creationDate", errorFor)}
        label="Date de création de l’entreprise"
        hint="Ou date prévue d’immatriculation."
        type="date"
      />

      <SelectField
        {...field("company.headcount", errorFor)}
        label="Effectif"
        hint="Dirigeant compris."
        options={headcountOptions}
        required
      />

      <TextField
        {...field("company.annualRevenue", errorFor)}
        label="Chiffre d’affaires annuel, en euros"
        hint="Chiffre d’affaires réalisé, ou prévisionnel sur douze mois si vous démarrez. C’est la principale assiette de calcul de la cotisation."
        type="number"
        inputMode="numeric"
        min={0}
        required
      />

      <TextField
        {...field("company.postalCode", errorFor)}
        label="Code postal du siège"
        inputMode="numeric"
        pattern="[0-9]{5}"
        autoComplete="postal-code"
        {...(defaults.postalCode ? { defaultValue: defaults.postalCode } : {})}
        required
      />

      <SelectField
        {...field("company.interventionArea", errorFor)}
        label="Zone d’intervention"
        options={interventionAreaOptions}
        required
      />
    </>
  );
}

export function ExperienceFields({ errorFor }: StepProps) {
  return (
    <>
      <SelectField
        {...field("experience.experienceYears", errorFor)}
        label="Votre expérience dans ce métier"
        hint="Salariat compris : c’est l’expérience du dirigeant qui est examinée lorsque l’entreprise est jeune."
        options={experienceOptions}
        required
      />

      <RadioGroup
        {...field("experience.formerEmployee", errorFor)}
        legend="Avez-vous été salarié dans ce métier ?"
        options={yesNoOptions}
        required
      />

      <TextField
        {...field("experience.diploma", errorFor)}
        label="Diplôme ou titre professionnel"
        hint="Exemple : CAP maçon, BP couvreur, titre professionnel électricien."
      />

      <TextField
        {...field("experience.qualifications", errorFor)}
        label="Qualifications détenues"
        hint="Exemple : Qualibat 2111, RGE, Qualifelec. Ces qualifications sont prises en compte dans l’étude."
      />

      <RadioGroup
        {...field("experience.canProvideEvidence", errorFor)}
        legend="Pouvez-vous fournir des justificatifs d’expérience ?"
        hint="Certificats de travail, bulletins de salaire, attestations de fin de chantier, diplômes."
        options={yesNoOptions}
        required
      />
    </>
  );
}

export function InsuranceFields({ errorFor }: StepProps) {
  return (
    <>
      <RadioGroup
        {...field("insurance.currentlyInsured", errorFor)}
        legend="Êtes-vous actuellement assuré en décennale ?"
        options={yesNoOptions}
        required
      />

      <TextField
        {...field("insurance.currentInsurer", errorFor)}
        label="Assureur actuel"
        hint="À renseigner si vous avez un contrat en cours."
      />

      <TextField
        {...field("insurance.renewalDate", errorFor)}
        label="Date d’échéance de votre contrat"
        hint="Elle détermine la fenêtre de résiliation à respecter."
        type="date"
      />

      <TextField
        {...field("insurance.desiredStartDate", errorFor)}
        label="Date d’effet souhaitée"
        hint="La garantie doit être en place avant l’ouverture du chantier."
        type="date"
        required
      />

      <SelectField
        {...field("insurance.insuredYears", errorFor)}
        label="Nombre d’années assurées en décennale"
        options={insuredYearsOptions}
        required
      />

      <RadioGroup
        {...field("insurance.coverageGap", errorFor)}
        legend="Avez-vous connu une interruption de garantie ?"
        hint="Une période sans assurance, même courte, entre deux contrats."
        options={yesNoOptions}
        required
      />

      <RadioGroup
        {...field("insurance.terminated", errorFor)}
        legend="Un contrat a-t-il déjà été résilié ?"
        options={yesNoOptions}
        required
      />

      <SelectField
        {...field("insurance.terminationReason", errorFor)}
        label="Motif de la résiliation"
        hint="Obligatoire en cas de résiliation : le motif change entièrement l’analyse du dossier."
        options={terminationReasonOptions}
      />

      <SelectField
        {...field("insurance.claimsCount", errorFor)}
        label="Nombre de sinistres déclarés sur cinq ans"
        options={claimsCountOptions}
        required
      />

      <TextareaField
        {...field("insurance.claimsDetail", errorFor)}
        label="Nature des sinistres"
        hint="Obligatoire dès un sinistre déclaré : nature du désordre, date, ouvrage concerné, montant si vous le connaissez, mesures prises depuis."
        rows={3}
      />
    </>
  );
}

export function NeedsFields({ errorFor }: StepProps) {
  return (
    <>
      <TextField
        {...field("needs.firstProjectDate", errorFor)}
        label="Date de votre prochain chantier"
        hint="Ou date du premier chantier si vous démarrez votre activité."
        type="date"
      />

      <SelectField
        {...field("needs.clientType", errorFor)}
        label="Votre clientèle"
        options={clientTypeOptions}
        required
      />

      <SelectField
        {...field("needs.workNature", errorFor)}
        label="Nature de vos chantiers"
        hint="Les travaux sur existant et la rénovation lourde sont examinés différemment du neuf."
        options={workNatureOptions}
        required
      />

      <TextField
        {...field("needs.averageProjectAmount", errorFor)}
        label="Montant moyen d’un chantier, en euros"
        hint="Il est comparé aux plafonds de garantie proposés."
        type="number"
        inputMode="numeric"
        min={0}
      />

      <RadioGroup
        {...field("needs.needPastCoverage", errorFor)}
        legend="Avez-vous besoin d’une reprise du passé ?"
        hint="Il s’agit de couvrir des chantiers déjà ouverts avant la date d’effet du nouveau contrat. Cette garantie doit être expressément prévue par l’assureur."
        options={yesNoOptions}
        required
      />

      <RadioGroup
        {...field("needs.needRcPro", errorFor)}
        legend="Souhaitez-vous également une RC professionnelle ?"
        hint="Elle couvre les dommages causés aux tiers pendant les travaux, ce que la décennale ne fait pas."
        options={yesNoOptions}
        required
      />

      <TextareaField
        {...field("needs.otherNeeds", errorFor)}
        label="Autres besoins ou précisions"
        hint="Protection juridique, dommages aux existants, garantie avant réception, techniques particulières employées."
        rows={3}
      />
    </>
  );
}

export function ContactFields({ errorFor }: StepProps) {
  return (
    <>
      <TextField
        {...field("contact.companyName", errorFor)}
        label="Raison sociale"
        hint="Ou votre nom commercial si l’entreprise n’est pas encore immatriculée."
        autoComplete="organization"
        required
      />

      <div className="grid gap-x-4 sm:grid-cols-2">
        <TextField
          {...field("contact.firstName", errorFor)}
          label="Prénom"
          autoComplete="given-name"
          required
        />
        <TextField
          {...field("contact.lastName", errorFor)}
          label="Nom"
          autoComplete="family-name"
          required
        />
      </div>

      <TextField
        {...field("contact.phone", errorFor)}
        label="Téléphone"
        hint="Un échange téléphonique reste le moyen le plus rapide de cadrer vos activités déclarées."
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        required
      />

      <TextField
        {...field("contact.email", errorFor)}
        label="Adresse électronique"
        type="email"
        inputMode="email"
        autoComplete="email"
        required
      />

      <RadioGroup
        {...field("contact.contactChannel", errorFor)}
        legend="Canal de contact préféré"
        options={contactChannelOptions}
        required
      />

      <SelectField
        {...field("contact.callbackSlot", errorFor)}
        label="Créneau de rappel souhaité"
        options={callbackSlotOptions}
        required
      />
    </>
  );
}

/**
 * Consentements.
 *
 * Trois cases distinctes, aucune précochée : le traitement de la demande, la
 * transmission à un partenaire et la prospection commerciale future poursuivent
 * des finalités différentes et ne peuvent pas être regroupées.
 */
export function ConsentFields({ errorFor }: StepProps) {
  return (
    <fieldset className="mt-8 rounded-card border border-line bg-surface p-4 sm:p-5">
      <legend className="px-1 font-semibold text-navy">Vos consentements</legend>

      <p className="text-sm text-ink-600">{NOTICES.formPrivacy}</p>

      <CheckboxField
        {...field("contact.consentProcessing", errorFor)}
        label="J’accepte que mes informations soient utilisées pour qualifier et traiter ma demande de devis d’assurance décennale."
        required
      />

      <CheckboxField
        {...field("contact.consentPartners", errorFor)}
        label={
          <>
            J’accepte que ma demande soit transmise à un ou plusieurs professionnels partenaires
            habilités afin qu’ils l’étudient et me contactent.{" "}
            <Link href="/partenaires/" className="text-action-700 underline underline-offset-4">
              Consulter la liste des destinataires
            </Link>
            .
          </>
        }
        required
      />

      <CheckboxField
        {...field("contact.consentMarketing", errorFor)}
        label="J’accepte de recevoir des informations et offres commerciales de DécennaleBTP.fr. Ce choix est indépendant du traitement de ma demande et révocable à tout moment."
      />

      <p className="mt-4 text-sm text-ink-600">
        Le détail du responsable du traitement, des finalités, des bases juridiques, des
        destinataires, des durées de conservation et des modalités d’exercice de vos droits figure
        dans la{" "}
        <Link
          href="/politique-confidentialite/"
          className="text-action-700 underline underline-offset-4"
        >
          politique de confidentialité
        </Link>
        .
      </p>
    </fieldset>
  );
}
