/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from "@storybook/react";
import { ESChipGroup, ESChip, ESIcon, ESAvatar } from "@esnet/packets-ui";
import { fn } from "@storybook/test";

const meta: Meta<typeof ESChipGroup> = {
  title: "Components/ESChipGroup",
  component: ESChipGroup,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  parameters: {
    design: {
      type: "figma",
      url: "figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=2906-745&t=atewDrvZ1x7UWesH-0",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ESChipGroup>;

export const Example: Story = {
  args: {
    children: (
      <>
        <ESChip label="Foo Chip" />
        <ESChip label="Bar Chip" />
        <ESChip label="Baz Chip" />
      </>
    ),
  },
};

export const Example2: Story = {
  args: {
    children: Array.from({ length: 25 }, (_, i) => (
      <ESChip
        label={`CHIP-${i.toString().padStart(6, "0")}`}
        key={i}
        prepend={<ESAvatar alt={i.toString().padStart(2, "0")} size="small" />}
        variant="outline"
        rounded={false}
        onDelete={fn()}
      />
    )),
  },
};

export const Example3: Story = {
  args: {
    children: [
      "bookmark",
      "bookmark-check",
      "bookmark-minus",
      "bookmark-plus",
      "bookmark-x",
    ].map((icon) => (
      <>
        <ESChip
          prepend={<ESIcon name={icon as any} />}
          label={icon}
          onDelete={fn()}
        />
        <ESChip
          prepend={<ESIcon name={icon as any} />}
          label={icon}
          onDelete={fn()}
        />
      </>
    )),
  },
};
