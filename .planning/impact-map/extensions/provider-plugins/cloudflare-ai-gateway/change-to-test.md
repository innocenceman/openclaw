# cloudflare-ai-gateway Provider Plugin Change-to-Test Matrix

Coverage: `partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Change type                             | First validation                                                         | Escalation trigger                                                          |
| --------------------------------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| Provider manifest/auth metadata changed | `pnpm test:contracts:plugins` plus provider auth/catalog contract tests  | Escalate to docs/UI settings sync if user-facing labels or env vars change. |
| Provider runtime behavior changed       | `pnpm test -- extensions/cloudflare-ai-gateway` or nearest provider test | `pnpm test:extensions` when shared provider helpers are touched.            |
| Package/build surface changed           | `pnpm build` when published or lazy-loaded surface changes               | Run plugin release checks if package metadata changes.                      |

## Validation evidence

No product tests/builds/graph indexes were run while creating this leaf. Add dated command output before promoting beyond `partial`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `8` (修改 5，新增 2，删除 1).
- Target-existing path refs in active map: `7`; deleted/renamed-away refs kept only in transition artifacts: `1`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `extensions/cloudflare-ai-gateway/catalog-provider.ts`
- `extensions/cloudflare-ai-gateway/index.test.ts`
- `extensions/cloudflare-ai-gateway/index.ts`
- `extensions/cloudflare-ai-gateway/openclaw.plugin.json`
- `extensions/cloudflare-ai-gateway/package.json`
- `extensions/cloudflare-ai-gateway/provider-discovery.contract.test.ts`
- `extensions/cloudflare-ai-gateway/stream-wrappers.test.ts`
- `extensions/cloudflare-ai-gateway/stream-wrappers.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
