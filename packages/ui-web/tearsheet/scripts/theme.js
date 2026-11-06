// Dark mode, palette picker, and the live token readout.
// Depends on PALETTES and PALETTE_SLOTS from palettes.js.

function toggleTheme() {
  document.body.classList.toggle('dark');

  localStorage.setItem(
    'packets-theme',
    document.body.classList.contains('dark') ? 'dark' : 'light'
  );

  updateTokenReadout();
}

function updateTokenReadout() {
  const styles = getComputedStyle(document.body);

  document.querySelectorAll('.token-value').forEach(element => {
    element.textContent = styles.getPropertyValue(element.dataset.token).trim();
  });
}

function applyPalette(id) {
  const palette = PALETTES.find(item => item.id === id) ?? PALETTES[0];

  if (palette.id === 'default') {
    delete document.body.dataset.palette;
  } else {
    document.body.dataset.palette = palette.id;
  }

  document.querySelectorAll('.palette-swatch').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.palette === palette.id));
  });

  localStorage.setItem('packets-palette', palette.id);
  updateTokenReadout();
}

function buildPalettePicker() {
  const picker = document.getElementById('palette-picker');

  // The default palette has no overrides, so show the real tokens.
  const colorFor = (palette, mode, slot) =>
    palette[mode]?.[slot] ?? `var(--pkts-color-${mode}-${slot})`;

  PALETTES.forEach(palette => {
    const button = document.createElement('button');

    button.type = 'button';
    button.className = 'palette-swatch';
    button.dataset.palette = palette.id;
    button.title = `${palette.name} palette`;
    button.setAttribute('aria-label', `${palette.name} palette`);
    button.setAttribute('aria-pressed', 'false');

    PALETTE_SLOTS.forEach((slot, index) => {
      button.style.setProperty(`--l${index + 1}`, colorFor(palette, 'light', slot));
      button.style.setProperty(`--d${index + 1}`, colorFor(palette, 'dark', slot));
    });

    button.addEventListener('click', () => applyPalette(palette.id));
    picker.appendChild(button);
  });
}