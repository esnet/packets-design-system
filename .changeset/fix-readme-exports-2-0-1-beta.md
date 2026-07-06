---
"@esnet/packets-ui-react": patch
"@esnet/packets-ui-css": patch
"@esnet/packets-ui-web": patch
---

fix: correct README install commands, remove dead exports, fix avatar example

- README install commands now use the @beta tag so beta testers get 2.x instead of the old 0.x/1.x stable release
- Removed ./style.css and ./src/* from ui-react exports map: neither path exists in the published tarball, causing MODULE_NOT_FOUND errors for consumers who imported them
- Fixed PktsAvatar usage example in ui-react README: initials and color are not props; correct props are alt (for the fallback label) and backgroundColor
