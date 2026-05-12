# Diagnostics OpenTelemetry Plugin Change-to-Test Matrix

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type                             | First validation                                               | Escalation trigger                                                                                |
| --------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Exporter/service behavior changed       | `pnpm test -- extensions/diagnostics-otel/src/service.test.ts` | Add broader telemetry/runtime validation if startup, sampling, or event mapping semantics change. |
| Plugin-SDK seam or local barrel changed | `pnpm test -- test/extension-plugin-sdk-boundary.test.ts`      | Add import-boundary checks if diagnostics helper exports move between public/internal seams.      |
| Package/build surface changed           | `pnpm build`                                                   | Widen to package/release checks if published runtime contents or dependencies change.             |

## Validation evidence

No product tests/builds were run while deepening this leaf. The commands above were selected from current local test files and root `package.json` scripts.
