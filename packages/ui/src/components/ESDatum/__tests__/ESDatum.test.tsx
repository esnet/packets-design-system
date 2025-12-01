import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { ESDatumProps } from "../ESDatum.types";
import * as React from "react";
import ESDatum from "../ESDatum";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";

test.describe("ESDatum", () => {
  const { testTable, themes }: ComponentTestTableType<ESDatumProps> = {
    testTable: [
      {
        name: "title",
        props: {
          title: "Datum with a title",
          children: (
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
              diam vulputate ut pharetra sit amet aliquam. Risus nullam eget
              felis eget nunc lobortis. Vel eros donec ac odio tempor orci
              dapibus ultrices in. Arcu non sodales neque sodales ut etiam.
              Eleifend donec pretium vulputate sapien nec sagittis aliquam
              malesuada bibendum. Aenean euismod elementum nisi quis eleifend.
              Ultrices eros in cursus turpis massa tincidunt. Donec adipiscing
              tristique risus nec feugiat. Imperdiet sed euismod nisi porta
              lorem mollis. Vel fringilla est ullamcorper eget nulla facilisi
              etiam dignissim. Posuere morbi leo urna molestie at. In arcu
              cursus euismod quis viverra nibh cras pulvinar mattis. Aliquet nec
              ullamcorper sit amet. Aliquet sagittis id consectetur purus ut.
              Fermentum leo vel orci porta non pulvinar neque laoreet
              suspendisse. Sed risus pretium quam vulputate dignissim
              suspendisse. Pretium aenean pharetra magna ac placerat vestibulum
              lectus mauris ultrices. Volutpat lacus laoreet non curabitur
              gravida arcu ac tortor dignissim. Enim sit amet venenatis urna
              cursus eget nunc scelerisque.
            </p>
          ),
        },
      },
      {
        name: "no-title",
        props: {
          children: (
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
              diam vulputate ut pharetra sit amet aliquam. Risus nullam eget
              felis eget nunc lobortis. Vel eros donec ac odio tempor orci
              dapibus ultrices in. Arcu non sodales neque sodales ut etiam.
              Eleifend donec pretium vulputate sapien nec sagittis aliquam
              malesuada bibendum. Aenean euismod elementum nisi quis eleifend.
              Ultrices eros in cursus turpis massa tincidunt. Donec adipiscing
              tristique risus nec feugiat. Imperdiet sed euismod nisi porta
              lorem mollis. Vel fringilla est ullamcorper eget nulla facilisi
              etiam dignissim. Posuere morbi leo urna molestie at. In arcu
              cursus euismod quis viverra nibh cras pulvinar mattis. Aliquet nec
              ullamcorper sit amet. Aliquet sagittis id consectetur purus ut.
              Fermentum leo vel orci porta non pulvinar neque laoreet
              suspendisse. Sed risus pretium quam vulputate dignissim
              suspendisse. Pretium aenean pharetra magna ac placerat vestibulum
              lectus mauris ultrices. Volutpat lacus laoreet non curabitur
              gravida arcu ac tortor dignissim. Enim sit amet venenatis urna
              cursus eget nunc scelerisque.
            </p>
          ),
        },
      },
    ],
    themes: ["light", "dark"],
    actionStates: [],
  };

  testTable.forEach(({ name, props }) => {
    themes.forEach((theme) => {
      const testBox = (
        <ComponentTestBox component={<ESDatum {...props} />} theme={theme} />
      );
      test(`${name}-${theme}`, async ({ mount }) => {
        const component = await mount(testBox);
        await expect(component).toHaveScreenshot();
      });
    });
  });
});
