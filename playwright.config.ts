import { defineConfig, devices } from "@playwright/test";

/**
 * Tests de bout en bout.
 *
 * Ils sont exécutés sur le build de production servi par `next start`, et non
 * sur le serveur de développement : c'est le seul moyen de vérifier le HTML
 * réellement livré, les en-têtes et les redirections.
 *
 * Le projet par défaut est mobile : le site est conçu mobile-first et la
 * majorité du trafic visé est mobile. Un projet de bureau couvre le mégamenu.
 */
const PORT = Number(process.env.E2E_PORT ?? 3100);
const baseURL = `http://127.0.0.1:${PORT}`;

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [["github"], ["list"]] : [["list"]],
  use: {
    baseURL,
    locale: "fr-FR",
    timezoneId: "Europe/Paris",
    trace: "retain-on-failure",
  },
  projects: [
    {
      name: "mobile",
      use: { ...devices["Pixel 7"] },
    },
    {
      name: "desktop",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    // Les placeholders réglementaires sont tolérés : le site de recette les affiche.
    command: `ALLOW_BLOCKING_PLACEHOLDERS=true npm run build && npx next start --port ${PORT}`,
    url: baseURL,
    // Pas de réutilisation par défaut : un serveur laissé actif servirait un
    // build obsolète. E2E_REUSE_SERVER=1 permet d'itérer sur un serveur déjà
    // lancé, à la charge du développeur de vérifier qu'il sert le bon build.
    reuseExistingServer: process.env.E2E_REUSE_SERVER === "1",
    timeout: 240_000,
  },
});
