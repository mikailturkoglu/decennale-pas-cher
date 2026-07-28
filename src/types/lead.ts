export type LeadRoute =
  | "standard"
  | "creation"
  | "resiliation"
  | "high_risk_trade"
  | "manual_review"
  | "incomplete";

export interface LeadScore {
  /** Score interne, jamais affiché au prospect. */
  value: number;
  route: LeadRoute;
  positiveSignals: string[];
  reviewSignals: string[];
}

export interface LeadDispatchResult {
  channel: "crm" | "email" | "database";
  ok: boolean;
  /** Message technique, sans donnée personnelle. */
  detail?: string;
}

export interface StoredLead {
  id: string;
  reference: string;
  createdAt: string;
  score: LeadScore;
}
