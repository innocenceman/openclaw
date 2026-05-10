# zalo Channel Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for the Zalo Bot API channel plugin under `extensions/zalo/`.

## Entry contracts

- `extensions/zalo/openclaw.plugin.json` declares plugin id `zalo` and channel id `zalo`.
- `extensions/zalo/package.json` publishes `@openclaw/zalo`, advertises docs at `/channels/zalo`, alias `zl`, and local runtime dependencies `undici`/`zod`.
- `extensions/zalo/index.ts` registers `zaloPlugin` and the runtime setter.
- `extensions/zalo/setup-entry.ts`, `api.ts`, and `runtime-api.ts` expose setup/runtime-facing surfaces.

## Primary behavior surfaces

- Setup/config/accounts: `src/accounts.ts`, `src/config-schema.ts`, `src/setup-core.ts`, `src/setup-surface.ts`, `src/secret-input.ts`, `src/token.ts`, `src/types.ts`, and `src/status-issues.ts`.
- Channel adapter/runtime: `src/channel.ts`, `src/channel.runtime.ts`, `src/runtime.ts`, `src/session-route.ts`, `src/probe.ts`, and `src/proxy.ts`.
- Inbound monitor: `src/monitor.ts`, `src/monitor.webhook.ts`, group-policy tests, lifecycle tests, pairing/reply-once lifecycle tests, and image polling tests.
- Outbound/actions/API: `src/send.ts`, `src/api.ts`, `src/actions.ts`, `src/actions.runtime.ts`, and proxy-aware fetch.
- Group/direct policy: scoped DM policy, groupPolicy/groupAllowFrom, requireMention, directory allowFrom resolution, and status issue collection.

## Leaf status

This is a leaf module in the channel-plugin taxonomy. Split further only if Zalo gains separately owned polling, webhook, or send/API subsystems with independent validation ownership.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## Current evidence limits

No product tests/builds/graph indexes were run while deepening this leaf. The map is based on repo-native structural inspection of Zalo source and colocated tests.
