import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("ESDivider Web Component", () => {
  const variants = ["primary", "branded"] as const;
  const themes = ["light", "dark"] as const;

  for (const theme of themes) {
    for (const variant of variants) {
      test(`${variant}-${theme}`, async ({ page }) => {
        const html = createTestHTML(
          theme,
          `<es-divider variant="${variant}"></es-divider>`,
        );
        await page.setContent(html);
        await page.waitForSelector("es-divider");
        await page.waitForTimeout(100);

        // Screenshot the inner <hr> element which has the actual styling
        const divider = page.locator("es-divider hr");
        await expect(divider).toHaveScreenshot(
          `ESDivider-${variant}-${theme}.png`,
        );
      });
    }
  }
});
