# Tearsheet — Component Playground

A schema-driven live playground for every Packets Design System component.

## Running locally

Serve the repo root on port 3000 (or any static server) and open:
http://localhost:3000/packages/ui-web/tearsheet/

Chromium blocks ES module imports from `file://` URLs, so a server is required.

---

## Adding or updating a component

### Web components

The generator picks up any `PktsXxx.ts` + `PktsXxx.types.ts` pair automatically. Two files may need manual updates:

**`tearsheet/taxonomy.json`** — category, subcategory, display order, Figma link.
Add an entry when a component is new or its taxonomy changes:

```json
"pkts-new-thing": {
  "category": "Controls",
  "subcategory": "Button Control",
  "order": 4,
  "figmaHeading": "New Thing"
}
```

Alternatively, annotate the Props interface directly (takes priority over taxonomy.json):

```ts
/**
 * @category Controls / Button Control
 * @figma 9223-8426
 */
export interface PktsNewThingProps { ... }
```

**`tearsheet/native-markup.json` → `overrides`** — only needed when the auto-detector gives the wrong `availability` result (e.g. a component with a dynamic root tag like `` <${tag}> ``):

```json
"overrides": {
  "pkts-new-thing": {
    "markup": "<button class=\"pkts-new-thing\">Label</button>",
    "variants": ["pkts-primary", "pkts-branded"]
  }
}
```

Set `"pkts-foo": null` to force `"web"` (suppress a false positive).

### CSS/native-only entries (no web component)

Add to `tearsheet/native-markup.json` → `entries`. Availability is derived from the markup: a `pkts-` class → `"ui-css"`, otherwise → `"html-native"`.

```json
{
  "id": "my-entry",
  "label": "My Entry",
  "category": "Foundation",
  "subcategory": "Rich Text",
  "order": 11,
  "figmaHeading": "My Entry",
  "markup": "<p class=\"pkts-my-class\">Text</p>"
}
```

Use `variants` instead of `markup` to provide multiple previews with a selector.

### After any change — regenerate

```bash
# from packages/ui-web
npm run generate-manifest
```

Commit the updated `manifest.json` and `manifest.js` alongside your data-file changes.

---

## Availability

Each manifest entry has an `availability` value that controls the sidebar chip and detail panel.

| Value | Meaning | Sidebar chip |
|---|---|---|
| `"html-native"` | No web component; bare native tags styled by Packets CSS defaults. No `pkts-` class needed. | **HTML native** (filled) |
| `"ui-css"` | Native element + `pkts-` class(es). A web component may also exist whose default render produces equivalent markup. | **ui-css** (outline) |
| `"web"` | Web component only. | _(no chip)_ |

The filter select offers **All / HTML native / ui-css** — it composes with the search box.

### How ui-css is detected from the render template

For web components, the generator statically analyses the `innerHTML` template literal in `_renderInitial()`. A component qualifies as `ui-css` when **all five** hold:

1. **Native root tag** — the first element is a static native tag (no hyphen, no `${…}`).
2. **`pkts-` base class** — the root has a static `pkts-` class that is also a selector in `ui-css/src/components/<stem>.css`.
3. **No custom elements** — the template contains no hyphenated tags.
4. **No dynamic element references** — no `<${` patterns.
5. **Slot-only or empty content** — content between root tags is only `<slot>` or empty. Components that inject native children (input wrappers, spinners) are excluded.

If a template can't be parsed confidently, the component is classified `"web"` and listed under "unsure" in the generator output.

The derived `cssMarkup` is `<rootTag class="baseClass">` + slot placeholder + `</rootTag>`.

### Why a matching CSS file alone doesn't qualify

Many `ui-css` files style the web component's host element directly (e.g. `title-section.css` targets `<pkts-title-section>`). Classification is based solely on what the **render template** produces.

### CSS-scan auto-detection

Any `.css` file in `ui-css/src/components/` with no matching web component and no `native-markup.json` entry is added automatically as `availability: "html-native"`, `unclassified: true`, `noDemo: true`. Add an entry to `native-markup.json` to provide a live demo.

---

## Form and schema

### Schema fields

Each web-component manifest entry carries:

- **`schema`** — JSON Schema (draft-07 subset). Used by `form.js` to build the props form.
- **`events`** — `{ name, description }[]`. Callback props shown read-only below the form.

Each `schema.properties` entry:

| Field | Values | Meaning |
|---|---|---|
| `type` | `string \| number \| boolean \| object \| array` | JSON type. Union props use `string` + `enum`. |
| `enum` | `string[]` | Present for union literals; drives the select control. |
| `description` | `string` | From JSDoc; shown as the control's description. |
| `x-attribute` | `string \| null` | Kebab-case HTML attribute name. Absent for slot props. |
| `x-kind` | `attribute \| slot \| event` | How the prop is applied. Events are shown read-only. |
| `x-inObserved` | `boolean` | In `observedAttributes`? False shows a "not observed" badge. |
| `x-warning` | `string?` | Type classifier warning (complex union, etc.). |
| `x-boolean-style` | `false-string?` | Boolean serialised as `"true"`/`"false"` strings. |

### Control mapping

| Schema condition | Form control |
|---|---|
| `enum` present | `pkts-form-input-select` |
| `type: boolean` | `pkts-form-input-switch` |
| `type: number` | `pkts-form-input-number` |
| `type: object` or `array` | `pkts-input-text-area` |
| `type: string` or slot | `pkts-form-input-text` |

Slot props appear as a field labelled **content**. The callback key is the schema property name (`'content'`). The form is built once per component; value changes never rebuild it.

### Code snippet

A single `<pkts-code type="block" language="html">` element updated via `setAttribute('code', ...)` — never recreated.

---

## Playground layout

For web and ui-css+web panels, the preview, props form and snippets are wrapped in a single `<section class="ts2-playground">` with three region divs:

| Element | Class | Contents |
|---|---|---|
| `section` | `ts2-playground` | Grid wrapper |
| `div` | `ts2-playground__preview` | Live preview sandbox (and CSS preview for ui-css) |
| `div` | `ts2-playground__form` | Props form, events list, reset button — omitted when the component has no props |
| `div` | `ts2-playground__code` | Web-component snippet and (for ui-css) CSS-classes snippet |

### Customising the layout

Three CSS custom properties are declared at the top of the `.ts2-playground` rule in `style.css`:

```css
--pg-gap         /* space between all grid cells (default 24px) */
--pg-col-preview /* min-width of the preview column (default minmax(300px, 1fr)) */
--pg-col-form    /* fixed width of the form column  (default 320px) */
```

The default layout is preview + form side by side, with the code region spanning full width below. On narrow screens (≤ 900 px) the grid stacks to a single column.

The Figma embed column lives **outside** the wrapper, in the `ts-panel-split` / `ts-panel-main` split that surrounds it.
