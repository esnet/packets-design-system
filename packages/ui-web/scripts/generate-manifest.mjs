/**
 * Tearsheet 2.0 — Manifest generator
 *
 * Discovers every component that has a <Name>.types.ts file, parses its
 * Pkts<Name>Props interface with the TypeScript AST, and emits:
 *   tearsheet-2/manifest.json  — for Playwright tests and debugging
 *   tearsheet-2/manifest.js    — sets window.__PKTS_MANIFEST__ for the SPA
 *
 * Category / subcategory resolution order:
 *   1. @category <Category> / <Subcategory>  JSDoc tag on the Props interface
 *   2. tearsheet-2/taxonomy.json (keyed by tag name)
 *   3. Fallback: "Uncategorized" (generator warning printed)
 *
 * Figma URL resolution order:
 *   1. @figma <node-id> [width height]  JSDoc tag on the Props interface
 *   2. taxonomy.json figmaHeading -> FIGMA_NODES lookup in figma-links.js
 *   3. null (component shown without Figma panel, no error)
 *
 * Availability values:
 *   "html-native"  — no web component; rendered with bare native tags styled by
 *                    Packets CSS defaults. No pkts- class needed.
 *   "ui-css"       — rendered with a native element + pkts- class(es). Either
 *                    a web component whose render output is exactly that markup,
 *                    or no web component but markup needs pkts- classes.
 *   "web"          — web component only; no native-class equivalent.
 *
 * ui-css detection for web components (static analysis of render template):
 *   ALL three rules must hold:
 *   1. Root rendered element is a native tag (no hyphen).
 *   2. Root has a static base class starting with pkts- that is a selector in
 *      the ui-css package (ui-css/src/components/<stem>.css must exist).
 *   3. Template contains no custom elements (hyphenated tags) other than slot.
 *   If the template cannot be parsed confidently → "web" (listed under unsure).
 *
 * Overrides in native-markup.json under the "overrides" key:
 *   "pkts-foo": null           → force "web" (false positive)
 *   "pkts-foo": { markup, variants } → force "ui-css" with explicit markup/variants
 *
 * No-web-component entries come from two sources:
 *   1. tearsheet-2/native-markup.json — hand-authored entries.
 *      Availability derived from markup: pkts- class → "ui-css", else → "html-native".
 *   2. ui-css/src/components/*.css scan — any .css with no matching web component
 *      and no native-markup.json entry → "html-native", unclassified:true, noDemo:true.
 *
 * Run:  node scripts/generate-manifest.mjs  (from packages/ui-web)
 */

import { createRequire } from 'module';
import { fileURLToPath }  from 'url';
import path from 'path';
import fs   from 'fs';

const require    = createRequire(import.meta.url);
const ts         = require('typescript');

const ROOT              = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const COMPONENTS_DIR    = path.join(ROOT, 'src', 'components');
const OUTPUT_DIR        = path.join(ROOT, 'tearsheet-2');
const CSS_COMPONENTS_DIR = path.join(ROOT, '../ui-css/src/components');

// ── Load taxonomy ────────────────────────────────────────────────────────────

const TAXONOMY = JSON.parse(
  fs.readFileSync(path.join(OUTPUT_DIR, 'taxonomy.json'), 'utf8')
);

// ── Load Figma data from tearsheet-1's figma-links.js ────────────────────────

let FIGMA_NODES = {};
let FIGMA_FILE_KEY = '';
let FIGMA_FILE_NAME = '';
let FIGMA_DEFAULT_PARAMS = {};

try {
  const figmaLinksSource = fs.readFileSync(
    path.join(ROOT, 'tearsheet/scripts/figma-links.js'), 'utf8'
  );
  const fn = new Function(
    figmaLinksSource +
    '\nreturn { FIGMA_NODES, FIGMA_FILE_KEY, FIGMA_FILE_NAME, FIGMA_DEFAULT_PARAMS };'
  );
  ({ FIGMA_NODES, FIGMA_FILE_KEY, FIGMA_FILE_NAME, FIGMA_DEFAULT_PARAMS } = fn());
} catch (e) {
  console.warn(`[generate-manifest] Could not load figma-links.js: ${e.message}`);
}

const FIGMA_EMBED_PARAMS = { 'hide-ui': '1', 'footer': 'false' };

function buildFigmaUrl(nodeId, overrides = {}) {
  const params = new URLSearchParams({
    'node-id': nodeId,
    ...FIGMA_DEFAULT_PARAMS,
    ...overrides,
    ...FIGMA_EMBED_PARAMS,
  });
  return `https://embed.figma.com/proto/${FIGMA_FILE_KEY}/${FIGMA_FILE_NAME}?${params}`;
}

function resolveFigmaNode(heading) {
  if (!heading || !FIGMA_NODES[heading]) return null;
  const val = FIGMA_NODES[heading];
  if (typeof val === 'string' && val) return { url: buildFigmaUrl(val), title: heading };
  if (val && typeof val === 'object') {
    const { node, url, title, ...overrides } = val;
    return { url: url ?? buildFigmaUrl(node, overrides), title: title ?? heading };
  }
  return null;
}

// ── Naming helpers ────────────────────────────────────────────────────────────

function toKebab(s) {
  return s.replace(/([A-Z])/g, (_, c) => `-${c.toLowerCase()}`).replace(/^-/, '');
}

function toDisplayName(cls) {
  return cls.replace(/^Pkts/, '').replace(/([A-Z])/g, ' $1').trim();
}

// ── Type-node classifier (pure AST, no type checker) ─────────────────────────

function isNullish(node) {
  const k = node.kind;
  if (k === ts.SyntaxKind.UndefinedKeyword ||
      k === ts.SyntaxKind.NullKeyword      ||
      k === ts.SyntaxKind.VoidKeyword)      return true;
  if (ts.isLiteralTypeNode(node) && node.literal.kind === ts.SyntaxKind.NullKeyword) return true;
  return false;
}

function classifyTypeNode(node, aliases, propName) {
  if (!node) return { kind: 'unknown', allowedValues: null };

  const k = node.kind;

  if (ts.isArrayTypeNode(node))       return { kind: 'array',   allowedValues: null };

  if (k === ts.SyntaxKind.StringKeyword)    return { kind: 'string',  allowedValues: null };
  if (k === ts.SyntaxKind.NumberKeyword)    return { kind: 'number',  allowedValues: null };
  if (k === ts.SyntaxKind.BooleanKeyword)   return { kind: 'boolean', allowedValues: null };
  if (k === ts.SyntaxKind.UndefinedKeyword ||
      k === ts.SyntaxKind.NullKeyword      ||
      k === ts.SyntaxKind.VoidKeyword      ||
      k === ts.SyntaxKind.AnyKeyword       ||
      k === ts.SyntaxKind.UnknownKeyword   ||
      k === ts.SyntaxKind.NeverKeyword)     return { kind: 'unknown', allowedValues: null };

  if (ts.isLiteralTypeNode(node)) {
    const lit = node.literal;
    if (ts.isStringLiteral(lit))                                   return { kind: 'union',   allowedValues: [lit.text] };
    if (lit.kind === ts.SyntaxKind.TrueKeyword ||
        lit.kind === ts.SyntaxKind.FalseKeyword)                   return { kind: 'boolean', allowedValues: null };
    if (ts.isNumericLiteral(lit))                                  return { kind: 'number',  allowedValues: null };
    return { kind: 'unknown', allowedValues: null };
  }

  if (ts.isFunctionTypeNode(node))       return { kind: 'event',  allowedValues: null };
  if (ts.isTypeLiteralNode(node))        return { kind: 'object', allowedValues: null };
  if (ts.isIntersectionTypeNode(node))   return { kind: 'object', allowedValues: null };
  if (ts.isParenthesizedTypeNode(node))  return classifyTypeNode(node.type, aliases, propName);

  if (ts.isTypeReferenceNode(node)) {
    const name = ts.isIdentifier(node.typeName) ? node.typeName.text : node.typeName.getText();
    if (name === 'Array' || name === 'ReadonlyArray')              return { kind: 'array',  allowedValues: null };
    if (name === 'Promise')                                        return { kind: 'event',  allowedValues: null };
    if (name === 'Date')                                           return { kind: 'object', allowedValues: null };
    if (/^(Partial|Required|Readonly|Record|Map|Set|Extract|Exclude|NonNullable|ReturnType)$/.test(name)) {
      return { kind: 'object', allowedValues: null };
    }
    if (aliases[name]) return classifyTypeNode(aliases[name], aliases, propName);
    return { kind: 'unknown', allowedValues: null };
  }

  if (ts.isUnionTypeNode(node)) {
    const nonNull = node.types.filter(t => !isNullish(t));
    if (nonNull.length === 0) return { kind: 'unknown', allowedValues: null };
    if (nonNull.length === 1) return classifyTypeNode(nonNull[0], aliases, propName);

    const resolved = nonNull.map(t => classifyTypeNode(t, aliases, propName));

    if (resolved.every(r => r.kind === 'boolean')) return { kind: 'boolean', allowedValues: null };

    if (resolved.every(r => r.kind === 'union')) {
      return { kind: 'union', allowedValues: resolved.flatMap(r => r.allowedValues ?? []) };
    }

    if (resolved.some(r => r.kind === 'boolean') && resolved.some(r => r.kind === 'string' || r.kind === 'union')) {
      return { kind: 'string', allowedValues: null, warning: `boolean | string — using text input` };
    }

    return { kind: 'unknown', allowedValues: null, warning: `Complex union for "${propName}" — using text input` };
  }

  return { kind: 'unknown', allowedValues: null };
}

// ── JSDoc parsing ─────────────────────────────────────────────────────────────

function parseInterfaceJSDoc(iface, sf) {
  const result = { category: null, subcategory: null, figmaNode: null, figmaUrl: null, figmaSize: null };

  const slice = sf.text.slice(iface.pos, iface.name.pos);
  const jm    = slice.match(/\/\*\*([\s\S]*?)\*\//);
  if (!jm) return result;

  const doc = jm[1];

  const catM = doc.match(/@category\s+([^\n@]+)/);
  if (catM) {
    const parts      = catM[1].split('/').map(s => s.trim());
    result.category    = parts[0] || null;
    result.subcategory = parts[1] || null;
  }

  const figM = doc.match(/@figma\s+(\S+)(?:\s+(\d+)\s+(\d+))?/);
  if (figM) {
    if (figM[1].startsWith('http')) {
      result.figmaUrl = figM[1];
    } else {
      result.figmaNode = figM[1];
    }
    if (figM[2] && figM[3]) {
      result.figmaSize = [parseInt(figM[2], 10), parseInt(figM[3], 10)];
    }
  }

  return result;
}

// ── Parse a .types.ts file ────────────────────────────────────────────────────

function parseTypesFile(filePath, compWarnings) {
  const src = fs.readFileSync(filePath, 'utf8');
  const sf  = ts.createSourceFile(filePath, src, ts.ScriptTarget.ES2020, true);

  const aliases = {};
  ts.forEachChild(sf, node => {
    if (ts.isTypeAliasDeclaration(node)) aliases[node.name.text] = node.type;
  });

  let propsIface  = null;
  let ifaceJSDoc  = { category: null, subcategory: null, figmaNode: null, figmaUrl: null, figmaSize: null };

  ts.forEachChild(sf, node => {
    if (ts.isInterfaceDeclaration(node) && !propsIface) {
      const n = node.name.text;
      if (n.startsWith('Pkts') && n.endsWith('Props')) {
        propsIface = node;
        ifaceJSDoc = parseInterfaceJSDoc(node, sf);
      }
    }
  });

  const props = propsIface ? [] : null;
  if (!propsIface) return { props: null, ifaceJSDoc };

  for (const member of propsIface.members) {
    if (!ts.isPropertySignature(member)) continue;

    const propName = ts.isIdentifier(member.name) ? member.name.text : member.name.getText(sf);
    const optional = !!member.questionToken;

    let description = '';
    const trivia = src.slice(member.pos, member.end);
    const jm = trivia.match(/\/\*\*([\s\S]*?)\*\//);
    if (jm) description = jm[1].replace(/^\s*\*\s?/gm, '').trim();

    const result = member.type
      ? classifyTypeNode(member.type, aliases, propName)
      : { kind: 'unknown', allowedValues: null };

    if (result.warning) compWarnings.push(`  ${propName}: ${result.warning}`);

    props.push({
      name:               propName,
      attrName:           toKebab(propName),
      kind:               result.kind,
      allowedValues:      result.allowedValues ?? null,
      optional,
      description,
      default:            null,
      inObservedAttributes: false,
      booleanStyle:       null,
      ...(result.warning ? { warning: result.warning } : {}),
    });
  }

  return { props, ifaceJSDoc };
}

// ── Read implementation file ──────────────────────────────────────────────────

function readImplFile(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  const sf  = ts.createSourceFile(filePath, src, ts.ScriptTarget.ES2020, true);

  let tagName = null;
  const observedAttributes     = [];
  const booleanFalseStringProps = new Set();
  const hasSlot = src.includes('<slot>') || src.includes('<slot ');

  const exm = src.match(/customElements\.define\s*\([^,]+,[^,]+,\s*\{\s*extends\s*:\s*['"]([^'"]+)['"]/);
  const customElementExtends = exm ? exm[1] : null;

  function walk(node) {
    if (ts.isPropertyDeclaration(node) && ts.isIdentifier(node.name) && node.name.text === 'tagName') {
      const mods = ts.canHaveModifiers(node) ? ts.getModifiers(node) : node.modifiers;
      if (mods?.some(m => m.kind === ts.SyntaxKind.StaticKeyword)) {
        if (node.initializer && ts.isStringLiteral(node.initializer)) {
          tagName = node.initializer.text;
        }
      }
    }

    if (ts.isGetAccessorDeclaration(node) && ts.isIdentifier(node.name) && node.body) {
      if (node.name.text === 'observedAttributes') {
        for (const stmt of node.body.statements) {
          if (ts.isReturnStatement(stmt) && stmt.expression && ts.isArrayLiteralExpression(stmt.expression)) {
            for (const el of stmt.expression.elements) {
              if (ts.isStringLiteral(el)) observedAttributes.push(el.text);
            }
          }
        }
      }
      if (node.name.text !== 'observedAttributes') {
        const body = src.slice(node.body.pos, node.body.end);
        if (body.includes('!== "false"') || body.includes("!== 'false'")) {
          booleanFalseStringProps.add(node.name.text);
        }
      }
    }

    if (ts.isSetAccessorDeclaration(node) && ts.isIdentifier(node.name) && node.body) {
      const body = src.slice(node.body.pos, node.body.end);
      if (body.includes('"false"') || body.includes("'false'")) {
        booleanFalseStringProps.add(node.name.text);
      }
    }

    ts.forEachChild(node, walk);
  }

  walk(sf);

  return { tagName, observedAttributes, booleanFalseStringProps, hasSlot, customElementExtends, src };
}

// ── ui-css detection ──────────────────────────────────────────────────────────

/**
 * Attempt to classify a web component as "ui-css" by statically analysing its
 * render template (the innerHTML assignment in _renderInitial or similar).
 *
 * Returns { cssMarkup, baseClass } when all three rules are satisfied, or null
 * when the template can't be parsed confidently (caller marks the entry "web"
 * and adds to unsure list).
 *
 * Rules:
 *  1. Root rendered element is a static native tag (no hyphen, no interpolation).
 *  2. Root has a static base class starting with pkts- that maps to a selector
 *     in ui-css (ui-css/src/components/<stem>.css must exist).
 *  3. Template contains no custom elements (hyphenated tags); <slot> is native.
 */
export function detectUiCssFromTemplate(template) {
  if (!template) return null;

  // Rule 1: root tag must be a static native tag
  const rootMatch = template.trimStart().match(/^<([a-z][a-z0-9]*)\b/);
  if (!rootMatch) return null;  // dynamic root (e.g. <${tag}) or no opening tag

  const rootTag = rootMatch[1];
  if (rootTag.includes('-')) return null; // Rule 1: no hyphen → native only

  // Extract class attribute from root element's opening tag (up to first >)
  const firstGt = template.indexOf('>');
  if (firstGt < 0) return null;
  const rootPart = template.slice(0, firstGt + 1);

  const classMatch = rootPart.match(/\bclass=["']([^"']*)["']/);
  if (!classMatch) return null;
  const classValue = classMatch[1];
  if (classValue.includes('${')) return null; // dynamic class — skip

  const classes = classValue.trim().split(/\s+/);
  const baseClass = classes.find(c => /^pkts-[a-z]/.test(c));
  if (!baseClass) return null; // Rule 2: must have static pkts- base class

  // Rule 3: no custom elements (hyphenated tags) in template
  const hyphenTagRe = /<([a-z][a-z0-9]*(?:-[a-z0-9]+)+)/g;
  let m;
  while ((m = hyphenTagRe.exec(template)) !== null) {
    return null; // Contains a custom element (e.g. <pkts-icon>)
  }

  // Rule 4: template must not contain dynamic element references (e.g. <${tag}>)
  if (template.includes('<${')) return null;

  // Rule 5: root element's content must be slots-only or empty (no non-slot native children).
  // Components with internal structure (input wrappers, spinners) are not css-only usable
  // with just the root element + class.
  const closingTag = `</${rootTag}>`;
  const lastClosing = template.lastIndexOf(closingTag);
  if (lastClosing > firstGt) {
    const inner = template.slice(firstGt + 1, lastClosing).trim();
    const innerNoSlot = inner.replace(/<\/?slot[^>]*>/g, '').trim();
    if (/</.test(innerNoSlot)) return null; // has non-slot HTML children
  }

  const hasSlot = /<slot\b/.test(template);
  const cssMarkup = `<${rootTag} class="${baseClass}">${hasSlot ? 'Label' : ''}</${rootTag}>`;

  return { cssMarkup, baseClass };
}

function extractInnerHtmlTemplate(src) {
  const m = src.match(/this\.innerHTML\s*=\s*`([\s\S]*?)`\s*;/);
  return m ? m[1] : null;
}

/**
 * Extract modifier classes from the CSS file for a component.
 * Returns classes that:
 *  - appear as .pkts-* selectors in the CSS file
 *  - also appear as string literals or class mappings in the component source
 *  - are not state classes (hover, pressed, active, etc.)
 */
function extractCssVariants(cssFilePath, componentSrc, baseClass) {
  const STATE_CLASSES = new Set([
    'pkts-hover', 'pkts-pressed', 'pkts-active', 'pkts-visited',
    'pkts-disabled', 'pkts-focus', 'pkts-focused', 'pkts-checked',
    'pkts-fill', 'pkts-nofill', 'pkts-open', 'pkts-closed', 'pkts-hidden',
  ]);

  let cssContent = '';
  try { cssContent = fs.readFileSync(cssFilePath, 'utf8'); } catch { return []; }

  const cssClasses = new Set((cssContent.match(/\.pkts-[a-z0-9-]+/g) ?? []).map(s => s.slice(1)));
  cssClasses.delete(baseClass);

  const variants = [];
  for (const cls of cssClasses) {
    if (STATE_CLASSES.has(cls)) continue;
    const name = cls.replace(/^pkts-/, '');
    // Check if modifier appears as a string in source (e.g. "branded", 'pkts-branded')
    const inSrc = componentSrc.includes(`"${name}"`) ||
                  componentSrc.includes(`'${name}'`) ||
                  componentSrc.includes(`"${cls}"`) ||
                  componentSrc.includes(`'${cls}'`);
    if (inSrc) variants.push(cls);
  }

  return variants.sort();
}

// ── Resolve taxonomy for a component ─────────────────────────────────────────

function resolveTaxonomy(tagName, ifaceJSDoc) {
  if (ifaceJSDoc.category) {
    return {
      category:    ifaceJSDoc.category,
      subcategory: ifaceJSDoc.subcategory || null,
      order:       9999,
    };
  }

  const entry = TAXONOMY.components[tagName];
  if (entry) {
    return {
      category:    entry.category,
      subcategory: entry.subcategory || null,
      order:       entry.order ?? 9999,
    };
  }

  return { category: 'Uncategorized', subcategory: null, order: 9999 };
}

// ── Resolve Figma for a component ─────────────────────────────────────────────

function resolveFigma(tagName, ifaceJSDoc) {
  if (ifaceJSDoc.figmaUrl) {
    return { url: ifaceJSDoc.figmaUrl, title: null, size: ifaceJSDoc.figmaSize };
  }
  if (ifaceJSDoc.figmaNode) {
    return {
      url:   buildFigmaUrl(ifaceJSDoc.figmaNode),
      title: null,
      size:  ifaceJSDoc.figmaSize,
    };
  }

  const taxEntry = TAXONOMY.components[tagName];
  if (taxEntry?.figmaHeading) {
    const resolved = resolveFigmaNode(taxEntry.figmaHeading);
    if (resolved) return { url: resolved.url, title: resolved.title, size: null };
  }

  return null;
}

// ── Derive availability from native-markup entry markup ───────────────────────

function deriveEntryAvailability(entry) {
  const hasPktsClass = str => str && /class=["'][^"']*pkts-[a-z]/.test(str);
  if (hasPktsClass(entry.markup)) return 'ui-css';
  if (Array.isArray(entry.variants)) {
    for (const v of entry.variants) {
      if (hasPktsClass(v.markup)) return 'ui-css';
    }
  }
  return 'html-native';
}

// ── Load native-markup.json ───────────────────────────────────────────────────

const NATIVE_MARKUP_FILE = path.join(OUTPUT_DIR, 'native-markup.json');
let nativeMarkupEntries = [];
let overrides = {};
try {
  const raw = JSON.parse(fs.readFileSync(NATIVE_MARKUP_FILE, 'utf8'));
  nativeMarkupEntries = raw.entries ?? [];
  overrides           = raw.overrides ?? {};
} catch { /* file missing — skip */ }

const nativeMarkupIds = new Set(nativeMarkupEntries.map(e => e.id));

// Pre-build: set of CSS file stems in ui-css/src/components
let uiCssStemSet = new Set();
try {
  uiCssStemSet = new Set(
    fs.readdirSync(CSS_COMPONENTS_DIR)
      .filter(f => f.endsWith('.css'))
      .map(f => f.slice(0, -4))
  );
} catch { /* ignore */ }

// ── Main ──────────────────────────────────────────────────────────────────────

const warnings = [];
const unsureList = [];   // components whose template couldn't be parsed confidently
let totalProps = 0, withTypes = 0, withoutTypes = 0;

const compDirs = fs
  .readdirSync(COMPONENTS_DIR, { withFileTypes: true })
  .filter(e => e.isDirectory())
  .map(e => ({ name: e.name, dir: path.join(COMPONENTS_DIR, e.name) }));

console.log(`\n[generate-manifest] Scanning ${compDirs.length} component directories…`);

const manifest = [];

for (const { name, dir } of compDirs) {
  const mainFile  = path.join(dir, `${name}.ts`);
  const typesFile = path.join(dir, `${name}.types.ts`);

  if (!fs.existsSync(mainFile)) { console.log(`  SKIP ${name}: no ${name}.ts`); continue; }

  let implMeta;
  try { implMeta = readImplFile(mainFile); }
  catch (e) { console.warn(`  WARN ${name}: impl parse error — ${e.message}`); continue; }

  if (!implMeta.tagName) { console.log(`  SKIP ${name}: no static tagName`); continue; }

  const hasTypesFile = fs.existsSync(typesFile);
  let props      = [];
  let ifaceJSDoc = { category: null, subcategory: null, figmaNode: null, figmaUrl: null, figmaSize: null };
  const compWarnings = [];

  if (hasTypesFile) {
    withTypes++;
    try {
      const parsed = parseTypesFile(typesFile, compWarnings);
      props      = parsed.props ?? [];
      ifaceJSDoc = parsed.ifaceJSDoc;
    } catch (e) {
      compWarnings.push(`  parse error: ${e.message}`);
    }

    for (const prop of props) {
      prop.inObservedAttributes = implMeta.observedAttributes.includes(prop.attrName);
      if (prop.kind === 'boolean') {
        prop.booleanStyle = implMeta.booleanFalseStringProps.has(prop.name) ? 'false-string' : 'toggle';
      }
      if (!prop.inObservedAttributes && prop.kind !== 'event') {
        const msg = `"${prop.name}" (${prop.attrName}) not in observedAttributes`;
        if (!prop.warning) prop.warning = msg;
        compWarnings.push(`  ⚠ ${msg}`);
      }
    }

    if (compWarnings.length) { warnings.push(`${name}:`); warnings.push(...compWarnings); }
    totalProps += props.length;
  } else {
    withoutTypes++;
  }

  const { schema, events } = generateSchema(props, implMeta.hasSlot);
  const tax   = resolveTaxonomy(implMeta.tagName, ifaceJSDoc);
  const figma = resolveFigma(implMeta.tagName, ifaceJSDoc);

  if (tax.category === 'Uncategorized') {
    warnings.push(`${name}: Uncategorized — add to taxonomy.json or use @category JSDoc tag`);
  }
  if (!figma) {
    warnings.push(`${name}: no Figma entry — add figmaHeading to taxonomy.json or use @figma JSDoc tag`);
  }

  // ── ui-css detection ───────────────────────────────────────────────────────

  let availability = 'web';
  let cssMarkup    = undefined;
  let cssVariants  = undefined;

  const tagOverride = overrides[implMeta.tagName];

  if (tagOverride === null) {
    // Explicit "web" override — no detection
    availability = 'web';
  } else if (tagOverride && typeof tagOverride === 'object') {
    // Explicit "ui-css" override with markup and variants
    availability = 'ui-css';
    cssMarkup    = tagOverride.markup;
    cssVariants  = tagOverride.variants ?? [];
  } else {
    // Auto-detect from render template
    const template = extractInnerHtmlTemplate(implMeta.src);
    if (template) {
      const detected = detectUiCssFromTemplate(template);
      if (detected) {
        // Rule 2b: CSS file must exist for this component's stem
        const stem = implMeta.tagName.replace(/^pkts-/, '');
        if (uiCssStemSet.has(stem)) {
          availability = 'ui-css';
          cssMarkup    = detected.cssMarkup;
          const cssFilePath = path.join(CSS_COMPONENTS_DIR, `${stem}.css`);
          cssVariants  = extractCssVariants(cssFilePath, implMeta.src, detected.baseClass);
        } else {
          // Template qualifies but no CSS file — treat as unsure
          unsureList.push(`${implMeta.tagName} (qualifies by template but no ui-css/${stem}.css)`);
        }
      } else if (template) {
        // Template found but detection failed — could be ui-css; note as unsure
        // only if a matching CSS file exists (otherwise clearly web)
        const stem = implMeta.tagName.replace(/^pkts-/, '');
        if (uiCssStemSet.has(stem)) {
          unsureList.push(`${implMeta.tagName} (template not parseable; matching ui-css file exists)`);
        }
      }
    }
  }

  manifest.push({
    id:                   implMeta.tagName,
    tagName:              implMeta.tagName,
    className:            name,
    displayName:          toDisplayName(name),
    kind:                 'web-component',
    availability,
    noDemo:               false,
    category:             tax.category,
    subcategory:          tax.subcategory,
    order:                tax.order,
    figma:                figma,
    hasSlot:              implMeta.hasSlot,
    customElementExtends: implMeta.customElementExtends,
    observedAttributes:   implMeta.observedAttributes,
    hasTypesFile,
    props,
    schema,
    events,
    ...(availability === 'ui-css' ? { cssMarkup: cssMarkup ?? '', cssVariants: cssVariants ?? [] } : {}),
  });
}

// ── Merge native-markup.json entries ─────────────────────────────────────────

for (const entry of nativeMarkupEntries) {
  const availability = deriveEntryAvailability(entry);
  let figma = null;
  if (entry.figmaHeading) figma = resolveFigmaNode(entry.figmaHeading);

  manifest.push({
    id:           entry.id,
    tagName:      null,
    className:    null,
    displayName:  entry.label,
    kind:         'no-web-component',
    availability,
    noDemo:       false,
    category:     entry.category,
    subcategory:  entry.subcategory ?? null,
    order:        entry.order ?? 9999,
    figma,
    markup:       entry.markup ?? null,
    variants:     entry.variants ?? null,
    hasSlot:      false,
    customElementExtends: null,
    observedAttributes:   [],
    hasTypesFile: false,
    props:        [],
  });
}

// ── Scan ui-css/src/components for unclassified entries ──────────────────────
// Any .css with no matching web component and no native-markup.json entry
// appears as availability:"html-native" unclassified:true noDemo:true.

const webTagNames = new Set(manifest.filter(m => m.kind === 'web-component').map(m => m.tagName));

try {
  const cssFiles = fs.readdirSync(CSS_COMPONENTS_DIR).filter(f => f.endsWith('.css'));

  for (const cssFile of cssFiles) {
    const stem     = cssFile.slice(0, -4);
    const tagName  = `pkts-${stem}`;

    if (webTagNames.has(tagName)) continue;
    if (nativeMarkupIds.has(stem)) continue;

    const taxEntry = TAXONOMY.components[stem];
    const category = taxEntry?.category    ?? 'Uncategorized';
    const subcat   = taxEntry?.subcategory ?? null;
    const order    = taxEntry?.order       ?? 9999;

    warnings.push(`${cssFile}: no web component and no native-markup.json entry — adding as html-native unclassified. Add to native-markup.json to provide a demo.`);

    const displayName = stem.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    manifest.push({
      id:           stem,
      tagName:      null,
      className:    null,
      displayName,
      kind:         'no-web-component',
      availability: 'html-native',
      unclassified: true,
      noDemo:       true,
      category,
      subcategory:  subcat,
      order,
      figma:        null,
      markup:       null,
      variants:     null,
      hasSlot:      false,
      customElementExtends: null,
      observedAttributes:   [],
      hasTypesFile: false,
      props:        [],
    });
  }
} catch (e) {
  console.warn(`[generate-manifest] Could not scan ui-css components: ${e.message}`);
}

// ── Schema generation ─────────────────────────────────────────────────────────

function generateSchema(props, hasSlot) {
  const properties = {};
  const required = [];
  const events = [];

  if (hasSlot) {
    properties.content = {
      type: 'string',
      description: 'Text rendered inside the element (slot content)',
      'x-kind': 'slot',
      'x-inObserved': false,
    };
  }

  for (const prop of props) {
    if (prop.kind === 'event') {
      events.push({ name: prop.name, description: prop.description || '' });
      continue;
    }

    const schemaProp = {
      'x-attribute': prop.attrName,
      'x-kind':      'attribute',
      'x-inObserved': prop.inObservedAttributes,
    };

    if (prop.description)                    schemaProp.description = prop.description;
    if (prop.default !== null &&
        prop.default !== undefined)          schemaProp.default     = prop.default;
    if (prop.warning)                        schemaProp['x-warning'] = prop.warning;
    if (prop.booleanStyle === 'false-string') schemaProp['x-boolean-style'] = 'false-string';

    switch (prop.kind) {
      case 'string':  schemaProp.type = 'string';  break;
      case 'number':  schemaProp.type = 'number';  break;
      case 'boolean': schemaProp.type = 'boolean'; break;
      case 'object':  schemaProp.type = 'object';  break;
      case 'array':   schemaProp.type = 'array';   break;
      case 'union':
        schemaProp.type = 'string';
        schemaProp.enum = prop.allowedValues ?? [];
        break;
      default:
        schemaProp.type = 'string';
        if (!schemaProp['x-warning']) schemaProp['x-warning'] = `Unclassified type "${prop.kind}" — using text input`;
    }

    properties[prop.name] = schemaProp;

    if (!prop.optional) required.push(prop.name);
  }

  const schema = { type: 'object', properties };
  if (required.length) schema.required = required;

  return { schema, events };
}

// ── Sort ──────────────────────────────────────────────────────────────────────

function categoryIdx(cat) {
  const i = TAXONOMY.categoryOrder.indexOf(cat);
  return i < 0 ? 9998 : i;
}

function subcategoryIdx(cat, sub) {
  if (!sub) return 9998;
  const list = TAXONOMY.subcategoryOrder[cat] ?? [];
  const i    = list.indexOf(sub);
  return i < 0 ? 9999 : i;
}

manifest.sort((a, b) => {
  const ci = categoryIdx(a.category) - categoryIdx(b.category);
  if (ci !== 0) return ci;
  const si = subcategoryIdx(a.category, a.subcategory) - subcategoryIdx(b.category, b.subcategory);
  if (si !== 0) return si;
  const oi = (a.order ?? 9999) - (b.order ?? 9999);
  if (oi !== 0) return oi;
  return a.displayName.localeCompare(b.displayName);
});

// ── Write output ──────────────────────────────────────────────────────────────

if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const json = JSON.stringify(manifest, null, 2);
fs.writeFileSync(path.join(OUTPUT_DIR, 'manifest.json'), json + '\n');
fs.writeFileSync(
  path.join(OUTPUT_DIR, 'manifest.js'),
  `/* Auto-generated — do not edit. Run: npm run generate-manifest */\nwindow.__PKTS_MANIFEST__ = ${json};\n`,
);

const htmlNativeCount = manifest.filter(m => m.availability === 'html-native').length;
const uiCssCount      = manifest.filter(m => m.availability === 'ui-css').length;
const webCount        = manifest.filter(m => m.availability === 'web').length;
const uiCssWebCount   = manifest.filter(m => m.availability === 'ui-css' && m.tagName).length;
const uiCssNoWebCount = manifest.filter(m => m.availability === 'ui-css' && !m.tagName).length;
console.log(`\n  Availability: ${webCount} web, ${uiCssCount} ui-css (${uiCssWebCount} with webcomp, ${uiCssNoWebCount} without), ${htmlNativeCount} html-native`);
console.log(`  ${totalProps} props mapped\n`);

if (unsureList.length) {
  console.log(`Unsure (template found but not parseable — classified "web"):`);
  for (const u of unsureList) console.log(`  ${u}`);
  console.log('');
}

// Warnings — group for readability
const unclassifiedWarnings = warnings.filter(w => w.includes('unclassified'));
const propWarnings  = warnings.filter(w => !w.endsWith(':') && !w.includes('Uncategorized') && !w.includes('no Figma') && !w.includes('unclassified'));
const taxWarnings   = warnings.filter(w => w.includes('Uncategorized'));
const figmaWarnings = warnings.filter(w => w.includes('no Figma'));

if (unclassifiedWarnings.length) {
  console.log(`html-native unclassified (${unclassifiedWarnings.length}) — add to native-markup.json to provide a demo:`);
  for (const w of unclassifiedWarnings) console.log(' ', w);
  console.log('');
}
if (propWarnings.length) {
  console.log(`Prop warnings (${propWarnings.filter(w => !w.endsWith(':')).length}):`);
  for (const w of warnings.filter(w => !w.includes('Uncategorized') && !w.includes('no Figma') && !w.includes('unclassified'))) console.log(w);
  console.log('');
}
if (taxWarnings.length) {
  console.log(`Uncategorized (${taxWarnings.length}):`);
  for (const w of taxWarnings) console.log(' ', w);
  console.log('');
}
if (figmaWarnings.length) {
  console.log(`No Figma entry (${figmaWarnings.length}):`);
  for (const w of figmaWarnings) console.log(' ', w);
  console.log('');
}

console.log(`Output → tearsheet-2/manifest.json + tearsheet-2/manifest.js\n`);
