import { test, expect } from "@playwright/experimental-ct-react";
import React from "react";
import ESInputText from "../ESInputText";

test.describe("ESInputText", () => {
  test("matches snapshot", async ({ mount }) => {
    const component = await mount(<ESInputText />);
    await expect(component).toHaveScreenshot();
  });
  test("renders with placeholder", async ({ mount }) => {
    const component = await mount(
      <ESInputText placeholder="Enter text here" />
    );
    const input = component.locator("input");
    await expect(input).toHaveAttribute("placeholder", "Enter text here");
  });
  test("basic interaction", async ({ mount }) => {
    const component = await mount(<ESInputText />);
    const input = component.locator("input");

    await input.fill("Test input");
    await expect(input).toHaveValue("Test input");

    await input.clear();
    await expect(input).toHaveValue("");
  });
});
