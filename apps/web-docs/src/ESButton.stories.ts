import type { Meta, StoryObj } from '@storybook/web-components';
import { ESButton } from "@esnet/packets-ui-web";

customElements.define(ESButton.tagName, ESButton);

const meta: Meta<typeof ESButton> = {
    title: 'Components/ESButton',
    component: ESButton.tagName,
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
    render: (args) => {
        const button = document.createElement(ESButton.tagName);
        ESButton.observedAttributes.forEach(attr => {
            if (attr in args) button.setAttribute(attr, String(args[attr as keyof typeof args])); 
        });   
        return button;
    },
};

export default meta;

type Story = StoryObj<typeof ESButton>;

export const Defaultbutton: Story = {
    name: "ESButton",
    args: {
        label: 'ESButton',
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
        fill: true
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


