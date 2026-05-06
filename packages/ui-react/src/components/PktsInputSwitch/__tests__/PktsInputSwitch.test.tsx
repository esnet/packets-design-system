import * as React from "react";
import PktsInputSwitch from "../PktsInputSwitch";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";

test.describe("PktsInputSwitch", () => {
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
                  <PktsInputSwitch variant="primary" />
                </td>
                <td style={{ padding: "8px", border: "none" }}>
                  <PktsInputSwitch variant="secondary" />
                </td>
              </tr>
              <tr>
                <td style={{ padding: "8px", border: "none" }}>
                  <PktsInputSwitch variant="primary" defaultChecked />
                </td>
                <td style={{ padding: "8px", border: "none" }}>
                  <PktsInputSwitch variant="secondary" defaultChecked />
                </td>
              </tr>

              {/* --- Disabled --- */}
              <tr>
                <td style={{ padding: "8px", border: "none" }}>
                  <PktsInputSwitch variant="primary" disabled />
                </td>
                <td style={{ padding: "8px", border: "none" }}>
                  <PktsInputSwitch variant="secondary" disabled />
                </td>
              </tr>
              <tr>
                <td style={{ padding: "8px", border: "none" }}>
                  <PktsInputSwitch variant="primary" disabled defaultChecked />
                </td>
                <td style={{ padding: "8px", border: "none" }}>
                  <PktsInputSwitch variant="secondary" disabled defaultChecked />
                </td>
              </tr>

              {/* --- NoIcon --- */}
              <tr>
                <td style={{ padding: "8px", border: "none" }}>
                  <PktsInputSwitch variant="primary" noIcon />
                </td>
                <td style={{ padding: "8px", border: "none" }}>
                  <PktsInputSwitch variant="secondary" noIcon />
                </td>
              </tr>
              <tr>
                <td style={{ padding: "8px", border: "none" }}>
                  <PktsInputSwitch variant="primary" defaultChecked noIcon />
                </td>
                <td style={{ padding: "8px", border: "none" }}>
                  <PktsInputSwitch variant="secondary" defaultChecked noIcon />
                </td>
              </tr>

              {/* --- Interactions (Hover & Focus) --- */}
              <tr>
                <td style={{ padding: "8px", border: "none" }}>
                  <PktsInputSwitch
                    defaultChecked
                    variant="primary"
                    data-testid="test-hover"
                  />
                </td>
                <td style={{ padding: "8px", border: "none" }}>
                  <PktsInputSwitch
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

  test("functions", async ({ mount }) => {
    const component = (await mount(<PktsInputSwitch />)).locator("input");
    await component.click();
    await expect(component).toBeChecked();
    await component.click();
    await expect(component).not.toBeChecked();
  });
});
// TODO: rerun test screenshots for this test
