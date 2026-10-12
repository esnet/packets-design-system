---
name: component-audit
description: Audit the Packets Design System for component parity gaps, missing stories, and missing documentation pages. Use when contributor asks for a parity report, "what components are missing from Web", "which components have no docs", "audit Packets components", "find gaps between platforms", "which components are missing from the design system", "find missing components in the design system".
metadata:
  author: ESnet
  category: maintenance
  tags: [packets, design-system, audit, parity, maintenance]
---

# component-audit

Cross-references all three Packets platforms and documentation to find parity gaps, missing stories, and missing MDX doc pages.

## Instructions

### Step 1: Read the index and catalog files

Read these four files:
1. `packages/ui-react/src/components/index.ts`: extract all exported React component names
2. `packages/ui-web/src/components/index.ts`: extract all exported Web Component names. Sub-components exported from a parent directory path (e.g. `./PktsInputDatePicker/PktsInputDatePickerDate`) are sub-components: do not count them as standalone components for parity purposes.
3. `packages/ui-css/src/index.css`: extract CSS component names by parsing each `@import` line that ends with an inline comment in the format `/* PktsXxx */` and extracting that PascalCase name
4. `.claude/skills/pkts-find/references/component-catalog.md`: the canonical component list (source of truth)

After extraction, produce a sub-list of names found in the three index files but absent from the catalog. Label this "Uncataloged components (in index but missing from catalog)."

### Step 2: Check story coverage

For each component in the catalog, attempt to read (existence check only: do not read contents):
- `apps/react-docs/src/stories/<Name>.stories.tsx`
- `apps/web-docs/src/<Name>.stories.ts`
- `apps/css-docs/src/<Name>.stories.ts`

### Step 3: Check documentation coverage

For each component, attempt to read `apps/host-docs/src/components/<kebab>.mdx` (note: docs live under `src/components/`, not directly under `src/`).

### Step 4: Produce the report

**Platform parity gaps**

| Component | React | Web | CSS | Notes |
|---|---|---|---|---|

List only components with at least one platform gap.

**Missing stories**

| Component | React Story | Web Story | CSS Story |
|---|---|---|---|

**Missing documentation pages**

Plain list of components with no `apps/host-docs/src/components/<kebab>.mdx`.

**Uncataloged components**

List any names found in the index files but absent from the catalog. These may be sub-components, internal helpers, or newly added components that need a catalog entry.

**Summary**

- Total components in catalog: N
- Components with full platform parity (all applicable platforms): N
- Components with at least one platform gap: N
- Components missing at least one story: N
- Components missing documentation: N

## Rules

- Only read index files, the catalog, and story/doc files for existence checks.
- Do not read individual component source files (e.g. PktsButton.tsx).
- Use the catalog as the source of truth for what should exist. Index files reveal what does exist.
- Sub-components (exported from a parent component's subdirectory) are not standalone catalog entries: skip them in parity analysis.
- Do not attempt to fix gaps. Report only.
