import { PktsModule, PktsIconButton } from "@esnet/packets-ui-react";
import { PktsTooltip } from "@esnet/packets-ui-react/src/index.js";
import type { Meta, StoryObj } from "@storybook/react";
import { Pencil } from "lucide-react";

const meta: Meta<typeof PktsTooltip> = {
  title: "Components/PktsTooltip",
  component: PktsTooltip,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=1428-2671&p=f&m=dev",
    },
  },
  decorators: [
    (Story: any) => (
      <div style={{ minHeight: 180 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof PktsTooltip>;

export const TooltipWithReactNodeContent: Story = {
  render: () => {
    return (
      <PktsModule surface>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. commodo consequat.{" "}
        <PktsTooltip
          title="Content title"
          anchor={
            <span
              style={{
                color: "red",
                fontWeight: "bold",
              }}
            >
              Tooltip Anchor.
            </span>
          }
          onClickX={() => alert("close tooltip")}
        >
          Some content, whatever you want. Maybe even a{" "}
          <a href="/">Link to Home</a> or a <b>strongly suggested tip.</b>
        </PktsTooltip>{" "}
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea
      </PktsModule>
    );
  },
};

export const LongTextAnchor: Story = {
  args: {
    anchor:
      "Tooltips can be applied to any form of content. It's children represent the content that, when hovered, display the tooltip.",
    children: "Any text or React Node can be rendered in the tooltip.",
  },
};

export const IconButtonToolTip: Story = {
  args: {
    anchor: (
      <PktsIconButton variant="branded">
        <Pencil />
      </PktsIconButton>
    ),
    children: "Edit",
  },
};
