# Shared Primitives Change-to-Test

Coverage: `verified`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

| Change scope         | First validation                                                                          | Escalation trigger                                                    | Notes                                                                |
| -------------------- | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `shared-primitives/` | Start with the nearest targeted tests named in `file-roles.md` or parent module evidence. | Escalate to consumer modules when behavior crosses the leaf boundary. | Fill with fresher validation evidence during the next verified wave. |

## 2026-05-09 validation result

Result: `verified`. Shared primitives and utils tests passed.

Raw logs live under `../../evidence/src-capabilities-shared-verified-wave-2026-05-09/logs/`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `440` (重命名/移动 12，新增 128，修改 286，删除 14).
- Target-existing path refs in active map: `414`; deleted/renamed-away refs kept only in transition artifacts: `26`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/chat/canvas-render.ts`
- `src/chat/tool-content.ts`
- `src/infra/agent-events.test.ts`
- `src/infra/agent-events.ts`
- `src/infra/approval-gateway-resolver.ts`
- `src/infra/approval-handler-bootstrap.test.ts`
- `src/infra/approval-handler-bootstrap.ts`
- `src/infra/approval-handler-runtime.ts`
- `src/infra/approval-native-route-coordinator.test.ts`
- `src/infra/approval-native-route-coordinator.ts`
- `src/infra/approval-native-route-notice.ts`
- `src/infra/approval-native-runtime.ts`
- `src/infra/approval-native-target-key.test.ts`
- `src/infra/approval-native-target-key.ts`
- `src/infra/approval-request-account-binding.ts`
- `src/infra/approval-turn-source.test.ts`
- `src/infra/approval-turn-source.ts`
- `src/infra/approval-view-model.ts`
- `src/infra/approval-view-model.types.ts`
- `src/infra/archive.test.ts`
- `src/infra/archive.ts`
- `src/infra/backup-create.test.ts`
- `src/infra/backup-create.ts`
- `src/infra/boundary-path.ts`
- `src/infra/brew.test.ts`
- `src/infra/brew.ts`
- `src/infra/browser-open.test.ts`
- `src/infra/browser-open.ts`
- `src/infra/build-stamp.test.ts`
- `src/infra/channel-approval-auth.ts`
- `src/infra/channel-summary.ts`
- `src/infra/clawhub-spec.ts`
- `src/infra/clawhub.test.ts`
- `src/infra/clawhub.ts`
- `src/infra/command-analysis/explain.test.ts`
- `src/infra/command-analysis/explain.ts`
- `src/infra/command-analysis/inline-eval.test.ts`
- `src/infra/command-analysis/inline-eval.ts`
- `src/infra/command-analysis/policy.ts`
- `src/infra/command-analysis/risks.test.ts`
- … plus 263 more target-existing changed paths.
<!-- version-diff-refresh:v2026.5.4:end -->
