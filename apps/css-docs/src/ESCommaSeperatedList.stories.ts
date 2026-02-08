import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/ESCommaSeperatedList',
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
    },
  },
  render: (args) => {
    const list = document.createElement('ul');
    list.className = 'es-comma-seperated-list';

    if (args.items && Array.isArray(args.items)) {
      args.items.forEach((item: string) => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
      });
    }

    return list;
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    items: ['Apple', 'Banana', 'Cherry', 'Date'],
  },
};

export const ShortList: Story = {
  args: {
    items: ['Item 1', 'Item 2'],
  },
};

export const LongList: Story = {
  args: {
    items: ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh'],
  },
};
