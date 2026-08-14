---
name: scaffold-css
description: Scaffold a new CSS component file for the Packets Design System. Use when a contributor wants to create CSS styles for a new Packets component, "create CSS for a Packets component", "scaffold a pkts- CSS component", "scaffold CSS component", "add styles for a new Packets component", "new CSS component file". Requires a component name or kebab-case filename.
metadata:
  author: ESnet
  category: development
  tags: [packets, design-system, css, scaffold, boilerplate]
---

# scaffold-css

Generates the CSS file for a new Packets component and registers it in the global import list.

## Instructions

### Step 1: Confirm the component name

Accept either PascalCase (`PktsInputFile`) or kebab-case (`input-file`). Derive both forms.

Check that the file does not already exist: `packages/ui-css/src/components/<kebab>.css`. If it does, stop and tell the contributor. Ask whether they meant to extend the existing file.

Determine whether the component is interactive (needs hover/focus/active/disabled/error states) using this heuristic: if the component name contains `input`, `button`, `dropdown`, `switch`, `checkbox`, `radio`, `typeahead`, or `search`, default to including all interactive states without asking. Otherwise ask.

Ask what variants the component supports (e.g. `default`, `branded`). If none, omit variant rules.

### Step 2: Read the reference file

Read `packages/ui-css/src/components/button.css` to understand token and class patterns.

### Step 3: Generate the CSS file

**`packages/ui-css/src/components/<kebab>.css`**

All color tokens must include a raw hex fallback. All spacing tokens must include a rem/px fallback. All typography tokens must include a raw font shorthand fallback.

```css
/* ============================================================
   PKTS-<KEBAB-UPPER>
   <Display Name> component styles.
   Variants: default<, branded>
   ============================================================ */

.pkts-<kebab> {
  /* Layout */
  display: flex;
  gap: var(--pkts-size-spacing-xsmall, 0.5rem);

  /* Typography */
  font: var(--pkts-typography-body-1-sans-font, 400 16px/140% sans-serif);

  /* Colors */
  background: var(--pkts-color-core-white-600, #f5f5f5);
  color: var(--pkts-color-core-black-100, #6e6e70);

  /* Border */
  border-radius: var(--pkts-size-radius-medium, 0.5rem);

  cursor: default;
}

/* Variants — remove if no variants */
.pkts-<kebab>.pkts-branded {
  border: var(--pkts-size-border-width-small, 0.125rem) solid
    var(--pkts-color-core-blue-600, #0058b0);
  box-shadow:
    0px 4px 5px 0px rgba(0, 0, 0, 0.1),
    0px 2px 3px 0px rgba(0, 0, 0, 0.1);
}

/* Interactive states — remove sections that do not apply */
.pkts-<kebab>:hover {
  background: var(--pkts-color-core-white-800, #e5e5e5);
}

.pkts-<kebab>:focus-visible {
  outline: var(--pkts-size-border-width-small, 0.125rem) solid
    var(--pkts-color-core-blue-600, #0058b0);
  outline-offset: 2px;
}

.pkts-<kebab>:active {
  background: var(--pkts-color-core-white-900, #d4d4d4);
}

.pkts-<kebab>.pkts-disabled,
.pkts-<kebab>:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
}

/* Form inputs only — remove if not a form element */
.pkts-<kebab>.pkts-error {
  border-color: var(--pkts-color-core-red-600, #c00000);
}
```

Adapt the template:
- Remove states that do not apply to non-interactive components
- Remove `pkts-error` for non-form components
- Replace `display: flex` with the appropriate layout
- Remove the Variants block if the component has no variants
- Keep all color values as `var(--pkts-*)` tokens with hex fallbacks

### Step 4: Register in index.css

Read `packages/ui-css/src/index.css`. The file is ordered in **reverse alphabetical order** (tooltip first, accordion last). Insert the new import between the two neighbors that bracket `<kebab>` in reverse-alpha order:
```css
@import './components/<kebab>.css'; /* <ComponentName> */
```

### Step 5: Confirm

List all files created and modified. Remind the contributor to:
1. Run `/review-css <kebab>` in Claude Code to verify token usage before committing
2. Run `pnpm run format`
3. Add a React component if needed (`/scaffold-react`)
4. Add a Web Component if needed (`/scaffold-web`)

## Rules

- All spacing must use `var(--pkts-size-spacing-*)` with a rem fallback.
- All colors must use `var(--pkts-color-*)` with a hex fallback.
- All border radii must use `var(--pkts-size-radius-*)` with a rem fallback.
- All border widths must use `var(--pkts-size-border-width-*)` with a rem fallback.
- All typography font values must use `var(--pkts-typography-*)` with a raw font shorthand fallback.
- No raw px spacing values that are not multiples of 4.
- The import in `index.css` must be inserted in reverse-alphabetical order, not appended.
- Remove boilerplate sections that do not apply to the specific component.
