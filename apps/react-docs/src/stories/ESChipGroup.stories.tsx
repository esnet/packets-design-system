/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ESChip } from "@esnet/packets-ui/src/components/ESChip/ESChip.tsx";
import { ESChipGroup } from "@esnet/packets-ui/src/components/ESChipGroup/ESChipGroup.tsx";
import { ESAvatar, ESIcon } from "@esnet/packets-ui";

const meta: Meta<typeof ESChipGroup> = {
  title: "Components/ESChipGroup",
  component: ESChipGroup,
  tags: ["autodocs"],
  subcomponents: { ESChip },
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
    children: [
      <ESChip>Foo Chip</ESChip>,
      <ESChip>Bar Chip</ESChip>,
      <ESChip>Baz Chip</ESChip>,
      <div>This gets filtered out as is not rendered.</div>,
    ],
  },
};

export const Example2: Story = {
  args: {
    children: Array.from({ length: 24 }, (_, i) => (
      <ESChip
        key={i}
        prepend={<ESAvatar alt={i.toString().padStart(2, "0")} size="small" />}
        variant="outline"
        rounded={false}
        onDelete={() => {}}
      >{`CHIP-${i.toString().padStart(6, "0")}`}</ESChip>
    )),
  },
};

export const SeveralVariants: Story = {
  args: {
    children: Array.from({ length: 9 }).map((_, i) => (
      <ESChip
        variant={i % 2 === 0 ? "outline" : "primary"}
        rounded={i % 3 === 0}
        onDelete={i % 5 === 0 ? () => {} : undefined}
        prepend={i % 7 === 0 ? <ESAvatar alt="CH" size="small" /> : undefined}
        key={i}
      >
        CHIP-XYZ{`${i}`.repeat(i + 1)}
      </ESChip>
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
    ].map((icon) => [
      <ESChip prepend={<ESIcon name={icon as any} />} onDelete={() => {}}>
        {icon}
      </ESChip>,
      <ESChip prepend={<ESIcon name={icon as any} />} onDelete={() => {}}>
        {icon}
      </ESChip>,
    ]),
  },
};
