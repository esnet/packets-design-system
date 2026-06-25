import { PktsCodeBlock } from "@esnet/packets-ui-react/src/index.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PktsCodeBlock> = {
  title: "Components/PktsCodeBlock",
  component: PktsCodeBlock,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=6541-109",
    },
  },
};

export default meta;

type Story = StoryObj<typeof PktsCodeBlock>;

export const Default: Story = {
  render: () => {
    return (
      <PktsCodeBlock language="python">{`def add_numbers(num1, num2):
    return num1 + num2
result = add_numbers(5, 3)
print(f"The sum is: {result}")`}</PktsCodeBlock>
    );
  },
};
