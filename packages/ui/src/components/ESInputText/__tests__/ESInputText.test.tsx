import { test, expect } from "@playwright/experimental-ct-react";
import React from "react";

import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { ESInputTextProps } from "../ESInputText.types";
import { Apple } from "lucide-react";
import ESInputText from "../ESInputText";

test.describe("ESInputText", () => {
  const {
    testTable,
    themes,
    actionStates,
  }: ComponentTestTableType<ESInputTextProps> = {
    testTable: [
      {
        name: "primary",
        props: { variant: "primary" },
      },
      {
        name: "branded",
        props: { variant: "branded" },
      },
      { name: "error", props: { error: true } },
      { name: "actionButtons", props: { actionButtons: <Apple /> } },
    ],
    themes: ["light", "dark"],
    actionStates: ["hover"],
  };

  testTable.forEach(({ name, props }) => {
    themes.forEach((theme) => {
      let themedComponent = (
        <div style={{ padding: "8px" }}>
          <ESInputText {...props} />
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
        test(`${name}-${theme}-${state}`, async ({ page, mount }) => {
          const component = await mount(themedComponent);
          if (state === "focus") await component.focus();
          if (state === "hover" || state === "active") await component.hover();
          if (state === "active") await page.mouse.down();
          await expect(component).toHaveScreenshot();
        });
      });
    });
  });

  test("can change value", async ({ mount }) => {
    const component = await mount(<ESInputText />);
    const input = component.locator("input");

    //     await input.fill("Test input");
    //     await expect(input).toHaveValue("Test input");

    await input.clear();
    await expect(input).toHaveValue("");
  });
});

// test.describe("ESInputText", () => {
//   test("default matches snapshot", async ({ mount }) => {
//     const component = await mount(<ESInputText />);
//     await expect(component).toHaveScreenshot();
//   });
//   test("branded error matches snapshot", async ({ mount }) => {
//     const component = await mount(
//       <ESInputText value="Invalid" variant="branded" error />
//     );
//     await expect(component).toHaveScreenshot();
//   });
//   test("placeholder shows", async ({ mount }) => {
//     const component = await mount(
//       <ESInputText placeholder="Enter text here" />
//     );
//     const input = component.locator("input");
//     await expect(input).toHaveAttribute("placeholder", "Enter text here");
//   });
//   test("basic interaction", async ({ mount }) => {
//     const component = await mount(<ESInputText />);
//     const input = component.locator("input");

//     await input.fill("Test input");
//     await expect(input).toHaveValue("Test input");

//     await input.clear();
//     await expect(input).toHaveValue("");
//   });
// });
