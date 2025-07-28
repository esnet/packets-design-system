import React from "react";
import type { Preview, ReactRenderer } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";
import "@esnet/packets-ui/style.css";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ["About", "Design Tokens", "Components"],
      },
    },
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByClassName<ReactRenderer>({
      themes: {
        Light: "",
        Dark: "dark",
      },
      defaultTheme: "light",
    }),
    (Story) => (
      <div className="packets">
        <Story />
      </div>
    ),
  ],
};

export default preview;
