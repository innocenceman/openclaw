# Web App Shell and Lifecycle Change-to-Test

Coverage: `exceptioned-deep-partial`

1. Run the closest `ui/src/ui/*test.ts` file for the changed helper/controller/view.
2. Run `pnpm --dir ui test` for unit/browser/node coverage.
3. Run `pnpm ui:build` for Vite/package compile.
4. Run `pnpm lint:ui:no-raw-window-open` when browser navigation/external URL behavior changes.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `53` (修改 31，新增 17，删除 5).
- Target-existing path refs in active map: `48`; deleted/renamed-away refs kept only in transition artifacts: `5`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
