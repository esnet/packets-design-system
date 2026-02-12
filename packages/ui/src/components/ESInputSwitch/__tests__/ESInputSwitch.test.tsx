import * as React from "react";
import ESInputSwitch from "../ESInputSwitch";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";

test.describe("ESInputSwitch", () => {
  ["light", "dark"].forEach((theme: any) => {
    const testBox = (
      <ComponentTestBox
        theme={theme}
        component={
          <table
            style={{
              borderCollapse: "collapse",
              borderSpacing: 0,
              margin: 0,
              padding: 0,
              lineHeight: 0,
            }}
          >
            <tbody>
              {/* --- Default --- */}
              <tr>
                <td style={{ padding: "8px", border: "none" }}>
                  <ESInputSwitch variant="primary" />
                </td>
                <td style={{ padding: "8px", border: "none" }}>
                  <ESInputSwitch variant="secondary" />
                </td>
              </tr>
              <tr>
                <td style={{ padding: "8px", border: "none" }}>
                  <ESInputSwitch variant="primary" defaultChecked />
                </td>
                <td style={{ padding: "8px", border: "none" }}>
                  <ESInputSwitch variant="secondary" defaultChecked />
                </td>
              </tr>

              {/* --- Disabled --- */}
              <tr>
                <td style={{ padding: "8px", border: "none" }}>
                  <ESInputSwitch variant="primary" disabled />
                </td>
                <td style={{ padding: "8px", border: "none" }}>
                  <ESInputSwitch variant="secondary" disabled />
                </td>
              </tr>
              <tr>
                <td style={{ padding: "8px", border: "none" }}>
                  <ESInputSwitch variant="primary" disabled defaultChecked />
                </td>
                <td style={{ padding: "8px", border: "none" }}>
                  <ESInputSwitch variant="secondary" disabled defaultChecked />
                </td>
              </tr>

              {/* --- NoIcon --- */}
              <tr>
                <td style={{ padding: "8px", border: "none" }}>
                  <ESInputSwitch variant="primary" noIcon />
                </td>
                <td style={{ padding: "8px", border: "none" }}>
                  <ESInputSwitch variant="secondary" noIcon />
                </td>
              </tr>
              <tr>
                <td style={{ padding: "8px", border: "none" }}>
                  <ESInputSwitch variant="primary" defaultChecked noIcon />
                </td>
                <td style={{ padding: "8px", border: "none" }}>
                  <ESInputSwitch variant="secondary" defaultChecked noIcon />
                </td>
              </tr>

              {/* --- Interactions (Hover & Focus) --- */}
              <tr>
                <td style={{ padding: "8px", border: "none" }}>
                  <ESInputSwitch
                    defaultChecked
                    variant="primary"
                    data-testid="test-hover"
                  />
                </td>
                <td style={{ padding: "8px", border: "none" }}>
                  <ESInputSwitch
                    defaultChecked
                    variant="secondary"
                    data-testid="test-focus"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        }
      />
    );
    test(`switches-${theme}`, async ({ mount }) => {
      const component = await mount(testBox);

      await component.getByTestId("test-hover").hover();
      await component.getByTestId("test-focus").focus();

      await expect(component).toHaveScreenshot();
    });
  });

  // test that radio buttons with same name are grouped together
  test("functions", async ({ mount }) => {
    const component = (await mount(<ESInputSwitch />)).locator("input");
    await component.click();
    await expect(component).toBeChecked();
    await component.click();
    await expect(component).not.toBeChecked();
  });
});
