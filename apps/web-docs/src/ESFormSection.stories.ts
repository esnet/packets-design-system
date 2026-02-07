import type { Meta, StoryObj } from '@storybook/web-components';
import { ESFormSection } from "@esnet/packets-ui-web";

const meta: Meta<typeof ESFormSection> = {
  title: 'Components/ESFormSection',
  component: ESFormSection.tagName,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ESFormSection>;

export const Default: Story = {
  name: "ESFormSection",
  args: {
    title: 'Form Section',
    description: 'This is a form section description',
  },
};

export const WithoutDescription: Story = {
  name: "Without Description",
  args: {
    title: 'Form Section',
  },
};
