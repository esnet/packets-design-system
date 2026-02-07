import type { Meta, StoryObj } from '@storybook/web-components';
import { ESBadge } from "@esnet/packets-ui-web";

const meta: Meta<typeof ESBadge> = {
  title: 'Components/ESBadge',
  component: ESBadge.tagName,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: "text",
    },
  },
  render: (args) => {
    const badge = document.createElement(ESBadge.tagName) as InstanceType<typeof ESBadge>;
    if (args.label) badge.textContent = args.label;
    return badge;
  },
};

export default meta;

type Story = StoryObj<typeof ESBadge>;

export const Default: Story = {
  name: "ESBadge",
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
