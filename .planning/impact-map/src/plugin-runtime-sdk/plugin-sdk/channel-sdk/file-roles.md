# Channel Sdk File Roles

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Representative paths                                                                                                           | Responsibility                                                                                       | First validation                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `src/plugin-sdk/channel-*.ts`, `src/plugin-sdk/allow-from.ts`, `src/plugin-sdk/group-access.ts`, `src/plugin-sdk/direct-dm.ts` | Channel plugin contracts, config/setup/status helpers, policy helpers, and reply pipeline SDK seams. | pnpm test -- src/plugin-sdk/channel-lifecycle.test.ts src/plugin-sdk/channel-setup.test.ts src/plugin-sdk/channel-policy.test.ts src/plugin-sdk/channel-reply-pipeline.test.ts |
