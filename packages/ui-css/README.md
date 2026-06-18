# @esnet/packets-ui-css

CSS-only components for the [Packets Design System](https://github.com/esnet/packets-design-system), a cross-organizational UI library from ESnet.

Use this package if you want Packets styles without a JavaScript framework. For framework-specific wrappers see the related packages section at the bottom.

## Installation

```bash
npm install @esnet/packets-ui-css
```

## Setup

### 1. Add the fonts

Add this to your `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Signika:wght@300..700&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap"
  rel="stylesheet"
/>
```

### 2. Import the styles

```html
<!-- In HTML -->
<link rel="stylesheet" href="node_modules/@esnet/packets-ui-css/dist/styles.css">
```

```css
/* In CSS */
@import '@esnet/packets-ui-css/styles.css';
```

```js
// In JavaScript
import '@esnet/packets-ui-css/styles.css';
```

### 3. Add the root class

Add the `packets` class to your app's root element:

```html
<body class="packets">
```

Optionally add `dark` or `light`:

```html
<body class="packets dark">
```

## Usage

All components use composable class names with the `es-` prefix. Combine a base component class with shared variant classes.

```html
<button class="es-button es-primary">Primary</button>
<button class="es-button es-secondary">Secondary</button>
<button class="es-button es-destructive">Delete</button>
```

### Class system

```
.es-{component}            // Base component
.es-{component}__{element} // Child element (BEM-style)
.es-{variant}              // Shared variant or state
```

## Available Components

### Buttons

- `es-button`: variants `es-primary`, `es-secondary`, `es-branded`, `es-tertiary`, `es-destructive`; sizes `es-medium`, `es-xxlarge`
- `es-icon-button`: icon-only button with the same variants
- `es-button-group`: layout options `es-horizontal`, `es-vertical`

### Form Inputs

- `es-input-text`: text input
- `es-input-email`: email input
- `es-input-password`: password input
- `es-input-number`: number input
- `es-input-search`: search input
- `es-input-checkbox`: checkbox; variants `es-branded`
- `es-input-switch`: toggle switch; variants `es-secondary`, `es-checked`
- `es-input-text-area`: textarea; variants `es-error`

### Display

- `es-alert`: variants `es-error`, `es-warning`, `es-success`, `es-info`
- `es-avatar`: sizes `es-small`, `es-medium`, `es-large`; colors `es-grape`, `es-lime`, `es-berry`, `es-orange`
- `es-datum`: label/value pair
- `es-divider`: variants `es-branded`
- `es-icon`: icon display

### Layout

- `es-module`: module container
- `es-form-section`: form section layout
- `es-title-section`: title section layout
- `es-spacer`: layout options `es-horizontal`, `es-vertical`, `es-square`

### Navigation

- `es-breadcrumbs`: breadcrumb navigation
- `es-tabs` / `es-tab`: tab navigation; state `es-active`
- `es-table-of-contents`: table of contents
- `es-list-tree-view`: tree view list

### Data Display

- `es-data-table`: semantic table using `<table>`, `<thead>`, `<tbody>`, `<tfoot>`
- `es-comma-seperated-list`: comma-separated list

### Utility

- `es-spinner`: loading spinner
- `es-skeleton-surface`: skeleton loader; variants `es-rounded`

## Dark Mode

Toggle dark mode by adding or removing the `dark` class on the root element:

```js
document.body.classList.toggle('dark');
```

## Output Files

- `dist/styles.css`: full unminified stylesheet
- `dist/styles.min.css`: minified stylesheet
- `dist/tearsheet.html`: visual component reference (open in a browser)

## Related Packages

| Package | Description |
|---|---|
| [`@esnet/packets-ui-react`](https://www.npmjs.com/package/@esnet/packets-ui-react) | React components |
| [`@esnet/packets-ui-web`](https://www.npmjs.com/package/@esnet/packets-ui-web) | Web Components, framework-agnostic |

## License

MIT. See the root repository for full license details.
