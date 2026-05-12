# Secret Storage Audit Change-to-Test Ladder

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

1. Run `pnpm test -- src/secrets/apply.test.ts src/secrets/audit.test.ts src/secrets/configure.test.ts src/secrets/path-utils.test.ts`.
2. Run doctor/config tests when storage repair or config IO behavior changes.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `12` (修改 12).
- Target-existing path refs in active map: `12`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/secrets/apply.test.ts`
- `src/secrets/apply.ts`
- `src/secrets/auth-store-paths.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
