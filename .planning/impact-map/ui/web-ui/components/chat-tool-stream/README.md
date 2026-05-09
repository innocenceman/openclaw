# Web Chat and Tool Streaming

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 GitNexus/code-review-graph bounded slice plus targeted UI validation

## Scope

Chat send/abort/queue, markdown/model refs, tool stream display, assistant identity, scroll behavior.

## Leaf status

G007 passed `pnpm ui:build` and `pnpm lint:ui:no-raw-window-open`; `pnpm --dir ui test` executed 535 passing tests but exited 1 because Vitest reported unhandled gateway mock and loopback `EPERM` errors. Raw logs are recorded under `evidence/apps-ui-verified-wave-2026-05-09/logs/`.

## Detail files

- `file-roles.md`: concrete path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.
