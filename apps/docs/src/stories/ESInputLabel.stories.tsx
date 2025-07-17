import type { Meta, StoryObj } from "@storybook/react";
import { ESInputEmail, ESInputLabel, ESInputText } from "@esnet/packets-ui";

const meta: Meta<typeof ESInputLabel> = {
  title: "Components/ESInputLabel",
  component: ESInputLabel,
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
      <ESInputLabel {...args}>
        {args.children || (
          <ESInputText
            placeholder="Placeholder text"
            disabled={args.disabled}
            error={!!args.error}
          />
        )}
      </ESInputLabel>
    );
  },
};

export default meta;

type Story = StoryObj<typeof ESInputLabel>;

export const Default: Story = {
  args: {
    label: "Input Label",
  },
};

export const HasError: Story = {
  parameters: {
    docs: {
      description:
        "ESInputLabel wraps the children (input elements) with a label element, linking them.",
    },
  },
  args: {
    label: "Email",
    error: "This field is required",
    required: true,
    children: <ESInputEmail error />,
  },
};
