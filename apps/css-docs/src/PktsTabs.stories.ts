import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/PktsTabs',
  tags: ['autodocs'],
  argTypes: {
    tabs: {
      control: 'object',
    },
  },
  render: (args) => {
    const container = document.createElement('div');
    container.className = 'pkts-tabs';

    const ul = document.createElement('ul');
    ul.className = 'tab-list';

    if (args.tabs && Array.isArray(args.tabs)) {
      args.tabs.forEach((tab: { label: string; active?: boolean }, index: number) => {
        const li = document.createElement('li');
        li.className = tab.active || index === 0 ? 'pkts-tab pkts-active' : 'pkts-tab';
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = tab.label;
        li.appendChild(link);
        ul.appendChild(li);
      });
    }

    container.appendChild(ul);
    return container;
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    tabs: [
      { label: 'Tab 1' },
      { label: 'Tab 2' },
      { label: 'Tab 3' }
    ],
  },
};

export const FourTabs: Story = {
  args: {
    tabs: [
      { label: 'Home' },
      { label: 'Profile' },
      { label: 'Settings' },
      { label: 'About' }
    ],
  },
};

export const WithActiveTab: Story = {
  args: {
    tabs: [
      { label: 'Tab 1' },
      { label: 'Tab 2', active: true },
      { label: 'Tab 3' }
    ],
  },
};
