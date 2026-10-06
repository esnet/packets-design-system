---
"@esnet/packets-ui-css": major
---

Remove LBNL/Berkeley Lab Design System (BLDS) color tokens from the public package.

The 14 `--pkts-color-blds-*` CSS custom properties are no longer included in the published stylesheet. These properties mapped the Berkeley Lab Design System palette (dark-blue, teal, cloud, etc.) and were not referenced by any Packets component internally.

If your application referenced these variables directly, replace them with values from your own design system or from the LBNL BLDS package.
