# github-copilot Provider Plugin Change-to-Test Matrix

Coverage: `partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Change type                             | First validation                                                        | Escalation trigger                                                          |
| --------------------------------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Provider manifest/auth metadata changed | `pnpm test:contracts:plugins` plus provider auth/catalog contract tests | Escalate to docs/UI settings sync if user-facing labels or env vars change. |
| Provider runtime behavior changed       | `pnpm test -- extensions/github-copilot` or nearest provider test       | `pnpm test:extensions` when shared provider helpers are touched.            |
| Package/build surface changed           | `pnpm build` when published or lazy-loaded surface changes              | Run plugin release checks if package metadata changes.                      |

## Validation evidence

No product tests/builds/graph indexes were run while creating this leaf. Add dated command output before promoting beyond `partial`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `25` (新增 13，修改 11，删除 1).
- Target-existing path refs in active map: `24`; deleted/renamed-away refs kept only in transition artifacts: `1`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `extensions/github-copilot/auth.test.ts`
- `extensions/github-copilot/auth.ts`
- `extensions/github-copilot/connection-bound-ids.live.test.ts`
- `extensions/github-copilot/connection-bound-ids.test.ts`
- `extensions/github-copilot/connection-bound-ids.ts`
- `extensions/github-copilot/embeddings.test.ts`
- `extensions/github-copilot/embeddings.ts`
- `extensions/github-copilot/index.test.ts`
- `extensions/github-copilot/index.ts`
- `extensions/github-copilot/login.ts`
- `extensions/github-copilot/models-defaults.ts`
- `extensions/github-copilot/models.test.ts`
- `extensions/github-copilot/models.ts`
- `extensions/github-copilot/openclaw.plugin.json`
- `extensions/github-copilot/package.json`
- `extensions/github-copilot/provider-auth.contract.test.ts`
- `extensions/github-copilot/provider-discovery.contract.test.ts`
- `extensions/github-copilot/provider-runtime.contract.test.ts`
- `extensions/github-copilot/stream.test.ts`
- `extensions/github-copilot/token.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
