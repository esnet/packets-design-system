import { test, expect } from "@playwright/experimental-ct-react";
import React from "react";
import ESChip from "../ESChip";

test.describe("ESChip", () => {
  test("default screenshot", async ({ mount }) => {
    const component = await mount(<ESChip label="Primary Style" />);
    await expect(component).toHaveScreenshot();
  });
  // more tests to be written
});
