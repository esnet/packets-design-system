import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ESModule } from "@esnet/packets-ui";

const meta: Meta<typeof ESModule> = {
  title: "Components/ESModule",
  component: ESModule,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: { control: "string" },
    },
    className: {
      control: { control: "string" },
    },
    surface: {
      control: { control: "boolean" },
      defaultValue: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ESModule>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const DefaultModuleExample: Story = {
  render: (props) => <ESModule {...props}>{props.children}</ESModule>,
  name: "ESModule Example",
  args: {
    title: "A Module Title",
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Integer eget aliquet
        nibh praesent tristique. Sem et tortor consequat id. Turpis in eu mi
        bibendum neque. Vel turpis nunc eget lorem dolor sed viverra. Urna
        condimentum mattis pellentesque id. Quisque id diam vel quam elementum
        pulvinar etiam. Ullamcorper a lacus vestibulum sed arcu non. Nulla
        facilisi cras fermentum odio eu. Aenean sed adipiscing diam donec
        adipiscing tristique risus nec feugiat. Et ultrices neque ornare aenean.
        Et malesuada fames ac turpis egestas sed tempus. Nam at lectus urna duis
        convallis convallis tellus id interdum. Commodo elit at imperdiet dui
        accumsan sit amet nulla facilisi. Tempus imperdiet nulla malesuada
        pellentesque elit eget gravida. Erat imperdiet sed euismod nisi porta.
        Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc
        consequat. At urna condimentum mattis pellentesque id. Lacus viverra
        vitae congue eu. Purus sit amet luctus venenatis lectus magna.
      </p>
    ),
  },
};

export const ModuleWithTitle: Story = {
  render: (props) => <ESModule {...props}>{props.children}</ESModule>,
  name: "ESModule No Title",
  args: {
    title: "",
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Integer eget aliquet
        nibh praesent tristique. Sem et tortor consequat id. Turpis in eu mi
        bibendum neque.
      </p>
    ),
  },
};

export const ModuleWithSurface: Story = {
  render: (props) => <ESModule {...props}>{props.children}</ESModule>,
  name: "ESModule With Surface",
  args: {
    title: "A Module with a Surface",
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Integer eget aliquet
        nibh praesent tristique. Sem et tortor consequat id. Turpis in eu mi
        bibendum neque.
      </p>
    ),
    surface: true,
  },
};
