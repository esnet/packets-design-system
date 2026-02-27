import { test, expect } from "@playwright/experimental-ct-react";
import React from "react";

import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { PktsInputNumberProps } from "../PktsInputNumber.types";
import PktsInputNumber from "../PktsInputNumber";

test.describe("ESInputNumber", () => {
  const {
    testTable,
    themes,
    actionStates,
  }: ComponentTestTableType<PktsInputNumberProps> = {
    testTable: [
      {
        name: "primary",
        props: { variant: "primary" },
      },
      {
        name: "branded",
        props: { variant: "branded" },
      },
      {
        name: "disabled",
        props: { disabled: true },
      },
      { name: "error", props: { error: true } },
    ],
    themes: ["light", "dark"],
    actionStates: ["hover"],
  };

  testTable.forEach(({ name, props }) => {
    themes.forEach((theme) => {
      let themedComponent = (
        <div style={{ padding: "8px" }}>
          <PktsInputNumber {...props} />
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

  test("can change value with typing", async ({ mount }) => {
    const component = await mount(<PktsInputNumber />);
    const input = component.locator("input");
    await expect(input).toHaveValue("0"); // initial value

    await input.fill("123");
    await expect(input).toHaveValue("123");

    await input.clear();
    await expect(input).toHaveValue("");
  });

  test("can change value with buttons", async ({ mount }) => {
    const component = await mount(<PktsInputNumber />);
    const input = component.locator("input");
    const addButton = component.locator("svg").first();
    const minusButton = component.locator("svg").last();

    await addButton.click();
    await expect(input).toHaveValue("1");
    await minusButton.click();
    await expect(input).toHaveValue("0");

    await input.clear();
    await expect(input).toHaveValue("");
  });

  test("does not exceed max value of 2", async ({ mount }) => {
    const component = await mount(<PktsInputNumber max={2} />);
    const input = component.locator("input");
    const addButton = component.locator("svg").first();

    // Click the add button three times
    await addButton.click();
    await addButton.click();
    await addButton.click();

    // Value should not exceed 2
    await expect(input).toHaveValue("2");

    // Try typing a value greater than max
    await input.fill("5");
    await addButton.click();
    await expect(input).toHaveValue("2");
  });
});

// test.describe("ESInputNumber", () => {
//   test("default matches snapshot", async ({ mount }) => {
//     const component = await mount(<PktsInputNumber />);
//     await expect(component).toHaveScreenshot();
//   });
//   test("branded error matches snapshot", async ({ mount }) => {
//     const component = await mount(
//       <PktsInputNumber value="Invalid" variant="branded" error />
//     );
//     await expect(component).toHaveScreenshot();
//   });
//   test("placeholder shows", async ({ mount }) => {
//     const component = await mount(
//       <PktsInputNumber placeholder="Enter text here" />
//     );
//     const input = component.locator("input");
//     await expect(input).toHaveAttribute("placeholder", "Enter text here");
//   });
//   test("basic interaction", async ({ mount }) => {
//     const component = await mount(<PktsInputNumber />);
//     const input = component.locator("input");

//     await input.fill("Test input");
//     await expect(input).toHaveValue("Test input");

//     await input.clear();
//     await expect(input).toHaveValue("");
//   });
// });
