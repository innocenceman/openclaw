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
