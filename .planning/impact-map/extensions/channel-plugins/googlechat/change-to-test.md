# Google Chat Channel Plugin Change-to-Test Matrix

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

No validation commands were run while creating this map.

| Change type                    | First validation                                                                                                                             | Add when impact crosses boundary                             |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| Manifest/package/entry/channel | `pnpm test:contracts:channels` plus `pnpm test -- extensions/googlechat/src/channel.test.ts`                                                 | Build/staging if deps or exports change.                     |
| Setup/accounts/credentials     | `pnpm test -- extensions/googlechat/src/setup.test.ts`                                                                                       | Auth/monitor tests if credential source affects webhook/API. |
| Auth/request verification      | `pnpm test -- extensions/googlechat/src/monitor-webhook.test.ts extensions/googlechat/src/monitor.webhook-routing.test.ts`                   | Security review for JWT/audience/cert behavior.              |
| Inbound access/pairing/mention | `pnpm test -- extensions/googlechat/src/monitor-access.test.ts`                                                                              | Shared routing/command tests if policy changes.              |
| Outbound/API/actions/targets   | `pnpm test -- extensions/googlechat/src/actions.test.ts extensions/googlechat/src/targets.test.ts extensions/googlechat/src/channel.test.ts` | Media/security review for upload/download behavior.          |

## Known validation gaps

Source-inspection map only; no live Google Chat API validation.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `49` (修改 27，新增 21，删除 1).
- Target-existing path refs in active map: `48`; deleted/renamed-away refs kept only in transition artifacts: `1`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
