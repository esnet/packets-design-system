import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/ESInputEmail',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['default', 'branded'],
    },
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
  },
  render: (args) => {
    const wrapper = document.createElement('div');
    const classes = ['es-input-text', 'es-input-email'];

    if (args.variant && args.variant !== 'default') classes.push(`es-${args.variant}`);
    if (args.error) classes.push('es-error');

    wrapper.className = classes.join(' ');

    const input = document.createElement('input');
    input.type = 'email';

    input.placeholder = args.placeholder || 'email@example.com';
    if (args.value) input.value = args.value;
    if (args.disabled) input.disabled = true;

    wrapper.appendChild(input);
    return wrapper;
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    variant: 'default',
    placeholder: 'email@example.com',
  },
};

export const Branded: Story = {
  args: {
    variant: 'branded',
    placeholder: 'Enter your email',
  },
};

export const WithValue: Story = {
  args: {
    value: 'user@example.com',
    variant: 'default',
  },
};

export const Disabled: Story = {
  args: {
    value: 'user@example.com',
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    value: 'invalid-email',
    error: true,
  },
};
