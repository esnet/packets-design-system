// Sample palettes. Loaded in <head> so the palette CSS exists before first paint.

const PALETTE_SLOTS = ['primary', 'secondary', 'tertiary'];

// Also override the branded action tokens, derived from primary.
// Set to false if your CSS already derives them from --pkts-color-primary.
const DERIVE_BRANDED_ACTIONS = true;

// "default" has no overrides, so it uses the design system's own tokens.
const PALETTES = [
  { id: 'default', name: 'Default' },
  {
    id: 'ocean',
    name: 'Ocean',
    // primary: blue — accent: complementary orange
    light: { primary: '#0b5fa5', secondary: '#0e8aa8', tertiary: '#5b7db1', accent: '#a5650b' },
    dark:  { primary: '#6bb6f2', secondary: '#5cc6dc', tertiary: '#94acd6', accent: '#f2b36b' }
  },
  {
    id: 'forest',
    name: 'Forest',
    // primary: green — accent: complementary red-purple
    light: { primary: '#2f6b3a', secondary: '#6a8f2a', tertiary: '#a9742b', accent: '#6b2f5e' },
    dark:  { primary: '#7fd18c', secondary: '#b2d46b', tertiary: '#e0b36a', accent: '#d17fc4' }
  },
  {
    id: 'sunset',
    name: 'Sunset',
    // primary: orange-red — accent: complementary cyan-teal
    light: { primary: '#c2410c', secondary: '#be185d', tertiary: '#b45309', accent: '#0c9dc2' },
    dark:  { primary: '#fb923c', secondary: '#f472b6', tertiary: '#fbbf24', accent: '#6bcbf2' }
  },
  {
    id: 'grape',
    name: 'Grape',
    // primary: purple — accent: complementary lime-green
    light: { primary: '#6d28d9', secondary: '#a21caf', tertiary: '#4f46e5', accent: '#80d929' },
    dark:  { primary: '#a78bfa', secondary: '#e879f9', tertiary: '#818cf8', accent: '#c4f07d' }
  },
  {
    id: 'mono',
    name: 'Mono',
    // primary: cool gray-blue — accent: complementary warm amber
    light: { primary: '#1f2937', secondary: '#4b5563', tertiary: '#6b7280', accent: '#a06818' },
    dark:  { primary: '#e5e7eb', secondary: '#cbd5e1', tertiary: '#9ca3af', accent: '#f0c470' }
  }
];

// One light rule and one dark rule per palette. The extra attribute
// selector beats the base .packets / .packets.dark token rules.
(function buildPaletteStyles() {
  const declarations = (palette, mode) => {
    const slots = PALETTE_SLOTS
      .map(slot => `--pkts-color-${slot}: ${palette[mode][slot]};`)
      .join(' ');

    if (!DERIVE_BRANDED_ACTIONS) {
      return slots;
    }

    // Darken in light mode, lighten in dark mode.
    const mix = mode === 'light' ? 'black' : 'white';

    const accentDecl = palette[mode].accent
      ? `--pkts-color-accent: ${palette[mode].accent};`
      : '';

    return `${slots}
      --pkts-color-actions-branded-rest: color-mix(in srgb, var(--pkts-color-primary), ${mix} 2%);
      --pkts-color-actions-branded-hover: color-mix(in srgb, var(--pkts-color-primary), ${mix} 15%);
      --pkts-color-actions-branded-active: color-mix(in srgb, var(--pkts-color-primary), ${mix} 30%);
      ${accentDecl}`;
  };

  const css = PALETTES
    .filter(palette => palette.light)
    .map(palette => `
.packets[data-palette="${palette.id}"] { ${declarations(palette, 'light')} }
.packets.dark[data-palette="${palette.id}"] { ${declarations(palette, 'dark')} }`)
    .join('\n');

  const style = document.createElement('style');
  style.id = 'palette-styles';
  style.textContent = css;
  document.head.appendChild(style);
})();