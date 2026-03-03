// TODO: Move this to wherever it needs to go
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta = {
  title: "Design Tokens/Surfaces",

  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj;

const bgLayout: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  rowGap: 8,
  padding: 0,
};
const surfaceLayout: React.CSSProperties = {
  ...bgLayout,
  padding: 16,
  borderRadius: 16,
};

/**
 * By default, surface elements with surface parents will have a smooth visible separation.
 *
 * Text colors are also shown for comparison. The normal text is the copy color, while the footer text is copy alt color.
 */
export const Default: Story = {
  render: () => {
    return (
      <div style={bgLayout}>
        Background (from packets class)
        <div className="surface" style={surfaceLayout}>
          Surface 1 (className="surface")
          <div className="surface" style={surfaceLayout}>
            Surface 2 (className="surface")
            <footer className="e">Footer text</footer>
          </div>
          <footer className="e">Footer text</footer>
        </div>
        <footer className="e">Footer text</footer>
      </div>
    );
  },
};

/**
 * Avoid explicitly using the specific surface utility classes when possible.
 */
export const Explicit: Story = {
  render: () => {
    return (
      <div style={bgLayout}>
        <div className="surface1" style={surfaceLayout}>
          Surface 1 (className="surface1")
          <div className="surface2" style={surfaceLayout}>
            Surface 2 (className="surface2")
          </div>
        </div>
      </div>
    );
  },
};
