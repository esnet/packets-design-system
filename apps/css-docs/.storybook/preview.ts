import type { Preview } from '@storybook/html';
import { themes } from "@storybook/theming";
import "../../../packages/ui-css/dist/styles.css";

const PacketsDecorator = (Story: any) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'packets';

  const storyElement = Story();
  if (storyElement instanceof HTMLElement) {
    wrapper.appendChild(storyElement);
  } else {
    wrapper.innerHTML = storyElement;
  }

  return wrapper;
};


const preview: Preview = {
  parameters: {
    docs: { source: { excludeDecorators: true } },
    options: {
      storySort: {
        order: ["About", "Components"],
      },
    },
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      classTarget: "body",
      stylePreview: true,
      dark: {
        ...themes.dark,
        brandTitle: "Packets Design System - CSS",
        brandImage: "/imgs/packetslogo.dark.png",
        brandTarget: "/?path=/docs/getting-started--docs",
      },
      // Override the default light theme
      light: {
        ...themes.normal,
        brandTitle: "Packets Design System - CSS",
        brandImage: "/imgs/packetslogo.light.png",
        brandTarget: "/?path=/docs/getting-started--docs",
      },
    },
  },
  decorators: [PacketsDecorator],
};

export default preview;
