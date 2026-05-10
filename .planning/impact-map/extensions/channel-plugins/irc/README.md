# IRC Channel Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for the bundled IRC channel plugin in `extensions/irc/`.

Covers plugin registration, server/nick/TLS/NickServ setup, IRC client connection/protocol parsing, monitor lifecycle, inbound PRIVMSG authorization/mention policy/pairing, outbound message splitting/sanitization, target normalization, probe/status, and IRC-specific control character handling.

## Entry contracts

- Plugin id/channel id: `irc`.
- Package contract: `@openclaw/irc`.
- Loader boundary: `extensions/irc/index.ts` registers `ircPlugin` and `setIrcRuntime`.

## Primary behavior surfaces

- `extensions/irc/src/channel.ts`: channel plugin composition.
- `extensions/irc/src/client.ts`, `protocol.ts`, `connect-options.ts`: IRC transport/protocol.
- `extensions/irc/src/monitor.ts`, `inbound.ts`: monitor and inbound dispatch.
- `extensions/irc/src/send.ts`, `normalize.ts`, `policy.ts`: outbound/target/policy helpers.

## Current validation state

Source inspection only; no product code, tests/builds, or graph indexes were run.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `channel-plugins`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `41` (修改 25，新增 14，删除 2).
- Target-existing changed paths listed here: `39`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `2`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `extensions/irc/api.ts`
- `extensions/irc/channel-plugin-api.ts`
- `extensions/irc/configured-state.ts`
- `extensions/irc/contract-api.ts`
- `extensions/irc/index.test.ts`
- `extensions/irc/index.ts`
- `extensions/irc/openclaw.plugin.json`
- `extensions/irc/package.json`
- `extensions/irc/runtime-api.test.ts`
- `extensions/irc/runtime-api.ts`
- `extensions/irc/secret-contract-api.ts`
- `extensions/irc/setup-entry.ts`
- `... 另有 27 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
