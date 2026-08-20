import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("PktsChipGroup Web Component", () => {
  test("default-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `
        <div id="container" style="padding: 20px;">
          <pkts-chip-group>
            <pkts-chip>One</pkts-chip>
            <pkts-chip>Two</pkts-chip>
            <pkts-chip>Three</pkts-chip>
          </pkts-chip-group>
        </div>
      `,
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-chip-group");
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("PktsChipGroup-default-light.png");
  });

  test("default-dark", async ({ page }) => {
    const html = createTestHTML(
      "dark",
      `
        <div id="container" style="padding: 20px;">
          <pkts-chip-group>
            <pkts-chip>One</pkts-chip>
            <pkts-chip>Two</pkts-chip>
            <pkts-chip>Three</pkts-chip>
          </pkts-chip-group>
        </div>
      `,
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-chip-group");
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("PktsChipGroup-default-dark.png");
  });

  test("outline-chips-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `
        <div id="container" style="padding: 20px;">
          <pkts-chip-group>
            <pkts-chip variant="outline">One</pkts-chip>
            <pkts-chip variant="outline">Two</pkts-chip>
            <pkts-chip variant="outline">Three</pkts-chip>
          </pkts-chip-group>
        </div>
      `,
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-chip-group");
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot(
      "PktsChipGroup-outline-chips-light.png",
    );
  });

  test("outline-chips-dark", async ({ page }) => {
    const html = createTestHTML(
      "dark",
      `
        <div id="container" style="padding: 20px;">
          <pkts-chip-group>
            <pkts-chip variant="outline">One</pkts-chip>
            <pkts-chip variant="outline">Two</pkts-chip>
            <pkts-chip variant="outline">Three</pkts-chip>
          </pkts-chip-group>
        </div>
      `,
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-chip-group");
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot(
      "PktsChipGroup-outline-chips-dark.png",
    );
  });

  test("rounded-chips-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `
        <div id="container" style="padding: 20px;">
          <pkts-chip-group>
            <pkts-chip rounded>One</pkts-chip>
            <pkts-chip rounded>Two</pkts-chip>
            <pkts-chip rounded>Three</pkts-chip>
          </pkts-chip-group>
        </div>
      `,
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-chip-group");
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot(
      "PktsChipGroup-rounded-chips-light.png",
    );
  });

  test("rounded-chips-dark", async ({ page }) => {
    const html = createTestHTML(
      "dark",
      `
        <div id="container" style="padding: 20px;">
          <pkts-chip-group>
            <pkts-chip rounded>One</pkts-chip>
            <pkts-chip rounded>Two</pkts-chip>
            <pkts-chip rounded>Three</pkts-chip>
          </pkts-chip-group>
        </div>
      `,
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-chip-group");
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot(
      "PktsChipGroup-rounded-chips-dark.png",
    );
  });

  test("mixed-chips-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `
        <div id="container" style="padding: 20px;">
          <pkts-chip-group>
            <pkts-chip>Primary</pkts-chip>
            <pkts-chip variant="outline">Outline</pkts-chip>
            <pkts-chip disabled>Disabled</pkts-chip>
          </pkts-chip-group>
        </div>
      `,
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-chip-group");
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot(
      "PktsChipGroup-mixed-chips-light.png",
    );
  });

  test("mixed-chips-dark", async ({ page }) => {
    const html = createTestHTML(
      "dark",
      `
        <div id="container" style="padding: 20px;">
          <pkts-chip-group>
            <pkts-chip>Primary</pkts-chip>
            <pkts-chip variant="outline">Outline</pkts-chip>
            <pkts-chip disabled>Disabled</pkts-chip>
          </pkts-chip-group>
        </div>
      `,
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-chip-group");
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot(
      "PktsChipGroup-mixed-chips-dark.png",
    );
  });

  test("wrapping-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `
        <div id="container" style="padding: 20px; width: 300px;">
          <pkts-chip-group>
            <pkts-chip>Alpha</pkts-chip>
            <pkts-chip>Beta</pkts-chip>
            <pkts-chip>Gamma</pkts-chip>
            <pkts-chip>Delta</pkts-chip>
            <pkts-chip>Epsilon</pkts-chip>
            <pkts-chip>Zeta</pkts-chip>
          </pkts-chip-group>
        </div>
      `,
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-chip-group");
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot(
      "PktsChipGroup-wrapping-light.png",
    );
  });

  test("wrapping-dark", async ({ page }) => {
    const html = createTestHTML(
      "dark",
      `
        <div id="container" style="padding: 20px; width: 300px;">
          <pkts-chip-group>
            <pkts-chip>Alpha</pkts-chip>
            <pkts-chip>Beta</pkts-chip>
            <pkts-chip>Gamma</pkts-chip>
            <pkts-chip>Delta</pkts-chip>
            <pkts-chip>Epsilon</pkts-chip>
            <pkts-chip>Zeta</pkts-chip>
          </pkts-chip-group>
        </div>
      `,
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-chip-group");
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("PktsChipGroup-wrapping-dark.png");
  });
});
