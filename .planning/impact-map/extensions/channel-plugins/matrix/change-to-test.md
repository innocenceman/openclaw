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
