# OpenAI Provider Plugin Change-to-Test Matrix

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type                                   | First validation                                                                                                                              | Escalation trigger                                                                                                                                      |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Manifest/auth/provider registration changed   | `pnpm test -- extensions/openai/index.test.ts extensions/openai/openai-provider.test.ts extensions/openai/openai-codex-auth-identity.test.ts` | Add `pnpm test:contracts:plugins` if loader/catalog/auth-choice behavior crosses package boundaries.                                                    |
| Speech/media/image capability changed         | `pnpm test -- extensions/openai/index.test.ts`                                                                                                | Add `pnpm test -- src/media-understanding/image.test.ts src/media-understanding/provider-registry.test.ts` when shared media registry behavior changes. |
| Package/build or lazy runtime surface changed | `pnpm build`                                                                                                                                  | Inspect dynamic import warnings and add package/release checks if published surfaces or runtime boundaries change.                                      |

## Validation evidence

No product tests/builds were run while deepening this leaf. The commands above were selected from current local test files and root `package.json` scripts.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `60` (修改 25，新增 31，重命名/移动 3，删除 1).
- Target-existing path refs in active map: `59`; deleted/renamed-away refs kept only in transition artifacts: `1`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `extensions/openai/base-url.test.ts`
- `extensions/openai/base-url.ts`
- `extensions/openai/cli-backend.ts`
- `extensions/openai/embedding-batch.ts`
- `extensions/openai/embedding-provider.test.ts`
- `extensions/openai/embedding-provider.ts`
- `extensions/openai/image-generation-provider.test.ts`
- `extensions/openai/image-generation-provider.ts`
- `extensions/openai/index.test.ts`
- `extensions/openai/index.ts`
- `extensions/openai/media-understanding-provider.test.ts`
- `extensions/openai/media-understanding-provider.ts`
- `extensions/openai/memory-embedding-adapter.test.ts`
- `extensions/openai/memory-embedding-adapter.ts`
- `extensions/openai/native-web-search.ts`
- `extensions/openai/openai-codex-auth-identity.test.ts`
- `extensions/openai/openai-codex-auth-identity.ts`
- `extensions/openai/openai-codex-catalog.ts`
- `extensions/openai/openai-codex-device-code.test.ts`
- `extensions/openai/openai-codex-device-code.ts`
- `extensions/openai/openai-codex-provider.runtime.ts`
- `extensions/openai/openai-codex-provider.test.ts`
- `extensions/openai/openai-codex-provider.ts`
- `extensions/openai/openai-provider.live.test.ts`
- `extensions/openai/openai-provider.test.ts`
- `extensions/openai/openai-provider.ts`
- `extensions/openai/openai-tts.live.test.ts`
- `extensions/openai/openai.live.test.ts`
- `extensions/openai/openclaw.plugin.json`
- `extensions/openai/openclaw.plugin.test.ts`
- `extensions/openai/package.json`
- `extensions/openai/plugin-registration.contract.test.ts`
- `extensions/openai/prompt-overlay.ts`
- `extensions/openai/provider-auth.contract.test.ts`
- `extensions/openai/provider-policy-api.ts`
- `extensions/openai/provider-runtime.contract.test.ts`
- `extensions/openai/realtime-transcription-provider.test.ts`
- `extensions/openai/realtime-transcription-provider.ts`
- `extensions/openai/realtime-voice-provider.test.ts`
- `extensions/openai/realtime-voice-provider.ts`
- … plus 11 more target-existing changed paths.
<!-- version-diff-refresh:v2026.5.4:end -->
