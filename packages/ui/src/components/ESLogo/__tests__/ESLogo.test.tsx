import { test, expect } from "@playwright/experimental-ct-react";
import React from "react";
import { ESLogo } from "../ESLogo";
import { ESLogoProps } from "../ESLogo.types";

test.describe("ESLogo", () => {
  const colors: ESLogoProps["color"][] = ["color", "black", "white"];

  colors.forEach((color) => {
    test(`fullname-${color}`, async ({ mount }) => {
      const container = await mount(
        <div className={color} style={{ width: "fit-content" }}>
          <ESLogo color={color} variant="fullname" />
        </div>
      );

      await expect(container).toHaveScreenshot();
    });
  });
});
