# msteams Channel Plugin Change-to-Test Matrix

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Change type                              | First validation                                                                                                                                                                                                                                                        | Escalation trigger                                                                                         |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Manifest/package/entry changed           | `pnpm test:contracts:channels` plus `pnpm test -- extensions/msteams/src/channel.directory.test.ts extensions/msteams/src/sdk.test.ts`                                                                                                                                  | `pnpm build` is required if exports, lazy runtime boundaries, package metadata, or runtime deps change.    |
| Setup/config/credentials changed         | `pnpm test -- extensions/msteams/src/setup-surface.test.ts extensions/msteams/src/token.test.ts extensions/msteams/src/resolve-allowlist.test.ts`                                                                                                                       | Add app/provider/docs checks if user-facing config, docs links, or status text change.                     |
| SDK/monitor lifecycle changed            | `pnpm test -- extensions/msteams/src/sdk.test.ts extensions/msteams/src/monitor.test.ts extensions/msteams/src/monitor.lifecycle.test.ts extensions/msteams/src/messenger.test.ts`                                                                                      | Escalate to gateway/webhook tests when route, auth, timeout, or server lifecycle semantics change.         |
| Inbound parsing/message handling changed | `pnpm test -- extensions/msteams/src/inbound.test.ts extensions/msteams/src/mentions.test.ts extensions/msteams/src/monitor-handler/message-handler.authz.test.ts extensions/msteams/src/policy.test.ts`                                                                | Add shared routing/command-gating tests when sender policy, pairing, history, or command dispatch changes. |
| Conversation/session storage changed     | `pnpm test -- extensions/msteams/src/conversation-store-fs.test.ts extensions/msteams/src/sent-message-cache.test.ts extensions/msteams/src/outbound.test.ts`                                                                                                           | Escalate to reply-dispatcher/monitor tests if proactive reply context or session route semantics change.   |
| Graph/directory/allowlist changed        | `pnpm test -- extensions/msteams/src/graph.test.ts extensions/msteams/src/directory-live.test.ts extensions/msteams/src/channel.directory.test.ts extensions/msteams/src/resolve-allowlist.test.ts`                                                                     | Add live/permission smoke only when explicitly validating real Microsoft Graph credentials.                |
| Attachments/media/download changed       | `pnpm test -- extensions/msteams/src/attachments.test.ts extensions/msteams/src/attachments.helpers.test.ts extensions/msteams/src/attachments/shared.test.ts extensions/msteams/src/media-helpers.test.ts extensions/msteams/src/monitor-handler.file-consent.test.ts` | Add security/media validation for remote URLs, Graph downloads, file consent URLs, or size-limit changes.  |
| Outbound send/card/media changed         | `pnpm test -- extensions/msteams/src/send.test.ts extensions/msteams/src/outbound.test.ts extensions/msteams/src/graph-upload.test.ts extensions/msteams/src/welcome-card.test.ts`                                                                                      | Add reply-dispatcher and monitor tests if outgoing messages are reused by auto-reply or welcome flows.     |
| Reply streaming/feedback changed         | `pnpm test -- extensions/msteams/src/reply-dispatcher.test.ts extensions/msteams/src/streaming-message.test.ts extensions/msteams/src/feedback-reflection.test.ts`                                                                                                      | Escalate to monitor handler tests if feedback invokes, typing, or streaming state affect inbound handling. |
| Poll workflow changed                    | `pnpm test -- extensions/msteams/src/polls.test.ts extensions/msteams/src/outbound.test.ts extensions/msteams/src/monitor.test.ts`                                                                                                                                      | Add action/tool discovery tests if poll capability metadata or message tool schema changes.                |
| Error/retry/user-agent changed           | `pnpm test -- extensions/msteams/src/errors.test.ts extensions/msteams/src/user-agent.test.ts extensions/msteams/src/messenger.test.ts`                                                                                                                                 | Escalate to send/monitor tests if user-facing hints or retry behavior changes.                             |

## Validation evidence

No product tests/builds/graph indexes were run while creating this leaf. Promote beyond `deep-partial` only after recording dated command output for the affected paths.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `148` (删除 4，修改 85，新增 59).
- Target-existing path refs in active map: `144`; deleted/renamed-away refs kept only in transition artifacts: `4`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `extensions/msteams/api.ts`
- `extensions/msteams/channel-plugin-api.ts`
- `extensions/msteams/config-api.ts`
- `extensions/msteams/openclaw.plugin.json`
- `extensions/msteams/package.json`
- `extensions/msteams/runtime-api.ts`
- `extensions/msteams/setup-entry.ts`
- `extensions/msteams/setup-plugin-api.ts`
- `extensions/msteams/src/attachments.graph.test.ts`
- `extensions/msteams/src/attachments.ts`
- `extensions/msteams/src/attachments/download.ts`
- `extensions/msteams/src/attachments/shared.ts`
- `extensions/msteams/src/block-streaming-config.test.ts`
- `extensions/msteams/src/channel-api.ts`
- `extensions/msteams/src/channel.actions.test.ts`
- `extensions/msteams/src/channel.directory.test.ts`
- `extensions/msteams/src/channel.runtime.ts`
- `extensions/msteams/src/channel.setup.ts`
- `extensions/msteams/src/channel.test.ts`
- `extensions/msteams/src/channel.ts`
- `extensions/msteams/src/config-ui-hints.ts`
- `extensions/msteams/src/errors.ts`
- `extensions/msteams/src/feedback-reflection-prompt.ts`
- `extensions/msteams/src/feedback-reflection.ts`
- `extensions/msteams/src/file-consent-helpers.ts`
- `extensions/msteams/src/file-consent-invoke.ts`
- `extensions/msteams/src/file-consent.ts`
- `extensions/msteams/src/graph-group-management.ts`
- `extensions/msteams/src/graph-members.ts`
- `extensions/msteams/src/graph-teams.ts`
- `extensions/msteams/src/graph-upload.test.ts`
- `extensions/msteams/src/graph-upload.ts`
- `extensions/msteams/src/graph.ts`
- `extensions/msteams/src/inbound.ts`
- `extensions/msteams/src/mentions.ts`
- `extensions/msteams/src/messenger.test.ts`
- `extensions/msteams/src/messenger.ts`
- `extensions/msteams/src/monitor-handler.test-helpers.ts`
- `extensions/msteams/src/monitor-handler.ts`
- `extensions/msteams/src/monitor-handler/access.ts`
- … plus 35 more target-existing changed paths.
<!-- version-diff-refresh:v2026.5.4:end -->
