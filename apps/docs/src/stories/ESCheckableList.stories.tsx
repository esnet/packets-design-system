import type { Meta, StoryObj } from "@storybook/react";
import {
  ESCheckableList,
  ESInputCheckbox,
  ESLabel,
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
        <ESLabel labelPlacement="right" label="NA-WEST-1">
          <ESInputCheckbox />
        </ESLabel>
        <ESLabel labelPlacement="right" label="NA-WEST-2">
          <ESInputCheckbox />
        </ESLabel>
        <ESLabel labelPlacement="right" label="NA-WEST-3">
          <ESInputCheckbox />
        </ESLabel>
      </>
    ),
  },
};

export const RadioList: Story = {
  args: {
    legend: "Deployment Options",
    children: (
      <>
        <ESLabel labelPlacement="right" label="NA-WEST-1">
          <ESInputRadioButton name="deployment" />
        </ESLabel>
        <ESLabel labelPlacement="right" label="NA-WEST-2">
          <ESInputRadioButton name="deployment" />
        </ESLabel>
        <ESLabel labelPlacement="right" label="NA-WEST-3">
          <ESInputRadioButton name="deployment" />
        </ESLabel>
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
          <ESLabel labelPlacement="right" label="Carne Asada">
            <ESInputRadioButton name="taco_type" />
          </ESLabel>
          <ESLabel labelPlacement="right" label="Pollo">
            <ESInputRadioButton name="taco_type" />
          </ESLabel>
        </ESCheckableList>
        <ESCheckableList legend="Add-Ons">
          <ESLabel labelPlacement="right" label="Cilantro">
            <ESInputCheckbox />
          </ESLabel>
          <ESLabel labelPlacement="right" label="Onions">
            <ESInputCheckbox />
          </ESLabel>
          <ESLabel labelPlacement="right" label="Salsa">
            <ESInputCheckbox />
          </ESLabel>
        </ESCheckableList>
        <ESLabel labelPlacement="right" label="Drink">
          <ESInputCheckbox />
        </ESLabel>
      </>
    ),
  },
};
