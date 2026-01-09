# Packets Design System

The Packets Design System is available in three formats to suit your project needs:

## Quick Start

### React Components
```bash
npm install @esnet/packets-ui
```
```jsx
import { ESButton } from '@esnet/packets-ui';

<ESButton variant="primary">Click me</ESButton>
```

### Web Components
```bash
npm install @esnet/packets-ui-web
```
```javascript
import '@esnet/packets-ui-web';
```
```html
<es-button variant="primary" label="Click me"></es-button>
```

### CSS-Only Components
```bash
npm install @esnet/packets-ui-css
```
```html
<link rel="stylesheet" href="node_modules/@esnet/packets-ui-css/dist/styles.css">
<button class="es-button es-primary">Click me</button>
```

---

# CSS-Only Components

CSS-only version of the Packets Design System with composable utility classes for flexible, maintainable styling without JavaScript frameworks.

## Installation

```bash
npm install @esnet/packets-ui-css
```

## Usage

### Import the CSS

```html
<!-- In HTML -->
<link rel="stylesheet" href="node_modules/@esnet/packets-ui-css/dist/styles.css">
```

```css
/* In CSS */
@import '@esnet/packets-ui-css/styles.css';
```

```javascript
// In JavaScript/React/Vue
import '@esnet/packets-ui-css/styles.css';
```

### Using Components

All components use composable class names with the `es-` prefix. Combine base component classes with variant utility classes.

#### Button Component

```html
<!-- Basic button -->
<button class="es-button es-primary">Primary Button</button>

<!-- Button variants -->
<button class="es-button es-secondary">Secondary</button>
<button class="es-button es-branded">Branded</button>
<button class="es-button es-tertiary">Tertiary</button>
<button class="es-button es-destructive">Destructive</button>

<!-- Button with size modifier -->
<button class="es-button es-primary es-medium">Medium</button>
<button class="es-button es-primary es-xxlarge">XX-Large</button>

<!-- Disabled state -->
<button class="es-button es-primary" disabled>Disabled</button>

<!-- Button as link -->
<a href="#" class="es-button es-primary">Link Button</a>
```

#### Alert Component

```html
<div class="es-alert es-error">
  <div class="es-alert__content">
    <h5 class="es-alert__title">Error</h5>
    <p>An error has occurred.</p>
  </div>
</div>

<!-- Variants: error, warning, success, info -->
<div class="es-alert es-success">
  <div class="es-alert__content">
    <h5 class="es-alert__title">Success</h5>
    <p>Operation completed successfully!</p>
  </div>
</div>
```

#### Avatar Component

```html
<!-- Avatar with size and color -->
<div class="es-avatar es-medium es-grape">
  <div class="es-avatar__label">JD</div>
</div>

<!-- Sizes: small, medium, large -->
<!-- Colors: grape, lime, berry, orange -->
<div class="es-avatar es-large es-lime">
  <div class="es-avatar__label">AB</div>
</div>
```

#### Input Components

```html
<!-- Text Input -->
<div class="es-input-text">
  <input type="text" placeholder="Enter text...">
</div>

<!-- Input with branded variant -->
<div class="es-input-text es-branded">
  <input type="text" placeholder="Branded input...">
</div>

<!-- Input with error state -->
<div class="es-input-text es-error">
  <input type="text" placeholder="Error state...">
</div>

<!-- Other input types use es-input-text wrapper -->
<div class="es-input-text es-input-email">
  <input type="email" placeholder="email@example.com">
</div>

<div class="es-input-text es-input-password">
  <input type="password" placeholder="Password...">
</div>

<div class="es-input-text es-input-number">
  <input type="number" placeholder="123">
</div>
```

#### Data Table Component

```html
<table class="es-data-table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>john@example.com</td>
      <td>Admin</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">Total: 1 user</td>
    </tr>
  </tfoot>
</table>
```

### Dark Mode

All components support dark mode. Add the `dark` class to the `body` or a parent element:

```html
<body class="packets dark">
  <!-- All components will use dark mode styles -->
  <button class="es-button es-primary">Dark Mode Button</button>
</body>
```

```javascript
// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle('dark');
}
```

## Composable Class System

The CSS uses a composable utility approach, similar to Tailwind CSS:

- **Base Component**: `.es-button` - The component base class
- **Element**: `.es-button__icon` - A child element of the component (uses `__`)
- **Variant**: `.es-primary` - A variant or state (shared across components)

### Pattern

```
.es-{component}                    // Base component
.es-{component}__{element}         // Child element
.es-{variant}                      // Shared variant class
```

### Benefits

- **Smaller CSS**: Shared variants reduce duplication
- **More Flexible**: Mix and match variants freely
- **Easier to Learn**: Simpler class names
- **Better DX**: Shorter class strings in HTML
- **Maintainable**: Update variant in one place, affects all components

## Available Components

### Buttons
- `es-button` - Standard button
  - Variants: `es-primary`, `es-secondary`, `es-branded`, `es-tertiary`, `es-destructive`
  - Sizes: `es-medium`, `es-xxlarge`
- `es-icon-button` - Icon-only button (same variants)
- `es-button-group` - Group of buttons
  - Layout: `es-horizontal`, `es-vertical`

### Form Inputs
- `es-input-text` - Text input
- `es-input-email` - Email input
- `es-input-password` - Password input
- `es-input-number` - Number input
- `es-input-search` - Search input
- `es-input-checkbox` - Checkbox input
  - Variants: `es-branded`
- `es-input-switch` - Toggle switch
  - Variants: `es-secondary`, `es-checked`
- `es-input-text-area` - Textarea input
  - Variants: `es-error`

### Display Components
- `es-alert` - Alert messages
  - Variants: `es-error`, `es-warning`, `es-success`, `es-info`
- `es-avatar` - User avatar
  - Sizes: `es-small`, `es-medium`, `es-large`
  - Colors: `es-grape`, `es-lime`, `es-berry`, `es-orange`
- `es-datum` - Label/value pair display
- `es-divider` - Horizontal divider
  - Variants: `es-branded`
- `es-icon` - Icon display

### Layout Components
- `es-module` - Module container
- `es-form-section` - Form section layout
- `es-title-section` - Title section layout
- `es-spacer` - Spacing utility
  - Layout: `es-horizontal`, `es-vertical`, `es-square`

### Navigation Components
- `es-breadcrumbs` - Breadcrumb navigation
- `es-tabs` - Tab navigation
- `es-tab` - Individual tab
  - State: `es-active`
- `es-table-of-contents` - Table of contents
- `es-list-tree-view` - Tree view list

### Data Display
- `es-data-table` - Semantic data table (uses natural `<table>`, `<thead>`, `<tbody>`, `<tfoot>` elements)
- `es-comma-seperated-list` - Comma-separated list

### Utility Components
- `es-spinner` - Loading spinner
- `es-skeleton-surface` - Skeleton loader placeholder
  - Variants: `es-rounded`

## Visual Reference

Open `dist/tearsheet.html` in a browser to see all components with all variants and states. The tearsheet includes:

- All component examples
- Dark mode toggle
- Interactive demonstrations
- Live code examples

## Build Scripts

```bash
# Build CSS from React components
npm run build

# Watch mode for development
npm run dev

# Clean build artifacts
npm run clean
```

## Output Files

- `dist/styles.css` - Full unminified CSS (~84KB)
- `dist/styles.min.css` - Minified CSS (~65KB)
- `dist/tearsheet.html` - Visual component reference

## Development

The build system extracts CSS from the React component `.module.css` files in the `../ui` package and creates composable utility classes.

### Build Process

1. **Component Registry** - Scans components and extracts metadata
2. **CSS Transformation** - Converts CSS modules to composable format
3. **Global Styles** - Copies base styles (typography, tokens, grid, etc.)
4. **Utilities Generation** - Creates shared variant classes
5. **Bundling** - Combines all CSS with PostCSS
6. **Minification** - Creates minified version with cssnano
7. **Tearsheet Generation** - Auto-generates HTML documentation

## License

See root package LICENSE file.
