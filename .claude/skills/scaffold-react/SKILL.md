---
name: scaffold-react
description: Scaffold a new React component for the Packets Design System. Use when a contributor wants to create a new React component, "create a new React component", "scaffold a React component", "scaffold PktsXxx in React", "add a new React component to Packets", "generate React component boilerplate". Requires a component name in PascalCase starting with Pkts.
metadata:
  author: ESnet
  category: development
  tags: [packets, design-system, react, scaffold, boilerplate]
---

# scaffold-react

Generates all boilerplate files for a new Packets React component and registers it in the package barrel.

## Instructions

### Step 1: Confirm the component name

Ask for the component name if not provided. It must:
- Start with `Pkts` (e.g. `PktsInputFile`)
- Be PascalCase
- Not already exist

Run this check before proceeding:
```bash
ls packages/ui-react/src/components/ | grep -i "^<Name>$"
```
If the directory is found, stop and tell the contributor. Also check whether `apps/react-docs/src/stories/<Name>.stories.tsx` already exists before generating.

Derive: `<kebab>` (e.g. `input-file`) and `<display>` (e.g. `Input File`).

Ask: does this component have visual variants (e.g. `default`, `branded`)? If yes, ask what they are. If no, omit variant-related code throughout.

Also ask: what is the component's root HTML element (div, button, input, form, etc.)? This determines the types base.

### Step 2: Read reference files

Read these files to understand the patterns to follow:
- `packages/ui-react/src/components/PktsButton/PktsButton.tsx`
- `packages/ui-react/src/components/PktsButton/__tests__/PktsButton.test.tsx`

Use the story file only to confirm the import path and meta structure. The generated template starts minimal.

### Step 3: Generate files

Create the following 5 files. Adapt the root element and type base to match the component's purpose:
- Container/layout components: root `<div>`, extend `React.HTMLAttributes<HTMLDivElement>` or use a plain custom interface
- Button-like components: root `<button>`, extend `React.ComponentPropsWithoutRef<"button">`
- Input components: root `<input>`, extend `React.ComponentPropsWithRef<"input">`
- For simple components with few props, prefer a plain custom interface with no base extension (see `PktsDivider.types.ts` as reference)

**`packages/ui-react/src/components/<Name>/<Name>.tsx`**
```tsx
import * as React from "react";
import clsx from "clsx";
import { <Name>Props } from "./<Name>.types";

/**
 * <Display Name>: <one-line description of the component's purpose>
 *
 * @param {<Name>Props} props
 * @returns {React.ReactElement}
 */
const <Name>: React.FC<<Name>Props> = ({
  // IF VARIANTS: variant = "default",
  className,
  children,
  ...props
}) => {
  return (
    <div
      // IF VARIANTS: className={clsx("pkts-<kebab>", `pkts-${variant}`, className)}
      // IF NO VARIANTS: className={clsx("pkts-<kebab>", className)}
      {...props}
    >
      {children}
    </div>
  );
};

<Name>.displayName = "<Name>";

export default <Name>;
```

**`packages/ui-react/src/components/<Name>/<Name>.types.ts`**
```ts
import * as React from "react";

// Adapt the base type to the component's root element (see Step 1)
export interface <Name>Props extends React.HTMLAttributes<HTMLDivElement> {
  // IF VARIANTS: /** Visual variant of the component. */
  // IF VARIANTS: variant?: "default" | "branded";
}
```

**`packages/ui-react/src/components/<Name>/index.ts`**
```ts
export { default } from "./<Name>";
```

**`packages/ui-react/src/components/<Name>/__tests__/<Name>.test.tsx`**
```tsx
import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
import <Name> from "../<Name>";

test.describe("<Name>", () => {
  const themes: ("light" | "dark")[] = ["light", "dark"];
  themes.forEach((theme) => {
    test(`<Name>-${theme}`, async ({ mount }) => {
      const component = await mount(
        <ComponentTestBox
          theme={theme}
          component={<<Name> />}
        />
      );
      await expect(component).toHaveScreenshot(`<Name>-${theme}.png`);
    });
  });
});
```

**`apps/react-docs/src/stories/<Name>.stories.tsx`**
```tsx
import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { <Name> } from "@esnet/packets-ui-react";

const meta: Meta<typeof <Name>> = {
  title: "Components/<Name>",
  component: <Name>,
  tags: ["autodocs"],
  // IF VARIANTS:
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["default", "branded"],
    },
  },
  args: {
    // IF VARIANTS: variant: "default",
  },
};

export default meta;

type Story = StoryObj<typeof <Name>>;

export const Default: Story = {};

// IF VARIANTS:
// export const Branded: Story = {
//   args: { variant: "branded" },
// };
```

### Step 4: Update the barrel file

Read `packages/ui-react/src/components/index.ts`. The file is approximately (but not strictly) alphabetical. Insert the new export near similar names without reordering existing lines:
```ts
export { default as <Name> } from "./<Name>";
```
Note: the barrel export must be completed before the story will compile correctly, since the story imports from the package root.

### Step 5: Confirm

List all files created and modified. Remind the contributor to:
1. Run `pnpm run format` then `pnpm run lint` to catch any style issues
2. Run `/review-react <Name>` to verify conventions before committing
3. Add a CSS file if needed (`/scaffold-css`)
4. Add a Web Component if needed (`/scaffold-web`)

## Rules

- Do not create the component if it already exists.
- Do not generate variant code (variant prop, variant argTypes, Branded story) when the component has no variants.
- Keep generated code minimal. Do not add features beyond what is requested.
