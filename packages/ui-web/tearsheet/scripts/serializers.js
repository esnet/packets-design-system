/**
 * Tearsheet serializers — pure functions that derive HTML snippet strings from state.
 *
 * Neither function touches the DOM as a side effect; createElement is used only
 * as a scratchpad for string ↔ DOM round-trips.
 */

// ── Shared escape helpers ─────────────────────────────────────────────────────

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escContent(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ── Web-component serializer ──────────────────────────────────────────────────

/**
 * Build an HTML snippet for a web-component entry.
 *
 * @param {object} comp        - Manifest entry (tagName, customElementExtends, props, hasSlot).
 * @param {object} state       - Current prop state: { [attrName]: value, content?: string }.
 * @param {object} defaultState - Seed state used to suppress props that equal their default.
 * @returns {string}
 *
 * Omitted from snippet (listed in task report):
 *   - props of kind "object" or "array" — cannot be expressed as attributes
 *   - props of kind "event" — not attributes
 *   - props whose value equals the default (would appear in bare initial snippet only if changed)
 *
 * Boolean props serialise as bare attribute (true) or omitted (false).
 * "false-string" booleans serialise as `attr="true"` / `attr="false"`.
 * Attributes wrap to their own lines (2-space indent) when the flat line would exceed 80 chars.
 */
export function serializeWebComponent(comp, state, defaultState = {}) {
  const outerTag = comp.customElementExtends || comp.tagName;
  const isAttr   = comp.customElementExtends ? ` is="${comp.tagName}"` : '';
  const slotText = state['content'] ?? '';

  const attrs = [];

  for (const prop of (comp.props || [])) {
    if (prop.kind === 'event') continue;
    // object/array props cannot be expressed as attributes — skip
    if (prop.kind === 'object' || prop.kind === 'array') continue;
    // slot props go between tags, not as attributes
    if (prop.kind === 'slot') continue;

    const val    = state[prop.attrName];
    const defVal = defaultState[prop.attrName];

    if (val === null || val === undefined) continue;
    // Omit if equal to the seed/default state
    if (val === defVal) continue;

    if (prop.kind === 'boolean') {
      if (prop.booleanStyle === 'false-string') {
        attrs.push(`${prop.attrName}="${val ? 'true' : 'false'}"`);
      } else if (val) {
        attrs.push(prop.attrName);  // bare attribute
      }
      // false with toggle style → omit (equals default of false)
    } else {
      attrs.push(`${prop.attrName}="${esc(String(val))}"`);
    }
  }

  const inner = escContent(slotText);

  // Try single-line first
  const singleLine = `<${outerTag}${isAttr}${attrs.length ? ' ' + attrs.join(' ') : ''}>${inner}</${outerTag}>`;
  if (singleLine.length <= 80 || attrs.length === 0) return singleLine;

  // Wrap: each attribute on its own line, 2-space indent
  const attrLines = attrs.map(a => `  ${a}`).join('\n');
  return `<${outerTag}${isAttr}\n${attrLines}\n>${inner}</${outerTag}>`;
}

// ── CSS-classes serializer ────────────────────────────────────────────────────

/**
 * Build an HTML snippet for the CSS-classes view of a ui-css entry.
 *
 * Starts from comp.cssMarkup, then:
 *   - Applies modifier classes from cssVariants when a matching state value is found.
 *     Match rule: state value "branded" → class "pkts-branded" (prefix with "pkts-").
 *   - Sets text content of the root element when it has no child elements (safe to overwrite).
 *   - Adds native boolean attributes (disabled, readonly, required, checked) when true.
 *
 * Props ignored (no CSS mapping): any string/enum prop whose value does not match
 * a class in cssVariants, and any prop whose kind is "object", "array", or "event".
 *
 * @param {object} comp  - Manifest entry (cssMarkup, cssVariants, props).
 * @param {object} state - Current prop state.
 * @returns {string}
 */
export function serializeCss(comp, state) {
  if (!comp.cssMarkup) return '';

  // Parse into a scratch DOM node
  const wrap = document.createElement('div');
  wrap.innerHTML = comp.cssMarkup;
  const root = wrap.firstElementChild;
  if (!root) return comp.cssMarkup;

  const cssVariants = comp.cssVariants || [];

  // Remove all modifier classes that exist in cssVariants (start fresh from base)
  for (const cls of cssVariants) root.classList.remove(cls);

  const NATIVE_BOOL_ATTRS = new Set(['disabled', 'readonly', 'required', 'checked', 'multiple']);

  for (const prop of (comp.props || [])) {
    if (prop.kind === 'event' || prop.kind === 'object' || prop.kind === 'array') continue;

    const val = state[prop.attrName];
    if (val === null || val === undefined) continue;

    if (prop.kind === 'union' || (prop.kind === 'string' && prop.allowedValues?.length)) {
      // Try pkts-{value} against cssVariants
      const candidate = `pkts-${val}`;
      if (cssVariants.includes(candidate)) {
        root.classList.add(candidate);
      }
      // No match → ignored (listed in task report)
    } else if (prop.kind === 'boolean') {
      if (NATIVE_BOOL_ATTRS.has(prop.attrName)) {
        root.toggleAttribute(prop.attrName, !!val);
      }
    }
    // Other string/number props: no CSS equivalent → ignored
  }

  // Update text content — only when root has no child elements (would clobber them otherwise)
  if (root.childElementCount === 0) {
    // Prefer slot content, then label, then leave as-is
    const textSources = ['content', 'label'];
    for (const key of textSources) {
      const v = state[key];
      if (v != null && v !== '') {
        root.textContent = v;  // DOM textContent auto-escapes
        break;
      }
    }
  }

  return wrap.innerHTML;
}
