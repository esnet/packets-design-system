---
name: review-web
description: Review a Packets Design System Web Component against project conventions and quality standards. Use when contributor asks to review a Packets Web Component, "check this Packets Web Component", "does this follow Packets Web Component patterns", "review my pkts- custom element", or when preparing a Web Component for a pull request.
metadata:
  author: ESnet
  category: review
  tags: [packets, design-system, web-components, review, conventions]
---

# review-web

Reviews a Web Component in `packages/ui-web/` against Packets conventions. Reports issues with severity (error, warning, suggestion) and suggests fixes.

## Instructions

### Step 1: Identify the component

Accept the component name as input (e.g. `PktsButton`). If not provided, ask.

If the component does not exist in `packages/ui-web/src/components/`, say so and stop.

### Step 2: Read source files

Read these files:
- `packages/ui-web/src/components/<Name>/<Name>.ts` (required — resolve actual path from barrel if needed)
- `packages/ui-web/src/components/<Name>/<Name>.types.ts` if it exists

Do not read React or CSS files.

### Step 3: Run the checklist

Check each item. Report every failure with: severity, file, line (if known), issue, and suggested fix.

#### Class structure
- [ ] Component class extends `SlottedComponent` (from `../../lib/SlottedComponent`)
- [ ] `static tagName` defined as `pkts-<kebab>` (e.g. `pkts-button`)
- [ ] `static get observedAttributes()` is defined
- [ ] `_renderInitial()` is implemented — sets `this.innerHTML` with the component template and includes a `<slot>` element
- [ ] `render()` is implemented — updates className and attributes based on current prop values
- [ ] `attributeChangedCallback(name, oldVal, newVal)` is implemented and calls `this.render()` when `oldVal !== newVal`
- [ ] `customElements.define(ClassName.tagName, ClassName)` is present at the bottom of the file
- [ ] `index.ts` re-export file exists at `packages/ui-web/src/components/<Name>/index.ts`

#### Props and attributes
- [ ] Every string in `observedAttributes` has a matching getter and setter
- [ ] Getters use `this.getAttribute()` with a sensible default value
- [ ] Setters use `this.setAttribute()` for string/enum values
- [ ] Boolean attribute setters use `setAttribute('')` for true and `removeAttribute()` for false (not string "true"/"false")
- [ ] Props in the types interface that are not functions and not internally derived should appear in `observedAttributes` (note: function props like `onClick` and JS-only props are exempt from this)
- [ ] `observedAttributes` strings use kebab-case (e.g. `is-active`, not `isActive`)

Note: if a prop has a getter/setter but is absent from `observedAttributes`, note it as a potential gap — it may be intentional (JS-only property) or an oversight. Do not automatically flag it as an error.

#### Types
- [ ] Types interface extends `Partial<HTMLElement>` or a more specific HTML element base
- [ ] All reactive props (those in `observedAttributes`) are present in the types interface
- [ ] No use of `any` type without a comment explaining why (warning)

#### Stories
- [ ] Story file exists at `apps/web-docs/src/<Name>.stories.ts`
- [ ] The `meta.component` value is set to `<ComponentName>.tagName` (e.g. `PktsButton.tagName`), not a raw string
- [ ] Story covers the default state and at least one variant

### Step 4: Report

Start with a summary line: `N errors, N warnings, N suggestions found.`

List findings grouped by severity (errors first):

```
[ERROR|WARNING|SUGGESTION] <File>: <Issue>
Fix: <Suggested fix>
```

End with: `Passed: <list of checks that passed>` — only if at least half passed.

## Rules

- Only read `packages/ui-web/` files and the story file in `apps/web-docs/`.
- Do not auto-fix. Report only.
