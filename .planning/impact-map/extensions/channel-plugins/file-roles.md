# Channel Plugins File Roles

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

| File or path                                                        | Role                                                                                           | Impact notes                                                                                         |
| ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `extensions/*/openclaw.plugin.json` with `channels`                 | Declares channel ids and links plugin metadata to channel registry/catalog behavior.           | 21 channel manifests observed; id drift affects setup/status/onboarding/docs/UI lists.               |
| `extensions/*/index.ts` for channel plugins                         | Registers the channel plugin entry, usually via `defineChannelPluginEntry`.                    | Entrypoint changes affect channel registry and channel contract tests.                               |
| `extensions/*/runtime-api.ts` and `extensions/*/src/runtime-api.ts` | Channel-local runtime/SDK seam.                                                                | Use for local barrels and runtime helpers; changes can affect many files inside one channel package. |
| `extensions/*/src/channel.ts`                                       | Channel object, account/status/config handling, send/monitor adapter wiring.                   | High-impact file for setup/status/send/monitor wiring.                                               |
| `extensions/*/src/setup-surface.ts`                                 | Setup wizard/status/config issue surface.                                                      | Affects onboarding, status diagnostics, config docs/UI sync.                                         |
| `extensions/*/src/send.ts` and nested send files                    | Outbound message delivery, payload normalization, media/attachments, provider API calls.       | Validate with outbound contract tests and channel-specific send tests.                               |
| `extensions/*/src/monitor.ts` and nested monitor files              | Inbound event polling/webhook/session monitor and dispatch into shared routing/reply pipeline. | Validate with inbound contract tests and channel-specific monitor tests.                             |
| `extensions/whatsapp/src/auto-reply/**`                             | Browser/session-backed WhatsApp auto-reply monitor and routing integration.                    | First downstream analogue; use mock-first before live/manual联调.                                    |
| `extensions/slack/src/monitor/**`                                   | Slack monitor, threading, interactive events, files/media handling.                            | Thread/session and interactive payload changes can cross routing and media surfaces.                 |
| `extensions/matrix/src/matrix/**`                                   | Matrix client, send, monitor, storage, account/room selection.                                 | Long-running client/storage changes need monitor and setup/status coverage.                          |
| `src/channels/plugins/contracts/**`                                 | Shared channel plugin contract suites and testkit.                                             | First validation layer for manifest, registry, inbound, outbound, group policy.                      |
| `test/helpers/extensions/**`                                        | Shared extension/channel mocks, setup wizards, runtime helpers.                                | Helper changes can broaden impact across many extension tests.                                       |

## Update rule

When a channel file changes, update the relevant row with observed callers/consumers and record the smallest test set in `change-to-test.md`.
