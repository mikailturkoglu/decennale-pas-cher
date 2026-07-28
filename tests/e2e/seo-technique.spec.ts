import { expect, test } from "@playwright/test";

/**
 * SEO technique et conformité.
 *
 * Ces vérifications portent sur la réponse HTTP réelle : redirections, en-têtes,
 * robots, sitemap et rendu serveur. L'unicité et la cohérence des métadonnées de
 * chaque page sont contrôlées par `npm run audit:seo`.
 */

const ORIGIN = "https://decennalebtp.fr";

test.describe("politique d’URL", () => {
  test("redirige les variantes historiques en 308 permanent", async ({ request }) => {
    for (const [source, destination] of [
      ["/decennale-macon/", "/assurance-decennale-macon/"],
      ["/tarif-assurance-decennale/", "/prix-assurance-decennale/"],
      ["/decennale-24h/", "/attestation-decennale-rapide/"],
      ["/decennale-micro-entrepreneur/", "/decennale-auto-entrepreneur/"],
    ]) {
      const response = await request.get(source!, { maxRedirects: 0 });
      expect([301, 308], source).toContain(response.status());
      expect(response.headers()["location"], source).toContain(destination!);
    }
  });

  test("ajoute le slash final manquant", async ({ request }) => {
    const response = await request.get("/assurance-decennale-macon", { maxRedirects: 0 });
    expect([301, 308]).toContain(response.status());
    expect(response.headers()["location"]).toContain("/assurance-decennale-macon/");
  });

  test("répond 404 pour un slug absent de l’allowlist", async ({ request }) => {
    for (const path of [
      "/assurance-decennale-paris/",
      "/assurance-decennale-macon-lyon/",
      "/guides/guide-inexistant/",
      "/metiers/famille-inconnue/",
    ]) {
      const response = await request.get(path, { maxRedirects: 0 });
      expect(response.status(), path).toBe(404);
    }
  });
});

test.describe("en-têtes de sécurité", () => {
  test("sont présents sur une page publique", async ({ request }) => {
    const headers = (await request.get("/")).headers();

    expect(headers["content-security-policy"]).toContain("default-src 'self'");
    expect(headers["strict-transport-security"]).toContain("max-age=");
    expect(headers["x-content-type-options"]).toBe("nosniff");
    expect(headers["x-frame-options"]).toBe("DENY");
    expect(headers["referrer-policy"]).toBe("strict-origin-when-cross-origin");
    expect(headers["permissions-policy"]).toContain("geolocation=()");
  });
});

test.describe("robots et sitemap", () => {
  test("robots.txt autorise le site et déclare le sitemap", async ({ request }) => {
    const body = await (await request.get("/robots.txt")).text();

    expect(body).toContain("User-Agent: *");
    expect(body).toContain(`Sitemap: ${ORIGIN}/sitemap.xml`);
    expect(body).toContain("/api/");
  });

  test("le sitemap ne contient que des URL canoniques indexables", async ({ request }) => {
    const xml = await (await request.get("/sitemap.xml")).text();
    const locations = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]!);

    expect(locations.length).toBeGreaterThan(50);
    for (const location of locations) {
      expect(location.startsWith(`${ORIGIN}/`), location).toBe(true);
      expect(location.endsWith("/"), location).toBe(true);
      expect(location).not.toContain("?");
    }

    for (const excluded of [
      `${ORIGIN}/devis-assurance-decennale/merci/`,
      `${ORIGIN}/recherche/`,
      `${ORIGIN}/preview/`,
    ]) {
      expect(locations, excluded).not.toContain(excluded);
    }
  });

  test("le sitemap couvre les pages prioritaires annoncées", async ({ request }) => {
    const xml = await (await request.get("/sitemap.xml")).text();

    for (const path of [
      "/assurance-decennale/",
      "/comparateur-assurance-decennale/",
      "/devis-assurance-decennale/",
      "/prix-assurance-decennale/",
      "/assurance-decennale-pas-chere/",
      "/attestation-decennale-rapide/",
      "/assurance-decennale-macon/",
      "/assurance-decennale-couvreur/",
      "/decennale-creation-entreprise/",
      "/decennale-apres-resiliation/",
    ]) {
      expect(xml, path).toContain(`<loc>${ORIGIN}${path}</loc>`);
    }
  });
});

test.describe("rendu serveur", () => {
  test("le contenu principal d’une page métier est dans le HTML initial", async ({ request }) => {
    const html = await (await request.get("/assurance-decennale-macon/")).text();

    expect(html).toContain("Assurance décennale maçon");
    expect(html).toContain("reprise en sous-œuvre");
    expect(html).toContain('rel="canonical"');
    expect(html).toContain(`${ORIGIN}/assurance-decennale-macon/`);
    expect(html).toContain('application/ld+json');
  });

  test("les données structurées sont un JSON valide", async ({ page }) => {
    await page.goto("/assurance-decennale-macon/");

    const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
    expect(blocks.length).toBeGreaterThan(0);

    const types = blocks.flatMap((block) => {
      const parsed = JSON.parse(block) as {
        "@graph"?: { "@type"?: string }[];
        "@type"?: string;
      };
      return (parsed["@graph"] ?? [parsed]).map((node) => node["@type"]);
    });

    expect(types).toContain("BreadcrumbList");
    expect(types).toContain("FAQPage");
  });

  test("aucune erreur de console sur les pages clés", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    page.on("pageerror", (error) => errors.push(error.message));

    for (const path of [
      "/",
      "/assurance-decennale/",
      "/metiers/",
      "/assurance-decennale-macon/",
      "/situations/",
      "/guides/",
      "/devis-assurance-decennale/",
    ]) {
      await page.goto(path);
      await page.waitForLoadState("networkidle");
    }

    expect(errors).toEqual([]);
  });

  test("chaque page publique affiche une date de mise à jour", async ({ page }) => {
    for (const path of [
      "/assurance-decennale-macon/",
      "/decennale-creation-entreprise/",
      "/guides/assurance-decennale-obligatoire/",
      "/mentions-legales/",
    ]) {
      await page.goto(path);
      await expect(page.locator("time[datetime]").first(), path).toBeAttached();
    }
  });
});

test.describe("consentement", () => {
  test("aucun traceur n’est chargé avant un choix explicite", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("dialog", { name: /Cookies/i })).toBeVisible();
    expect(await page.evaluate(() => "dataLayer" in window)).toBe(false);
  });

  test("« Tout accepter » et « Tout refuser » sont présentés au même niveau", async ({ page }) => {
    await page.goto("/");

    const accept = page.getByRole("button", { name: "Tout accepter" });
    const refuse = page.getByRole("button", { name: "Tout refuser" });
    await expect(accept).toBeVisible();
    await expect(refuse).toBeVisible();

    const acceptBox = await accept.boundingBox();
    const refuseBox = await refuse.boundingBox();
    expect(Math.abs(acceptBox!.height - refuseBox!.height)).toBeLessThan(4);
  });

  test("un refus ferme le panneau sans activer la mesure", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Tout refuser" }).click();

    await expect(page.getByRole("dialog", { name: /Cookies/i })).toBeHidden();
    expect(await page.evaluate(() => "dataLayer" in window)).toBe(false);

    await page.reload();
    await expect(page.getByRole("dialog", { name: /Cookies/i })).toBeHidden();
  });

  test("une acceptation initialise la couche de mesure", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Tout accepter" }).click();

    await expect
      .poll(() => page.evaluate(() => "dataLayer" in window))
      .toBe(true);
  });

  test("le choix peut être rouvert depuis le pied de page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Tout refuser" }).click();

    // Le pied de page reste atteignable malgré la barre d'action fixe des petits écrans.
    await page.getByRole("button", { name: "Gérer les cookies" }).click();

    const panel = page.getByRole("dialog", { name: /Cookies/i });
    await expect(panel).toBeVisible();
    // Rouvert à la demande, le panneau reçoit le focus : sinon le visiteur le perdrait.
    await expect(panel).toBeFocused();
  });
});
