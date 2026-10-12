---
name: pkts-web
description: Generate correct Web Component usage code for a Packets Design System component. Use when user asks how to use a Packets component as a Web Component or custom element, in vanilla HTML/JS, without a framework, or asks "how do I use pkts-button", "Web Component usage for", "custom element example", "Packets in plain HTML", "vanilla JS usage", "use Packets in a non-framework project", "use Packets without React". Also triggers when user describes a need and specifies no framework or vanilla JS context.
metadata:
  author: ESnet
  category: usage
  tags: [packets, design-system, web-components, usage]
---

# pkts-web

Generates correct Web Component (custom element) usage code for a Packets Design System component.

## Instructions

### Step 1: Identify the component

If the user provided a component name (e.g. `PktsButton`), proceed to Step 2.

If the user described a need, read `.claude/skills/pkts-find/references/component-catalog.md`, identify the best match, confirm if ambiguous, then proceed.

### Step 2: Read the component source

Read `packages/ui-web/src/components/index.ts` to find the correct export path for the component and confirm the exported symbol name: some class names inside a file differ from the barrel export (e.g. `PktsAvatarElement` is exported as `PktsAvatar`). Use the exported name in all examples. Some components live in subdirectories; the barrel is the authoritative path.

Then read:
- The component `.ts` file at the resolved path
- `<Name>.types.ts` only if it exists in the same folder: if absent, derive attributes from `observedAttributes` and getter/setter pairs in the `.ts` file

For components exported from subdirectories (e.g. PktsInputDatePicker is split across multiple files), read all `.ts` files in that folder that contain a `customElements.define` call, and generate separate usage blocks for each registered element.

If the component does not exist in Web Components (check CLAUDE.md platform parity), say so clearly and suggest `/pkts-react` or `/pkts-css` as appropriate.

### Step 3: Generate usage output

Produce the following sections:

**Install**
```bash
npm install @esnet/packets-ui-web @esnet/packets-ui-css
```
Import the CSS:
```css
@import '@esnet/packets-ui-css/styles.css';
```
Add `class="packets"` to your root element for design tokens to resolve.

**Register**

Importing the class is sufficient: each module self-registers its custom element on import:
```js
import { PktsButton } from "@esnet/packets-ui-web"; // auto-registered on import
```
To register all components at once (no tree-shaking):
```js
import "@esnet/packets-ui-web";
```

**Basic HTML usage**
A minimal working HTML snippet using the correct tag name and key attributes.

**Attributes**

Build the attributes table from `observedAttributes` only. These are the reactive HTML attributes that trigger re-renders. Classify each as its type (string, boolean) with default and description.

If a prop appears in the types file but NOT in `observedAttributes`, list it separately under "JavaScript-only properties" with a note that setting it as an HTML attribute has no effect: it must be set via JS property assignment.

**JavaScript API**
Show how to set properties and listen to events programmatically.

**Variants**
One HTML snippet per variant, if the component has a `variant` attribute.

## Rules

- Only read files under `packages/ui-web/`. Never read `packages/ui-react/` or `packages/ui-css/`.
- Derive the HTML tag name from `static tagName` in the component class.
- Do not invent attributes. Only use what is in `observedAttributes` and the source files.
- Boolean attributes follow HTML convention: present = true, absent = false.
- Do not call `customElements.define()` manually in examples: all components self-register on import.
