import { test, expect } from "@playwright/experimental-ct-react";
import React from "react";
import ESCommaSeperatedList from "../ESCommaSeperatedList";

test.describe("ESCommaSeperatedList", () => {
  test("list of items", async ({ mount }) => {
    const component = await mount(
      <ESCommaSeperatedList items={["Item 1", "Item 2", "Item 3"]} />
    );
    await expect(component).toHaveScreenshot();
    await expect(component).toHaveText("Item 1Item 2Item 3");
  });

  test("empty list", async ({ mount }) => {
    const component = await mount(<ESCommaSeperatedList items={[]} />);
    await expect(component).toHaveText("");
  });
});
