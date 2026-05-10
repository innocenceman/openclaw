# Config Io Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/config/io*.ts`, `src/config/config.ts`, `src/config/paths.ts`, `src/config/includes.ts`
- Runtime handoff: Config sources merge from files/includes/env/runtime overrides before downstream consumers resolve values.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `160` changed path(s) to this final leaf. `132` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'R': 4, 'M': 79, 'A': 53, 'D': 24}`.

- `src/config/agent-dirs.ts`
- `src/config/agent-limits.ts`
- `src/config/agent-timeout-defaults.ts`
- `src/config/allowed-values.ts`
- `src/config/bindings.ts`
- `src/config/bundled-channel-config-metadata.generated.ts`
- `src/config/bundled-channel-config-runtime.test.ts`
- `src/config/channel-compat-normalization.ts`
- `src/config/channel-config-metadata.ts`
- `src/config/channel-configured-shared.ts`
- `src/config/channel-configured.test.ts`
- `src/config/channel-configured.ts`
- `src/config/commands.flags.ts`
- `src/config/commands.test.ts`
- `src/config/commands.ts`
- `src/config/config-misc.test.ts`
- `src/config/config.acp-binding-cutover.test.ts`
- `src/config/config.agent-concurrency-defaults.test.ts`
- `src/config/config.allowlist-requires-allowfrom.test.ts`
- `src/config/config.compaction-settings.test.ts`
- `src/config/config.gateway-node-pairing-auto-approve.test.ts`
- `src/config/config.gateway-tailscale-bind.test.ts`
- `src/config/config.hooks-module-paths.test.ts`
- `src/config/config.identity-avatar.test.ts`
- `src/config/config.legacy-config-detection.accepts-imessage-dmpolicy.test.ts`
- `src/config/config.legacy-config-detection.rejects-routing-allowfrom.test.ts`
- `src/config/config.legacy-config-provider-shapes.test.ts`
- `src/config/config.meta-timestamp-coercion.test.ts`
- `src/config/config.multi-agent-agentdir-validation.test.ts`
- `src/config/config.nix-integration-u3-u5-u9.test.ts`
- `... 另有 102 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->
