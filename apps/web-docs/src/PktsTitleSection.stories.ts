import type { Meta, StoryObj } from '@storybook/web-components';
import { PktsTitleSection } from "@esnet/packets-ui-web";

const meta: Meta<typeof PktsTitleSection> = {
  title: 'Components/PktsTitleSection',
  component: PktsTitleSection.tagName,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: "text",
    },
    subtitle: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof PktsTitleSection>;

export const Default: Story = {
  name: "PktsTitleSection",
  args: {
    title: 'Page Title',
    subtitle: 'Page subtitle or description',
  },
};

export const WithoutSubtitle: Story = {
  name: "Without Subtitle",
  args: {
    title: 'Page Title',
  },
};
