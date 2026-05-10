# Generated or Localized Docs ja-JP File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| File or path    | Role                                                        | Evidence state | Impact notes                                                                   |
| --------------- | ----------------------------------------------------------- | -------------- | ------------------------------------------------------------------------------ |
| docs/ja-JP/\*\* | Localized Japanese docs pages and local indexes.            | partial        | Small subtree; path churn is more likely than generator drift.                 |
| docs/docs.json  | Mintlify nav entries that expose this locale.               | partial        | Route registration or relocation can break access to the locale landing pages. |
| docs/\*_/_.md\* | English source docs that may inspire manual locale updates. | partial        | No Wave 4 evidence showed an automated ja-JP regeneration path for this leaf.  |

## Update rule

When a changed path in this leaf becomes the durable owner of a separate validation or synchronization rule, add it here and update `code-paths.md` plus `change-to-test.md` in the same change.
