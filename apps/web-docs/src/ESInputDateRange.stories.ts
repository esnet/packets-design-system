import type { Meta, StoryObj } from '@storybook/web-components';
import { ESInputDateRange } from "@esnet/packets-ui-web";

const meta: Meta<typeof ESInputDateRange> = {
  title: 'Components/ESInputDateRange',
  component: ESInputDateRange.tagName,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "branded"],
      defaultValue: "primary",
    },
    disabled: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    error: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    placeholder: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ESInputDateRange>;

export const Default: Story = {
  name: "ESInputDateRange",
  args: {
    variant: 'primary',
    placeholder: 'Select date range',
  },
};

export const Branded: Story = {
  name: "Branded ESInputDateRange",
  args: {
    variant: 'branded',
    placeholder: 'Select date range',
  },
};

export const Disabled: Story = {
  name: "Disabled ESInputDateRange",
  args: {
    variant: 'primary',
    disabled: true,
    placeholder: 'Disabled',
  },
};

export const Error: Story = {
  name: "Error ESInputDateRange",
  args: {
    variant: 'primary',
    error: true,
    placeholder: 'Error state',
  },
};
