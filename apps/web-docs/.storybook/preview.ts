import type { Preview } from '@storybook/web-components';
import { themes } from "@storybook/theming";
import "@esnet/packets-ui/style.css";

const preview: Preview = {
  parameters: {
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
};

export default preview;
