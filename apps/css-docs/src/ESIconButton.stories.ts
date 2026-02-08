import type { Meta, StoryObj } from '@storybook/html';
import { icons } from 'lucide';

// Get all icon names from lucide
const iconNames = Object.keys(icons).sort();

// Helper to convert lucide icon data to SVG element
function renderLucideIcon(iconName: string, size: number = 20, strokeWidth: number = 2): SVGElement | null {
  const iconData = icons[iconName as keyof typeof icons];
  if (!iconData) return null;

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const attrs = iconData[1] as Record<string, any>;
  const children = iconData[2] as Array<[string, Record<string, any>]>;

  // Set SVG attributes
  svg.setAttribute('xmlns', attrs.xmlns);
  svg.setAttribute('width', String(size));
  svg.setAttribute('height', String(size));
  svg.setAttribute('viewBox', attrs.viewBox);
  svg.setAttribute('fill', attrs.fill);
  svg.setAttribute('stroke', attrs.stroke);
  svg.setAttribute('stroke-width', String(strokeWidth));
  svg.setAttribute('stroke-linecap', attrs['stroke-linecap']);
  svg.setAttribute('stroke-linejoin', attrs['stroke-linejoin']);

  // Add child elements
  children.forEach(([tagName, childAttrs]) => {
    const child = document.createElementNS('http://www.w3.org/2000/svg', tagName);
    Object.entries(childAttrs).forEach(([key, value]) => {
      child.setAttribute(key, String(value));
    });
    svg.appendChild(child);
  });

  return svg;
}

const meta: Meta = {
  title: 'Components/ESIconButton',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'branded', 'tertiary', 'destructive'],
    },
    disabled: {
      control: 'boolean',
    },
    icon: {
      control: { type: 'select' },
      options: iconNames,
      description: `Select from ${iconNames.length} available <a href="https://lucide.dev" target="_blank">Lucide icons</a>. The dropdown is searchable - start typing to filter.`,
    },
  },
  render: (args) => {
    const button = document.createElement('button');
    button.className = `es-icon-button es-${args.variant || 'secondary'}`;

    if (args.disabled) button.disabled = true;

    const iconName = args.icon || 'Settings';
    const svg = renderLucideIcon(iconName, 20, 2);

    if (svg) {
      button.appendChild(svg);
    }

    return button;
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    variant: 'secondary',
    icon: 'Settings',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    icon: 'Plus',
  },
};

export const Branded: Story = {
  args: {
    variant: 'branded',
    icon: 'Heart',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    icon: 'Trash2',
    disabled: true,
  },
};
