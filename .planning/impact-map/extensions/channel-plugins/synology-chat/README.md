# synology-chat Channel Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for the Synology Chat channel plugin under `extensions/synology-chat/`.

## Entry contracts

- `extensions/synology-chat/openclaw.plugin.json` declares plugin id `synology-chat` and channel id `synology-chat`.
- `extensions/synology-chat/package.json` publishes `@openclaw/synology-chat`, advertises docs at `/channels/synology-chat`, and keeps `zod` as a local runtime dependency.
- `extensions/synology-chat/index.ts` registers `synologyChatPlugin` and the runtime setter.
- `extensions/synology-chat/setup-entry.ts` registers the setup entry; `setup-api.ts` exposes setup-facing helpers.

## Primary behavior surfaces

- Setup/config/accounts: `src/accounts.ts`, `src/setup-surface.ts`, `src/config-schema.ts`, `src/types.ts`, and setup API.
- Channel adapter/gateway: `src/channel.ts`, `src/gateway-runtime.ts`, `src/runtime.ts`, `src/security.ts`, and `src/session-key.ts`.
- Webhook inbound path: `src/webhook-handler.ts`, `src/inbound-context.ts`, `src/inbound-turn.ts`, and test HTTP utilities.
- Outbound client: `src/client.ts` for incoming webhook sends, file URL sends, and legacy name-to-user lookup.

## Leaf status

This is a leaf module in the channel-plugin taxonomy. Split further only if Synology Chat gains separately owned webhook route, outbound client, or account setup boundaries with independent validation ownership.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## Current evidence limits

No product tests/builds/graph indexes were run while deepening this leaf. The map is based on repo-native structural inspection of Synology Chat source and colocated tests.
