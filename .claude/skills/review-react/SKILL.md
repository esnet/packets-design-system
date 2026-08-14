---
name: review-react
description: Review a Packets Design System React component against project conventions and quality standards. Use when contributor asks to review a React component, "does this React component follow Packets standards", "review my React component", "check this .tsx component", "review my React component for a pull request", or when preparing a React component for a pull request.
metadata:
  author: ESnet
  category: review
  tags: [packets, design-system, react, review, conventions]
---

# review-react

Reviews a React component in `packages/ui-react/` against Packets conventions. Reports issues with severity (error, warning, suggestion) and suggests fixes.

## Instructions

### Step 1: Identify the component

Accept the component name as input (e.g. `PktsButton`). If not provided, ask.

If the component folder does not exist in `packages/ui-react/src/components/`, check CLAUDE.md platform parity. If the component is Web-only or CSS-only, name the correct skill (`review-web` or `review-css`) and stop.

### Step 2: Read source files

Read these files:
- `packages/ui-react/src/components/<Name>/<Name>.tsx` (required)
- `packages/ui-react/src/components/<Name>/<Name>.types.ts` if it exists
- `apps/react-docs/src/stories/<Name>.stories.tsx` if it exists (needed for story checklist items)

Do not read Web Component or CSS files.

### Step 3: Run the checklist

Check each item. Report every failure with: severity, file, line (if known), issue, and suggested fix.

The `clsx` check detects template literals and string concatenation in `className` assignments, not merely whether `clsx` is imported.

The `forwardRef` check applies only to components whose root element is interactive or focusable (inputs, buttons, modals, scrollable containers). Do not flag pure display or layout components for missing `forwardRef`.

#### Structure
- [ ] Component is a functional component (`React.FC` or explicit return type)
- [ ] JSDoc block (`/** ... */`) present before the function declaration
- [ ] `displayName` set on the component
- [ ] Props are defined in a separate `.types.ts` file, not inline
- [ ] Default export matches the component name
- [ ] `index.ts` re-export file exists at `packages/ui-react/src/components/<Name>/index.ts`
- [ ] Test file exists at `packages/ui-react/src/components/<Name>/__tests__/<Name>.test.tsx` (warning if absent)

#### Styling
- [ ] All `className` composition uses `clsx` (no template literals or `+` concatenation on className)
- [ ] No raw px values for spacing (gap, margin, padding) — must use `var(--pkts-size-spacing-*)` tokens
- [ ] No raw hex or opaque rgb color values — must use `var(--pkts-color-*)` tokens (translucent rgba for overlays/shadows is acceptable)
- [ ] Variant class names match CSS pattern: `` `pkts-${variant}` `` (e.g. `pkts-primary`)

#### Props and types
- [ ] `variant` prop options match CSS modifier classes if variants exist
- [ ] `forwardRef` used when the component renders an interactive or focusable DOM element (warning if absent on inputs, buttons, modals)
- [ ] No use of `any` type in props (warning — sometimes unavoidable)
- [ ] Event handler props use React event types (e.g. `React.MouseEvent<HTMLDivElement>` matching the actual element)

#### Stories
- [ ] Story file exists at `apps/react-docs/src/stories/<Name>.stories.tsx`
- [ ] Story covers the default variant
- [ ] Story covers each named variant if variants exist

### Step 4: Report

Start with a summary line: `N errors, N warnings, N suggestions found.`

List findings grouped by severity (errors first):

```
[ERROR|WARNING|SUGGESTION] <File>: <Issue>
Fix: <Suggested fix>
```

End with: `Passed: <list of checks that passed>` — only if at least half passed.

## Rules

- Only read `packages/ui-react/` files and the story file in `apps/react-docs/`.
- Do not auto-fix. Report only.
