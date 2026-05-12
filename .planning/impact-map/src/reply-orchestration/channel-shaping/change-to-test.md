# Channel Shaping Change-to-Test

Coverage: `verified`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

| Change scope       | First validation                                                                                                                                      | Escalation trigger                                                                                        | Notes                 |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------- |
| `channel-shaping/` | pnpm test -- src/auto-reply/chunk.test.ts src/auto-reply/envelope.test.ts src/auto-reply/media-note.test.ts src/auto-reply/reply/inbound-meta.test.ts | Escalate to channel/plugin contract tests when formatting or metadata shaping affects transport payloads. | Residual Wave 1R unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `11` (修改 9，新增 2).
- Target-existing path refs in active map: `11`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/auto-reply/envelope.ts`
- `src/auto-reply/reply/inbound-dedupe.test.ts`
- `src/auto-reply/reply/inbound-dedupe.ts`
- `src/auto-reply/reply/inbound-meta.test.ts`
- `src/auto-reply/reply/inbound-meta.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
