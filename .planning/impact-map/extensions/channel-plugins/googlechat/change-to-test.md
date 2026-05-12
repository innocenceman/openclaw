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

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `extensions/googlechat/api.ts`
- `extensions/googlechat/doctor-contract-api.ts`
- `extensions/googlechat/openclaw.plugin.json`
- `extensions/googlechat/package.json`
- `extensions/googlechat/runtime-api.ts`
- `extensions/googlechat/src/accounts.ts`
- `extensions/googlechat/src/actions.ts`
- `extensions/googlechat/src/auth.ts`
- `extensions/googlechat/src/channel-config.test.ts`
- `extensions/googlechat/src/channel.deps.runtime.ts`
- `extensions/googlechat/src/channel.setup.ts`
- `extensions/googlechat/src/channel.test.ts`
- `extensions/googlechat/src/channel.ts`
- `extensions/googlechat/src/config-schema.test.ts`
- `extensions/googlechat/src/config-schema.ts`
- `extensions/googlechat/src/doctor-contract.ts`
- `extensions/googlechat/src/gateway.ts`
- `extensions/googlechat/src/google-auth.runtime.test.ts`
- `extensions/googlechat/src/google-auth.runtime.ts`
- `extensions/googlechat/src/monitor-access.test.ts`
- `extensions/googlechat/src/monitor-access.ts`
- `extensions/googlechat/src/monitor-reply-delivery.ts`
- `extensions/googlechat/src/monitor.reply-delivery.test.ts`
- `extensions/googlechat/src/monitor.ts`
- `extensions/googlechat/src/monitor.webhook-routing.test.ts`
- `extensions/googlechat/src/secret-contract.test.ts`
- `extensions/googlechat/src/secret-contract.ts`
- `extensions/googlechat/src/setup-surface.ts`
- `extensions/googlechat/src/setup.test.ts`
- `extensions/googlechat/src/targets.test.ts`
- `extensions/googlechat/src/types.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
