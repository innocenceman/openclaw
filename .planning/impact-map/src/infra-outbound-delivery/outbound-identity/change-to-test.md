# Outbound Identity Change-to-Test

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Change scope         | First validation                                                                                                                                                                   | Escalation trigger                                                                                 | Notes                 |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | --------------------- |
| `outbound-identity/` | pnpm test -- src/infra/outbound/identity.test.ts src/infra/outbound/conversation-id.test.ts src/infra/outbound/outbound-session.test.ts src/infra/outbound/directory-cache.test.ts | Escalate to routing or channel send tests when identity mapping broadens across sessions/accounts. | Residual Wave 1R unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `9` (修改 8，新增 1).
- Target-existing path refs in active map: `9`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
