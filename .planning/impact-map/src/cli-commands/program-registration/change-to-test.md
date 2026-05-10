# Program Registration Change-to-Test

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

| Change scope            | First validation                                                                                                                      | Escalation trigger                                                           | Notes                    |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------ |
| `program-registration/` | pnpm test -- src/cli/program/build-program.test.ts src/cli/program.smoke.test.ts src/cli/argv.test.ts src/cli/command-options.test.ts | Run pnpm build when CLI exports/build output or lazy-load boundaries change. | Priority completion unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `60` (修改 45，新增 15).
- Target-existing path refs in active map: `60`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
