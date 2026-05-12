# Config Schema Validation Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/config/schema*.ts`, `src/config/doc-baseline*.ts`, `src/config/zod*.ts`
- Runtime handoff: Schema and docs baselines validate config structure before CLI/gateway/runtime consumers load it.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `59` changed path(s) to this final leaf. `58` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 53, 'A': 5, 'D': 1}`.

- `src/config/doc-baseline.integration.test.ts`
- `src/config/doc-baseline.runtime.ts`
- `src/config/doc-baseline.ts`
- `src/config/schema-base.ts`
- `src/config/schema.base.generated.test.ts`
- `src/config/schema.base.generated.ts`
- `src/config/schema.help.quality.test.ts`
- `src/config/schema.help.ts`
- `src/config/schema.hints.test.ts`
- `src/config/schema.hints.ts`
- `src/config/schema.labels.ts`
- `src/config/schema.shared.ts`
- `src/config/schema.tags.ts`
- `src/config/schema.test.ts`
- `src/config/schema.ts`
- `src/config/types.agent-defaults.ts`
- `src/config/types.agents-shared.ts`
- `src/config/types.agents.ts`
- `src/config/types.approvals.ts`
- `src/config/types.auth.ts`
- `src/config/types.base.ts`
- `src/config/types.browser.ts`
- `src/config/types.channel-messaging-common.ts`
- `src/config/types.channels.ts`
- `src/config/types.discord.ts`
- `src/config/types.gateway.ts`
- `src/config/types.googlechat.ts`
- `src/config/types.hooks.ts`
- `src/config/types.imessage.ts`
- `src/config/types.irc.ts`
- `... 另有 28 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

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
