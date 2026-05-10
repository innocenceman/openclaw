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
