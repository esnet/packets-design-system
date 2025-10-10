import type { Meta, StoryObj } from "@storybook/react-vite";
import { ESTooltip } from "@esnet/packets-ui/src/components/ESTooltip/ESTooltip.tsx";
import { ESModule } from "@esnet/packets-ui";

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

export const Default: Story = {
  args: {
    children:
      "Tooltips can be applied to any form of content. It's children represent the content that, when hovered, display the tooltip.",
    text: "Any text or React Node can be rendered in the tooltip.",
  },
};

export const DynamicPositioning: Story = {
  render: () => (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
      }}
    >
      <ESTooltip
        title="Lorem ipsum"
        text={
          <>
            If this text were to clip out of the bounding window of the browser,
            it will reposition
          </>
        }
        onClickX={() => alert("close tooltip")}
      >
        <p>Tooltip Anchor</p>
      </ESTooltip>
    </div>
  ),
};

export const TooltipWithReactNodeContent: Story = {
  render: () => {
    return (
      <ESModule surface>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.{" "}
        <ESTooltip
          title="Lorem ipsum"
          text={
            <>
              Some content, whatever you want. Maybe even a{" "}
              <a href="/">Link to Home</a> or a <b>strongly suggested tip.</b>
            </>
          }
          onClickX={() => alert("close tooltip")}
        >
          <b>Tooltip anchor.</b>
        </ESTooltip>{" "}
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </ESModule>
    );
  },
};
