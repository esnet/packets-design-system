import fs from 'fs';
import path from 'path';

/**
 * Convert component name to BEM base class
 */
function componentNameToBEMClass(componentName) {
  const withoutPrefix = componentName.replace(/^ES/, '');
  return 'es-' + withoutPrefix
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase();
}

/**
 * Generate HTML examples for a button component
 */
function generateButtonExample(componentName, metadata) {
  const baseClass = componentNameToBEMClass(componentName);
  const isIconButton = componentName === 'ESIconButton';
  let html = `<div class="demo-section">\n  <h2>${componentName}</h2>\n\n`;

  // Define icons for icon buttons
  const variantIcons = {
    primary: 'star',
    secondary: 'heart',
    branded: 'zap',
    tertiary: 'circle',
    destructive: 'trash-2'
  };

  // Variants
  if (metadata.variants && metadata.variants.length > 0) {
    html += `  <div class="demo-item">\n    <div class="demo-label">Variants</div>\n`;
    for (const variant of metadata.variants) {
      const label = variant.charAt(0).toUpperCase() + variant.slice(1);
      if (isIconButton) {
        const icon = variantIcons[variant] || 'circle';
        html += `    <button class="${baseClass} es-${variant}"><i data-lucide="${icon}"></i></button>\n`;
      } else {
        html += `    <button class="${baseClass} es-${variant}">${label} Button</button>\n`;
      }
    }
    html += `  </div>\n\n`;
  }

  // Sizes
  if (metadata.sizes && metadata.sizes.length > 0) {
    html += `  <div class="demo-item">\n    <div class="demo-label">Sizes</div>\n`;
    for (const size of metadata.sizes) {
      const label = size.charAt(0).toUpperCase() + size.slice(1);
      const variant = metadata.variants ? metadata.variants[0] : '';
      if (isIconButton) {
        const icon = variantIcons[variant] || 'circle';
        html += `    <button class="${baseClass} es-${variant} es-${size}"><i data-lucide="${icon}"></i></button>\n`;
      } else {
        html += `    <button class="${baseClass} es-${variant} es-${size}">${label}</button>\n`;
      }
    }
    html += `  </div>\n\n`;
  }

  // States
  html += `  <div class="demo-item">\n    <div class="demo-label">States</div>\n`;
  const variant = metadata.variants ? metadata.variants[0] : '';
  if (isIconButton) {
    const icon = variantIcons[variant] || 'circle';
    html += `    <button class="${baseClass} es-${variant}"><i data-lucide="${icon}"></i></button>\n`;
    html += `    <button class="${baseClass} es-${variant}" disabled><i data-lucide="${icon}"></i></button>\n`;
  } else {
    html += `    <button class="${baseClass} es-${variant}">Normal</button>\n`;
    html += `    <button class="${baseClass} es-${variant}" disabled>Disabled</button>\n`;
  }
  html += `  </div>\n`;

  html += `</div>\n\n`;
  return html;
}

/**
 * Generate HTML examples for an alert component
 */
function generateAlertExample(componentName, metadata) {
  const baseClass = componentNameToBEMClass(componentName);
  let html = `<div class="demo-section">\n  <h2>${componentName}</h2>\n\n`;

  html += `  <div class="demo-item">\n    <div class="demo-label">Alert Variants</div>\n`;

  const variants = metadata.variants && metadata.variants.length > 0
    ? metadata.variants
    : ['default', 'error', 'warning', 'success'];

  for (const variant of variants) {
    const label = variant.charAt(0).toUpperCase() + variant.slice(1);
    const variantClass = variant !== 'default' ? ` es-${variant}` : '';

    html += `    <div class="${baseClass}${variantClass}" style="margin-bottom: 16px;">\n`;
    html += `      <div class="${baseClass}__content">\n`;
    html += `        <h5 class="${baseClass}__title">${label}</h5>\n`;
    html += `        <p>This is a ${variant} alert message.</p>\n`;
    html += `      </div>\n`;
    html += `    </div>\n`;
  }

  html += `  </div>\n`;
  html += `</div>\n\n`;
  return html;
}

/**
 * Generate HTML examples for input components
 * Note: Email, Password, Number, Search wrap ESInputText, so they need both classes
 */
function generateInputExample(componentName, metadata) {
  const baseClass = componentNameToBEMClass(componentName);
  let html = `<div class="demo-section">\n  <h2>${componentName}</h2>\n\n`;

  // Determine input type
  const inputType = componentName.toLowerCase().includes('password') ? 'password'
    : componentName.toLowerCase().includes('email') ? 'email'
    : componentName.toLowerCase().includes('number') ? 'number'
    : componentName.toLowerCase().includes('search') ? 'search'
    : componentName.toLowerCase().includes('textarea') ? 'textarea'
    : 'text';

  // These components wrap ESInputText, so they need both classes
  const needsTextClass = ['ESInputEmail', 'ESInputPassword', 'ESInputNumber', 'ESInputSearch'].includes(componentName);
  const containerClass = needsTextClass ? `es-input-text ${baseClass}` : baseClass;

  // Basic input
  html += `  <div class="demo-item">\n    <div class="demo-label">Default</div>\n`;
  if (inputType === 'textarea') {
    html += `    <div class="${containerClass}">\n`;
    html += `      <textarea placeholder="Enter ${inputType}..."></textarea>\n`;
    html += `    </div>\n  </div>\n\n`;
  } else {
    html += `    <div class="${containerClass}">\n`;
    html += `      <input type="${inputType}" placeholder="Enter ${inputType}...">\n`;
    html += `    </div>\n  </div>\n\n`;
  }

  // Variants (branded)
  const hasVariants = needsTextClass || componentName === 'ESInputText';
  if (hasVariants) {
    html += `  <div class="demo-item">\n    <div class="demo-label">Branded Variant</div>\n`;
    const variantClass = needsTextClass
      ? `es-input-text es-branded ${baseClass}`
      : `${baseClass} es-branded`;
    if (inputType === 'textarea') {
      html += `    <div class="${variantClass}">\n`;
      html += `      <textarea placeholder="Branded variant..."></textarea>\n`;
      html += `    </div>\n  </div>\n\n`;
    } else {
      html += `    <div class="${variantClass}">\n`;
      html += `      <input type="${inputType}" placeholder="Branded variant...">\n`;
      html += `    </div>\n  </div>\n\n`;
    }
  }

  // Error state
  html += `  <div class="demo-item">\n    <div class="demo-label">Error State</div>\n`;
  const errorClass = needsTextClass
    ? `es-input-text es-error ${baseClass}`
    : `${baseClass} es-error`;
  if (inputType === 'textarea') {
    html += `    <div class="${errorClass}">\n`;
    html += `      <textarea placeholder="Error state..."></textarea>\n`;
    html += `    </div>\n  </div>\n`;
  } else {
    html += `    <div class="${errorClass}">\n`;
    html += `      <input type="${inputType}" placeholder="Error state...">\n`;
    html += `    </div>\n  </div>\n`;
  }

  html += `</div>\n\n`;
  return html;
}

/**
 * Generate HTML examples for avatar component
 */
function generateAvatarExample(componentName, metadata) {
  const baseClass = componentNameToBEMClass(componentName);
  let html = `<div class="demo-section">\n  <h2>${componentName}</h2>\n\n`;

  // Sizes
  if (metadata.sizes && metadata.sizes.length > 0) {
    html += `  <div class="demo-item">\n    <div class="demo-label">Sizes</div>\n`;
    for (const size of metadata.sizes) {
      const label = size.substring(0, 2).toUpperCase();
      const color = metadata.colors ? metadata.colors[0] : 'grape';
      html += `    <div class="${baseClass} es-${size} es-${color}">\n`;
      html += `      <div class="${baseClass}__label">${label}</div>\n`;
      html += `    </div>\n`;
    }
    html += `  </div>\n\n`;
  }

  // Colors
  if (metadata.colors && metadata.colors.length > 0) {
    html += `  <div class="demo-item">\n    <div class="demo-label">Colors</div>\n`;
    for (const color of metadata.colors) {
      const label = color.substring(0, 2).toUpperCase();
      const size = metadata.sizes ? metadata.sizes[1] || metadata.sizes[0] : 'medium';
      html += `    <div class="${baseClass} es-${size} es-${color}">\n`;
      html += `      <div class="${baseClass}__label">${label}</div>\n`;
      html += `    </div>\n`;
    }
    html += `  </div>\n`;
  }

  html += `</div>\n\n`;
  return html;
}

/**
 * Generate HTML for checkbox component
 */
function generateCheckboxExample(componentName, metadata) {
  const baseClass = componentNameToBEMClass(componentName);
  let html = `<div class="demo-section">\n  <h2>${componentName}</h2>\n\n`;

  html += `  <div class="demo-item">\n    <div class="demo-label">Default</div>\n`;
  html += `    <div class="${baseClass}">\n`;
  html += `      <input type="checkbox" class="${baseClass}__input">\n`;
  html += `    </div>\n`;
  html += `    <div class="${baseClass}">\n`;
  html += `      <input type="checkbox" class="${baseClass}__input" checked>\n`;
  html += `    </div>\n`;
  html += `    <div class="${baseClass}">\n`;
  html += `      <input type="checkbox" class="${baseClass}__input" disabled>\n`;
  html += `    </div>\n`;
  html += `  </div>\n\n`;

  html += `  <div class="demo-item">\n    <div class="demo-label">Branded</div>\n`;
  html += `    <div class="${baseClass} es-branded">\n`;
  html += `      <input type="checkbox" class="${baseClass}__input" checked>\n`;
  html += `    </div>\n`;
  html += `  </div>\n`;

  html += `</div>\n\n`;
  return html;
}

/**
 * Generate HTML for switch component
 */
function generateSwitchExample(componentName, metadata) {
  const baseClass = componentNameToBEMClass(componentName);
  let html = `<div class="demo-section">\n  <h2>${componentName}</h2>\n\n`;

  html += `  <div class="demo-item">\n    <div class="demo-label">Switches</div>\n`;
  html += `    <div class="${baseClass}">\n`;
  html += `      <input type="checkbox" class="${baseClass}__input">\n`;
  html += `      <div class="${baseClass}__indicator"></div>\n`;
  html += `    </div>\n`;
  html += `    <div class="${baseClass} es-checked">\n`;
  html += `      <input type="checkbox" class="${baseClass}__input" checked>\n`;
  html += `      <div class="${baseClass}__indicator"></div>\n`;
  html += `    </div>\n`;
  html += `    <div class="${baseClass} es-secondary es-checked">\n`;
  html += `      <input type="checkbox" class="${baseClass}__input" checked>\n`;
  html += `      <div class="${baseClass}__indicator"></div>\n`;
  html += `    </div>\n`;
  html += `  </div>\n`;

  html += `</div>\n\n`;
  return html;
}

/**
 * Generate HTML for button group
 */
function generateButtonGroupExample(componentName, metadata) {
  const baseClass = componentNameToBEMClass(componentName);
  let html = `<div class="demo-section">\n  <h2>${componentName}</h2>\n\n`;

  html += `  <div class="demo-item">\n    <div class="demo-label">Horizontal Button Group</div>\n`;
  html += `    <section class="${baseClass} es-horizontal">\n`;
  html += `      <ul class="${baseClass}__list">\n`;
  html += `        <li><button class="es-button es-secondary">Option 1</button></li>\n`;
  html += `        <li><button class="es-button es-secondary">Option 2</button></li>\n`;
  html += `        <li><button class="es-button es-secondary">Option 3</button></li>\n`;
  html += `      </ul>\n`;
  html += `    </section>\n`;
  html += `  </div>\n`;

  html += `</div>\n\n`;
  return html;
}

/**
 * Generate more component examples
 */
function generateDividerExample(componentName, metadata) {
  const baseClass = componentNameToBEMClass(componentName);
  let html = `<div class="demo-section">\n  <h2>${componentName}</h2>\n\n`;

  html += `  <div class="demo-item">\n    <div class="demo-label">Default</div>\n`;
  html += `    <hr class="${baseClass}">\n`;
  html += `  </div>\n\n`;

  html += `  <div class="demo-item">\n    <div class="demo-label">Branded</div>\n`;
  html += `    <hr class="${baseClass} es-branded">\n`;
  html += `  </div>\n`;

  html += `</div>\n\n`;
  return html;
}

function generateDatumExample(componentName, metadata) {
  const baseClass = componentNameToBEMClass(componentName);
  let html = `<div class="demo-section">\n  <h2>${componentName}</h2>\n\n`;

  html += `  <div class="demo-item">\n    <div class="demo-label">Label/Value Pairs</div>\n`;
  html += `    <div class="${baseClass}">\n`;
  html += `      <span class="${baseClass}__label">Label:</span>\n`;
  html += `      <span class="${baseClass}__value">Value</span>\n`;
  html += `    </div>\n`;
  html += `    <div class="${baseClass}">\n`;
  html += `      <span class="${baseClass}__label">Name:</span>\n`;
  html += `      <span class="${baseClass}__value">John Doe</span>\n`;
  html += `    </div>\n`;
  html += `  </div>\n`;

  html += `</div>\n\n`;
  return html;
}

function generateBreadcrumbsExample(componentName, metadata) {
  const baseClass = componentNameToBEMClass(componentName);
  let html = `<div class="demo-section">\n  <h2>${componentName}</h2>\n\n`;

  html += `  <div class="demo-item">\n`;
  html += `    <nav class="${baseClass}">\n`;
  html += `      <div class="${baseClass}__breadCrumb">\n`;
  html += `        <a href="#">Home</a>\n`;
  html += `      </div>\n`;
  html += `      <div class="${baseClass}__breadCrumb">\n`;
  html += `        <a href="#">Category</a>\n`;
  html += `      </div>\n`;
  html += `      <div class="${baseClass}__breadCrumb">\n`;
  html += `        <a href="#">Subcategory</a>\n`;
  html += `      </div>\n`;
  html += `      <div class="${baseClass}__breadCrumb">\n`;
  html += `        <span>Current Page</span>\n`;
  html += `      </div>\n`;
  html += `    </nav>\n`;
  html += `  </div>\n`;

  html += `</div>\n\n`;
  return html;
}

function generateTabsExample(componentName, metadata) {
  const baseClass = componentNameToBEMClass(componentName);
  let html = `<div class="demo-section">\n  <h2>${componentName}</h2>\n\n`;

  html += `  <div class="demo-item">\n`;
  html += `    <div class="${baseClass}">\n`;
  html += `      <ul class="tabList">\n`;
  html += `        <li class="es-tab es-active">\n`;
  html += `          <a href="#">Tab 1</a>\n`;
  html += `        </li>\n`;
  html += `        <li class="es-tab">\n`;
  html += `          <a href="#">Tab 2</a>\n`;
  html += `        </li>\n`;
  html += `        <li class="es-tab">\n`;
  html += `          <a href="#">Tab 3</a>\n`;
  html += `        </li>\n`;
  html += `      </ul>\n`;
  html += `    </div>\n`;
  html += `  </div>\n`;

  html += `</div>\n\n`;
  return html;
}

function generateTableOfContentsExample(componentName, metadata) {
  const baseClass = componentNameToBEMClass(componentName);
  let html = `<div class="demo-section">\n  <h2>${componentName}</h2>\n\n`;

  html += `  <div class="demo-item">\n`;
  html += `    <nav class="${baseClass}">\n`;
  html += `      <ul class="${baseClass}__list">\n`;
  html += `        <li><a href="#">Introduction</a></li>\n`;
  html += `        <li><a href="#">Getting Started</a></li>\n`;
  html += `        <li><a href="#">Components</a></li>\n`;
  html += `        <li><a href="#">API Reference</a></li>\n`;
  html += `      </ul>\n`;
  html += `    </nav>\n`;
  html += `  </div>\n`;

  html += `</div>\n\n`;
  return html;
}

function generateSpinnerExample(componentName, metadata) {
  const baseClass = componentNameToBEMClass(componentName);
  let html = `<div class="demo-section">\n  <h2>${componentName}</h2>\n\n`;

  html += `  <div class="demo-item">\n    <div class="demo-label">Loading Spinner</div>\n`;
  html += `    <div class="${baseClass}">\n`;
  html += `      <div class="${baseClass}__dot"></div>\n`;
  html += `      <div class="${baseClass}__dot"></div>\n`;
  html += `      <div class="${baseClass}__dot"></div>\n`;
  html += `      <div class="${baseClass}__dot"></div>\n`;
  html += `      <span class="${baseClass}__noMotionMessage">Loading...</span>\n`;
  html += `    </div>\n`;
  html += `  </div>\n`;

  html += `</div>\n\n`;
  return html;
}

function generateDataTableExample(componentName, metadata) {
  const baseClass = componentNameToBEMClass(componentName);
  let html = `<div class="demo-section">\n  <h2>${componentName}</h2>\n\n`;

  html += `  <div class="demo-item">\n`;
  html += `    <table class="es-data-table">\n`;
  html += `      <thead>\n`;
  html += `        <tr>\n`;
  html += `          <th>Name</th>\n`;
  html += `          <th>Email</th>\n`;
  html += `          <th>Role</th>\n`;
  html += `          <th>Status</th>\n`;
  html += `        </tr>\n`;
  html += `      </thead>\n`;
  html += `      <tbody>\n`;
  html += `        <tr>\n`;
  html += `          <td>John Doe</td>\n`;
  html += `          <td>john@example.com</td>\n`;
  html += `          <td>Admin</td>\n`;
  html += `          <td>Active</td>\n`;
  html += `        </tr>\n`;
  html += `        <tr>\n`;
  html += `          <td>Jane Smith</td>\n`;
  html += `          <td>jane@example.com</td>\n`;
  html += `          <td>User</td>\n`;
  html += `          <td>Active</td>\n`;
  html += `        </tr>\n`;
  html += `        <tr>\n`;
  html += `          <td>Bob Johnson</td>\n`;
  html += `          <td>bob@example.com</td>\n`;
  html += `          <td>User</td>\n`;
  html += `          <td>Inactive</td>\n`;
  html += `        </tr>\n`;
  html += `      </tbody>\n`;
  html += `      <tfoot>\n`;
  html += `        <tr>\n`;
  html += `          <td colspan="4">Total Users: 3</td>\n`;
  html += `        </tr>\n`;
  html += `      </tfoot>\n`;
  html += `    </table>\n`;
  html += `  </div>\n`;

  html += `</div>\n\n`;
  return html;
}

function generateFormSectionExample(componentName, metadata) {
  const baseClass = componentNameToBEMClass(componentName);
  let html = `<div class="demo-section">\n  <h2>${componentName}</h2>\n\n`;

  html += `  <div class="demo-item">\n`;
  html += `    <div class="${baseClass}">\n`;
  html += `      <div class="${baseClass}__left">\n`;
  html += `        <h4>Section Title</h4>\n`;
  html += `        <p>Description of this form section</p>\n`;
  html += `      </div>\n`;
  html += `      <div class="${baseClass}__right">\n`;
  html += `        <div class="es-input-text" style="margin-bottom: 16px;">\n`;
  html += `          <input type="text" placeholder="Field 1">\n`;
  html += `        </div>\n`;
  html += `        <div class="es-input-text">\n`;
  html += `          <input type="text" placeholder="Field 2">\n`;
  html += `        </div>\n`;
  html += `      </div>\n`;
  html += `    </div>\n`;
  html += `  </div>\n`;

  html += `</div>\n\n`;
  return html;
}

function generateTitleSectionExample(componentName, metadata) {
  const baseClass = componentNameToBEMClass(componentName);
  let html = `<div class="demo-section">\n  <h2>${componentName}</h2>\n\n`;

  html += `  <div class="demo-item">\n`;
  html += `    <div class="${baseClass}">\n`;
  html += `      <div class="${baseClass}__title">\n`;
  html += `        <h1>Page Title</h1>\n`;
  html += `      </div>\n`;
  html += `      <div class="${baseClass}__subtitle">\n`;
  html += `        <h4>This is a subtitle or description</h4>\n`;
  html += `      </div>\n`;
  html += `    </div>\n`;
  html += `  </div>\n`;

  html += `</div>\n\n`;
  return html;
}

function generateSkeletonSurfaceExample(componentName, metadata) {
  const baseClass = componentNameToBEMClass(componentName);
  let html = `<div class="demo-section">\n  <h2>${componentName}</h2>\n\n`;

  html += `  <div class="demo-item">\n    <div class="demo-label">Loading Placeholders</div>\n`;
  html += `    <div class="${baseClass}" style="width: 300px; height: 40px; margin-bottom: 8px;"></div>\n`;
  html += `    <div class="${baseClass} es-rounded" style="width: 200px; height: 60px;"></div>\n`;
  html += `  </div>\n`;

  html += `</div>\n\n`;
  return html;
}

/**
 * Generate HTML for typography examples
 */
function generateTypographyExample() {
  let html = `<div class="demo-section">\n  <h2>Typography</h2>\n\n`;

  html += `  <div class="demo-item">\n    <div class="demo-label">Headers</div>\n`;
  html += `    <h1 class="h1">Header 1 - Sans</h1>\n`;
  html += `    <h1 class="h1 display">Header 1 - Display</h1>\n`;
  html += `    <h2 class="h2">Header 2</h2>\n`;
  html += `    <h3 class="h3">Header 3</h3>\n`;
  html += `    <h4 class="h4">Header 4 - Sans</h4>\n`;
  html += `    <h4 class="h4 mono">Header 4 - Mono</h4>\n`;
  html += `    <h5 class="h5">Header 5 - Sans</h5>\n`;
  html += `    <h5 class="h5 mono">Header 5 - Mono</h5>\n`;
  html += `    <h6 class="h6">Header 6 - Sans</h6>\n`;
  html += `    <h6 class="h6 mono">Header 6 - Mono</h6>\n`;
  html += `  </div>\n\n`;

  html += `  <div class="demo-item">\n    <div class="demo-label">Body Copy</div>\n`;
  html += `    <p class="copy-1">This is body copy text in sans-serif font.</p>\n`;
  html += `    <p class="copy-1 mono">This is body copy text in monospace font.</p>\n`;
  html += `  </div>\n\n`;

  html += `  <div class="demo-item">\n    <div class="demo-label">Labels</div>\n`;
  html += `    <span class="label-1">Label 1 - Sans</span><br>\n`;
  html += `    <span class="label-1 mono">Label 1 - Mono</span><br>\n`;
  html += `    <span class="label-2">Label 2 - Bold</span>\n`;
  html += `  </div>\n`;

  html += `</div>\n\n`;
  return html;
}

/**
 * Generate HTML for surfaces examples
 */
function generateSurfacesExample() {
  let html = `<div class="demo-section">\n  <h2>Surfaces</h2>\n\n`;

  html += `  <div class="demo-item">\n    <div class="demo-label">Nested Surfaces (Auto-nesting)</div>\n`;
  html += `    <div class="surface" style="padding: 20px; margin-bottom: 16px;">\n`;
  html += `      <p>Surface 1 - Primary surface level</p>\n`;
  html += `      <div class="surface" style="padding: 20px;">\n`;
  html += `        <p>Surface 2 - Nested surface level (automatically darker/lighter)</p>\n`;
  html += `      </div>\n`;
  html += `    </div>\n`;
  html += `  </div>\n\n`;

  html += `  <div class="demo-item">\n    <div class="demo-label">Explicit Surface Levels</div>\n`;
  html += `    <div class="surface1" style="padding: 20px; margin-bottom: 8px;">\n`;
  html += `      <p>Surface 1 - Explicit surface level 1</p>\n`;
  html += `    </div>\n`;
  html += `    <div class="surface2" style="padding: 20px;">\n`;
  html += `      <p>Surface 2 - Explicit surface level 2</p>\n`;
  html += `    </div>\n`;
  html += `  </div>\n`;

  html += `</div>\n\n`;
  return html;
}

/**
 * Generate HTML for grid system examples
 */
function generateGridExample() {
  let html = `<div class="demo-section">\n  <h2>Grid System</h2>\n\n`;

  html += `  <div class="demo-item">\n    <div class="demo-label">12-Column Grid Layout</div>\n`;
  html += `    <div class="packets-grid">\n`;
  html += `      <div class="full surface1" style="padding: 16px; margin-bottom: 4px;">Full Width (12 cols)</div>\n`;
  html += `      <div class="grid-col-6 surface1" style="padding: 16px;">Half (6 cols)</div>\n`;
  html += `      <div class="grid-col-6 surface1" style="padding: 16px;">Half (6 cols)</div>\n`;
  html += `      <div class="grid-col-4 surface1" style="padding: 16px;">Third (4 cols)</div>\n`;
  html += `      <div class="grid-col-4 surface1" style="padding: 16px;">Third (4 cols)</div>\n`;
  html += `      <div class="grid-col-4 surface1" style="padding: 16px;">Third (4 cols)</div>\n`;
  html += `      <div class="grid-col-3 surface1" style="padding: 16px;">Quarter (3 cols)</div>\n`;
  html += `      <div class="grid-col-3 surface1" style="padding: 16px;">Quarter (3 cols)</div>\n`;
  html += `      <div class="grid-col-3 surface1" style="padding: 16px;">Quarter (3 cols)</div>\n`;
  html += `      <div class="grid-col-3 surface1" style="padding: 16px;">Quarter (3 cols)</div>\n`;
  html += `      <div class="one-sixth surface1" style="padding: 16px;">1/6</div>\n`;
  html += `      <div class="one-sixth surface1" style="padding: 16px;">1/6</div>\n`;
  html += `      <div class="one-sixth surface1" style="padding: 16px;">1/6</div>\n`;
  html += `      <div class="one-sixth surface1" style="padding: 16px;">1/6</div>\n`;
  html += `      <div class="one-sixth surface1" style="padding: 16px;">1/6</div>\n`;
  html += `      <div class="one-sixth surface1" style="padding: 16px;">1/6</div>\n`;
  html += `    </div>\n`;
  html += `  </div>\n`;

  html += `</div>\n\n`;
  return html;
}

/**
 * Generate HTML for module container examples
 */
function generateModuleExample(componentName, metadata) {
  const baseClass = componentNameToBEMClass(componentName);
  let html = `<div class="demo-section">\n  <h2>${componentName}</h2>\n\n`;

  html += `  <div class="demo-item">\n    <div class="demo-label">Module Container</div>\n`;
  html += `    <div class="${baseClass}">\n`;
  html += `      <h3>Module with padding</h3>\n`;
  html += `      <p>This demonstrates a module container with responsive horizontal padding.</p>\n`;
  html += `    </div>\n`;
  html += `  </div>\n\n`;

  html += `  <div class="demo-item">\n    <div class="demo-label">Module with Surface</div>\n`;
  html += `    <div class="${baseClass} surface">\n`;
  html += `      <h3>Module with surface styling</h3>\n`;
  html += `      <p>This module combines surface background with module padding and border radius.</p>\n`;
  html += `    </div>\n`;
  html += `  </div>\n`;

  html += `</div>\n\n`;
  return html;
}

/**
 * Generate HTML for a component based on its type
 */
function generateComponentHTML(componentName, metadata) {
  // Special handling for different component types
  if (componentName.match(/Button$/) && componentName !== 'ESButtonGroup') {
    return generateButtonExample(componentName, metadata);
  } else if (componentName === 'ESButtonGroup') {
    return generateButtonGroupExample(componentName, metadata);
  } else if (componentName === 'ESAlert') {
    return generateAlertExample(componentName, metadata);
  } else if (componentName === 'ESInputCheckbox') {
    return generateCheckboxExample(componentName, metadata);
  } else if (componentName === 'ESInputSwitch') {
    return generateSwitchExample(componentName, metadata);
  } else if (componentName.match(/^ESInput/)) {
    return generateInputExample(componentName, metadata);
  } else if (componentName === 'ESAvatar') {
    return generateAvatarExample(componentName, metadata);
  } else if (componentName === 'ESDivider') {
    return generateDividerExample(componentName, metadata);
  } else if (componentName === 'ESDatum') {
    return generateDatumExample(componentName, metadata);
  } else if (componentName === 'ESBreadcrumbs') {
    return generateBreadcrumbsExample(componentName, metadata);
  } else if (componentName === 'ESTabs') {
    return generateTabsExample(componentName, metadata);
  } else if (componentName === 'ESTableOfContents') {
    return generateTableOfContentsExample(componentName, metadata);
  } else if (componentName === 'ESSpinner') {
    return generateSpinnerExample(componentName, metadata);
  } else if (componentName === 'ESDataTable') {
    return generateDataTableExample(componentName, metadata);
  } else if (componentName === 'ESFormSection') {
    return generateFormSectionExample(componentName, metadata);
  } else if (componentName === 'ESTitleSection') {
    return generateTitleSectionExample(componentName, metadata);
  } else if (componentName === 'ESSkeletonSurface') {
    return generateSkeletonSurfaceExample(componentName, metadata);
  } else if (componentName === 'ESModule') {
    return generateModuleExample(componentName, metadata);
  } else {
    // Generic example for other components
    const baseClass = componentNameToBEMClass(componentName);
    let html = `<div class="demo-section">\n  <h2>${componentName}</h2>\n\n`;
    html += `  <div class="demo-item">\n`;
    html += `    <div class="${baseClass}">`;
    html += `${componentName} component example`;
    html += `</div>\n  </div>\n`;
    html += `</div>\n\n`;
    return html;
  }
}

/**
 * Generate complete tearsheet HTML
 */
export async function generateTearsheet(registry, templatePath, outputPath) {
  console.log('📄 Generating tearsheet...');

  // Read template
  let template;
  if (fs.existsSync(templatePath)) {
    template = fs.readFileSync(templatePath, 'utf-8');
  } else {
    // Use default template if none exists
    template = getDefaultTemplate();
  }

  // Generate component sections
  let componentSections = '';

  // Add Typography section (from base styles)
  componentSections += '<div class="demo-section category-header"><h1>Typography</h1></div>\n\n';
  componentSections += generateTypographyExample();

  // Add Layout Foundations section (from base styles)
  componentSections += '<div class="demo-section category-header"><h1>Layout Foundations</h1></div>\n\n';
  componentSections += generateSurfacesExample();
  componentSections += generateGridExample();

  // Group components by category in logical order
  const buttons = Object.entries(registry).filter(([name]) => name.match(/Button/));
  const inputs = Object.entries(registry).filter(([name]) => name.match(/^ESInput/));
  const display = Object.entries(registry).filter(([name]) =>
    ['ESAlert', 'ESAvatar', 'ESDivider', 'ESDatum'].includes(name)
  );
  const navigation = Object.entries(registry).filter(([name]) =>
    ['ESBreadcrumbs', 'ESTabs', 'ESTableOfContents'].includes(name)
  );
  const dataDisplay = Object.entries(registry).filter(([name]) =>
    ['ESDataTable'].includes(name)
  );
  const layout = Object.entries(registry).filter(([name]) =>
    ['ESTitleSection', 'ESFormSection', 'ESModule'].includes(name)
  );
  const feedback = Object.entries(registry).filter(([name]) =>
    ['ESSpinner', 'ESSkeletonSurface'].includes(name)
  );

  // Add category headers and generate sections in order
  if (buttons.length > 0) {
    componentSections += '<div class="demo-section category-header"><h1>Buttons</h1></div>\n\n';
    for (const [componentName, metadata] of buttons) {
      componentSections += generateComponentHTML(componentName, metadata);
    }
  }

  if (inputs.length > 0) {
    componentSections += '<div class="demo-section category-header"><h1>Form Inputs</h1></div>\n\n';
    for (const [componentName, metadata] of inputs) {
      componentSections += generateComponentHTML(componentName, metadata);
    }
  }

  if (display.length > 0) {
    componentSections += '<div class="demo-section category-header"><h1>Display Components</h1></div>\n\n';
    for (const [componentName, metadata] of display) {
      componentSections += generateComponentHTML(componentName, metadata);
    }
  }

  if (navigation.length > 0) {
    componentSections += '<div class="demo-section category-header"><h1>Navigation Components</h1></div>\n\n';
    for (const [componentName, metadata] of navigation) {
      componentSections += generateComponentHTML(componentName, metadata);
    }
  }

  if (dataDisplay.length > 0) {
    componentSections += '<div class="demo-section category-header"><h1>Data Display</h1></div>\n\n';
    for (const [componentName, metadata] of dataDisplay) {
      componentSections += generateComponentHTML(componentName, metadata);
    }
  }

  if (layout.length > 0) {
    componentSections += '<div class="demo-section category-header"><h1>Layout Components</h1></div>\n\n';
    for (const [componentName, metadata] of layout) {
      componentSections += generateComponentHTML(componentName, metadata);
    }
  }

  if (feedback.length > 0) {
    componentSections += '<div class="demo-section category-header"><h1>Feedback & Loading</h1></div>\n\n';
    for (const [componentName, metadata] of feedback) {
      componentSections += generateComponentHTML(componentName, metadata);
    }
  }

  // Replace placeholder in template
  const html = template.replace('{{COMPONENT_SECTIONS}}', componentSections);

  // Ensure output directory exists
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Write output
  fs.writeFileSync(outputPath, html);
  console.log(`✓ Wrote tearsheet to ${outputPath}`);
}

/**
 * Default template if none provided
 */
function getDefaultTemplate() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Packets CSS Component Tearsheet</title>
  <link rel="stylesheet" href="styles.css">
  <style>
    body { font-family: 'Source Sans 3', sans-serif; margin: 0; padding: 20px; }
    .demo-section { padding: 40px; border-bottom: 2px solid #ccc; }
    .demo-section h2 { margin-top: 0; color: #0075a2; }
    .demo-item { margin-bottom: 32px; }
    .demo-label { font-weight: 600; margin-bottom: 8px; color: #666; }
    .theme-toggle { position: fixed; top: 20px; right: 20px; z-index: 1000; }
    button { margin-right: 8px; margin-bottom: 8px; }
    input, textarea { margin-bottom: 8px; }
    .es-avatar { display: inline-flex; margin-right: 8px; }
  </style>
</head>
<body class="packets">
  <div class="theme-toggle">
    <button class="es-button es-primary" onclick="toggleTheme()">
      Toggle Dark Mode
    </button>
  </div>

  <div class="demo-section">
    <h1>Packets Design System - CSS Components</h1>
    <p>This tearsheet demonstrates all available CSS-only components from the Packets Design System.</p>
  </div>

{{COMPONENT_SECTIONS}}

  <script>
    function toggleTheme() {
      document.body.classList.toggle('dark');
    }
  </script>
</body>
</html>`;
}

export default generateTearsheet;
