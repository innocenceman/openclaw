# Scripts docs-i18n File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| File or path                        | Role                                         | Evidence state | Impact notes                                                                    |
| ----------------------------------- | -------------------------------------------- | -------------- | ------------------------------------------------------------------------------- |
| scripts/docs-i18n/\*\*              | Primary automation files owned by this leaf. | deep-partial   | Path changes can break root package scripts, docs examples, or wrapper scripts. |
| `docs/.i18n/**` and `docs/zh-CN/**` | Primary data consumers of the pipeline.      | partial        | Pipeline changes should be traced into glossary/TM/generated locale artifacts.  |

## Update rule

When a new wrapper, docs guide, or shared helper becomes a stable dependency for this script leaf, record it here so future impact checks do not stop at the first shell file they see.
