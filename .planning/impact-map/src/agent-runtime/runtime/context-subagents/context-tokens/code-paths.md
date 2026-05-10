# Context Tokens Code Paths

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime verified wave

- Primary paths: `src/agents/context*.ts`, `src/agents/context-*.ts`
- Runtime handoff: context/subagent metadata is resolved before runtime execution, reply flows, or child-session lifecycle consumers continue.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `8` changed path(s) to this final leaf. `7` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 2, 'D': 1, 'M': 5}`.

- `src/agents/context-runtime-state.ts`
- `src/agents/context-window-guard.test.ts`
- `src/agents/context-window-guard.ts`
- `src/agents/context.eager-warmup.test.ts`
- `src/agents/context.lookup.test.ts`
- `src/agents/context.test.ts`
- `src/agents/context.ts`

<!-- version-diff-refresh:v2026.4.24:end -->
