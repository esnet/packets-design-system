// rollup.config.js
import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcssImport from "postcss-import";
import resolveId from "postcss-import/lib/resolve-id.js";
import image from "@rollup/plugin-image";

// eslint-disable-next-line no-undef
const DEV = process.env.ROLLUP_WATCH === "true";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/cjs/bundle.js",
        format: "cjs",
        sourcemap: DEV,
      },
      {
        file: "dist/esm/bundle.js",
        format: "esm",
        sourcemap: DEV,
      },
      /* {
				file: 'dist/bundle.min.js',
				format: 'iife',
				name: 'version',
				plugins: [terser()]
			} */
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        extract: false,
        minimize: true,
        autoModules: true,
        plugins: [
          postcssImport({
            // the resolver can't seem to pick up the export mapping in the tokens' package.json
            // so manually resolve it
            resolve: (id, basedir, importOptions) => {
              if (id === "@esnet/esnet-tokens/esnet-tokens.css") {
                return resolveId(
                  "@esnet/esnet-tokens/dist/esnet-tokens.css",
                  basedir,
                  importOptions
                );
              }
              return resolveId(id, basedir, importOptions);
            },
          }),
        ],
      }),
      terser(),
      image(),
    ],
  },
  {
    input: "dist/esm/types/src/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.(css|less)$/],
  },
];
