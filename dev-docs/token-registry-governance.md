# Token Registry Governance

This document records the registry topology and rules governing how design tokens are published for the Packets Design System.

## Registry topology

| Package | Publisher | Registry |
|---|---|---|
| `@esnet/packets-ui-css`, `packets-ui-react`, `packets-ui-web` | This repo (GitHub) | npmjs.org |
| `@esnet/pkts-tokens` | This repo (GitHub) | npmjs.org (private: true, not published) |
| `@esnet/esnet-tokens` | Private GitLab repo (project 898) | ESnet GitLab package registry |

The public packages in this repo contain a neutralized alias token layer with generic gray values. The ESnet brand alias mapping (blue primary, orange accent, etc.) is maintained separately in the private GitLab repo and is not part of the open source release.

## Color token sensitivity model

**Tier 1: Public core palette** (`packages/design-tokens/tokens/color/core.json`)
Twelve color ramps intended to be public. These are the same in both this repo and the private GitLab repo.

**Tier 2: Neutralized alias mapping** (`tokens/color/light.json`, `tokens/color/dark.json`)
This repo carries generic gray values for the alias layer so the open source package compiles and works standalone. These are intentionally different from the ESnet internal mapping. Do not replace them with the ESnet brand values.

**Tier 3: BLDS palette** (`tokens/color/blds.json`)
This file does not exist in this repo and must not be added. It belongs only in the private GitLab repo for ESnet internal consumers.

## Publishing

Packages in this repo publish to npmjs.org via GitHub Actions on tagged releases. The `@esnet/pkts-tokens` package (`packages/design-tokens`) is marked `private: true` and is intentionally not published from this repo.

To publish a new version:
1. Use changesets: `pnpm changeset`
2. Merge the changeset PR
3. GitHub Actions publishes on merge to main
