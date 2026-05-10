# Runtime Adapters File Roles

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Representative paths                                                                   | Responsibility                                                                    | First validation                                                                                                                                                         |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `src/plugins/runtime/**`, `src/plugins/provider-runtime.ts`, `src/plugins/services.ts` | Runtime adapters for channels, providers, media, TTS, tools, and system services. | pnpm test -- src/plugins/runtime.channel-pin.test.ts src/plugins/runtime/gateway-request-scope.test.ts src/plugins/provider-runtime.test.ts src/plugins/services.test.ts |
