# acpx Skill Plugin Code Paths

Coverage: `partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Path                       | Trace start                            | Likely downstream impact                                             |
| -------------------------- | -------------------------------------- | -------------------------------------------------------------------- |
| Manifest to plugin catalog | `extensions/acpx/openclaw.plugin.json` | Plugin discovery, config schema, UI hints, skills/tool availability. |
| Entrypoint to runtime      | `extensions/acpx/index.ts`             | Plugin loader/runtime contracts and package staging.                 |

## Trace rule

Start with repo-native `rg`/LSP/file inspection. Use GitNexus or code-review-graph only when the relevant slice has fresh indexed coverage recorded in `.planning/tools/GRAPH-COVERAGE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `41` changed path(s) to this final leaf. `27` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 13, 'R': 1, 'M': 13, 'D': 14}`.

- `extensions/acpx/AGENTS.md`
- `extensions/acpx/CLAUDE.md`
- `extensions/acpx/index.test.ts`
- `extensions/acpx/index.ts`
- `extensions/acpx/openclaw.plugin.json`
- `extensions/acpx/package.json`
- `extensions/acpx/register.runtime.ts`
- `extensions/acpx/runtime-api.ts`
- `extensions/acpx/setup-api.ts`
- `extensions/acpx/skills/acp-router/SKILL.md`
- `extensions/acpx/src/acpx-runtime-compat.d.ts`
- `extensions/acpx/src/codex-auth-bridge.test.ts`
- `extensions/acpx/src/codex-auth-bridge.ts`
- `extensions/acpx/src/config-schema.ts`
- `extensions/acpx/src/config.test.ts`
- `extensions/acpx/src/config.ts`
- `extensions/acpx/src/manifest.test.ts`
- `extensions/acpx/src/runtime-internals/error-format.mjs`
- `extensions/acpx/src/runtime-internals/mcp-command-line.mjs`
- `extensions/acpx/src/runtime-internals/mcp-command-line.test.ts`
- `extensions/acpx/src/runtime-internals/mcp-proxy.mjs`
- `extensions/acpx/src/runtime-internals/mcp-proxy.test.ts`
- `extensions/acpx/src/runtime.test.ts`
- `extensions/acpx/src/runtime.ts`
- `extensions/acpx/src/service.test.ts`
- `extensions/acpx/src/service.ts`
- `extensions/acpx/tsconfig.json`

<!-- version-diff-refresh:v2026.4.24:end -->
