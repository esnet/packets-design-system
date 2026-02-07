import type { Meta, StoryObj } from '@storybook/web-components';
import { ESInputRadioButton } from "@esnet/packets-ui-web";

const meta: Meta<typeof ESInputRadioButton> = {
  title: 'Components/ESInputRadioButton',
  component: ESInputRadioButton.tagName,
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
    checked: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    label: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ESInputRadioButton>;

export const Default: Story = {
  name: "ESInputRadioButton",
  args: {
    variant: 'primary',
    label: 'Radio Button',
  },
};

export const Checked: Story = {
  name: "Checked ESInputRadioButton",
  args: {
    variant: 'primary',
    label: 'Checked Radio Button',
    checked: true,
  },
};

export const Branded: Story = {
  name: "Branded ESInputRadioButton",
  args: {
    variant: 'branded',
    label: 'Branded Radio Button',
  },
};

export const Disabled: Story = {
  name: "Disabled ESInputRadioButton",
  args: {
    variant: 'primary',
    label: 'Disabled Radio Button',
    disabled: true,
  },
};
