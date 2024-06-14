import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import terser from "rollup-plugin-terser";

import pkg from "./package.json" assert { type: "json" };

export default [
  // General JS build
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.js",
    },
    external: ["react/jsx-runtime"],
    plugins: [typescript(), postcss(), terser()],
  },
];