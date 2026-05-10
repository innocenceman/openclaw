# Docs Support .i18n File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| File or path                                                      | Role                                                            | Evidence state | Impact notes                                                                                               |
| ----------------------------------------------------------------- | --------------------------------------------------------------- | -------------- | ---------------------------------------------------------------------------------------------------------- |
| docs/.i18n/glossary.zh-CN.json and docs/.i18n/glossary.ja-JP.json | Preferred terminology guidance for translation output.          | deep-partial   | New page titles or short labels can require glossary additions before translation reruns.                  |
| docs/.i18n/\*.tm.jsonl                                            | Translation-memory cache keyed by workflow/model/hash.          | partial        | Generated cache; keep as machine-managed artifacts.                                                        |
| scripts/docs-i18n/\*\*                                            | Translation pipeline implementation and prompt/runtime helpers. | partial        | The pipeline is slow enough that repo guidance explicitly prefers targeted glossary updates before reruns. |
| scripts/check-docs-i18n-glossary.mjs                              | Guardrail for changed English doc titles and short labels.      | partial        | This is the first automated signal when English docs drift beyond current glossary coverage.               |

## Update rule

When a changed path in this leaf becomes the durable owner of a separate validation or synchronization rule, add it here and update `code-paths.md` plus `change-to-test.md` in the same change.
