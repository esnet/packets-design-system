import { test, expect } from "@playwright/test";
import { createCSSTestHTML } from "./test-utils";

test.describe("CSS Chip Component", () => {
  test("chip-primary-light", async ({ page }) => {
    const html = createCSSTestHTML(
      "light",
      `
      <div id="container" style="padding: 20px;">
        <button class="pkts-chip">Primary Chip</button>
      </div>
      `
    );
    await page.setContent(html);
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("chip-primary-light.png");
  });

  test("chip-primary-dark", async ({ page }) => {
    const html = createCSSTestHTML(
      "dark",
      `
      <div id="container" style="padding: 20px;">
        <button class="pkts-chip">Primary Chip</button>
      </div>
      `
    );
    await page.setContent(html);
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("chip-primary-dark.png");
  });

  test("chip-outline-light", async ({ page }) => {
    const html = createCSSTestHTML(
      "light",
      `
      <div id="container" style="padding: 20px;">
        <button class="pkts-chip pkts-outline">Outline Chip</button>
      </div>
      `
    );
    await page.setContent(html);
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("chip-outline-light.png");
  });

  test("chip-outline-dark", async ({ page }) => {
    const html = createCSSTestHTML(
      "dark",
      `
      <div id="container" style="padding: 20px;">
        <button class="pkts-chip pkts-outline">Outline Chip</button>
      </div>
      `
    );
    await page.setContent(html);
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("chip-outline-dark.png");
  });

  test("chip-rounded-light", async ({ page }) => {
    const html = createCSSTestHTML(
      "light",
      `
      <div id="container" style="padding: 20px;">
        <button class="pkts-chip pkts-rounded">Rounded Chip</button>
      </div>
      `
    );
    await page.setContent(html);
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("chip-rounded-light.png");
  });

  test("chip-rounded-dark", async ({ page }) => {
    const html = createCSSTestHTML(
      "dark",
      `
      <div id="container" style="padding: 20px;">
        <button class="pkts-chip pkts-rounded">Rounded Chip</button>
      </div>
      `
    );
    await page.setContent(html);
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("chip-rounded-dark.png");
  });

  test("chip-disabled-light", async ({ page }) => {
    const html = createCSSTestHTML(
      "light",
      `
      <div id="container" style="padding: 20px;">
        <button class="pkts-chip pkts-disabled" disabled>Disabled Chip</button>
      </div>
      `
    );
    await page.setContent(html);
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("chip-disabled-light.png");
  });

  test("chip-disabled-dark", async ({ page }) => {
    const html = createCSSTestHTML(
      "dark",
      `
      <div id="container" style="padding: 20px;">
        <button class="pkts-chip pkts-disabled" disabled>Disabled Chip</button>
      </div>
      `
    );
    await page.setContent(html);
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("chip-disabled-dark.png");
  });

  test("chip-hover-light", async ({ page }) => {
    const html = createCSSTestHTML(
      "light",
      `
      <div id="container" style="padding: 20px;">
        <button class="pkts-chip">Hover Chip</button>
      </div>
      `
    );
    await page.setContent(html);
    await page.waitForTimeout(100);

    await page.locator("button.pkts-chip").hover();

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("chip-hover-light.png");
  });

  test("chip-hover-dark", async ({ page }) => {
    const html = createCSSTestHTML(
      "dark",
      `
      <div id="container" style="padding: 20px;">
        <button class="pkts-chip">Hover Chip</button>
      </div>
      `
    );
    await page.setContent(html);
    await page.waitForTimeout(100);

    await page.locator("button.pkts-chip").hover();

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("chip-hover-dark.png");
  });
});
