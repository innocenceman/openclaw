# Core Abstractions File Roles

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Representative paths                                                                                                      | Responsibility                                                                    | First validation                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/channels/channel-config.ts`, `src/channels/command-gating.ts`, `src/channels/session*.ts`, `src/channels/targets.ts` | Core shared channel config, command gating, session metadata, and target helpers. | pnpm test -- src/channels/channel-config.test.ts src/channels/command-gating.test.ts src/channels/session.test.ts src/channels/targets.test.ts |
