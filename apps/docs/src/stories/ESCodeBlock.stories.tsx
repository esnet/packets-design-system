import type { Meta, StoryObj } from "@storybook/react-vite";
import { ESCodeBlock } from "@esnet/packets-ui/src/components/ESCodeBlock/ESCodeBlock.tsx";

const meta: Meta<typeof ESCodeBlock> = {
  title: "Components/ESCodeBlock",
  component: ESCodeBlock,
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

type Story = StoryObj<typeof ESCodeBlock>;

export const Default: Story = {
  render: () => {
    const code = `def add_numbers(num1, num2):
    return num1 + num2
result  = add_numbers(5, 3)
print(f"The sum is: {result}")`;
    return <ESCodeBlock code={code} language="python" />;
  },
};
