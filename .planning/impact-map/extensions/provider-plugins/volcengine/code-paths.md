# volcengine Provider Plugin Code Paths

Coverage: `partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Path                           | Trace start                                               | Likely downstream impact                                       |
| ------------------------------ | --------------------------------------------------------- | -------------------------------------------------------------- |
| Manifest to provider catalog   | `extensions/volcengine/openclaw.plugin.json`              | Provider lists, auth choices, onboarding, config docs/UI sync. |
| Entrypoint to provider runtime | `extensions/volcengine/index.ts`                          | Provider registry, model catalog, auth method behavior.        |
| Auth/config path               | `extensions/volcengine/index.ts` and manifest auth fields | Secrets, env vars, setup prompts, provider status.             |

## Trace rule

Start with repo-native `rg`/LSP/file inspection. Use GitNexus or code-review-graph only when the relevant slice has fresh indexed coverage recorded in `.planning/tools/GRAPH-COVERAGE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `9` changed path(s) to this final leaf. `8` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 3, 'M': 5, 'D': 1}`.

- `extensions/volcengine/index.test.ts`
- `extensions/volcengine/index.ts`
- `extensions/volcengine/models.ts`
- `extensions/volcengine/openclaw.plugin.json`
- `extensions/volcengine/package.json`
- `extensions/volcengine/provider-catalog.ts`
- `extensions/volcengine/provider-discovery.ts`
- `extensions/volcengine/tsconfig.json`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `extensions/volcengine/index.test.ts`
- `extensions/volcengine/index.ts`
- `extensions/volcengine/models.ts`
- `extensions/volcengine/openclaw.plugin.json`
- `extensions/volcengine/package.json`
- `extensions/volcengine/provider-catalog.ts`
- `extensions/volcengine/provider-discovery.ts`
- `extensions/volcengine/speech-provider.ts`
- `extensions/volcengine/tts.live.test.ts`
- `extensions/volcengine/tts.test.ts`
- `extensions/volcengine/tts.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
