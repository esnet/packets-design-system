import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
import { ESInputRowProps } from "../ESInputRow.types";
import ESInputRow from "../ESInputRow";
import ESInputEmail from "../../ESInputEmail";
import ESInputText from "../../ESInputText";
import ESInputSearch from "../../ESInputSearch";
import ESInputTextArea from "../../ESInputTextArea";
import ESInputSwitch from "../../ESInputSwitch";
import ESInputCheckbox from "../../ESInputCheckbox";

test.describe("ESInputRow", () => {
  const { testTable, themes }: ComponentTestTableType<ESInputRowProps> = {
    testTable: [
      {
        name: "default",
        props: {
          label: "Input Label",
          children: <ESInputText placeholder="Placeholder text" />,
        },
      },
      {
        name: "email-error",
        props: {
          label: "Email",
          error: "This field is required",
          required: true,
          children: <ESInputEmail error />,
        },
      },
      {
        name: "disabled-required-search",
        props: {
          label: "Query",
          required: true,
          disabled: true,
          children: <ESInputSearch disabled value="disabled search bar" />,
        },
      },
      {
        name: "success-textarea",
        props: {
          label: "TextArea",
          success: true,
          children: <ESInputTextArea disabled value="Big Text Area" />,
        },
      },
      {
        name: "label-left-switch",
        props: {
          label: "Switch",
          required: true,
          error: "erroneous switch",
          tooltip: "Switch",
          labelPlacement: "left",
          children: <ESInputSwitch />,
        },
      },
      {
        name: "label-right-checkbox",
        props: {
          label: "Checkbox",
          required: true,
          success: "successful checkbox",
          labelPlacement: "right",
          children: <ESInputCheckbox />,
        },
      },
    ],
    themes: ["light", "dark"],
    actionStates: ["hover"],
  };
  testTable.forEach(({ name, props }) => {
    themes.forEach((theme) => {
      test(`${name}-${theme}`, async ({ mount }) => {
        test.setTimeout(120_000);
        const testBox = (
          <ComponentTestBox
            size="small"
            component={<ESInputRow {...props} />}
            theme={theme}
          />
        );
        const component = await mount(testBox);
        await expect(component).toHaveScreenshot();
      });

      if (name === "default") {
        test(`${name}-hover-${theme}`, async ({ mount }) => {
          test.setTimeout(120_000);
          const testBox = (
            <ComponentTestBox
              size="small"
              component={<ESInputRow {...props} />}
              theme={theme}
            />
          );
          const component = await mount(testBox);
          await component.getByRole("textbox", { name: "Input Label" }).hover();
          await expect(component).toHaveScreenshot();
        });
      }
    });
  });
});
