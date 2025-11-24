import type { Meta, StoryObj } from "@storybook/react";
import { ESQuotes } from "@esnet/packets-ui/src/components/ESQuotes/ESQuotes.tsx";

const meta: Meta<typeof ESQuotes> = {
  title: "Components/ESQuotes",
  component: ESQuotes,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=6746-4236&m=dev",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ESQuotes>;

export const Default: Story = {
  args: {
    children:
      "No individual is alone responsible for a single stepping stone along the path of progress, and where the path is smooth progress is most rapid.",
  },
};

export const PullQuote: Story = {
  args: {
    quoteType: "pull",
    children:
      "No individual is alone responsible for a single stepping stone along the path of progress, and where the path is smooth progress is most rapid.",
  },
};

export const Variations: Story = {
  render: () => {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
        }}
      >
        <ESQuotes quoteIcons="left">
          No individual is alone responsible for a single stepping stone along
          the path of progress, and where the path is smooth progress is most
          rapid. (left)
        </ESQuotes>
        <ESQuotes quoteIcons="right">
          No individual is alone responsible for a single stepping stone along
          the path of progress, and where the path is smooth progress is most
          rapid. (right)
        </ESQuotes>
        <ESQuotes quoteIcons="both">
          No individual is alone responsible for a single stepping stone along
          the path of progress, and where the path is smooth progress is most
          rapid. (both)
        </ESQuotes>
        <ESQuotes quoteIcons="none">
          No individual is alone responsible for a single stepping stone along
          the path of progress, and where the path is smooth progress is most
          rapid. (none)
        </ESQuotes>
      </div>
    );
  },
  args: {
    children:
      "No individual is alone responsible for a single stepping stone along the path of progress, and where the path is smooth progress is most rapid.",
  },
};
