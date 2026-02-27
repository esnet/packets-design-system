import { test, expect } from "@playwright/test";
import { createCSSTestHTML } from "./test-utils";

test.describe("CSS InputSwitch Component", () => {
  test("input-switch-variants-light", async ({ page }) => {
    const html = createCSSTestHTML(
      "light",
      `
      <div id="container" style="display: flex; flex-direction: column; gap: 16px; padding: 16px; width: 400px;">
        <div class="pkts-input-switch">
          <input type="checkbox" />
          <span class="indicator"></span>
        </div>

        <div class="pkts-input-switch pkts-checked">
          <input type="checkbox" checked />
          <span class="indicator"></span>
        </div>

        <div class="pkts-input-switch pkts-secondary">
          <input type="checkbox" />
          <span class="indicator"></span>
        </div>

        <div class="pkts-input-switch pkts-secondary pkts-checked">
          <input type="checkbox" checked />
          <span class="indicator"></span>
        </div>

        <div class="pkts-input-switch pkts-disabled">
          <input type="checkbox" disabled />
          <span class="indicator"></span>
        </div>

        <div class="pkts-input-switch pkts-disabled pkts-checked">
          <input type="checkbox" disabled checked />
          <span class="indicator"></span>
        </div>
      </div>
    `,
    );
    await page.setContent(html);
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("input-switch-variants-light.png");
  });

  test("input-switch-variants-dark", async ({ page }) => {
    const html = createCSSTestHTML(
      "dark",
      `
      <div id="container" style="display: flex; flex-direction: column; gap: 16px; padding: 16px; width: 400px;">
        <div class="pkts-input-switch">
          <input type="checkbox" />
          <span class="indicator"></span>
        </div>

        <div class="pkts-input-switch pkts-checked">
          <input type="checkbox" checked />
          <span class="indicator"></span>
        </div>

        <div class="pkts-input-switch pkts-secondary">
          <input type="checkbox" />
          <span class="indicator"></span>
        </div>

        <div class="pkts-input-switch pkts-secondary pkts-checked">
          <input type="checkbox" checked />
          <span class="indicator"></span>
        </div>

        <div class="pkts-input-switch pkts-disabled">
          <input type="checkbox" disabled />
          <span class="indicator"></span>
        </div>

        <div class="pkts-input-switch pkts-disabled pkts-checked">
          <input type="checkbox" disabled checked />
          <span class="indicator"></span>
        </div>
      </div>
    `,
    );
    await page.setContent(html);
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("input-switch-variants-dark.png");
  });
});
