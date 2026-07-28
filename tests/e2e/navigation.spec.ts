import { expect, test } from "@playwright/test";

/**
 * Navigation et clarté.
 *
 * Ces parcours vérifient qu'un visiteur atteint sa page métier depuis
 * l'accueil, au clavier comme au toucher, et que le fil d'Ariane le resitue.
 */

test.describe("navigation principale", () => {
  test("l’accueil expose les entrées de navigation et le CTA principal", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Comparer les offres" }).first(),
    ).toBeVisible();
  });

  test("le mégamenu de bureau s’ouvre, se ferme avec Échap et mène au métier", async ({
    page,
  }, testInfo) => {
    test.skip(testInfo.project.name !== "desktop", "Mégamenu réservé aux écrans larges.");

    await page.goto("/");

    const trigger = page.getByRole("group").filter({ hasText: "Métiers" }).first();
    const summary = page.locator("summary", { hasText: "Métiers" }).first();
    await summary.click();

    const maconLink = page.getByRole("link", { name: "Maçon", exact: true });
    await expect(maconLink).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(maconLink).toBeHidden();
    await expect(summary).toBeFocused();

    await summary.click();
    await expect(trigger).toBeVisible();
    await maconLink.click();
    await expect(page).toHaveURL(/\/assurance-decennale-macon\/$/);
  });

  test("le menu mobile s’ouvre, se replie et mène au métier", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "mobile", "Menu réservé aux petits écrans.");

    await page.goto("/");

    const toggle = page.getByRole("button", { name: "Menu" });
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-expanded", "true");

    await page.locator("summary", { hasText: "Métiers" }).first().click();
    await page.getByRole("link", { name: "Maçon", exact: true }).click();

    await expect(page).toHaveURL(/\/assurance-decennale-macon\/$/);
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  test("le menu mobile se ferme avec Échap", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "mobile", "Menu réservé aux petits écrans.");

    await page.goto("/");
    const toggle = page.getByRole("button", { name: "Menu" });
    await toggle.click();
    await page.keyboard.press("Escape");

    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await expect(toggle).toBeFocused();
  });

  test("le fil d’Ariane resitue une page métier dans son silo", async ({ page }) => {
    await page.goto("/assurance-decennale-macon/");

    const breadcrumb = page.getByRole("navigation", { name: /ariane/i });
    await expect(breadcrumb.getByRole("link", { name: "Accueil" })).toBeVisible();
    await expect(breadcrumb.getByRole("link", { name: "Métiers" })).toBeVisible();
    await expect(breadcrumb.getByRole("link", { name: "Gros œuvre" })).toBeVisible();

    await breadcrumb.getByRole("link", { name: "Gros œuvre" }).click();
    await expect(page).toHaveURL(/\/metiers\/gros-oeuvre-structure\/$/);
  });

  test("le lien d’évitement est le premier élément tabulable", async ({ page }) => {
    await page.goto("/");

    // La tabulation part du document lui-même : le lien d'évitement ne sert que
    // s'il précède tout le reste de l'en-tête.
    await page.locator("body").press("Tab");

    const skipLink = page.getByRole("link", { name: /aller au contenu/i });
    await expect(skipLink).toBeFocused();
    // Masqué visuellement, il doit redevenir visible dès qu'il reçoit le focus.
    await expect(skipLink).toBeVisible();

    await skipLink.press("Enter");
    await expect(page).toHaveURL(/#contenu$/);
    await expect(page.locator("#contenu")).toBeAttached();
  });

  test("le plan du site couvre les grands silos", async ({ page }) => {
    await page.goto("/plan-du-site/");

    for (const path of [
      "/assurance-decennale/",
      "/metiers/",
      "/situations/",
      "/guides/",
      "/mentions-legales/",
    ]) {
      await expect(page.locator(`a[href="${path}"]`).first()).toBeAttached();
    }
  });
});

test.describe("recherche de métier", () => {
  test("filtre la liste du hub à partir d’un synonyme", async ({ page }) => {
    await page.goto("/metiers/");

    const search = page.getByLabel("Rechercher une activité");
    await search.fill("toiture-terrasse");

    await expect(page.getByRole("link", { name: "Étancheur", exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Peintre", exact: true })).toBeHidden();
  });

  test("annonce le nombre de résultats", async ({ page }) => {
    await page.goto("/metiers/");

    await page.getByLabel("Rechercher une activité").fill("maçonnerie");
    await expect(page.getByRole("status").filter({ hasText: /métier/ }).first()).toContainText(
      /correspond/,
    );
  });

  test("guide vers le formulaire quand aucun métier ne correspond", async ({ page }) => {
    await page.goto("/metiers/");

    await page.getByLabel("Rechercher une activité").fill("boulanger");
    await expect(page.getByText("Aucun métier ne correspond à cette recherche.")).toBeVisible();
  });

  test("liste tous les métiers du registre dans le HTML servi", async ({ request }) => {
    const response = await request.get("/metiers/");
    const html = await response.text();

    // Un métier sans page dédiée doit tout de même être visible et orienté.
    expect(html).toContain("/devis-assurance-decennale/?trade=fumiste");
    expect(html).toContain("Fumiste");
  });
});

test.describe("accordéons", () => {
  test("la FAQ se déplie et se replie", async ({ page }) => {
    await page.goto("/assurance-decennale-macon/");

    const details = page.locator("#faq details").first();
    const question = details.locator("summary");

    // La réponse est dans le HTML servi, mais replié à l'arrivée.
    await expect(details).not.toHaveAttribute("open", /.*/);
    await question.click();
    await expect(details).toHaveAttribute("open", /.*/);
    await question.click();
    await expect(details).not.toHaveAttribute("open", /.*/);
  });
});
