import type { Meta, StoryObj } from "@storybook/react-vite";
import { ESTabs } from "@esnet/packets-ui/src/components/ESTabs/ESTabs.tsx";
import { ESTab } from "@esnet/packets-ui/src/components/ESTabs/ESTab.tsx";

const meta: Meta<typeof ESTabs> = {
  title: "Components/ESTabs",
  component: ESTabs,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ESTabs>;

export const Default: Story = {
  name: "ESTabs Example",
  args: {
    border: true,
    children: [
      <ESTab active>Tab 1</ESTab>,
      <ESTab>Tab 2</ESTab>,
      <ESTab>Tab 3</ESTab>,
    ],
  },
};

export const FullWidthAndBranded: Story = {
  args: {
    fullWidth: true,
    branded: true,
    children: [
      <ESTab>Individuals</ESTab>,
      <ESTab>Business</ESTab>,
      <ESTab active>Enterprise</ESTab>,
    ],
  },
};

export const WorkingExample: Story = {
  // example where there is a state managing and getting each tab index, then displaying a different panel based on
};
