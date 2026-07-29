import nodemailer from "nodemailer";

import { setEmailSender, type EmailSender } from "@/lib/leads/dispatch";

/**
 * Adaptateurs d'envoi pour les notifications internes de leads.
 *
 * Activés par `EMAIL_PROVIDER` :
 * - `console` : log local (dev), sans envoi réseau
 * - `brevo-smtp` / `smtp` : SMTP Brevo (ou tout SMTP compatible)
 *
 * Aucun secret n'est lu hors variables d'environnement.
 */

let registered = false;

function createConsoleSender(): EmailSender {
  return async (message) => {
    console.info("email_console", {
      to: message.to,
      from: message.from,
      subject: message.subject,
    });
  };
}

function createSmtpSender(): EmailSender {
  const host = process.env.EMAIL_SMTP_HOST?.trim();
  const port = Number(process.env.EMAIL_SMTP_PORT ?? "587");
  const user = process.env.EMAIL_SMTP_USER?.trim();
  const pass = process.env.EMAIL_PROVIDER_API_KEY?.trim();

  if (!host || !user || !pass || !Number.isFinite(port)) {
    throw new Error("configuration SMTP incomplète");
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  return async (message) => {
    await transporter.sendMail({
      from: message.from,
      to: message.to,
      subject: message.subject,
      text: message.text,
    });
  };
}

/**
 * Enregistre l'adaptateur correspondant à `EMAIL_PROVIDER` (idempotent).
 * À appeler avant `dispatchLead` / notification email.
 */
export function ensureEmailSender(): void {
  if (registered) return;

  const provider = (process.env.EMAIL_PROVIDER ?? "").trim().toLowerCase();

  if (provider === "console") {
    setEmailSender(createConsoleSender());
    registered = true;
    return;
  }

  if (provider === "brevo-smtp" || provider === "smtp") {
    setEmailSender(createSmtpSender());
    registered = true;
    return;
  }

  // Fournisseur non reconnu : laisser emailSender undefined → canal inactif.
}
