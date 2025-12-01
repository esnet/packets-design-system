import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  ESButtonGroup,
  ESButton,
  ESIconButton,
  ESIcon,
} from "@esnet/packets-ui";

const meta: Meta<typeof ESButtonGroup> = {
  title: "Components/ESButtonGroup",
  component: ESButtonGroup,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: { type: "text" },
    },
    direction: {
      control: { type: "radio" },
      options: ["vertical", "horizontal"],
      defaultValue: "horizontal",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ESButtonGroup>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    children: (
      <>
        <ESButton variant="primary">Button 1</ESButton>
        <ESButton variant="secondary">Button 2</ESButton>
        <ESButton variant="tertiary">Button 3</ESButton>
        <ESButton variant="branded">Button 4</ESButton>
        <ESButton variant="destructive">Button 5</ESButton>
      </>
    ),
    label: "A Collection of Buttons",
  },
};

export const VerticalButtonGroup: Story = {
  args: {
    children: (
      <>
        <ESButton variant="primary">Button 1</ESButton>
        <ESButton variant="secondary">Button 2</ESButton>
        <ESButton variant="tertiary">Button 3</ESButton>
        <ESButton variant="branded">Button 4</ESButton>
        <ESButton variant="destructive">Button 5</ESButton>
      </>
    ),
    direction: "vertical",
  },
};

export const FixedWidthsButtonsInGroup: Story = {
  args: {
    children: (
      <>
        <ESButton variant="primary">Button 1</ESButton>
        <ESButton style={{ width: "400px" }} variant="secondary">
          Button 2
        </ESButton>
        <ESButton style={{ width: "120px" }} variant="destructive">
          Button 3
        </ESButton>
      </>
    ),
  },
};

export const ButtonsAndIconButtons: Story = {
  args: {
    children: (
      <>
        <ESButton variant="branded" append={<ESIcon name="link" />}>
          Button 1
        </ESButton>
        <ESIconButton variant="branded" name="settings" square />
        <ESIconButton variant="branded" name="bookmark" square />
      </>
    ),
  },
};

export const VerticalMixedButtons: Story = {
  args: {
    children: (
      <>
        <ESButton variant="primary">
          ESIconButtons have fixed widths and don't expand, which is why they
          are seen how they are below.
        </ESButton>
        <ESIconButton variant="primary" name="settings" />
        <ESIconButton variant="primary" name="bookmark" />
      </>
    ),
    direction: "vertical",
  },
};

export const SomeBrandedButtons: Story = {
  args: {
    children: (
      <>
        <ESButton variant="branded">Option 1</ESButton>
        <ESButton variant="branded">Option 2</ESButton>
        <ESButton variant="branded">Option 3</ESButton>
        <ESIconButton variant="secondary" name="trash" />
      </>
    ),
    label: "Some Branded Buttons",
  },
};
