import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/PktsDivider',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'branded'],
    },
  },
  render: (args) => {
    const divider = document.createElement('hr');
    divider.className = `pkts-divider pkts-${args.variant || 'primary'}`;
    return divider;
  },
};

export default meta;

type Story = StoryObj;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Branded: Story = {
  args: {
    variant: 'branded',
  },
};
