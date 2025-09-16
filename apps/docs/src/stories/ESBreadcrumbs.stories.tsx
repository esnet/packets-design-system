import type { Meta, StoryObj } from "@storybook/react-vite";
import { ESBreadcrumbs } from "@esnet/packets-ui/src/components/ESBreadcrumbs/ESBreadcrumbs.tsx";
import { defaultRenderLink } from "@esnet/packets-ui/src/lib/utils/link.js";

const meta: Meta<typeof ESBreadcrumbs> = {
  title: "Components/ESBreadcrumbs",
  component: ESBreadcrumbs,
  tags: ["autodocs"],
  argTypes: {
    breadcrumbs: {
      control: { control: "object" },
      defaultValue: [],
    },
    renderLink: {
      type: "function",
      control: false,
      table: {
        type: {
          summary: "(linkProps: LinkType) => React.ReactNode",
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ESBreadcrumbs>;

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
    renderLink: defaultRenderLink,
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

const code = `<ESBreadcrumbs
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
