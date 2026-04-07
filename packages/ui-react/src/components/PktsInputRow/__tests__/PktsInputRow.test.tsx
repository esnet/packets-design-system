import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
import PktsInputRow from "../PktsInputRow";
import PktsInputText from "../../PktsInputText";
import PktsInputSwitch from "../../PktsInputSwitch";
import PktsInputCheckbox from "../../PktsInputCheckbox";

test.describe("PktsInputRow", () => {
  ["light", "dark"].forEach((theme) => {
    test(theme, async ({ mount }) => {
      const testBox = (
        <ComponentTestBox
          size="small"
          component={
            <div
              style={{ gap: "1rem", display: "flex", flexDirection: "column" }}
            >
              <PktsInputRow label="Input Text">
                <PktsInputText value="text" />
              </PktsInputRow>
              <PktsInputRow
                data-testid="hover"
                required
                tooltip="test"
                label="Input Text 2"
              >
                <PktsInputText />
              </PktsInputRow>
              <PktsInputRow
                error="Error text"
                label="Input Switch"
                labelPlacement="left"
              >
                <PktsInputSwitch checked />
              </PktsInputRow>
              <PktsInputRow
                required
                success="Successful text"
                label="Input Checkbox"
                labelPlacement="right"
              >
                <PktsInputCheckbox checked />
              </PktsInputRow>
            </div>
          }
        />
      );

      const component = await mount(testBox);
      await component.getByTestId("hover").hover();
      await expect(component).toHaveScreenshot();
    });
  });
});
