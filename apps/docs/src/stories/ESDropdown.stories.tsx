import type { Meta, StoryObj } from "@storybook/react-vite";
import { ESDropdown } from "@esnet/packets-ui/src/components/ESDropdown/ESDropdown.tsx";
import { ESDropdownTrigger } from "@esnet/packets-ui/src/components/ESDropdown/ESDropdownTrigger.tsx";
import { ESDropdownContent } from "@esnet/packets-ui/src/components/ESDropdown/ESDropdownContent.tsx";
import { ESAvatar, ESButton, ESButtonGroup } from "@esnet/packets-ui";

const meta: Meta<typeof ESDropdown> = {
  title: "Components/ESDropdown",
  component: ESDropdown,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=3263-282&p=f&m=dev",
    },
  },
  decorators: [
    // a larger height to fully view the absolutely positioned calendar prompt
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
    style: { marginLeft: "770px" },
    children: [
      <ESDropdownTrigger>
        <ESButton variant="tertiary">Open Dropdown</ESButton>
      </ESDropdownTrigger>,
      <ESDropdownContent style={{ width: 250, padding: 4 }}>
        <ESButtonGroup direction="vertical">
          <ESButton variant="primary" size="medium" type="button">
            Profile
          </ESButton>
          <ESButton variant="secondary" size="medium" type="button">
            Billing
          </ESButton>
          <ESButton variant="secondary" size="medium" type="button">
            Settings
          </ESButton>
          <ESButton variant="tertiary" size="medium" type="button">
            Sign Out
          </ESButton>
        </ESButtonGroup>
      </ESDropdownContent>,
    ],
  },
};
