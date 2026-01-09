import { glob } from 'glob';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Simple manual registry for variants (easier to maintain than TS parsing)
const COMPONENT_METADATA = {
  'button': { variants: ['primary', 'secondary', 'branded', 'tertiary', 'destructive'], sizes: ['medium', 'xxlarge'] },
  'icon-button': { variants: ['primary', 'secondary', 'branded', 'tertiary', 'destructive'] },
  'button-group': {},
  'input-text': { variants: ['branded', 'error'] },
  'input-email': { variants: ['branded', 'error'] },
  'input-password': { variants: ['branded', 'error'] },
  'input-number': { variants: ['branded', 'error'] },
  'input-search': { variants: ['branded', 'error'] },
  'input-checkbox': { variants: ['branded'] },
  'input-switch': { variants: ['secondary', 'checked'] },
  'input-text-area': { variants: ['error'] },
  'alert': { variants: ['error', 'warning', 'info', 'success'] },
  'avatar': { sizes: ['small', 'medium', 'large'], colors: ['grape', 'lime', 'berry', 'orange'] },
  'datum': {},
  'divider': { variants: ['branded'] },
  'breadcrumbs': {},
  'tabs': {},
  'table-of-contents': {},
  'spinner': {},
  'data-table': {},
  'form-section': {},
  'title-section': {},
  'skeleton-surface': {},
  'icon': {},
  'comma-seperated-list': {},
  'list-tree-view': {},
  'module': {},
  'spacer': {},
  'tab': {}
};

/**
 * Build component registry by scanning CSS files
 */
export async function buildComponentRegistry() {
  const componentsDir = path.join(__dirname, '../src/components');
  const cssFiles = await glob('*.css', { cwd: componentsDir });

  const registry = {};

  for (const file of cssFiles) {
    const kebabName = path.basename(file, '.css');
    const metadata = COMPONENT_METADATA[kebabName] || {};
    const componentName = toPascalCase(kebabName);

    registry[componentName] = {
      name: componentName,
      kebabName,
      cssPath: path.join(componentsDir, file),
      variants: metadata.variants || [],
      sizes: metadata.sizes || [],
      colors: metadata.colors || [],
      modifiers: metadata.modifiers || []
    };

    console.log(`✓ Registered ${componentName}`);
  }

  return registry;
}

/**
 * Get all CSS module files for components
 */
export function getComponentCSSFiles(registry) {
  const files = [];

  for (const [componentName, metadata] of Object.entries(registry)) {
    if (metadata.cssPath) {
      files.push({
        componentName,
        cssPath: metadata.cssPath,
        metadata
      });
    }
  }

  return files;
}

/**
 * Convert kebab-case to PascalCase
 * button → Button
 * input-text → InputText
 */
function toPascalCase(str) {
  const pascalCase = str.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
  return 'ES' + pascalCase;  // Add ES prefix to match tearsheet filters
}

// For testing/debugging
if (import.meta.url === `file://${process.argv[1]}`) {
  const registry = await buildComponentRegistry();
  console.log('\n📋 Component Registry:\n');
  console.log(JSON.stringify(registry, null, 2));
}
