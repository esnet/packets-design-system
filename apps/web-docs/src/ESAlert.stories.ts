import type { Meta, StoryObj } from '@storybook/web-components';
import { ESAlert } from "@esnet/packets-ui-web";

const meta: Meta<typeof ESAlert> = {
  title: 'Components/ESAlert',
  component: ESAlert.tagName,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["info", "success", "warning", "error"],
      defaultValue: "info",
    },
    closeable: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    title: {
      control: "text",
    },
    message: {
      control: "text",
    },
  },
  render: (args) => {
    const alert = document.createElement(ESAlert.tagName) as InstanceType<typeof ESAlert>;
    if (args.variant) alert.variant = args.variant;
    if (args.closeable) alert.closeable = args.closeable;
    if (args.title) alert.title = args.title;
    if (args.message) alert.textContent = args.message;
    return alert;
  },
};

export default meta;

type Story = StoryObj<typeof ESAlert>;

export const Info: Story = {
  name: "Info ESAlert",
  args: {
    variant: 'info',
    title: 'Information',
    message: 'This is an informational alert message',
  },
};

export const Success: Story = {
  name: "Success ESAlert",
  args: {
    variant: 'success',
    title: 'Success',
    message: 'Operation completed successfully',
  },
};

export const Warning: Story = {
  name: "Warning ESAlert",
  args: {
    variant: 'warning',
    title: 'Warning',
    message: 'Please review this warning carefully',
  },
};

export const Error: Story = {
  name: "Error ESAlert",
  args: {
    variant: 'error',
    title: 'Error',
    message: 'An error has occurred during processing',
  },
};

export const Closeable: Story = {
  name: "Closeable ESAlert",
  args: {
    variant: 'info',
    title: 'Dismissible Alert',
    message: 'This alert can be dismissed by clicking the close button',
    closeable: true,
  },
};
