import type { Meta, StoryObj } from "@storybook/react-vite";
import { ESAvatar } from "@esnet/packets-ui-react";
import { ESChip } from "@esnet/packets-ui-react/src/components/ESChip/ESChip.tsx";
import * as React from "react";
import { Apple, Banana } from "lucide-react";

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
    children: "Chip Label",
  },
};

export default meta;

type Story = StoryObj<typeof ESChip>;

export const Default: Story = {};

export const HasDifferentOnClickAndOnDelete: Story = {
  args: {
    onClick: () => alert("clicked"),
    onDelete: (e: React.MouseEvent) => {
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
    children: "Fruits",
    prepend: <Apple />,
    append: <Banana />,
  },
};

export const HasAvatarPrepended: Story = {
  args: {
    children: "Circuit 124",
    prepend: (
      <ESAvatar alt="Ernest Lawrence" size="small" backgroundColor="grape" />
    ),
    onDelete: () => {},
  },
};

export const Rectangular: Story = {
  args: {
    children: "Filter: Spring 2024 Deadlines",
    onDelete: () => {},
    rounded: false,
  },
};

export const RectangularWithAvatarImagePrepended: Story = {
  args: {
    children: "Filter: Spring 2024 Deadlines",
    prepend: (
      <ESAvatar
        src="/imgs/fpo-avatars/small.png"
        alt="Ernest Lawrence"
        size="small"
        backgroundColor="grape"
      />
    ),

    rounded: false,
  },
};
