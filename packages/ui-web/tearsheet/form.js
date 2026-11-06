/**
 * Schema-to-form renderer for Tearsheet
 *
 * renderForm(schema, state, onChange) → DOM node (pkts-form-section)
 *
 * Uses pkts-form-input-* wrappers (registered by PktsFormControl/index.ts)
 * which provide label, description, and required support. Falls back to
 * pkts-input-text-area for object/array props (no form wrapper exists for it).
 *
 * onChange(key, value) is called with:
 *   key   — prop name (from schema.properties); slot props use the schema key 'content'
 *   value — the new value, or null to unset
 *
 * The form is built ONCE per component. It never rebuilds on value changes so
 * that focus is never lost while typing.
 *
 * Event mapping (actual component events):
 *   pkts-form-input-text/number  → change (bubbles; read .value)
 *   pkts-form-input-switch       → change (bubbles; read .control.checked)
 *   pkts-form-input-select       → change (bubbles; read e.detail.value)
 *   pkts-input-text-area         → change (bubbles; read .value)
 */

// ── Helpers ───────────────────────────────────────────────────────────────────

function notObservedNote() {
  const note = document.createElement('span');
  note.className = 'ts-not-observed';
  note.textContent = 'not observed';
  note.title = 'This prop is not in the component\'s observedAttributes — attribute changes may not be reflected.';
  return note;
}

function appendNote(el, text, title) {
  const note = document.createElement('span');
  note.className = 'ts-not-observed';
  note.textContent = text;
  if (title) note.title = title;
  el.appendChild(note);
}

// ── Control builders ──────────────────────────────────────────────────────────

function buildEnumControl(propName, propSchema, currentVal, onChangeCb, isRequired, displayName) {
  const ctrl = document.createElement('pkts-form-input-select');
  ctrl.setAttribute('label', displayName);
  if (propSchema.description) ctrl.setAttribute('description', propSchema.description);
  if (isRequired) ctrl.setAttribute('required', '');

  const opts = [];
  for (const v of propSchema.enum) opts.push({ value: v, label: v });
  ctrl.setAttribute('options', JSON.stringify(opts));

  if (currentVal != null && currentVal !== '') ctrl.setAttribute('value', String(currentVal));

  ctrl.addEventListener('change', (e) => {
    const val = e.detail?.value ?? ctrl.value ?? '';
    onChangeCb(val === '' ? null : val);
  });

  if (!propSchema['x-inObserved']) ctrl.appendChild(notObservedNote());
  return ctrl;
}

function buildBooleanControl(propName, propSchema, currentVal, onChangeCb, displayName) {
  const ctrl = document.createElement('pkts-form-input-switch');
  ctrl.setAttribute('label', displayName);
  if (propSchema.description) ctrl.setAttribute('description', propSchema.description);
  if (currentVal) ctrl.setAttribute('checked', '');

  ctrl.addEventListener('change', () => {
    const inner = ctrl.control;
    onChangeCb(inner ? inner.checked || inner.hasAttribute('checked') : false);
  });

  if (!propSchema['x-inObserved']) ctrl.appendChild(notObservedNote());
  return ctrl;
}

function buildNumberControl(propName, propSchema, currentVal, onChangeCb, isRequired, displayName) {
  const ctrl = document.createElement('pkts-form-input-number');
  ctrl.setAttribute('label', displayName);
  if (propSchema.description) ctrl.setAttribute('description', propSchema.description);
  if (isRequired) ctrl.setAttribute('required', '');
  if (currentVal != null) ctrl.setAttribute('value', String(currentVal));

  ctrl.addEventListener('change', () => {
    const val = String(ctrl.value ?? '').trim();
    onChangeCb(val === '' ? null : val);
  });

  if (!propSchema['x-inObserved']) ctrl.appendChild(notObservedNote());
  return ctrl;
}

function buildObjectControl(propName, propSchema, currentVal, onChangeCb, isRequired, displayName) {
  // No pkts-form-input-text-area; use pkts-input-text-area directly
  const wrap = document.createElement('div');
  wrap.className = 'ts-form-field';

  const labelDiv = document.createElement('div');
  labelDiv.className = 'ts-form-label';
  labelDiv.appendChild(document.createTextNode(displayName));
  if (!isRequired) {
    const opt = document.createElement('span');
    opt.className = 'ts-form-optional';
    opt.textContent = '?';
    labelDiv.appendChild(opt);
  }
  wrap.appendChild(labelDiv);

  if (propSchema.description) {
    const desc = document.createElement('div');
    desc.className = 'ts-form-desc';
    desc.textContent = propSchema.description;
    wrap.appendChild(desc);
  }

  const textarea = document.createElement('pkts-input-text-area');
  textarea.setAttribute('placeholder', propSchema.type === 'array' ? '[]' : '{}');
  if (currentVal != null) textarea.setAttribute('value', String(currentVal));

  textarea.addEventListener('change', () => {
    const raw = String(textarea.value ?? '').trim();
    try {
      JSON.parse(raw || 'null');
      textarea.removeAttribute('error');
      onChangeCb(raw || null);
    } catch {
      textarea.setAttribute('error', '');
    }
  });

  wrap.appendChild(textarea);

  if (!propSchema['x-inObserved']) {
    appendNote(wrap, 'not observed', "This prop is not in observedAttributes.");
  }
  return wrap;
}

function buildTextControl(propName, propSchema, currentVal, onChangeCb, isRequired, displayName) {
  const ctrl = document.createElement('pkts-form-input-text');
  ctrl.setAttribute('label', displayName);
  if (propSchema.description) ctrl.setAttribute('description', propSchema.description);
  if (isRequired) ctrl.setAttribute('required', '');
  ctrl.setAttribute('placeholder', displayName);
  if (currentVal != null) ctrl.setAttribute('value', String(currentVal));

  ctrl.addEventListener('change', () => {
    onChangeCb(ctrl.value || null);
  });

  if (propSchema['x-kind'] !== 'slot' && !propSchema['x-inObserved']) {
    ctrl.appendChild(notObservedNote());
  }
  return ctrl;
}

// ── Main export ───────────────────────────────────────────────────────────────

/**
 * Build a form section from a JSON Schema and initial state.
 *
 * @param {object} schema  - JSON Schema (draft-07 subset) for the component.
 * @param {object} state   - Seed state: { attrName: value, ... }
 * @param {function} onChange  - Called as onChange(key, value | null).
 *                               key = prop name from schema.properties.
 *                               Slot properties (x-kind: slot) use the schema key 'content'.
 * @param {string[]} [required] - Additional required array (from schema.required).
 * @returns {HTMLElement}
 */
export function renderForm(schema, state, onChange) {
  const section = document.createElement('pkts-form-section');
  section.setAttribute('title', 'Props');

  const properties = schema.properties || {};
  const requiredSet = new Set(schema.required || []);

  for (const [propName, propSchema] of Object.entries(properties)) {
    const xKind   = propSchema['x-kind'];
    const xAttr   = propSchema['x-attribute'];
    const isRequired = requiredSet.has(propName);

    const displayName = propName;
    const stateKey    = xAttr ?? propName;
    const currentVal  = state[stateKey] ?? null;

    const onChangeCb  = (val) => onChange(stateKey, val);

    let ctrl;

    if (xKind === 'event') {
      // Show as a read-only note; not a form control
      const note = document.createElement('div');
      note.className = 'ts-event-field';
      const lbl = document.createElement('span');
      lbl.className = 'ts-event-label';
      lbl.textContent = propName;
      const val = document.createElement('span');
      val.className = 'ts-event-value';
      val.textContent = 'callback — not settable via attribute';
      note.appendChild(lbl);
      note.appendChild(val);
      section.appendChild(note);
      continue;
    }

    if (propSchema.enum) {
      ctrl = buildEnumControl(propName, propSchema, currentVal, onChangeCb, isRequired, displayName);
    } else {
      switch (propSchema.type) {
        case 'boolean':
          ctrl = buildBooleanControl(propName, propSchema, currentVal, onChangeCb, displayName);
          break;
        case 'number':
          ctrl = buildNumberControl(propName, propSchema, currentVal, onChangeCb, isRequired, displayName);
          break;
        case 'object':
        case 'array':
          ctrl = buildObjectControl(propName, propSchema, currentVal, onChangeCb, isRequired, displayName);
          break;
        default:
          if (propSchema.type !== 'string' && xKind !== 'slot') {
            console.warn(`[tearsheet-2 form] Unhandled prop type "${propSchema.type}" for "${propName}" — using text input`);
          }
          ctrl = buildTextControl(propName, propSchema, currentVal, onChangeCb, isRequired, displayName);
      }
    }

    section.appendChild(ctrl);
  }

  return section;
}
