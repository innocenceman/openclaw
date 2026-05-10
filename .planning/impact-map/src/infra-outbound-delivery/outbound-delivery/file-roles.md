# Outbound Delivery File Roles

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Representative paths                                                                                                     | Responsibility                                                                   | First validation                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/infra/outbound/deliver*.ts`, `src/infra/outbound/delivery-queue*.ts`, `src/infra/outbound/outbound-send-service.ts` | Delivery queueing, send service, recovery, and direct outbound runtime behavior. | pnpm test -- src/infra/outbound/deliver.test.ts src/infra/outbound/delivery-queue.policy.test.ts src/infra/outbound/delivery-queue.recovery.test.ts src/infra/outbound/outbound-send-service.test.ts |
