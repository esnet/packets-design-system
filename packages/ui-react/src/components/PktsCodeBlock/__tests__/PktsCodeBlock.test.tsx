import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
import { PktsCodeBlock } from "../PktsCodeBlock";

test.describe("PktsCodeBlock", () => {
  ["light", "dark"].forEach((theme) => {
    test(theme, async ({ mount }) => {
      const component = await mount(
        <ComponentTestBox
          component={
            <PktsCodeBlock language="python">
              {`def add_numbers(num1, num2):
    return num1 + num2
result = add_numbers(5, 3)
print(f"The sum is: {result}")`}
            </PktsCodeBlock>
          }
          theme={theme as any}
          style={{ backgroundColor: theme === "light" ? "white" : "black" }}
        />,
      );
      await expect(component).toHaveScreenshot();
    });
  });
});
