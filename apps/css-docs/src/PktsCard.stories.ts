import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/PktsCard',
  tags: ['autodocs'],
  render: () => {
    const card = document.createElement('div');
    card.className = 'pkts-card';
    const title = document.createElement('h3');
    title.textContent = 'Card Title';
    const paragraph = document.createElement('p');
    paragraph.textContent = 'This is a card component with content inside.';
    card.appendChild(title);
    card.appendChild(paragraph);
    return card;
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};

export const WithMultipleParagraphs: Story = {
  render: () => {
    const card = document.createElement('div');
    card.className = 'pkts-card';
    const title = document.createElement('h3');
    title.textContent = 'Extended Card';
    const p1 = document.createElement('p');
    p1.textContent = 'Cards are simple containers that can hold any type of content.';
    const p2 = document.createElement('p');
    p2.textContent = 'They provide visual separation and organization for related information.';
    card.appendChild(title);
    card.appendChild(p1);
    card.appendChild(p2);
    return card;
  },
};

export const SimpleCard: Story = {
  render: () => {
    const card = document.createElement('div');
    card.className = 'pkts-card';
    const paragraph = document.createElement('p');
    paragraph.textContent = 'A simple card with just text content.';
    card.appendChild(paragraph);
    return card;
  },
};
