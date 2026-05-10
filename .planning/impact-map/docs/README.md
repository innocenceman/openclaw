# Documentation Impact Map

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 GitNexus/code-review-graph bounded slice plus targeted docs/script checks

This module maps docs ownership, generated baselines, locale control planes, and provider/channel/settings documentation sync under `docs/`.

## Repo-native evidence snapshot

Inspected without product builds or translation reruns:

- `find docs -maxdepth 2` to inventory major docs families, generated artifacts, and locale trees.
- `node -e` package-script inspection for docs checks, glossary guards, and baseline generators.
- `rg` scans for generated baseline scripts, Mintlify config, release policy docs, and provider/channel settings anchors.

Observed facts:

- `docs/docs.json` is the Mintlify routing/nav shell for the public docs site.
- `docs/.generated` contains checked-in config and Plugin SDK API baseline artifacts.
- `docs/.i18n` stores glossary/TM assets, while `docs/zh-CN/**` is the generated locale subtree called out by repo guidance.
- English docs families under `docs/automation`, `docs/channels`, `docs/cli`, `docs/gateway`, `docs/install`, `docs/plugins`, `docs/providers`, `docs/reference`, and related subtrees remain the primary source material for docs drift.

G008 ran docs link, glossary, and formatting checks plus generated-baseline checks. This module remains `exceptioned-deep-partial`, not fully `verified`, because markdownlint dlx and Mintlify render remain unavailable in this environment and provider/channel parity has no dedicated full-surface checker.

## Submodules

| Submodule                           | Directory                              | Coverage                   | Primary risk                                                                    | First validation                                        |
| ----------------------------------- | -------------------------------------- | -------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------- |
| Mintlify docs                       | `mintlify/`                            | `exceptioned-deep-partial` | page routing, links, locale gates, and public docs drift across many categories | `mintlify/change-to-test.md`                            |
| Generated baselines                 | `generated-baselines/`                 | `exceptioned-deep-partial` | config docs and public Plugin SDK baseline drift                                | `generated-baselines/change-to-test.md`                 |
| Provider/channel settings docs sync | `provider-channel-settings-docs-sync/` | `exceptioned-deep-partial` | provider/channel docs diverging from native/web settings and setup surfaces     | `provider-channel-settings-docs-sync/change-to-test.md` |

## Boundary

Automation and release script coverage lives in `../scripts/`. Controller-owned root ledgers remain outside this worker scope.
