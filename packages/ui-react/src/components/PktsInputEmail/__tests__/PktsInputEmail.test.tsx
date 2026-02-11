import { test, expect } from "@playwright/experimental-ct-react";
import React from "react";

import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { PktsInputEmailProps } from "../PktsInputEmail.types";
import PktsInputEmail from "../PktsInputEmail";

test.describe("ESInputEmail", () => {
  const {
    testTable,
    themes,
    actionStates,
  }: ComponentTestTableType<PktsInputEmailProps> = {
    testTable: [
      {
        name: "primary",
        props: { variant: "primary" },
      },
      {
        name: "branded",
        props: { variant: "branded" },
      },
    ],
    themes: ["light", "dark"],
    // actionStates: [],
    actionStates: ["hover"],
  };

  testTable.forEach(({ name, props }) => {
    themes.forEach((theme) => {
      let themedComponent = (
        <div style={{ padding: "8px" }}>
          <PktsInputEmail {...props} />
        </div>
      );
      if (theme === "dark") {
        themedComponent = <div className="dark">{themedComponent}</div>;
      }
      test(`${name}-${theme}`, async ({ mount }) => {
        const component = await mount(themedComponent);
        await expect(component).toHaveScreenshot();
      });
      actionStates.forEach((state) => {
        test(`${name}-${theme}-${state}`, async ({ mount }) => {
          const component = await mount(themedComponent);
          const input = component.locator("input[type='email']");
          if (state === "focus") await input.focus();
          if (state === "hover" || state === "active") await input.hover();
          if (state === "active") await input.press("Space");
          await expect(component).toHaveScreenshot();
        });
      });
    });
  });

  test("icon clears", async ({ mount }) => {
    const component = await mount(<PktsInputEmail />);
    const input = component.locator("input[type='email']");
    const clearIcon = component.locator("svg");

    await input.fill("test@example.com");
    await expect(input).toHaveValue("test@example.com");

    await clearIcon.click();

    await expect(input).toHaveValue("");
  });
});
