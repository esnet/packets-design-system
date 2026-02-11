import { test, expect } from "@playwright/test";
import { createCSSTestHTML } from "./test-utils";

test.describe("CSS InputPassword Component", () => {
  test("input-password-variants-light", async ({ page }) => {
    const html = createCSSTestHTML(
      "light",
      `
      <div id="container" style="display: flex; flex-direction: column; gap: 16px; padding: 16px; width: 400px;">
        <div class="pkts-input-text pkts-input-password">
          <input type="password" placeholder="Default password" />
        </div>

        <div class="pkts-input-text pkts-input-password pkts-branded">
          <input type="password" placeholder="Branded password" />
        </div>

        <div class="pkts-input-text pkts-input-password pkts-error">
          <input type="password" placeholder="Error password" />
        </div>

        <div class="pkts-input-text pkts-input-password pkts-disabled">
          <input type="password" placeholder="Disabled password" disabled />
        </div>
      </div>
    `,
    );
    await page.setContent(html);
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("input-password-variants-light.png");
  });

  test("input-password-variants-dark", async ({ page }) => {
    const html = createCSSTestHTML(
      "dark",
      `
      <div id="container" style="display: flex; flex-direction: column; gap: 16px; padding: 16px; width: 400px;">
        <div class="pkts-input-text pkts-input-password">
          <input type="password" placeholder="Default password" />
        </div>

        <div class="pkts-input-text pkts-input-password pkts-branded">
          <input type="password" placeholder="Branded password" />
        </div>

        <div class="pkts-input-text pkts-input-password pkts-error">
          <input type="password" placeholder="Error password" />
        </div>

        <div class="pkts-input-text pkts-input-password pkts-disabled">
          <input type="password" placeholder="Disabled password" disabled />
        </div>
      </div>
    `,
    );
    await page.setContent(html);
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("input-password-variants-dark.png");
  });
});
