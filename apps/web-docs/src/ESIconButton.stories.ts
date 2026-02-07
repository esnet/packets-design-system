import type { Meta, StoryObj } from '@storybook/web-components';
import { ESIconButton, ESIcon } from "@esnet/packets-ui-web";

const meta: Meta<typeof ESIconButton> = {
  title: 'Components/ESIconButton',
  component: ESIconButton.tagName,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary", "branded", "tertiary", "destructive"],
      defaultValue: "secondary",
    },
    disabled: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    icon: {
      control: "text",
    },
  },
  render: (args) => {
    const button = document.createElement(ESIconButton.tagName) as InstanceType<typeof ESIconButton>;
    if (args.variant) button.variant = args.variant;
    if (args.disabled) button.disabled = args.disabled;

    if (args.icon) {
      const icon = document.createElement(ESIcon.tagName) as InstanceType<typeof ESIcon>;
      icon.name = args.icon;
      button.appendChild(icon);
    }

    return button;
  },
};

export default meta;

type Story = StoryObj<typeof ESIconButton>;

export const Default: Story = {
  name: "ESIconButton",
  args: {
    variant: 'secondary',
    icon: 'settings',
  },
};

export const Primary: Story = {
  name: "Primary ESIconButton",
  args: {
    variant: 'primary',
    icon: 'plus',
  },
};

export const Branded: Story = {
  name: "Branded ESIconButton",
  args: {
    variant: 'branded',
    icon: 'heart',
  },
};

export const Disabled: Story = {
  name: "Disabled ESIconButton",
  args: {
    variant: 'primary',
    icon: 'trash',
    disabled: true,
  },
};
