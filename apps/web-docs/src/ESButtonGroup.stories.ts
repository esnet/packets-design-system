import type { Meta, StoryObj } from '@storybook/web-components';
import { ESButtonGroup, ESButton } from "@esnet/packets-ui-web";

const meta: Meta<typeof ESButtonGroup> = {
  title: 'Components/ESButtonGroup',
  component: ESButtonGroup.tagName,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: "text",
    },
    direction: {
      control: { type: "radio" },
      options: ["horizontal", "vertical"],
      defaultValue: "horizontal",
    },
  },
  render: (args) => {
    const group = document.createElement(ESButtonGroup.tagName) as InstanceType<typeof ESButtonGroup>;
    if (args.label) group.label = args.label;
    if (args.direction) group.direction = args.direction;

    // Create buttons
    const buttons = ['Option 1', 'Option 2', 'Option 3'];
    buttons.forEach((label) => {
      const li = document.createElement('li');
      const button = document.createElement(ESButton.tagName) as InstanceType<typeof ESButton>;
      button.variant = 'secondary';
      button.label = label;
      li.appendChild(button);
      group.appendChild(li);
    });

    return group;
  },
};

export default meta;

type Story = StoryObj<typeof ESButtonGroup>;

export const Horizontal: Story = {
  name: "Horizontal Button Group",
  args: {
    label: 'Actions',
    direction: 'horizontal',
  },
};

export const Vertical: Story = {
  name: "Vertical Button Group",
  args: {
    direction: 'vertical',
  },
};

export const WithLabel: Story = {
  name: "Button Group with Label",
  args: {
    label: 'Choose an Option',
    direction: 'horizontal',
  },
};
