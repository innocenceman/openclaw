# Ollama Provider Plugin Change-to-Test Matrix

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type                                          | First validation                                                                                          | Escalation trigger                                                                                              |
| ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Auth/discovery/wizard behavior changed               | `pnpm test -- extensions/ollama/index.test.ts`                                                            | Add `pnpm test:contracts:plugins` if provider registration or wizard metadata changes across plugin boundaries. |
| Auth-choice or onboarding config integration changed | `pnpm test -- src/commands/auth-choice.apply.plugin-provider.test.ts src/commands/onboard-custom.test.ts` | Escalate when non-interactive auth setup or config patch semantics change.                                      |
| Package/build or lazy setup surface changed          | `pnpm build`                                                                                              | Inspect dynamic import warnings because Ollama uses a dedicated runtime setup seam.                             |

## Validation evidence

No product tests/builds were run while deepening this leaf. The commands above were selected from current local test files and root `package.json` scripts.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `34` (修改 13，新增 17，删除 2，重命名/移动 2).
- Target-existing path refs in active map: `32`; deleted/renamed-away refs kept only in transition artifacts: `2`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `extensions/ollama/index.test.ts`
- `extensions/ollama/index.ts`
- `extensions/ollama/ollama.live.test.ts`
- `extensions/ollama/openclaw.plugin.json`
- `extensions/ollama/package.json`
- `extensions/ollama/plugin-registration.contract.test.ts`
- `extensions/ollama/provider-discovery.test.ts`
- `extensions/ollama/provider-discovery.ts`
- `extensions/ollama/src/defaults.ts`
- `extensions/ollama/src/discovery-shared.test.ts`
- `extensions/ollama/src/discovery-shared.ts`
- `extensions/ollama/src/embedding-provider.test.ts`
- `extensions/ollama/src/embedding-provider.ts`
- `extensions/ollama/src/memory-embedding-adapter.ts`
- `extensions/ollama/src/model-id.ts`
- `extensions/ollama/src/provider-base-url.test.ts`
- `extensions/ollama/src/provider-base-url.ts`
- `extensions/ollama/src/provider-models.test.ts`
- `extensions/ollama/src/provider-models.ts`
- `extensions/ollama/src/setup.test.ts`
- `extensions/ollama/src/setup.ts`
- `extensions/ollama/src/stream-runtime.test.ts`
- `extensions/ollama/src/stream.test.ts`
- `extensions/ollama/src/stream.ts`
- `extensions/ollama/src/web-search-provider.test.ts`
- `extensions/ollama/src/web-search-provider.ts`
- `extensions/ollama/src/wsl2-crash-loop-check.test.ts`
- `extensions/ollama/src/wsl2-crash-loop-check.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
