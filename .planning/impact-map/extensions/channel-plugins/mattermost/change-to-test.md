# mattermost Channel Plugin Change-to-Test Matrix

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Change type                           | First validation                                                                                                                                                                                                                                                                                                                                               | Escalation trigger                                                                                      |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Manifest/package/channel id changed   | `pnpm test:contracts:channels` plus `pnpm test -- extensions/mattermost/src/channel.test.ts extensions/mattermost/src/config-schema.test.ts`                                                                                                                                                                                                                   | Escalate to `pnpm build` if exports, package metadata, lazy loading, or install/runtime deps change.    |
| Setup/config/accounts changed         | `pnpm test -- extensions/mattermost/src/setup.test.ts extensions/mattermost/src/config-schema.test.ts extensions/mattermost/src/mattermost/accounts.test.ts`                                                                                                                                                                                                   | Add app/provider settings and docs checks if user-facing fields, docs links, or status messages change. |
| REST client/probe/directory changed   | `pnpm test -- extensions/mattermost/src/mattermost/client.test.ts extensions/mattermost/src/mattermost/client.retry.test.ts extensions/mattermost/src/mattermost/probe.test.ts extensions/mattermost/src/mattermost/directory.test.ts`                                                                                                                         | Escalate to monitor/send tests when response/error mapping changes shared client behavior.              |
| Inbound monitor/websocket changed     | `pnpm test -- extensions/mattermost/src/mattermost/monitor.test.ts extensions/mattermost/src/mattermost/monitor-websocket.test.ts extensions/mattermost/src/mattermost/reconnect.test.ts extensions/mattermost/src/mattermost/monitor-onchar.test.ts`                                                                                                          | Add routing/auto-reply contract tests if inbound sender, thread, or command dispatch semantics change.  |
| Inbound gating/auth/policy changed    | `pnpm test -- extensions/mattermost/src/mattermost/monitor-auth.test.ts extensions/mattermost/src/mattermost/monitor.authz.test.ts extensions/mattermost/src/mattermost/monitor-gating.test.ts extensions/mattermost/src/mattermost/monitor.channel-kind.test.ts extensions/mattermost/src/normalize.test.ts extensions/mattermost/src/group-mentions.test.ts` | Escalate to shared command-gating/allowlist tests if behavior should align across channels.             |
| Attachment/resource handling changed  | `pnpm test -- extensions/mattermost/src/mattermost/monitor-resources.test.ts extensions/mattermost/src/mattermost/monitor-helpers.test.ts`                                                                                                                                                                                                                     | Add media/security validation for remote URLs, downloads, or resource cache changes.                    |
| Slash command/session route changed   | `pnpm test -- extensions/mattermost/src/mattermost/monitor-slash.test.ts extensions/mattermost/src/mattermost/slash-commands.test.ts extensions/mattermost/src/mattermost/slash-http.test.ts extensions/mattermost/src/mattermost/slash-state.test.ts extensions/mattermost/src/session-route.test.ts`                                                         | Escalate to gateway route/API tests when callback routes or auth boundaries change.                     |
| Interactions/model picker changed     | `pnpm test -- extensions/mattermost/src/mattermost/interactions.test.ts extensions/mattermost/src/mattermost/model-picker.test.ts`                                                                                                                                                                                                                             | Add send/reply-delivery tests if button payloads or picker callbacks alter outgoing messages.           |
| Outbound send/targets/replies changed | `pnpm test -- extensions/mattermost/src/mattermost/send.test.ts extensions/mattermost/src/mattermost/target-resolution.test.ts extensions/mattermost/src/mattermost/reply-delivery.test.ts`                                                                                                                                                                    | Add shared outbound/target contract tests if target syntax or threaded delivery semantics change.       |
| Reactions/actions changed             | `pnpm test -- extensions/mattermost/src/mattermost/reactions.test.ts`                                                                                                                                                                                                                                                                                          | Escalate to action/tool integration checks if action registration or permissions change.                |

## Validation evidence

No product tests/builds/graph indexes were run while creating this leaf. Promote beyond `deep-partial` only after recording dated command output for the affected paths.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `88` (新增 26，修改 57，删除 5).
- Target-existing path refs in active map: `83`; deleted/renamed-away refs kept only in transition artifacts: `5`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `extensions/mattermost/doctor-contract-api.ts`
- `extensions/mattermost/openclaw.plugin.json`
- `extensions/mattermost/package.json`
- `extensions/mattermost/runtime-api.ts`
- `extensions/mattermost/src/channel-actions-setup-status.contract.test.ts`
- `extensions/mattermost/src/channel-api.ts`
- `extensions/mattermost/src/channel-config-shared.ts`
- `extensions/mattermost/src/channel.test.ts`
- `extensions/mattermost/src/channel.ts`
- `extensions/mattermost/src/config-schema-core.ts`
- `extensions/mattermost/src/config-schema.test.ts`
- `extensions/mattermost/src/config-surface.ts`
- `extensions/mattermost/src/config-ui-hints.ts`
- `extensions/mattermost/src/doctor.ts`
- `extensions/mattermost/src/mattermost/accounts.test.ts`
- `extensions/mattermost/src/mattermost/accounts.ts`
- `extensions/mattermost/src/mattermost/draft-stream.test.ts`
- `extensions/mattermost/src/mattermost/draft-stream.ts`
- `extensions/mattermost/src/mattermost/interactions.ts`
- `extensions/mattermost/src/mattermost/model-picker.test.ts`
- `extensions/mattermost/src/mattermost/model-picker.ts`
- `extensions/mattermost/src/mattermost/monitor-auth.test.ts`
- `extensions/mattermost/src/mattermost/monitor-auth.ts`
- `extensions/mattermost/src/mattermost/monitor-gating.test.ts`
- `extensions/mattermost/src/mattermost/monitor-gating.ts`
- `extensions/mattermost/src/mattermost/monitor-helpers.ts`
- `extensions/mattermost/src/mattermost/monitor-websocket.test.ts`
- `extensions/mattermost/src/mattermost/monitor-websocket.ts`
- `extensions/mattermost/src/mattermost/monitor.authz.test.ts`
- `extensions/mattermost/src/mattermost/monitor.inbound-system-event.test.ts`
- `extensions/mattermost/src/mattermost/monitor.test.ts`
- `extensions/mattermost/src/mattermost/monitor.ts`
- `extensions/mattermost/src/mattermost/probe.ts`
- `extensions/mattermost/src/mattermost/reconnect.ts`
- `extensions/mattermost/src/mattermost/runtime-api.ts`
- `extensions/mattermost/src/mattermost/send.test.ts`
- `extensions/mattermost/src/mattermost/send.ts`
- `extensions/mattermost/src/mattermost/slash-commands.test.ts`
- `extensions/mattermost/src/mattermost/slash-commands.ts`
- `extensions/mattermost/src/mattermost/slash-http.send-config.test.ts`
- … plus 11 more target-existing changed paths.
<!-- version-diff-refresh:v2026.5.4:end -->
