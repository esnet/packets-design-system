import type { Meta, StoryObj } from '@storybook/web-components';
import { PktsTabs } from "@esnet/packets-ui-web";

const meta: Meta<typeof PktsTabs> = {
  title: 'Components/PktsTabs',
  component: PktsTabs.tagName,
  tags: ['autodocs'],
  argTypes: {
    tabs: {
      control: "object",
    },
  },
  render: (args) => {
    const tabs = document.createElement(PktsTabs.tagName) as InstanceType<typeof PktsTabs>;

    if (args.tabs && Array.isArray(args.tabs)) {
      args.tabs.forEach((tab: { label: string; active?: boolean }, index: number) => {
        const li = document.createElement('li');
        li.className = tab.active || index === 0 ? 'pkts-tab pkts-active' : 'pkts-tab';
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = tab.label;
        li.appendChild(link);
        tabs.appendChild(li);
      });
    }

    return tabs;
  },
};

export default meta;

type Story = StoryObj<typeof PktsTabs>;

export const Default: Story = {
  name: "PktsTabs",
  args: {
    tabs: [
      { label: 'Tab 1' },
      { label: 'Tab 2' },
      { label: 'Tab 3' }
    ],
  },
};

export const FourTabs: Story = {
  name: "Four Tabs",
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
  name: "With Active Second Tab",
  args: {
    tabs: [
      { label: 'Tab 1' },
      { label: 'Tab 2', active: true },
      { label: 'Tab 3' }
    ],
  },
};
