/**
 * ComponentTestTableType defines the structure of a test table for component with ComponentProps.
 *
 * Due to some issue with Playwright's experimental component testing, we can't simply create a utility function that
 * takes in a component as an argument and tests it under every state, theme, etc.
 *
 * Thus, we unfortunately have to define the test table structure here, then copypaste boilerplate to
 * run these tests in every test file.
 *
 * The boilerplate looks like below for component ESComponent
 */

// import * as React from "react";
// import { test, expect } from "@playwright/experimental-ct-react";
// import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
// import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
// import { ESComponentProps } from "../ESComponent.types";
// import ESComponent from "../ESComponent";
// test.describe("ESComponent", () => {
//   const { testTable, themes, actionStates }: ComponentTestTableType<ESComponentProps> = {
//     testTable: [
//       {
//         name: "test-1",
//         props: {
//         },
//       },
//       {
//         name: "test-2",
//         props: {
//             // ...
//         },
//       },
//     ],
//     themes: ["light", "dark"],
//     actionStates: ["hover", "focus", "active"],
//   };
//   testTable.forEach(({ name, props }) => {
//     themes.forEach((theme) => {
//       const testBox = (
//         <ComponentTestBox component={<ESComponent {...props} />} theme={theme} />
//       );
//       test(`${name}-${theme}`, async ({ mount }) => {
//         const component = await mount(testBox);
//         await expect(component).toHaveScreenshot();
//       });
//       actionStates.forEach((state) => {
//         test(`${name}-${theme}-${state}`, async ({ mount }) => {
//           if (props.disabled) return; // skip if component is disabled

//           const component = await mount(testBox);
//           if (state === "focus") await component.focus();
//           if (state === "hover" || state === "active") await component.hover();
//           if (state === "active") await component.click();
//           await expect(component).toHaveScreenshot();
//         });
//       });
//     });
//   });
// });

type TestTableRow<ComponentProps> = {
  name: string;
  props: ComponentProps;
};

type Themes = "light" | "dark";

type ActionStates = "hover" | "focus" | "active";

export interface ComponentTestTableType<ComponentProps> {
  testTable: TestTableRow<ComponentProps>[];
  themes: Themes[];
  actionStates: ActionStates[];
}
