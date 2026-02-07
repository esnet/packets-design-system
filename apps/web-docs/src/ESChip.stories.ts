import type { Meta, StoryObj } from '@storybook/web-components';
import { ESChip } from "@esnet/packets-ui-web";

const meta: Meta<typeof ESChip> = {
  title: 'Components/ESChip',
  component: ESChip.tagName,
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
    const chip = document.createElement(ESChip.tagName) as InstanceType<typeof ESChip>;
    if (args.variant) chip.variant = args.variant;
    if (args.rounded) chip.rounded = args.rounded;
    if (args.deletable) chip.deletable = args.deletable;
    if (args.label) chip.textContent = args.label;
    return chip;
  },
};

export default meta;

type Story = StoryObj<typeof ESChip>;

export const Primary: Story = {
  name: "Primary ESChip",
  args: {
    variant: 'primary',
    label: 'Primary Chip',
  },
};

export const Outline: Story = {
  name: "Outline ESChip",
  args: {
    variant: 'outline',
    label: 'Outline Chip',
  },
};

export const Deletable: Story = {
  name: "Deletable ESChip",
  args: {
    variant: 'primary',
    label: 'Delete Chip',
    deletable: true,
  },
};

export const Rounded: Story = {
  name: "Rounded ESChip",
  args: {
    variant: 'primary',
    label: 'Rounded Chip',
    rounded: true,
  },
};
