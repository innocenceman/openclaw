# Config Io Change-to-Test

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Change scope | First validation                                                                                                                          | Escalation trigger                                                                | Notes                 |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------- |
| `config-io/` | pnpm test -- src/config/io.write-config.test.ts src/config/includes.test.ts src/config/paths.test.ts src/config/runtime-overrides.test.ts | Escalate to build/docs checks when config file shape or generated outputs change. | Residual Wave 1R unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `160` (重命名/移动 4，修改 79，新增 53，删除 24).
- Target-existing path refs in active map: `132`; deleted/renamed-away refs kept only in transition artifacts: `28`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
