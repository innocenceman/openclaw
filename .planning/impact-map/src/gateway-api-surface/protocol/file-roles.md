# Protocol File Roles

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

| Representative paths      | Responsibility                                                    | First validation                                                                                                                                                                       |
| ------------------------- | ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/gateway/protocol/**` | Gateway protocol schemas, primitives, and push/connect contracts. | pnpm test -- src/gateway/protocol/index.test.ts src/gateway/protocol/push.test.ts src/gateway/protocol/connect-error-details.test.ts src/gateway/protocol/talk-config.contract.test.ts |
