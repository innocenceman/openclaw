# Config Schema Validation Change-to-Test

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Change scope                | First validation                                                                                                                                                          | Escalation trigger                                                                        | Notes                    |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------ |
| `config-schema-validation/` | pnpm test -- src/config/schema.base.generated.test.ts src/config/schema.help.quality.test.ts src/config/doc-baseline.test.ts src/config/config.schema-regressions.test.ts | Run pnpm config:docs:check and pnpm build when schema/help/public config surface changes. | Priority completion unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `59` (修改 53，新增 5，删除 1).
- Target-existing path refs in active map: `58`; deleted/renamed-away refs kept only in transition artifacts: `1`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
