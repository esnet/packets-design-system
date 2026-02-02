import React from "react";
import type { Preview, ReactRenderer } from "@storybook/react";
import { themes } from "@storybook/theming";
import { useDarkMode } from "storybook-dark-mode";
import "@esnet/packets-ui/style.css";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ["About", "Design Tokens", "RichText", "Components"],
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
      light: {
        ...themes.normal,
        brandTitle: "Packets Design System",
        brandImage: "/imgs/packetslogo.light.png",
        brandTarget: "/?path=/docs/getting-started--docs",
      },
    },
  },

  decorators: [
    (Story) => {
      return (
        // useDarkMode has a slight delay - but storybook-dark-mode will get wiped when bumping to Storybook 9 anyway
        <body className={`packets ${useDarkMode() ? "dark" : "light"}`}>
          <Story />
        </body>
      );
    },
  ],
};

export default preview;
