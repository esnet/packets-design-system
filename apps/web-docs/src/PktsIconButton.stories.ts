import type { Meta, StoryObj } from '@storybook/web-components';
import { PktsIconButton, PktsIcon } from "@esnet/packets-ui-web";

const meta: Meta<typeof PktsIconButton> = {
  title: 'Components/PktsIconButton',
  component: PktsIconButton.tagName,
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
    const button = document.createElement(PktsIconButton.tagName) as InstanceType<typeof PktsIconButton>;
    if (args.variant) button.variant = args.variant;
    if (args.disabled) button.disabled = args.disabled;

    if (args.icon) {
      const icon = document.createElement(PktsIcon.tagName) as InstanceType<typeof PktsIcon>;
      icon.name = args.icon;
      button.appendChild(icon);
    }

    return button;
  },
};

export default meta;

type Story = StoryObj<typeof PktsIconButton>;

export const Default: Story = {
  name: "PktsIconButton",
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
