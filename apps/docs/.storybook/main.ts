import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-designs",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@whitespace/storybook-addon-html",
    "storybook-dark-mode",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  // typescript: {
  //   reactDocgen: "react-docgen-typescript",
  //   reactDocgenTypescriptOptions: {
  //     propFilter: (prop) =>
  //       prop.parent
  //         ? !/node_modules\/(?!(@esnet))/.test(prop.parent.fileName)
  //         : true,
  //   },
  // },
};
export default config;
