import type { Meta, StoryObj } from '@storybook/web-components';
import { PktsInputCheckbox } from "@esnet/packets-ui-web";

const meta: Meta<typeof PktsInputCheckbox> = {
    title: 'Components/PktsInputCheckbox',
    component: PktsInputCheckbox.tagName,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: "radio" },
            options: ["default", "branded"],
            defaultValue: "default",
        },
        disabled: {
            control: { type: "boolean" },
            defaultValue: false,
        },
        error: {
            control: { type: "boolean" },
        },
    },
};

export default meta;

type Story = StoryObj<typeof PktsInputCheckbox>;

export const Default: Story = {};

export const Branded: Story = {
  args: {
    variant: "branded",
  },
};

export const BrandedDisabledChecked: Story = {
  args: {
    variant: "branded",
    disabled: true,
    checked: true,
  },
};
