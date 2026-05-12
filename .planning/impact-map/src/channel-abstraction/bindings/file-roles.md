# Bindings File Roles

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Representative paths                                                                                   | Responsibility                                                                       | First validation                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/channels/plugins/binding-*.ts`, `src/channels/plugins/configured-binding-*.ts`, `src/bindings/**` | Binding provider registry, configured-binding compiler, routing, and session lookup. | pnpm test -- src/channels/plugins/acp-bindings.test.ts src/channels/plugins/binding-targets.test.ts src/channels/plugins/target-resolvers.test.ts src/channels/plugins/pairing-adapters.test.ts |
