import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("ESInputText Web Component", () => {
  test("default-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `<es-input-text placeholder="Enter text"></es-input-text>`,
    );
    await page.setContent(html);
    await page.waitForSelector("es-input-text");
    await page.waitForTimeout(100);

    const input = page.locator("es-input-text div");
    await expect(input).toHaveScreenshot("ESInputText-default-light.png");
  });

  test("default-dark", async ({ page }) => {
    const html = createTestHTML(
      "dark",
      `<es-input-text placeholder="Enter text"></es-input-text>`,
    );
    await page.setContent(html);
    await page.waitForSelector("es-input-text");
    await page.waitForTimeout(100);

    const input = page.locator("es-input-text div");
    await expect(input).toHaveScreenshot("ESInputText-default-dark.png");
  });

  test("branded-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `<es-input-text variant="branded" placeholder="Search..."></es-input-text>`,
    );
    await page.setContent(html);
    await page.waitForSelector("es-input-text");
    await page.waitForTimeout(100);

    const input = page.locator("es-input-text div");
    await expect(input).toHaveScreenshot("ESInputText-branded-light.png");
  });

  test("branded-dark", async ({ page }) => {
    const html = createTestHTML(
      "dark",
      `<es-input-text variant="branded" placeholder="Search..."></es-input-text>`,
    );
    await page.setContent(html);
    await page.waitForSelector("es-input-text");
    await page.waitForTimeout(100);

    const input = page.locator("es-input-text div");
    await expect(input).toHaveScreenshot("ESInputText-branded-dark.png");
  });

  test("error-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `<es-input-text error placeholder="Invalid input"></es-input-text>`,
    );
    await page.setContent(html);
    await page.waitForSelector("es-input-text");
    await page.waitForTimeout(100);

    const input = page.locator("es-input-text div");
    await expect(input).toHaveScreenshot("ESInputText-error-light.png");
  });

  test("error-dark", async ({ page }) => {
    const html = createTestHTML(
      "dark",
      `<es-input-text error placeholder="Invalid input"></es-input-text>`,
    );
    await page.setContent(html);
    await page.waitForSelector("es-input-text");
    await page.waitForTimeout(100);

    const input = page.locator("es-input-text div");
    await expect(input).toHaveScreenshot("ESInputText-error-dark.png");
  });

  test("disabled-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `<es-input-text disabled placeholder="Disabled input"></es-input-text>`,
    );
    await page.setContent(html);
    await page.waitForSelector("es-input-text");
    await page.waitForTimeout(100);

    const input = page.locator("es-input-text div");
    await expect(input).toHaveScreenshot("ESInputText-disabled-light.png");
  });

  test("disabled-dark", async ({ page }) => {
    const html = createTestHTML(
      "dark",
      `<es-input-text disabled placeholder="Disabled input"></es-input-text>`,
    );
    await page.setContent(html);
    await page.waitForSelector("es-input-text");
    await page.waitForTimeout(100);

    const input = page.locator("es-input-text div");
    await expect(input).toHaveScreenshot("ESInputText-disabled-dark.png");
  });

  test("with-value", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `<es-input-text value="Hello World"></es-input-text>`,
    );
    await page.setContent(html);
    await page.waitForSelector("es-input-text");
    await page.waitForTimeout(100);

    const input = page.locator("es-input-text div");
    await expect(input).toHaveScreenshot("ESInputText-with-value.png");
  });

  test("hover-state", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `<es-input-text placeholder="Hover over me"></es-input-text>`,
    );
    await page.setContent(html);
    await page.waitForSelector("es-input-text");

    const input = page.locator("es-input-text div");
    await input.hover();
    await page.waitForTimeout(100);

    await expect(input).toHaveScreenshot("ESInputText-hover-state.png");
  });
});
