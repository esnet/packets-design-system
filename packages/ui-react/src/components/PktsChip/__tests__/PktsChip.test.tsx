import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
import PktsChip from "../PktsChip";
import PktsAvatar from "../../PktsAvatar/PktsAvatar";

const row: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
};

const cell: React.CSSProperties = {
  padding: "8px",
  whiteSpace: "nowrap",
};

test.describe("PktsChip", () => {
  (["light", "dark"] as const).forEach((theme) => {
    const grid = (
      <ComponentTestBox
        theme={theme}
        component={
          <div style={{ display: "inline-flex", flexDirection: "column" }}>
            {/* --- Variants, rounded --- */}
            <div style={row}>
              <div style={cell}>
                <PktsChip>Primary</PktsChip>
              </div>
              <div style={cell}>
                <PktsChip variant="outline">Outline</PktsChip>
              </div>
              <div style={cell}>
                <PktsChip onDelete={() => {}}>Delete</PktsChip>
              </div>
            </div>

            {/* --- Variants, not rounded --- */}
            <div style={row}>
              <div style={cell}>
                <PktsChip rounded={false}>Primary</PktsChip>
              </div>
              <div style={cell}>
                <PktsChip variant="outline" rounded={false}>
                  Outline
                </PktsChip>
              </div>
              <div style={cell}>
                <PktsChip rounded={false} onDelete={() => {}}>
                  Delete
                </PktsChip>
              </div>
            </div>

            {/* --- Avatar prepend (small size, not rounded per recommendation) --- */}
            <div style={row}>
              <div style={cell}>
                <PktsChip
                  rounded={false}
                  prepend={
                    <PktsAvatar size="small" alt="AB" backgroundColor="grape" />
                  }
                >
                  Avatar
                </PktsChip>
              </div>
              <div style={cell}>
                <PktsChip
                  variant="outline"
                  rounded={false}
                  prepend={
                    <PktsAvatar size="small" alt="CD" backgroundColor="lime" />
                  }
                >
                  Avatar
                </PktsChip>
              </div>
              <div style={cell}>
                <PktsChip
                  rounded={false}
                  prepend={
                    <PktsAvatar size="small" alt="EF" backgroundColor="berry" />
                  }
                  onDelete={() => {}}
                >
                  Avatar
                </PktsChip>
              </div>
            </div>

            {/* --- Interactions (hover & focus) --- */}
            <div style={row}>
              <div style={cell}>
                <PktsChip data-testid="test-hover">Hovered</PktsChip>
              </div>
              <div style={cell}>
                <PktsChip variant="outline" data-testid="test-focus">
                  Focused
                </PktsChip>
              </div>
              <div style={cell}>
                <PktsChip onDelete={() => {}}>Delete Hover</PktsChip>
              </div>
            </div>
          </div>
        }
      />
    );

    test(`chips-${theme}`, async ({ mount }) => {
      const component = await mount(grid);

      await component.getByTestId("test-hover").hover();
      await component.getByTestId("test-focus").focus();

      await expect(component).toHaveScreenshot();
    });
  });
});
