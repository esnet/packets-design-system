import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
import PktsAvatar from "../PktsAvatar";
import exampleImage from "./test_avatar.png";

test.describe("PktsAvatar", () => {
  ["light", "dark"].forEach((theme: any) => {
    test(`PktsAvatar-variants-${theme}`, async ({ mount }) => {
      const component = await mount(
        <ComponentTestBox
          theme={theme}
          component={
            <div
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <PktsAvatar
                alt="EL"
                src={exampleImage}
                backgroundColor="lime"
                size="small"
              />
              <PktsAvatar alt="EL" src={exampleImage} backgroundColor="lime" />
              <PktsAvatar
                alt="EL"
                src={exampleImage}
                backgroundColor="lime"
                size="large"
              />
              <PktsAvatar
                alt="EL"
                src="invalid-image-source"
                backgroundColor="grape"
                size="small"
              />
              <PktsAvatar
                alt="EL"
                src="invalid-image-source"
                backgroundColor="grape"
              />
              <PktsAvatar
                alt="EL"
                src="invalid-image-source"
                backgroundColor="grape"
                size="large"
              />
            </div>
          }
        />,
      );
      await expect(component).toHaveScreenshot(
        `PktsAvatar-variants-${theme}.png`,
      );
    });
  });
});
