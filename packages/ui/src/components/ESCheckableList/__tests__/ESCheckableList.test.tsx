import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
import { ESCheckableListProps } from "../ESCheckableList.types";
import ESCheckableList from "../ESCheckableList";
import ESInputRow from "../../ESInputRow";
import ESInputCheckbox from "../../ESInputCheckbox";
import ESInputRadioButton from "../../ESInputRadioButton";
test.describe("ESCheckableList", () => {
  const { testTable, themes }: ComponentTestTableType<ESCheckableListProps> = {
    testTable: [
      {
        name: "checkboxes",
        props: {
          legend: "Checkbox Options",
          children: (
            <>
              <ESInputRow labelPlacement="right" label="NA-WEST-1">
                <ESInputCheckbox />
              </ESInputRow>
              <ESInputRow labelPlacement="right" label="NA-WEST-2">
                <ESInputCheckbox />
              </ESInputRow>
              <ESInputRow labelPlacement="right" label="NA-WEST-3">
                <ESInputCheckbox />
              </ESInputRow>
            </>
          ),
        },
      },
      {
        name: "radio-buttons",
        props: {
          legend: "Radio Options",
          children: (
            <>
              <ESInputRow labelPlacement="right" label="NA-WEST-1">
                <ESInputRadioButton name="deployment" />
              </ESInputRow>
              <ESInputRow labelPlacement="right" label="NA-WEST-2">
                <ESInputRadioButton name="deployment" />
              </ESInputRow>
              <ESInputRow labelPlacement="right" label="NA-WEST-3">
                <ESInputRadioButton name="deployment" />
              </ESInputRow>
            </>
          ),
        },
      },
    ],
    themes: ["light", "dark"],
    actionStates: [],
  };
  testTable.forEach(({ name, props }) => {
    themes.forEach((theme) => {
      const testBox = (
        <ComponentTestBox
          component={<ESCheckableList {...props} />}
          theme={theme}
        />
      );
      test(`${name}-${theme}`, async ({ mount }) => {
        const component = await mount(testBox);
        await expect(component).toHaveScreenshot();
      });
    });
  });
});
