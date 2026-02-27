import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("PktsButton Web Component", () => {
  const variants = ["primary", "secondary", "branded", "tertiary", "destructive"] as const;
  const themes = ["light", "dark"] as const;
  const sizes = ["medium", "xxlarge"] as const;

  // Test all variant and theme combinations
  for (const theme of themes) {
    for (const variant of variants) {
      test(`${variant}-${theme}`, async ({ page }) => {
        const html = createTestHTML(
          theme,
          `<pkts-button variant="${variant}">Test Button</pkts-button>`
        );
        await page.setContent(html);
        await page.waitForSelector("pkts-button");
        await page.waitForTimeout(100);
        // Screenshot the inner button element which has the actual styling and dimensions
        const button = page.locator("pkts-button button, pkts-button a");
        await expect(button).toHaveScreenshot(`PktsButton-${variant}-${theme}.png`);
      });
    }
  }

  // Test different sizes
  for (const size of sizes) {
    test(`size-${size}-light`, async ({ page }) => {
      const html = createTestHTML(
        "light",
        `<pkts-button variant="primary" size="${size}">Size ${size}</pkts-button>`
      );
      await page.setContent(html);
      await page.waitForSelector("pkts-button");
      await page.waitForTimeout(100);
      const button = page.locator("pkts-button button, pkts-button a");
      await expect(button).toHaveScreenshot(`PktsButton-size-${size}.png`);
    });
  }

  // Test disabled state
  test("disabled-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `<pkts-button variant="primary" disabled>Disabled Button</pkts-button>`
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-button");
    await page.waitForTimeout(100);
    const button = page.locator("pkts-button button, pkts-button a");
    await expect(button).toHaveScreenshot("PktsButton-disabled-light.png");
  });

  // Test as link
  test("as-link-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `<pkts-button variant="primary" as="a" href="#">Link Button</pkts-button>`
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-button");
    await page.waitForTimeout(100);
    const button = page.locator("pkts-button button, pkts-button a");
    await expect(button).toHaveScreenshot("PktsButton-as-link-light.png");
  });

  // Test fill variations
  test("fill-variations-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `
        <div style="display: flex; flex-direction: column; gap: 8px; width: 300px;">
          <pkts-button variant="primary" fill>Fill Button</pkts-button>
          <pkts-button variant="primary">No Fill Button</pkts-button>
        </div>
      `
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-button");
    await page.waitForTimeout(100);
    await expect(page.locator("body")).toHaveScreenshot("PktsButton-fill-variations.png");
  });

  // Test label attribute syntax (vs slot content)
  test("label-attribute-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `<pkts-button variant="primary" label="Label Attribute"></pkts-button>`
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-button");
    await page.waitForTimeout(100);
    const button = page.locator("pkts-button button, pkts-button a");
    await expect(button).toHaveScreenshot("PktsButton-label-attribute-light.png");
  });

  // Test both syntaxes together
  test("label-vs-slot-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <pkts-button variant="secondary" label="Using label attribute"></pkts-button>
          <pkts-button variant="secondary">Using slot content</pkts-button>
        </div>
      `
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-button");
    await page.waitForTimeout(100);
    await expect(page.locator("body")).toHaveScreenshot("PktsButton-label-vs-slot.png");
  });
});
