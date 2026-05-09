# Plugin Bridge File Roles

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Representative paths      | Responsibility                                                                                                      | First validation                                                                                                                                                                                                                         |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/channels/plugins/**` | Plugin-backed channel catalog, registry, setup/status helpers, contracts, outbound helpers, and runtime forwarders. | pnpm test -- src/channels/plugins/contracts/registry.contract.test.ts src/channels/plugins/contracts/inbound.contract.test.ts src/channels/plugins/contracts/outbound-payload.contract.test.ts src/channels/plugins/plugins-core.test.ts |
