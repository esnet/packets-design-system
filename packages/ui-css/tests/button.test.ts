import { test, expect } from "@playwright/test";
import { createCSSTestHTML, createVariantGrid, createStateStack } from "./test-utils";

test.describe("CSS Button Component", () => {
  const themes = ["light", "dark"] as const;

  // Test all button variants in light theme
  test("button-variants-light", async ({ page }) => {
    const html = createVariantGrid("light", [
      '<button class="es-button es-primary es-medium">Primary</button>',
      '<button class="es-button es-secondary es-medium">Secondary</button>',
      '<button class="es-button es-branded es-medium">Branded</button>',
      '<button class="es-button es-tertiary es-medium">Tertiary</button>',
      '<button class="es-button es-destructive es-medium">Destructive</button>',
    ]);

    await page.setContent(html);
    await expect(page).toHaveScreenshot("button-variants-light.png");
  });

  // Test all button variants in dark theme
  test("button-variants-dark", async ({ page }) => {
    const html = createVariantGrid("dark", [
      '<button class="es-button es-primary es-medium">Primary</button>',
      '<button class="es-button es-secondary es-medium">Secondary</button>',
      '<button class="es-button es-branded es-medium">Branded</button>',
      '<button class="es-button es-tertiary es-medium">Tertiary</button>',
      '<button class="es-button es-destructive es-medium">Destructive</button>',
    ]);

    await page.setContent(html);
    await expect(page).toHaveScreenshot("button-variants-dark.png");
  });

  // Test button sizes
  test("button-sizes-light", async ({ page }) => {
    const html = createStateStack("light", [
      '<button class="es-button es-primary es-medium">Medium Size</button>',
      '<button class="es-button es-primary es-xxlarge">XX-Large Size</button>',
    ]);

    await page.setContent(html);
    await expect(page).toHaveScreenshot("button-sizes-light.png");
  });

  // Test button states (disabled)
  test("button-states-light", async ({ page }) => {
    const html = createStateStack("light", [
      '<button class="es-button es-primary es-medium">Normal</button>',
      '<button class="es-button es-primary es-medium" disabled>Disabled</button>',
    ]);

    await page.setContent(html);
    await expect(page).toHaveScreenshot("button-states-light.png");
  });

  // Test button with fill variants
  test("button-fill-variants-light", async ({ page }) => {
    const html = createCSSTestHTML(
      "light",
      `
        <div style="width: 300px;">
          <div style="margin-bottom: 16px;">
            <button class="es-button es-primary es-medium es-fill">Fill Button</button>
          </div>
          <div>
            <button class="es-button es-primary es-medium es-nofill">No Fill Button</button>
          </div>
        </div>
      `
    );

    await page.setContent(html);
    await expect(page).toHaveScreenshot("button-fill-variants-light.png");
  });

  // Test button as link
  test("button-as-link-light", async ({ page }) => {
    const html = createStateStack("light", [
      '<button class="es-button es-primary es-medium">Button Element</button>',
      '<a href="#" class="es-button es-primary es-medium">Link Element</a>',
    ]);

    await page.setContent(html);
    await expect(page).toHaveScreenshot("button-as-link-light.png");
  });

  // Test hover state (requires interaction)
  test("button-hover-light", async ({ page }) => {
    const html = createCSSTestHTML(
      "light",
      '<button class="es-button es-primary es-medium">Hover Me</button>'
    );

    await page.setContent(html);
    const button = page.locator("button");

    // Hover over the button
    await button.hover();
    await expect(page).toHaveScreenshot("button-hover-light.png");
  });

  // Test comprehensive variant comparison (light vs dark)
  for (const variant of ["primary", "secondary", "branded", "tertiary", "destructive"] as const) {
    for (const theme of themes) {
      test(`button-${variant}-${theme}`, async ({ page }) => {
        const html = createCSSTestHTML(
          theme,
          `<button class="es-button es-${variant} es-medium">${variant.charAt(0).toUpperCase() + variant.slice(1)} Button</button>`
        );

        await page.setContent(html);
        await expect(page).toHaveScreenshot(`button-${variant}-${theme}.png`);
      });
    }
  }
});
