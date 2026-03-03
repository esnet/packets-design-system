import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/PktsButton',
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'tertiary', 'branded', 'destructive'],
    },
    disabled: {
      control: 'boolean',
    },
  },
  render: (args) => {
    const button = document.createElement('button');
    button.className = `pkts-button pkts-${args.variant || 'primary'}`;
    button.textContent = args.label || 'Button';
    if (args.disabled) button.disabled = true;
    return button;
  },
};

export default meta;

type Story = StoryObj;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    label: 'Tertiary Button',
    variant: 'tertiary',
  },
};

export const Branded: Story = {
  args: {
    label: 'Branded Button',
    variant: 'branded',
  },
};

export const Destructive: Story = {
  args: {
    label: 'Destructive Button',
    variant: 'destructive',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
};
