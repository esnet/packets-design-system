import type { Meta, StoryObj } from '@storybook/web-components';
import { ESCard } from "@esnet/packets-ui-web";

const meta: Meta<typeof ESCard> = {
  title: 'Components/ESCard',
  component: ESCard.tagName,
  tags: ['autodocs'],
  render: () => {
    const card = document.createElement(ESCard.tagName) as InstanceType<typeof ESCard>;
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

type Story = StoryObj<typeof ESCard>;

export const Default: Story = {
  name: "ESCard",
};

export const WithMultipleParagraphs: Story = {
  name: "Card With Multiple Paragraphs",
  render: () => {
    const card = document.createElement(ESCard.tagName) as InstanceType<typeof ESCard>;
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
  name: "Simple Card",
  render: () => {
    const card = document.createElement(ESCard.tagName) as InstanceType<typeof ESCard>;
    const paragraph = document.createElement('p');
    paragraph.textContent = 'A simple card with just text content.';
    card.appendChild(paragraph);
    return card;
  },
};
