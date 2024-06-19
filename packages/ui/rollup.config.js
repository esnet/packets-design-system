import typescript from "@rollup/plugin-typescript";

// import * as postcssModules from "rollup-plugin-postcss-modules";
import postcss from "rollup-plugin-postcss";
import terser from "@rollup/plugin-terser";
import postcssImport from "postcss-import";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";

// import pkg from "./package.json" assert { type: "json" };

export default [
  // General JS build
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.js",
      sourcemap: true,
    },
    external: ["react/jsx-runtime"],
    plugins: [
      typescript(),
      postcss({
        extract: "style.css",
        minimize: true,
        autoModules: true,
        plugins: [postcssImport()],
      }),
      terser(),
    ],
    external: ["react", "@esnet/esnet-tokens"],
  },
];
