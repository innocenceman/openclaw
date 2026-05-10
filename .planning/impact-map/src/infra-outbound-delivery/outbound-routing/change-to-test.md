# Outbound Routing Change-to-Test

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Change scope        | First validation                                                                                                                                                                                      | Escalation trigger                                                                            | Notes                    |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------ |
| `outbound-routing/` | pnpm test -- src/infra/outbound/channel-resolution.test.ts src/infra/outbound/channel-selection.test.ts src/infra/outbound/target-resolver.test.ts src/infra/outbound/session-binding-service.test.ts | Escalate to routing/channel tests when recipient/account/session selection semantics broaden. | Priority completion unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `18` (删除 2，新增 3，修改 13).
- Target-existing path refs in active map: `16`; deleted/renamed-away refs kept only in transition artifacts: `2`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
