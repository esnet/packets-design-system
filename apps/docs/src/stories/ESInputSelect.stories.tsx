import type { Meta, StoryObj } from "@storybook/react-vite";
import { ESInputSelect } from "@esnet/packets-ui/src/components/ESInputSelect/ESInputSelect.tsx";

const meta: Meta<typeof ESInputSelect> = {
  title: "Components/ESInputSelect",
  component: ESInputSelect,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=3263-282&p=f&m=devl",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ESInputSelect>;

export const Default: Story = {
  args: {
    children: "This is a quote",
  },
};
