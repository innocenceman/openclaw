# moonshot Provider Plugin Change-to-Test Matrix

Coverage: `partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Change type                             | First validation                                                        | Escalation trigger                                                          |
| --------------------------------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Provider manifest/auth metadata changed | `pnpm test:contracts:plugins` plus provider auth/catalog contract tests | Escalate to docs/UI settings sync if user-facing labels or env vars change. |
| Provider runtime behavior changed       | `pnpm test -- extensions/moonshot` or nearest provider test             | `pnpm test:extensions` when shared provider helpers are touched.            |
| Package/build surface changed           | `pnpm build` when published or lazy-loaded surface changes              | Run plugin release checks if package metadata changes.                      |

## Validation evidence

No product tests/builds/graph indexes were run while creating this leaf. Add dated command output before promoting beyond `partial`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `21` (删除 4，新增 8，修改 9).
- Target-existing path refs in active map: `17`; deleted/renamed-away refs kept only in transition artifacts: `4`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `extensions/moonshot/index.test.ts`
- `extensions/moonshot/media-understanding-provider.test.ts`
- `extensions/moonshot/media-understanding-provider.ts`
- `extensions/moonshot/moonshot.live.test.ts`
- `extensions/moonshot/onboard.ts`
- `extensions/moonshot/openclaw.plugin.json`
- `extensions/moonshot/package.json`
- `extensions/moonshot/provider-catalog.ts`
- `extensions/moonshot/provider-discovery.ts`
- `extensions/moonshot/src/kimi-web-search-provider.runtime.ts`
- `extensions/moonshot/src/kimi-web-search-provider.test.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
