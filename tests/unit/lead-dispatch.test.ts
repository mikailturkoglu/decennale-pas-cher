import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import {
  auditTrace,
  dispatchLead,
  setEmailSender,
  setLeadRepository,
  type EmailMessage,
  type LeadRecord,
} from "@/lib/leads/dispatch";
import { scoreLead } from "@/lib/lead-scoring";
import { createLeadReference } from "@/lib/security";
import { validLead } from "./fixtures/lead";

/**
 * Acheminement d'une demande.
 *
 * Règle testée en priorité : la panne d'un canal ne doit jamais faire perdre la
 * demande, et aucune donnée personnelle ne doit sortir par la notification
 * interne ni par les journaux.
 */

function record(): LeadRecord {
  return {
    reference: createLeadReference(new Date("2026-08-01T09:00:00Z")),
    createdAt: "2026-08-01T09:00:00.000Z",
    lead: validLead,
    score: scoreLead(validLead),
  };
}

const originalEnv = { ...process.env };

beforeEach(() => {
  setLeadRepository(undefined);
  setEmailSender(undefined);
  delete process.env.CRM_WEBHOOK_URL;
  delete process.env.CRM_WEBHOOK_SECRET;
  delete process.env.EMAIL_PROVIDER_API_KEY;
  delete process.env.EMAIL_FROM;
  delete process.env.LEAD_NOTIFICATION_EMAIL;
});

afterEach(() => {
  vi.restoreAllMocks();
  setLeadRepository(undefined);
  setEmailSender(undefined);
  process.env = { ...originalEnv };
});

describe("dispatchLead", () => {
  it("rend compte des trois canaux même sans configuration", async () => {
    const results = await dispatchLead(record());
    expect(results.map((result) => result.channel)).toEqual(["database", "crm", "email"]);
    for (const result of results) {
      expect(result.ok).toBe(false);
      expect(result.detail).toBeTruthy();
    }
  });

  it("persiste la demande lorsqu’un dépôt est enregistré", async () => {
    const saved: LeadRecord[] = [];
    setLeadRepository({
      save: async (entry) => {
        saved.push(entry);
      },
    });

    const results = await dispatchLead(record());
    expect(saved).toHaveLength(1);
    expect(results.find((result) => result.channel === "database")?.ok).toBe(true);
  });

  it("n’échoue pas globalement quand la persistance tombe", async () => {
    setLeadRepository({
      save: async () => {
        throw new Error("connexion refusée");
      },
    });

    const results = await dispatchLead(record());
    expect(results.find((result) => result.channel === "database")?.ok).toBe(false);
    expect(results).toHaveLength(3);
  });

  it("signe la charge utile transmise au CRM", async () => {
    process.env.CRM_WEBHOOK_URL = "https://crm.example.fr/hooks/leads";
    process.env.CRM_WEBHOOK_SECRET = "secret-de-test";

    const fetchMock = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValue(new Response(null, { status: 200 }));

    const results = await dispatchLead(record());

    expect(results.find((result) => result.channel === "crm")?.ok).toBe(true);
    const [, init] = fetchMock.mock.calls[0]!;
    const headers = init?.headers as Record<string, string>;
    expect(headers["x-dbtp-signature"]).toMatch(/^[0-9a-f]{64}$/);
    expect(JSON.parse(String(init?.body)).lead.activity.trade).toBe("macon");
  });

  it("remonte un CRM injoignable sans lever d’exception", async () => {
    process.env.CRM_WEBHOOK_URL = "https://crm.example.fr/hooks/leads";
    vi.spyOn(globalThis, "fetch").mockRejectedValue(new Error("timeout"));

    const results = await dispatchLead(record());
    expect(results.find((result) => result.channel === "crm")).toMatchObject({
      ok: false,
      detail: "CRM injoignable",
    });
  });

  it("remonte une réponse CRM en erreur", async () => {
    process.env.CRM_WEBHOOK_URL = "https://crm.example.fr/hooks/leads";
    vi.spyOn(globalThis, "fetch").mockResolvedValue(new Response(null, { status: 502 }));

    const results = await dispatchLead(record());
    expect(results.find((result) => result.channel === "crm")?.detail).toBe("réponse 502");
  });

  it("envoie une notification interne dépourvue de donnée personnelle", async () => {
    process.env.EMAIL_PROVIDER_API_KEY = "cle-de-test";
    process.env.EMAIL_FROM = "notifications@example.fr";
    process.env.LEAD_NOTIFICATION_EMAIL = "suivi@example.fr";

    const sent: EmailMessage[] = [];
    setEmailSender(async (message) => {
      sent.push(message);
    });

    const entry = record();
    const results = await dispatchLead(entry);

    expect(results.find((result) => result.channel === "email")?.ok).toBe(true);
    const message = sent[0]!;
    expect(message.subject).toContain(entry.reference);
    for (const personal of [
      validLead.contact.email,
      validLead.contact.phone,
      validLead.contact.lastName,
      validLead.contact.firstName,
      validLead.contact.companyName,
      validLead.company.siren!,
    ]) {
      expect(message.text, personal).not.toContain(personal);
    }
  });

  it("signale un envoi refusé par le fournisseur", async () => {
    process.env.EMAIL_PROVIDER_API_KEY = "cle-de-test";
    process.env.EMAIL_FROM = "notifications@example.fr";
    process.env.LEAD_NOTIFICATION_EMAIL = "suivi@example.fr";
    setEmailSender(async () => {
      throw new Error("quota dépassé");
    });

    const results = await dispatchLead(record());
    expect(results.find((result) => result.channel === "email")).toMatchObject({ ok: false });
  });
});

describe("auditTrace", () => {
  it("ne contient aucune donnée identifiante", () => {
    const entry = record();
    const trace = auditTrace(entry, [{ channel: "database", ok: true }]);
    const serialized = JSON.stringify(trace);

    for (const personal of [
      validLead.contact.email,
      validLead.contact.phone,
      validLead.contact.lastName,
      validLead.contact.companyName,
    ]) {
      expect(serialized, personal).not.toContain(personal);
    }
    expect(trace.reference).toBe(entry.reference);
    expect(trace.channels).toEqual(["database:ok"]);
  });
});
