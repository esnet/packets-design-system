# @esnet/packets-ui-web

Framework-agnostic Web Components for the [Packets Design System](https://github.com/esnet/packets-design-system), a cross-organizational UI library from ESnet.

## Installation

```bash
npm install @esnet/packets-ui-css @esnet/packets-ui-web
```

Packets ships styles separately. You must install `@esnet/packets-ui-css` alongside the Web Components package.

### Peer dependencies

```bash
npm install antd lucide
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

### 2. Import the styles and components

```js
import '@esnet/packets-ui-css/styles.css';
import '@esnet/packets-ui-web';
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

Web Components work in any HTML environment or JavaScript framework:

```html
<pkts-button variant="primary">Save</pkts-button>
<pkts-alert variant="success">Changes saved.</pkts-alert>
<pkts-avatar initials="JD" size="medium" color="grape"></pkts-avatar>
```

Or in JavaScript:

```js
import '@esnet/packets-ui-css/styles.css';
import '@esnet/packets-ui-web';

const button = document.createElement('pkts-button');
button.setAttribute('variant', 'primary');
button.textContent = 'Save';
document.body.appendChild(button);
```

## Available Components

- `pkts-alert`: alert messages (error, warning, success, info)
- `pkts-avatar`: user avatar with initials
- `pkts-badge`: badge/tag
- `pkts-breadcrumbs`: breadcrumb navigation
- `pkts-button`: button (primary, secondary, branded, tertiary, destructive)
- `pkts-button-group`: horizontal or vertical button group
- `pkts-card`: card container
- `pkts-chip`: chip tag
- `pkts-comma-separated-list`: comma-separated list
- `pkts-data-table`: data table
- `pkts-datum`: label/value pair
- `pkts-divider`: horizontal divider
- `pkts-form-section`: form section layout
- `pkts-icon`: icon display
- `pkts-icon-button`: icon-only button
- `pkts-input-checkbox`: checkbox input
- `pkts-input-date` / `pkts-input-date-picker` / `pkts-input-date-range`: date inputs
- `pkts-input-email`: email input
- `pkts-input-number`: number input
- `pkts-input-password`: password input
- `pkts-input-radio-button`: radio button
- `pkts-input-search`: search input
- `pkts-input-switch`: toggle switch
- `pkts-input-text`: text input
- `pkts-module`: module container
- `pkts-spinner`: loading spinner
- `pkts-tabs`: tab navigation

## Dark Mode

Toggle dark mode by adding or removing the `dark` class on the root element:

```js
document.body.classList.toggle('dark');
```

## Related Packages

| Package | Description |
|---|---|
| [`@esnet/packets-ui-css`](https://www.npmjs.com/package/@esnet/packets-ui-css) | CSS-only components, no framework required |
| [`@esnet/packets-ui-react`](https://www.npmjs.com/package/@esnet/packets-ui-react) | React components |

## License

MIT. See the root repository for full license details.
