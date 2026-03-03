import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("PktsInputText Web Component", () => {
  test("default-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `<pkts-input-text placeholder="Enter text"></pkts-input-text>`,
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-input-text");
    await page.waitForTimeout(100);

    const input = page.locator("pkts-input-text div");
    await expect(input).toHaveScreenshot("PktsInputText-default-light.png");
  });

  test("default-dark", async ({ page }) => {
    const html = createTestHTML(
      "dark",
      `<pkts-input-text placeholder="Enter text"></pkts-input-text>`,
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-input-text");
    await page.waitForTimeout(100);

    const input = page.locator("pkts-input-text div");
    await expect(input).toHaveScreenshot("PktsInputText-default-dark.png");
  });

  test("branded-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `<pkts-input-text variant="branded" placeholder="Search..."></pkts-input-text>`,
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-input-text");
    await page.waitForTimeout(100);

    const input = page.locator("pkts-input-text div");
    await expect(input).toHaveScreenshot("PktsInputText-branded-light.png");
  });

  test("branded-dark", async ({ page }) => {
    const html = createTestHTML(
      "dark",
      `<pkts-input-text variant="branded" placeholder="Search..."></pkts-input-text>`,
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-input-text");
    await page.waitForTimeout(100);

    const input = page.locator("pkts-input-text div");
    await expect(input).toHaveScreenshot("PktsInputText-branded-dark.png");
  });

  test("error-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `<pkts-input-text error placeholder="Invalid input"></pkts-input-text>`,
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-input-text");
    await page.waitForTimeout(100);

    const input = page.locator("pkts-input-text div");
    await expect(input).toHaveScreenshot("PktsInputText-error-light.png");
  });

  test("error-dark", async ({ page }) => {
    const html = createTestHTML(
      "dark",
      `<pkts-input-text error placeholder="Invalid input"></pkts-input-text>`,
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-input-text");
    await page.waitForTimeout(100);

    const input = page.locator("pkts-input-text div");
    await expect(input).toHaveScreenshot("PktsInputText-error-dark.png");
  });

  test("disabled-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `<pkts-input-text disabled placeholder="Disabled input"></pkts-input-text>`,
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-input-text");
    await page.waitForTimeout(100);

    const input = page.locator("pkts-input-text div");
    await expect(input).toHaveScreenshot("PktsInputText-disabled-light.png");
  });

  test("disabled-dark", async ({ page }) => {
    const html = createTestHTML(
      "dark",
      `<pkts-input-text disabled placeholder="Disabled input"></pkts-input-text>`,
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-input-text");
    await page.waitForTimeout(100);

    const input = page.locator("pkts-input-text div");
    await expect(input).toHaveScreenshot("PktsInputText-disabled-dark.png");
  });

  test("with-value", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `<pkts-input-text value="Hello World"></pkts-input-text>`,
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-input-text");
    await page.waitForTimeout(100);

    const input = page.locator("pkts-input-text div");
    await expect(input).toHaveScreenshot("PktsInputText-with-value.png");
  });

  test("hover-state", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `<pkts-input-text placeholder="Hover over me"></pkts-input-text>`,
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-input-text");

    const input = page.locator("pkts-input-text div");
    await input.hover();
    await page.waitForTimeout(100);

    await expect(input).toHaveScreenshot("PktsInputText-hover-state.png");
  });
});
