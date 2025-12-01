import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
import ESAlert from "../ESAlert";
import { ESAlertProps } from "../ESAlert.types";

test.describe("ESAlert", () => {
  const { testTable, themes }: ComponentTestTableType<ESAlertProps> = {
    testTable: [
      {
        name: "info",
        props: {
          title: "Information Alert",
          children: "hello",
          variant: "info",
        },
      },
      {
        name: "branded",
        props: {
          title: "Branded Alert",
          children: "hello",
          variant: "branded",
        },
      },
      {
        name: "warning",
        props: {
          title: "Warning Alert",
          children: "hello",
          variant: "warning",
        },
      },
      {
        name: "error",
        props: {
          title: "Error Alert",
          children: "hello",
          variant: "error",
        },
      },
      {
        name: "success",
        props: {
          title: "Success Alert",
          children: "hello",
          variant: "success",
        },
      },
    ],
    themes: ["light", "dark"],
    actionStates: [],
  };
  testTable.forEach(({ name, props }) => {
    themes.forEach((theme) => {
      const testBox = (
        <ComponentTestBox component={<ESAlert {...props} />} theme={theme} />
      );
      test(`${name}-${theme}`, async ({ mount }) => {
        const component = await mount(testBox);
        await expect(component).toHaveScreenshot();
      });
    });
  });

  test("close button functionality", async ({ mount }) => {
    const props: ESAlertProps = {
      title: "test button close",
      children: "n/a",
      variant: "info",
      onClickClose: () => console.log("Alert closed"),
    };
    const component = await mount(<ESAlert {...props} />);
    const closeButton = component.locator("button");
    await closeButton.click(); // test will fail if button is not found and can't be clicked
  });
});
