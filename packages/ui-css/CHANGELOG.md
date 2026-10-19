# @esnet/packets-ui-css

## 3.0.0

### Major Changes

- d86f22c: Remove LBNL/Berkeley Lab Design System (BLDS) color tokens from the public package.

  The 14 `--pkts-color-blds-*` CSS custom properties are no longer included in the published stylesheet. These properties mapped the Berkeley Lab Design System palette (dark-blue, teal, cloud, etc.) and were not referenced by any Packets component internally.

  If your application referenced these variables directly, replace them with values from your own design system or from the LBNL BLDS package.

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

### Patch Changes

- 202fee8: Fix missing `"type": "color"` field on dark mode background token in design-tokens source. Without this field, Style Dictionary skips the token during build, causing the dark background CSS custom property to be absent from the compiled output.

## 2.0.2

### Patch Changes

- 306d407: chore: bump to 2.0.2 to avoid conflict with accidental 2.0.1 stable tag
- d658985: fix: correct README install commands, remove dead exports, fix avatar example

  - README install commands now use the @beta tag so beta testers get 2.x instead of the old 0.x/1.x stable release
  - Removed ./style.css export from ui-react exports map: no CSS file ships in the tarball, causing MODULE_NOT_FOUND for consumers who imported it
  - Fixed PktsAvatar usage example in ui-react README: initials and color are not props; correct props are alt (for the fallback label) and backgroundColor

- c37260c: chore: apply formatter across codebase for consistent code style

## 2.0.1-beta.1

### Patch Changes

- fix: move pkts-tokens from dependencies to devDependencies — it is a build-time dependency only and was causing install failures for consumers without ESnet registry access

## 2.0.1-beta.0

### Major Changes

- Release 2.0.1: CSS variable prefix rename, component style migration, new components, and bug fixes.

  **Breaking changes**

  - CSS custom property prefix renamed from `--esnet-` to `--pkts-` across all packages. Any consumer overriding or referencing `--esnet-*` variables must update to `--pkts-*`.
  - Internal tokens package renamed from `@esnet/esnet-tokens` to `@esnet/pkts-tokens`.

  **ui-react**

  - Migrated component styles for Accordion, CodeBlock, Dropdown, InputOption, InputRow, InputSelect, InputTypeahead, Label, SkeletonChip, Spacer, and Tooltip from inline/component-scoped CSS into `ui-css`.
  - Refactored Button and IconButton prop interface.
  - Fixed Accordion close behavior.
  - Fixed empty string selected value issue on InputSelect.
  - Fixed Typeahead component issues.
  - Fixed inert attribute handling on Dropdown.
  - Fixed PktsChip vertical padding for icon/avatar alignment.
  - Added missing stories for InputOption and Label.
  - Generated component documentation.

  **ui-web**

  - Added PktsChipGroup web component.
  - Renamed `--esnet-` CSS variable prefix to `--pkts-`.

  **ui-css**

  - Migrated styles for all components listed above from ui-react into ui-css, making them available to CSS-only and web component consumers.
  - Added padding tokens to replace hard-coded values.
  - Added tokens for several previously non-tokenized CSS values.
  - Fixed CSS variable shadow typo.
  - Updated component comment prefix from `esnet` to `pkts` in index.css.

## 0.1.1

### Patch Changes

- 60d6c6b: Add and update README.md to packages
