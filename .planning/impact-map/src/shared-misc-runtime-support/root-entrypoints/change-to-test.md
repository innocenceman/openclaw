# Root Entrypoints Change-to-Test Ladder

Coverage: `verified`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

1. Run targeted colocated tests such as `pnpm test -- src/entry.test.ts src/index.test.ts src/version.test.ts src/polls.test.ts`.
2. Run `pnpm build` when root exports, runtime entrypoints, or package output can change.

## 2026-05-09 validation result

Result: `verified`. Root entrypoint/docker metadata tests passed.

Raw logs live under `../../evidence/src-capabilities-shared-verified-wave-2026-05-09/logs/`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `11` (修改 10，新增 1).
- Target-existing path refs in active map: `11`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/entry.compile-cache.test.ts`
- `src/entry.compile-cache.ts`
- `src/entry.respawn.test.ts`
- `src/entry.respawn.ts`
- `src/entry.test.ts`
- `src/entry.ts`
- `src/extensionAPI.ts`
- `src/index.ts`
- `src/library.test.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
