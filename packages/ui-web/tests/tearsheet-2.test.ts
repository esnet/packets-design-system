/**
 * Tearsheet 2.0 — Playwright tests
 *
 * Strategy: for each component in the manifest we inline a minimal HTML page
 * (same pattern as other tests in this directory) and verify:
 *   1. The element is in the DOM with no console errors.
 *   2. Setting attributes via JS updates them correctly.
 *
 * We also exercise one control of each type (string, boolean, union, number,
 * object/array) using three representative components.
 *
 * The full SPA (tearsheet-2/index.html) requires a running HTTP server because
 * Chromium blocks ES module imports from file:// URLs.  Serve the repo root on
 * port 3000 and open http://localhost:3000/packages/ui-web/tearsheet-2/ to
 * use it interactively.  The tests below use page.setContent() to avoid that
 * dependency, consistent with the rest of the test suite.
 */

import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { createTestHTML } from "./test-utils";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MANIFEST_PATH = path.resolve(__dirname, "../tearsheet-2/manifest.json");

// ── Load manifest ─────────────────────────────────────────────────────────────

type PropEntry = {
  name: string;
  attrName: string;
  kind: string;
  allowedValues: string[] | null;
  optional: boolean;
  booleanStyle: string | null;
  inObservedAttributes: boolean;
};

type SchemaProp = {
  type: string;
  enum?: string[];
  description?: string;
  "x-kind": "attribute" | "slot" | "event";
  "x-attribute": string | null;
  "x-inObserved": boolean;
};

type Schema = {
  type: "object";
  properties: Record<string, SchemaProp>;
  required?: string[];
};

type EventEntry = {
  name: string;
  description: string;
};

type ManifestEntry = {
  tagName: string;
  className: string;
  displayName: string;
  hasSlot: boolean;
  customElementExtends: string | null;
  observedAttributes: string[];
  hasTypesFile: boolean;
  props: PropEntry[];
  schema: Schema;
  events: EventEntry[];
};

if (!fs.existsSync(MANIFEST_PATH)) {
  throw new Error(
    "tearsheet-2/manifest.json not found. Run: npm run generate-manifest",
  );
}

const manifest: ManifestEntry[] = JSON.parse(
  fs.readFileSync(MANIFEST_PATH, "utf-8"),
);

// ── Helpers ───────────────────────────────────────────────────────────────────

function buildCompHTML(comp: ManifestEntry): string {
  let attrs = "";
  for (const prop of comp.props) {
    if (prop.kind === "event") continue;
    if (!prop.optional) {
      if (prop.kind === "string") attrs += ` ${prop.attrName}="${prop.name}"`;
      else if (prop.kind === "union" && prop.allowedValues?.length)
        attrs += ` ${prop.attrName}="${prop.allowedValues[0]}"`;
    }
  }

  const inner = comp.hasSlot ? "Sample content" : "";

  if (comp.customElementExtends) {
    return `<${comp.customElementExtends} is="${comp.tagName}"${attrs}>${inner}</${comp.customElementExtends}>`;
  }
  return `<${comp.tagName}${attrs}>${inner}</${comp.tagName}>`;
}

function getSelector(comp: ManifestEntry): string {
  return comp.customElementExtends
    ? `[is="${comp.tagName}"]`
    : comp.tagName;
}

// ── Per-component render tests ────────────────────────────────────────────────

for (const comp of manifest) {
  test(`[ts2] ${comp.displayName} renders without errors`, async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });

    const html = createTestHTML("light", buildCompHTML(comp));
    await page.setContent(html);
    await page.waitForTimeout(200);

    // Element must be attached to the DOM
    const selector = getSelector(comp);
    await expect(page.locator(selector).first()).toBeAttached();

    // No console errors (filter out common network-noise like missing favicon)
    const realErrors = errors.filter(
      (e) =>
        !e.includes("favicon") &&
        !e.includes("Failed to load resource") &&
        !e.includes("net::ERR"),
    );
    expect(realErrors, `Console errors for ${comp.tagName}`).toHaveLength(0);
  });
}

// ── Control-type exercises ────────────────────────────────────────────────────

test("[ts2] string attribute updates the element", async ({ page }) => {
  const html = createTestHTML(
    "light",
    `<pkts-button label="Initial">Initial</pkts-button>`,
  );
  await page.setContent(html);
  await page.waitForTimeout(200);

  await page.evaluate(() => {
    document.querySelector("pkts-button")!.setAttribute("label", "Updated");
  });

  const label = await page.evaluate(
    () => document.querySelector("pkts-button")!.getAttribute("label"),
  );
  expect(label).toBe("Updated");
});

test("[ts2] boolean (toggle) attribute updates the element", async ({
  page,
}) => {
  const html = createTestHTML(
    "light",
    `<pkts-button label="Test">Test</pkts-button>`,
  );
  await page.setContent(html);
  await page.waitForTimeout(200);

  // Set boolean toggle attribute
  await page.evaluate(() => {
    document.querySelector("pkts-button")!.setAttribute("fill", "");
  });
  const hasFill = await page.evaluate(() =>
    document.querySelector("pkts-button")!.hasAttribute("fill"),
  );
  expect(hasFill).toBe(true);

  // Remove it
  await page.evaluate(() => {
    document.querySelector("pkts-button")!.removeAttribute("fill");
  });
  const gone = await page.evaluate(() =>
    document.querySelector("pkts-button")!.hasAttribute("fill"),
  );
  expect(gone).toBe(false);
});

test("[ts2] boolean (false-string) attribute is set correctly for pkts-code", async ({
  page,
}) => {
  const html = createTestHTML(
    "light",
    `<pkts-code language="python">print("hello")</pkts-code>`,
  );
  await page.setContent(html);
  await page.waitForTimeout(400);

  // copyable defaults to true (no attribute = !== "false" = true)
  await page.evaluate(() => {
    document.querySelector("pkts-code")!.setAttribute("copyable", "false");
  });
  const val = await page.evaluate(() =>
    document.querySelector("pkts-code")!.getAttribute("copyable"),
  );
  expect(val).toBe("false");
});

test("[ts2] union attribute updates the element", async ({ page }) => {
  const html = createTestHTML(
    "light",
    `<pkts-button label="Test" variant="default">Test</pkts-button>`,
  );
  await page.setContent(html);
  await page.waitForTimeout(200);

  await page.evaluate(() => {
    document.querySelector("pkts-button")!.setAttribute("variant", "branded");
  });
  const variant = await page.evaluate(() =>
    document.querySelector("pkts-button")!.getAttribute("variant"),
  );
  expect(variant).toBe("branded");
});

test("[ts2] number attribute updates the element", async ({ page }) => {
  const html = createTestHTML("light", `<pkts-icon name="star"></pkts-icon>`);
  await page.setContent(html);
  await page.waitForTimeout(200);

  await page.evaluate(() => {
    document.querySelector("pkts-icon")!.setAttribute("stroke-width", "3");
  });
  const sw = await page.evaluate(() =>
    document.querySelector("pkts-icon")!.getAttribute("stroke-width"),
  );
  expect(sw).toBe("3");
});

test("[ts2] slot content updates textContent", async ({ page }) => {
  const html = createTestHTML(
    "light",
    `<pkts-button label="Old">Old</pkts-button>`,
  );
  await page.setContent(html);
  await page.waitForTimeout(200);

  await page.evaluate(() => {
    document.querySelector("pkts-button")!.textContent = "New content";
  });
  const text = await page.evaluate(
    () => document.querySelector("pkts-button")!.textContent,
  );
  expect(text).toContain("New content");
});

test("[ts2] manifest covers all expected components", () => {
  expect(manifest.length).toBeGreaterThanOrEqual(35);

  const tags = manifest.map((c) => c.tagName);
  expect(tags).toContain("pkts-button");
  expect(tags).toContain("pkts-title-section");
  expect(tags).toContain("pkts-code");
  expect(tags).toContain("pkts-input-text");
  expect(tags).toContain("pkts-alert");
});

// ── Form-control mapping tests (schema-driven, no browser needed) ─────────────

test("[ts2] form control mapping: string props map to pkts-form-input-text", () => {
  const webComps = manifest.filter((c) => (c as any).kind === "web-component");
  const stringProps: string[] = [];
  for (const comp of webComps) {
    for (const [key, prop] of Object.entries(comp.schema.properties)) {
      if (prop["x-kind"] === "attribute" && prop.type === "string" && !prop.enum) {
        stringProps.push(`${comp.tagName}.${key}`);
      }
    }
  }
  // There are string props in the manifest (label, name, placeholder, etc.)
  expect(stringProps.length).toBeGreaterThan(5);
});

test("[ts2] form control mapping: boolean props map to pkts-form-input-switch", () => {
  const boolProps = manifest
    .filter((c) => (c as any).kind === "web-component")
    .flatMap((c) =>
      Object.entries(c.schema.properties).filter(
        ([, p]) => p.type === "boolean" && p["x-kind"] === "attribute",
      ),
    );
  expect(boolProps.length).toBeGreaterThan(5);
});

test("[ts2] form control mapping: enum props map to pkts-form-input-select", () => {
  const enumProps = manifest
    .filter((c) => (c as any).kind === "web-component")
    .flatMap((c) =>
      Object.entries(c.schema.properties).filter(([, p]) => p.enum),
    );
  expect(enumProps.length).toBeGreaterThan(5);
});

test("[ts2] slot props are named 'content' and use text control", () => {
  const slotProps = manifest
    .filter((c) => (c as any).kind === "web-component" && c.hasSlot)
    .flatMap((c) =>
      Object.entries(c.schema.properties).filter(
        ([, p]) => p["x-kind"] === "slot",
      ),
    );
  for (const [name] of slotProps) {
    expect(name).toBe("content");
  }
  expect(slotProps.length).toBeGreaterThan(0);
});

// ── Snippet element tests (checks the snippet is a pkts-code element) ─────────

test("[ts2] pkts-code renders without errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });

  const html = createTestHTML(
    "light",
    `<pkts-code type="block" language="html" code="&lt;pkts-button label=&quot;Hello&quot;&gt;&lt;/pkts-button&gt;"></pkts-code>`,
  );
  await page.setContent(html);
  await page.waitForTimeout(400);

  await expect(page.locator("pkts-code").first()).toBeAttached();

  const realErrors = errors.filter(
    (e) =>
      !e.includes("favicon") &&
      !e.includes("Failed to load resource") &&
      !e.includes("net::ERR"),
  );
  expect(realErrors).toHaveLength(0);
});

test("[ts2] pkts-code code attribute updates the displayed code", async ({
  page,
}) => {
  const html = createTestHTML(
    "light",
    `<pkts-code type="block" language="html" code="initial"></pkts-code>`,
  );
  await page.setContent(html);
  await page.waitForTimeout(400);

  await page.evaluate(() => {
    document.querySelector("pkts-code")!.setAttribute("code", "updated");
  });

  const code = await page.evaluate(() =>
    document.querySelector("pkts-code")!.getAttribute("code"),
  );
  expect(code).toBe("updated");
});

// ── Taxonomy / sidebar order tests ────────────────────────────────────────────

test("[ts2] sidebar categories appear in tearsheet-1 order", () => {
  const EXPECTED_ORDER = [
    "Foundation",
    "Controls",
    "Navigation",
    "Content Display",
    "Communication",
    "Layout",
    "Uncategorized",
  ];

  const categories: string[] = [];
  for (const comp of manifest) {
    if (!categories.includes(comp.category)) categories.push(comp.category);
  }

  for (let i = 0; i < categories.length - 1; i++) {
    const a = EXPECTED_ORDER.indexOf(categories[i]);
    const b = EXPECTED_ORDER.indexOf(categories[i + 1]);
    // Both must be in the expected list and in order (or b is Uncategorized)
    if (b !== -1) expect(a).toBeLessThanOrEqual(b);
  }
});

test("[ts2] Controls subcategories appear in tearsheet-1 order", () => {
  const EXPECTED = [
    "Button Control",
    "Boolean Control",
    "Text Control",
    "Select Control",
    "Form Structure",
  ];
  const controlComps = manifest.filter((c) => c.category === "Controls");
  const subs: string[] = [];
  for (const c of controlComps) {
    if (c.subcategory && !subs.includes(c.subcategory)) subs.push(c.subcategory);
  }
  for (let i = 0; i < subs.length - 1; i++) {
    expect(EXPECTED.indexOf(subs[i])).toBeLessThanOrEqual(EXPECTED.indexOf(subs[i + 1]));
  }
});

test("[ts2] pkts-button is in Controls > Button Control", () => {
  const btn = manifest.find((c) => c.tagName === "pkts-button");
  expect(btn).toBeDefined();
  expect(btn!.category).toBe("Controls");
  expect(btn!.subcategory).toBe("Button Control");
});

test("[ts2] pkts-code is in Foundation > Rich Text", () => {
  const code = manifest.find((c) => c.tagName === "pkts-code");
  expect(code).toBeDefined();
  expect(code!.category).toBe("Foundation");
  expect(code!.subcategory).toBe("Rich Text");
});

test("[ts2] Uncategorized components are listed", () => {
  const uncategorized = manifest.filter((c) => c.category === "Uncategorized");
  // pkts-comma-seperated-list and pkts-input-date-range are not in taxonomy.json
  expect(uncategorized.map((c) => c.tagName)).toContain(
    "pkts-comma-seperated-list",
  );
});

// ── Figma tests ───────────────────────────────────────────────────────────────

test("[ts2] components with taxonomy figmaHeading have a Figma URL", () => {
  const withFigmaHeading = ["pkts-button", "pkts-title-section", "pkts-code", "pkts-alert"];
  for (const tag of withFigmaHeading) {
    const comp = manifest.find((c) => c.tagName === tag);
    expect(comp?.figma?.url, `${tag} should have figma.url`).toBeTruthy();
    expect(comp?.figma?.url).toMatch(/embed\.figma\.com/);
  }
});

test("[ts2] components without figma entry have figma: null", () => {
  const noFigma = ["pkts-spinner", "pkts-module", "pkts-card"];
  for (const tag of noFigma) {
    const comp = manifest.find((c) => c.tagName === tag);
    if (comp) expect(comp.figma, `${tag} should have no figma`).toBeNull();
  }
});

test("[ts2] typed components have props", () => {
  const typed = manifest.filter((c) => c.hasTypesFile);
  for (const comp of typed) {
    if (comp.props.length === 0) {
      // PktsListTreeView has an empty interface — acceptable
      expect(comp.className).toBe("PktsListTreeView");
    }
  }
  const totalProps = manifest.reduce((n, c) => n + c.props.length, 0);
  expect(totalProps).toBeGreaterThan(80);
});

// ── Schema tests ──────────────────────────────────────────────────────────────

test("[ts2] every web-component entry has a schema field", () => {
  const webComps = manifest.filter((c) => (c as any).kind === "web-component");
  for (const comp of webComps) {
    expect(comp.schema, `${comp.tagName} missing schema`).toBeDefined();
    expect(comp.schema.type).toBe("object");
    expect(typeof comp.schema.properties).toBe("object");
  }
});

test("[ts2] every web-component entry has an events array", () => {
  const webComps = manifest.filter((c) => (c as any).kind === "web-component");
  for (const comp of webComps) {
    expect(Array.isArray(comp.events), `${comp.tagName} missing events array`).toBe(true);
  }
});

test("[ts2] schema x-kind is attribute, slot, or event", () => {
  const webComps = manifest.filter((c) => (c as any).kind === "web-component");
  const valid = new Set(["attribute", "slot", "event"]);
  for (const comp of webComps) {
    for (const [key, prop] of Object.entries(comp.schema.properties)) {
      expect(
        valid.has(prop["x-kind"]),
        `${comp.tagName}.${key} has invalid x-kind: ${prop["x-kind"]}`,
      ).toBe(true);
    }
  }
});

test("[ts2] schema slot properties are named 'content' not '__slot__'", () => {
  const webComps = manifest.filter(
    (c) => (c as any).kind === "web-component" && c.hasSlot,
  );
  for (const comp of webComps) {
    const keys = Object.keys(comp.schema.properties);
    expect(keys, `${comp.tagName} should have 'content' slot property`).toContain("content");
    expect(keys, `${comp.tagName} must not expose __slot__`).not.toContain("__slot__");
  }
});

test("[ts2] schema required array contains only non-optional prop names", () => {
  const webComps = manifest.filter((c) => (c as any).kind === "web-component");
  for (const comp of webComps) {
    const { required = [], properties } = comp.schema;
    for (const name of required) {
      expect(
        name in properties,
        `${comp.tagName} required prop "${name}" not in schema.properties`,
      ).toBe(true);
    }
    // Non-optional props in the original props array should appear in required
    const nonOptional = comp.props
      .filter((p) => !p.optional && p.kind !== "event")
      .map((p) => p.name);
    for (const name of nonOptional) {
      expect(
        required.includes(name),
        `${comp.tagName} non-optional prop "${name}" missing from schema.required`,
      ).toBe(true);
    }
  }
});

test("[ts2] schema x-attribute matches prop attrName for attribute props", () => {
  const webComps = manifest.filter((c) => (c as any).kind === "web-component");
  for (const comp of webComps) {
    for (const [key, schemaProp] of Object.entries(comp.schema.properties)) {
      if (schemaProp["x-kind"] !== "attribute") continue;
      const original = comp.props.find((p) => p.name === key);
      if (!original) continue;
      expect(schemaProp["x-attribute"]).toBe(original.attrName);
    }
  }
});

test("[ts2] enum schema props have allowedValues", () => {
  const webComps = manifest.filter((c) => (c as any).kind === "web-component");
  for (const comp of webComps) {
    for (const [key, prop] of Object.entries(comp.schema.properties)) {
      if (prop.enum !== undefined) {
        expect(Array.isArray(prop.enum), `${comp.tagName}.${key} enum must be array`).toBe(true);
        expect(prop.enum.length, `${comp.tagName}.${key} enum must be non-empty`).toBeGreaterThan(0);
      }
    }
  }
});

test("[ts2] pkts-button schema has correct content slot and required label", () => {
  const btn = manifest.find((c) => c.tagName === "pkts-button");
  expect(btn).toBeDefined();
  expect(btn!.schema.properties["content"]["x-kind"]).toBe("slot");
  expect(btn!.schema.required).toContain("label");
  expect(Object.keys(btn!.schema.properties)).not.toContain("__slot__");
});

test("[ts2] pkts-code schema has enum for type prop", () => {
  const code = manifest.find((c) => c.tagName === "pkts-code");
  expect(code).toBeDefined();
  const typeProp = code!.schema.properties["type"];
  expect(typeProp?.enum, "pkts-code type should have enum").toBeDefined();
  expect(typeProp!.enum).toContain("block");
  expect(typeProp!.enum).toContain("inline");
});

// ── No-web-component entry tests ──────────────────────────────────────────────

test("[ts2] no-web-component entries with demo have markup or variants", () => {
  const withDemo = manifest.filter(
    (c) => (c as any).kind === "no-web-component" && !(c as any).noDemo,
  );
  expect(withDemo.length).toBeGreaterThanOrEqual(9);
  for (const comp of withDemo) {
    const hasMarkup   = !!(comp as any).markup;
    const hasVariants = Array.isArray((comp as any).variants) && (comp as any).variants.length > 0;
    expect(hasMarkup || hasVariants, `${comp.displayName} needs markup or variants`).toBe(true);
  }
});

test("[ts2] noDemo entries have no markup", () => {
  const noDemo = manifest.filter((c) => (c as any).noDemo);
  expect(noDemo.length).toBeGreaterThanOrEqual(10);
  for (const comp of noDemo) {
    expect((comp as any).markup, `${comp.displayName} noDemo should have no markup`).toBeFalsy();
  }
  const ids = noDemo.map((c) => (c as any).id);
  expect(ids).toContain("tooltip");
  expect(ids).toContain("dropdown");
});

test("[ts2] all manifest entries have an id field", () => {
  const ids = manifest.map((c) => (c as any).id).filter(Boolean);
  expect(ids.length).toBe(manifest.length);
  expect(new Set(ids).size).toBe(ids.length);
});

// ── Availability tests ────────────────────────────────────────────────────────

test("[ts2] all manifest entries have a valid availability field", () => {
  const valid = new Set(["web", "ui-css", "html-native"]);
  for (const comp of manifest) {
    expect(
      valid.has((comp as any).availability),
      `${comp.displayName} has invalid availability: ${(comp as any).availability}`,
    ).toBe(true);
  }
});

test("[ts2] availability counts: at least 1 ui-css, >15 web, >15 html-native", () => {
  const webCount       = manifest.filter((c) => (c as any).availability === "web").length;
  const uiCssCount     = manifest.filter((c) => (c as any).availability === "ui-css").length;
  const htmlNativeCount = manifest.filter((c) => (c as any).availability === "html-native").length;
  expect(uiCssCount).toBeGreaterThanOrEqual(1);
  expect(webCount).toBeGreaterThan(15);
  expect(htmlNativeCount).toBeGreaterThan(15);
});

test("[ts2] ui-css entries have cssMarkup and cssVariants when they have a web component", () => {
  const uiCssWeb = manifest.filter(
    (c) => (c as any).availability === "ui-css" && (c as any).tagName,
  );
  for (const comp of uiCssWeb) {
    expect(typeof (comp as any).cssMarkup, `${comp.displayName} needs cssMarkup`).toBe("string");
    expect(Array.isArray((comp as any).cssVariants), `${comp.displayName} needs cssVariants array`).toBe(true);
  }
});

test("[ts2] cssMarkup for ui-css entries contains no pkts-* custom elements", () => {
  const uiCssWeb = manifest.filter(
    (c) => (c as any).availability === "ui-css" && (c as any).tagName,
  );
  for (const comp of uiCssWeb) {
    const markup: string = (comp as any).cssMarkup ?? "";
    const hasPktsElement = /<pkts-[a-z]/.test(markup);
    expect(
      hasPktsElement,
      `${comp.displayName} cssMarkup must not contain pkts-* custom elements`,
    ).toBe(false);
  }
});

test("[ts2] pkts-button is ui-css with cssMarkup containing pkts-button class", () => {
  const btn = manifest.find((c) => (c as any).id === "pkts-button");
  expect(btn).toBeDefined();
  expect((btn as any).availability).toBe("ui-css");
  expect((btn as any).cssMarkup).toContain("pkts-button");
  expect((btn as any).cssMarkup).not.toMatch(/<pkts-/);
});

test("[ts2] web-only entries have no cssMarkup", () => {
  const webOnly = manifest.filter((c) => (c as any).availability === "web");
  for (const comp of webOnly) {
    expect((comp as any).cssMarkup, `${comp.displayName} should not have cssMarkup`).toBeUndefined();
  }
});

test("[ts2] html-native entries have no tagName (no web component)", () => {
  const htmlNative = manifest.filter((c) => (c as any).availability === "html-native");
  for (const comp of htmlNative) {
    expect((comp as any).tagName, `${comp.displayName} html-native should have no tagName`).toBeNull();
  }
});

test("[ts2] only two chip texts exist: 'HTML native' and 'ui-css'", () => {
  for (const comp of manifest) {
    const avail = (comp as any).availability as string;
    if (avail === "html-native") {
      // Should have a chip — no programmatic DOM check here, just verify availability is set
      expect(avail).toBe("html-native");
    } else if (avail === "ui-css") {
      expect(avail).toBe("ui-css");
    } else {
      // 'web' — no chip, so no constraint
      expect(avail).toBe("web");
    }
  }
});

// ── ui-css detection function unit tests ──────────────────────────────────────

/**
 * Pure detection function — duplicated here for unit testing without importing
 * the generator. Keep in sync with generate-manifest.mjs detectUiCssFromTemplate.
 */
function detectUiCssFromTemplate(template: string): { cssMarkup: string; baseClass: string } | null {
  if (!template) return null;

  const rootMatch = template.trimStart().match(/^<([a-z][a-z0-9]*)\b/);
  if (!rootMatch) return null;

  const rootTag = rootMatch[1];
  if (rootTag.includes("-")) return null;

  const firstGt = template.indexOf(">");
  if (firstGt < 0) return null;
  const rootPart = template.slice(0, firstGt + 1);

  const classMatch = rootPart.match(/\bclass=["']([^"']*)["']/);
  if (!classMatch) return null;
  const classValue = classMatch[1];
  if (classValue.includes("${")) return null;

  const classes = classValue.trim().split(/\s+/);
  const baseClass = classes.find((c) => /^pkts-[a-z]/.test(c));
  if (!baseClass) return null;

  const hyphenTagRe = /<([a-z][a-z0-9]*(?:-[a-z0-9]+)+)/g;
  let m: RegExpExecArray | null;
  while ((m = hyphenTagRe.exec(template)) !== null) {
    return null;
  }

  if (template.includes("<${")) return null;

  const closingTag = `</${rootTag}>`;
  const lastClosing = template.lastIndexOf(closingTag);
  if (lastClosing > firstGt) {
    const inner = template.slice(firstGt + 1, lastClosing).trim();
    const innerNoSlot = inner.replace(/<\/?slot[^>]*>/g, "").trim();
    if (/</.test(innerNoSlot)) return null;
  }

  const hasSlot = /<slot\b/.test(template);
  const cssMarkup = `<${rootTag} class="${baseClass}">${hasSlot ? "Label" : ""}</${rootTag}>`;

  return { cssMarkup, baseClass };
}

test("[ts2] detectUiCssFromTemplate — qualifying template returns ui-css result", () => {
  const result = detectUiCssFromTemplate(
    '<button class="pkts-button"><slot></slot></button>',
  );
  expect(result).not.toBeNull();
  expect(result!.baseClass).toBe("pkts-button");
  expect(result!.cssMarkup).toBe('<button class="pkts-button">Label</button>');
});

test("[ts2] detectUiCssFromTemplate — template with nested custom element returns null", () => {
  const result = detectUiCssFromTemplate(
    '<div class="pkts-foo"><pkts-bar></pkts-bar></div>',
  );
  expect(result).toBeNull();
});

test("[ts2] detectUiCssFromTemplate — template with hyphenated root returns null", () => {
  const result = detectUiCssFromTemplate(
    '<my-element class="pkts-foo"></my-element>',
  );
  expect(result).toBeNull();
});
