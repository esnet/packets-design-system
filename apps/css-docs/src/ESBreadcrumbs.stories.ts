import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/ESBreadcrumbs',
  tags: ['autodocs'],
  argTypes: {
    crumbs: {
      control: 'object',
    },
  },
  render: (args) => {
    const breadcrumbs = document.createElement('ul');
    breadcrumbs.className = 'es-breadcrumbs';

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

type Story = StoryObj;

export const Default: Story = {
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
  args: {
    crumbs: [
      { label: 'Home', href: '#' },
      { label: 'Current Page' }
    ],
  },
};

export const LongPath: Story = {
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
