import { test, expect } from "@playwright/experimental-ct-react";
import React from "react";

import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { ESModuleProps } from "../ESModule.types";
import ESModule from "../ESModule";

test.describe("ESModule", () => {
  const { testTable, themes }: ComponentTestTableType<ESModuleProps> = {
    testTable: [
      {
        name: "children",
        props: {
          children: <p>Module content without a title.</p>,
          surface: true,
        },
      },
      {
        name: "surface",
        props: {
          title: "Module title",
          children: (
            <p>
              Module content: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Integer eget aliquet nibh praesent tristique. Sem et
              tortor consequat id. Turpis in eu mi bibendum neque. Vel turpis
              nunc eget lorem dolor sed viverra. Urna condimentum mattis
              pellentesque id. Quisque id diam vel quam elementum pulvinar
              etiam. Ullamcorper a lacus vestibulum sed arcu non. Nulla facilisi
              cras fermentum odio eu. Aenean sed adipiscing diam donec
              adipiscing tristique risus nec feugiat. Et ultrices neque ornare
              aenean. Et malesuada fames ac turpis egestas sed tempus. Nam at
              lectus urna duis convallis convallis tellus id interdum. Commodo
              elit at imperdiet dui accumsan sit amet nulla facilisi. Tempus
              imperdiet nulla malesuada pellentesque elit eget gravida. Erat
              imperdiet sed euismod nisi porta. Pulvinar sapien et ligula
              ullamcorper malesuada proin libero nunc consequat. At urna
              condimentum mattis pellentesque id. Lacus viverra vitae congue eu.
              Purus sit amet luctus venenatis lectus magna.
            </p>
          ),
          surface: true,
        },
      },
    ],
    actionStates: [],
    themes: ["light", "dark"],
  };

  testTable.forEach(({ name, props }) => {
    themes.forEach((theme) => {
      let themedComponent = (
        <div className={theme}>
          <ESModule {...props} />
        </div>
      );
      test(`${name}-${theme}`, async ({ mount }) => {
        const component = await mount(themedComponent);
        await expect(component).toHaveScreenshot();
      });
    });
  });

  test("media-size-small", async ({ page, mount }) => {
    await page.setViewportSize({ width: 320, height: 480 });
    const component = await mount(
      <ESModule title="Small Media Size Styling">
        <p>
          Module content: Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Integer eget aliquet nibh praesent tristique. Sem et tortor
          consequat id. Turpis in eu mi bibendum neque. Vel turpis nunc eget
          lorem dolor sed viverra. Urna condimentum mattis pellentesque id.
          Quisque id diam vel quam elementum pulvinar etiam. Ullamcorper a lacus
          vestibulum sed arcu non. Nulla facilisi cras fermentum odio eu. Aenean
          sed adipiscing diam donec adipiscing tristique risus nec feugiat. Et
          ultrices neque ornare aenean. Et malesuada fames ac turpis egestas sed
          tempus. Nam at lectus urna duis convallis convallis tellus id
          interdum. Commodo elit at imperdiet dui accumsan sit amet nulla
          facilisi. Tempus imperdiet nulla malesuada pellentesque elit eget
          gravida. Erat imperdiet sed euismod nisi porta. Pulvinar sapien et
          ligula ullamcorper malesuada proin libero nunc consequat. At urna
          condimentum mattis pellentesque id. Lacus viverra vitae congue eu.
          Purus sit amet luctus venenatis lectus magna.
        </p>
      </ESModule>
    );
    await expect(component).toHaveScreenshot();
  });
});
