import type { Meta, StoryObj } from '@storybook/web-components';
import { PktsBadge } from "@esnet/packets-ui-web";

const meta: Meta<typeof PktsBadge> = {
  title: 'Components/PktsBadge',
  component: PktsBadge.tagName,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: "text",
    },
  },
  render: (args) => {
    const badge = document.createElement(PktsBadge.tagName) as InstanceType<typeof PktsBadge>;
    if (args.label) badge.textContent = args.label;
    return badge;
  },
};

export default meta;

type Story = StoryObj<typeof PktsBadge>;

export const Default: Story = {
  name: "PktsBadge",
  args: {
    label: '3',
  },
};

export const HighCount: Story = {
  name: "High Count Badge",
  args: {
    label: '99+',
  },
};

export const SingleDigit: Story = {
  name: "Single Digit Badge",
  args: {
    label: '5',
  },
};
