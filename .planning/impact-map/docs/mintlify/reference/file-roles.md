# Docs reference File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| File or path                  | Role                                                                                           | Evidence state | Impact notes                                                                               |
| ----------------------------- | ---------------------------------------------------------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------ |
| docs/reference/\*.md          | Reference pages for release policy, cost accounting, credentials, sessions, and test guidance. | deep-partial   | These pages are frequently used as policy anchors for other docs and maintainer workflows. |
| docs/reference/templates/\*\* | Template source files surfaced as reference docs.                                              | partial        | Template-path moves can break cross-links and operator guidance.                           |
| docs/docs.json                | Mintlify nav, redirects, and category placement for reference pages.                           | partial        | Reference moves often need docs.json and anchor updates together.                          |

## Update rule

When a changed path in this leaf becomes the durable owner of a separate validation or synchronization rule, add it here and update `code-paths.md` plus `change-to-test.md` in the same change.
