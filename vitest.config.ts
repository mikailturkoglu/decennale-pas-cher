import { fileURLToPath } from "node:url";

import { defineConfig } from "vitest/config";

/**
 * Tests unitaires et d'intégration.
 *
 * Les tests portent sur la logique pure : validation, scoring, métadonnées,
 * données structurées, cohérence du registre de contenu et redirections. Le
 * parcours réel est couvert par Playwright (`tests/e2e`), exclu ici.
 */
export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    environment: "node",
    include: ["tests/unit/**/*.test.ts"],
    reporters: ["default"],
  },
});
