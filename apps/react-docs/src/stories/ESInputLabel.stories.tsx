import type { Meta, StoryObj } from "@storybook/react";
import { ESInputEmail, ESLabel, ESInputText } from "@esnet/packets-ui";

const meta: Meta<typeof ESLabel> = {
  title: "Components/ESLabel",
  component: ESLabel,
  tags: ["autodocs"],
  args: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=1-15",
    },
  },
  render: (args) => {
    return (
      <ESLabel {...args}>
        {args.children || (
          <ESInputText
            placeholder="Placeholder text"
            disabled={args.disabled}
            error={!!args.error}
          />
        )}
      </ESLabel>
    );
  },
};

export default meta;

type Story = StoryObj<typeof ESLabel>;

export const Default: Story = {
  args: {
    label: "Input Label",
  },
};

export const HasError: Story = {
  parameters: {
    docs: {
      description:
        "ESLabel wraps the children (input elements) with a label element, linking them.",
    },
  },
  args: {
    label: "Email",
    error: "This field is required",
    required: true,
    children: <ESInputEmail error />,
  },
};
