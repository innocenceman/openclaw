# Channel Plugins Code Paths

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Registration and catalog path

1. `extensions/<id>/openclaw.plugin.json` declares `channels: ["<id>"]`.
2. `extensions/<id>/index.ts` exports a channel entry, commonly via `defineChannelPluginEntry`.
3. Core plugin/channel registry discovers the entry and exposes setup/status/send/monitor behavior.
4. `src/channels/plugins/contracts/registry.contract.test.ts` and `registry-backed.contract.test.ts` validate shared registry behavior.

## Setup/status path

1. `src/setup-surface.ts` or equivalent local setup file defines wizard/status/config issue behavior.
2. `runtime-api.ts` / SDK setup helpers provide docs links, config resolution, account status, and runtime logging.
3. CLI/apps/UI/docs may need sync when setup labels, config fields, or status semantics change.

## Inbound path

1. Provider webhook/polling/session event enters `src/monitor.ts` or nested monitor code.
2. Channel code normalizes sender/account/thread/room/message/media context.
3. Shared SDK helpers route through command gating, allowlist/group policy, reply pipeline, and session binding.
4. `src/channels/plugins/contracts/inbound.contract.test.ts` and channel-specific monitor tests are first validation.

## Outbound path

1. Agent/command/reply pipeline calls channel send adapter.
2. `src/send.ts` or nested send implementation normalizes target, text, blocks/buttons/media/attachments.
3. Provider API response is mapped to channel send result or error.
4. `src/channels/plugins/contracts/outbound-payload.contract.test.ts` and channel-specific send tests are first validation.

## Browser/session-backed path

1. Session/device state is read from channel-specific config/state directories.
2. Reconnect/session monitor receives inbound events and dispatches through the same shared routing/gating path.
3. Mock-first compatibility tests should pass before any live/manual联调.
4. `../channels/` contains the first detailed downstream compatibility slice.
