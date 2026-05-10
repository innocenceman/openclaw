# OpenRouter Provider Plugin

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

## Scope

Bundled provider plugin `extensions/openrouter/` registering provider id `openrouter` with API-key auth, dynamic model capabilities, provider-routing injection, and catalog helpers.

## Why this remains one leaf

OpenRouter remains one leaf because dynamic model resolution, auth, routing wrappers, and provider catalog all ship from one small plugin package `@openclaw/openrouter-provider`.

## Entry contracts

- Plugin id and provider id: `openrouter` from `extensions/openrouter/openclaw.plugin.json` and `index.ts`.
- Package/install contract: `@openclaw/openrouter-provider` from `extensions/openrouter/package.json`.
- Loader boundary: `extensions/openrouter/index.ts` registers auth, catalog, dynamic model preparation, transport wrappers, and cache-TTL eligibility.

## Primary behavior surfaces

- `extensions/openrouter/index.ts`: API-key auth, dynamic model building, capability prefetch, provider routing injection, OpenRouter wrappers, and cache-TTL eligibility.
- `extensions/openrouter/onboard.ts`: config defaults and onboarding model selection helpers.
- `extensions/openrouter/provider-catalog.ts`: base provider catalog entries and default model metadata.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## Current validation state

This map was deepened from repo-native source and test-path inspection only. No product code was modified, and no product tests/builds were run during this documentation pass.

## 2026-05-08 P0 original wave evidence

Decision: `validated-deep-partial`.

Reason: GN-STALE + CRG-STALE; OpenRouter tests passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-VERIFIED-WAVE.md` and validation logs `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/extensions-openrouter.log`.

No product source was changed during this wave.

## 2026-05-08 P0 refresh-to-verified evidence

Decision: `verified`.

Reason: GitNexus and code-review-graph are fresh; OpenRouter provider tests passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-REFRESH-TO-VERIFIED.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/gitnexus-refresh.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/code-review-graph-refresh.md`.

No product source was changed during this refresh pass.
