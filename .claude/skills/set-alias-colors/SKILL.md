---
name: set-alias-colors
description: Set or replace Packets Design System alias color tokens. Use when someone wants to rebrand or customize Packets colors, provides a list of colors to apply, asks "how do I change the primary color", "set the background color to", "replace Packets colors with my brand colors", "update alias tokens", "customize Packets theme colors", "set accent color to". Accepts any color format (hex, RGB, HSL, CSS named colors) and maps them to the right token files.
metadata:
  author: ESnet
  category: development
  tags: [packets, design-system, tokens, colors, theming, branding]
---

# set-alias-colors

Sets or replaces Packets alias color tokens in the design token source files, then rebuilds the token output so changes take effect across all components.

## What are alias tokens?

Alias tokens are the semantic color roles that drive component styling (primary, background, surface, copy, success, warning, error, etc.). They reference core palette tokens or hardcoded hex values. Changing an alias token immediately affects every component that uses it — no component files need to be touched.

There are 14 alias tokens for light mode and 14 for dark mode. Read `references/alias-token-map.md` for the full list with current defaults.

## Instructions

### Step 1: Understand what the user wants to change

The user may provide:
- A specific token role (e.g. "set primary to #FF5500")
- A list of colors for multiple roles
- A brand color palette in any format
- A vague description (e.g. "make it more blue")

Ask clarifying questions if the intent is ambiguous. For each color provided, determine:
1. Which alias token role(s) it maps to
2. Whether it applies to light mode, dark mode, or both
3. What format the color is in

If the user only provides light mode colors, ask whether they also want dark mode updated or if they want you to derive dark mode equivalents automatically.

### Step 2: Validate and convert colors

Accept any standard color format: hex (`#FF5500`), short hex (`#F50`), RGB (`rgb(255, 85, 0)`), RGBA (`rgba(255, 85, 0, 0.9)`), HSL (`hsl(20, 100%, 50%)`), CSS named colors (`coral`).

**Convert everything to 6-digit lowercase hex before writing to JSON.** This is the required format for Style Dictionary source files.

Conversion rules:
- Short hex `#F50` expands to `#ff5500`
- RGB `rgb(255, 85, 0)` converts to `#ff5500`
- HSL converts via standard formula
- CSS named colors: `coral` = `#ff7f50`, `tomato` = `#ff6347`, etc.
- RGBA: strip the alpha channel and note to the user that transparency is not supported in token values

**Accessibility check:** For `copy` and `copy-alt` tokens (text colors), check that the provided color achieves at least 4.5:1 contrast ratio against the corresponding `surface-1` or `background` token. Warn the user if it falls below WCAG AA. Calculate contrast using the relative luminance formula:
- L = 0.2126 * R + 0.7152 * G + 0.0722 * B (where R/G/B are linearized: x/12.92 if x <= 0.04045, else ((x+0.055)/1.055)^2.4)
- Contrast ratio = (L1 + 0.05) / (L2 + 0.05) where L1 is the lighter luminance

### Step 3: Map colors to token roles

If the user named a specific role (primary, background, surface, etc.), use that directly.

If the user provided a general brand palette without naming roles, apply this mapping heuristic and confirm with the user before writing:

| User says | Likely maps to |
|---|---|
| brand color, accent, primary | primary (light), primary (dark) |
| background, page background | background |
| card background, panel | surface-1, surface-2 |
| text, body text | copy |
| muted text, secondary text | copy-alt |
| success, green | success (both modes) |
| warning, yellow, amber | warning (both modes) |
| error, red, danger | error (both modes) |

Show the proposed mapping to the user and ask for confirmation before making any changes.

### Step 4: Determine the JSON value format

Prefer referencing a core token when a close match exists in the core palette (read `references/alias-token-map.md` for available hues and steps). Use hardcoded hex when no core token closely matches.

**To reference a core token:**
```json
{ "type": "color", "value": "{color.core.blue.700.value}" }
```

**To use a hardcoded hex:**
```json
{ "type": "color", "value": "#ff5500" }
```

To find the nearest core token step, compare the provided hex against core palette values. If the provided color is within 10% luminance of a core stop, suggest using that reference instead and explain the tradeoff (using a reference keeps the token system coherent; a hardcode is more precise).

### Step 5: Read and update the token files

Read the current state of the files that need changing:
- `packages/design-tokens/tokens/color/light.json` for light mode tokens
- `packages/design-tokens/tokens/color/dark.json` for dark mode tokens

For each alias token being updated, find the matching key in the JSON and replace its `value` field. Do not change any other fields (`type`, other tokens, formatting).

Show the user a diff of every change before writing — list each token, old value, and new value.

### Step 6: Write the changes

After user confirmation, write the updated JSON files.

### Step 7: Rebuild

Run the build to regenerate the compiled CSS output:
```bash
pnpm run build
```

If the build succeeds, confirm to the user which files were regenerated and that the changes are now live in `packages/ui-css/dist/styles.css`.

If the build fails, show the error and revert the JSON changes.

### Step 8: Summary

Produce a summary showing:
- Each token updated (role, old value, new value)
- Any accessibility warnings
- Any tokens where a core reference was suggested vs. hardcoded hex
- Reminder that the user needs to commit and push the changes to `packages/design-tokens/tokens/color/` to persist them

## Rules

- Never edit component CSS files to change colors. Only edit the JSON token source files.
- Never edit `packages/design-tokens/tokens/color/core.json` unless the user explicitly asks to change a core palette color and understands the implications.
- Always convert colors to 6-digit lowercase hex before writing.
- Always show the proposed changes and get confirmation before writing.
- Always rebuild after writing.
- Warn on accessibility failures for text color tokens but do not block the user from proceeding.
- Do not edit `blds.json` — it is a separate brand palette unrelated to the alias system.
