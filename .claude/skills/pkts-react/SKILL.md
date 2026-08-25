---
name: pkts-react
description: Generate correct React usage code for a Packets Design System component. Use when user asks how to use a Packets component in React, wants an import statement, needs prop examples, or asks "how do I use PktsButton in React", "show me PktsInputText props", "Packets React usage for", "how to implement a Packets component", "Packets React example for". Also triggers when user describes a need in a React context like "I need a file upload in React" and no component has been identified yet. Do not trigger for generic React questions unrelated to Packets.
metadata:
  author: ESnet
  category: usage
  tags: [packets, design-system, react, usage]
---

# pkts-react

Generates correct React import and usage code for a Packets Design System component.

## Instructions

### Step 1: Identify the component

If the user provided a component name (e.g. `PktsButton`), proceed to Step 2.

If the user described a need (e.g. "I need a file upload"), read `.claude/skills/pkts-find/references/component-catalog.md`, identify the best match, confirm with the user if ambiguous, then proceed with that component.

### Step 2: Read the component source

Read:
- `packages/ui-react/src/components/<Name>/<Name>.tsx` (required)
- `packages/ui-react/src/components/<Name>/<Name>.types.ts` if it exists; if not, check for `<Name>Props.ts` or derive props directly from the component source

If the component folder does not exist in React, check CLAUDE.md platform parity and respond accordingly:
- If the component exists only as a Web Component (PktsBadge, PktsCard, PktsIcon), say so and suggest `/pkts-web`.
- If the component exists only in CSS, say so and suggest `/pkts-css`.
- If the component does not exist on any platform, say so.

If the component is listed under React-only in CLAUDE.md, note at the end of output: "Note: this component has no Web Component or CSS equivalent."

For compound components that export multiple named values (e.g. PktsTabs also exports PktsTab), scan the `.tsx` file for sibling imports from the same directory and include all exported names in the import statement and usage example.

### Step 3: Generate usage output

Produce the following sections:

**Install**
```bash
npm install @esnet/packets-ui-react @esnet/packets-ui-css
```
Import the CSS in your app entry point:
```css
@import '@esnet/packets-ui-css/styles.css';
```
Add `class="packets"` to your root element for design tokens to resolve.

**Import**
```tsx
import { <ComponentName> } from "@esnet/packets-ui-react";
```
Always import from the package root, never from a subpath.

**Basic usage**
A minimal working JSX snippet using the most common props and the default variant.

**Props**
A concise table of the most important props: name, type, default, description. Derive only from the types file. Omit internal or rarely-used props.

**Variants**
Only include this section if the component has a `variant` prop (confirmed from the types file). Show one JSX snippet per variant value. Omit entirely for components with no variant.

**Notes**
Any non-obvious behaviors, accessibility requirements, or common mistakes. Skip this section if there is nothing worth noting.

## Rules

- Only read files under `packages/ui-react/`. Do not read `packages/ui-web/` or `packages/ui-css/`.
- Do not read the story file.
- Do not invent props. Only use what is in the source files.
- Keep output concise. One working example is better than five variations.
- `import { PktsButton } from "@esnet/packets-ui-react"` resolves through the package barrel. Never suggest importing from a subpath like `@esnet/packets-ui-react/PktsButton`.
