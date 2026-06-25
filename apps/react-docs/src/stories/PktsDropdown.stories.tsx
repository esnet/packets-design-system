import { PktsButton, PktsButtonGroup } from "@esnet/packets-ui-react";
import { PktsDropdown } from "@esnet/packets-ui-react/src/index.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PktsDropdown> = {
  title: "Components/PktsDropdown",
  component: PktsDropdown,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=3263-282&p=f&m=dev",
    },
  },
  decorators: [
    // a larger height to fully view the absolutely positioned popup
    (Story: any) => (
      <div style={{ minHeight: 280 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof PktsDropdown>;

export const Default: Story = {
  args: {
    anchor: (
      <PktsButton variant="primary">
        Open Dropdown by hovering, focusing, or clicking
      </PktsButton>
    ),
    children: [
      <PktsButtonGroup direction="vertical">
        <PktsButton style={{ minWidth: 300 }} variant="primary" type="button">
          Navigate to Profile
        </PktsButton>
        <PktsButton style={{ minWidth: 300 }} variant="secondary" type="button">
          Navigate to Billing
        </PktsButton>
        <PktsButton style={{ minWidth: 300 }} variant="secondary" type="button">
          Navigate to Settings
        </PktsButton>
        <PktsButton style={{ minWidth: 300 }} variant="tertiary" type="button">
          Navigate to Sign Out
        </PktsButton>
      </PktsButtonGroup>,
    ],
  },
};
export const WithCaret: Story = {
  args: {
    caret: true,
    anchor: <span>Hover me!</span>,
    children: [
      <PktsButtonGroup direction="vertical">
        <PktsButton style={{ minWidth: 300 }} variant="primary" type="button">
          Navigate to Profile
        </PktsButton>
        <PktsButton style={{ minWidth: 300 }} variant="secondary" type="button">
          Navigate to Billing
        </PktsButton>
        <PktsButton style={{ minWidth: 300 }} variant="secondary" type="button">
          Navigate to Settings
        </PktsButton>
        <PktsButton style={{ minWidth: 300 }} variant="tertiary" type="button">
          Navigate to Sign Out
        </PktsButton>
      </PktsButtonGroup>,
    ],
  },
};
