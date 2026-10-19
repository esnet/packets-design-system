# @esnet/esnet-tokens

## 1.2.0

### Minor Changes

- Add 13 Claude Code skills for building with Packets Design System.

  **Consumer skills** (for developers using Packets):

  - `/pkts-find` - Find the right component by description
  - `/pkts-react` - Get correct React usage code and props
  - `/pkts-web` - Get correct Web Component usage code
  - `/pkts-css` - Get correct CSS classes and markup
  - `/set-alias-colors` - Customize colors for your app by updating alias tokens

  **Contributor skills** (for Packets team members):

  - `/scaffold-react`, `/scaffold-web`, `/scaffold-css` - Generate component boilerplate
  - `/review-react`, `/review-web`, `/review-css` - Check code against Packets conventions
  - `/generate-component-docs` - Auto-generate documentation pages
  - `/component-audit` - Find parity gaps across platforms

  All skills read from actual source files (no hallucination), work in Claude Code, Cursor, and Windsurf, and ship in `.claude/skills/`.

## 1.1.1

### Patch Changes

- b7f35de: Fix: primary color fixes and build pipeline fixes

## 1.1.0

### Minor Changes

- 181cc60: feat - new typography tokens

## 1.0.1

### Patch Changes

- Patch fix: correct surface and background values for dark theme

## 1.0.0

### Major Changes

- ac340b5: 1.0.0 release. First version of common look and feel tokens

### Minor Changes

- e5535b5: Update: Updated typography rules with new font tokens

## 0.3.0

### Minor Changes

- 1b3f868: Updated Error Color Tokens, Added TouchTarget Sizing Token
- cfd7591: Updated token values to radius, core shadow, and spacing based on new common look and feel

### Patch Changes

- e9f0737: Fix: New Typography font names now properly escaped

## 0.2.4

### Patch Changes

- 51e6fdb: Design Tokens now outputs a json object option
