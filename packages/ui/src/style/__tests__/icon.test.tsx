import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { Apple } from "lucide-react";

test.describe("Icon", () => {
  const themes = ["light", "dark"];
  themes.forEach((theme) => {
    test(`${theme}-icon`, async ({ mount }) => {
      const component = await mount(
        <div className={theme} style={{ width: 48 }}>
          <Apple />
        </div>,
      );
      await expect(component).toHaveScreenshot();
    });
  });
});
