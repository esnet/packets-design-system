import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PktsBreadcrumbs } from "@esnet/packets-ui-react";

const meta: Meta<typeof PktsBreadcrumbs> = {
  title: "Components/PktsBreadcrumbs",
  component: PktsBreadcrumbs,
  tags: ["autodocs"],
  argTypes: {
    breadcrumbs: {
      control: { control: "object" },
      defaultValue: [],
    },
  },
};

export default meta;

type Story = StoryObj<typeof PktsBreadcrumbs>;

export const Default: Story = {
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

const code = `<PktsBreadcrumbs
  breadcrumbs={[
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
  ]}
  renderLink={(linkProps) => (
    <h5>
      <a href={linkProps.href}>Custom Text - {linkProps.children}</a>
    </h5>
  )}
/>;`;

export const CustomRenderLink: Story = {
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
    renderLink: (linkProps) => (
      <h5>
        <a href={linkProps.href}>Custom Text - {linkProps.children}</a>
      </h5>
    ),
  },
  parameters: {
    docs: {
      source: {
        code,
      },
    },
  },
};
