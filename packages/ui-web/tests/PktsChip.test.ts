import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("PktsChip Web Component", () => {
  const variants = ["primary", "outline"] as const;

  for (const variant of variants) {
    test(`${variant}-light`, async ({ page }) => {
      const html = createTestHTML(
        "light",
        `
          <div id="container" style="padding: 20px;">
            <pkts-chip ${variant === "outline" ? 'variant="outline"' : ""}>${variant} Chip</pkts-chip>
          </div>
        `
      );
      await page.setContent(html);
      await page.waitForSelector("pkts-chip");
      await page.waitForTimeout(100);

      const container = page.locator("#container");
      await expect(container).toHaveScreenshot(`PktsChip-${variant}-light.png`);
    });
  }

  for (const variant of variants) {
    test(`${variant}-dark`, async ({ page }) => {
      const html = createTestHTML(
        "dark",
        `
          <div id="container" style="padding: 20px;">
            <pkts-chip ${variant === "outline" ? 'variant="outline"' : ""}>${variant} Chip</pkts-chip>
          </div>
        `
      );
      await page.setContent(html);
      await page.waitForSelector("pkts-chip");
      await page.waitForTimeout(100);

      const container = page.locator("#container");
      await expect(container).toHaveScreenshot(`PktsChip-${variant}-dark.png`);
    });
  }

  test("rounded-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `
        <div id="container" style="padding: 20px;">
          <pkts-chip rounded>Rounded Chip</pkts-chip>
        </div>
      `
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-chip");
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("PktsChip-rounded-light.png");
  });

  test("rounded-dark", async ({ page }) => {
    const html = createTestHTML(
      "dark",
      `
        <div id="container" style="padding: 20px;">
          <pkts-chip rounded>Rounded Chip</pkts-chip>
        </div>
      `
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-chip");
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("PktsChip-rounded-dark.png");
  });

  test("disabled-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `
        <div id="container" style="padding: 20px;">
          <pkts-chip disabled>Disabled Chip</pkts-chip>
        </div>
      `
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-chip");
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("PktsChip-disabled-light.png");
  });

  test("disabled-dark", async ({ page }) => {
    const html = createTestHTML(
      "dark",
      `
        <div id="container" style="padding: 20px;">
          <pkts-chip disabled>Disabled Chip</pkts-chip>
        </div>
      `
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-chip");
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("PktsChip-disabled-dark.png");
  });

  test("hover-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `
        <div id="container" style="padding: 20px;">
          <pkts-chip>Hover Chip</pkts-chip>
        </div>
      `
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-chip");
    await page.waitForTimeout(100);

    await page.locator("pkts-chip").hover();

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("PktsChip-hover-light.png");
  });

  test("hover-dark", async ({ page }) => {
    const html = createTestHTML(
      "dark",
      `
        <div id="container" style="padding: 20px;">
          <pkts-chip>Hover Chip</pkts-chip>
        </div>
      `
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-chip");
    await page.waitForTimeout(100);

    await page.locator("pkts-chip").hover();

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("PktsChip-hover-dark.png");
  });
});
