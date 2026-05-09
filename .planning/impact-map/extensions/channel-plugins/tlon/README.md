# tlon Channel Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for the Tlon/Urbit channel plugin under `extensions/tlon/`.

## Entry contracts

- `extensions/tlon/openclaw.plugin.json` declares plugin id `tlon`, channel id `tlon`, and bundled skill `node_modules/@tloncorp/tlon-skill`.
- `extensions/tlon/package.json` publishes `@openclaw/tlon`, advertises docs at `/channels/tlon`, and keeps Urbit/Tlon/S3 runtime dependencies local to the plugin.
- `extensions/tlon/index.ts` registers `tlonPlugin`, runtime setter, and an allowlisted `tlon` CLI tool wrapper.
- `extensions/tlon/setup-entry.ts`, `setup-api.ts`, `api.ts`, and `runtime-api.ts` expose setup/runtime-facing surfaces.

## Primary behavior surfaces

- Setup/config/accounts: `src/setup-core.ts`, `src/setup-surface.ts`, `src/config-schema.ts`, `src/types.ts`, `src/account-fields.ts`, and `src/settings.ts`.
- Channel adapter/runtime: `src/channel.ts`, `src/channel.runtime.ts`, `src/runtime.ts`, `src/session-route.ts`, and `src/targets.ts`.
- Monitor/runtime: `src/monitor/**` for authorization, approvals, history, discovery, cites, media, settings helpers, and processed-message tracking.
- Urbit API: `src/urbit/**` for base URL validation, auth, fetch/context, SSE, sends, uploads, story/channel ops, foreigns, and errors.
- Tooling: `index.ts` CLI allowlist and shell-split/run wrapper for `@tloncorp/tlon-skill`.

## Leaf status

This is a leaf module in the channel-plugin taxonomy. Split further only if Tlon gains independently owned Urbit API, monitor authorization, or CLI-tool surfaces with distinct validation ownership.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## Current evidence limits

No product tests/builds/graph indexes were run while deepening this leaf. The map is based on repo-native structural inspection of Tlon source and colocated tests.
