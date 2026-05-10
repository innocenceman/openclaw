# Diagnostics OpenTelemetry Plugin Change-to-Test Matrix

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type                       | First validation                                               | Escalation trigger                                                                                |
| --------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Exporter/service behavior changed | `pnpm test -- extensions/diagnostics-otel/src/service.test.ts` | Add broader telemetry/runtime validation if startup, sampling, or event mapping semantics change. |
| Package/build surface changed     | `pnpm build`                                                   | Widen to package/release checks if published runtime contents or dependencies change.             |

## Validation evidence

No product tests/builds were run while deepening this leaf. The commands above were selected from current local test files and root `package.json` scripts.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `4` (修改 3，新增 1).
- Target-existing path refs in active map: `4`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
