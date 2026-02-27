import type { Meta, StoryObj } from '@storybook/web-components';
import { PktsInputDate } from "@esnet/packets-ui-web";

const meta: Meta<typeof PktsInputDate> = {
  title: 'Components/PktsInputDate',
  component: PktsInputDate.tagName,
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
  decorators: [
    // a larger height to fully view the absolutely positioned calendar prompt
    (Story) => {
      const wrapper = document.createElement('div');
      wrapper.style.minHeight = '280px';
      const story = Story();
      wrapper.appendChild(story);
      return wrapper;
    },
  ],
};

export default meta;

type Story = StoryObj<typeof PktsInputDate>;

export const Default: Story = {
  name: "PktsInputDate",
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
