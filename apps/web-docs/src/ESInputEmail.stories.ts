import type { Meta, StoryObj } from '@storybook/web-components';
import { ESInputEmail } from "@esnet/packets-ui-web";

const meta: Meta<typeof ESInputEmail> = {
    title: 'Components/ESInputEmail',
    component: ESInputEmail.tagName,
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

type Story = StoryObj<typeof ESInputEmail>;

export const Default: Story = {
    name: "ESInputEmail",
    args: {
        variant: 'default',
    },
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=1-13&p=f&t=TsBf9t3EVbQXYenU-0",
        },
    },
};

export const DefaultWithPlaceholder: Story = {
    name: "ESInputEmail With Value",
    args: {
        value: "Default Value",
        variant: "branded",
    },
};

export const BrandedWithPlaceholder: Story = {
    name: "Branded ESInputEmail With Placeholder",
    args: {
        placeholder: "Branded placeholder",
        variant: "branded",
    },
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=1-13&p=f&t=TsBf9t3EVbQXYenU-0",
        },
  },
};

export const BrandedWithValueSetAndDisabled: Story = {
    args: {
        value: "Email already set",
        placeholder: "Placeholder for Email Input",
        variant: "branded",
        disabled: true,
    },
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=1412-2695&t=bzfAloA7Ts1Yloyi-4",
        },
  },
};


export const BrandedWithValueSetAndErrored: Story = {
  args: {
    value: "Email already set",
    placeholder: "Placeholder for Email Input",
    error: true
  },
};
