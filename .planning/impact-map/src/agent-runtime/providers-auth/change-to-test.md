# Providers Auth Change-to-Test

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

| Change scope      | First validation                                                                                                                                        | Escalation trigger                                                                                               | Notes                    |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `providers-auth/` | pnpm test -- src/agents/auth-health.test.ts src/agents/auth-profiles/oauth.test.ts src/agents/auth-profiles/order.test.ts src/agents/model-auth.test.ts | Escalate to live/provider-specific auth tests only when auth surface behavior or env-driven resolution broadens. | Priority completion unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `144` (修改 84，删除 12，新增 48).
- Target-existing path refs in active map: `132`; deleted/renamed-away refs kept only in transition artifacts: `12`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
