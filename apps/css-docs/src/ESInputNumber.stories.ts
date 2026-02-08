import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/ESInputNumber',
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
      control: 'number',
    },
    min: {
      control: 'number',
    },
    max: {
      control: 'number',
    },
  },
  render: (args) => {
    const wrapper = document.createElement('div');
    const classes = ['es-input-text', 'es-input-number'];

    if (args.variant && args.variant !== 'default') classes.push(`es-${args.variant}`);
    if (args.error) classes.push('es-error');

    wrapper.className = classes.join(' ');

    const input = document.createElement('input');
    input.type = 'number';

    input.placeholder = args.placeholder || 'Enter number...';
    if (args.value !== undefined) input.value = String(args.value);
    if (args.min !== undefined) input.min = String(args.min);
    if (args.max !== undefined) input.max = String(args.max);
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
    placeholder: '0',
  },
};

export const Branded: Story = {
  args: {
    variant: 'branded',
    value: 42,
  },
};

export const WithMinMax: Story = {
  args: {
    value: 50,
    min: 0,
    max: 100,
  },
};

export const Disabled: Story = {
  args: {
    value: 100,
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    value: -5,
    error: true,
  },
};
