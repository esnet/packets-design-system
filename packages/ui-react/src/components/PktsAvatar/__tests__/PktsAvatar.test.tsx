import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
import PktsAvatar from "../PktsAvatar";
import { PktsAvatarProps } from "../PktsAvatar.types";
import exampleImage from "./test_avatar.png";

test.describe("PktsAvatar", () => {
  const { testTable, themes }: ComponentTestTableType<PktsAvatarProps> = {
    testTable: [
      {
        name: "default-image",
        props: {
          alt: "Ernest Lawrence",
          src: exampleImage,
          backgroundColor: "lime",
        },
      },
      {
        name: "fallback",
        props: {
          alt: "Ernest Lawrence",
          src: "invalid-image-source",
          backgroundColor: "grape",
        },
      },
    ],
    themes: ["light"],
    actionStates: [],
  };

  testTable.forEach(({ name, props }) => {
    themes.forEach((theme) => {
      const testBox = (
        <ComponentTestBox component={<PktsAvatar {...props} />} theme={theme} />
      );
      test(`${name}`, async ({ mount }) => {
        const component = await mount(testBox);
        await expect(component).toHaveScreenshot();
      });
    });
  });

  // for these test screenshots, you'll see a bit of the background color on the edges, likely a CSS rounding error, can't seem to fix
  // not a big issue anyway since it's impossible to see with the naked eye
  const sizes = ["small", "large"];
  sizes.forEach((size) => {
    test(`size-${size}`, async ({ mount }) => {
      const component = await mount(
        <ComponentTestBox
          component={
            <PktsAvatar
              alt="Ernest Lawrence"
              size={size as any}
              src={exampleImage}
              backgroundColor="berry"
            />
          }
        />,
      );
      await expect(component).toHaveScreenshot();
    });
  });
});
