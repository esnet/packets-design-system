![Packets Design System](apps/react-docs/public/imgs/packetslogo.neutral.png "Packets Design System")

Packets Design System (Packets) Copyright (c) 2026, The Regents of the University of California, through Lawrence Berkeley National Laboratory (subject to receipt of any required approvals from the U.S. Dept. of Energy).  All rights reserved.

If you have questions about your rights to use or distribute this software,
please contact Berkeley Lab's Intellectual Property Office at
IPO@lbl.gov.

NOTICE.  This Software was developed under funding from the U.S. Department
of Energy and the U.S. Government consequently retains certain rights.  As
such, the U.S. Government has been granted for itself and others acting on
its behalf a paid-up, nonexclusive, irrevocable, worldwide license in the
Software to reproduce, distribute copies to the public, prepare derivative 
works, and perform publicly and display publicly, and to permit others to do so.

# Packets Design System

Packets is a design system created as a cross organizational collaboration at ESnet. It is intended to be a source of truth for common UI/UX patterns. It leverages a design tokens powered system and currently provides artifacts for CSS-only, Web Component & React GUIs with the intent of adding support for other GUI solutions moving forward.

# Getting Started

Packets is officially open source as of version 2.0.0! The monorepo can be found [here in our GitHub instance](https://github.com/esnet/packets-design-system).

# Adding the NPM Packages to Your Project

    1. Setup or get a Gitlab token so you can access our private Gitlab NPM registry. At the time of this writing you can use a personal token.
    2. Add a `.npmrc` file to the root of your project.
    3. Add the following code:

1. Decide on the approach you'd like to use. Here's a quick reference table:

| Feature         | CSS Components                     | Web Components              | React Components              |
|-----------------|------------------------------------|-----------------------------|-------------------------------|
| Framework       | None required                      | Framework-agnostic          | React only                    |
| JavaScript      | Optional                           | Included                    | Required                      |
| Bundle Size     | Smallest (CSS only)                | Medium (JS + CSS)           | Largest (React + components)  |
| TypeScript      | N/A (CSS only)                     | Full type definitions       | Full type definitions         |
| Learning Curve  | Easiest                            | Medium                      | Medium                        |
| Interactivity   | Basic, HTML Built-in               | Full interactivity          | Full interactivity  |
| Best For        | Static sites, server-rendered apps | Vanilla/Framework-agnostic apps     | React applications            |
| Installation    | `npm install @esnet/packets-ui-css`        | `npm install @esnet/packets-ui-css @esnet/packets-ui-web` | `npm install @esnet-packets-ui-css @esnet/packets-ui-react` |


3. Add the `packets` class to the `<body>` or root level tag of your project.
4. (Optional) Add `dark` or `light` classes to the tag you chose, e.g. `<body class="packets dark">`.
5. Add the following to your `<head>` element to fetch our fonts from Google's CDN:
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
`make lint` - Run linting
`make format` - Format code with prettier
`make clean` - Clean build artifacts
`make docs-build`             - Build Docker image with all 4 Storybooks
`make docs-run`              - Run documentation container on port 9888
`make docs-stop`              - Stop running documentation container

### Playwright Screenshot management:
Packets uses Playwright to execute visual regression tests to ensure that components stay styled predictably and correctly from commit to commit. Because screenshots are executed in a docker container in our CI process, they must also be generated in the same docker container to ensure tests pass. These Makefile commands should help ease the burden of managing the screenshots in a docker container. 


#### Setup:
`make pull-image `            - Pull the Playwright Docker image

#### Image Build
`make screenshots-build` - Build docker image and all packages

#### Screenshotting
`make screenshots-generate`   - Generate new screenshots for all packages
`make screenshots-regenerate` - Clean then generate screenshots for all packages
`make screenshots-clean`      - Delete all screenshot directories

#### Screenshot comparison (testing)
`make screenshots-test` - Run all tests (React, Web, CSS)
`make screenshots-test-react` - Run React component tests only
`make screenshots-test-web` - Run Web Component tests only
`make screenshots-test-css` - Run CSS-only tests only


# Development

To add a new component:
1. Build the **CSS-only component** (`packages/ui-css/src/components`) and create Storybook documentation (`apps/css-docs/src`)
2. Build the **Web component** (`packages/ui-web/src/components`) and create Storybook documentation (`apps/web-docs/src`)
3. Build the **React component** (`packages/ui-react/src/components`) and create Storybook documentation (`apps/web-docs/src`)

### Before submitting a PR:
1. make pull-image               # First time only
2. make screenshots-build                    # Build packages
3. make screenshots-regenerate   # Update screenshots if needed
4. make screenshots-test                     # Run tests

