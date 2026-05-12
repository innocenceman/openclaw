# Tool Sdk File Roles

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Representative paths                                                                                                                        | Responsibility                                                                          | First validation                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `src/plugin-sdk/tool-send.ts`, `src/plugin-sdk/provider-tools.ts`, `src/plugin-sdk/provider-web-search.ts`, `src/plugin-sdk/setup-tools.ts` | Tool/send/web-search/action SDK helpers used by plugin tools and provider integrations. | pnpm test -- src/plugin-sdk/reply-payload.test.ts src/plugin-sdk/webhook-targets.test.ts |
