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
