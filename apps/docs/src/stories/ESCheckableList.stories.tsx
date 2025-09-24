import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  ESCheckableList,
  ESInputCheckbox,
  ESInputRow,
  ESInputRadioButton,
} from "@esnet/packets-ui";

const meta: Meta<typeof ESCheckableList> = {
  title: "Components/ESCheckableList",
  component: ESCheckableList,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=6077-1898&t=22enwLal9XxthYGp-0",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ESCheckableList>;

export const Default: Story = {
  args: {
    legend: "Deployment Options",
    children: (
      <>
        <ESInputRow labelPlacement="right" label="NA-WEST-1">
          <ESInputCheckbox />
        </ESInputRow>
        <ESInputRow labelPlacement="right" label="NA-WEST-2">
          <ESInputCheckbox />
        </ESInputRow>
        <ESInputRow labelPlacement="right" label="NA-WEST-3">
          <ESInputCheckbox />
        </ESInputRow>
      </>
    ),
  },
};

export const RadioList: Story = {
  args: {
    legend: "Deployment Options",
    children: (
      <>
        <ESInputRow labelPlacement="right" label="NA-WEST-1">
          <ESInputRadioButton name="deployment" />
        </ESInputRow>
        <ESInputRow labelPlacement="right" label="NA-WEST-2">
          <ESInputRadioButton name="deployment" />
        </ESInputRow>
        <ESInputRow labelPlacement="right" label="NA-WEST-3">
          <ESInputRadioButton name="deployment" />
        </ESInputRow>
      </>
    ),
  },
};

export const NestedList: Story = {
  args: {
    legend: "Taco Selection",
    children: (
      <>
        <ESCheckableList legend="Meat">
          <ESInputRow labelPlacement="right" label="Carne Asada">
            <ESInputRadioButton name="taco_type" />
          </ESInputRow>
          <ESInputRow labelPlacement="right" label="Pollo">
            <ESInputRadioButton name="taco_type" />
          </ESInputRow>
        </ESCheckableList>
        <ESCheckableList legend="Add-Ons">
          <ESInputRow labelPlacement="right" label="Cilantro">
            <ESInputCheckbox />
          </ESInputRow>
          <ESInputRow labelPlacement="right" label="Onions">
            <ESInputCheckbox />
          </ESInputRow>
          <ESInputRow labelPlacement="right" label="Salsa">
            <ESInputCheckbox />
          </ESInputRow>
        </ESCheckableList>
        <ESInputRow labelPlacement="right" label="Drink">
          <ESInputCheckbox />
        </ESInputRow>
      </>
    ),
  },
};
