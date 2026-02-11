import type { Meta, StoryObj } from '@storybook/web-components';
import { PktsFormSection } from "@esnet/packets-ui-web";

const meta: Meta<typeof PktsFormSection> = {
  title: 'Components/PktsFormSection',
  component: PktsFormSection.tagName,
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

type Story = StoryObj<typeof PktsFormSection>;

export const Default: Story = {
  name: "PktsFormSection",
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
