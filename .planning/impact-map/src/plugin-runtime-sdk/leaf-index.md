# Plugin Runtime / Plugin SDK Leaf Index

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Leaf directory     | Coverage                   | Purpose                                                                                  |
| ------------------ | -------------------------- | ---------------------------------------------------------------------------------------- |
| `plugin-sdk/`      | `exceptioned-deep-partial` | Public SDK subpaths, provider/channel/tool/media/memory contracts, and API drift checks. |
| `plugins-runtime/` | `verified`                 | Runtime loading, adapters, contracts, boundary enforcement, and plugin test helpers.     |

## Split rule

Use `plugin-sdk/` for public SDK/API-surface changes and `plugins-runtime/` for internal plugin loading/runtime changes.
