import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ESBreadcrumbs } from "@esnet/packets-ui-react";

const meta: Meta<typeof ESBreadcrumbs> = {
  title: "Components/ESBreadcrumbs",
  component: ESBreadcrumbs,
  tags: ["autodocs"],
  argTypes: {
    breadcrumbs: {
      control: { control: "object" },
      defaultValue: [],
    },
  },
};

export default meta;

type Story = StoryObj<typeof ESBreadcrumbs>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const DefaultBreadcrumbs: Story = {
  render: (props) => <ESBreadcrumbs breadcrumbs={props.breadcrumbs} />,
  name: "Breadcrumb Example",
  args: {
    breadcrumbs: [
      {
        href: "/",
        children: "Home",
      },
      {
        href: "/circuits",
        children: "Circuits",
      },
      {
        href: "/circuits/THX-1138",
        children: "THX-1138",
      },
    ],
  },
};

export const ExternalLinksBreadcrumbs: Story = {
  render: (props) => <ESBreadcrumbs breadcrumbs={props.breadcrumbs} />,
  name: "External Links Example",
  args: {
    breadcrumbs: [
      {
        href: "http://www.es.net",
        target: "_blank",
        children: "www.es.net",
      },
      {
        href: "https://fasterdata.es.net/",
        target: "_blank",
        children: "Faster Data",
      },
    ],
  },
};
