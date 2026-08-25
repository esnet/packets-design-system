---
"@esnet/packets-ui-css": patch
---

Fix missing `"type": "color"` field on dark mode background token in design-tokens source. Without this field, Style Dictionary skips the token during build, causing the dark background CSS custom property to be absent from the compiled output.
