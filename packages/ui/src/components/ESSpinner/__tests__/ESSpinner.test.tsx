import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
import ESSpinner from "../ESSpinner";

test.describe("ESSpinner", () => {
  const { testTable, themes }: ComponentTestTableType<{}> = {
    testTable: [
      {
        name: "default",
        props: {},
      },
    ],
    themes: ["light", "dark"],
    actionStates: [],
  };
  testTable.forEach(({ name }) => {
    themes.forEach((theme) => {
      const testBox = (
        <ComponentTestBox component={<ESSpinner />} theme={theme} />
      );
      test(`${name}-${theme}`, async ({ mount }) => {
        const component = await mount(testBox);
        await expect(component).toHaveScreenshot();
      });
    });
  });

  test("accessibility", async ({ mount }) => {
    const component = await mount(<ESSpinner />);
    await expect(component).toHaveAttribute("aria-busy", "true");
    await expect(component).toHaveAttribute("role", "alert");
  });

  test("prefers-reduced-motion", async ({ mount, page }) => {
    page.emulateMedia({ reducedMotion: "reduce" });
    const component = await mount(<ESSpinner />);
    await component.evaluate((el) => {
      el.style.setProperty("animation", "none");
    });
    await expect(component).toHaveScreenshot();
    await expect(component.locator("span").nth(0)).not.toBeVisible();
    await expect(component.locator("span").nth(4)).toBeVisible();
  });
});
