# synology-chat Channel Plugin Change-to-Test Matrix

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Change type                                | First validation                                                                                                                          | Escalation trigger                                                                                            |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Manifest/package/entry changed             | `pnpm test:contracts:channels` plus `pnpm test -- extensions/synology-chat/src/core.test.ts extensions/synology-chat/src/channel.test.ts` | `pnpm build` is required if package metadata, exports, or runtime dependency behavior changes.                |
| Setup/config/accounts changed              | `pnpm test -- extensions/synology-chat/src/core.test.ts extensions/synology-chat/src/channel.test.ts`                                     | Add app/provider/docs checks if setup prompts, docs links, account fields, or status text change.             |
| Gateway route/startup changed              | `pnpm test -- extensions/synology-chat/src/channel.integration.test.ts extensions/synology-chat/src/channel.test.ts`                      | Escalate to gateway route/API tests if registration auth/path semantics change.                               |
| Webhook parsing/auth changed               | `pnpm test -- extensions/synology-chat/src/webhook-handler.test.ts`                                                                       | Add security review if token sources, request parsing, body limits, or auth failures change.                  |
| Inbound allowlist/session/dispatch changed | `pnpm test -- extensions/synology-chat/src/webhook-handler.test.ts extensions/synology-chat/src/channel.integration.test.ts`              | Escalate to shared routing/pairing tests if session keys or DM policy semantics should align across channels. |
| Outbound client/send/media changed         | `pnpm test -- extensions/synology-chat/src/client.test.ts extensions/synology-chat/src/webhook-handler.test.ts`                           | Add media/security validation if file URLs, TLS options, or webhook payloads change.                          |
| Security warnings changed                  | `pnpm test -- extensions/synology-chat/src/channel.test.ts extensions/synology-chat/src/core.test.ts`                                     | Add docs/setup checks if warnings affect user-facing operator guidance.                                       |
| Runtime dependency/export changed          | `pnpm test -- test/scripts/stage-bundled-plugin-runtime-deps.test.ts` and targeted Synology Chat tests                                    | `pnpm build` is required for package exports or production runtime boundary changes.                          |

## Validation evidence

No product tests/builds/graph indexes were run while creating this leaf. Promote beyond `deep-partial` only after recording dated command output for the affected paths.
