import { test, expect } from "@playwright/test";
import { createCSSTestHTML } from "./test-utils";

test.describe("CSS Divider Component", () => {
  test("divider-variants-light", async ({ page }) => {
    const html = createCSSTestHTML(
      "light",
      `
      <div id="container" style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
        <hr class="pkts-divider">
        <hr class="pkts-divider pkts-branded">
      </div>
    `,
    );
    await page.setContent(html);

    // Screenshot just the container with the dividers
    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("divider-variants-light.png");
  });

  test("divider-variants-dark", async ({ page }) => {
    const html = createCSSTestHTML(
      "dark",
      `
      <div id="container" style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
        <hr class="pkts-divider">
        <hr class="pkts-divider pkts-branded">
      </div>
    `,
    );
    await page.setContent(html);

    // Screenshot just the container with the dividers
    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("divider-variants-dark.png");
  });
});
