# Docs nodes File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| File or path                                                            | Role                                                                           | Evidence state | Impact notes                                                                                              |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------ | -------------- | --------------------------------------------------------------------------------------------------------- |
| docs/nodes/\*\*                                                         | Primary docs pages owned by this leaf.                                         | partial        | Page moves and filename changes primarily affect docs navigation, root-relative links, and locale parity. |
| docs/docs.json                                                          | Mintlify navigation, tabs, and redirects that surface this leaf.               | partial        | New pages or renamed routes often need docs.json updates in the same change.                              |
| docs/.i18n/glossary.zh-CN.json and scripts/check-docs-i18n-glossary.mjs | Glossary coverage and guardrail for English titles/labels before zh-CN reruns. | partial        | Title churn can fail docs glossary checks even when markdown content looks valid.                         |

## Update rule

When a changed path in this leaf becomes the durable owner of a separate validation or synchronization rule, add it here and update `code-paths.md` plus `change-to-test.md` in the same change.
