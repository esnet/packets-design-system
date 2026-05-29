import { test, expect } from "@playwright/test";
import { createCSSTestHTML } from "./test-utils";

function buildDividerContent(): string {
  return `
    <div id="container" style="display: inline-flex; flex-direction: column; gap: 12px; padding: 8px; width: 320px;">
      <hr class="pkts-divider" />
      <hr class="pkts-divider pkts-branded" />
    </div>
  `;
}

test.describe("Pkts Divider Component", () => {
  test("divider-variants-light", async ({ page }) => {
    const html = createCSSTestHTML("light", buildDividerContent());
    await page.setContent(html);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("divider-variants-light.png");
  });

  test("divider-variants-dark", async ({ page }) => {
    const html = createCSSTestHTML("dark", buildDividerContent());
    await page.setContent(html);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("divider-variants-dark.png");
  });
});
