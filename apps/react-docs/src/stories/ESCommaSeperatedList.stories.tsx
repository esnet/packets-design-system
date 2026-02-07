import type { Meta, StoryObj } from "@storybook/react";
import { ESCommaSeperatedList, ESModule } from "@esnet/packets-ui-react";

const meta: Meta<typeof ESCommaSeperatedList> = {
  title: "Components/ESCommaSeperatedList",
  component: ESCommaSeperatedList,
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: { control: "object" },
      defaultValue: [],
    },
  },
};

export default meta;

type Story = StoryObj<typeof ESCommaSeperatedList>;

export const Default: Story = {
  args: {
    items: ["apples", "oranges", "lemons"],
  },
};

export const InTextUsage: Story = {
  render: () => (
    <ESModule title="Favorite Fruits">
      My favorite fruits are{" "}
      <ESCommaSeperatedList items={["apples", "oranges", "lemons"]} />.
    </ESModule>
  ),
};
