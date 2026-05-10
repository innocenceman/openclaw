# iMessage Channel Plugin Change-to-Test Matrix

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

No validation commands were run while creating this map.

| Change type                          | First validation                                                                                                                                                                          | Add when impact crosses boundary                        |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| Manifest/package/entry/channel/setup | `pnpm test:contracts:channels` plus `pnpm test -- extensions/imessage/src/channel.outbound.test.ts`                                                                                       | Build if runtime/export boundary changes.               |
| Target parsing/outbound send         | `pnpm test -- extensions/imessage/src/targets.test.ts extensions/imessage/src/channel.outbound.test.ts`                                                                                   | Shared outbound tests for generic payload changes.      |
| Monitor gating/inbound context       | `pnpm test -- extensions/imessage/src/monitor.gating.test.ts extensions/imessage/src/monitor/inbound-processing.test.ts`                                                                  | Routing/command tests if policy changes.                |
| Provider lifecycle/shutdown          | `pnpm test -- extensions/imessage/src/monitor.shutdown.unhandled-rejection.test.ts extensions/imessage/src/monitor/monitor-provider.echo-cache.test.ts`                                   | Gateway smoke only when explicitly requested.           |
| Echo/reflection/self-chat/rate-limit | `pnpm test -- extensions/imessage/src/monitor/reflection-guard.test.ts extensions/imessage/src/monitor/self-chat-cache.test.ts extensions/imessage/src/monitor/loop-rate-limiter.test.ts` | Security/safety review for loop-prevention changes.     |
| Delivery/sanitization                | `pnpm test -- extensions/imessage/src/monitor/deliver.test.ts extensions/imessage/src/monitor/sanitize-outbound.test.ts`                                                                  | Manual channel smoke if user-facing formatting changes. |

## Known validation gaps

Source-inspection map only; live iMessage/imsg behavior is out of scope.
