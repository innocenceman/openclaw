# Web UI Impact Map

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G007 split and validation evidence

This module maps browser/control UI surfaces under `ui/`.

## Submodules

| Submodule                     | Directory                                 | Coverage                   | Primary risk                                                             | First validation                                           |
| ----------------------------- | ----------------------------------------- | -------------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------- |
| Web UI shell                  | `web-ui/`                                 | `exceptioned-deep-partial` | app shell, controllers/views, i18n, assets, styles, build/test harness   | `web-ui/change-to-test.md`                                 |
| Web provider/channel settings | `provider-channel-settings/web-settings/` | `exceptioned-deep-partial` | schema-driven config, channel status cards, provider/channel list parity | `provider-channel-settings/web-settings/change-to-test.md` |

## Boundary

Native app settings coverage lives in `../apps/provider-channel-settings/native-settings/`. Documentation sync coverage lives in `../docs/provider-channel-settings-docs-sync/`.
