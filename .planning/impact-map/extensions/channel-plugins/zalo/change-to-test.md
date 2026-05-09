# zalo Channel Plugin Change-to-Test Matrix

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Change type                       | First validation                                                                                                                                                         | Escalation trigger                                                                                           |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| Manifest/package/entry changed    | `pnpm test:contracts:channels` plus `pnpm test -- extensions/zalo/src/channel.startup.test.ts extensions/zalo/src/config-schema.test.ts`                                 | `pnpm build` is required if package metadata, exports, runtime deps, or lazy runtime boundaries change.      |
| Setup/token/account changed       | `pnpm test -- extensions/zalo/src/setup-surface.test.ts extensions/zalo/src/setup-status.test.ts extensions/zalo/src/accounts.test.ts extensions/zalo/src/token.test.ts` | Add app/provider/docs checks if setup prompts, docs links, status fields, or secret input behavior changes.  |
| API/probe/proxy changed           | `pnpm test -- extensions/zalo/src/api.test.ts extensions/zalo/src/send.test.ts extensions/zalo/src/status-issues.test.ts`                                                | Escalate to monitor tests if API errors or proxy behavior affects inbound or status.                         |
| Outbound send/actions changed     | `pnpm test -- extensions/zalo/src/send.test.ts extensions/zalo/src/channel.directory.test.ts`                                                                            | Add action runtime tests if message action schema or action result payload changes.                          |
| Polling monitor changed           | `pnpm test -- extensions/zalo/src/monitor.lifecycle.test.ts extensions/zalo/src/monitor.image.polling.test.ts`                                                           | Escalate to route/auto-reply tests if polling dispatch or media handling changes.                            |
| Webhook monitor changed           | `pnpm test -- extensions/zalo/src/monitor.webhook.test.ts extensions/zalo/src/monitor.reply-once.lifecycle.test.ts`                                                      | Add gateway/security checks if webhook path, secret validation, replay, or duplicate behavior changes.       |
| Pairing/group policy changed      | `pnpm test -- extensions/zalo/src/monitor.pairing.lifecycle.test.ts extensions/zalo/src/monitor.group-policy.test.ts`                                                    | Escalate to shared pairing/group-policy tests if semantics should align across channels.                     |
| Status/config issues changed      | `pnpm test -- extensions/zalo/src/status-issues.test.ts extensions/zalo/src/setup-status.test.ts extensions/zalo/src/config-schema.test.ts`                              | Add docs/setup checks if operator-facing status guidance changes.                                            |
| Runtime dependency/export changed | `pnpm test -- test/scripts/stage-bundled-plugin-runtime-deps.test.ts` and targeted Zalo tests                                                                            | `pnpm build` is required for package exports, undici/proxy boundaries, or production dynamic import changes. |

## Validation evidence

No product tests/builds/graph indexes were run while creating this leaf. Promote beyond `deep-partial` only after recording dated command output for the affected paths.
