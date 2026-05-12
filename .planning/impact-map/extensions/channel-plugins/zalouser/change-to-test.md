# zalouser Channel Plugin Change-to-Test Matrix

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Change type                       | First validation                                                                                                                                                   | Escalation trigger                                                                                                         |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| Manifest/package/entry changed    | `pnpm test:contracts:channels` plus `pnpm test -- extensions/zalouser/src/channel.setup.test.ts extensions/zalouser/src/tool.test.ts`                              | `pnpm build` is required if package metadata, exports, runtime deps, or dynamic/runtime boundaries change.                 |
| Setup/account/QR login changed    | `pnpm test -- extensions/zalouser/src/setup-surface.test.ts extensions/zalouser/src/accounts.test.ts extensions/zalouser/src/channel.setup.test.ts`                | Add docs/onboarding/status checks if prompts, QR login behavior, plugin enablement, or account-scoped config changes.      |
| Config/status/probe changed       | `pnpm test -- extensions/zalouser/src/status-issues.test.ts extensions/zalouser/src/probe.test.ts extensions/zalouser/src/accounts.test.ts`                        | Escalate to setup and channel tests if operator-facing status or account resolution semantics change.                      |
| Native ZCA wrapper changed        | `pnpm test -- extensions/zalouser/src/probe.test.ts extensions/zalouser/src/send.test.ts extensions/zalouser/src/monitor.account-scope.test.ts`                    | Add focused wrapper/mock coverage if credential path, QR login, listener lifecycle, or dependency import behavior changes. |
| Outbound send/text styles changed | `pnpm test -- extensions/zalouser/src/send.test.ts extensions/zalouser/src/channel.sendpayload.test.ts extensions/zalouser/src/text-styles.test.ts`                | Escalate to tool/channel tests if payload shape, chunking, markdown, or target normalization changes.                      |
| Tool actions changed              | `pnpm test -- extensions/zalouser/src/tool.test.ts extensions/zalouser/src/send.test.ts`                                                                           | Add agent/tool contract checks if action names, schema keys, or JSON result shape changes.                                 |
| Reaction/message id changed       | `pnpm test -- extensions/zalouser/src/reaction.test.ts extensions/zalouser/src/message-sid.test.ts extensions/zalouser/src/channel.test.ts`                        | Escalate to monitor tests if inbound message-id capture or current-message action context changes.                         |
| Inbound monitor changed           | `pnpm test -- extensions/zalouser/src/monitor.account-scope.test.ts extensions/zalouser/src/monitor.group-gating.test.ts extensions/zalouser/src/channel.test.ts`  | Escalate to shared routing/auto-reply tests if dispatch, reply semantics, or shutdown behavior changes.                    |
| DM/group policy changed           | `pnpm test -- extensions/zalouser/src/group-policy.test.ts extensions/zalouser/src/monitor.group-gating.test.ts extensions/zalouser/src/channel.directory.test.ts` | Escalate to shared channel security/pairing tests if semantics should align across channels.                               |
| Session/directory changed         | `pnpm test -- extensions/zalouser/src/channel.directory.test.ts extensions/zalouser/src/channel.test.ts`                                                           | Add manual smoke or setup checks if friend/group directory lookup affects operator-facing target selection.                |

## Validation evidence

No product tests/builds/graph indexes were run while creating this leaf. Promote beyond `deep-partial` only after recording dated command output for the affected paths.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `60` (删除 3，修改 40，新增 17).
- Target-existing path refs in active map: `57`; deleted/renamed-away refs kept only in transition artifacts: `3`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `extensions/zalouser/api.ts`
- `extensions/zalouser/openclaw.plugin.json`
- `extensions/zalouser/package.json`
- `extensions/zalouser/runtime-api.ts`
- `extensions/zalouser/src/accounts.ts`
- `extensions/zalouser/src/channel-api.ts`
- `extensions/zalouser/src/channel.adapters.ts`
- `extensions/zalouser/src/channel.sendpayload.test.ts`
- `extensions/zalouser/src/channel.setup.test.ts`
- `extensions/zalouser/src/channel.test.ts`
- `extensions/zalouser/src/channel.ts`
- `extensions/zalouser/src/doctor-contract.ts`
- `extensions/zalouser/src/doctor.ts`
- `extensions/zalouser/src/monitor.group-gating.test.ts`
- `extensions/zalouser/src/monitor.ts`
- `extensions/zalouser/src/qr-temp-file.ts`
- `extensions/zalouser/src/send.ts`
- `extensions/zalouser/src/session-route.ts`
- `extensions/zalouser/src/setup-surface.test.ts`
- `extensions/zalouser/src/shared.ts`
- `extensions/zalouser/src/status-issues.test.ts`
- `extensions/zalouser/src/tool.ts`
- `extensions/zalouser/src/types.ts`
- `extensions/zalouser/src/zalo-js.credentials.test.ts`
- `extensions/zalouser/src/zalo-js.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
