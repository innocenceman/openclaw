# Reply Command Auth Gates Code Paths

Coverage: `verified`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

- Primary paths: `src/auto-reply/command-auth*.ts`, `src/auto-reply/command-detection.ts`, `src/auto-reply/reply/command-gates.ts`
- Runtime handoff: Inbound command text is detected and authorized here before any reply command handler can run.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `4` changed path(s) to this final leaf. `4` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 3, 'A': 1}`.

- `src/auto-reply/command-auth.ts`
- `src/auto-reply/command-detection.runtime-types.ts`
- `src/auto-reply/command-detection.ts`
- `src/auto-reply/reply/command-gates.ts`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `src/auto-reply/command-auth.owner-default.test.ts`
- `src/auto-reply/command-auth.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
