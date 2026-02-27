import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/PktsInputCheckbox',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['default', 'branded'],
    },
    disabled: {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
    },
  },
  render: (args) => {
    const wrapper = document.createElement('div');
    const classes = ['pkts-input-checkbox'];

    if (args.variant && args.variant !== 'default') classes.push(`pkts-${args.variant}`);

    wrapper.className = classes.join(' ');

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.className = 'pkts-input-checkbox__input';

    if (args.disabled) input.disabled = true;
    if (args.checked) input.checked = true;

    wrapper.appendChild(input);
    return wrapper;
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};

export const Branded: Story = {
  args: {
    variant: 'branded',
  },
};

export const Checked: Story = {
  args: {
    variant: 'default',
    checked: true,
  },
};

export const BrandedDisabledChecked: Story = {
  args: {
    variant: 'branded',
    disabled: true,
    checked: true,
  },
};
