# BlueBubbles Channel Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for the bundled BlueBubbles channel plugin in `extensions/bluebubbles/`.

This leaf covers the BlueBubbles plugin manifest/install metadata, runtime injection, setup/config, account/server credential resolution, webhook monitor/auth/routing, inbound normalization/debounce/reply cache/self-chat reflection guard, inbound access and pairing, OpenClaw routing/reply pipeline, outbound text/media/attachments/reactions/chat private API actions, target/session routing, status/probe, and group policy.

## Why this remains one leaf

BlueBubbles has several internal behavior paths, but they share one installed plugin, one channel id (`bluebubbles`), one BlueBubbles server account config model, and one webhook/send runtime boundary. Split only if webhook processing, media/attachment delivery, or private API chat actions gain independent ownership or a separate public contract.

## Entry contracts

- Plugin id/channel id: `bluebubbles` from `extensions/bluebubbles/openclaw.plugin.json`.
- Package/install contract: `@openclaw/bluebubbles` from `extensions/bluebubbles/package.json`.
- Loader boundary: `extensions/bluebubbles/index.ts` registers `bluebubblesPlugin` and `setBlueBubblesRuntime`.
- Public local barrels: `extensions/bluebubbles/api.ts`, `extensions/bluebubbles/runtime-api.ts`, and `extensions/bluebubbles/src/runtime-api.ts`.

## Primary behavior surfaces

- `extensions/bluebubbles/src/channel.ts`: channel plugin composition, allowlist/security/status/gateway/outbound/action wiring.
- `extensions/bluebubbles/src/monitor.ts`: webhook target registration, auth, body parsing, event filtering, and dispatch to message/reaction processors.
- `extensions/bluebubbles/src/monitor-processing.ts`: inbound authorization, pairing, route/session context, reply pipeline, history/reply/self-chat caches, outbound id tracking, reactions.
- `extensions/bluebubbles/src/send.ts`: outbound text sends, chat GUID resolution, chat creation, reply threading and message effects via Private API.
- `extensions/bluebubbles/src/media-send.ts` and `extensions/bluebubbles/src/attachments.ts`: outbound media and attachment download/send boundaries.
- `extensions/bluebubbles/src/setup-surface.ts`: setup wizard for server URL, password, webhook path, and allowFrom.

## Detail files

- `file-roles.md`: file/path ownership and impact radius.
- `code-paths.md`: traceable behavior paths and handoff boundaries.
- `change-to-test.md`: targeted validation ladder for common changes.

## Current validation state

This map was created from source inspection only. No product code was modified, no tests/builds were run, and no GitNexus/code-review-graph index was run for this leaf.
