# Reply Command Registry Families Change-to-Test Ladder

Coverage: `verified`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

1. Run `pnpm test -- src/auto-reply/commands-args.test.ts`.
2. Add/target registry tests when command families or aliases change.
3. Cross-check `reply-orchestration/commands/command-handlers/` for handler dispatch changes.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `11` (修改 7，新增 4).
- Target-existing path refs in active map: `11`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/auto-reply/commands-args.ts`
- `src/auto-reply/commands-registry-list.ts`
- `src/auto-reply/commands-registry.data.ts`
- `src/auto-reply/commands-registry.shared.ts`
- `src/auto-reply/commands-registry.test.ts`
- `src/auto-reply/commands-registry.ts`
- `src/auto-reply/commands-registry.types.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
