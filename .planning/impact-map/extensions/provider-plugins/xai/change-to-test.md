# xai Provider Plugin Change-to-Test Matrix

Coverage: `partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Change type                             | First validation                                                        | Escalation trigger                                                          |
| --------------------------------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Provider manifest/auth metadata changed | `pnpm test:contracts:plugins` plus provider auth/catalog contract tests | Escalate to docs/UI settings sync if user-facing labels or env vars change. |
| Provider runtime behavior changed       | `pnpm test -- extensions/xai` or nearest provider test                  | `pnpm test:extensions` when shared provider helpers are touched.            |
| Package/build surface changed           | `pnpm build` when published or lazy-loaded surface changes              | Run plugin release checks if package metadata changes.                      |

## Validation evidence

No product tests/builds/graph indexes were run while creating this leaf. Add dated command output before promoting beyond `partial`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `60` (新增 35，修改 20，删除 4，重命名/移动 1).
- Target-existing path refs in active map: `56`; deleted/renamed-away refs kept only in transition artifacts: `4`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `extensions/xai/code-execution.test.ts`
- `extensions/xai/code-execution.ts`
- `extensions/xai/image-generation-provider.test.ts`
- `extensions/xai/image-generation-provider.ts`
- `extensions/xai/index.test.ts`
- `extensions/xai/model-definitions.ts`
- `extensions/xai/onboard.test.ts`
- `extensions/xai/onboard.ts`
- `extensions/xai/openclaw.plugin.json`
- `extensions/xai/package.json`
- `extensions/xai/plugin-registration.contract.test.ts`
- `extensions/xai/provider-discovery.ts`
- `extensions/xai/realtime-transcription-provider.ts`
- `extensions/xai/speech-provider.test.ts`
- `extensions/xai/speech-provider.ts`
- `extensions/xai/src/code-execution-shared.ts`
- `extensions/xai/src/responses-tool-shared.test.ts`
- `extensions/xai/src/responses-tool-shared.ts`
- `extensions/xai/src/tool-auth-shared.ts`
- `extensions/xai/src/web-search-provider.runtime.ts`
- `extensions/xai/src/web-search-response.types.ts`
- `extensions/xai/src/web-search-shared.ts`
- `extensions/xai/src/x-search-config.ts`
- `extensions/xai/src/x-search-shared.ts`
- `extensions/xai/stream.ts`
- `extensions/xai/test-helpers.ts`
- `extensions/xai/tsconfig.json`
- `extensions/xai/video-generation-provider.test.ts`
- `extensions/xai/video-generation-provider.ts`
- `extensions/xai/web-search.test.ts`
- `extensions/xai/x-search.live.test.ts`
- `extensions/xai/x-search.test.ts`
- `extensions/xai/x-search.ts`
- `extensions/xai/xai.live.test.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
