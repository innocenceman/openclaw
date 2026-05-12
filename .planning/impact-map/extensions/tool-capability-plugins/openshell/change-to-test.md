# openshell Other Config or Tool Plugin Change-to-Test Matrix

Coverage: `partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Change type                    | First validation                                                | Escalation trigger                                         |
| ------------------------------ | --------------------------------------------------------------- | ---------------------------------------------------------- |
| Manifest/config changed        | `pnpm test:contracts:plugins` and affected plugin catalog tests | Escalate to docs/UI/config checks for user-facing changes. |
| Runtime implementation changed | `pnpm test -- extensions/openshell` or nearest targeted test    | `pnpm test:extensions` when shared helpers are touched.    |
| Package/build surface changed  | `pnpm build` when published or lazy-loaded surface changes      | Run plugin release checks if package metadata changes.     |

## Validation evidence

No product tests/builds/graph indexes were run while creating this leaf. Add dated command output before promoting beyond `partial`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `14` (修改 9，新增 4，删除 1).
- Target-existing path refs in active map: `13`; deleted/renamed-away refs kept only in transition artifacts: `1`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `extensions/openshell/openclaw.plugin.json`
- `extensions/openshell/package.json`
- `extensions/openshell/src/backend.e2e.test.ts`
- `extensions/openshell/src/config.ts`
- `extensions/openshell/src/fs-bridge.ts`
- `extensions/openshell/src/mirror.test.ts`
- `extensions/openshell/src/openshell-core.test.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
