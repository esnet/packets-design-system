import type { Meta, StoryObj } from "@storybook/react";
import { PktsInputEmail, PktsLabel, PktsInputText } from "@esnet/packets-ui-react";

const meta: Meta<typeof PktsLabel> = {
  title: "Components/PktsLabel",
  component: PktsLabel,
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
      <PktsLabel {...args}>
        {args.children || (
          <PktsInputText
            placeholder="Placeholder text"
            disabled={args.disabled}
            error={!!args.error}
          />
        )}
      </PktsLabel>
    );
  },
};

export default meta;

type Story = StoryObj<typeof PktsLabel>;

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
    children: <PktsInputEmail error />,
  },
};
