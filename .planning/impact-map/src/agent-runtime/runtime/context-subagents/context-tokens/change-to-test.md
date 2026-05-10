# Context Tokens Change-to-Test Ladder

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime verified wave

1. Run `pnpm test -- src/agents/context.test.ts src/agents/context.lookup.test.ts src/agents/context-window-guard.test.ts`.
2. Escalate to reply/runtime tests when context or child-session state affects parent/child message flow.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `8` (新增 2，删除 1，修改 5).
- Target-existing path refs in active map: `7`; deleted/renamed-away refs kept only in transition artifacts: `1`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
