# Config Io Change-to-Test

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Change scope | First validation                                                                                                                          | Escalation trigger                                                                | Notes                 |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------- |
| `config-io/` | pnpm test -- src/config/io.write-config.test.ts src/config/includes.test.ts src/config/paths.test.ts src/config/runtime-overrides.test.ts | Escalate to build/docs checks when config file shape or generated outputs change. | Residual Wave 1R unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `160` (重命名/移动 4，修改 79，新增 53，删除 24).
- Target-existing path refs in active map: `132`; deleted/renamed-away refs kept only in transition artifacts: `28`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/config/agent-dirs.ts`
- `src/config/allowed-values.ts`
- `src/config/backup-rotation.ts`
- `src/config/bindings.ts`
- `src/config/bundled-channel-config-metadata.generated.ts`
- `src/config/bundled-channel-config-runtime.test.ts`
- `src/config/cache-utils.ts`
- `src/config/channel-capabilities.ts`
- `src/config/channel-compat-normalization.ts`
- `src/config/channel-configured.test.ts`
- `src/config/channel-configured.ts`
- `src/config/commands.test.ts`
- `src/config/commands.ts`
- `src/config/config-env-vars.ts`
- `src/config/config-misc.test.ts`
- `src/config/config.acp-binding-cutover.test.ts`
- `src/config/config.allowlist-requires-allowfrom.test.ts`
- `src/config/config.compaction-settings.test.ts`
- `src/config/config.env-vars.test.ts`
- `src/config/config.model-ref-validation.test.ts`
- `src/config/config.multi-agent-agentdir-validation.test.ts`
- `src/config/config.plugin-validation.test.ts`
- `src/config/config.pruning-defaults.test.ts`
- `src/config/config.sandbox-docker.test.ts`
- `src/config/config.schema-regressions.test.ts`
- `src/config/config.talk-validation.test.ts`
- `src/config/config.ts`
- `src/config/config.web-search-provider.test.ts`
- `src/config/context-visibility.ts`
- `src/config/control-ui-css.ts`
- `src/config/dangerous-name-matching.ts`
- `src/config/defaults.test.ts`
- `src/config/defaults.ts`
- `src/config/env-substitution.ts`
- `src/config/env-vars.ts`
- `src/config/future-version-guard.test.ts`
- `src/config/future-version-guard.ts`
- `src/config/gateway-control-ui-origins.test.ts`
- `src/config/gateway-control-ui-origins.ts`
- `src/config/group-policy.test.ts`
- … plus 65 more target-existing changed paths.
<!-- version-diff-refresh:v2026.5.4:end -->
