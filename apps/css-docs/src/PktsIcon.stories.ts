import type { Meta, StoryObj } from '@storybook/html';
import { icons } from 'lucide';

// Get all icon names from lucide
const iconNames = Object.keys(icons).sort();

// Helper to convert lucide icon data to SVG string
function renderLucideIcon(iconName: string, size: number = 24, strokeWidth: number = 2): SVGElement | null {
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
  title: 'Components/PktsIcon',
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: { type: 'select' },
      options: iconNames,
      description: `Select from ${iconNames.length} available <a href="https://lucide.dev" target="_blank">Lucide icons</a>. The dropdown is searchable - start typing to filter.`,
    },
    size: {
      control: { type: 'number', min: 12, max: 128, step: 4 },
      description: 'Icon size in pixels',
    },
    strokeWidth: {
      control: { type: 'number', min: 1, max: 4, step: 0.5 },
      description: 'Stroke width',
    },
  },
  render: (args) => {
    const iconName = args.name || 'Settings';
    const size = args.size || 24;
    const strokeWidth = args.strokeWidth || 2;

    const container = document.createElement('div');
    const svg = renderLucideIcon(iconName, size, strokeWidth);

    if (!svg) {
      container.innerHTML = `
        <p style="margin-bottom: 16px; color: #d32f2f;">
          Icon "${iconName}" not found.
        </p>
        <p style="margin-bottom: 16px;">
          Browse all ${iconNames.length} icons at <a href="https://lucide.dev/icons" target="_blank" style="color: #0088b5; text-decoration: underline;">lucide.dev/icons</a>
        </p>
      `;
      return container;
    }

    container.appendChild(svg);
    return container;
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    name: 'Settings',
    size: 24,
    strokeWidth: 2,
  },
};

export const IconGallery: Story = {
  render: () => {
    const container = document.createElement('div');

    const title = document.createElement('h3');
    title.textContent = 'Icon Gallery';
    title.style.marginBottom = '16px';
    container.appendChild(title);

    const description = document.createElement('p');
    description.style.marginBottom = '24px';
    description.innerHTML = `
      Showing ${Math.min(50, iconNames.length)} of ${iconNames.length} available Lucide icons.
      Browse all at <a href="https://lucide.dev/icons" target="_blank" style="color: #0088b5; text-decoration: underline;">lucide.dev/icons</a>
    `;
    container.appendChild(description);

    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(120px, 1fr))';
    grid.style.gap = '16px';

    // Show first 50 icons
    iconNames.slice(0, 50).forEach(iconName => {
      const item = document.createElement('div');
      item.style.display = 'flex';
      item.style.flexDirection = 'column';
      item.style.alignItems = 'center';
      item.style.gap = '8px';
      item.style.padding = '12px';
      item.style.border = '1px solid #e0e0e0';
      item.style.borderRadius = '4px';

      const svg = renderLucideIcon(iconName, 24, 2);
      if (svg) item.appendChild(svg);

      const label = document.createElement('span');
      label.textContent = iconName;
      label.style.fontSize = '12px';
      label.style.textAlign = 'center';
      label.style.wordBreak = 'break-word';

      item.appendChild(label);
      grid.appendChild(item);
    });

    container.appendChild(grid);

    return container;
  },
};

export const CommonIcons: Story = {
  render: () => {
    const container = document.createElement('div');

    const title = document.createElement('h3');
    title.textContent = 'Commonly Used Icons';
    title.style.marginBottom = '16px';
    container.appendChild(title);

    const commonIconNames = [
      'Settings', 'Search', 'Plus', 'X', 'Check', 'ChevronDown', 'ChevronUp', 'ChevronLeft', 'ChevronRight',
      'Home', 'User', 'Mail', 'Bell', 'Calendar', 'Clock', 'Heart', 'Star', 'Trash2', 'Edit', 'Eye',
      'Download', 'Upload', 'Share2', 'Copy', 'ExternalLink', 'Info', 'AlertCircle', 'CheckCircle', 'XCircle'
    ];

    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(100px, 1fr))';
    grid.style.gap = '16px';

    commonIconNames.forEach(iconName => {
      const item = document.createElement('div');
      item.style.display = 'flex';
      item.style.flexDirection = 'column';
      item.style.alignItems = 'center';
      item.style.gap = '8px';
      item.style.padding = '12px';

      const svg = renderLucideIcon(iconName, 24, 2);
      if (svg) item.appendChild(svg);

      const label = document.createElement('span');
      label.textContent = iconName;
      label.style.fontSize = '11px';
      label.style.textAlign = 'center';

      item.appendChild(label);
      grid.appendChild(item);
    });

    container.appendChild(grid);

    return container;
  },
};
