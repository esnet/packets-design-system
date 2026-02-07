import type { Meta, StoryObj } from '@storybook/web-components';
import { ESInputDate } from "@esnet/packets-ui-web";

const meta: Meta<typeof ESInputDate> = {
  title: 'Components/ESInputDate',
  component: ESInputDate.tagName,
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

type Story = StoryObj<typeof ESInputDate>;

export const Default: Story = {
  name: "ESInputDate",
  args: {
    variant: 'primary',
    placeholder: 'Select a date',
  },
};

export const Branded: Story = {
  name: "Branded ESInputDate",
  args: {
    variant: 'branded',
    placeholder: 'Select a date',
  },
};

export const WithValue: Story = {
  name: "ESInputDate With Value",
  args: {
    variant: 'primary',
    value: new Date().toISOString(),
  },
};

export const Disabled: Story = {
  name: "Disabled ESInputDate",
  args: {
    variant: 'primary',
    disabled: true,
    placeholder: 'Disabled',
  },
};

export const Error: Story = {
  name: "Error ESInputDate",
  args: {
    variant: 'primary',
    error: true,
    placeholder: 'Error state',
  },
};
