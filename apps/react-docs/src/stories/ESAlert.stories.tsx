import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ESAlert } from "@esnet/packets-ui";

const meta: Meta<typeof ESAlert> = {
  title: "Components/ESAlert",
  component: ESAlert,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: { type: "text" },
    },
    type: {
      control: { type: "radio" },
      options: ["error", "warning", "info", "success"],
      defaultValue: "info",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ESAlert>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const DefaultAlert: Story = {
  render: (props) => <ESAlert {...props}>{props.children}</ESAlert>,
  name: "Info Example",
  args: {
    title: "Did you know?",
    type: "info",
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

export const SuccessExample: Story = {
  render: (props) => <ESAlert {...props}>{props.children}</ESAlert>,
  args: {
    title: "Success!",
    type: "success",
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
  render: (props) => <ESAlert {...props}>{props.children}</ESAlert>,
  name: "Warning Example",
  args: {
    title: "Warning",
    type: "warning",
    children: (
      <>
        <label>Node nearing capacity</label>
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
  render: (props) => <ESAlert {...props}>{props.children}</ESAlert>,
  name: "Error Example",
  args: {
    title: "Error Fetching Data",
    type: "error",
    children: (
      <>
        <label>Network Error:</label>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim diam
          vulputate ut pharetra sit amet aliquam.
        </p>
        <label>Status Code:</label>
        <p>404</p>
        <label>Message:</label>
        <p>
          Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim.
          Enim sit amet venenatis urna cursus eget nunc scelerisque.
        </p>
      </>
    ),
  },
};
