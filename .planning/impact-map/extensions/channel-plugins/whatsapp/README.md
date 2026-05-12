# WhatsApp Channel Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for the bundled WhatsApp channel plugin in `extensions/whatsapp/`.

This leaf covers the plugin manifest, install metadata, channel registration, setup/login/logout, Baileys session lifecycle, inbound monitoring/access control/media extraction, auto-reply dispatch, outbound sends/polls/reactions, status diagnostics, and WhatsApp-specific media handling.

## Why this remains one leaf

`extensions/whatsapp/` has many internal subareas, but they are tightly coupled around one installed plugin and one runtime channel id: `whatsapp`. For impact mapping, keep this as a single leaf unless one of these subareas gains independent ownership, a separate release contract, or a separately testable public API:

- login/session/auth-store lifecycle
- inbound monitor/access-control/extraction/media path
- auto-reply monitor/process-message/deliver path
- outbound adapter/send/session-route path
- setup/status/config-schema path

Until then, treat those as code paths inside this leaf, not separate modules.

## Entry contracts

- Plugin id and channel id: `whatsapp` from `extensions/whatsapp/openclaw.plugin.json`.
- Package/install contract: `@openclaw/whatsapp` from `extensions/whatsapp/package.json`.
- Loader boundary: `extensions/whatsapp/index.ts` registers `whatsappPlugin` and `setWhatsAppRuntime` through the plugin SDK.
- Public local barrels: `extensions/whatsapp/api.ts`, `extensions/whatsapp/runtime-api.ts`, and `extensions/whatsapp/src/runtime-api.ts`.

## Primary behavior surfaces

- `extensions/whatsapp/src/channel.ts`: plugin composition and channel capability wiring.
- `extensions/whatsapp/src/setup-surface.ts`: setup wizard, config merge, owner/DM policy prompts, and QR login option.
- `extensions/whatsapp/src/login.ts`: QR login flow and Baileys connection wait/restart handling.
- `extensions/whatsapp/src/inbound/monitor.ts`: active Baileys inbox listener and inbound normalization.
- `extensions/whatsapp/src/inbound/access-control.ts`: DM/group/self-chat authorization and pairing challenge path.
- `extensions/whatsapp/src/auto-reply/monitor.ts`: gateway monitor lifecycle, status controller, heartbeat/reconnect policy, and dispatch entry.
- `extensions/whatsapp/src/auto-reply/monitor/process-message.ts`: inbound context construction, command gate, routing, final-reply-only delivery.
- `extensions/whatsapp/src/send.ts`: outbound text/media/reaction/poll delivery through the active listener.
- `extensions/whatsapp/src/media.ts`: remote/local media loading, SSRF/local-root guards, conversion/optimization, and size caps.

## Detail files

- `file-roles.md`: file/path ownership and likely impact radius.
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
- Changed paths in this leaf: `224` (修改 100，新增 106，删除 7，重命名/移动 11).
- Target-existing changed paths listed here: `212`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `12`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `extensions/whatsapp/api.ts`
- `extensions/whatsapp/auth-presence.ts`
- `extensions/whatsapp/channel-plugin-api.ts`
- `extensions/whatsapp/config-api.ts`
- `extensions/whatsapp/constants.ts`
- `extensions/whatsapp/contract-api.ts`
- `extensions/whatsapp/directory-contract-api.ts`
- `extensions/whatsapp/doctor-contract-api.ts`
- `extensions/whatsapp/index.test.ts`
- `extensions/whatsapp/index.ts`
- `extensions/whatsapp/legacy-session-surface-api.ts`
- `extensions/whatsapp/legacy-state-migrations-api.ts`
- `... 另有 200 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `channel-plugins`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `138`
- Target-existing changed paths reflected here: `131`
- Deleted or renamed-away paths omitted from active impact-map: `7`

### Target-version changed paths

- `extensions/whatsapp/api.ts`
- `extensions/whatsapp/auth-presence.ts`
- `extensions/whatsapp/config-api.ts`
- `extensions/whatsapp/index.test.ts`
- `extensions/whatsapp/openclaw.plugin.json`
- `extensions/whatsapp/package.json`
- `extensions/whatsapp/runtime-api.ts`
- `extensions/whatsapp/src/account-types.ts`
- `extensions/whatsapp/src/accounts.ts`
- `extensions/whatsapp/src/accounts.whatsapp-auth.test.ts`
- `extensions/whatsapp/src/action-runtime-target-auth.ts`
- `extensions/whatsapp/src/action-runtime.test.ts`
- `extensions/whatsapp/src/action-runtime.ts`
- `extensions/whatsapp/src/active-listener.test.ts`
- `extensions/whatsapp/src/active-listener.ts`
- `extensions/whatsapp/src/auth-store.test.ts`
- `extensions/whatsapp/src/auth-store.ts`
- `extensions/whatsapp/src/auto-reply.broadcast-groups.combined.test.ts`
- `extensions/whatsapp/src/auto-reply.impl.ts`
- `extensions/whatsapp/src/auto-reply.test-harness.ts`
- `extensions/whatsapp/src/auto-reply.web-auto-reply.compresses-common-formats-jpeg-cap.test.ts`
- `extensions/whatsapp/src/auto-reply.web-auto-reply.connection-and-logging.e2e.test.ts`
- `extensions/whatsapp/src/auto-reply.web-auto-reply.last-route.test.ts`
- `extensions/whatsapp/src/auto-reply/config.runtime.ts`
- `extensions/whatsapp/src/auto-reply/deliver-reply.test.ts`
- `extensions/whatsapp/src/auto-reply/deliver-reply.ts`
- `extensions/whatsapp/src/auto-reply/mentions.ts`
- `extensions/whatsapp/src/auto-reply/monitor-state.test.ts`
- `extensions/whatsapp/src/auto-reply/monitor-state.ts`
- `extensions/whatsapp/src/auto-reply/monitor.ts`
- `extensions/whatsapp/src/auto-reply/monitor/ack-reaction.test.ts`
- `extensions/whatsapp/src/auto-reply/monitor/ack-reaction.ts`
- `extensions/whatsapp/src/auto-reply/monitor/broadcast.ts`
- `extensions/whatsapp/src/auto-reply/monitor/commands.ts`
- `extensions/whatsapp/src/auto-reply/monitor/group-activation.ts`
- `extensions/whatsapp/src/auto-reply/monitor/group-gating.audio-preflight.test.ts`
- `extensions/whatsapp/src/auto-reply/monitor/group-gating.ts`
- `extensions/whatsapp/src/auto-reply/monitor/inbound-context.test.ts`
- `extensions/whatsapp/src/auto-reply/monitor/inbound-context.ts`
- `extensions/whatsapp/src/auto-reply/monitor/inbound-dispatch.runtime.ts`
- … plus 91 more target-existing changed paths.

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
