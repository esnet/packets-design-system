# Packets Release Process

This document outlines the processes to reelease a new build of the npm package to our private Gitlab npm instance.

## Package Registry

The Gitlab Package Registry can be found [here](https://gitlab.es.net/esnet/packets-design-system/-/packages). It contains npm files for both `@esnet/packets-ui` and `@esnet/esnet-tokens`. If you need to debug artifacts, you can click in on a published version and see downloaded published artifacts.

## Changesets

Packets uses [changesets](https://github.com/changesets/changesets) to manage its version history. All MRs should have an associated changeset `.md` file with them describing what the change is and the verbosity of the changese (major/minor/patch).

## Publishing Process

1. Locally create a release branch (Example: `release/@esnet-packets-ui-1.0.0`)

This branch name can be anything but it needs to start with `release/`

2. Ensure there are tracked changes in the `.changeset` directory.
3. Run `pnpm run version-packages`. To update all app/packages version numbers automatically

At this point the .md files in `.changeset` should be gone and your `package.json` and `CHANGELOG.md` updated.

4. Push to gitlab
5. Gitlab CI/CD should run `npm run publish-packages`
6. Verify new packages are available at [https://gitlab.es.net/esnet/packets-design-system/-/packages](https://gitlab.es.net/esnet/packets-design-system/-/packages)
7. Merge release branch into `main` if release is successful.

### Commmon Issues

- The pipeline isn't building

Run `pnpm run test` and `pnpm run lint` and verify fixes

- It complains about not being able to publish 1 or more packages

When you are only updating one package (common example: updates to the react component library but no updates to the design tokens), Gitlab will complain that it is unable to publish the package with no changes. You can ignore this warning if you have verified the other packages are present in [https://gitlab.es.net/esnet/packets-design-system/-/packages](https://gitlab.es.net/esnet/packets-design-system/-/packages)

### Deploy to Gitlab

The `publish` action in our `.gitlab-ci.yml` file will deploy the latest artifacts to our Gitlab instance. This action is ONLY triggered when a release branch is pushed to the repo (Example: `release/@esnet-packets-ui-1.0.0`).
