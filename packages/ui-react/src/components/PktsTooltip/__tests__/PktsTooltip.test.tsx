import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { PktsTooltipProps } from "../PktsTooltip.types";
import PktsTooltip from "../PktsTooltip";

test.describe("PktsTooltip", () => {
  const { testTable, themes }: ComponentTestTableType<PktsTooltipProps> = {
    testTable: [
      {
        name: "default",
        props: {
          anchor: <p data-testid="hover">Hover me</p>,
          title: "Long Tooltip",
          children:
            "This is a tooltip with a longer piece of text that should wrap around and have a maximum length forcing the text to wrap around. It should also have an X button.",
          onClickX: () => {},
        },
      },
    ],
    themes: ["light", "dark"],
    actionStates: [],
  };

  const testBoxStyles = { height: 200, width: 300 };

  testTable.forEach(({ name, props }) => {
    themes.forEach((theme) => {
      test(`${name}-${theme}`, async ({ mount }) => {
        // due to the custom nature of the positioning test, utilize a custom testBox
        const testBox = (
          <div className={theme} style={testBoxStyles}>
            <PktsTooltip {...props} />
          </div>
        );
        const component = await mount(testBox);
        await component.getByTestId("hover").hover();
        await expect(component).toHaveScreenshot();
      });
    });
  });

  test("PktsTooltip-positioning", async ({ page, mount }) => {
    const testBox = (
      <div
        style={{
          ...testBoxStyles,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <PktsTooltip
          anchor={
            <p
              style={{ marginLeft: "auto", marginTop: "auto" }}
              data-testid="hover"
            >
              Hover me
            </p>
          }
        >
          tooltip should be above anchor as to not clip outside test box
        </PktsTooltip>
      </div>
    );
    await page.setViewportSize({ width: 300, height: 200 });
    const component = await mount(testBox);
    await component.getByTestId("hover").hover();
    await expect(component).toHaveScreenshot();
  });
});
