# Logging Support Change-to-Test

Coverage: `verified`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

| Change scope       | First validation                                                                          | Escalation trigger                                                    | Notes                                                                |
| ------------------ | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `logging-support/` | Start with the nearest targeted tests named in `file-roles.md` or parent module evidence. | Escalate to consumer modules when behavior crosses the leaf boundary. | Fill with fresher validation evidence during the next verified wave. |

## 2026-05-09 validation result

Result: `verified`. Logging tests passed.

Raw logs live under `../../evidence/src-capabilities-shared-verified-wave-2026-05-09/logs/`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `49` (修改 24，新增 25).
- Target-existing path refs in active map: `49`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/logger.test.ts`
- `src/logging/config.test.ts`
- `src/logging/config.ts`
- `src/logging/console-capture.test.ts`
- `src/logging/console.ts`
- `src/logging/diagnostic-log-events.test.ts`
- `src/logging/diagnostic-memory.ts`
- `src/logging/diagnostic-phase.ts`
- `src/logging/diagnostic-run-activity.ts`
- `src/logging/diagnostic-session-attention.test.ts`
- `src/logging/diagnostic-session-attention.ts`
- `src/logging/diagnostic-session-context.test.ts`
- `src/logging/diagnostic-session-context.ts`
- `src/logging/diagnostic-session-state.ts`
- `src/logging/diagnostic-stability-bundle.test.ts`
- `src/logging/diagnostic-stability-bundle.ts`
- `src/logging/diagnostic-stability.test.ts`
- `src/logging/diagnostic-stability.ts`
- `src/logging/diagnostic-stuck-session-recovery.integration.test.ts`
- `src/logging/diagnostic-stuck-session-recovery.runtime.test.ts`
- `src/logging/diagnostic-stuck-session-recovery.runtime.ts`
- `src/logging/diagnostic-support-bundle.test.ts`
- `src/logging/diagnostic-support-bundle.ts`
- `src/logging/diagnostic-support-export.test.ts`
- `src/logging/diagnostic.test.ts`
- `src/logging/diagnostic.ts`
- `src/logging/log-file-path.ts`
- `src/logging/log-file-size-cap.test.ts`
- `src/logging/log-tail.ts`
- `src/logging/logger-env.test.ts`
- `src/logging/logger-redaction-behavior.test.ts`
- `src/logging/logger-settings.test.ts`
- `src/logging/logger-transport.test.ts`
- `src/logging/logger.browser-import.test.ts`
- `src/logging/logger.ts`
- `src/logging/parse-log-line.ts`
- `src/logging/redact-bounded.ts`
- `src/logging/redact.test.ts`
- `src/logging/redact.ts`
- `src/logging/subsystem.test.ts`
- … plus 2 more target-existing changed paths.
<!-- version-diff-refresh:v2026.5.4:end -->
