import { ESIcon } from "@esnet/packets-ui";
import type { Meta, StoryObj } from "@storybook/react";

/**
 * Packets uses Lucide icons. See Design Tokens / Icons for available icons, and Components / ESIcon on how to use.
 *
 * In the event you need an icon for any of these terms, use these rather than looking for a custom one. Avoid using icons that are not a part of the selected icon set.
 */
const meta: Meta = {
  title: "RichText/Iconography",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1rem",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      <span>Server</span>
      <ESIcon name="server" />
      <span>Atom / Science</span>
      <ESIcon name="atom" />
      <span>Database</span>
      <ESIcon name="database" />
      <span>Cloud (Upload)</span>
      <ESIcon name="cloud-upload" />
      <span>Computer</span>
      <ESIcon name="computer" />
    </div>
  ),
};
