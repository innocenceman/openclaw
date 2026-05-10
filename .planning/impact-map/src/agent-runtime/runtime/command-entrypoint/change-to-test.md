# Command Entrypoint Change-to-Test Ladder

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 remaining runtime verified wave

1. For entrypoint or flag behavior, run `pnpm test -- src/commands/agent.test.ts src/commands/agent-via-gateway.test.ts`.
2. For gateway boot handoff changes, also run targeted gateway boot/server tests.
3. Run `pnpm build` when public CLI wiring or bundled output can change.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `516` (重命名/移动 25，新增 222，修改 241，删除 28).
- Target-existing path refs in active map: `478`; deleted/renamed-away refs kept only in transition artifacts: `38`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
