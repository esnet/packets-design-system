import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/ESBadge',
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
  },
  render: (args) => {
    const badge = document.createElement('span');
    badge.className = 'es-badge';
    badge.textContent = args.label || '0';
    return badge;
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    label: '3',
  },
};

export const HighCount: Story = {
  args: {
    label: '99+',
  },
};

export const SingleDigit: Story = {
  args: {
    label: '5',
  },
};
