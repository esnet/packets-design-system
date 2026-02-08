import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/ESDivider',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'branded'],
    },
  },
  render: (args) => {
    const divider = document.createElement('hr');
    divider.className = `es-divider es-${args.variant || 'primary'}`;
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
