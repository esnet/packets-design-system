import type { Meta, StoryObj } from '@storybook/web-components';
import { ESTabs } from "@esnet/packets-ui-web";

const meta: Meta<typeof ESTabs> = {
  title: 'Components/ESTabs',
  component: ESTabs.tagName,
  tags: ['autodocs'],
  argTypes: {
    tabs: {
      control: "object",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ESTabs>;

export const Default: Story = {
  name: "ESTabs",
  args: {
    tabs: JSON.stringify([
      { label: 'Tab 1', id: 'tab1' },
      { label: 'Tab 2', id: 'tab2' },
      { label: 'Tab 3', id: 'tab3' }
    ]),
  },
};
