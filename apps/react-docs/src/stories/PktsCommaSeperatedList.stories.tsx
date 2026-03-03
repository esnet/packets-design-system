import type { Meta, StoryObj } from "@storybook/react";
import { PktsCommaSeperatedList, PktsModule } from "@esnet/packets-ui-react";

const meta: Meta<typeof PktsCommaSeperatedList> = {
  title: "Components/PktsCommaSeperatedList",
  component: PktsCommaSeperatedList,
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: { control: "object" },
      defaultValue: [],
    },
  },
};

export default meta;

type Story = StoryObj<typeof PktsCommaSeperatedList>;

export const Default: Story = {
  args: {
    items: ["apples", "oranges", "lemons"],
  },
};

export const InTextUsage: Story = {
  render: () => (
    <PktsModule title="Favorite Fruits">
      My favorite fruits are{" "}
      <PktsCommaSeperatedList items={["apples", "oranges", "lemons"]} />.
    </PktsModule>
  ),
};
