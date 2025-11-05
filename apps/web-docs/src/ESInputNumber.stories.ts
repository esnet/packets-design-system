import type { Meta, StoryObj } from '@storybook/web-components';
import { ESInputNumber } from "@esnet/packets-ui-web";

const meta: Meta<typeof ESInputNumber> = {
    title: 'Components/ESInputNumber',
    component: ESInputNumber.tagName,
    tags: ['autodocs'],
    argTypes: {
          variant: {
          control: { type: "radio" },
          options: ["default", "branded"],
          defaultValue: "default",
        },
        error: {
          control: { type: "boolean" },
        },
        disabled: {
          control: { type: "boolean" },
        },
        min: {
          control: "number",
        },
        max: {
          control: "number",
        },
        step: {
          control: "number",
        },
    },
};

export default meta;

type Story = StoryObj<typeof ESInputNumber>;

export const Default: Story = {
    name: "ESInputNumber",
    args: {
        variant: "default",
    },
};

export const Branded: Story = {
  args: {
    variant: "branded",
    placeholder: "Branded",
  },
};

export const Error: Story = {
  args: {
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithMinMaxStep: Story = {
  args: {
    min: "-10",
    max: "10",
    step: "3",
  },
};