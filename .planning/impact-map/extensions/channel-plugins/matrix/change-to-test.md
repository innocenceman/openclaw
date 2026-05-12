# Matrix Channel Plugin Change-to-Test Matrix

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

No validation commands were run while creating this map.

| Change type                             | First validation                                                                                                                                                                                                                           | Add when impact crosses boundary                             |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| Manifest/package/entry/crypto bootstrap | `pnpm test:contracts:channels` plus `pnpm test -- extensions/matrix/src/channel.resolve.test.ts extensions/matrix/src/matrix/deps.test.ts`                                                                                                 | `pnpm build` for crypto/runtime dependency boundary changes. |
| Setup/onboarding/config/credentials     | `pnpm test -- extensions/matrix/src/setup-core.test.ts extensions/matrix/src/onboarding.test.ts extensions/matrix/src/matrix/credentials.test.ts extensions/matrix/src/matrix/accounts.test.ts`                                            | Migration/security review for credential path changes.       |
| Client/bootstrap/SDK/active client      | `pnpm test -- extensions/matrix/src/matrix/client-bootstrap.test.ts extensions/matrix/src/matrix/client.test.ts extensions/matrix/src/matrix/sdk.test.ts`                                                                                  | Gateway mock smoke for lifecycle changes.                    |
| Outbound/target/send/direct room        | `pnpm test -- extensions/matrix/src/outbound.test.ts extensions/matrix/src/resolve-targets.test.ts extensions/matrix/src/matrix/send.test.ts extensions/matrix/src/matrix/direct-management.test.ts`                                       | Shared outbound tests if generic channel contract changes.   |
| Thread bindings/session                 | `pnpm test -- extensions/matrix/src/matrix/thread-bindings.test.ts`                                                                                                                                                                        | Conversation/session tests if binding semantics change.      |
| Actions/tools                           | `pnpm test -- extensions/matrix/src/actions.test.ts extensions/matrix/src/tool-actions.test.ts extensions/matrix/src/matrix/actions/*.test.ts`                                                                                             | Security review for destructive/admin/device actions.        |
| Crypto/device/backup/profile/polls      | `pnpm test -- extensions/matrix/src/matrix/device-health.test.ts extensions/matrix/src/matrix/profile.test.ts extensions/matrix/src/matrix/poll-types.test.ts` plus targeted inspection of `extensions/matrix/src/matrix/backup-health.ts` | Live Matrix tests only when explicitly requested.            |
| CLI/directory                           | `pnpm test -- extensions/matrix/src/cli.test.ts extensions/matrix/src/directory-live.test.ts`                                                                                                                                              | Operator docs review if CLI changes.                         |

## Known validation gaps

Source-inspection map only; no live Matrix homeserver validation.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `285` (新增 94，修改 176，删除 5，重命名/移动 10).
- Target-existing path refs in active map: `280`; deleted/renamed-away refs kept only in transition artifacts: `5`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `extensions/matrix/CHANGELOG.md`
- `extensions/matrix/api.ts`
- `extensions/matrix/auth-presence.ts`
- `extensions/matrix/doctor-contract-api.ts`
- `extensions/matrix/index.test.ts`
- `extensions/matrix/index.ts`
- `extensions/matrix/openclaw.plugin.json`
- `extensions/matrix/package.json`
- `extensions/matrix/runtime-api.ts`
- `extensions/matrix/src/account-selection.test.ts`
- `extensions/matrix/src/account-selection.ts`
- `extensions/matrix/src/actions.test.ts`
- `extensions/matrix/src/approval-handler.runtime.test.ts`
- `extensions/matrix/src/approval-handler.runtime.ts`
- `extensions/matrix/src/approval-native.test.ts`
- `extensions/matrix/src/approval-native.ts`
- `extensions/matrix/src/approval-reactions.test.ts`
- `extensions/matrix/src/approval-reactions.ts`
- `extensions/matrix/src/channel-account-paths.ts`
- `extensions/matrix/src/channel.directory.test.ts`
- `extensions/matrix/src/channel.resolve.test.ts`
- `extensions/matrix/src/channel.setup.test.ts`
- `extensions/matrix/src/channel.setup.ts`
- `extensions/matrix/src/channel.ts`
- `extensions/matrix/src/cli.test.ts`
- `extensions/matrix/src/cli.ts`
- `extensions/matrix/src/config-schema.test.ts`
- `extensions/matrix/src/config-schema.ts`
- `extensions/matrix/src/config-ui-hints.ts`
- `extensions/matrix/src/doctor-contract.ts`
- `extensions/matrix/src/doctor.ts`
- `extensions/matrix/src/exec-approval-resolver.ts`
- `extensions/matrix/src/exec-approvals.test.ts`
- `extensions/matrix/src/exec-approvals.ts`
- `extensions/matrix/src/group-mentions.test.ts`
- `extensions/matrix/src/legacy-crypto-inspector-availability.test.ts`
- `extensions/matrix/src/legacy-crypto.test.ts`
- `extensions/matrix/src/legacy-crypto.ts`
- `extensions/matrix/src/legacy-state.test.ts`
- `extensions/matrix/src/legacy-state.ts`
- … plus 105 more target-existing changed paths.
<!-- version-diff-refresh:v2026.5.4:end -->
