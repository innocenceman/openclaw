# Web Chat and Tool Streaming Change-to-Test

Coverage: `exceptioned-deep-partial`

1. Run the closest `ui/src/ui/*test.ts` file for the changed helper/controller/view.
2. Run `pnpm --dir ui test` for unit/browser/node coverage.
3. Run `pnpm ui:build` for Vite/package compile.
4. Run `pnpm lint:ui:no-raw-window-open` when browser navigation/external URL behavior changes.
