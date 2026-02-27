import type { Meta, StoryObj } from '@storybook/web-components';
import { PktsButton } from "@esnet/packets-ui-web";

const meta: Meta<typeof PktsButton> = {
    title: 'Components/PktsButton',
    component: PktsButton.tagName,
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: { type: "radio" },
            options: ["button", "submit", "reset"],
        },
        variant: {
            control: { type: "radio" },
            options: ["primary", "secondary", "branded", "tertiary", "destructive"],
            defaultValue: "secondary",
        },
        fill: {
            control: { type: "boolean" },
        },
        disabled: {
            control: { type: "boolean" },
            defaultValue: false,
        },
        as: {
            control: { type: "radio" },
            options: ["button", "a"],
            defaultValue: "button",
        },
        href: {
            control: "text",
            if: { arg: "as", eq: "a" },
        },
    },
};

export default meta;

type Story = StoryObj<typeof PktsButton>;

export const Defaultbutton: Story = {
    name: "PktsButton",
    args: {
        label: 'PktsButton',
        variant: 'secondary',
    },
};

export const Primary: Story = {
    name: "Primary ESButton",
    args: {
        label: 'Primary ESButton',
        variant: 'primary',
        disabled: false,
        fill: true
    },
};

export const DisabledPrimary: Story = {
    name: "Disabled Primary ESButton",
    args: {
        label: 'Disabled Primary ESButton',
        variant: 'primary',
        disabled: true,
        fill: true
    },
};

export const Secondary: Story = {
    name: "Primary ESButton",
    args: {
        label: 'Secondary ESButton',
        variant: 'secondary',
        disabled: false,
        fill: true,
        onClick: (): void => {
            alert("Hello from Packets Design System!");
        },
    },
};

export const DisabledSecondary: Story = {
    name: "Disabled Primary ESButton",
    args: {
        label: 'Disabled Secondary ESButton',
        variant: 'secondary',
        disabled: true,        
        fill: true
    },
};

export const ButtonAsLinkTag: Story = {
    name: "Button As Link",
    args: {
        label: 'Go to Google',
        variant: 'secondary',
        disabled: false,
        href: "http://www.google.com",
        as: "a",
        fill: true
    },
};


