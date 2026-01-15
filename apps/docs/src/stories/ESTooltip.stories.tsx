import type { Meta, StoryObj } from "@storybook/react-vite";
import { ESTooltip } from "@esnet/packets-ui/src/components/ESTooltip/ESTooltip.tsx";
import { ESIconButton, ESModule } from "@esnet/packets-ui";

const meta: Meta<typeof ESTooltip> = {
  title: "Components/ESTooltip",
  component: ESTooltip,
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
    (Story) => (
      <div style={{ minHeight: 180 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ESTooltip>;

export const TooltipWithReactNodeContent: Story = {
  render: () => {
    return (
      <ESModule surface>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. commodo consequat.{" "}
        <ESTooltip
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
        </ESTooltip>{" "}
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea
      </ESModule>
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
    anchor: <ESIconButton name="pencil" />,
    children: "Edit",
  },
};
