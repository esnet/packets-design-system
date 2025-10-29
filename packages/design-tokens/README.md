## ESNet UI Design Tokens

#### Exports

ESNet's code repository of tokens, available in the following formats:

- JavaScript constants, including ESM, CJS, and UMD definitions, along with TypeScript declarations
- Tailwind configuration object (soon to support Tailwind v4 configuration)
- SCSS and CSS variables
- JSON

The default export is the JavaScript constants with the TypeScript type declaration.

If you wish to consume any other files, you can conveniently import them as such: `import "@esnet/design-tokens/filename"`, as defined in the package.json's `exports` field.

##### Caveats

When importing token files in CSS using PostCSS (or likely any CSS compiler), it struggles to resolve the path names exported by package.json's `exports` field. Import them like this instead: `@import "@esnet/esnet-tokens/dist/esnet-tokens.css";`.

#### Build process

Run `pnpm run build`. This command will generate the tokens files in the `dist` folder.

This project has a [`prepublishOnly`](https://docs.npmjs.com/misc/scripts) command script that builds all of the above. This command is run automatically before the package is prepared and packed via the `npm publish` command.
