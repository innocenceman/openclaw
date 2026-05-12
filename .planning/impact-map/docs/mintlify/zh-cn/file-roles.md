# Generated or Localized Docs zh-CN File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| File or path                   | Role                                                  | Evidence state | Impact notes                                                                                              |
| ------------------------------ | ----------------------------------------------------- | -------------- | --------------------------------------------------------------------------------------------------------- |
| docs/zh-CN/\*\*                | Generated zh-CN documentation tree.                   | deep-partial   | Repo guidance says this subtree is generated and should not be edited unless explicitly requested.        |
| docs/.i18n/glossary.zh-CN.json | Glossary coverage required before translation reruns. | deep-partial   | Keep new technical terms, page titles, and short nav labels covered before rerunning `scripts/docs-i18n`. |
| scripts/docs-i18n/\*\*         | Translation pipeline that materializes zh-CN output.  | partial        | Use this only after English docs and glossary changes are ready; do not patch generated output first.     |

## Update rule

When a changed path in this leaf becomes the durable owner of a separate validation or synchronization rule, add it here and update `code-paths.md` plus `change-to-test.md` in the same change.
