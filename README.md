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

1. Decide on the approach you would like to use. Here is a quick reference table:

| Feature         | CSS Components                     | Web Components                      | React Components                                            |
|-----------------|------------------------------------|------------------------------------- |-------------------------------------------------------------|
| Framework       | None required                      | Framework-agnostic                  | React only                                                  |
| JavaScript      | Optional                           | Included                            | Required                                                    |
| Bundle Size     | Smallest (CSS only)                | Medium (JS + CSS)                   | Largest (React + components)                                |
| TypeScript      | N/A (CSS only)                     | Full type definitions               | Full type definitions                                       |
| Learning Curve  | Easiest                            | Medium                              | Medium                                                      |
| Interactivity   | Basic, HTML Built-in               | Full interactivity                  | Full interactivity                                          |
| Best For        | Static sites, server-rendered apps | Vanilla/Framework-agnostic apps     | React applications                                          |
| Installation    | `npm install @esnet/packets-ui-css` | `npm install @esnet/packets-ui-css @esnet/packets-ui-web` | `npm install @esnet/packets-ui-css @esnet/packets-ui-react` |

2. Install the package(s) for your chosen approach using the command in the table above.

3. Add the `packets` class to the `<body>` or root level tag of your project.

4. (Optional) Add `dark` or `light` classes to the tag you chose, e.g. `<body class="packets dark">`.

5. Add the following to your `<head>` element to fetch our fonts from Google's CDN:
    ```html
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Signika:wght@300..700&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap"
      rel="stylesheet"
    />
    ```


# Running the system locally

1. `git clone git@github.com:esnet/packets-design-system.git`
2. `pnpm install` - install dependencies at the repo root
3. `pnpm run build` - build all packages (required before running docs)

**Option A - All Storybooks via Docker (recommended for a full preview):**

4. `make docs-build` - build the documentation Docker image
5. `make docs-run` - start the container; open http://localhost:9888
6. `Ctrl-C` to stop
7. `make docs-clean` - remove the Docker container when done

**Option B - All Storybooks locally with hot reload (recommended for development):**

4. `pnpm run dev` - starts all four Storybooks concurrently via Turbo
   - React docs: http://localhost:6006
   - Web Component docs: http://localhost:6007
   - Host docs: http://localhost:6008
   - CSS docs: http://localhost:6009
5. `Ctrl-C` to stop all


### Make commands:
`make lint` - Run linting
`make format` - Format code with prettier
`make clean` - Clean build artifacts
`make docs-build` - Build Docker image with all 4 Storybooks
`make docs-run` - Run documentation container on port 9888
`make docs-stop` - Stop running documentation container

### Playwright Screenshot management:
Packets uses Playwright to execute visual regression tests to ensure that components stay styled predictably and correctly from commit to commit. Because screenshots are executed in a docker container in our CI process, they must also be generated in the same docker container to ensure tests pass. These Makefile commands should help ease the burden of managing the screenshots in a docker container.


#### Setup:
`make pull-image` - Pull the Playwright Docker image

#### Image Build
`make screenshots-build` - Build docker image and all packages

#### Screenshotting
`make screenshots-generate` - Generate new screenshots for all packages
`make screenshots-regenerate` - Clean then generate screenshots for all packages
`make screenshots-clean` - Delete all screenshot directories

#### Screenshot comparison (testing)
`make screenshots-test` - Run all tests (React, Web, CSS)
`make screenshots-test-react` - Run React component tests only
`make screenshots-test-web` - Run Web Component tests only
`make screenshots-test-css` - Run CSS-only tests only


# Claude Code Skills

Packets ships a set of AI coding skills to help both consumers and contributors work more effectively with the design system. Skills follow the MCP Skills standard and work across all major AI coding clients: Claude Code, Cursor, Windsurf, and any other MCP-compatible client. Invoke a skill with a `/skill-name` slash command.

## Consumer skills (for developers using Packets in their apps)

| Skill | Description |
|---|---|
| `/pkts-find` | Describe what you need and get the right component recommended |
| `/pkts-react` | Get correct React import and usage code for any component |
| `/pkts-web` | Get correct Web Component HTML and JS usage for any component |
| `/pkts-css` | Get correct CSS class names and HTML markup for any component |

**How to get the skills:**

1. Copy the `.claude/` directory from this repo into your project root.
2. Open your AI coding client (Claude Code, Cursor, Windsurf, or any MCP-compatible client). The skills will be available immediately.

Skills follow the [MCP Skills standard](https://modelcontextprotocol.io/community/working-groups/skills-over-mcp) and work across all major AI coding clients — Claude Code, Cursor, Windsurf, and any other MCP-compatible client.

## Contributor skills (for Packets team members)

| Skill | Description |
|---|---|
| `/scaffold-react` | Generate all boilerplate for a new React component |
| `/scaffold-web` | Generate all boilerplate for a new Web Component |
| `/scaffold-css` | Generate the CSS file and register it in the import list |
| `/review-react` | Check a React component against Packets conventions |
| `/review-web` | Check a Web Component against Packets conventions |
| `/review-css` | Check a CSS file for token usage and naming conventions |
| `/component-audit` | Cross-platform parity report: what is missing where |
| `/generate-component-docs` | Generate an MDX documentation page for a component |
| `/set-alias-colors` | Update alias color tokens and rebuild CSS for rebranding or theming |

These skills live in `.claude/skills/` and are available automatically when working inside this repo.

# Development

To add a new component:
1. Build the **CSS-only component** (`packages/ui-css/src/components`) and create Storybook documentation (`apps/css-docs/src`)
2. Build the **Web component** (`packages/ui-web/src/components`) and create Storybook documentation (`apps/web-docs/src`)
3. Build the **React component** (`packages/ui-react/src/components`) and create Storybook documentation (`apps/react-docs/src`)

### Before submitting a PR:
1. `make pull-image` - First time only
2. `make screenshots-build` - Build packages
3. `make screenshots-regenerate` - Update screenshots if needed
4. `make screenshots-test` - Run tests

For full contribution guidelines see [dev-docs/contributing.md](dev-docs/contributing.md).
