# Docs and Mintlify

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 GitNexus/code-review-graph bounded slice plus targeted docs/script checks

## Scope

Mintlify-hosted docs content, locale control planes, shared assets/images, root routing/nav config, and the category-level docs families rooted in `docs/`.

## Observed facts

- Wave 4 inspection found 732 files across the Mintlify-owned category leaves tracked from this subtree.
- `docs/docs.json` and `docs/nav-tabs-underline.js` are shared root surfaces for public docs routing and frontend behavior.
- Priority leaves for Wave 4 are the generated/i18n planes plus docs families with the highest operator/runtime drift risk: automation, channels, CLI, gateway, install, plugins, providers, reference, security, web, and generated zh-CN output.
- Residual leaves (assets, concepts, debug, diagnostics, help, images, ja-JP, nodes, platforms, start, tools) are now explicit `exceptioned-deep-partial` rows, so no row remains silently `stub`, `partial`, or `deep-partial` in this G008 scope.

## Submodules

| Submodule              | Coverage                   | Source docs path   | Primary risk                                                    |
| ---------------------- | -------------------------- | ------------------ | --------------------------------------------------------------- |
| Generated artifacts    | `exceptioned-deep-partial` | `docs/.generated/` | checked-in baseline drift for config docs and public SDK state  |
| i18n control plane     | `exceptioned-deep-partial` | `docs/.i18n/`      | glossary/TM drift before locale regeneration                    |
| Public docs categories | mixed                      | `docs/<category>/` | route/link/nav drift or stale operator guidance                 |
| Generated zh-CN docs   | `exceptioned-deep-partial` | `docs/zh-CN/`      | generated locale output drifting from English source + glossary |

## Validation status

This closure group is `exceptioned-deep-partial`, not `verified`: G008 ran docs links, glossary, and formatting checks, but markdownlint dlx and Mintlify render remain unavailable and no translation rerun was performed.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `docs-generated-baselines`.
- Risk: `medium`.
- Compatibility: `docs-only`.
- Changed paths in this leaf: `27` (修改 18，新增 8，重命名/移动 1).
- Target-existing changed paths listed here: `27`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `AGENTS.md`
- `CHANGELOG.md`
- `CONTRIBUTING.md`
- `README.md`
- `docs/AGENTS.md`
- `docs/CLAUDE.md`
- `docs/auth-credential-semantics.md`
- `docs/brave-search.md`
- `docs/ci.md`
- `docs/date-time.md`
- `docs/index.md`
- `docs/logging.md`
- `... 另有 15 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `docs-generated-baselines`
- Risk: `medium`
- Compatibility: `docs-only`
- Coverage: `fallback`
- Changed paths in diff: `17`
- Target-existing changed paths reflected here: `15`
- Deleted or renamed-away paths omitted from active impact-map: `2`

### Target-version changed paths

- `AGENTS.md`
- `CHANGELOG.md`
- `CONTRIBUTING.md`
- `README.md`
- `docs/auth-credential-semantics.md`
- `docs/brave-search.md`
- `docs/ci.md`
- `docs/logging.md`
- `docs/pi-dev.md`
- `docs/pi.md`
- `docs/plan/codex-context-engine-harness.md`
- `docs/plan/ui-channels.md`
- `docs/snippets/plugin-publish/minimal-openclaw.plugin.json`
- `docs/superpowers/specs/2026-04-22-tweakcn-custom-theme-import-design.md`
- `docs/vps.md`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
