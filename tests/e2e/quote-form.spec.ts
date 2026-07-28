import { expect, test, type Page } from "@playwright/test";

/**
 * Tunnel de devis.
 *
 * Le parcours complet est joué avec des données de test, puis vérifié sur les
 * points sensibles : préremplissage depuis la page métier, validation par étape,
 * retour arrière, résumé avant envoi, consentements non précochés et page de
 * remerciement exclue de l'index.
 */

/** Date d'effet toujours située dans le futur, pour un dossier réaliste. */
function inTenDays(): string {
  return new Date(Date.now() + 10 * 86_400_000).toISOString().slice(0, 10);
}

/** Coche une réponse dans un groupe de boutons radio identifié par sa légende. */
function radio(page: Page, legend: RegExp, answer: string) {
  return page.getByRole("group", { name: legend }).getByLabel(answer, { exact: true }).check();
}

async function fillActivity(page: Page) {
  await page.getByLabel("Votre métier principal").selectOption("macon");
  await page
    .getByLabel("Décrivez les travaux que vous réalisez")
    .fill(
      "Murs porteurs en blocs béton, dalles béton armé, chapes, ouvertures de baies avec pose de linteau et reprise en sous-œuvre ponctuelle.",
    );
  await radio(page, /entreprise générale/i, "Non");
  await radio(page, /sous-traitance/i, "Aucune sous-traitance");
}

async function fillCompany(page: Page) {
  await radio(page, /où en est votre entreprise/i, "Déjà en activité");
  await page.getByLabel("Forme juridique").selectOption("sarl");
  await page.getByLabel("Date de création de l’entreprise").fill("2019-04-01");
  await page.getByLabel("Effectif").selectOption("1-2");
  await page.getByLabel(/Chiffre d’affaires annuel/).fill("320000");
  await page.getByLabel("Code postal du siège").fill("33000");
  await page.getByLabel("Zone d’intervention").selectOption("region");
}

async function fillExperience(page: Page) {
  await page.getByLabel("Votre expérience dans ce métier").selectOption("6-10");
  await radio(page, /salarié dans ce métier/i, "Oui");
  await radio(page, /justificatifs d’expérience/i, "Oui");
}

async function fillInsurance(page: Page) {
  await radio(page, /actuellement assuré/i, "Non");
  await page.getByLabel("Date d’effet souhaitée").fill(inTenDays());
  await page.getByLabel(/années assurées/i).selectOption("0");
  await radio(page, /interruption de garantie/i, "Non");
  await radio(page, /déjà été résilié/i, "Non");
  await page.getByLabel(/Nombre de sinistres/).selectOption("0");
}

async function fillNeeds(page: Page) {
  await page.getByLabel("Votre clientèle").selectOption("particuliers");
  await page.getByLabel("Nature de vos chantiers").selectOption("mixte");
  await radio(page, /reprise du passé/i, "Non");
  await radio(page, /RC professionnelle/i, "Oui");
}

async function fillContact(page: Page) {
  await page.getByLabel("Raison sociale").fill("Maçonnerie de démonstration");
  await page.getByLabel("Prénom").fill("Test");
  await page.getByLabel("Nom", { exact: true }).fill("Démonstration");
  await page.getByLabel("Téléphone").fill("0612345678");
  await page.getByLabel("Adresse électronique").fill("contact@example.fr");
  await radio(page, /canal de contact/i, "Téléphone");
  await page.getByLabel("Créneau de rappel souhaité").selectOption("matin");
}

test.describe("tunnel de devis", () => {
  test("prérempli le métier depuis la page métier", async ({ page }) => {
    await page.goto("/assurance-decennale-macon/");
    await page.getByRole("link", { name: /Comparer/ }).first().click();

    await expect(page).toHaveURL(/\/devis-assurance-decennale\//);
    await expect(page.getByLabel("Votre métier principal")).toHaveValue("macon");
  });

  test("affiche une étape à la fois et refuse d’avancer sur une étape incomplète", async ({
    page,
  }) => {
    await page.goto("/devis-assurance-decennale/");

    await expect(page.getByText("Étape 1 sur 6")).toBeVisible();
    await page.getByRole("button", { name: "Continuer" }).click();

    const summary = page.getByRole("alert").first();
    await expect(summary).toBeVisible();
    await expect(summary).toContainText(/corrigé/);
    await expect(page.getByText("Étape 1 sur 6")).toBeVisible();
  });

  test("relie chaque erreur à son champ", async ({ page }) => {
    await page.goto("/devis-assurance-decennale/");
    await page.getByRole("button", { name: "Continuer" }).click();

    const link = page.getByRole("alert").getByRole("link").first();
    const href = await link.getAttribute("href");
    expect(href).toBeTruthy();
    await expect(page.locator(href!)).toBeAttached();
  });

  test("permet de revenir à l’étape précédente sans perdre la saisie", async ({ page }) => {
    await page.goto("/devis-assurance-decennale/");

    await fillActivity(page);
    await page.getByRole("button", { name: "Continuer" }).click();
    await expect(page.getByText("Étape 2 sur 6")).toBeVisible();

    await page.getByRole("button", { name: /étape précédente/ }).click();
    await expect(page.getByText("Étape 1 sur 6")).toBeVisible();
    await expect(page.getByLabel("Votre métier principal")).toHaveValue("macon");
  });

  test("la recherche de métier positionne la liste déroulante", async ({ page }) => {
    await page.goto("/devis-assurance-decennale/");

    await page.getByLabel("Rechercher un métier dans la liste").fill("toiture-terrasse");
    await page.getByRole("button", { name: "Étancheur", exact: true }).click();

    await expect(page.getByLabel("Votre métier principal")).toHaveValue("etancheur");
  });

  test("n’affiche aucun consentement précoché", async ({ page }) => {
    await page.goto("/devis-assurance-decennale/");

    for (const checkbox of await page.locator('input[type="checkbox"]').all()) {
      await expect(checkbox).not.toBeChecked();
    }
  });

  test("présente un résumé puis envoie la demande", async ({ page }) => {
    await page.goto("/devis-assurance-decennale/");

    await fillActivity(page);
    await page.getByRole("button", { name: "Continuer" }).click();
    await fillCompany(page);
    await page.getByRole("button", { name: "Continuer" }).click();
    await fillExperience(page);
    await page.getByRole("button", { name: "Continuer" }).click();
    await fillInsurance(page);
    await page.getByRole("button", { name: "Continuer" }).click();
    await fillNeeds(page);
    await page.getByRole("button", { name: "Continuer" }).click();
    await fillContact(page);
    await page.getByLabel(/traitement de ma demande/i).check();
    await page.getByLabel(/transmission/i).check();
    await page.getByRole("button", { name: "Continuer" }).click();

    await expect(page.getByRole("heading", { name: "Vérifiez votre demande" })).toBeVisible();
    await expect(page.getByText("Maçon", { exact: false }).first()).toBeVisible();

    await page.getByRole("button", { name: "Envoyer ma demande" }).click();

    await expect(page).toHaveURL(/\/devis-assurance-decennale\/merci\//, { timeout: 30_000 });
    await expect(page.getByRole("heading", { level: 1 })).toContainText(/demande/i);
  });

  test("la page de remerciement est exclue de l’index", async ({ request }) => {
    const response = await request.get("/devis-assurance-decennale/merci/");
    const html = await response.text();
    expect(html).toMatch(/name="robots"[^>]*content="[^"]*noindex/);
  });

  test("le formulaire est intégralement rendu côté serveur", async ({ request }) => {
    const response = await request.get("/devis-assurance-decennale/");
    const html = await response.text();

    // Sans JavaScript, les six étapes doivent être présentes et envoyables.
    for (const name of [
      "activity.trade",
      "company.postalCode",
      "experience.experienceYears",
      "insurance.desiredStartDate",
      "needs.clientType",
      "contact.email",
    ]) {
      expect(html, name).toContain(`name="${name}"`);
    }
  });
});
