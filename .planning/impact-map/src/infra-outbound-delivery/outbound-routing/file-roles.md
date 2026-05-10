# Outbound Routing File Roles

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Representative paths                                                                                                                                          | Responsibility                                                              | First validation                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/infra/outbound/channel-*.ts`, `src/infra/outbound/target-*.ts`, `src/infra/outbound/session-binding-service.ts`, `src/infra/outbound/outbound-policy.ts` | Channel selection, target resolution, session binding, and outbound policy. | pnpm test -- src/infra/outbound/channel-resolution.test.ts src/infra/outbound/channel-selection.test.ts src/infra/outbound/target-resolver.test.ts src/infra/outbound/session-binding-service.test.ts |
