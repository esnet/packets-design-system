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
      {
        name: "different-rendering",
        props: {
          breadcrumbs: breadcrumbs,
          renderLink: (linkProps) => linkProps.children,
          // renderLink: (linkProps) => <a {...linkProps}>{linkProps.children}</a>,
        },
      },
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
        await expect(component).toHaveScreenshot();
      });
    });
  });
});
