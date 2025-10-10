import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { ESTooltipProps } from "../ESTooltip.types";
import ESTooltip from "../ESTooltip";

test.describe("ESTooltip", () => {
  const { testTable, themes }: ComponentTestTableType<ESTooltipProps> = {
    testTable: [
      {
        name: "default",
        props: {
          children: <p data-testid="hover">Hover me</p>,
          text: "This is a tooltip message.",
        },
      },
      {
        name: "long",
        props: {
          children: <p data-testid="hover">Hover me</p>,
          title: "Long Tooltip",
          text: "This is a tooltip with a longer piece of text that should wrap around and have a maximum length forcing the text to wrap around. It should also have an X button.",
          onClickX: () => {},
        },
      },
      {
        name: "positioning",
        props: {
          children: (
            <p
              style={{ marginLeft: "auto", marginTop: "auto" }}
              data-testid="hover"
            >
              Hover me
            </p>
          ),
          text: "tooltip",
        },
      },
    ],
    themes: ["light", "dark"],
    actionStates: ["hover"],
  };

  testTable.forEach(({ name, props }) => {
    themes.forEach((theme) => {
      const testBox = (
        <div className={theme} style={{ height: 200, width: 300 }}>
          <ESTooltip {...props} />
        </div>
      );

      test(`${name}-${theme}`, async ({ mount }) => {
        const component = await mount(testBox);
        await component.getByTestId("hover").hover();
        await expect(component).toHaveScreenshot();
      });
    });
  });
});
