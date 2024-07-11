import React from "react";
import type { Preview } from "@storybook/react";
import "@esnet/packets-ui/style.css";

const preview: Preview = {
  parameters: {
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
    },
  },
  decorators: [
    (Story) => (
      <div className="packets">
        <Story />
      </div>
    ),
  ],
};

export default preview;
