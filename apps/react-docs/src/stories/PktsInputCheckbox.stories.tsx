import type { Meta, StoryObj } from "@storybook/react";
import { PktsInputCheckbox } from "@esnet/packets-ui-react";

const meta: Meta<typeof PktsInputCheckbox> = {
  title: "Components/PktsInputCheckbox",
  component: PktsInputCheckbox,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=3159-1656&p=f&t=K2rntGFJ6NptjJpV-0",
    },
  },
};

export default meta;

type Story = StoryObj<typeof PktsInputCheckbox>;

export const Default: Story = {};

export const Branded: Story = {
  args: {
    variant: "branded",
  },
};

export const BrandedDisabledChecked: Story = {
  args: {
    variant: "branded",
    disabled: true,
    checked: true,
  },
};
