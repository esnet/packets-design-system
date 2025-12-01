import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
import ESTableOfContents from "../ESTableOfContents";

test.describe("ESTableOfContents", () => {
  ["light", "dark"].forEach((theme) => {
    const testBox = (
      <ComponentTestBox
        component={
          <ESTableOfContents
            links={[
              {
                children: "Section 1",
                href: "#section-1",
              },
              {
                children: "Section 2",
                href: "#section-2",
              },
              {
                children: "Section 3",
                href: "#section-3",
              },
            ]}
          />
        }
        theme={theme as "light" | "dark"}
      />
    );
    test(`${theme}`, async ({ mount }) => {
      const component = await mount(testBox);

      const lastLink = component.locator("a").last();
      await lastLink.focus();
      await expect(component).toHaveScreenshot();
    });
  });
});
