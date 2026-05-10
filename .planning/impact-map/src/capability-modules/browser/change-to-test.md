# Browser Change-to-Test

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

| Change scope | First validation                                                                                                                                      | Escalation trigger                                                                           | Notes                    |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ------------------------ |
| `browser/`   | pnpm test -- src/browser/client.test.ts src/browser/pw-session.test.ts src/browser/server-lifecycle.test.ts src/browser/routes/agent.snapshot.test.ts | Escalate to gateway/control UI or build checks when browser server/runtime contracts change. | Priority completion unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

## 2026-05-09 validation result

Result: `exceptioned-deep-partial`. Browser tests timed out/failed in this environment; browser remains split-needed before future promotion.

Raw logs live under `../../evidence/src-capabilities-shared-verified-wave-2026-05-09/logs/`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `17` (新增 17).
- Target-existing path refs in active map: `17`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
