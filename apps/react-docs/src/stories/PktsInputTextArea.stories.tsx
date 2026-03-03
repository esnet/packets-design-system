import type { Meta, StoryObj } from "@storybook/react";
import { PktsInputTextArea } from "@esnet/packets-ui-react";

const meta: Meta<typeof PktsInputTextArea> = {
  title: "Components/PktsInputTextArea",
  component: PktsInputTextArea,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "branded"],
    },
    resize: {
      control: "radio",
      options: ["vertical", "horizontal", "both", "none"],
    },
    error: {
      control: { type: "boolean" },
    },
    rows: {
      control: "number",
    },
    cols: {
      control: "number",
    },
  },
  args: {
    error: false,
    variant: "primary",
    resize: "none",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=4751-3737",
    },
  },
};

export default meta;

type Story = StoryObj<typeof PktsInputTextArea>;

export const Default: Story = {};

export const ResizableBothWays: Story = {
  args: {
    placeholder: "Drag the edges to resize",
    resize: "both",
  },
};

export const BrandedWithPlaceholderAndRowsAndColsSet: Story = {
  args: {
    placeholder: "Branded placeholder",
    variant: "branded",
    rows: 10,
    cols: 400,
  },
};

export const BrandedWithValueSetAndDisabled: Story = {
  args: {
    value: "Text already set",
    placeholder: "Placeholder for Text Input",
    variant: "branded",
    disabled: true,
  },
};
