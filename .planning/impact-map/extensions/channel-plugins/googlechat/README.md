# Google Chat Channel Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for the bundled Google Chat channel plugin in `extensions/googlechat/`.

Covers plugin registration, Google service-account credentials, request verification, webhook routing, inbound access/pairing/mention policy, reply pipeline, outbound space/user target resolution, Google Chat API sends/edits/deletes/reactions/uploads/downloads, setup/config/status, and message actions.

## Entry contracts

- Plugin id/channel id: `googlechat`.
- Package/install contract: `@openclaw/googlechat` with `google-auth-library`.
- Loader boundary: `extensions/googlechat/index.ts` registers `googlechatPlugin` and `setGoogleChatRuntime`.

## Primary behavior surfaces

- `extensions/googlechat/src/channel.ts`: plugin composition.
- `extensions/googlechat/src/auth.ts`: access tokens and webhook JWT verification.
- `extensions/googlechat/src/monitor-webhook.ts` and `monitor.ts`: webhook handling and reply pipeline.
- `extensions/googlechat/src/monitor-access.ts`: inbound DM/group access, pairing, and mention policy.
- `extensions/googlechat/src/api.ts`, `targets.ts`, `actions.ts`: Google Chat API calls and outbound/actions.

## Current validation state

Source inspection only; no product code, tests/builds, or graph indexes were run.
