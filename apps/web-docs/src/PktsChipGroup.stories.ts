import type { Meta, StoryObj } from "@storybook/web-components";
import { PktsChip, PktsChipGroup } from "@esnet/packets-ui-web";

const meta: Meta<typeof PktsChipGroup> = {
  title: "Components/PktsChipGroup",
  component: PktsChipGroup.tagName,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
    },
  },
  render: (args) => {
    const group = document.createElement(PktsChipGroup.tagName) as InstanceType<
      typeof PktsChipGroup
    >;
    if (args.className) group.className = args.className;

    const labels = ["Chip One", "Chip Two", "Chip Three"];
    labels.forEach((label) => {
      const chip = document.createElement(PktsChip.tagName) as InstanceType<
        typeof PktsChip
      >;
      chip.textContent = label;
      group.appendChild(chip);
    });

    return group;
  },
};

export default meta;

type Story = StoryObj<typeof PktsChipGroup>;

export const Default: Story = {
  name: "Default PktsChipGroup",
  args: {},
};

export const OutlineChips: Story = {
  name: "Outline Chips",
  render: () => {
    const group = document.createElement(PktsChipGroup.tagName) as InstanceType<
      typeof PktsChipGroup
    >;

    const labels = ["Chip One", "Chip Two", "Chip Three"];
    labels.forEach((label) => {
      const chip = document.createElement(PktsChip.tagName) as InstanceType<
        typeof PktsChip
      >;
      chip.variant = "outline";
      chip.textContent = label;
      group.appendChild(chip);
    });

    return group;
  },
};

export const DeletableChips: Story = {
  name: "Deletable Chips",
  render: () => {
    const group = document.createElement(PktsChipGroup.tagName) as InstanceType<
      typeof PktsChipGroup
    >;

    const labels = ["Remove Me", "Delete Me", "Dismiss Me"];
    labels.forEach((label) => {
      const chip = document.createElement(PktsChip.tagName) as InstanceType<
        typeof PktsChip
      >;
      chip.deletable = true;
      chip.textContent = label;
      group.appendChild(chip);
    });

    return group;
  },
};

export const RoundedChips: Story = {
  name: "Rounded Chips",
  render: () => {
    const group = document.createElement(PktsChipGroup.tagName) as InstanceType<
      typeof PktsChipGroup
    >;

    const labels = ["Chip One", "Chip Two", "Chip Three"];
    labels.forEach((label) => {
      const chip = document.createElement(PktsChip.tagName) as InstanceType<
        typeof PktsChip
      >;
      chip.rounded = true;
      chip.textContent = label;
      group.appendChild(chip);
    });

    return group;
  },
};
