import type { Meta, StoryObj } from '@storybook/web-components';
import { PktsButtonGroup, PktsButton } from "@esnet/packets-ui-web";

const meta: Meta<typeof PktsButtonGroup> = {
  title: 'Components/PktsButtonGroup',
  component: PktsButtonGroup.tagName,
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
    const group = document.createElement(PktsButtonGroup.tagName) as InstanceType<typeof PktsButtonGroup>;
    if (args.label) group.label = args.label;
    if (args.direction) group.direction = args.direction;

    // Create buttons
    const buttons = ['Option 1', 'Option 2', 'Option 3'];
    buttons.forEach((label) => {
      const li = document.createElement('li');
      const button = document.createElement(PktsButton.tagName) as InstanceType<typeof PktsButton>;
      button.variant = 'secondary';
      button.label = label;
      li.appendChild(button);
      group.appendChild(li);
    });

    return group;
  },
};

export default meta;

type Story = StoryObj<typeof PktsButtonGroup>;

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
