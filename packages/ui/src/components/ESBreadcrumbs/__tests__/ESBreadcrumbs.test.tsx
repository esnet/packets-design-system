import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
import { ESBreadcrumbsProps } from "../ESBreadcrumbs.types";
import ESBreadcrumbs from "../ESBreadcrumbs";
import { defaultRenderLink } from "../../../lib/utils/link";

test.describe("ESBreadcrumbs", () => {
  const breadcrumbs = [
    {
      href: "/",
      children: "Home",
    },
    {
      href: "/circuits",
      children: "Circuits",
    },
    {
      href: "/circuits/THX-1138",
      children: "THX-1138",
    },
  ];
  const { testTable, themes }: ComponentTestTableType<ESBreadcrumbsProps> = {
    testTable: [
      {
        name: "default",
        props: {
          breadcrumbs,
        },
      },
      // playwright-ct is incapable of handling "live objects" like functions, thus it's not possible to test a custom renderLink easily
      // https://playwright.dev/docs/test-components#test-stories
      //   {
      //     name: "different-rendering",
      //     props: {
      //       breadcrumbs,
      //       renderLink: (linkProps) => (
      //         <h6>
      //           <a {...linkProps}>{linkProps.children}</a>
      //         </h6>
      //       ),
      //     },
      //   },
    ],
    themes: ["light", "dark"],
    actionStates: [],
  };
  testTable.forEach(({ name, props }) => {
    themes.forEach((theme) => {
      const testBox = (
        <ComponentTestBox
          component={<ESBreadcrumbs {...props} />}
          theme={theme}
        />
      );
      test(`${name}-${theme}`, async ({ mount }) => {
        const component = await mount(testBox);
        await component.getByRole("link").first().focus();
        await component.getByRole("link").nth(1).hover();
        await expect(component).toHaveScreenshot();
      });
    });
  });
});
