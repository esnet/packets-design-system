import type { Meta, StoryObj } from "@storybook/react-vite";
import { ESLogo } from "@esnet/packets-ui/src/components/ESLogo/ESLogo.tsx";

const meta: Meta<typeof ESLogo> = {
  title: "Components/ESLogo",
  component: ESLogo,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/RGDeNzL2ERxcY493HJxxMm/Logos---2024?node-id=1-2&p=f&m=dev",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ESLogo>;

export const Default: Story = {
  args: {},
};
