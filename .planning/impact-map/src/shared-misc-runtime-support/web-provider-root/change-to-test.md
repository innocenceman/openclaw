# Web Provider Root Change-to-Test Ladder

Coverage: `verified`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

1. Run targeted web/channel registry tests when these files change.
2. Run channel abstraction or plugin/provider tests if the registry surface changes runtime behavior.

## 2026-05-09 validation result

Result: `verified`. Web provider/root registry tests passed.

Raw logs live under `../../evidence/src-capabilities-shared-verified-wave-2026-05-09/logs/`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `9` (修改 3，新增 6).
- Target-existing path refs in active map: `9`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/web-fetch/content-extractors.runtime.ts`
- `src/web-fetch/runtime.test.ts`
- `src/web-fetch/runtime.ts`
- `src/web-search/runtime-types.ts`
- `src/web-search/runtime.test.ts`
- `src/web-search/runtime.ts`
- `src/web/provider-runtime-shared.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
