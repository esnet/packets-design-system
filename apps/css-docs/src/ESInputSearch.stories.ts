import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/ESInputSearch',
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
  },
  render: (args) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'es-input-text es-input-search';

    const input = document.createElement('input');
    input.type = 'search';
    input.placeholder = args.placeholder || 'Search...';
    if (args.value) input.value = args.value;

    wrapper.appendChild(input);

    return wrapper;
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    placeholder: 'Search...',
  },
};

export const WithValue: Story = {
  args: {
    value: 'Search query',
  },
};
