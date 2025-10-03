import { test, expect } from "@playwright/experimental-ct-react";
import React from "react";

import ESSkeletonChip from "../ESSkeletonChip";

test.describe("ESSkeletonChip", () => {
  test("light", async ({ mount }) => {
    const themedComponent = (
      <div className="light">
        <ESSkeletonChip />
      </div>
    );
    const component = await mount(themedComponent);
    await expect(component).toHaveScreenshot();
  });
  test("dark", async ({ mount }) => {
    const themedComponent = (
      <div className="dark">
        <ESSkeletonChip />
      </div>
    );
    const component = await mount(themedComponent);
    await expect(component).toHaveScreenshot();
  });
});
