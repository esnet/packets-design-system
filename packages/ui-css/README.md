# @esnet/packets-ui-css

CSS-only components for the [Packets Design System](https://github.com/esnet/packets-design-system), a cross-organizational UI library from ESnet.

Use this package if you want Packets styles without a JavaScript framework. For framework-specific wrappers see the related packages section at the bottom.

## Installation

```bash
npm install @esnet/packets-ui-css@beta
```

Once 2.x reaches a stable release, drop the `@beta` tag.

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

All components use composable class names with the `pkts-` prefix. Combine a base component class with shared variant classes.

```html
<button class="pkts-button pkts-primary">Primary</button>
<button class="pkts-button pkts-secondary">Secondary</button>
<button class="pkts-button pkts-destructive">Delete</button>
```

### Class system

```
.pkts-{component}            Base component
.pkts-{component}__{element} Child element (BEM-style)
.pkts-{variant}              Shared variant or state
```

## Available Components

### Buttons

- `pkts-button`: variants `pkts-primary`, `pkts-secondary`, `pkts-branded`, `pkts-tertiary`, `pkts-destructive`
- `pkts-icon-button`: icon-only button with the same variants
- `pkts-button-group`: layout options `pkts-horizontal`, `pkts-vertical`

### Form Inputs

- `pkts-input-text`: text input
- `pkts-input-text-area`: textarea; variants `pkts-error`
- `pkts-input-email`: email input
- `pkts-input-password`: password input
- `pkts-input-number`: number input
- `pkts-input-search`: search input
- `pkts-input-checkbox`: checkbox; variants `pkts-branded`
- `pkts-input-switch`: toggle switch; variants `pkts-secondary`, `pkts-checked`
- `pkts-input-radio`: radio button
- `pkts-input-select`: select/dropdown input
- `pkts-input-typeahead`: typeahead/autocomplete input
- `pkts-input-option`: individual option item
- `pkts-input-row`: form row wrapper with label, caption, and validation
- `pkts-input-date-picker`: date picker
- `pkts-label`: form label; positions `pkts-label-top`, `pkts-label-left`, `pkts-label-right`, `pkts-label-bottom`

### Display

- `pkts-alert`: variants `pkts-error`, `pkts-warning`, `pkts-success`, `pkts-info`
- `pkts-avatar`: sizes `pkts-small`, `pkts-medium`, `pkts-large`; colors `pkts-grape`, `pkts-lime`, `pkts-berry`, `pkts-orange`
- `pkts-badge`: badge/tag
- `pkts-card`: card container
- `pkts-chip`: chip tag
- `pkts-chip-group`: group of chips
- `pkts-code-block`: syntax-highlighted code block
- `pkts-datum`: label/value pair
- `pkts-divider`: horizontal divider; variants `pkts-branded`
- `pkts-dropdown`: dropdown container
- `pkts-icon`: icon display
- `pkts-tooltip`: tooltip; positions `pkts-tooltip-top`

### Layout

- `pkts-accordion`: collapsible section
- `pkts-form-section`: form section layout
- `pkts-module`: module container
- `pkts-spacer`: spacer; layout options `pkts-horizontal`, `pkts-vertical`, `pkts-square`
- `pkts-title-section`: title section layout

### Navigation

- `pkts-breadcrumbs`: breadcrumb navigation
- `pkts-tab` / `pkts-tabs`: tab navigation; state `pkts-active`
- `pkts-table-of-contents`: table of contents
- `pkts-list-tree-view`: tree view list

### Data Display

- `pkts-data-table`: semantic table using `<table>`, `<thead>`, `<tbody>`, `<tfoot>`
- `pkts-comma-seperated-list`: comma-separated list

### Utility

- `pkts-spinner`: loading spinner
- `pkts-skeleton-surface`: skeleton loader placeholder; variants `pkts-rounded`
- `pkts-skeleton-chip`: skeleton chip loader

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
