import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("PktsDivider Web Component", () => {
  const variants = ["primary", "branded"] as const;
  const themes = ["light", "dark"] as const;

  for (const theme of themes) {
    for (const variant of variants) {
      test(`${variant}-${theme}`, async ({ page }) => {
        const html = createTestHTML(
          theme,
          `<pkts-divider variant="${variant}"></pkts-divider>`,
        );
        await page.setContent(html);
        await page.waitForSelector("pkts-divider");
        await page.waitForTimeout(100);

        // Screenshot the inner <hr> element which has the actual styling
        const divider = page.locator("pkts-divider hr");
        await expect(divider).toHaveScreenshot(
          `PktsDivider-${variant}-${theme}.png`,
        );
      });
    }
  }
});
