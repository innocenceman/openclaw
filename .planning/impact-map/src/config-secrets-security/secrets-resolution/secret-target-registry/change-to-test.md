# Secret Target Registry Change-to-Test Ladder

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

1. Run `pnpm test -- src/secrets/target-registry.test.ts src/secrets/target-registry-pattern.test.ts`.
2. Run command target tests when registry entries affect CLI command resolution.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `7` (修改 4，新增 3).
- Target-existing path refs in active map: `7`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
