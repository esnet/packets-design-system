import typescript from "@rollup/plugin-typescript";

import postcss from "rollup-plugin-postcss-modules";
import terser from "@rollup/plugin-terser";

// import pkg from "./package.json" assert { type: "json" };

export default [
  // General JS build
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.js",
    },
    external: ["react/jsx-runtime"],
    plugins: [
      typescript(),
      postcss({
        extract: false,
      }),
      terser(),
    ],
  },
];
