# Allowlists File Roles

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Representative paths                                                                                       | Responsibility                                                                    | First validation                                                                                                                                                                             |
| ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/channels/allowlist-match.ts`, `src/channels/allowlists/**`, `src/channels/plugins/allowlist-match.ts` | Allowlist matching and shared authorization helpers for channel and plugin paths. | pnpm test -- src/channels/allow-from.test.ts src/channels/allowlist-match.test.ts src/channels/allowlists/resolve-utils.test.ts src/channels/plugins/contracts/group-policy.contract.test.ts |
