// rollup.config.js
import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcssImport from "postcss-import";

export default [
  // NPM package CJS bundle (lucide as external peer dependency)
  {
    input: "src/index.ts",
    output: {
      file: "dist/cjs/bundle.js",
      format: "cjs",
      sourcemap: true,
    },
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        extract: "style.css",
        minimize: true,
        autoModules: true,
        plugins: [postcssImport()],
      }),
      terser(),
    ],
  },
  // Browser ESM bundle (lucide bundled in for standalone use)
  {
    input: "src/index.ts",
    output: {
      file: "dist/esm/bundle.js",
      format: "esm",
      sourcemap: true,
    },
    plugins: [
      // No peerDepsExternal() - bundle everything including lucide
      resolve({ browser: true }),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        extract: "style.css",
        minimize: true,
        autoModules: true,
        plugins: [postcssImport()],
      }),
      terser(),
    ],
  },
  {
    input: "dist/esm/types/src/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.(css|less)$/],
  },
];
