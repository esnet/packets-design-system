import type { Meta, StoryObj } from '@storybook/web-components';
import { ESCommaSeperatedList } from "@esnet/packets-ui-web";

const meta: Meta<typeof ESCommaSeperatedList> = {
  title: 'Components/ESCommaSeperatedList',
  component: ESCommaSeperatedList.tagName,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: "object",
    },
  },
  render: (args) => {
    const list = document.createElement(ESCommaSeperatedList.tagName) as InstanceType<typeof ESCommaSeperatedList>;

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

type Story = StoryObj<typeof ESCommaSeperatedList>;

export const Default: Story = {
  name: "ESCommaSeperatedList",
  args: {
    items: ['Apple', 'Banana', 'Cherry', 'Date'],
  },
};

export const ShortList: Story = {
  name: "Short List",
  args: {
    items: ['One', 'Two'],
  },
};

export const LongList: Story = {
  name: "Long List",
  args: {
    items: [
      'First', 'Second', 'Third', 'Fourth', 'Fifth',
      'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth'
    ],
  },
};
