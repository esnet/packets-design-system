import type { Meta, StoryObj } from "@storybook/react-vite";
import { ESDropdown } from "@esnet/packets-ui/src/components/ESDropdown/ESDropdown.tsx";
import { ESDropdownAnchor } from "@esnet/packets-ui/src/components/ESDropdown/ESDropdownAnchor.tsx";
import { ESDropdownContent } from "@esnet/packets-ui/src/components/ESDropdown/ESDropdownContent.tsx";
import { ESButton, ESButtonGroup } from "@esnet/packets-ui";

const meta: Meta<typeof ESDropdown> = {
  title: "Components/ESDropdown",
  component: ESDropdown,
  tags: ["autodocs"],
  subcomponents: { ESDropdownAnchor, ESDropdownContent },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=3263-282&p=f&m=dev",
    },
  },
  decorators: [
    // a larger height to fully view the absolutely positioned popup
    (Story) => (
      <div style={{ minHeight: 280 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ESDropdown>;

export const Default: Story = {
  args: {
    carat: true,
    children: [
      <ESDropdownAnchor>
        <ESButton variant="primary">
          Open Dropdown by hovering, focusing, or clicking
        </ESButton>
      </ESDropdownAnchor>,
      <ESDropdownContent style={{ padding: 8 }}>
        <ESButtonGroup direction="vertical">
          <ESButton
            style={{ minWidth: 300 }}
            variant="primary"
            size="medium"
            type="button"
          >
            Navigate to Profile
          </ESButton>
          <ESButton
            style={{ minWidth: 300 }}
            variant="secondary"
            size="medium"
            type="button"
          >
            Navigate to Billing
          </ESButton>
          <ESButton
            style={{ minWidth: 300 }}
            variant="secondary"
            size="medium"
            type="button"
          >
            Navigate to Settings
          </ESButton>
          <ESButton
            style={{ minWidth: 300 }}
            variant="tertiary"
            size="medium"
            type="button"
          >
            Navigate to Sign Out
          </ESButton>
        </ESButtonGroup>
      </ESDropdownContent>,
    ],
  },
};
