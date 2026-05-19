---
name: generate-component-docs
description: Use when generating documentation for a Packets Design System UI component, to produce a complete design + code doc page matching the standard section format.
---

# Generate Component Docs

Generates a full documentation page for one Packets Design System component.
Input: a component name like `PktsIconButton` or `PktsInputText`.

## Name Conversion

`PktsIconButton` → `icon-button` for CSS/story filenames (strip `Pkts`, camelCase → kebab-case).
`PktsIconButton` → `Icon Button` for display name (strip `Pkts`, camelCase → space-separated words).

## File Locations

| Asset           | Path pattern                                                                 |
| --------------- | ---------------------------------------------------------------------------- |
| CSS styles      | `packages/ui-css/src/components/<kebab>.css`                                 |
| React component | `packages/ui-react/src/components/<Name>/<Name>.tsx` and `<Name>.types.ts`   |
| Web component   | `packages/ui-web/src/components/<Name>/<Name>.ts` and `<Name>.types.ts`      |
| React stories   | `apps/react-docs/src/stories/<Name>.stories.tsx`                             |
| CSS/WC stories  | `apps/css-docs/src/<Name>.stories.ts`, `apps/web-docs/src/<Name>.stories.ts` |

## Research Before Writing

Steps are ordered to match the document sections they fill.

1. **Overview** — read JSDoc `/**` block at top of `<Name>.tsx`. If no JSDoc exists, derive from the component's display name and render output.
2. **States/Variants** — read CSS file for class selectors (`.pkts-branded`, `.pkts-error`, `.pkts-disabled`, etc.) and the `variant` prop in `<Name>.types.ts` to enumerate variants. Themes are always light/dark.
3. **Best Practices** — draw 2-4 bullets each for Do/Don't from JSDoc, component usage patterns in stories, and component intent.
4. **Availability versions** — read `version` field from `packages/ui-react/package.json`, `packages/ui-web/package.json`, `packages/ui-css/package.json`.
5. **Design Tokens** — extract and sort alphabetically:
   ```
   grep -oP "var\(--pkts-[a-z0-9\-]+" packages/ui-css/src/components/<kebab>.css | sort -u
   ```
   Note: multi-line `var(` calls won't be captured — visually scan the CSS for any missed tokens.

## Output

Write the completed documentation to `apps/host-docs/src/<kebab>.mdx` (e.g. `apps/host-docs/src/input-text.mdx`).

The file must be clean MDX: a `<Meta>` import + tag at the top, then pure markdown at zero indentation. Do NOT wrap content in `<div>` blocks — 4-space indentation inside JSX breaks GFM list and heading parsing.

Tables MUST use JSX `<table>` syntax, not markdown pipe tables. The Storybook MDX pipeline does not enable GFM table parsing.

## Output Template

Fill `[...]` with researched content. Leave **TODO** markers as-is — do not invent URLs.

Only include States that actually exist for the component. If there are no interaction states beyond default, omit the States line entirely.

```mdx
import { Meta } from "@storybook/blocks";

<Meta title="Component Documentation/[Component Display Name]" />

# [Component Display Name]

### Overview

[One paragraph: purpose, key states, and when to prefer a more specific component instead. Source: JSDoc block.]

### States and Behaviours

**Variants**: [Comma separated list of variants from the variant prop, e.g. primary, branded.]

**Themes**: Light (default), Dark

**States**: Default, Hover, Focus, Active

### Best Practices

- When to use this component
  - [condition 1]
  - [condition 2]
- How to use this component
  - Do:
    - [do 1]
  - Don't:
    - [don't 1]

### Accessibility Scoring

**TODO**

---

## Code

### Sandbox or Storybook

**TODO:** Embed Storybook iframe

### Resources

<table>
  <thead>
    <tr>
      <th>Resource</th>
      <th>Link</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Figma</td>
      <td>
        <strong>TODO</strong>
      </td>
    </tr>
    <tr>
      <td>GitHub</td>
      <td>
        <strong>TODO</strong>
      </td>
    </tr>
  </tbody>
</table>

### Availability

<table>
  <thead>
    <tr>
      <th>Platform</th>
      <th>Package</th>
      <th>Version</th>
      <th>Component Storybook</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>CSS</td>
      <td>
        <code>@esnet/packets-ui-css</code>
      </td>
      <td>[version]</td>
      <td>
        <strong>TODO</strong>
      </td>
    </tr>
    <tr>
      <td>React</td>
      <td>
        <code>@esnet/packets-ui-react</code>
      </td>
      <td>[version]</td>
      <td>
        <strong>TODO</strong>
      </td>
    </tr>
    <tr>
      <td>Web Component</td>
      <td>
        <code>@esnet/packets-ui-web</code>
      </td>
      <td>[version]</td>
      <td>
        <strong>TODO</strong>
      </td>
    </tr>
  </tbody>
</table>

### Dependent Design Tokens

[All --pkts-* tokens as a single flat bullet list, sorted alphabetically.]
```

## Rules

- Tokens: single flat list, sorted alphabetically; always use `--pkts-*` prefix.
- Do not invent Figma, GitHub, or Storybook URLs - leave the **TODO** markers.
- Only include facts true across all three implementations (CSS, Web Component, React). Do not mention implementation-specific class names, prop names, or attributes.
- If a component exists in React but not WC (or vice versa), note "Not available" in the relevant row.
- Read `package.json` for versions at generation time - do not hard-code version numbers.
