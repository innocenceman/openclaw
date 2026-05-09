# Ollama Provider Plugin

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

## Scope

Bundled provider plugin `extensions/ollama/` registering provider id `ollama` with local/custom auth, discovery, wizard setup, and model-pull hooks backed by `openclaw/plugin-sdk/ollama-setup`.

## Why this remains one leaf

Ollama has very few local files, but auth, discovery, onboarding, and on-model-selected behavior are all concentrated in one plugin package `@openclaw/ollama-provider`.

## Entry contracts

- Plugin id and provider id: `ollama` from `extensions/ollama/openclaw.plugin.json` and `index.ts`.
- Package/install contract: `@openclaw/ollama-provider` from `extensions/ollama/package.json`.
- Loader boundary: `extensions/ollama/index.ts` registers the local auth method, discovery, wizard setup/model picker, and model pull hook.

## Primary behavior surfaces

- `extensions/ollama/index.ts`: dynamic import of `openclaw/plugin-sdk/ollama-setup`, local auth method, discovery fallback, wizard metadata, and `onModelSelected` pull behavior.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## Current validation state

This map was deepened from repo-native source and test-path inspection only. No product code was modified, and no product tests/builds were run during this documentation pass.

## 2026-05-08 P0 original wave evidence

Decision: `validated-deep-partial`.

Reason: GN-STALE + CRG-STALE; Ollama tests passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-VERIFIED-WAVE.md` and validation logs `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/extensions-ollama.log`.

No product source was changed during this wave.

## 2026-05-08 P0 refresh-to-verified evidence

Decision: `verified`.

Reason: GitNexus and code-review-graph are fresh; Ollama provider tests passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-REFRESH-TO-VERIFIED.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/gitnexus-refresh.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/code-review-graph-refresh.md`.

No product source was changed during this refresh pass.
