# Status Gateway Channel Change-to-Test

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

| Change scope              | First validation                                                                                                                                                                   | Escalation trigger                                                                                        | Notes                    |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------ |
| `status-gateway-channel/` | pnpm test -- src/commands/channels.status.command-flow.test.ts src/cli/gateway-cli.coverage.test.ts src/cli/daemon-cli/status.test.ts src/commands/status-all/report-lines.test.ts | Escalate to pnpm test:gateway or pnpm test:channels when command output depends on live runtime behavior. | Priority completion unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `102` (修改 56，新增 44，删除 2).
- Target-existing path refs in active map: `100`; deleted/renamed-away refs kept only in transition artifacts: `2`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
