import { z } from "zod";

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
  situationOptions,
  subcontractingOptions,
  terminationReasonOptions,
  tradeOptionValues,
  valuesOf,
  workNatureOptions,
  yesNoOptions,
} from "@/data/form-options";

/**
 * Validation de la demande de devis.
 *
 * Le même schéma sert au navigateur et au serveur : la validation côté client
 * n'est qu'une commodité, le serveur revalide systématiquement l'intégralité de
 * la demande. Les valeurs autorisées sont dérivées des listes d'options de
 * l'interface, ce qui interdit toute divergence entre les deux.
 */

const enumFrom = (options: Parameters<typeof valuesOf>[0]) => z.enum(valuesOf(options));

const yesNo = enumFrom(yesNoOptions);

/** Numéro français, fixe ou mobile, avec ou sans indicatif international. */
const PHONE_PATTERN = /^(?:(?:\+|00)33\s?|0)[1-9](?:[\s.\-]?\d{2}){4}$/;

const requiredText = (label: string, min = 2, max = 120) =>
  z
    .string()
    .trim()
    .min(min, `${label} : ${min} caractères minimum.`)
    .max(max, `${label} : ${max} caractères maximum.`);

const optionalText = (max = 200) =>
  z
    .string()
    .trim()
    .max(max, `${max} caractères maximum.`)
    .optional()
    .or(z.literal(""))
    .transform((value) => (value === "" ? undefined : value));

const isoDate = z
  .string()
  .trim()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "Format attendu : JJ/MM/AAAA.")
  .optional()
  .or(z.literal(""))
  .transform((value) => (value === "" ? undefined : value));

export const activityStepSchema = z.object({
  trade: z.enum(tradeOptionValues as [string, ...string[]], {
    message: "Sélectionnez votre métier principal.",
  }),
  secondaryTrades: z.array(z.enum(tradeOptionValues as [string, ...string[]])).max(10).default([]),
  worksDescription: z
    .string()
    .trim()
    .min(20, "Décrivez vos travaux en quelques mots (20 caractères minimum).")
    .max(1500, "1500 caractères maximum."),
  generalContractor: yesNo,
  subcontracting: enumFrom(subcontractingOptions),
  subcontractedShare: z
    .number({ message: "Indiquez un pourcentage." })
    .int()
    .min(0)
    .max(100)
    .optional(),
});

export const companyStepSchema = z.object({
  companyStatus: enumFrom(companyStatusOptions),
  legalForm: enumFrom(legalFormOptions),
  siren: z
    .string()
    .trim()
    .regex(/^\d{9}$/, "Le SIREN comporte 9 chiffres.")
    .optional()
    .or(z.literal(""))
    .transform((value) => (value === "" ? undefined : value)),
  creationDate: isoDate,
  headcount: enumFrom(headcountOptions),
  annualRevenue: z
    .number({ message: "Indiquez un chiffre d’affaires, même approximatif." })
    .min(0, "Le chiffre d’affaires ne peut pas être négatif.")
    .max(100_000_000, "Contactez-nous directement pour ce niveau de chiffre d’affaires."),
  postalCode: z
    .string()
    .trim()
    .regex(/^\d{5}$/, "Le code postal comporte 5 chiffres."),
  interventionArea: enumFrom(interventionAreaOptions),
});

export const experienceStepSchema = z.object({
  experienceYears: enumFrom(experienceOptions),
  formerEmployee: yesNo,
  diploma: optionalText(),
  qualifications: optionalText(),
  canProvideEvidence: yesNo,
});

export const insuranceStepSchema = z
  .object({
    currentlyInsured: yesNo,
    currentInsurer: optionalText(120),
    renewalDate: isoDate,
    desiredStartDate: z
      .string()
      .trim()
      .regex(/^\d{4}-\d{2}-\d{2}$/, "Indiquez la date d’effet souhaitée."),
    insuredYears: enumFrom(insuredYearsOptions),
    coverageGap: yesNo,
    terminated: yesNo,
    terminationReason: z.enum(valuesOf(terminationReasonOptions)).optional(),
    claimsCount: enumFrom(claimsCountOptions),
    claimsDetail: optionalText(1000),
  })
  .superRefine((value, ctx) => {
    if (value.terminated === "oui" && !value.terminationReason) {
      ctx.addIssue({
        code: "custom",
        path: ["terminationReason"],
        message: "Précisez le motif de résiliation : il change entièrement l’analyse du dossier.",
      });
    }
    if (["1", "2", "3+"].includes(value.claimsCount) && !value.claimsDetail) {
      ctx.addIssue({
        code: "custom",
        path: ["claimsDetail"],
        message: "Décrivez brièvement le ou les sinistres (nature, date, ouvrage concerné).",
      });
    }
  });

export const needsStepSchema = z.object({
  firstProjectDate: isoDate,
  clientType: enumFrom(clientTypeOptions),
  workNature: enumFrom(workNatureOptions),
  averageProjectAmount: z.number().min(0).max(50_000_000).optional(),
  needPastCoverage: yesNo,
  needRcPro: yesNo,
  otherNeeds: optionalText(500),
});

export const contactStepSchema = z.object({
  companyName: requiredText("Raison sociale"),
  firstName: requiredText("Prénom"),
  lastName: requiredText("Nom"),
  phone: z.string().trim().regex(PHONE_PATTERN, "Indiquez un numéro de téléphone français valide."),
  email: z.email("Indiquez une adresse électronique valide."),
  contactChannel: enumFrom(contactChannelOptions),
  callbackSlot: enumFrom(callbackSlotOptions),
  consentProcessing: z.literal(true, {
    message: "Ce consentement est nécessaire pour traiter votre demande.",
  }),
  consentPartners: z.literal(true, {
    message: "Sans cet accord, votre demande ne peut pas être transmise à un professionnel.",
  }),
  consentMarketing: z.boolean().default(false),
});

/** Métadonnées techniques, jamais saisies par l'utilisateur. */
export const leadMetaSchema = z.object({
  sourcePage: z.string().trim().max(200).default("/devis-assurance-decennale/"),
  /** Situation déclarée en amont : sert au préremplissage et au routage interne. */
  situation: z.enum(valuesOf(situationOptions)).optional(),
  /** Champ leurre : toute valeur non vide révèle un robot. */
  honeypot: z.string().max(0, "Requête rejetée.").optional().default(""),
  captchaToken: z.string().trim().max(2000).optional(),
});

export const leadSchema = z.object({
  activity: activityStepSchema,
  company: companyStepSchema,
  experience: experienceStepSchema,
  insurance: insuranceStepSchema,
  needs: needsStepSchema,
  contact: contactStepSchema,
  meta: leadMetaSchema,
});

export type LeadInput = z.infer<typeof leadSchema>;
export type ActivityStep = z.infer<typeof activityStepSchema>;
export type CompanyStep = z.infer<typeof companyStepSchema>;
export type ExperienceStep = z.infer<typeof experienceStepSchema>;
export type InsuranceStep = z.infer<typeof insuranceStepSchema>;
export type NeedsStep = z.infer<typeof needsStepSchema>;
export type ContactStep = z.infer<typeof contactStepSchema>;

/** Schémas par étape, dans l'ordre du tunnel. */
export const stepSchemas = [
  activityStepSchema,
  companyStepSchema,
  experienceStepSchema,
  insuranceStepSchema,
  needsStepSchema,
  contactStepSchema,
] as const;

export interface FieldError {
  field: string;
  message: string;
}

/** Aplatit les erreurs Zod en une liste exploitable par l'interface. */
export function toFieldErrors(error: z.ZodError): FieldError[] {
  return error.issues.map((issue) => ({
    field: issue.path.join("."),
    message: issue.message,
  }));
}
