import type { Meta, StoryObj } from "@storybook/react";
import { PktsInputSelect, PktsInputTypeahead } from "@esnet/packets-ui-react";
import PktsInputOption from "@esnet/packets-ui-react/src/components/PktsInputOption/PktsInputOption.tsx";

// standalone use produces undefined behavior - designed as a sub-component of PktsInputSelect and PktsInputTypeahead
const meta: Meta<typeof PktsInputOption> = {
  title: "Components/PktsInputOption",
  component: PktsInputOption,
  tags: ["autodocs"],
  decorators: [
    (Story: any) => (
      <div style={{ minHeight: 240 }}>
        <div style={{ position: "relative" }}>
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const InSelect: Story = {
  name: "Inside PktsInputSelect",
  render: () => (
    <PktsInputSelect>
      <PktsInputOption>React</PktsInputOption>
      <PktsInputOption>Vue</PktsInputOption>
      <PktsInputOption>Svelte</PktsInputOption>
      <PktsInputOption>HTMX</PktsInputOption>
    </PktsInputSelect>
  ),
};

export const InTypeahead: Story = {
  name: "Inside PktsInputTypeahead",
  render: () => (
    <PktsInputTypeahead>
      <PktsInputOption>React</PktsInputOption>
      <PktsInputOption>Vue</PktsInputOption>
      <PktsInputOption>Svelte</PktsInputOption>
      <PktsInputOption>HTMX</PktsInputOption>
    </PktsInputTypeahead>
  ),
};

export const DisabledOption: Story = {
  name: "Disabled Option in Select",
  render: () => (
    <PktsInputSelect>
      <PktsInputOption>React</PktsInputOption>
      <PktsInputOption disabled>Vue (disabled)</PktsInputOption>
      <PktsInputOption>Svelte</PktsInputOption>
      <PktsInputOption>HTMX</PktsInputOption>
    </PktsInputSelect>
  ),
};
