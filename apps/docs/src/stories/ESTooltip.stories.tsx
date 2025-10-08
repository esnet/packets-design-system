import type { Meta, StoryObj } from "@storybook/react-vite";
import { ESTooltip } from "@esnet/packets-ui/src/components/ESTooltip/ESTooltip.tsx";

const meta: Meta<typeof ESTooltip> = {
  title: "Components/ESTooltip",
  component: ESTooltip,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=1428-2671&p=f&m=dev",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ESTooltip>;

export const Default: Story = {
  args: {
    children: "This is a quote",
    title: "hello",
  },
};
