# OpenRouter Provider Plugin Change-to-Test Matrix

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type                                         | First validation                                   | Escalation trigger                                                                                   |
| --------------------------------------------------- | -------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Provider auth, catalog, or wrapper behavior changed | `pnpm test -- extensions/openrouter/index.test.ts` | Add `pnpm test:contracts:plugins` if provider registration/catalog shape crosses package boundaries. |
| Package/build surface changed                       | `pnpm build`                                       | Inspect dynamic import warnings and widen to package/release checks if published surfaces change.    |

## Validation evidence

No product tests/builds were run while deepening this leaf. The commands above were selected from current local test files and root `package.json` scripts.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `21` (修改 9，新增 10，删除 2).
- Target-existing path refs in active map: `19`; deleted/renamed-away refs kept only in transition artifacts: `2`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
