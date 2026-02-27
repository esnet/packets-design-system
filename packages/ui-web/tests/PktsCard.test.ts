import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("PktsCard Web Component", () => {
  test("with-content-light", async ({ page }) => {
    const html = createTestHTML("light", `
      <pkts-card>
        <h3>Card Title</h3>
        <p>This is the card content.</p>
      </pkts-card>
    `);
    await page.setContent(html);
    await page.waitForSelector("pkts-card");
    const card = page.locator("pkts-card > div").first();
    await expect(card).toHaveScreenshot("PktsCard-with-content-light.png");
  });

  test("with-content-dark", async ({ page }) => {
    const html = createTestHTML("dark", `
      <pkts-card>
        <h3>Card Title</h3>
        <p>This is the card content.</p>
      </pkts-card>
    `);
    await page.setContent(html);
    await page.waitForSelector("pkts-card");
    const card = page.locator("pkts-card > div").first();
    await expect(card).toHaveScreenshot("PktsCard-with-content-dark.png");
  });
});
