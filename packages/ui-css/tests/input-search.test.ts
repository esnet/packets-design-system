import { test, expect } from "@playwright/test";
import { createCSSTestHTML } from "./test-utils";

test.describe("CSS InputSearch Component", () => {
  test("input-search-variants-light", async ({ page }) => {
    const html = createCSSTestHTML(
      "light",
      `
      <div id="container" style="display: flex; flex-direction: column; gap: 16px; padding: 16px; width: 400px;">
        <div class="pkts-input-text pkts-input-search">
          <input type="search" placeholder="Default search" />
        </div>

        <div class="pkts-input-text pkts-input-search pkts-branded">
          <input type="search" placeholder="Branded search" />
        </div>

        <div class="pkts-input-text pkts-input-search pkts-error">
          <input type="search" placeholder="Error search" />
        </div>

        <div class="pkts-input-text pkts-input-search pkts-disabled">
          <input type="search" placeholder="Disabled search" disabled />
        </div>
      </div>
    `,
    );
    await page.setContent(html);
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("input-search-variants-light.png");
  });

  test("input-search-variants-dark", async ({ page }) => {
    const html = createCSSTestHTML(
      "dark",
      `
      <div id="container" style="display: flex; flex-direction: column; gap: 16px; padding: 16px; width: 400px;">
        <div class="pkts-input-text pkts-input-search">
          <input type="search" placeholder="Default search" />
        </div>

        <div class="pkts-input-text pkts-input-search pkts-branded">
          <input type="search" placeholder="Branded search" />
        </div>

        <div class="pkts-input-text pkts-input-search pkts-error">
          <input type="search" placeholder="Error search" />
        </div>

        <div class="pkts-input-text pkts-input-search pkts-disabled">
          <input type="search" placeholder="Disabled search" disabled />
        </div>
      </div>
    `,
    );
    await page.setContent(html);
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("input-search-variants-dark.png");
  });
});
