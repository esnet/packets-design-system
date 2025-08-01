import type { Meta, StoryObj } from "@storybook/react";
import { ESChip, ESIcon } from "@esnet/packets-ui";
import { fn } from "@storybook/test";

const meta: Meta<typeof ESChip> = {
  title: "Components/ESChip",
  tags: ["autodocs"],
  component: ESChip,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=2521-42",
    },
  },
  args: {
    label: "Chip Label",
  },
};

export default meta;

type Story = StoryObj<typeof ESChip>;

export const Default: Story = {};

export const HasDifferentOnClickAndOnDelete: Story = {
  args: {
    onClick: () => alert("clicked"),
    onDelete: (e: MouseEvent) => {
      e.stopPropagation();
      alert("deleted");
    },
  },
};

export const OutlineVariant: Story = {
  args: {
    onClick: () => alert("clicked"),
    variant: "outline",
  },
};

export const HasIconPrepended: Story = {
  args: {
    // prepend: <ESAvatar size="small" label="EC" />,
    label: "Fruits",
    prepend: <ESIcon name="apple" />,
    append: <ESIcon name="banana" />,
  },
};

export const Rectangular: Story = {
  args: {
    label: "Filter: Spring 2024 Deadlines",
    onDelete: () => fn(),
    rounded: false,
  },
};
