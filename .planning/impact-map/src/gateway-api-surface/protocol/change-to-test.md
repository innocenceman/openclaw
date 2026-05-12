# Protocol Change-to-Test

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

| Change scope | First validation                                                                                                                                                                       | Escalation trigger                                                                        | Notes                    |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------ |
| `protocol/`  | pnpm test -- src/gateway/protocol/index.test.ts src/gateway/protocol/push.test.ts src/gateway/protocol/connect-error-details.test.ts src/gateway/protocol/talk-config.contract.test.ts | Run pnpm build when protocol surfaces affect published/build output or generated clients. | Priority completion unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `29` (修改 27，新增 2).
- Target-existing path refs in active map: `29`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/gateway/protocol/channels.schema.test.ts`
- `src/gateway/protocol/connect-error-details.ts`
- `src/gateway/protocol/cron-validators.test.ts`
- `src/gateway/protocol/exec-approvals-validators.test.ts`
- `src/gateway/protocol/index.test.ts`
- `src/gateway/protocol/index.ts`
- `src/gateway/protocol/schema.ts`
- `src/gateway/protocol/schema/agent.ts`
- `src/gateway/protocol/schema/agents-models-skills.ts`
- `src/gateway/protocol/schema/artifacts.ts`
- `src/gateway/protocol/schema/channels.ts`
- `src/gateway/protocol/schema/config.ts`
- `src/gateway/protocol/schema/cron.ts`
- `src/gateway/protocol/schema/exec-approvals.ts`
- `src/gateway/protocol/schema/frames.ts`
- `src/gateway/protocol/schema/logs-chat.ts`
- `src/gateway/protocol/schema/nodes.ts`
- `src/gateway/protocol/schema/plugins.ts`
- `src/gateway/protocol/schema/primitives.ts`
- `src/gateway/protocol/schema/protocol-schemas.ts`
- `src/gateway/protocol/schema/push.ts`
- `src/gateway/protocol/schema/sessions.ts`
- `src/gateway/protocol/schema/types.ts`
- `src/gateway/protocol/schema/wizard.ts`
- `src/gateway/protocol/startup-unavailable.ts`
- `src/gateway/protocol/talk-config.contract.test.ts`
- `src/gateway/protocol/version.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
