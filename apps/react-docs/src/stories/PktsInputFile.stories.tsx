import type { Meta, StoryObj } from "@storybook/react";
import { PktsInputFile } from "@esnet/packets-ui-react";

const meta: Meta<typeof PktsInputFile> = {
  title: "Components/PktsInputFile",
  component: PktsInputFile,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["default", "branded"],
      defaultValue: "default",
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
  args: {
    variant: "default",
    disabled: false,
    multiple: false,
    onChange: (e) => {
      console.log("files!", e.target.files);
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "",
    },
  },
};

export default meta;

type Story = StoryObj<typeof PktsInputFile>;

export const Default: Story = {};

export const Branded: Story = {
  args: {
    variant: "branded",
  },
};

export const WithMax: Story = {
  args: {
    maxFiles: 1,
  },
};

export const AsButton: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <PktsInputFile
        {...args}
        asButton={true}
        variant="default"
        label="Default"
      />
      <PktsInputFile
        {...args}
        asButton={true}
        variant="branded"
        label="Branded"
      />
    </div>
  ),
};
