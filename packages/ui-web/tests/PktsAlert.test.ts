import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("PktsAlert Web Component", () => {
  const variants = ['info', 'success', 'warning', 'error', 'branded'];

  for (const variant of variants) {
    test(`${variant}-light`, async ({ page }) => {
      const html = createTestHTML("light", `
        <pkts-alert variant="${variant}" title="Alert Title">
          This is an alert message.
        </pkts-alert>
      `);
      await page.setContent(html);
      await page.waitForSelector("pkts-alert");
      const alert = page.locator("pkts-alert > div").first();
      await expect(alert).toHaveScreenshot(`PktsAlert-${variant}-light.png`);
    });
  }

  test("closeable", async ({ page }) => {
    const html = createTestHTML("light", `
      <pkts-alert title="Closeable Alert" closeable>
        This alert can be closed.
      </pkts-alert>
    `);
    await page.setContent(html);
    await page.waitForSelector("pkts-alert");
    const alert = page.locator("pkts-alert > div").first();
    await expect(alert).toHaveScreenshot("PktsAlert-closeable.png");
  });
});
