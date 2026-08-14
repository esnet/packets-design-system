---
name: review-css
description: Review a Packets Design System CSS component file against project conventions. Use when contributor asks to review a Packets CSS file, "check my Packets CSS", "does this Packets CSS follow conventions", "review Packets component styles", "check token usage in ui-css", or when preparing a CSS component for a pull request.
metadata:
  author: ESnet
  category: review
  tags: [packets, design-system, css, review, conventions, tokens]
---

# review-css

Reviews a CSS component file in `packages/ui-css/src/components/` against Packets conventions. Reports issues with severity (error, warning, suggestion) and suggests fixes.

## Spacing token reference

Use this table to suggest the nearest token for raw px spacing values:

| Token | Value |
|---|---|
| `--pkts-size-spacing-none` | 0 |
| `--pkts-size-spacing-xxsmall` | 4px / 0.25rem |
| `--pkts-size-spacing-xsmall` | 8px / 0.5rem |
| `--pkts-size-spacing-small` | 12px / 0.75rem |
| `--pkts-size-spacing-medium` | 16px / 1rem |
| `--pkts-size-spacing-large` | 32px / 2rem |
| `--pkts-size-spacing-xlarge` | 40px / 2.5rem |
| `--pkts-size-spacing-xxlarge` | 64px / 4rem |
| `--pkts-size-spacing-xxxlarge` | 88px / 5.5rem |

## Instructions

### Step 1: Identify the component

Accept the component name or kebab filename (e.g. `PktsButton` or `button`). Convert to kebab-case if needed. If not provided, ask.

Note: some filenames do not follow strict kebab conversion — `PktsInputRadioButton` maps to `input-radio.css`.

### Step 2: Read source file

Attempt to read `packages/ui-css/src/components/<kebab>.css`. If the file does not exist, report that it is absent and stop. Do not read any other files.

### Step 3: Run the checklist

Check each item. Report every failure with: severity, line (if known), issue, current value, and suggested fix.

#### Naming
- [ ] Base class is `.pkts-<kebab>` matching the filename
- [ ] All classes are prefixed with `.pkts-<component-kebab>` or a shared modifier (`.pkts-primary`, `.pkts-branded`, etc.) — no unprefixed or arbitrarily named classes

#### Spacing (gap, margin, padding)
- [ ] All `gap`, `margin`, `padding` values use `var(--pkts-size-spacing-*)` with a raw fallback
- [ ] All raw px spacing values are multiples of 4 (4, 8, 12, 16, 32, etc.)
- [ ] No spacing values that are not multiples of 4 (e.g. 5px, 10px, 3px are errors)
- [ ] `min-height` and fixed layout dimensions are acceptable as raw px if on the 4px grid

#### Colors
- [ ] All solid color values use `var(--pkts-color-*)` with a fallback
- [ ] No raw opaque hex values (e.g. `#ff0000`) or opaque `rgb()` values
- [ ] Translucent `rgba(...)` values (alpha less than 1) are acceptable for overlays, shadows, and backgrounds where no token covers the use case

#### Border radius
- [ ] All `border-radius` values use `var(--pkts-size-radius-*)` with a fallback

#### Border width
- [ ] All `border-width` or `border` shorthand pixel widths use `var(--pkts-size-border-width-*)` with a fallback where a token exists

#### Typography
- [ ] All font shorthand values use `var(--pkts-typography-*)` with a raw font shorthand fallback (e.g. `var(--pkts-typography-body-1-sans-font, 400 16px/140% sans-serif)`)

#### States (for interactive components)

To determine if a component is interactive, check whether the filename contains: `input`, `button`, `dropdown`, `switch`, `checkbox`, `radio`, `typeahead`, `search`, or similar. If so, apply all state checks:

- [ ] `:hover` state defined
- [ ] `:focus` or `:focus-visible` state defined
- [ ] `:active` state defined
- [ ] `.pkts-disabled` or `:disabled` state defined
- [ ] `.pkts-error` state defined (for form inputs: filename contains `input`, `checkbox`, `radio`, `switch`, `select`, `date`, `typeahead`, `search`)

For non-interactive components, skip the states section.

### Step 4: Report

Start with a summary line: `N errors, N warnings, N suggestions found.`

List findings grouped by severity (errors first):

```
[ERROR|WARNING|SUGGESTION] Line <N>: <Issue>
Current: <offending value>
Fix: <suggested replacement with token>
```

For spacing errors, use the spacing token reference table above to suggest the nearest token.

End with: `Passed: <list of checks that passed>` — only if at least half passed.

## Rules

- Only read the target CSS file. No other files.
- Do not auto-fix. Report only.
