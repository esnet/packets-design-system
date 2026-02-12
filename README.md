![Packets Design System](apps/react-docs/public/imgs/packetslogo.neutral.png "Packets Design System")

# Packets Design System

Packets is a design system created as a cross organizational collaboration at ESnet. It is intended to be a source of truth for common UI/UX patterns. It leverages a design tokens powered system and currently provides artifacts for CSS-only, Web Component & React GUIs with the intent of adding support for other GUI solutions moving forward.

# Getting Started

    Packets is officially open source as of version 2.0.0! The monorepo can be found [here in our GitHub instance](https://github.com/esnet/packets-design-system).

# Adding the NPM packages to your project.


    4. Run <br />
    `npm i @esnet/esnet-tokens @esnet/packets-ui-react`, <br />
    `pnpm i @esnet/esnet-tokens @esnet/packets-ui-react`, or <br />
    `yarn add @esnet/esnet-tokens @esnet/packets-ui-react`
    5. Add the `packets-ui` class to the body or root level tag of your project.
    6. (Optional) Add `dark` or `light` classes to the `packets-ui` node to force light or dark mode only.
    7. Add the following to your header element to fetch our fonts from Google's CDN

```
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Signika:wght@300..700&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap"
  rel="stylesheet"
/>
```


# Running the system locally

1. git clone git@github.com:esnet/packets-design-system.git
2. Run `pnpm install` on the root of the project.
3. Run `pnpm run build` also in the root of the project.
4. Run `make docs-build` to build the documentation Docker container
5. Run `make docs-run` and open http://localhost:9888 to access the Storybook
6. To stop, **Ctrl-C**
7. Run `make docs-clean` to clean up the Docker container.

<!-- 1. `git clone git@gitlab.es.net:esnet/packets-design-system.git`
2. Run `pnpm i` on the root of the project.
3. Navigate to `packages/design-tokens`, and run `pnpm run build` (production) or `pnpm run dev` (development).
4. Navigate to `packages/ui-react`, and run `pnpm run build` (production) or `pnpm run dev` (development).
5. Navigate back to the root of the project, and run `pnpm run dev` to start the local watch build and storybook.
6. Access storybook in at [http://localhost:6006/](http://localhost:6006/). -->


### Make commands:
`make screenshots-build` - Build all packages
`make screenshots-test` - Run all tests (React, Web, CSS)
`make screenshots-test-react` - Run React component tests only
`make screenshots-test-web` - Run Web Component tests only
`make screenshots-test-css` - Run CSS-only tests only
`make lint` - Run linting
`make format` - Format code with prettier
`make clean` - Clean build artifacts
`make docs-build`             - Build Docker image with all 4 Storybooks
`make docs-run`              - Run documentation container on port 9888
`make docs-stop`              - Stop running documentation container

### Playwright Screenshot management:
`make screenshots-generate`   - Generate new screenshots for all packages
`make screenshots-regenerate` - Clean then generate screenshots for all packages
`make screenshots-clean`      - Delete all screenshot directories

### Setup:
`make pull-image `            - Pull the Playwright Docker image


# Development

To add a new component:
1. build the css-only component and create Storybook documentation.
2. build the component in ui-web and create Storybook documentation.
2. build the component in ui-react and create Storybook documentation.

### Before submitting a PR:
1. make pull-image               # First time only
2. make screenshots-build                    # Build packages
4. make screenshots-regenerate   # Update screenshots if needed
3. make screenshots-test                     # Run tests