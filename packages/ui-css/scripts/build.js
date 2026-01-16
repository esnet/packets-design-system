import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { rollup } from 'rollup';
import { buildComponentRegistry } from './component-registry.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.join(__dirname, '..');
const SRC_DIR = path.join(ROOT_DIR, 'src');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const UI_DIR = path.join(ROOT_DIR, '../ui');

/**
 * Clean and create directories
 */
function setupDirectories() {
  console.log('📁 Setting up directories...');

  // Create src structure
  const dirs = [
    SRC_DIR,
    path.join(SRC_DIR, 'base'),
    path.join(SRC_DIR, 'components'),
    path.join(SRC_DIR, 'templates'),
    DIST_DIR
  ];

  for (const dir of dirs) {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  }
}

/**
 * Copy global styles from ui package
 */
function copyGlobalStyles() {
  console.log('\n📋 Copying global styles...');

  const styleFiles = ['tokens.css', 'typography.css', 'surfaces.css', 'grid.css', 'animations.css'];
  const sourceDir = path.join(UI_DIR, 'src/style');
  const targetDir = path.join(SRC_DIR, 'base');

  for (const file of styleFiles) {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file);

    if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`  ✓ Copied ${file}`);
    } else {
      console.log(`  ⚠️  ${file} not found`);
    }
  }
}

/**
 * Generate main index.css with all imports
 */
function generateIndexCSS(registry) {
  console.log('\n📝 Generating index.css...');

  let css = '/* Packets Design System - CSS Only Components */\n\n';

  // Base styles
  css += '/* Base/Global Styles */\n';
  css += "@import './base/tokens.css';\n";
  css += "@import './base/typography.css';\n";
  css += "@import './base/surfaces.css';\n";
  css += "@import './base/grid.css';\n";
  css += "@import './base/animations.css';\n\n";

  // Composable utilities
  css += '/* Composable Utilities */\n';
  css += "@import './utilities.css';\n\n";

  // Component styles
  css += '/* Component Styles */\n';

  for (const [componentName, metadata] of Object.entries(registry)) {
    const componentFile = `./components/${metadata.kebabName}.css`;
    const componentPath = path.join(SRC_DIR, 'components', `${metadata.kebabName}.css`);

    if (fs.existsSync(componentPath)) {
      css += `@import '${componentFile}'; /* ${componentName} */\n`;
    }
  }

  const indexPath = path.join(SRC_DIR, 'index.css');
  fs.writeFileSync(indexPath, css);
  console.log(`✓ Generated index.css`);

  return indexPath;
}

/**
 * Format bytes for display
 */
function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

/**
 * Main build function
 */
async function build() {
  console.log('\n🚀 Building Packets UI CSS...\n');

  try {
    // 1. Setup directories
    setupDirectories();

    // 2. Build component registry (for tearsheet)
    console.log('\n📋 Building component registry...');
    const registry = await buildComponentRegistry();
    console.log(`\n✓ Registered ${Object.keys(registry).length} components`);

    // 3. Copy global styles from ui package
    copyGlobalStyles();

    // 4. Generate index.css with imports
    generateIndexCSS(registry);

    // 5. Build CSS with Rollup (both minified and unminified)
    console.log('\n📦 Building CSS with Rollup...');

    // Import rollup config
    const { default: rollupConfig } = await import('../rollup.config.mjs');

    for (const config of rollupConfig) {
      const bundle = await rollup(config);
      await bundle.write(config.output);
      await bundle.close();

      const outputFile = path.basename(config.output.file);
      const stats = fs.statSync(config.output.file);
      console.log(`✓ Built ${outputFile} (${formatBytes(stats.size)})`);
    }

    // 6. Copy tearsheet
    console.log('\n📄 Copying tearsheet...');
    const tearsheetSrc = path.join(SRC_DIR, 'tearsheet.html');
    const tearsheetDest = path.join(DIST_DIR, 'tearsheet.html');
    fs.copyFileSync(tearsheetSrc, tearsheetDest);
    console.log(`✓ Copied tearsheet to ${tearsheetDest}`);

    console.log('\n✅ Build complete!\n');
    console.log('Output files:');
    console.log(`  - dist/styles.css`);
    console.log(`  - dist/styles.min.css`);
    console.log(`  - dist/tearsheet.html`);
    console.log('');

  } catch (error) {
    console.error('\n❌ Build failed:', error);
    process.exit(1);
  }
}

// Run build
if (import.meta.url === `file://${process.argv[1]}`) {
  build();
}

export default build;
