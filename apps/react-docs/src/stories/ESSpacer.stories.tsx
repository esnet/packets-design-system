/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ESSpacer } from "@esnet/packets-ui";
import { SpacingDocSquare } from "doc-ui";

const meta: Meta<typeof ESSpacer> = {
  title: "Components/ESSpacer",
  component: ESSpacer,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["horizontal", "vertical", "square"],
      defaultValue: "horizontal",
    },
    size: {
      control: { type: "radio" },
      options: [
        "none",
        "xxsmall",
        "xsmall",
        "medium",
        "large",
        "xlarge",
        "xxlarge",
        "xxxlarge",
      ],
      defaultValue: "none",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ESSpacer>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const DefaultSpacerStory: Story = {
  render: (props) => {
    const verticalStyling = {
      display: "flex",
      flexDirection: "column",
    };

    const horizontalStyling = {
      display: "flex",
      flexDirection: "row",
    };

    const rootStyle =
      props.type === "vertical" ? verticalStyling : horizontalStyling;

    return (
      <>
        {props.type === "square" ? (
          <div style={verticalStyling as React.CSSProperties}>
            <div style={horizontalStyling as React.CSSProperties}>
              <SpacingDocSquare />
              <ESSpacer {...props} />
              <SpacingDocSquare fill={true} />
            </div>
            <SpacingDocSquare fill={true} />
          </div>
        ) : (
          <div style={rootStyle as React.CSSProperties}>
            <SpacingDocSquare />
            <ESSpacer {...props} />
            <SpacingDocSquare fill={props.type === "horizontal"} />
          </div>
        )}
      </>
    );
  },
  name: "ESSpacer List",
  args: {
    size: "medium" as any,
    type: "horizontal" as any,
  },
};
