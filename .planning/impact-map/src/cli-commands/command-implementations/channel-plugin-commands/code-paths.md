# Channel Plugin Commands Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

- Primary paths: `src/commands/channels*.ts`, `src/commands/channels/**`, `src/commands/channel-*.ts`, `src/commands/channel-setup/**`, `src/commands/configure.channels.ts`
- Runtime handoff: CLI channel commands configure or inspect channel/plugin state before crossing into channel abstraction or plugin runtime leaves.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `38` changed path(s) to this final leaf. `38` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 29, 'A': 9}`.

- `src/commands/channel-account-context.test.ts`
- `src/commands/channel-account-context.ts`
- `src/commands/channel-setup/channel-plugin-resolution.test.ts`
- `src/commands/channel-setup/channel-plugin-resolution.ts`
- `src/commands/channel-setup/discovery.test.ts`
- `src/commands/channel-setup/discovery.ts`
- `src/commands/channel-setup/plugin-install.test.ts`
- `src/commands/channel-setup/plugin-install.ts`
- `src/commands/channel-setup/registry.test.ts`
- `src/commands/channel-setup/registry.ts`
- `src/commands/channel-setup/trusted-catalog.ts`
- `src/commands/channel-setup/workspace-shadow-bypass.test.ts`
- `src/commands/channel-test-registry.ts`
- `src/commands/channels.add.test.ts`
- `src/commands/channels.adds-non-default-telegram-account.test.ts`
- `src/commands/channels.config-only-status-output.test.ts`
- `src/commands/channels.list.auth-profiles.test.ts`
- `src/commands/channels.mock-harness.ts`
- `src/commands/channels.plugin-install.test-helpers.ts`
- `src/commands/channels.remove.test.ts`
- `src/commands/channels.resolve.test.ts`
- `src/commands/channels.status.command-flow.test.ts`
- `src/commands/channels.status.external-env.test.ts`
- `src/commands/channels.surfaces-signal-runtime-errors-channels-status-output.test.ts`
- `src/commands/channels/add-mutators.ts`
- `src/commands/channels/add.ts`
- `src/commands/channels/capabilities.test.ts`
- `src/commands/channels/capabilities.ts`
- `src/commands/channels/list.ts`
- `... 另有 8 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `src/commands/channel-account-context.ts`
- `src/commands/channel-setup/channel-plugin-resolution.test.ts`
- `src/commands/channel-setup/channel-plugin-resolution.ts`
- `src/commands/channel-setup/discovery.test.ts`
- `src/commands/channel-setup/discovery.ts`
- `src/commands/channel-setup/plugin-install.test.ts`
- `src/commands/channel-setup/plugin-install.ts`
- `src/commands/channel-setup/registry.ts`
- `src/commands/channel-setup/workspace-shadow-bypass.test.ts`
- `src/commands/channel-test-registry.ts`
- `src/commands/channels.add.test.ts`
- `src/commands/channels.adds-non-default-telegram-account.test.ts`
- `src/commands/channels.config-only-status-output.test.ts`
- `src/commands/channels.list.auth-profiles.test.ts`
- `src/commands/channels.logs.test.ts`
- `src/commands/channels.remove.test.ts`
- `src/commands/channels.resolve.test.ts`
- `src/commands/channels.surfaces-signal-runtime-errors-channels-status-output.test.ts`
- `src/commands/channels/add.ts`
- `src/commands/channels/capabilities.test.ts`
- `src/commands/channels/capabilities.ts`
- `src/commands/channels/list.ts`
- `src/commands/channels/logs.ts`
- `src/commands/channels/remove.ts`
- `src/commands/channels/resolve.ts`
- `src/commands/channels/runtime-label.ts`
- `src/commands/channels/shared.ts`
- `src/commands/channels/status-config-format.ts`
- `src/commands/channels/status.ts`

Deleted or renamed-away paths omitted from this active leaf: `1`. See the transition directory under `.planning/version-diff/` for historical evidence.

<!-- version-diff-refresh:v2026.5.4:end -->
