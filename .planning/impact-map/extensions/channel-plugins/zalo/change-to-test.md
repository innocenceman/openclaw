# zalo Channel Plugin Change-to-Test Matrix

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Change type                    | First validation                                                                                                                                                         | Escalation trigger                                                                                          |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| Manifest/package/entry changed | `pnpm test:contracts:channels` plus `pnpm test -- extensions/zalo/src/channel.startup.test.ts extensions/zalo/src/config-schema.test.ts`                                 | `pnpm build` is required if package metadata, exports, runtime deps, or lazy runtime boundaries change.     |
| Setup/token/account changed    | `pnpm test -- extensions/zalo/src/setup-surface.test.ts extensions/zalo/src/setup-status.test.ts extensions/zalo/src/accounts.test.ts extensions/zalo/src/token.test.ts` | Add app/provider/docs checks if setup prompts, docs links, status fields, or secret input behavior changes. |
| API/probe/proxy changed        | `pnpm test -- extensions/zalo/src/api.test.ts extensions/zalo/src/send.test.ts extensions/zalo/src/status-issues.test.ts`                                                | Escalate to monitor tests if API errors or proxy behavior affects inbound or status.                        |
| Outbound send/actions changed  | `pnpm test -- extensions/zalo/src/send.test.ts extensions/zalo/src/channel.directory.test.ts`                                                                            | Add action runtime tests if message action schema or action result payload changes.                         |
| Polling monitor changed        | `pnpm test -- extensions/zalo/src/monitor.lifecycle.test.ts extensions/zalo/src/monitor.image.polling.test.ts`                                                           | Escalate to route/auto-reply tests if polling dispatch or media handling changes.                           |
| Webhook monitor changed        | `pnpm test -- extensions/zalo/src/monitor.webhook.test.ts extensions/zalo/src/monitor.reply-once.lifecycle.test.ts`                                                      | Add gateway/security checks if webhook path, secret validation, replay, or duplicate behavior changes.      |
| Pairing/group policy changed   | `pnpm test -- extensions/zalo/src/monitor.pairing.lifecycle.test.ts extensions/zalo/src/monitor.group-policy.test.ts`                                                    | Escalate to shared pairing/group-policy tests if semantics should align across channels.                    |
| Status/config issues changed   | `pnpm test -- extensions/zalo/src/status-issues.test.ts extensions/zalo/src/setup-status.test.ts extensions/zalo/src/config-schema.test.ts`                              | Add docs/setup checks if operator-facing status guidance changes.                                           |

## Validation evidence

No product tests/builds/graph indexes were run while creating this leaf. Promote beyond `deep-partial` only after recording dated command output for the affected paths.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `65` (删除 4，修改 42，新增 18，重命名/移动 1).
- Target-existing path refs in active map: `61`; deleted/renamed-away refs kept only in transition artifacts: `4`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `extensions/zalo/api.ts`
- `extensions/zalo/index.test.ts`
- `extensions/zalo/openclaw.plugin.json`
- `extensions/zalo/package.json`
- `extensions/zalo/runtime-api.test.ts`
- `extensions/zalo/runtime-api.ts`
- `extensions/zalo/src/accounts.ts`
- `extensions/zalo/src/actions.ts`
- `extensions/zalo/src/channel.directory.test.ts`
- `extensions/zalo/src/channel.startup.test.ts`
- `extensions/zalo/src/channel.ts`
- `extensions/zalo/src/monitor.image.polling.test.ts`
- `extensions/zalo/src/monitor.lifecycle.test.ts`
- `extensions/zalo/src/monitor.pairing.lifecycle.test.ts`
- `extensions/zalo/src/monitor.polling.media-reply.test.ts`
- `extensions/zalo/src/monitor.reply-once.lifecycle.test.ts`
- `extensions/zalo/src/monitor.ts`
- `extensions/zalo/src/monitor.webhook.test.ts`
- `extensions/zalo/src/monitor.webhook.ts`
- `extensions/zalo/src/outbound-payload.contract.test.ts`
- `extensions/zalo/src/runtime-api.ts`
- `extensions/zalo/src/runtime-support.ts`
- `extensions/zalo/src/secret-contract.ts`
- `extensions/zalo/src/secret-input.ts`
- `extensions/zalo/src/send.ts`
- `extensions/zalo/src/setup-status.test.ts`
- `extensions/zalo/src/setup-surface.test.ts`
- `extensions/zalo/src/status-issues.test.ts`
- `extensions/zalo/src/test-support/lifecycle-test-support.ts`
- `extensions/zalo/src/test-support/monitor-mocks-test-support.ts`
- `extensions/zalo/src/token.ts`
- `extensions/zalo/src/types.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
