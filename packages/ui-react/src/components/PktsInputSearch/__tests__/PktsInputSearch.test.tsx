import { test, expect } from "@playwright/experimental-ct-react";
import React from "react";

import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { PktsInputSearchProps } from "../PktsInputSearch.types";
import PktsInputSearch from "../PktsInputSearch";

test.describe("ESInputSearch", () => {
  const {
    testTable,
    themes,
    actionStates,
  }: ComponentTestTableType<PktsInputSearchProps> = {
    testTable: [
      {
        name: "primary",
        props: { variant: "primary", placeholder: "primary search" },
      },
      {
        name: "branded",
        props: { variant: "branded", placeholder: "branded search" },
      },
    ],
    themes: ["light", "dark"],
    // actionStates: [],
    actionStates: ["hover"],
  };

  testTable.forEach(({ name, props }) => {
    themes.forEach((theme) => {
      let themedComponent = (
        <div style={{ padding: "8px" }}>
          <PktsInputSearch {...props} />
        </div>
      );
      if (theme === "dark") {
        themedComponent = <div className="dark">{themedComponent}</div>;
      }
      test(`${name}-${theme}`, async ({ mount }) => {
        const component = await mount(themedComponent);
        await expect(component).toHaveScreenshot();
      });
      actionStates.forEach((state) => {
        test(`${name}-${theme}-${state}`, async ({ mount }) => {
          const component = await mount(themedComponent);
          const input = component.locator("input[type='search']");
          if (state === "focus") await input.focus();
          if (state === "hover" || state === "active") await input.hover();
          if (state === "active") await input.press("Space");
          await expect(component).toHaveScreenshot();
        });
      });
    });
  });

  test("icon clears", async ({ mount }) => {
    const component = await mount(<PktsInputSearch />);
    const input = component.locator("input[type='search']");
    const clearIcon = component.locator("svg");

    await input.fill("test@example.com");
    await expect(input).toHaveValue("test@example.com");

    await clearIcon.click();

    await expect(input).toHaveValue("");
  });
});
