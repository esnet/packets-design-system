import { test, expect } from "@playwright/experimental-ct-react";
import React from "react";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";

import PktsDivider from "../PktsDivider";

test.describe("PktsDivider", () => {
  const themes: ("light" | "dark")[] = ["light", "dark"];
  themes.forEach((theme) => {
    test(`divider-variants-${theme}`, async ({ mount }) => {
      const component = await mount(
        <ComponentTestBox
          theme={theme}
          component={
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                width: "320px",
              }}
            >
              <PktsDivider variant="primary" />
              <PktsDivider variant="branded" />
            </div>
          }
        />,
      );
      await expect(component).toHaveScreenshot(
        `PktsDivider-variants-${theme}.png`,
      );
    });
  });
});
