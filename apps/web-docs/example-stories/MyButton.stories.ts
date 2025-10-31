import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './MyButton';

type MyButtonArgs = {
  label?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
};

const meta: Meta<MyButtonArgs> = {
    title: 'Components/MyButton',
    component: 'my-button',
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        variant: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
        disabled: { control: 'boolean' },
    },
    args: {
        label: 'Click Me',
        variant: 'primary',
        disabled: false,
    },
    render: (args) => html`
    <my-button
        label="${args.label}"
        variant="${args.variant}"
        ${args.disabled ? 'disabled' : ''}
    ></my-button>
    `,
};
export default meta;

type Story = StoryObj<MyButtonArgs>;

export const Primary: Story = {
    args: {
        label: 'Primary Button',
        variant: 'primary',
        disabled: false,
    },
};
