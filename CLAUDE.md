# Packets Design System: Developer Reference

## Packages

| Package | npm | Version |
|---|---|---|
| React | `@esnet/packets-ui-react` | see `packages/ui-react/package.json` |
| Web Components | `@esnet/packets-ui-web` | see `packages/ui-web/package.json` |
| CSS | `@esnet/packets-ui-css` | see `packages/ui-css/package.json` |

## Naming Conventions

Given a component name like `PktsIconButton`:

| Format | Result | Usage |
|---|---|---|
| PascalCase | `PktsIconButton` | React component, folder name, TypeScript class |
| kebab-case | `icon-button` | CSS filename, Web Component tag suffix |
| Web tag | `pkts-icon-button` | Custom element tag name in HTML |
| CSS class | `.pkts-icon-button` | Base CSS class |
| Display name | `Icon Button` | Documentation, labels |

**Conversion rule:** Strip `Pkts` prefix, convert PascalCase to kebab-case.

## File Paths

### React (`packages/ui-react/`)

| Asset | Path |
|---|---|
| Component | `src/components/<Name>/<Name>.tsx` |
| Types | `src/components/<Name>/<Name>.types.ts` |
| Index | `src/components/<Name>/index.ts` |
| Tests | `src/components/<Name>/__tests__/<Name>.test.tsx` |
| Barrel | `src/components/index.ts` |
| Stories | `apps/react-docs/src/stories/<Name>.stories.tsx` |

### Web Components (`packages/ui-web/`)

| Asset | Path |
|---|---|
| Component | `src/components/<Name>/<Name>.ts` |
| Types | `src/components/<Name>/<Name>.types.ts` |
| Index | `src/components/<Name>/index.ts` |
| Barrel | `src/components/index.ts` |
| Stories | `apps/web-docs/src/<Name>.stories.ts` |

### CSS (`packages/ui-css/`)

| Asset | Path |
|---|---|
| Component styles | `src/components/<kebab>.css` |
| Global import | `src/index.css` (add `@import './components/<kebab>.css';`) |
| Stories | `apps/css-docs/src/<Name>.stories.ts` |

### Documentation

| Asset | Path |
|---|---|
| MDX doc page | `apps/host-docs/src/components/<kebab>.mdx` |

## Platform Parity

### All three platforms: CSS, React, Web (26 components)

PktsAlert, PktsAvatar, PktsBreadcrumbs, PktsButton, PktsButtonGroup, PktsChip, PktsChipGroup, PktsCommaSeperatedList, PktsDataTable, PktsDatum, PktsDivider, PktsFormSection, PktsIconButton, PktsInputCheckbox, PktsInputDatePicker, PktsInputEmail, PktsInputNumber, PktsInputPassword, PktsInputRadioButton, PktsInputSearch, PktsInputSwitch, PktsInputText, PktsModule, PktsSpinner, PktsTabs, PktsTitleSection

### CSS and React only (no Web Component)

PktsAccordion, PktsCodeBlock, PktsDropdown, PktsInputOption, PktsInputRow, PktsInputSelect, PktsInputTextArea, PktsInputTypeahead, PktsLabel, PktsListTreeView, PktsSkeletonSurface, PktsSpacer, PktsTableOfContents, PktsTooltip

### React and Web only (no CSS)

PktsInputDate, PktsInputDateRange

### CSS and Web only (no React)

PktsBadge, PktsCard, PktsIcon

### CSS only

PktsSkeletonChip

### Not yet in published barrel (React component exists but is not exported)

PktsInputFile

### Sub-components (not standalone; used inside a parent)

PktsTab (inside PktsTabs), PktsInputDatePickerDate, PktsInputDatePickerTime (inside PktsInputDatePicker)

## Architecture Patterns

### React

- Functional components with `React.FC<Props>` or typed return
- `clsx` for class composition. Never use string concatenation.
- JSDoc block at the top of every component
- `displayName` set on every component
- Props in a separate `.types.ts` file
- Variants via `variant` prop matching CSS class suffixes (e.g. `pkts-primary`)
- `forwardRef` when the component exposes a DOM element
- Spacing/sizing via `var(--pkts-size-*)` tokens, never raw px

### Web Components

- Every component extends `SlottedComponent` from `../../lib/SlottedComponent`
- `static tagName = 'pkts-<kebab>'`
- `static get observedAttributes()` lists all public props as strings
- Getter/setter pair for each observed attribute
- `customElements.define(ClassName.tagName, ClassName)` at the bottom of the file
- Types interface extends `Partial<HTMLElement>` or a relevant HTML element base
- Props exposed as HTML attributes (kebab-case in HTML, camelCase in JS)

### CSS

- Base class `.pkts-<kebab>` plus composable modifier classes (`.pkts-primary`, `.pkts-branded`, etc.)
- All spacing uses `var(--pkts-size-spacing-*)` with fallback: `var(--pkts-size-spacing-xsmall, 8px)`
- All colors use `var(--pkts-color-*)` with fallback
- All border radii use `var(--pkts-size-radius-*)` with fallback
- Spacing values must be on the 4px grid
- Interactive components must have `:hover`, `:focus`, `:active`, `.pkts-disabled`, and `.pkts-error` states
- Dark theme via CSS custom properties. No separate class needed; tokens handle it.

## Story Formats

### React stories (`apps/react-docs/`)

```ts
import type { Meta, StoryObj } from "@storybook/react";
import { PktsButton } from "@esnet/packets-ui-react";
const meta: Meta<typeof PktsButton> = {
  title: "Components/PktsButton",
  component: PktsButton,
  tags: ["autodocs"],
};
```

### Web Component stories (`apps/web-docs/`)

```ts
import type { Meta, StoryObj } from "@storybook/web-components";
import { PktsButton } from "@esnet/packets-ui-web";
const meta: Meta = {
  title: "Components/PktsButton",
  component: PktsButton.tagName,
  tags: ["autodocs"],
};
```

### CSS stories (`apps/css-docs/`)

```ts
import type { Meta, StoryObj } from "@storybook/html";
const meta: Meta = {
  title: "Components/PktsButton",
  tags: ["autodocs"],
  render: (args) => {
    const el = document.createElement("button");
    el.className = `pkts-button pkts-${args.variant}`;
    return el;
  },
};
```

## Design Token Spacing Scale

| Token | Value |
|---|---|
| `--pkts-size-spacing-none` | 0 |
| `--pkts-size-spacing-xxsmall` | 0.25rem (4px) |
| `--pkts-size-spacing-xsmall` | 0.5rem (8px) |
| `--pkts-size-spacing-small` | 0.75rem (12px) |
| `--pkts-size-spacing-medium` | 1rem (16px) |
| `--pkts-size-spacing-large` | 2rem (32px) |
| `--pkts-size-spacing-xlarge` | 2.5rem (40px) |
| `--pkts-size-spacing-xxlarge` | 4rem (64px) |
| `--pkts-size-spacing-xxxlarge` | 5.5rem (88px) |

## Build & Test Commands

```bash
pnpm run build         # build all packages
pnpm run lint          # lint all packages
pnpm run format        # format all packages
pnpm run test          # run unit tests
```
