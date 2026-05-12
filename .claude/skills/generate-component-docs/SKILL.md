---
name: generate-component-docs
description: Use when generating documentation for a Packets Design System UI component, to produce a complete design + code doc page matching the standard section format.
---

# Generate Component Docs

Generates a full documentation page for one Packets Design System component.
Input: a component name like `PktsIconButton` or `PktsInputText`.

## Name Conversion

`PktsIconButton` → `icon-button` for CSS/story filenames (strip `Pkts`, camelCase → kebab-case).

## File Locations

| Asset           | Path pattern                                                                 |
| --------------- | ---------------------------------------------------------------------------- |
| CSS styles      | `packages/ui-css/src/components/<kebab>.css`                                 |
| React component | `packages/ui-react/src/components/<Name>/<Name>.tsx` and `<Name>.types.ts`   |
| Web component   | `packages/ui-web/src/components/<Name>/<Name>.ts` and `<Name>.types.ts`      |
| React stories   | `apps/react-docs/src/stories/<Name>.stories.tsx`                             |
| CSS/WC stories  | `apps/css-docs/src/<Name>.stories.ts`, `apps/web-docs/src/<Name>.stories.ts` |

## Research Before Writing

1. **Design Tokens** — extract and sort alphabetically:
   ```
   grep -oP "var\(--pkts-[a-z0-9\-]+" packages/ui-css/src/components/<kebab>.css | sort -u
   ```
2. **States/Themes** — read CSS file for class selectors (`.dark`, `.pkts-branded`, `.pkts-error`, `.pkts-disabled`, variant classes). Read story named exports for state names.
3. **Parameters** — read `<Name>.types.ts` in both ui-react and ui-web.
4. **Overview** — read JSDoc `/**` block at top of `<Name>.tsx`.
5. **Anatomy** — read the render method in `.tsx` (or `connectedCallback`/`_renderInitial` in WC `.ts`).
6. **Availability versions** — read `version` field from `packages/ui-react/package.json`, `packages/ui-web/package.json`, `packages/ui-css/package.json`.
7. **Tests** — check whether `packages/ui-react/src/components/<Name>/__tests__/` exists.

## Output

Write the completed documentation to `<ComponentName>.md` in the repo root (e.g. `PktsInputText.md`). This file is gitignored - it is a temporary draft. The user will copy its contents into Google Drive.

Begin the file with this exact warning line, followed by a blank line:

```
> **DRAFT - do not commit.** Copy contents to Google Drive. This file is gitignored.
```

Then the documentation content below it:

## Output Template

Fill `[...]` with researched content. Leave **TODO** markers as-is — do not invent URLs.

```
## [section number] [Component Display Name]

### Design

#### **Overview**
[One paragraph: purpose, key states, and when to prefer a more specific component instead. Source: JSDoc block.]

#### **Availability & resources**
- Figma
- Github
- Storybook

#### **Dependent Design Tokens**
[Each --pkts-* token as a bullet point, sorted first by colors then rest of tokens, then within each sorted alphabetically.]

#### **States and Behaviours**
- Themes:
  [List variants/themes found in CSS selectors and stories]

Each theme above comes with the following states:
- Default
- Hover/Focus/On Click/Press
[Include Invalid, Disabled only if .pkts-error / .pkts-disabled CSS selectors exist]

#### **Best Practices**
- When to use this component
  - [condition 1]
  - [condition 2]
- How to use this component
  - Do:
    - [do 1]
    - [do 2]
  - Don't:
    - [don't 1]
    - [don't 2]

#### **Anatomy**
- What are the atomic elements of this component?
  [List HTML elements from render output, e.g. wrapper div, input, label, helper text span. Focus only on things that are true for both React and WC]

#### **Accessibility Scoring**
[If __tests__ dir exists: "Playwright tests exist for this component." Note if a11y assertions are present.]
[If no __tests__ dir: "Not yet tested."]

### Code

#### **Parameters**

**React (`packages/ui-react`)**
[For each prop: `- \`propName\` (type): description. Default: value`]

**Web Component (`packages/ui-web`)**
[For each attribute/property: same format. Note tag name: `<pkts-<kebab>>`]

#### **Sandbox or Storybook**
- **TODO:** Embed Storybook iframe

#### **Availability**
| Platform | Package | Version |
| -------- | ------- | ------- |
| CSS | `@esnet/packets-ui-css` | [from packages/ui-css/package.json] |
| React | `@esnet/packets-ui-react` | [from packages/ui-react/package.json] |
| Web Component | `@esnet/packets-ui-web` | [from packages/ui-web/package.json] |
```

## Rules

- Tokens: always alphabetically sorted; always use `--pkts-*` prefix.
- Do not invent Figma or Storybook URLs - leave the **TODO** markers.
- Any portions that seem to be inconsistent or are unsure (such as section number) - leave **TODO** markers.
- If a component exists in React but not WC (or vice versa), note "Not available" in the Parameters section.
- Read `package.json` for versions at generation time - do not hard-code version numbers.
