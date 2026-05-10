# Anthropic Provider Plugin

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

## Scope

Bundled provider plugin `extensions/anthropic/` registering provider id `anthropic` with setup-token and API-key auth plus image media-understanding support.

## Why this remains one leaf

Anthropic keeps its main behavior in one entrypoint file, but the single manifest/package/entrypoint boundary is still the smallest reliable owner for auth, model aliasing, and media registration.

## Entry contracts

- Plugin id and provider id: `anthropic` from `extensions/anthropic/openclaw.plugin.json`.
- Package/install contract: `@openclaw/anthropic-provider` from `extensions/anthropic/package.json`.
- Loader boundary: `extensions/anthropic/index.ts` registers auth methods, provider capabilities, and the media-understanding provider.

## Primary behavior surfaces

- `extensions/anthropic/index.ts`: setup-token and API-key auth, profile repair hints, forward-compat model aliasing, provider family capability flags, and media registration.
- `extensions/anthropic/media-understanding-provider.ts`: image-description provider registration for Anthropic media support.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## Current validation state

This map was deepened from repo-native source and test-path inspection only. No product code was modified, and no product tests/builds were run during this documentation pass.

## 2026-05-08 P0 original wave evidence

Decision: `validated-deep-partial`.

Reason: GN-STALE + CRG-STALE; Anthropic-related command/contract tests passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-VERIFIED-WAVE.md` and validation logs `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/extensions-anthropic.log`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/test-contracts-plugins.log`.

No product source was changed during this wave.

## 2026-05-08 P0 refresh-to-verified evidence

Decision: `verified`.

Reason: GitNexus and code-review-graph are fresh; Anthropic-related command/contract tests passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-REFRESH-TO-VERIFIED.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/gitnexus-refresh.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/code-review-graph-refresh.md`.

No product source was changed during this refresh pass.
