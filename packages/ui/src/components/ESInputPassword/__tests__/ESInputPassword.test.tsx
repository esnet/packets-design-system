import * as React from "react";
import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import ESInputPassword from "../ESInputPassword";
import { ESInputPasswordProps } from "../ESInputPassword.types";
import { test, expect } from "@playwright/experimental-ct-react";

test.describe("ESInputPassword", () => {
  const {
    testTable,
    themes,
    actionStates,
  }: ComponentTestTableType<ESInputPasswordProps> = {
    testTable: [
      { name: "default", props: { placeholder: "Enter password" } },
      {
        name: "primary",
        props: { variant: "primary", placeholder: "Primary variant" },
      },
      {
        name: "disabled",
        props: { disabled: true, placeholder: "Disabled" },
      },
      // Add more test cases as needed
    ],
    themes: ["light", "dark"],
    actionStates: ["hover"],
  };

  testTable.forEach(({ name, props }) => {
    themes.forEach((theme) => {
      let themedComponent = (
        <div style={{ padding: "8px" }}>
          <ESInputPassword {...props} />
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
        if (props.disabled) return;
        test(`${name}-${theme}-${state}`, async ({ page, mount }) => {
          // do any locator selection if needed
          const component = await mount(themedComponent);
          if (state === "focus") await component.focus();
          if (state === "hover" || state === "active") await component.hover();
          if (state === "active") await page.mouse.down();
          await expect(component).toHaveScreenshot();
        });
      });
    });
  });
  // add test for typing into the input
  test("typing into input", async ({ mount }) => {
    const component = await mount(<ESInputPassword />);
    const input = component.locator("input");
    await input.fill("Test input");
    await expect(input).toHaveValue("Test input");
  });

  // there are two svg buttons in the component, the first one is visibility toggle and the second one is clear button
  test("click visibility toggle button", async ({ mount }) => {
    const component = await mount(<ESInputPassword />);
    const input = component.locator("input");
    expect(await input.getAttribute("type")).toBe("password");
    const toggleButton = component.locator("svg").first();
    await toggleButton.click();
    expect(await input.getAttribute("type")).toBe("text");
  });

  test("click clear button", async ({ mount }) => {
    const component = await mount(<ESInputPassword />);
    const input = component.locator("input");
    const clearButton = component.locator("svg").last();
    await input.fill("Text to clear");
    await clearButton.click();
    const inputValue = await input.inputValue();
    expect(inputValue).toBe(""); // Input should be empty after clicking clear button
  });
});
