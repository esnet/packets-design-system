import type { Meta, StoryObj } from "@storybook/react";
import { Atom, CloudUpload, Computer, Database, Server } from "lucide-react";

/**
 * Packets uses [Lucide icons](https://lucide.dev/), which supports tree-shaking. Import Lucide icons for React as such: ```npm add lucide-react```.
 *
 * Packets also supplies global styling to Lucide icons via the `.lucide` class in order to standardize color.
 *
 * See Design Tokens / Icons for available icons, and then simply import them from the Lucide library.
 *
 * In the event you need an icon for any of these terms, use these specific ones rather than looking for a custom one. Avoid using icons that are not a part of the selected icon set.
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
      <Server />
      <span>Atom / Science</span>
      <Atom />
      <span>Database</span>
      <Database />
      <span>Cloud (Upload)</span>
      <CloudUpload />
      <span>Computer</span>
      <Computer />
    </div>
  ),
};
