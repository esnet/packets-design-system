import type { Meta, StoryObj } from "@storybook/react";
import PktsLabel from "@esnet/packets-ui-react/src/components/PktsLabel/PktsLabel.tsx";
import { PktsInputText } from "@esnet/packets-ui-react";

const meta: Meta<typeof PktsLabel> = {
  title: "Components/PktsLabel",
  component: PktsLabel,
  tags: ["autodocs"],
  argTypes: {
    required: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    error: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label text",
    children: <PktsInputText placeholder="Label input" />,
  },
};

export const RequiredAndError: Story = {
  args: {
    label: "Username",
    error: "This field is required.",
    required: true,
    children: <PktsInputText placeholder="Username" />,
  },
};
