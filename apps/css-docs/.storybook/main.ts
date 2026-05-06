import type { StorybookConfig } from "@storybook/html-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-dark-mode",
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  async viteFinal(config, { configType }) {
    if (configType === "PRODUCTION") {
      return { ...config, base: "/css/" };
    }
    return config;
  },
};

export default config;
