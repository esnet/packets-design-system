# Contributing to Packets Design System

This guide covers everything you need to start contributing to the Packets monorepo.

## Prerequisites

- [Node.js](https://nodejs.org/) v20 or later
- [pnpm](https://pnpm.io/) v8 (`npm install -g pnpm@8`)
- [Docker](https://www.docker.com/) (optional, for running the full Storybook preview)
- [Git](https://git-scm.com/)

## Local Setup

```bash
git clone git@github.com:esnet/packets-design-system.git
cd packets-design-system
pnpm install
pnpm run build
```

Then choose how to run the docs:

**Option A - Docker (recommended for a full preview):**
```bash
make docs-build
make docs-run
# Open http://localhost:9888
```

**Option B - Local with hot reload (recommended for development):**
```bash
pnpm run dev
# React docs:          http://localhost:6006
# Web Component docs:  http://localhost:6007
# Host docs:           http://localhost:6008
# CSS docs:            http://localhost:6009
```

## Monorepo Structure

```
packages/
  design-tokens/   Internal design tokens (not published to npm)
  ui-css/          CSS-only components (@esnet/packets-ui-css)
  ui-react/        React components (@esnet/packets-ui-react)
  ui-web/          Web Components (@esnet/packets-ui-web)
apps/
  css-docs/        Storybook for CSS components
  react-docs/      Storybook for React components
  web-docs/        Storybook for Web Components
  host-docs/       Host Storybook (assembles all three)
dev-docs/          Internal documentation for contributors
```

## Branch Naming

Branches are always cut from `develop`.

| Type | Format (ESnet) | Format (external) | Example |
|---|---|---|---|
| Feature | `feat/PKTS-<ticket>-<short-name>` | `feat/<short-name>` | `feat/PKTS-134-tabs` |
| Bug fix | `fix/PKTS-<ticket>-<short-name>` | `fix/<short-name>` | `fix/PKTS-210-button-focus` |

Keep the short name brief (2 to 4 words). Avoid long branch names as they can cause CI issues.

## Does Your Change Need a Changeset?

Ask yourself: **does this change affect a published npm package?**

| Change type | Needs changeset |
|---|---|
| New or updated component in `packages/ui-*` | Yes |
| Bug fix in a published package | Yes |
| Design token change affecting CSS output | Yes |
| Storybook docs or `apps/` changes | No |
| Cloudflare / CI / build config | No |
| `README.md` or `dev-docs/` updates | No |
| Internal tooling or scripts | No |

If your change needs a changeset, run this on your branch before merging:

```bash
pnpm changeset
```

Select the affected packages, choose the bump type, and write a short description. Commit the generated `.md` file in `.changeset/`.

## Adding a New Component

Each component lives in three packages. Build them in this order:

1. **CSS component** in `packages/ui-css/src/components/` with Storybook docs in `apps/css-docs/src/`
2. **Web Component** in `packages/ui-web/src/components/` with Storybook docs in `apps/web-docs/src/`
3. **React component** in `packages/ui-react/src/components/` with Storybook docs in `apps/react-docs/src/`

## Visual Regression Tests

Packets uses Playwright for visual regression testing. Screenshots must be generated inside Docker to match the CI environment.

**First time only:**
```bash
make pull-image
```

**Before submitting a PR that changes component styles:**
```bash
make screenshots-build       # Build packages
make screenshots-regenerate  # Update screenshots
make screenshots-test        # Run all tests
```

Individual package tests:
```bash
make screenshots-test-react
make screenshots-test-web
make screenshots-test-css
```

## Jira Integration (ESnet contributors only)

Packets is open source and welcomes external contributions. The Jira integration described here is only relevant for ESnet team members since the project board is private.

ESnet contributors: Packets uses the [GitHub for Jira](https://marketplace.atlassian.com/apps/1219592/github-for-jira) integration to automatically link development activity to Jira tickets. This is not a hard requirement but is strongly encouraged.

When your branch name, commit messages, or PR title contain a `PKTS-XXX` ticket key, Jira will automatically:

- Link the branch to the ticket
- Show commit history on the ticket
- Link the PR and its status to the ticket

No extra steps are needed beyond following the branch naming convention. The Jira board is at [esnet.atlassian.net/jira/software/c/projects/PKTS/boards/332](https://esnet.atlassian.net/jira/software/c/projects/PKTS/boards/332) (ESnet access required).

External contributors: feel free to omit the ticket key from your branch name. The format `feat/<short-name>` or `fix/<short-name>` works fine.

## Submitting a PR

1. Push your branch and open a PR into `develop`.
2. Include the Jira ticket key (`PKTS-XXX`) in the PR title so it links automatically.
3. Make sure the PR includes a changeset if the change affects a published package.
4. Regenerate and commit screenshots if component styles changed.
5. All tests must pass before merging.

## Infrastructure

| System | Branch | URL |
|---|---|---|
| Production Storybook docs | `main` | Cloudflare Pages |
| Staging Storybook docs | `develop` | Cloudflare Pages |
| npm packages | `release/*` | npmjs.com |

Pushing to `main` or `develop` deploys the Storybook docs automatically. Publishing to npm only happens when a `release/*` branch is pushed and GitHub Actions runs. See [release-process.md](release-process.md) for the full release workflow.
