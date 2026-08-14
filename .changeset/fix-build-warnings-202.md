---
"@esnet/packets-ui-react": patch
"@esnet/packets-ui-web": patch
---

fix: resolve TypeScript build warnings in ui-react and ui-web

- Fixed icon prop type in PktsListTreeView (ReactNode to ElementType)
- Fixed missing PktsInputDatePickerDateSettings imports in ui-web
- Fixed broken import path in PktsInputDateRange
- Added @types/node to both packages for playwright and test files
- Resolved all eslint errors in ui-react (missing React imports, unused vars, prop-types)
