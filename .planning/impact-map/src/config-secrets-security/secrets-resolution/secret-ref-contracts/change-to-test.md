# Secret Ref Contracts Change-to-Test Ladder

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

1. Run `pnpm test -- src/config/config.secrets-schema.test.ts src/secrets/ref-contract.test.ts src/secrets/resolve.test.ts`.
2. Run command-secret tests when input contracts affect CLI resolution.
3. Run `pnpm build` if exported config/schema surfaces change.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `7` (新增 1，修改 6).
- Target-existing path refs in active map: `7`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
