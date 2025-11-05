import type { Meta, StoryObj } from '@storybook/web-components';
import { ESInputPassword } from "@esnet/packets-ui-web";

const meta: Meta<typeof ESInputPassword> = {
    title: 'Components/ESInputPassword',
    component: ESInputPassword.tagName,
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

type Story = StoryObj<typeof ESInputPassword>;

export const Default: Story = {
    name: "ESInputPassword",
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
    name: "ESInputPassword With Value",
    args: {
        value: "Default Value",
        variant: "branded",
    },
};

export const BrandedWithPlaceholder: Story = {
    name: "Branded ESInputPassword With Placeholder",
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
        value: "Password already set",
        placeholder: "Placeholder for Password Input",
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
    value: "Password already set",
    placeholder: "Placeholder for Password Input",
    error: true
  },
};
