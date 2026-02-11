import type { Meta, StoryObj } from '@storybook/web-components';
import { PktsChip } from "@esnet/packets-ui-web";

const meta: Meta<typeof PktsChip> = {
  title: 'Components/PktsChip',
  component: PktsChip.tagName,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "outline"],
      defaultValue: "primary",
    },
    rounded: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    deletable: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    label: {
      control: "text",
    },
  },
  render: (args) => {
    const chip = document.createElement(PktsChip.tagName) as InstanceType<typeof PktsChip>;
    if (args.variant) chip.variant = args.variant;
    if (args.rounded) chip.rounded = args.rounded;
    if (args.deletable) chip.deletable = args.deletable;
    if (args.label) chip.textContent = args.label;
    return chip;
  },
};

export default meta;

type Story = StoryObj<typeof PktsChip>;

export const Primary: Story = {
  name: "Primary PktsChip",
  args: {
    variant: 'primary',
    label: 'Primary Chip',
  },
};

export const Outline: Story = {
  name: "Outline PktsChip",
  args: {
    variant: 'outline',
    label: 'Outline Chip',
  },
};

export const Deletable: Story = {
  name: "Deletable PktsChip",
  args: {
    variant: 'primary',
    label: 'Delete Chip',
    deletable: true,
  },
};

export const Rounded: Story = {
  name: "Rounded PktsChip",
  args: {
    variant: 'primary',
    label: 'Rounded Chip',
    rounded: true,
  },
};
