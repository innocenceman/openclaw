# Outbound Actions File Roles

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Representative paths                     | Responsibility                                                              | First validation                                                                                                                                                                                                               |
| ---------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `src/infra/outbound/message-action-*.ts` | Message action specs, params, normalization, runner, and threading helpers. | pnpm test -- src/infra/outbound/message-action-spec.test.ts src/infra/outbound/message-action-params.test.ts src/infra/outbound/message-action-runner.threading.test.ts src/infra/outbound/message-action-runner.media.test.ts |
