# Discord Channel Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for the bundled Discord channel plugin in `extensions/discord/`.

This leaf covers Discord plugin registration, runtime dependency staging, Carbon/Discord REST client setup, account/token/config/status/probe/audit, gateway monitor lifecycle, inbound event listeners, authorization/allowlists/mentions/commands, message preflight/process/queue workers, native commands/model picker/components, thread binding/thread title/session routing, outbound send/webhook/media/components, message actions/moderation/presence, exec approvals, subagent hooks, and Discord voice surfaces.

## Why this remains one leaf

Discord is one of the largest channel implementations, but the public ownership boundary is still one installed plugin and one channel id (`discord`). Internal folders such as `monitor/`, `actions/`, `voice/`, and `send.*` should be traced as code paths inside this leaf unless they become independently released or separately owned modules.

## Entry contracts

- Plugin id/channel id: `discord` from `extensions/discord/openclaw.plugin.json`.
- Package/install contract: `@openclaw/discord` from `extensions/discord/package.json`.
- Loader boundary: `extensions/discord/index.ts` registers `discordPlugin`, `setDiscordRuntime`, and `registerDiscordSubagentHooks`.
- Public local barrels: `extensions/discord/api.ts`, `extensions/discord/runtime-api.ts`, and `extensions/discord/session-key-api.ts`.

## Primary behavior surfaces

- `extensions/discord/src/channel.ts`: high fan-out channel composition.
- `extensions/discord/src/monitor/provider.ts` and `extensions/discord/src/monitor.gateway.ts`: gateway lifecycle and provider supervision.
- `extensions/discord/src/monitor/message-handler.ts` plus `preflight`/`process`/`queue`: inbound event to agent dispatch.
- `extensions/discord/src/outbound-adapter.ts` and `extensions/discord/src/send.ts`: outbound payload delivery and Discord API sends.
- `extensions/discord/src/actions/**`: message/guild/moderation/presence actions.
- `extensions/discord/src/monitor/thread-bindings*.ts`: thread/session binding and Discord thread lifecycle.
- `extensions/discord/src/voice/**`: Discord voice command/manager/runtime surfaces.

## Detail files

- `file-roles.md`: file/path ownership and impact radius.
- `code-paths.md`: traceable behavior paths and handoff boundaries.
- `change-to-test.md`: targeted validation ladder for common changes.

## Current validation state

This map was created from source inspection only. No product code was modified, no tests/builds were run, and no GitNexus/code-review-graph index was run for this leaf.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `channel-plugins`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `307` (新增 99，修改 197，删除 10，重命名/移动 1).
- Target-existing changed paths listed here: `297`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `10`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `extensions/discord/account-inspect-api.ts`
- `extensions/discord/api.ts`
- `extensions/discord/channel-plugin-api.ts`
- `extensions/discord/config-api.ts`
- `extensions/discord/configured-state.ts`
- `extensions/discord/contract-api.ts`
- `extensions/discord/directory-contract-api.ts`
- `extensions/discord/doctor-contract-api.ts`
- `extensions/discord/index.test.ts`
- `extensions/discord/index.ts`
- `extensions/discord/openclaw.plugin.json`
- `extensions/discord/package.json`
- `... 另有 285 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `channel-plugins`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `406`
- Target-existing changed paths reflected here: `403`
- Deleted or renamed-away paths omitted from active impact-map: `3`

### Target-version changed paths

- `extensions/discord/account-inspect-api.ts`
- `extensions/discord/api.ts`
- `extensions/discord/config-api.ts`
- `extensions/discord/index.test.ts`
- `extensions/discord/openclaw.plugin.json`
- `extensions/discord/package.json`
- `extensions/discord/runtime-api.actions.ts`
- `extensions/discord/runtime-api.lookup.ts`
- `extensions/discord/runtime-api.monitor.ts`
- `extensions/discord/runtime-api.send.ts`
- `extensions/discord/runtime-api.threads.ts`
- `extensions/discord/runtime-api.ts`
- `extensions/discord/runtime-setter-api.ts`
- `extensions/discord/src/account-inspect.test.ts`
- `extensions/discord/src/account-inspect.ts`
- `extensions/discord/src/accounts.test.ts`
- `extensions/discord/src/accounts.ts`
- `extensions/discord/src/actions/handle-action.test.ts`
- `extensions/discord/src/actions/handle-action.ts`
- `extensions/discord/src/actions/runtime.guild.ts`
- `extensions/discord/src/actions/runtime.messaging.messages.ts`
- `extensions/discord/src/actions/runtime.messaging.reactions.ts`
- `extensions/discord/src/actions/runtime.messaging.runtime.ts`
- `extensions/discord/src/actions/runtime.messaging.send.ts`
- `extensions/discord/src/actions/runtime.messaging.shared.ts`
- `extensions/discord/src/actions/runtime.messaging.ts`
- `extensions/discord/src/actions/runtime.moderation.authz.test.ts`
- `extensions/discord/src/actions/runtime.moderation.ts`
- `extensions/discord/src/actions/runtime.presence.test.ts`
- `extensions/discord/src/actions/runtime.presence.ts`
- `extensions/discord/src/actions/runtime.shared.ts`
- `extensions/discord/src/actions/runtime.test.ts`
- `extensions/discord/src/actions/runtime.ts`
- `extensions/discord/src/api-barrel.test.ts`
- `extensions/discord/src/api.test.ts`
- `extensions/discord/src/api.ts`
- `extensions/discord/src/approval-handler.runtime.ts`
- `extensions/discord/src/approval-native.test.ts`
- `extensions/discord/src/approval-native.ts`
- `extensions/discord/src/approval-runtime.ts`
- … plus 363 more target-existing changed paths.

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
