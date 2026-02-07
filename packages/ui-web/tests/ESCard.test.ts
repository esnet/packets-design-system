import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("ESCard Web Component", () => {
  test("with-content-light", async ({ page }) => {
    const html = createTestHTML("light", `
      <es-card>
        <h3>Card Title</h3>
        <p>This is the card content.</p>
      </es-card>
    `);
    await page.setContent(html);
    await page.waitForSelector("es-card");
    const card = page.locator("es-card > div").first();
    await expect(card).toHaveScreenshot("ESCard-with-content-light.png");
  });

  test("with-content-dark", async ({ page }) => {
    const html = createTestHTML("dark", `
      <es-card>
        <h3>Card Title</h3>
        <p>This is the card content.</p>
      </es-card>
    `);
    await page.setContent(html);
    await page.waitForSelector("es-card");
    const card = page.locator("es-card > div").first();
    await expect(card).toHaveScreenshot("ESCard-with-content-dark.png");
  });
});
