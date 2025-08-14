import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
import { ESLabelProps } from "../ESLabel.types";
import ESLabel from "../ESLabel";
import ESInputEmail from "../../ESInputEmail";
import ESInputText from "../../ESInputText";
import ESInputSearch from "../../ESInputSearch";
test.describe("ESLabel", () => {
  const {
    testTable,
    themes,
    actionStates,
  }: ComponentTestTableType<ESLabelProps> = {
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
    ],
    themes: ["light", "dark"],
    actionStates: ["hover"],
  };
  testTable.forEach(({ name, props }) => {
    themes.forEach((theme) => {
      const testBox = (
        <ComponentTestBox
          size="full"
          component={<ESLabel {...props} />}
          theme={theme}
        />
      );
      test(`${name}-${theme}`, async ({ mount }) => {
        const component = await mount(testBox);
        await expect(component).toHaveScreenshot();
      });
      actionStates.forEach((state) => {
        test(`${name}-${theme}-${state}`, async ({ mount }) => {
          if (props.disabled) return; // skip interaction tests
          const component = await mount(testBox);
          if (state === "hover" || state === "active") await component.hover();
          await expect(component).toHaveScreenshot();
        });
      });
    });
  });
});
