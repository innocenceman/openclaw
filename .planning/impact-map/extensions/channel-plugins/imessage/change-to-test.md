# iMessage Channel Plugin Change-to-Test Matrix

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

No validation commands were run while creating this map.

| Change type                          | First validation                                                                                                                                                                          | Add when impact crosses boundary                        |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| Monitor gating/inbound context       | `pnpm test -- extensions/imessage/src/monitor.gating.test.ts extensions/imessage/src/monitor/inbound-processing.test.ts`                                                                  | Routing/command tests if policy changes.                |
| Provider lifecycle/shutdown          | `pnpm test -- extensions/imessage/src/monitor.shutdown.unhandled-rejection.test.ts extensions/imessage/src/monitor/monitor-provider.echo-cache.test.ts`                                   | Gateway smoke only when explicitly requested.           |
| Echo/reflection/self-chat/rate-limit | `pnpm test -- extensions/imessage/src/monitor/reflection-guard.test.ts extensions/imessage/src/monitor/self-chat-cache.test.ts extensions/imessage/src/monitor/loop-rate-limiter.test.ts` | Security/safety review for loop-prevention changes.     |
| Delivery/sanitization                | `pnpm test -- extensions/imessage/src/monitor/deliver.test.ts extensions/imessage/src/monitor/sanitize-outbound.test.ts`                                                                  | Manual channel smoke if user-facing formatting changes. |

## Known validation gaps

Source-inspection map only; live iMessage/imsg behavior is out of scope.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `73` (修改 33，新增 33，删除 7).
- Target-existing path refs in active map: `66`; deleted/renamed-away refs kept only in transition artifacts: `7`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `extensions/imessage/api.ts`
- `extensions/imessage/config-api.ts`
- `extensions/imessage/openclaw.plugin.json`
- `extensions/imessage/package.json`
- `extensions/imessage/runtime-api.ts`
- `extensions/imessage/src/account-types.ts`
- `extensions/imessage/src/channel-api.ts`
- `extensions/imessage/src/channel-inbound-roots.contract.test.ts`
- `extensions/imessage/src/channel.runtime.ts`
- `extensions/imessage/src/client.ts`
- `extensions/imessage/src/config-accessors.ts`
- `extensions/imessage/src/conversation-bindings.ts`
- `extensions/imessage/src/conversation-route.test.ts`
- `extensions/imessage/src/conversation-route.ts`
- `extensions/imessage/src/imessage.test-plugin.ts`
- `extensions/imessage/src/media-contract.ts`
- `extensions/imessage/src/monitor.gating.test.ts`
- `extensions/imessage/src/monitor.watch-subscribe-retry.test.ts`
- `extensions/imessage/src/monitor/abort-handler.ts`
- `extensions/imessage/src/monitor/deliver.runtime.ts`
- `extensions/imessage/src/monitor/deliver.ts`
- `extensions/imessage/src/monitor/echo-cache.ts`
- `extensions/imessage/src/monitor/inbound-processing.test.ts`
- `extensions/imessage/src/monitor/inbound-processing.ts`
- `extensions/imessage/src/monitor/loop-rate-limiter.ts`
- `extensions/imessage/src/monitor/monitor-provider.echo-cache.test.ts`
- `extensions/imessage/src/monitor/monitor-provider.ts`
- `extensions/imessage/src/monitor/reflection-guard.ts`
- `extensions/imessage/src/monitor/self-chat-cache.ts`
- `extensions/imessage/src/monitor/self-chat-dedupe.test.ts`
- `extensions/imessage/src/monitor/types.ts`
- `extensions/imessage/src/monitor/watch-error-log.ts`
- `extensions/imessage/src/normalize.ts`
- `extensions/imessage/src/probe.ts`
- `extensions/imessage/src/runtime.ts`
- `extensions/imessage/src/send.ts`
- `extensions/imessage/src/setup-core.ts`
- `extensions/imessage/src/setup-surface.ts`
- `extensions/imessage/src/shared.ts`
- `extensions/imessage/src/status.test.ts`
- … plus 1 more target-existing changed paths.
<!-- version-diff-refresh:v2026.5.4:end -->
