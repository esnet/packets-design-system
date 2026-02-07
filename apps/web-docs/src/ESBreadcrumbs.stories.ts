import type { Meta, StoryObj } from '@storybook/web-components';
import { ESBreadcrumbs } from "@esnet/packets-ui-web";

const meta: Meta<typeof ESBreadcrumbs> = {
  title: 'Components/ESBreadcrumbs',
  component: ESBreadcrumbs.tagName,
  tags: ['autodocs'],
  argTypes: {
    crumbs: {
      control: "object",
    },
  },
  render: (args) => {
    const breadcrumbs = document.createElement(ESBreadcrumbs.tagName) as InstanceType<typeof ESBreadcrumbs>;

    if (args.crumbs && Array.isArray(args.crumbs)) {
      args.crumbs.forEach((crumb: { label: string; href?: string }) => {
        const li = document.createElement('li');
        if (crumb.href) {
          const link = document.createElement('a');
          link.href = crumb.href;
          link.textContent = crumb.label;
          li.appendChild(link);
        } else {
          li.textContent = crumb.label;
        }
        breadcrumbs.appendChild(li);
      });
    }

    return breadcrumbs;
  },
};

export default meta;

type Story = StoryObj<typeof ESBreadcrumbs>;

export const Default: Story = {
  name: "ESBreadcrumbs",
  args: {
    crumbs: [
      { label: 'Home', href: '#' },
      { label: 'Category', href: '#' },
      { label: 'Subcategory', href: '#' },
      { label: 'Current Page' }
    ],
  },
};

export const ShortPath: Story = {
  name: "Short Breadcrumb Path",
  args: {
    crumbs: [
      { label: 'Home', href: '#' },
      { label: 'Current Page' }
    ],
  },
};

export const LongPath: Story = {
  name: "Long Breadcrumb Path",
  args: {
    crumbs: [
      { label: 'Home', href: '#' },
      { label: 'Products', href: '#' },
      { label: 'Category', href: '#' },
      { label: 'Subcategory', href: '#' },
      { label: 'Item Type', href: '#' },
      { label: 'Details' }
    ],
  },
};
