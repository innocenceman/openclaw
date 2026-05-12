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

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/config/doc-baseline.integration.test.ts`
- `src/config/doc-baseline.runtime.ts`
- `src/config/doc-baseline.ts`
- `src/config/schema.base.generated.test.ts`
- `src/config/schema.base.generated.ts`
- `src/config/schema.help.quality.test.ts`
- `src/config/schema.help.ts`
- `src/config/schema.hints.test.ts`
- `src/config/schema.labels.ts`
- `src/config/schema.tags.ts`
- `src/config/schema.test.ts`
- `src/config/schema.ts`
- `src/config/types.access-groups.ts`
- `src/config/types.agent-defaults.ts`
- `src/config/types.agents-shared.ts`
- `src/config/types.agents.ts`
- `src/config/types.base.ts`
- `src/config/types.browser.ts`
- `src/config/types.channels.ts`
- `src/config/types.commitments.ts`
- `src/config/types.crestodian.ts`
- `src/config/types.cron.ts`
- `src/config/types.discord.ts`
- `src/config/types.gateway.ts`
- `src/config/types.installs.ts`
- `src/config/types.memory.ts`
- `src/config/types.messages.ts`
- `src/config/types.models.ts`
- `src/config/types.msteams.ts`
- `src/config/types.openclaw.ts`
- `src/config/types.plugins.ts`
- `src/config/types.sandbox.ts`
- `src/config/types.slack.ts`
- `src/config/types.telegram.ts`
- `src/config/types.tools.ts`
- `src/config/types.ts`
- `src/config/types.tts.ts`
- `src/config/zod-schema.agent-defaults.test.ts`
- `src/config/zod-schema.agent-defaults.ts`
- `src/config/zod-schema.agent-model.ts`
- … plus 18 more target-existing changed paths.
<!-- version-diff-refresh:v2026.5.4:end -->
