# Packets Release Process

This document covers all workflows in the Packets monorepo: npm package releases, documentation updates, Storybook deployments, and non-package fixes.

## Package Registry

Published packages are available publicly on [npmjs.com](https://www.npmjs.com/) under the `@esnet` scope:

- `@esnet/packets-ui-react`
- `@esnet/packets-ui-web`
- `@esnet/packets-ui-css`

`@esnet/esnet-tokens` is an internal package marked private and is not published.

## Infrastructure Overview

| System | Branch | Trigger |
|---|---|---|
| npmjs.com (production packages) | `release/*` | Push to `release/**` branch |
| Cloudflare Pages (production docs) | `main` | Push or merge to `main` |
| Cloudflare Pages (staging docs) | `develop` | Push or merge to `develop` |

## Branch Strategy

### Long-lived branches

- `main`: production; reflects what is on npmjs.com and powers the production Storybook docs on Cloudflare Pages
- `develop`: integration branch; all feature and fix branches merge here first; powers the staging Storybook docs

### Short-lived branches

- `feat/ESDS-<ticket>-<short-name>`: one branch per feature or component (e.g. `feat/ESDS-134-tabs`)
- `fix/ESDS-<ticket>-<short-name>`: bug fixes
- `release/<version>`: cut from `develop` when ready to publish to npm (e.g. `release/1.2.0`); triggers the CI publish workflow

---

## Choosing the Right Workflow

The key question before starting any work is: **does this change affect the published npm packages?**

### Changes that require an npm release

- New or updated components in `packages/ui-react`, `packages/ui-web`, or `packages/ui-css`
- Bug fixes in those packages that consumers would need
- Design token changes in `packages/design-tokens` that affect the CSS output

These changes require a changeset and go through a `release/*` branch.

### Changes that do NOT require an npm release

- Storybook documentation updates (`apps/`)
- Cloudflare configuration (`wrangler.toml`, `worker.js`, etc.)
- Internal tooling, scripts, or build config (e.g. rollup config, CI workflow fixes)
- `README.md`, `dev-docs/`, or other repo-level documentation
- Dependency updates that do not affect the public API

These changes skip the release branch entirely and merge directly into `main` when production needs to pick them up.

---

## Workflow A: Non-Package Changes (Docs, Storybook, Config)

Use this path for anything that does not affect the published npm packages.

```
feat/* or fix/*  →  develop  →  PR into main
```

1. Branch from `develop`:
   ```bash
   git checkout develop && git pull
   git checkout -b fix/ESDS-123-fix-storybook-config
   ```
2. Make your changes. No changeset needed.
3. Open a PR into `develop`. Once merged, staging Cloudflare picks it up automatically.
4. When ready for production, open a PR from `develop` into `main`. Once merged, production Cloudflare picks it up automatically. No npm publish is triggered.

---

## Workflow B: npm Package Release (Stable)

Use this path when publishing a new version of one or more packages to npmjs.com.

```
feat/* or fix/*  →  develop  →  release/<version>  →  main + develop
```

### Step 1: Work on a feature or fix branch

Every branch that changes a published package must include a changeset before merging into `develop`:

```bash
pnpm changeset
```

Select the affected packages, choose the bump type (major/minor/patch), and write a short description. Commit the generated `.md` file in `.changeset/`. This avoids backfilling changesets at release time.

### Step 2: Cut a release branch from `develop`

```bash
git checkout develop && git pull
git checkout -b release/1.2.0
```

### Step 3: Bump versions

```bash
pnpm run version-packages
```

This updates all `package.json` versions, writes `CHANGELOG.md` entries, and removes the changeset files automatically.

### Step 4: Commit and push

```bash
git add . && git commit -m "chore: release 1.2.0"
git push origin release/1.2.0
```

GitHub Actions detects the `release/` prefix and runs `pnpm publish-packages`, publishing under the `latest` dist-tag on npmjs.com.

### Step 5: Verify

Check that the updated packages appear at [https://www.npmjs.com/org/esnet](https://www.npmjs.com/org/esnet).

### Step 6: Merge and clean up

```bash
git checkout develop
git merge release/1.2.0
git checkout main
git merge release/1.2.0
git push origin develop
git push origin main
git branch -d release/1.2.0
git push origin --delete release/1.2.0
```

Merging into `develop` brings the version bumps back into the integration branch. Merging into `main` keeps it in sync with what is on npm. Because `main` is only updated via release branches, future merges will have no conflicts.

---

## Workflow C: npm Package Release (Beta)

Use this path to publish a prerelease version consumers can opt into explicitly.

```bash
npm install @esnet/packets-ui-react@beta
```

### Step 1: Cut a release branch from `develop`

```bash
git checkout develop && git pull
git checkout -b release/1.2.0-beta.0
```

### Step 2: Enter prerelease mode

```bash
pnpm changeset pre enter beta
```

This creates a `.changeset/pre.json` file. Commit it.

### Step 3: Bump versions

```bash
pnpm run version-packages
```

Versions will be bumped as `1.2.0-beta.0`, `1.2.0-beta.1`, etc.

### Step 4: Commit and push

```bash
git add . && git commit -m "chore: release 1.2.0-beta.0"
git push origin release/1.2.0-beta.0
```

GitHub Actions publishes under the `beta` dist-tag.

### Step 5: Subsequent beta iterations

Stay on the same branch, add changesets for new changes, and repeat steps 3-4. The version increments automatically (`beta.1`, `beta.2`, etc.).

### Graduating a beta to stable

1. Exit prerelease mode:
   ```bash
   pnpm changeset pre exit
   ```
2. Run `pnpm run version-packages` to produce the final stable version (e.g. `1.2.0`).
3. Follow Workflow B steps 4-6 above.

---

## CI Authentication

The GitHub Actions `release` workflow authenticates to npmjs.com using the `NPM_TOKEN` secret stored in the GitHub repository settings. This token must belong to an account with publish access to the `@esnet` npm organization.

The workflow is ONLY triggered when a branch prefixed with `release/` is pushed. Merging into `main` directly never triggers an npm publish.

---

## Common Issues

- **The pipeline isn't building**: run `pnpm run test` and `pnpm run lint` locally and fix any errors before pushing.

- **CI complains it cannot publish one or more packages**: this happens when only some packages have changes (e.g. React components updated but CSS unchanged). This is expected. Verify the updated packages appear on [npmjs.com](https://www.npmjs.com/org/esnet).

- **Stale changeset files referencing old package names**: delete any `.changeset/*.md` files that reference packages no longer in the workspace before running `pnpm run version-packages`.
