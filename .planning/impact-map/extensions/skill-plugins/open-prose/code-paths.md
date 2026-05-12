# open-prose Skill Plugin Code Paths

Coverage: `partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Path                       | Trace start                                  | Likely downstream impact                                             |
| -------------------------- | -------------------------------------------- | -------------------------------------------------------------------- |
| Manifest to plugin catalog | `extensions/open-prose/openclaw.plugin.json` | Plugin discovery, config schema, UI hints, skills/tool availability. |
| Entrypoint to runtime      | `extensions/open-prose/index.ts`             | Plugin loader/runtime contracts and package staging.                 |

## Trace rule

Start with repo-native `rg`/LSP/file inspection. Use GitNexus or code-review-graph only when the relevant slice has fresh indexed coverage recorded in `.planning/tools/GRAPH-COVERAGE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `2` changed path(s) to this final leaf. `2` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 1, 'A': 1}`.

- `extensions/open-prose/package.json`
- `extensions/open-prose/tsconfig.json`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `extensions/open-prose/openclaw.plugin.json`
- `extensions/open-prose/package.json`
<!-- version-diff-refresh:v2026.5.4:end -->
