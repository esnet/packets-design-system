---
name: set-alias-colors
description: Set or replace Packets Design System alias color tokens. Use when someone says "set the primary color to", "change the background color to", "replace Packets colors with my brand colors", "update alias tokens", "set accent color to", "customize Packets theme colors". Accepts any color format (hex, RGB, HSL, CSS named colors) and maps them to the correct token source files. Do not trigger for questions about CSS custom property overrides at the application level.
metadata:
  author: ESnet
  category: development
  tags: [packets, design-system, tokens, colors, theming, branding]
---

# set-alias-colors

Sets or replaces Packets alias color tokens in the design token source files, then rebuilds the CSS output so changes take effect across all components.

## What are alias tokens?

Alias tokens are the semantic color roles that drive component styling (primary, background, surface, copy, success, warning, error, etc.). They reference core palette tokens or hardcoded hex values. Changing an alias token immediately affects every component that uses it.

There are 14 alias tokens for light mode and 14 for dark mode. See `.claude/skills/set-alias-colors/references/alias-token-map.md` for the full list with current defaults.

## Instructions

### Step 0: Verify monorepo context

This skill edits token source files directly. It only works inside the `packets-design-system` monorepo. Before proceeding, confirm that the following files exist:

- `packages/design-tokens/tokens/color/light.json`
- `packages/design-tokens/tokens/color/dark.json`

If they do not exist, stop and tell the user: this skill is for use inside the `packets-design-system` repository. External consumers who installed Packets via npm cannot use this skill to edit tokens. They should override CSS custom properties at the application level instead (e.g. `:root { --pkts-color-light-primary: #yourcolor; }`).

### Step 1: Understand what the user wants to change

The user may provide:
- A specific token role (e.g. "set primary to #FF5500")
- A list of colors for multiple roles
- A brand color palette in any format
- A vague description (e.g. "make it more blue")

Ask clarifying questions if the intent is ambiguous. For each color provided, determine:
1. Which alias token role(s) it maps to
2. Whether it applies to light mode, dark mode, or both

If the user only provides light mode colors, ask whether they also want dark mode updated. Do not automatically derive dark mode colors; wait for the user's answer before proceeding.

### Step 2: Validate and convert colors

Accept any standard color format: hex (`#FF5500`), short hex (`#F50`), RGB (`rgb(255, 85, 0)`), RGBA (`rgba(255, 85, 0, 0.9)`), HSL (`hsl(20, 100%, 50%)`), CSS named colors (`coral`).

**Convert everything to 6-digit lowercase hex before writing to JSON.** This is the required format for Style Dictionary source files.

Conversion rules:
- Short hex `#F50` expands to `#ff5500`
- RGB `rgb(255, 85, 0)` converts to `#ff5500`
- HSL `hsl(H, S%, L%)`:
  1. C = (1 - |2L - 1|) * S
  2. X = C * (1 - |H/60 mod 2 - 1|)
  3. m = L - C/2
  4. Map H to (R1, G1, B1) by 60-degree sector, then `R = round((R1+m)*255)`, same for G and B
  5. Format as 6-digit lowercase hex
- CSS named colors: look up the canonical hex (e.g. `coral` = `#ff7f50`, `tomato` = `#ff6347`, `steelblue` = `#4682b4`)
- RGBA: strip the alpha channel and warn the user that transparency is not supported in token values

**Accessibility check for text tokens:** When the user changes `copy`, `copy-alt`, or `copy-alt-2` (text colors), warn if the new value may not provide sufficient contrast against the corresponding background token. Use the heuristic: very light text on a very dark surface passes; very dark text on a very light surface passes; mid-range values on mid-range surfaces are risky. For a precise WCAG AA check (4.5:1 minimum for normal text), direct the user to [webaim.org/resources/contrastchecker](https://webaim.org/resources/contrastchecker) and suggest pasting both hex values there. Warn but do not block the user from proceeding.

**Accessibility check for background/surface tokens:** When the user changes `background`, `surface-1`, or `surface-2`, also check that the existing `copy` and `copy-alt` tokens for the same mode still have sufficient contrast against the new value. Warn if the existing text colors may no longer meet AA against the changed background.

### Step 3: Map colors to token roles

If the user named a specific role (primary, background, surface, etc.), use that directly.

If the user provided a general brand palette without naming roles, apply this mapping heuristic:

| User says | Likely maps to |
|---|---|
| brand color, accent, primary | primary |
| background, page background | background |
| card background, panel | surface-1, surface-2 |
| text, body text | copy |
| muted text, secondary text | copy-alt |
| subtle text, tertiary text | copy-alt-2 |
| success, green | success (both modes) |
| warning, yellow, amber | warning (both modes) |
| error, red, danger | error (both modes) |

Show the proposed mapping to the user and get explicit confirmation before proceeding. This is a required stop.

### Step 4: Determine the JSON value format

Prefer referencing a core token when a close match exists in the core palette. Use a hardcoded hex when no core token closely matches. See `.claude/skills/set-alias-colors/references/alias-token-map.md` for available hues and steps.

**To reference a core token:**
```json
{ "type": "color", "value": "{color.core.blue.700.value}" }
```

**To use a hardcoded hex:**
```json
{ "type": "color", "value": "#ff5500" }
```

If the provided color is within approximately 10% luminance of a core palette stop, suggest using that reference instead and explain the tradeoff: a reference keeps the token system coherent; a hardcode is more precise. Let the user decide.

### Step 5: Read and preview changes

Read the current state of the files that need changing:
- `packages/design-tokens/tokens/color/light.json` for light mode tokens
- `packages/design-tokens/tokens/color/dark.json` for dark mode tokens

For each alias token being updated, show the user a diff: token name, old value, new value. This is a required stop. Do not write anything until the user explicitly confirms.

### Step 6: Write the changes

After the user confirms the diff in Step 5, write the updated JSON files.

### Step 7: Rebuild

Run the build to regenerate the compiled CSS output:
```bash
turbo run build --filter=@esnet/packets-ui-css --force
```

The `--force` flag bypasses the Turbo cache. It is required because Turbo does not detect token JSON changes as input to the CSS build, so without it the cache returns stale output.

If the build succeeds, confirm to the user that both output files were regenerated:
- `packages/design-tokens/dist/pkts-tokens.css`
- `packages/ui-css/dist/styles.css`

If the build fails, show the error output and immediately revert the JSON changes:
```bash
git checkout -- packages/design-tokens/tokens/color/light.json packages/design-tokens/tokens/color/dark.json
```

Then report the build error and ask the user how to proceed.

### Step 8: Summary

Produce a summary showing:
- Each token updated (role, old value, new value)
- Any accessibility warnings raised
- Any tokens where a core reference was suggested vs. hardcoded hex
- Reminder that the user needs to commit and push the changes to `packages/design-tokens/tokens/color/` to persist them

## Rules

- Never edit component CSS files to change colors. Only edit the JSON token source files.
- Never edit `packages/design-tokens/tokens/color/core.json` unless the user explicitly asks to change a core palette color and understands the scope of that change.
- Always convert colors to 6-digit lowercase hex before writing.
- Always get explicit confirmation at Step 3 (mapping) before proceeding.
- Always get explicit confirmation at Step 5 (diff) before writing.
- Always rebuild after writing.
- Warn on accessibility issues but do not block the user from proceeding.
- Do not edit `blds.json` — it is a separate brand palette unrelated to the alias token system.
