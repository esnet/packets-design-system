import { test, expect } from "@playwright/experimental-ct-react";
import React from "react";
import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { ESAccordionProps } from "../ESAccordion.types";
import { ESAccordion } from "../ESAccordion";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
import ESIcon from "../../ESIcon";

test.describe("ESAccordion", () => {
  const { testTable, themes }: ComponentTestTableType<ESAccordionProps> = {
    testTable: [
      {
        name: "primary",
        props: {
          open: true,
          title: "Primary Accordion",
          children: <div>Primary accordion content</div>,
          footer: "Primary footer",
          variant: "primary",
          actionButtons: [
            <ESIcon
              key="1"
              onClick={() => alert("clicked on eye")}
              name="eye"
            />,
            <ESIcon
              key="2"
              onClick={() => alert("clicked on trash")}
              name="trash"
            />,
          ],
        },
      },
      {
        name: "inline",
        props: {
          open: true,
          title: "Inline Accordion",
          children: <div>Inline accordion content</div>,
          footer: false,
          variant: "inline",
          actionButtons: (
            <ESIcon onClick={() => alert("clicked on eye")} name="apple" />
          ),
        },
      },
    ],
    themes: ["light", "dark"],
    actionStates: [],
  };

  testTable.forEach(({ name, props }) => {
    themes.forEach((theme) => {
      let testBox = (
        <ComponentTestBox
          component={<ESAccordion {...props} />}
          theme={theme}
          size="medium"
        />
      );

      test(`${name}-${theme}`, async ({ mount }) => {
        const component = await mount(testBox);
        await expect(component).toHaveScreenshot();
      });
    });
  });

  test(`close`, async ({ mount }) => {
    const component = await mount(
      <ComponentTestBox
        component={
          <ESAccordion title="Closed Accordion" footer="Text should be invis">
            Text
          </ESAccordion>
        }
        size="medium"
      />
    );

    await component.getByRole("button").click();
    await expect(component).toHaveScreenshot();
  });
});
