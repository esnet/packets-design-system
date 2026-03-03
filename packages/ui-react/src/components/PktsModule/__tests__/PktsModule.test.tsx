import { test, expect } from "@playwright/experimental-ct-react";
import React from "react";

import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { PktsModuleProps } from "../PktsModule.types";
import PktsModule from "../PktsModule";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";

test.describe("ESModule", () => {
  const { testTable, themes }: ComponentTestTableType<PktsModuleProps> = {
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
      {
        name: "nested",
        props: {
          title: "Modules Nested Inside a Module",
          children: (
            <>
              <PktsModule title="Inner Module 1 (No Surface)">
                Sample Text No Surface
              </PktsModule>
              <PktsModule title="Inner Module 2 (Surface)" surface>
                Sample Text Surface
              </PktsModule>
            </>
          ),
          style: { display: "flex", flexDirection: "column", gap: "2rem" },
          surface: true,
        },
      },
    ],
    actionStates: [],
    themes: ["light", "dark"],
  };

  testTable.forEach(({ name, props }) => {
    themes.forEach((theme) => {
      const testBox = (
        <ComponentTestBox component={<PktsModule {...props} />} theme={theme} />
      );
      test(`${name}-${theme}`, async ({ mount }) => {
        const component = await mount(testBox);
        await expect(component).toHaveScreenshot();
      });
    });
  });

  test("media-size-small", async ({ mount }) => {
    const raw = (
      <PktsModule title="Small Media Size Styling">
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
      </PktsModule>
    );
    const component = await mount(
      <ComponentTestBox component={raw} size="small" />,
    );
    await expect(component).toHaveScreenshot();
  });
});
