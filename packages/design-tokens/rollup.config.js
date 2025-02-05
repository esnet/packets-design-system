import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import pkg from "./package.json" assert { type: "json" };

export default [
  // browser-friendly UMD build
  {
    input: "./dist/tokens.js",
    output: {
      name: "esnet-tokens",
      file: "./dist/esnet-tokens.umd.js",
      format: "umd",
    },
    plugins: [
      resolve(), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
    ],
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: "./dist/tokens.js",
    external: [],
    output: [{ file: "./dist/esnet-tokens.esm.js", format: "es" }],
    plugins: [
      resolve(), // so Rollup can find `ms`
    ],
  },

  {
    input: "./dist/tokens.js",
    external: [],
    output: [
      { file: "./dist/esnet-tokens.cjs.js", format: "cjs" },
      { file: "./dist/esnet-tokens.esm.js", format: "es" },
    ],
    plugins: [
      resolve(), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
    ],
  },
];
