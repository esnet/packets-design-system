---
name: scaffold-web
description: Scaffold a new Web Component for the Packets Design System. Use when a contributor wants to create a new Web Component or custom element, "scaffold a Web Component", "scaffold a Packets Web Component", "add a new custom element to Packets", "create a new web component", "new web component", "create PktsXxx Web Component". Requires a component name in PascalCase starting with Pkts.
metadata:
  author: ESnet
  category: development
  tags: [packets, design-system, web-components, scaffold, boilerplate]
---

# scaffold-web

Generates all boilerplate files for a new Packets Web Component and registers it in the package barrel.

## Instructions

### Step 1: Confirm the component name

Ask for the component name if not provided. It must:
- Start with `Pkts` (e.g. `PktsBadge`)
- Be PascalCase
- Not already exist

Check: run `ls packages/ui-web/src/components/ | grep -i "^<Name>$"` and also check `packages/ui-web/src/components/index.ts` for an existing export matching `<Name>`. Stop if either exists.

Derive:
- `<kebab>` (e.g. `PktsIconButton` becomes `icon-button`): strip `Pkts`, convert PascalCase to kebab-case
- `<tag>` (e.g. `pkts-icon-button`)
- `<display>` (e.g. `Icon Button`)

Optionally ask: what attributes/props does this component expose? What variants does it support?

### Step 2: Read reference files

Read these files to understand the patterns to follow:
- `packages/ui-web/src/components/PktsButton/PktsButton.ts`
- `packages/ui-web/src/components/PktsButton/PktsButton.types.ts`
- `apps/web-docs/src/PktsButton.stories.ts`

### Step 3: Generate files

Create the following 4 files. Replace `ATTR_1`, `ATTR_2` with the component's actual attribute names based on the agreed props.

**`packages/ui-web/src/components/<Name>/<Name>.ts`**
```ts
import { SlottedComponent } from "../../lib/SlottedComponent";
import { <Name>Props } from "./<Name>.types";

export class <Name> extends SlottedComponent implements <Name>Props {
  static tagName = "<tag>";

  static get observedAttributes() {
    // Replace with this component's actual reactive attributes (kebab-case strings)
    return ["variant", "disabled"];
  }

  get variant(): "default" | "branded" {
    return (this.getAttribute("variant") as any) ?? "default";
  }
  set variant(v: "default" | "branded") {
    this.setAttribute("variant", v ?? "default");
  }

  // Boolean attribute pattern:
  get disabled(): boolean {
    return this.hasAttribute("disabled");
  }
  set disabled(v: boolean) {
    v ? this.setAttribute("disabled", "") : this.removeAttribute("disabled");
  }

  constructor() {
    super();
  }

  attributeChangedCallback(
    name: string,
    oldVal: string | null,
    newVal: string | null
  ) {
    if (oldVal !== newVal) this.render();
  }

  protected _renderInitial(): void {
    this.innerHTML = `
      <div class="${this._buildClassName()}">
        <slot></slot>
      </div>
    `;
    this._attachEventListeners();
  }

  protected render(): void {
    const root = this.querySelector("div");
    if (root) root.className = this._buildClassName();
  }

  private _buildClassName(): string {
    const classes = ["pkts-<kebab>", `pkts-${this.variant}`];
    if (this.disabled) classes.push("pkts-disabled");
    return classes.join(" ");
  }

  private _attachEventListeners(): void {
    // Add event listeners here
  }
}

customElements.define(<Name>.tagName, <Name>);
```

**`packages/ui-web/src/components/<Name>/<Name>.types.ts`**
```ts
// Narrow the base type to the most appropriate HTML element for this component:
// HTMLButtonElement for button-like, HTMLInputElement for inputs, HTMLElement for generic.
export interface <Name>Props extends Partial<HTMLElement> {
  variant?: "default" | "branded";
  disabled?: boolean;
}
```

**`packages/ui-web/src/components/<Name>/index.ts`**
```ts
export { <Name> } from "./<Name>";
```

**`apps/web-docs/src/<Name>.stories.ts`**

If the component has variants:
```ts
import type { Meta, StoryObj } from "@storybook/web-components";
import { <Name> } from "@esnet/packets-ui-web";

const meta: Meta<typeof <Name>> = {
  title: "Components/<Name>",
  component: <Name>.tagName,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["default", "branded"],
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof <Name>>;

export const Default: Story = {
  args: { variant: "default" },
};

export const Branded: Story = {
  args: { variant: "branded" },
};
```

If the component has no variants:
```ts
import type { Meta, StoryObj } from "@storybook/web-components";
import { <Name> } from "@esnet/packets-ui-web";

const meta: Meta<typeof <Name>> = {
  title: "Components/<Name>",
  component: <Name>.tagName,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof <Name>>;

export const Default: Story = {};
```

### Step 4: Update the barrel file

Read `packages/ui-web/src/components/index.ts`. Find the nearest alphabetical neighbor among existing exports and insert in the same format:
```ts
export { <Name> } from "./<Name>";
```
Check whether other exports near the insertion point use sub-paths (e.g. `./PktsInputDatePicker/PktsInputDatePicker`): if so, use the same path format if applicable.

### Step 5: Confirm

List all files created and modified. Remind the contributor to:
1. Run `pnpm run format` then `pnpm run lint`
2. Run the `/review-web` skill and provide the component name `<Name>` when prompted
3. Add a CSS file if needed (`/scaffold-css`)
4. Add a React component if needed (`/scaffold-react`)

## Rules

- Do not create the component if it already exists (folder or barrel export).
- Boolean attributes must use `hasAttribute`/`setAttribute('')`/`removeAttribute()`. Never use string `"true"`/`"false"`.
- `customElements.define` must be at the bottom of the file.
- The `render()` method should update in-place without replacing `innerHTML`. That is what `_renderInitial()` is for.
- Remove boilerplate sections that do not apply to the specific component (e.g. no variant if the component has none).
