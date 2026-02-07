import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("ESButton Web Component", () => {
  const variants = ["primary", "secondary", "branded", "tertiary", "destructive"] as const;
  const themes = ["light", "dark"] as const;
  const sizes = ["medium", "xxlarge"] as const;

  // Test all variant and theme combinations
  for (const theme of themes) {
    for (const variant of variants) {
      test(`${variant}-${theme}`, async ({ page }) => {
        const html = createTestHTML(
          theme,
          `<es-button variant="${variant}">Test Button</es-button>`
        );
        await page.setContent(html);
        await page.waitForSelector("es-button");
        await page.waitForTimeout(100);
        // Screenshot the inner button element which has the actual styling and dimensions
        const button = page.locator("es-button button, es-button a");
        await expect(button).toHaveScreenshot(`ESButton-${variant}-${theme}.png`);
      });
    }
  }

  // Test different sizes
  for (const size of sizes) {
    test(`size-${size}-light`, async ({ page }) => {
      const html = createTestHTML(
        "light",
        `<es-button variant="primary" size="${size}">Size ${size}</es-button>`
      );
      await page.setContent(html);
      await page.waitForSelector("es-button");
      await page.waitForTimeout(100);
      const button = page.locator("es-button button, es-button a");
      await expect(button).toHaveScreenshot(`ESButton-size-${size}.png`);
    });
  }

  // Test disabled state
  test("disabled-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `<es-button variant="primary" disabled>Disabled Button</es-button>`
    );
    await page.setContent(html);
    await page.waitForSelector("es-button");
    await page.waitForTimeout(100);
    const button = page.locator("es-button button, es-button a");
    await expect(button).toHaveScreenshot("ESButton-disabled-light.png");
  });

  // Test as link
  test("as-link-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `<es-button variant="primary" as="a" href="#">Link Button</es-button>`
    );
    await page.setContent(html);
    await page.waitForSelector("es-button");
    await page.waitForTimeout(100);
    const button = page.locator("es-button button, es-button a");
    await expect(button).toHaveScreenshot("ESButton-as-link-light.png");
  });

  // Test fill variations
  test("fill-variations-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `
        <div style="display: flex; flex-direction: column; gap: 8px; width: 300px;">
          <es-button variant="primary" fill>Fill Button</es-button>
          <es-button variant="primary">No Fill Button</es-button>
        </div>
      `
    );
    await page.setContent(html);
    await page.waitForSelector("es-button");
    await page.waitForTimeout(100);
    await expect(page.locator("body")).toHaveScreenshot("ESButton-fill-variations.png");
  });

  // Test label attribute syntax (vs slot content)
  test("label-attribute-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `<es-button variant="primary" label="Label Attribute"></es-button>`
    );
    await page.setContent(html);
    await page.waitForSelector("es-button");
    await page.waitForTimeout(100);
    const button = page.locator("es-button button, es-button a");
    await expect(button).toHaveScreenshot("ESButton-label-attribute-light.png");
  });

  // Test both syntaxes together
  test("label-vs-slot-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <es-button variant="secondary" label="Using label attribute"></es-button>
          <es-button variant="secondary">Using slot content</es-button>
        </div>
      `
    );
    await page.setContent(html);
    await page.waitForSelector("es-button");
    await page.waitForTimeout(100);
    await expect(page.locator("body")).toHaveScreenshot("ESButton-label-vs-slot.png");
  });
});
