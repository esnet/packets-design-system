import { test, expect } from "@playwright/experimental-ct-react";
import React from "react";
import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { PktsAccordionProps } from "../PktsAccordion.types";
import { PktsAccordion } from "../PktsAccordion";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
import { Apple, Eye, Trash } from "lucide-react";

test.describe("PktsAccordion", () => {
  const { testTable, themes }: ComponentTestTableType<PktsAccordionProps> = {
    testTable: [
      {
        name: "primary",
        props: {
          open: true,
          header: "Primary Accordion",
          children: <div>Primary accordion content</div>,
          footer: "Primary footer",
          variant: "primary",
          actionButtons: [
            <Eye key="1" onClick={() => alert("clicked on eye")} />,
            <Trash key="2" onClick={() => alert("clicked on trash")} />,
          ],
        },
      },
      {
        name: "inline",
        props: {
          open: true,
          header: "Inline Accordion",
          children: <div>Inline accordion content</div>,
          footer: false,
          variant: "inline",
          actionButtons: (
            <Apple onClick={() => console.log("test: clicked on apple")} />
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
          component={<PktsAccordion {...props} />}
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
          <PktsAccordion
            header="Closed Accordion"
            footer="Text should not be visible."
          >
            Text
          </PktsAccordion>
        }
        size="medium"
      />,
    );

    await component.getByRole("button").click();
    await expect(component).toHaveScreenshot();
  });
});
