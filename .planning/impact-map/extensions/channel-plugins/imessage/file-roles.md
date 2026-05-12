# iMessage Channel Plugin File Roles

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

| File or path                                                                                                          | Role                                                                  | Impact notes                                     |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------ |
| `extensions/imessage/openclaw.plugin.json`, `package.json`, `index.ts`                                                | Manifest/package/entry/runtime registration.                          | Catalog/setup/runtime boundary.                  |
| `extensions/imessage/api.ts`, `runtime-api.ts`, `setup-entry.ts`                                                      | Public/runtime/setup surfaces.                                        | Export/setup compatibility.                      |
| `extensions/imessage/src/channel.ts`, `shared.ts`, `plugin-shared.ts`, `channel.runtime.ts`, `channel.setup.ts`       | Plugin composition/base/setup/runtime outbound/probe/gateway helpers. | High fan-out behavior.                           |
| `extensions/imessage/src/accounts.ts`, `config-schema.ts`, `setup-core.ts`, `setup-surface.ts`                        | Account/config/setup/allowFrom/cli path.                              | Onboarding and account selection.                |
| `extensions/imessage/src/client.ts`, `probe.ts`, `constants.ts`                                                       | RPC client/probe timeout and support checks.                          | Gateway connectivity and status.                 |
| `extensions/imessage/src/monitor.ts`, `monitor/monitor-provider.ts`, `monitor/runtime.ts`, `monitor/abort-handler.ts` | Monitor entry/lifecycle/runtime/abort cleanup.                        | Long-running provider behavior.                  |
| `extensions/imessage/src/monitor/parse-notification.ts`, `monitor/inbound-processing.ts`, `monitor/types.ts`          | Notification parsing, inbound decision/context, payload types.        | Routing/access/prompt context.                   |
| `extensions/imessage/src/monitor/echo-cache.ts`, `reflection-guard.ts`, `self-chat-cache.ts`, `loop-rate-limiter.ts`  | Loop/reflection/echo/self-chat protection.                            | Prevents duplicate or reflected assistant loops. |
| `extensions/imessage/src/monitor/deliver.ts`, `monitor/sanitize-outbound.ts`                                          | Reply delivery and outbound text sanitization.                        | External message safety and formatting.          |
| `extensions/imessage/src/send.ts`, `outbound-adapter.ts`, `targets.ts`, `target-parsing-helpers.ts`                   | Send path, target parsing, reply tags, outbound adapter.              | Manual sends/replies and chat target syntax.     |
| `extensions/imessage/src/group-policy.ts`                                                                             | Group mention/tool policy.                                            | Group routing behavior.                          |
