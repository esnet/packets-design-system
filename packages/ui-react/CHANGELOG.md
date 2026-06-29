# @esnet/packets-ui

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

### Patch Changes

- Updated dependencies
  - @esnet/packets-ui-css@2.0.1-beta.0

## 0.9.1

### Patch Changes

- 60d6c6b: Add and update README.md to packages
- Updated dependencies [60d6c6b]
  - @esnet/packets-ui-css@0.1.1

## 0.9.0

### Minor Changes

- f7f38a9: Refactored Component - Skeletal Pill become more generically useful Skeletal Surface matching new designs provided by Rive
- 1e4b4f5: refactor - ESInputSwitch to have a simpler and matching API as other input elements
- 0a5ad3d: feat - ESIcon
- 5dcfcab: Feature: New Branded Spinner
- 717fb00: feat - implemented ESInputCheckbox. New components will now be updated as minor bumps.

### Patch Changes

- ef6a20c: feat - ESInputTextArea
- 161be57: implemented ESInputPassword
- ba12102: implemented ESInputSearch
- de2466e: feat - ESInputNumber
- feb9307: Feature: Added Reduced Motion Options to CSS Animations
- e7ec4c8: feat - ESInputEmail
- 7506233: Added input text components

## 0.8.0

### Minor Changes

- 77e4cc3: Feat: New Component Switch
- c656732: Feat: New Component Avatar

### Patch Changes

- b7f35de: Fix: primary color fixes and build pipeline fixes

## 0.7.0

### Minor Changes

- 6539a01: Feat: ESTreeListView Component

## 0.6.1

### Patch Changes

- db4532f: Fix - Fixed Primary Button colors in Dark Mode on ESButton

## 0.6.0

### Minor Changes

- 181cc60: feat - new typography tokens

### Patch Changes

- b7ddbc0: Feat: ESDataTable Sorting now powered by String instead of Enum
- dc8af7f: Fix - ESButton styling fixes for vertical height

## 0.5.0

### Minor Changes

- 4871eab: Base Typography Updates

## 0.4.0

### Minor Changes

- 384b20e: Change in build strategy to use React as a Peer Depedency and make ESM/CJS support better

## 0.3.0

### Minor Changes

- 9ab9fdd: Header and Body copy typography rules based on tokens
- e5535b5: Update: Updated typography rules with new font tokens

## 0.2.0

### Minor Changes

- ef65c70: New Global CSS Classes for Grid System, New Component ESFormSection, Refactored BreadcrumbType to more generic LinkType to DRY up code
- 64d87d4: Switched Dark Mode strategy to class based solution, Added Global Surface Classes
- 46edf68: New Component ESModule
- 4576dbf: New Component ESDataTable
- f80d408: Wiring up components with design token CSS variables
- 1b3f868: New Component ESAlert
- e41870b: New Component ESCommaSeperatedList
- d3404b2: New Component ESSkeletonPill
- 5bef0f4: New Component - ESTableOfContents
- 2ede7c3: New Components: ESTabs, ESTab
- f27bade: New Component ESSpinner
- f9b9f7e: New Component ESSpacer
- 9400046: New Component ESBreadcrumbs
- d7cb547: new Component ESDatum

### Patch Changes

- af8548a: Updates to polymorphic button logic, stories for how to use polymorphic button and snapshot tests

## 0.1.0

### Minor Changes

- fa06f4e: ESButtonGroup, a compositional component that lays out ESButtons and ButtonIcons in a vertical or horizontal row
- 0753de3: ESButton a general use branded ESnet button
- c2b6e54: ESIconButton a general use branded ESnet Icon button. Best paired with Lucide Icons
