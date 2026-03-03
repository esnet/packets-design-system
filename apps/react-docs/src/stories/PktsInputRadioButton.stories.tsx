import type { Meta, StoryObj } from "@storybook/react";
import { PktsInputRadioButton } from "@esnet/packets-ui-react";

const meta: Meta<typeof PktsInputRadioButton> = {
  title: "Components/PktsInputRadioButton",
  component: PktsInputRadioButton,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=6077-1904&t=bYmaTE26LRvhzkPD-4",
    },
  },
};

export default meta;

type Story = StoryObj<typeof PktsInputRadioButton>;

export const Default: Story = {};

export const BrandedDisabledFilled: Story = {
  args: {
    disabled: true,
    checked: true,
  },
};

export const SameName: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        <PktsInputRadioButton name="food" value="Pizza" />
        Pizza
      </div>
      <div>
        <PktsInputRadioButton name="food" value="Noodles" />
        Noodles
      </div>
    </div>
  ),
};
