# Packets Release Process

This document outlines the process to release a new build of the npm packages to the public npm registry (npmjs.com).

## Package Registry

Packages are published publicly to [npmjs.com](https://www.npmjs.com/) under the `@esnet` scope:

- `@esnet/packets-ui-react`
- `@esnet/packets-ui-web`
- `@esnet/packets-ui-css`
- `@esnet/esnet-tokens`

## Branch Strategy

### Long-lived branches

- `main` — production; reflects what is currently published to npm
- `develop` — integration branch; all feature and fix branches merge here first

### Short-lived branches

- `feat/ESDS-<ticket>-<short-name>` — one branch per feature or component (e.g. `feat/ESDS-134-tabs`)
- `fix/ESDS-<ticket>-<short-name>` — bug fixes
- `release/<version>` — cut from `develop` when ready to ship (e.g. `release/@esnet-packets-ui-1.0.0`); triggers CI/CD publish

### Flow

```
feat/* or fix/*  →  develop  →  release/<version>  →  main
```

### Changeset discipline

Every feature or fix branch must include a changeset file before merging into `develop`. Run `pnpm changeset` on your branch and commit the generated `.md` file in `.changeset/`. This ensures `pnpm run version-packages` has everything it needs when the release branch is cut and avoids backfilling changesets at release time.

## Changesets

Packets uses [changesets](https://github.com/changesets/changesets) to manage its version history. All PRs should have an associated changeset `.md` file describing what changed and the bump type (major/minor/patch).

To create a changeset:

```bash
pnpm changeset
```

## Stable Release Process

1. Cut a release branch from `develop`:
   ```bash
   git checkout develop && git pull
   git checkout -b release/1.2.0
   ```
2. Ensure there are changeset files in the `.changeset` directory (one per merged feature/fix branch).
3. Run `pnpm run version-packages` to bump all package versions and update `CHANGELOG.md`. The `.md` files in `.changeset` will be removed automatically.
4. Commit the version bump and push to GitHub:
   ```bash
   git add . && git commit -m "chore: release 1.2.0"
   git push origin release/1.2.0
   ```
5. GitHub Actions triggers the `release` workflow and runs `pnpm run publish-packages`, publishing under the `latest` dist-tag on npmjs.com.
6. Verify the packages are available at [https://www.npmjs.com/org/esnet](https://www.npmjs.com/org/esnet).
7. Merge the release branch into both `develop` and `main`, then delete it:
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
   Merging into `develop` brings the version bumps back into the integration branch. Merging into `main` keeps it in sync with what is published on npm. `main` is only ever updated via release branches, so there will be no conflicts on future releases.

## Beta Release Process

Use changesets' built-in prerelease mode — no additional long-lived branches needed.

1. Cut a release branch from `develop`:
   ```bash
   git checkout develop && git pull
   git checkout -b release/1.2.0-beta.0
   ```
2. Enter prerelease mode:
   ```bash
   pnpm changeset pre enter beta
   ```
   This creates a `.changeset/pre.json` file — commit it.
3. Run `pnpm run version-packages`. Versions will be bumped as `1.2.0-beta.0`, `1.2.0-beta.1`, etc.
4. Commit and push:
   ```bash
   git add . && git commit -m "chore: release 1.2.0-beta.0"
   git push origin release/1.2.0-beta.0
   ```
5. GitHub Actions publishes under the `beta` dist-tag. Consumers opt in explicitly:
   ```bash
   npm install @esnet/packets-ui-react@beta
   ```
6. For subsequent beta iterations, stay on the same branch, keep adding changesets, and repeat steps 3-5. The version will increment (`beta.1`, `beta.2`, etc.).

### Graduating a beta to stable

When the beta is ready for a stable release:

1. Exit prerelease mode:
   ```bash
   pnpm changeset pre exit
   ```
2. Run `pnpm run version-packages` — this produces the final stable version (e.g. `1.2.0`).
3. Follow the stable release steps 4-7 above.

## CI Authentication

The GitHub Actions `release` workflow authenticates to npmjs.com using the `NPM_TOKEN` secret stored in the GitHub repository settings. This token must belong to an account with publish access to the `@esnet` npm organization.

## Common Issues

- **The pipeline isn't building** — run `pnpm run test` and `pnpm run lint` locally and fix any errors before pushing.

- **CI complains it cannot publish one or more packages** — this happens when only some packages have changes (e.g. react components updated but design tokens unchanged). This is expected — verify the updated packages appear on [npmjs.com](https://www.npmjs.com/org/esnet).

## GitHub Actions Trigger

The `release` workflow in `.github/workflows/release.yml` publishes to npmjs.com. It is ONLY triggered when a branch prefixed with `release/` is pushed (e.g. `release/1.2.0`, `release/1.2.0-beta.0`).
