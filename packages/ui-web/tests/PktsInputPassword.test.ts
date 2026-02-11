import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("PktsInputPassword Web Component", () => {
  test("default-light", async ({ page }) => {
    const html = createTestHTML("light", `<pkts-input-password placeholder="Enter password"></pkts-input-password>`);
    await page.setContent(html);
    await page.waitForSelector("pkts-input-password");
    const input = page.locator("pkts-input-password > div").first();
    await expect(input).toHaveScreenshot("PktsInputPassword-default-light.png");
  });

  test("branded-light", async ({ page }) => {
    const html = createTestHTML("light", `<pkts-input-password variant="branded" placeholder="Password"></pkts-input-password>`);
    await page.setContent(html);
    await page.waitForSelector("pkts-input-password");
    const input = page.locator("pkts-input-password > div").first();
    await expect(input).toHaveScreenshot("PktsInputPassword-branded-light.png");
  });

  test("error-light", async ({ page }) => {
    const html = createTestHTML("light", `<pkts-input-password error placeholder="Invalid password"></pkts-input-password>`);
    await page.setContent(html);
    await page.waitForSelector("pkts-input-password");
    const input = page.locator("pkts-input-password > div").first();
    await expect(input).toHaveScreenshot("PktsInputPassword-error-light.png");
  });

  test("with-value", async ({ page }) => {
    const html = createTestHTML("light", `<pkts-input-password value="secret123"></pkts-input-password>`);
    await page.setContent(html);
    await page.waitForSelector("pkts-input-password");
    const input = page.locator("pkts-input-password > div").first();
    await expect(input).toHaveScreenshot("PktsInputPassword-with-value.png");
  });
});
