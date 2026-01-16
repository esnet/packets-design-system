import type { Preview } from '@storybook/web-components';
import { themes } from "@storybook/theming";
import "@esnet/packets-ui-web/style.css";

const PacketsDecorator = (Story: any) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'packets';

  const storyElement = Story();
  wrapper.appendChild(storyElement);

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
        brandTitle: "Packets Design System",
        brandImage: "/imgs/packetslogo.dark.png",
        brandTarget: "/?path=/docs/getting-started--docs",
      },
      // Override the default light theme
      light: {
        ...themes.normal,
        brandTitle: "Packets Design System",
        brandImage: "/imgs/packetslogo.light.png",
        brandTarget: "/?path=/docs/getting-started--docs",
      },
    },
  },
  decorators: [PacketsDecorator],
};

export default preview;
