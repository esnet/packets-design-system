import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ESModule } from "@esnet/packets-ui-react";

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

export const DefaultModuleExample: Story = {
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

export const ModuleWithSurface: Story = {
  name: "ESModule With Surface",
  args: {
    title: "A Module with a Surface",
    children: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer
          eget aliquet nibh praesent tristique. Sem et tortor consequat id.
          Turpis in eu mi bibendum neque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer
          eget aliquet nibh praesent tristique. Sem et tortor consequat id.
          Turpis in eu mi bibendum neque.
        </p>
      </>
    ),
    surface: true,
  },
};

export const ModuleWithNoTitle: Story = {
  args: {
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

export const NestedModules: Story = {
  args: {
    title: "Modules Nested Inside a Module",
    children: (
      <>
        <ESModule title="Inner Module 1 (No Surface)">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer
          eget aliquet nibh praesent tristique. Sem et tortor consequat id.
          Turpis in eu mi bibendum neque. Vel turpis nunc eget lorem dolor sed
          viverra. Urna condimentum mattis pellentesque id. Quisque id diam vel
          quam elementum pulvinar etiam. Ullamcorper a lacus vestibulum sed arcu
          non.
        </ESModule>
        <ESModule title="Inner Module 2 (Surface)" surface>
          Nulla facilisi cras fermentum odio eu. Aenean sed adipiscing diam
          donec adipiscing tristique risus nec feugiat. Et ultrices neque ornare
          aenean. Et malesuada fames ac turpis egestas sed tempus. Nam at lectus
          urna duis convallis convallis tellus id interdum. Commodo elit at
          imperdiet dui accumsan sit amet nulla facilisi. Tempus imperdiet nulla
          malesuada pellentesque elit eget gravida. Erat imperdiet sed euismod
          nisi porta. Pulvinar sapien et ligula ullamcorper malesuada proin
          libero nunc consequat. At urna condimentum mattis pellentesque id.
          Lacus viverra vitae congue eu. Purus sit amet luctus venenatis lectus
          magna.
        </ESModule>
      </>
    ),
    style: { display: "flex", flexDirection: "column", gap: "2rem" },
    surface: true,
  },
};
