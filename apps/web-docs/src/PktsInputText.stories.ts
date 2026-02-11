import type { Meta, StoryObj} from '@storybook/web-components';
import { PktsInputText } from "@esnet/packets-ui-web";

const meta: Meta<typeof PktsInputText> = {
    title: 'Components/PktsInputText',
    component: PktsInputText.tagName,
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
type Story = StoryObj<typeof PktsInputText>;

export const Default: Story = {
    name: "PktsInputText",
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
    name: "ESInputText With Value",
    args: {
        value: "Default Value",
        variant: "branded",
    },
};

export const BrandedWithPlaceholder: Story = {
    name: "Branded ESInputText With Placeholder",
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
        value: "Text already set",
        placeholder: "Placeholder for Text Input",
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
    value: "Text already set",
    placeholder: "Placeholder for Text Input",
    error: true,
  },
};
