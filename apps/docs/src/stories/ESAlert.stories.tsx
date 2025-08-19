import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ESAlert } from "@esnet/packets-ui";

const meta: Meta<typeof ESAlert> = {
  title: "Components/ESAlert",
  component: ESAlert,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: { variant: "text" },
    },
    variant: {
      control: { variant: "radio" },
      options: ["error", "warning", "info", "success", "branded"],
      defaultValue: "info",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ESAlert>;

export const DefaultAlert: Story = {
  name: "Info Example",
  args: {
    title: "Did you know?",
    variant: "info",
    children: (
      <>
        <p>
          Bob Kahn and Vint Cerf are the American computer scientists who
          developed TCP/IP, the set of protocols that governs how data moves
          through a network. This helped the ARPANET evolve into the internet we
          use today.
        </p>
      </>
    ),
  },
};

export const ShortAlert: Story = {
  args: {
    title: "Info",
    children: "Information",
  },
};

export const SuccessExample: Story = {
  args: {
    title: "Success!",
    variant: "success",
    children: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim diam
          vulputate ut pharetra sit amet aliquam. Risus nullam eget felis eget
          nunc lobortis. Vel eros donec ac odio tempor orci dapibus ultrices in.
          Arcu non sodales neque sodales ut etiam. Eleifend donec pretium
          vulputate sapien nec sagittis aliquam malesuada bibendum. Aenean
          euismod elementum nisi quis eleifend. Ultrices eros in cursus turpis
          massa tincidunt. Donec adipiscing tristique risus nec feugiat.
          Imperdiet sed euismod nisi porta lorem mollis. Vel fringilla est
          ullamcorper eget nulla facilisi etiam dignissim. Posuere morbi leo
          urna molestie at. In arcu cursus euismod quis viverra nibh cras
          pulvinar mattis. Aliquet nec ullamcorper sit amet. Aliquet sagittis id
          consectetur purus ut. Fermentum leo vel orci porta non pulvinar neque
          laoreet suspendisse. Sed risus pretium quam vulputate dignissim
          suspendisse. Pretium aenean pharetra magna ac placerat vestibulum
          lectus mauris ultrices. Volutpat lacus laoreet non curabitur gravida
          arcu ac tortor dignissim. Enim sit amet venenatis urna cursus eget
          nunc scelerisque.
        </p>
      </>
    ),
  },
};

export const ExampleWarningAlert: Story = {
  name: "Warning Example",
  args: {
    title: "Warning",
    variant: "warning",
    children: (
      <>
        <h6>Node nearing capacity</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim diam
          vulputate ut pharetra sit amet aliquam.
        </p>
      </>
    ),
  },
};

export const ExampleErrorAlert: Story = {
  name: "Error Example",
  args: {
    title: "Error Fetching Data",
    variant: "error",
    children: (
      <>
        <h6>Network Error:</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim diam
          vulputate ut pharetra sit amet aliquam.
        </p>
        <h6>Status Code:</h6>
        <p>404</p>
        <h6>Message:</h6>
        <p>
          Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim.
          Enim sit amet venenatis urna cursus eget nunc scelerisque.
        </p>
      </>
    ),
  },
};

export const ExampleBrandedAlert: Story = {
  name: "Branded Example",
  args: {
    title: "Branded Alert",
    variant: "branded",
    children: (
      <>
        <p>
          Bob Kahn and Vint Cerf are the American computer scientists who
          developed TCP/IP, the set of protocols that governs how data moves
          through a network. This helped the ARPANET evolve into the internet we
          use today.
        </p>
      </>
    ),
  },
};
