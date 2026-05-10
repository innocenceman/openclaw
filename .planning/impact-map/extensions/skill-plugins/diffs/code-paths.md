# diffs Skill Plugin Code Paths

Coverage: `partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Path                       | Trace start                             | Likely downstream impact                                             |
| -------------------------- | --------------------------------------- | -------------------------------------------------------------------- |
| Manifest to plugin catalog | `extensions/diffs/openclaw.plugin.json` | Plugin discovery, config schema, UI hints, skills/tool availability. |
| Entrypoint to runtime      | `extensions/diffs/index.ts`             | Plugin loader/runtime contracts and package staging.                 |

## Trace rule

Start with repo-native `rg`/LSP/file inspection. Use GitNexus or code-review-graph only when the relevant slice has fresh indexed coverage recorded in `.planning/tools/GRAPH-COVERAGE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `30` changed path(s) to this final leaf. `30` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 22, 'A': 8}`.

- `extensions/diffs/README.md`
- `extensions/diffs/assets/viewer-runtime.js`
- `extensions/diffs/index.ts`
- `extensions/diffs/openclaw.plugin.json`
- `extensions/diffs/package.json`
- `extensions/diffs/runtime-api.ts`
- `extensions/diffs/skills/diffs/SKILL.md`
- `extensions/diffs/src/browser.test.ts`
- `extensions/diffs/src/browser.ts`
- `extensions/diffs/src/config.test.ts`
- `extensions/diffs/src/config.ts`
- `extensions/diffs/src/http.ts`
- `extensions/diffs/src/language-hints.test.ts`
- `extensions/diffs/src/language-hints.ts`
- `extensions/diffs/src/plugin.ts`
- `extensions/diffs/src/render-target.test.ts`
- `extensions/diffs/src/render.test.ts`
- `extensions/diffs/src/render.ts`
- `extensions/diffs/src/store.test.ts`
- `extensions/diffs/src/store.ts`
- `extensions/diffs/src/test-helpers.ts`
- `extensions/diffs/src/tool-render-output.test.ts`
- `extensions/diffs/src/tool.test.ts`
- `extensions/diffs/src/tool.ts`
- `extensions/diffs/src/types.ts`
- `extensions/diffs/src/url.ts`
- `extensions/diffs/src/viewer-assets.ts`
- `extensions/diffs/src/viewer-client.ts`
- `extensions/diffs/src/viewer-payload.ts`
- `extensions/diffs/tsconfig.json`

<!-- version-diff-refresh:v2026.4.24:end -->
