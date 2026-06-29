# @esnet/packets-ui-react

React components for the [Packets Design System](https://github.com/esnet/packets-design-system), a cross-organizational UI library from ESnet.

## Installation

```bash
npm install @esnet/packets-ui-css @esnet/packets-ui-react
```

Packets ships styles separately. You must install `@esnet/packets-ui-css` alongside the React package.

### Peer dependencies

```bash
npm install react react-dom antd lucide-react
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

```js
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

```jsx
import { PktsButton, PktsAlert, PktsAvatar } from '@esnet/packets-ui-react';

function App() {
  return (
    <div>
      <PktsButton variant="primary">Save</PktsButton>
      <PktsAlert variant="success">Changes saved.</PktsAlert>
      <PktsAvatar initials="JD" size="medium" color="grape" />
    </div>
  );
}
```

## Available Components

### Buttons

- `PktsButton`: button; variants `primary`, `secondary`, `branded`, `tertiary`, `destructive`; renders as `button` or `a` via the `as` prop
- `PktsButtonGroup`: horizontal or vertical button group
- `PktsIconButton`: icon-only button with the same variants; renders as `button` or `a` via the `as` prop

### Form Inputs

- `PktsInputText` / `PktsInputTextArea`: text inputs
- `PktsInputEmail`: email input
- `PktsInputPassword`: password input
- `PktsInputNumber`: number input
- `PktsInputSearch`: search input
- `PktsInputCheckbox`: checkbox input
- `PktsInputSwitch`: toggle switch
- `PktsInputRadioButton`: radio button
- `PktsInputSelect`: select/dropdown input
- `PktsInputTypeahead`: typeahead/autocomplete input
- `PktsInputOption`: individual option item
- `PktsInputRow`: form row wrapper with label, caption, and validation
- `PktsInputDate` / `PktsInputDatePicker` / `PktsInputDateRange`: date inputs
- `PktsLabel`: form label

### Display

- `PktsAlert`: alert messages; variants `error`, `warning`, `success`, `info`
- `PktsAvatar`: user avatar with initials; sizes `small`, `medium`, `large`
- `PktsBreadcrumbs`: breadcrumb navigation
- `PktsChip` / `PktsChipGroup`: chip tags
- `PktsCodeBlock`: syntax-highlighted code block
- `PktsCommaSeperatedList`: comma-separated list
- `PktsDataTable`: data table
- `PktsDatum`: label/value pair
- `PktsDivider`: horizontal divider
- `PktsTooltip`: tooltip

### Layout

- `PktsAccordion`: collapsible section
- `PktsDropdown`: dropdown container
- `PktsFormSection`: form section layout
- `PktsModule`: module container
- `PktsSpacer`: layout spacer
- `PktsTitleSection`: title section layout

### Navigation

- `PktsTabs`: tab navigation
- `PktsTableOfContents`: table of contents
- `PktsListTreeView`: tree view list

### Utility

- `PktsSpinner`: loading spinner
- `PktsSkeletonSurface`: skeleton loader

## Dark Mode

Toggle dark mode by adding or removing the `dark` class on the root element:

```js
document.body.classList.toggle('dark');
```

## Related Packages

| Package | Description |
|---|---|
| [`@esnet/packets-ui-css`](https://www.npmjs.com/package/@esnet/packets-ui-css) | CSS-only components, no framework required |
| [`@esnet/packets-ui-web`](https://www.npmjs.com/package/@esnet/packets-ui-web) | Web Components, framework-agnostic |

## License

MIT. See the root repository for full license details.
