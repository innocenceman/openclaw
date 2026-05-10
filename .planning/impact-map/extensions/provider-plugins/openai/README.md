# OpenAI Provider Plugin

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

## Scope

Bundled provider plugin `extensions/openai/` registering provider ids `openai` and `openai-codex`, plus OpenAI speech, media-understanding, and image-generation capabilities.

## Why this remains one leaf

OpenAI ships multiple behavior surfaces from one package, but the install and ownership boundary is still a single plugin package `@openclaw/openai-provider` with one manifest and one entrypoint.

## Entry contracts

- Plugin id: `openai` from `extensions/openai/openclaw.plugin.json`.
- Provider ids: `openai`, `openai-codex` from the same manifest and `index.ts` registration path.
- Package/install contract: `@openclaw/openai-provider` from `extensions/openai/package.json`.
- Loader boundary: `extensions/openai/index.ts` registers provider, speech, media-understanding, and image-generation surfaces.

## Primary behavior surfaces

- `extensions/openai/openai-provider.ts`: API-key auth, transport normalization, forward-compat GPT-5.4 model mapping, missing-auth messaging, and catalog augmentation.
- `extensions/openai/openai-codex-provider.ts`: ChatGPT OAuth auth flow, catalog/default model behavior, Codex transport normalization, and OAuth refresh wiring.
- `extensions/openai/openai-codex-provider.runtime.ts` and `openai-codex-auth-identity.ts`: runtime OAuth API-key refresh and stable identity/profile derivation.
- `extensions/openai/image-generation-provider.ts`: OpenAI Images API calls, timeout handling, and PNG response decoding.
- `extensions/openai/media-understanding-provider.ts` and `speech-provider.ts`: audio/image understanding plus TTS/telephony synthesis surfaces.
- `extensions/openai/shared.ts` and `openai-codex-catalog.ts`: provider-shared helpers and Codex base catalog stub.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## Current validation state

This map was deepened from repo-native source and test-path inspection only. No product code was modified, and no product tests/builds were run during this documentation pass.

## 2026-05-08 P0 original wave evidence

Decision: `validated-deep-partial`.

Reason: GN-STALE + CRG-STALE; OpenAI tests passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-VERIFIED-WAVE.md` and validation logs `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/extensions-openai.log`.

No product source was changed during this wave.

## 2026-05-08 P0 refresh-to-verified evidence

Decision: `verified`.

Reason: GitNexus and code-review-graph are fresh; OpenAI provider tests passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-REFRESH-TO-VERIFIED.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/gitnexus-refresh.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/code-review-graph-refresh.md`.

No product source was changed during this refresh pass.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `model-provider-plugins`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `60` (修改 25，新增 31，重命名/移动 3，删除 1).
- Target-existing changed paths listed here: `59`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `1`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `extensions/openai/api.ts`
- `extensions/openai/auth-choice-copy.ts`
- `extensions/openai/base-url.test.ts`
- `extensions/openai/base-url.ts`
- `extensions/openai/cli-backend.ts`
- `extensions/openai/default-models.test.ts`
- `extensions/openai/default-models.ts`
- `extensions/openai/embedding-batch.ts`
- `extensions/openai/embedding-provider.ts`
- `extensions/openai/image-generation-provider.test.ts`
- `extensions/openai/image-generation-provider.ts`
- `extensions/openai/index.test.ts`
- `... 另有 47 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
