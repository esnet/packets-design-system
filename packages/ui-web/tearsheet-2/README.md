# Tearsheet 2.0 — Component Playground

A schema-driven live playground for every Packets Design System component.

## Running locally

Serve the repo root on port 3000 (or any static server) and open:
http://localhost:3000/packages/ui-web/tearsheet-2/

Chromium blocks ES module imports from `file://` URLs, so a server is required.

## Regenerating the manifest

From `packages/ui-web`: `npm run generate-manifest` then reload.

---

## Form and schema

### Schema fields

Each web-component manifest entry carries two new fields:

- **`schema`** — JSON Schema (draft-07 subset). Used by `form.js` to build the props form.
- **`events`** — `{ name, description }[]`. Callback props shown read-only below the form.

Each `schema.properties` entry:

| Field | Values | Meaning |
|---|---|---|
| `type` | `string \| number \| boolean \| object \| array` | JSON type. Union props use `string` + `enum`. |
| `enum` | `string[]` | Present for union literals; drives the select control. |
| `description` | `string` | From JSDoc; set as the control's `description` attribute. |
| `default` | any | From JSDoc `@default` (when annotated). |
| `x-attribute` | `string \| null` | Kebab-case HTML attribute name. `null` for slot props. |
| `x-kind` | `attribute \| slot \| event` | How the prop is applied. Event props do not appear in the form. |
| `x-inObserved` | `boolean` | In `observedAttributes`? False shows a "not observed" badge. |
| `x-warning` | `string?` | Type classifier warning (complex union, etc.). |
| `x-boolean-style` | `false-string?` | Boolean serialised as `"true"`/`"false"` strings rather than presence/absence. |

`schema.required` lists all non-optional prop names.

### Control mapping (`form.js`)

| Schema condition | Form control |
|---|---|
| `enum` present | `pkts-form-input-select` |
| `type: boolean` | `pkts-form-input-switch` |
| `type: number` | `pkts-form-input-number` |
| `type: object` or `array` | `pkts-input-text-area` (no form-wrapper exists) |
| `type: string` or `x-kind: slot` | `pkts-form-input-text` |
| unclassified | `pkts-form-input-text` + console warning |

Slot props appear as a field labelled **content** — never `__slot__`. The form is built once per component; value changes never rebuild it, so focus is not lost while typing.

### Code snippet

A single `<pkts-code type="block" language="html">` element. Updated by `setAttribute('code', ...)` — never recreated. Lists only attributes that are currently set plus the slot text.

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

For web components, the generator statically analyses the `innerHTML` template literal in `_renderInitial()` (or the equivalent method). A component qualifies as `ui-css` when **all five** of these hold:

1. **Native root tag** — the first element in the template is a static native tag (no hyphen, no `${…}` interpolation).
2. **`pkts-` base class** — the root element has a static class attribute containing a `pkts-` token that is also a selector in the matching `ui-css/src/components/<stem>.css` file.
3. **No custom elements** — the template contains no hyphenated tags (custom elements).
4. **No dynamic element references** — the template contains no `<${` patterns.
5. **Slot-only or empty content** — the content between the root's opening and closing tags consists only of `<slot>` elements (or is empty). Components that inject native element children (input wrappers, spinners with dot-spans) are excluded.

If a template is found but cannot be parsed confidently, the component is classified `"web"` and listed under "unsure" in the generator output.

The derived `cssMarkup` is: `<rootTag class="baseClass">` + slot placeholder text (if the component has a slot) + `</rootTag>`.

### The `overrides` key in native-markup.json

For the rare case where auto-detection gives a wrong result:

```json
{
  "overrides": {
    "pkts-foo": null,
    "pkts-bar": { "markup": "<button class=\"pkts-bar\">Label</button>", "variants": ["pkts-primary"] }
  }
}
```

- `"pkts-foo": null` — force `"web"` (suppress a false positive).
- `"pkts-bar": { markup, variants }` — force `"ui-css"` with explicit markup and variants (use when the template uses dynamic tags or other patterns the detector can't parse statically).

### Why a matching CSS file alone doesn't qualify

Many `ui-css` files style the web component's **host element** (e.g. `title-section.css` targets `<pkts-title-section>` directly). The CSS is not intended for standalone native use. A component is only classified `ui-css` based on what its **render template** produces — a matching CSS file is a necessary but not sufficient condition (rule 2 above).

### No-web-component entries

Entries that live only in `tearsheet-2/native-markup.json` (no web component):

- `availability` is **derived from markup**: any element with a `pkts-` class → `ui-css`; otherwise → `html-native`.
- CSS-scan auto-detected entries (a `.css` file in `ui-css` with no matching web component and no `native-markup.json` entry) are added automatically as `availability: "html-native"`, `unclassified: true`, `noDemo: true`.

### Panel behaviour

- **html-native** — live preview (inside a `packets`-classed wrapper), one HTML snippet, Figma column if present. Note: "Native HTML styled by Packets defaults. No web component or classes needed."
- **ui-css with web component** — web preview, props form, two copyable snippets ("Web component" / "CSS classes"), and a live CSS preview of `cssMarkup` (no custom elements). A modifier-class select drives the CSS snippet and preview.
- **ui-css without web component** — live preview, optional variant select, one CSS snippet, Figma if present.
- **web** — web preview, props form, one web snippet.
