# Packets Alias Color Token Map

## How the token system works

All color tokens originate in `packages/design-tokens/tokens/color/`. After editing, run the build command below to regenerate `dist/pkts-tokens.css`, which is imported by every component.

There are two layers:

**Core tokens** (`tokens/color/core.json`) - raw hex palette, e.g. `--pkts-color-core-blue-700: #0075A2`
**Alias tokens** (`tokens/color/light.json` and `tokens/color/dark.json`) - semantic roles that reference core tokens

Alias tokens are what consumers override to rebrand. Core tokens should not normally be changed.

## Alias token reference

### Light mode (`tokens/color/light.json`)

| Token role | CSS custom property | Default references | Resolved hex |
|---|---|---|---|
| primary | `--pkts-color-light-primary` | `color.core.black.500` | #4d4d4f |
| secondary | `--pkts-color-light-secondary` | `color.core.black.800` | #252526 |
| tertiary | `--pkts-color-light-tertiary` | `color.core.white.1000` | #9e9e9e |
| accent | `--pkts-color-light-accent` | `color.core.black.100` | #6e6e70 |
| background | `--pkts-color-light-background` | hardcoded | #d2d3d7 |
| surface-1 | `--pkts-color-light-surface-1` | `color.core.white.400` | #e3e3e3 |
| surface-2 | `--pkts-color-light-surface-2` | `color.core.white.200` | #f2f2f2 |
| shadow | `--pkts-color-light-shadow` | `color.core.slate.800` | #4d515e |
| copy | `--pkts-color-light-copy` | `color.core.black.700` | #3d3d3d |
| copy-alt | `--pkts-color-light-copy-alt` | `color.core.black.100` | #6e6e70 |
| copy-alt-2 | `--pkts-color-light-copy-alt-2` | `color.core.slate.700` | #5c5f6b |
| success | `--pkts-color-light-success` | `color.core.green.600` | #0e8a0e |
| warning | `--pkts-color-light-warning` | `color.core.yellow.500` | #e6c500 |
| error | `--pkts-color-light-error` | `color.core.red.700` | #a6111b |

### Dark mode (`tokens/color/dark.json`)

| Token role | CSS custom property | Default references | Resolved hex |
|---|---|---|---|
| primary | `--pkts-color-dark-primary` | `color.core.white.1000` | #9e9e9e |
| secondary | `--pkts-color-dark-secondary` | `color.core.white.300` | #e6e6e6 |
| tertiary | `--pkts-color-dark-tertiary` | `color.core.black.600` | #454547 |
| accent | `--pkts-color-dark-accent` | `color.core.black.300` | #5e5e5e |
| background | `--pkts-color-dark-background` | `color.core.black.800` | #252526 |
| surface-1 | `--pkts-color-dark-surface-1` | `color.core.black.900` | #19191a |
| surface-2 | `--pkts-color-dark-surface-2` | `color.core.black.1000` | #000000 |
| shadow | `--pkts-color-dark-shadow` | `color.core.slate.700` | #5c5f6b |
| copy | `--pkts-color-dark-copy` | `color.core.white.100` | #ffffff |
| copy-alt | `--pkts-color-dark-copy-alt` | `color.core.white.700` | #c2c2c2 |
| copy-alt-2 | `--pkts-color-dark-copy-alt-2` | `color.core.slate.400` | #878a96 |
| success | `--pkts-color-dark-success` | `color.core.green.500` | #11ad2b |
| warning | `--pkts-color-dark-warning` | `color.core.yellow.500` | #e6c500 |
| error | `--pkts-color-dark-error` | `color.core.red.700` | #a6111b |

## Core color palette (available reference targets)

Each hue has steps 100-1000. Use these as reference values in alias tokens.

| Hue | Steps available |
|---|---|
| black | 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000 |
| white | 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000 |
| slate | 100-1000 |
| blue | 100-1000 |
| green | 100-1000 |
| teal | 100-1000 |
| mauve | 100-1000 |
| purple | 100-1000 |
| orange | 100-1000 |
| red | 100-1000 |
| berry | 100-1000 |
| yellow | 100-1000 |

## JSON value formats

**Referencing a core token (preferred):**
```json
{ "type": "color", "value": "{color.core.blue.700.value}" }
```

**Hardcoded hex (acceptable when no core stop matches):**
```json
{ "type": "color", "value": "#0075A2" }
```

## Build command

After editing JSON files, rebuild from the repo root. The `--force` flag is required to bypass the Turbo cache, which does not detect token JSON changes as a cache-busting input:
```bash
turbo run build --filter=@esnet/packets-ui-css --force
```
