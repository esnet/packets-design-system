/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from "@storybook/react-vite";
import { PktsChip } from "@esnet/packets-ui-react/src/components/PktsChip/PktsChip.tsx";
import { PktsChipGroup } from "@esnet/packets-ui-react/src/components/PktsChipGroup/PktsChipGroup.tsx";
import { PktsAvatar } from "@esnet/packets-ui-react";
import {
  Bookmark,
  BookmarkCheck,
  BookmarkMinus,
  BookmarkPlus,
  BookmarkX,
} from "lucide-react";

const meta: Meta<typeof PktsChipGroup> = {
  title: "Components/PktsChipGroup",
  component: PktsChipGroup,
  tags: ["autodocs"],
  subcomponents: { PktsChip },
  parameters: {
    design: {
      type: "figma",
      url: "figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=2906-745&t=atewDrvZ1x7UWesH-0",
    },
  },
};

export default meta;

type Story = StoryObj<typeof PktsChipGroup>;

export const Example: Story = {
  args: {
    children: [
      <PktsChip>Foo Chip</PktsChip>,
      <PktsChip>Bar Chip</PktsChip>,
      <PktsChip>Baz Chip</PktsChip>,
      <div>This gets filtered out as is not rendered.</div>,
    ],
  },
};

export const Example2: Story = {
  args: {
    children: Array.from({ length: 24 }, (_, i) => (
      <PktsChip
        key={i}
        prepend={<PktsAvatar alt={i.toString().padStart(2, "0")} size="small" />}
        variant="outline"
        rounded={false}
        onDelete={() => {}}
      >{`CHIP-${i.toString().padStart(6, "0")}`}</PktsChip>
    )),
  },
};

export const SeveralVariants: Story = {
  args: {
    children: Array.from({ length: 9 }).map((_, i) => (
      <PktsChip
        variant={i % 2 === 0 ? "outline" : "primary"}
        rounded={i % 3 === 0}
        onDelete={i % 5 === 0 ? () => {} : undefined}
        prepend={i % 7 === 0 ? <PktsAvatar alt="CH" size="small" /> : undefined}
        key={i}
      >
        CHIP-XYZ{`${i}`.repeat(i + 1)}
      </PktsChip>
    )),
  },
};

export const Example3: Story = {
  args: {
    children: [
      <Bookmark />,
      <BookmarkCheck />,
      <BookmarkMinus />,
      <BookmarkPlus />,
      <BookmarkX />,
    ].map((icon) => [
      <PktsChip prepend={icon} onDelete={() => {}}>
        Chip Text
      </PktsChip>,
      <PktsChip prepend={icon} onDelete={() => {}}>
        Chip Text
      </PktsChip>,
    ]),
  },
};
