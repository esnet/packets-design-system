import { test, expect } from "@playwright/test";
import { createCSSTestHTML } from "./test-utils";

test.describe("CSS Card Component", () => {
  test("card-light", async ({ page }) => {
    const html = createCSSTestHTML(
      "light",
      `
      <div id="container" style="padding: 16px; width: 400px;">
        <div class="pkts-card">
          <h3>Card Title</h3>
          <p>This is the card content with some text.</p>
        </div>
      </div>
    `,
    );
    await page.setContent(html);
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("card-light.png");
  });

  test("card-dark", async ({ page }) => {
    const html = createCSSTestHTML(
      "dark",
      `
      <div id="container" style="padding: 16px; width: 400px;">
        <div class="pkts-card">
          <h3>Card Title</h3>
          <p>This is the card content with some text.</p>
        </div>
      </div>
    `,
    );
    await page.setContent(html);
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("card-dark.png");
  });
});
