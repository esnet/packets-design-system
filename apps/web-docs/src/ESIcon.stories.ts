import type { Meta, StoryObj } from '@storybook/web-components';
import { ESIcon } from "@esnet/packets-ui-web";

const meta: Meta<typeof ESIcon> = {
    title: 'Components/ESIcon',
    component: ESIcon.tagName,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ESIcon>;

export const Settings: Story = {
  args: {
    name: "settings",
  },
};

export const SearchIcon: Story = {
  args: {
    name: "search",
  },
};

export const BigRedApple: Story = {
  args: {
    name: "apple",
    size: 48,
    color: "red",
    fill: "red",
  },
};
