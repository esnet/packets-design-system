import type { Meta, StoryObj } from "@storybook/react-vite";
import { ESAccordion } from "@esnet/packets-ui/src/components/ESAccordion/ESAccordion.tsx";
import { ESIcon, ESInputOption, ESInputTypeahead } from "@esnet/packets-ui";

const meta: Meta<typeof ESAccordion> = {
  title: "Components/ESAccordion",
  component: ESAccordion,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=7603-1127&m=dev",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ESAccordion>;

export const Default: Story = {
  args: {
    header: "Title",
    children: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    footer: "Footer text",
  },
};

export const InlineNoFooter: Story = {
  args: {
    header: "Title",
    variant: "inline",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
};

export const Stacked: Story = {
  args: {
    header: "Title",
    footer: "stacked accordion",
    children: (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <ESAccordion footer="Accordion 1, Footer" header="Accordion 1, Inline">
          Accordion Content
        </ESAccordion>
        <ESAccordion
          variant="primary"
          footer="Accordion 2, Footer"
          header="Accordion 2, Surface"
        >
          Accordion Content
          <ESAccordion
            variant="primary"
            footer="Accordion 2.1, Footer"
            header="Accordion 2.1, Surface"
          >
            Accordion Content
          </ESAccordion>
        </ESAccordion>
      </div>
    ),
  },
};

export const WithActionButtons: Story = {
  args: {
    header: "Title",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    actionButtons: [
      <ESIcon onClick={() => alert("clicked on eye")} name="eye" />,
      <ESIcon onClick={() => alert("clicked on trash")} name="trash" />,
    ],
    footer: "Footer text",
  },
};
