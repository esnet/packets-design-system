/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/react-internal.js"],
  ignorePatterns: ["dist/**"],
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      rules: {
        "react/prop-types": "off",
        "no-undef": "off",
        "no-unused-vars": ["error", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }],
      },
    },
  ],
};
