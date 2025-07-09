import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

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
  typescript: {
    // Overrides the default Typescript configuration to allow multi-package components to be documented via Autodocs.
    reactDocgen: "react-docgen",
    check: false,
  },

  //   typescript: {
  //     // reactDocgen: "react-docgen-typescript",
  //     // reactDocgenTypescriptOptions: {
  //     //   compilerOptions: {
  //     //     allowSyntheticDefaultImports: false,
  //     //     esModuleInterop: false,
  //     //   },
  //     //   //   propFilter: (prop) =>
  //     //   //     prop.parent
  //     //   //       ? !/node_modules\/(?!(@esnet))/.test(prop.parent.fileName)
  //     //   //       : true,
  //     //   propFilter: (prop) => true,
  //     // },
  //   },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      resolve: {
        alias: {
          "@esnet/packets-ui/src": "../../../packages/ui/src",
        },
      },
    });
  },
};
export default config;
