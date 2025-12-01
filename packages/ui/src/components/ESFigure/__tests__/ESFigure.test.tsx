import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
import { ESFigureProps } from "../ESFigure.types";
import ESFigure from "../ESFigure";
import testFigure from "./test_figure.png";

test.describe("ESFigure", () => {
  const { testTable, themes }: ComponentTestTableType<ESFigureProps> = {
    testTable: [
      {
        name: "img",
        props: {
          figure: <img width="300" src={testFigure} alt="ESnet Network Map" />,
          caption: "ESnet Network Map (300px)",
        },
      },
      {
        name: "caption",
        props: {
          figure: <img width="300" src={testFigure} alt="ESnet Network Map" />,
          caption: "ESnet Network Map (300px)",
          capitalize: true,
          italic: true,
          textAlign: "center",
        },
      },
    ],
    themes: ["light", "dark"],
    actionStates: [],
  };
  testTable.forEach(({ name, props }) => {
    themes.forEach((theme) => {
      const testBox = (
        <ComponentTestBox component={<ESFigure {...props} />} theme={theme} />
      );
      test(`${name}-${theme}`, async ({ mount }) => {
        const component = await mount(testBox);
        await expect(component).toHaveScreenshot();
      });
    });
  });
});
