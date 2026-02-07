import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("ESAlert Web Component", () => {
  const variants = ['info', 'success', 'warning', 'error', 'branded'];

  for (const variant of variants) {
    test(`${variant}-light`, async ({ page }) => {
      const html = createTestHTML("light", `
        <es-alert variant="${variant}" title="Alert Title">
          This is an alert message.
        </es-alert>
      `);
      await page.setContent(html);
      await page.waitForSelector("es-alert");
      const alert = page.locator("es-alert > div").first();
      await expect(alert).toHaveScreenshot(`ESAlert-${variant}-light.png`);
    });
  }

  test("closeable", async ({ page }) => {
    const html = createTestHTML("light", `
      <es-alert title="Closeable Alert" closeable>
        This alert can be closed.
      </es-alert>
    `);
    await page.setContent(html);
    await page.waitForSelector("es-alert");
    const alert = page.locator("es-alert > div").first();
    await expect(alert).toHaveScreenshot("ESAlert-closeable.png");
  });
});
