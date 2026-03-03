import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/PktsChip',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'outline'],
    },
    rounded: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
  },
  render: (args) => {
    const chip = document.createElement('div');
    const classes = ['pkts-chip'];

    if (args.variant) classes.push(`pkts-${args.variant}`);
    if (args.rounded) classes.push('pkts-rounded');

    chip.className = classes.join(' ');
    chip.textContent = args.label || 'Chip';

    return chip;
  },
};

export default meta;

type Story = StoryObj;

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Primary Chip',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    label: 'Outline Chip',
  },
};

export const Rounded: Story = {
  args: {
    variant: 'primary',
    label: 'Rounded Chip',
    rounded: true,
  },
};
