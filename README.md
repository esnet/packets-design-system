![Packets Design System](apps/docs/public/imgs/packetslogo.neutral.png "Packets Design System")

# Packets Design System

Packets is a design system created as a cross organizational collaboration at ESnet. It is intended to be a source of truth for common UI/UX patterns. It leverages a design tokens powered system and currently provides artifacts for React GUIs with the intent of adding support for other GUI solutions moving forward.

# Getting Started

    Packets is currently only available to ESnet employees and is not open source. The monorepo can be found [here in our Gitlab instance](https://gitlab.es.net/esnet/packets-design-system).

    # Adding the NPM packages to your project.

    1. Setup or get a Gitlab token so you can access our private Gitlab NPM registry. At the time of this writing you can use a personal token.
    2. Add a `.npmrc` file to the root of your project.
    3. Add the following code:

```
@esnet:registry=https://gitlab.es.net/api/v4/projects/898/packages/npm/
//gitlab.es.net/api/v4/projects/898/packages/npm/:_authToken=YOUR_TOKEN_HERE
```

    4. Run <br />
    `npm i @esnet/esnet-tokens @esnet/packets-ui`, <br />
    `pnpm i @esnet/esnet-tokens @esnet/packets-ui`, or <br />
    `yarn add @esnet/esnet-tokens @esnet/packets-ui`
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

1. `git clone git@gitlab.es.net:esnet/packets-design-system.git`
2. Run `pnpm i` on the root of the project.
3. Navigate to `packages/design-tokens`, and run `pnpm run build` (production) or `pnpm run dev` (development).
4. Navigate to `packages/ui`, and run `pnpm run build` (production) or `pnpm run dev` (development).
5. Navigate back to the root of the project, and run `pnpm run dev` to start the local watch build and storybook.
6. Access storybook in at [http://localhost:6006/](http://localhost:6006/).

# Development

Components can be created/modified in `packages/ui`, design tokens in `packages/design-tokens`, and stories in `apps/docs/src/stories`. To create a new component, create a directory for the component in `packages/ui/src/components`, using other components as examples, and create a story for it in `apps/src/stories`.
