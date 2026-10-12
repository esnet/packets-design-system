---
name: pkts-css
description: Generate correct CSS class and HTML markup usage for a Packets Design System component. Use when user asks how to use Packets with plain CSS or HTML class names, "CSS usage for a Packets component", "HTML markup for a pkts- component", "what class names does", "Packets CSS classes", "how to style with Packets CSS without React", "Packets in a Django template", "Packets in static HTML", "Packets CSS only". Do not trigger for generic CSS questions unrelated to Packets.
metadata:
  author: ESnet
  category: usage
  tags: [packets, design-system, css, usage]
---

# pkts-css

Generates correct HTML markup and CSS class names for a Packets Design System component.

## Instructions

### Step 1: Identify the component

If the user provided a component name (e.g. `PktsButton`) or a kebab-case name (e.g. `button`), proceed to Step 2.

If the user described a need, read `.claude/skills/pkts-find/references/component-catalog.md`, identify the best match, confirm if ambiguous, then proceed.

Note: some component CSS filenames do not follow strict kebab conversion. Known exceptions:
- `PktsInputRadioButton` uses `input-radio.css` (not `input-radio-button.css`)
- `PktsInputDate` and `PktsInputDateRange` have no CSS file (React/Web only)
- `PktsInputFile` has no CSS file currently

### Step 2: Read the CSS file

Attempt to read `packages/ui-css/src/components/<kebab>.css`. If the file does not exist, report that no CSS implementation exists for this component and suggest `/pkts-react` or `/pkts-web` instead. Do not reference CLAUDE.md platform tables to determine existence: attempt the read and let the result speak.

### Step 3: Generate usage output

Produce the following sections:

**Install**
```bash
npm install @esnet/packets-ui-css
```

```css
@import '@esnet/packets-ui-css/styles.css';
```

**Root class setup**
Add the `packets` class to your root element so design tokens resolve correctly:
```html
<body class="packets">
  <!-- or <body class="packets dark"> for dark mode -->
```

**Base markup**
A minimal HTML snippet using the base class `.pkts-<kebab>`.

**Modifier classes**
A table of variant/modifier classes only (e.g. `.pkts-primary`, `.pkts-branded`). Derive these from class selectors in the CSS file. Do not include state classes here: those go in States.

**States**
List interactive states the component uses and how to apply them. Check for both pseudo-class patterns (`:disabled`, `:hover`, `:focus`) and explicit class patterns (`.pkts-disabled`, `.pkts-error`): document whichever the file actually uses. Include `:active` if present.

If the component is CSS-only (no React or Web Component counterpart), note this explicitly.
If the component exists in React or Web but is being used here via CSS only, note that.

**Design tokens**
List all `var(--pkts-*)` tokens used in the file, sorted alphabetically.

## Rules

- Only read files under `packages/ui-css/`. Never read `packages/ui-react/` or `packages/ui-web/`.
- Derive all class names directly from the CSS file. Do not invent classes.
- Modifier classes (variants) and state classes (disabled, error) are separate: do not mix them in the Modifier table.
- If a modifier class requires a specific HTML element (e.g. `<button>` vs `<a>`), note it.
- Keep markup examples semantic: use the correct HTML element for the component's role.
