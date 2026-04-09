import { PktsAccordion } from "@esnet/packets-ui-react/src/components/PktsAccordion/PktsAccordion.tsx";
import type { Meta, StoryObj } from "@storybook/react";
import { Eye, Trash } from "lucide-react";

const meta: Meta<typeof PktsAccordion> = {
  title: "Components/PktsAccordion",
  component: PktsAccordion,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=7603-1127&m=dev",
    },
  },
};

export default meta;

type Story = StoryObj<typeof PktsAccordion>;

export const HeaderAndFooterExample: Story = {
  args: {
    header: "Title",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    footer: "Footer",
    // footer: "Footer text",
  },
};

/**
 * Inline accordions have no footer.
 */
export const InlineNoFooter: Story = {
  args: {
    header: "Title",
    variant: "inline",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
};

export const Nested: Story = {
  args: {
    header: "Title",
    footer: "nested accordion",
    children: (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <PktsAccordion
          footer="Accordion 1, Footer"
          header="Accordion 1, Inline"
        >
          Accordion Content
        </PktsAccordion>
        <PktsAccordion
          variant="primary"
          footer="Accordion 2, Footer"
          header="Accordion 2, Surface"
        >
          Accordion Content
          <PktsAccordion
            variant="primary"
            footer="Accordion 2.1, Footer"
            header="Accordion 2.1, Surface"
          >
            Accordion Content
          </PktsAccordion>
        </PktsAccordion>
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
      <Eye onClick={() => alert("clicked on eye")} />,
      <Trash onClick={() => alert("clicked on trash")} />,
    ],
    footer: "Footer text",
  },
};
