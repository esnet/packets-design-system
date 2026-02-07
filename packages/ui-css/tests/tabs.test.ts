import { test, expect } from "@playwright/test";
import { createCSSTestHTML } from "./test-utils";

test.describe("CSS Tabs Component", () => {
  test("tabs-light", async ({ page }) => {
    const html = createCSSTestHTML(
      "light",
      `
      <div id="container" style="padding: 16px; width: 600px;">
        <section class="es-tabs">
          <ul class="tab-list">
            <li class="es-tab es-active"><a href="#tab1">Tab 1</a></li>
            <li class="es-tab"><a href="#tab2">Tab 2</a></li>
            <li class="es-tab"><a href="#tab3">Tab 3</a></li>
          </ul>
        </section>
      </div>
    `,
    );
    await page.setContent(html);
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("tabs-light.png");
  });
});
