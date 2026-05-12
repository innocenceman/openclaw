# Startup Process Change-to-Test

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

| Change scope       | First validation                                                                          | Escalation trigger                                                    | Notes                                                                |
| ------------------ | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `startup-process/` | Start with the nearest targeted tests named in `file-roles.md` or parent module evidence. | Escalate to consumer modules when behavior crosses the leaf boundary. | Fill with fresher validation evidence during the next verified wave. |

## 2026-05-09 validation result

Result: `exceptioned-deep-partial`. Bootstrap/node-host/process tests passed, but daemon unit suite failed; startup-process remains exceptioned.

Raw logs live under `../../evidence/src-capabilities-shared-verified-wave-2026-05-09/logs/`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `77` (修改 68，新增 9).
- Target-existing path refs in active map: `77`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/daemon/arg-split.ts`
- `src/daemon/cmd-argv.ts`
- `src/daemon/cmd-set.ts`
- `src/daemon/constants.ts`
- `src/daemon/exec-file.ts`
- `src/daemon/future-config-guard.ts`
- `src/daemon/inspect.test.ts`
- `src/daemon/inspect.ts`
- `src/daemon/launchd-plist.ts`
- `src/daemon/launchd-restart-handoff.test.ts`
- `src/daemon/launchd-restart-handoff.ts`
- `src/daemon/launchd.integration.e2e.test.ts`
- `src/daemon/launchd.test.ts`
- `src/daemon/launchd.ts`
- `src/daemon/paths.ts`
- `src/daemon/program-args.test.ts`
- `src/daemon/program-args.ts`
- `src/daemon/runtime-format.test.ts`
- `src/daemon/runtime-format.ts`
- `src/daemon/runtime-paths.test.ts`
- `src/daemon/runtime-paths.ts`
- `src/daemon/schtasks.install.test.ts`
- `src/daemon/schtasks.test.ts`
- `src/daemon/schtasks.ts`
- `src/daemon/service-audit.test.ts`
- `src/daemon/service-audit.ts`
- `src/daemon/service-env-plan.ts`
- `src/daemon/service-env-render-policy.ts`
- `src/daemon/service-env.test.ts`
- `src/daemon/service-env.ts`
- `src/daemon/service-layout.ts`
- `src/daemon/service-managed-env.ts`
- `src/daemon/service-path-policy.ts`
- `src/daemon/service-runtime.ts`
- `src/daemon/service-types.ts`
- `src/daemon/service.test.ts`
- `src/daemon/service.ts`
- `src/daemon/systemd-hints.test.ts`
- `src/daemon/systemd-linger.ts`
- `src/daemon/systemd-unavailable.test.ts`
- … plus 27 more target-existing changed paths.
<!-- version-diff-refresh:v2026.5.4:end -->
