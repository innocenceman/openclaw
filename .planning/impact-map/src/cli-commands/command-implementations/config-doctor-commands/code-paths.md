# Config Doctor Commands Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

- Primary paths: `src/commands/configure*.ts`, `src/commands/doctor*.ts`, `src/commands/doctor/**`, `src/commands/daemon*.ts`, `src/commands/config-validation.ts`
- Runtime handoff: CLI config/doctor commands inspect or repair config/runtime state before crossing into config, daemon, security, or channel modules.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `192` changed path(s) to this final leaf. `180` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'R': 12, 'M': 116, 'A': 55, 'D': 9}`.

- `src/commands/config-validation.test.ts`
- `src/commands/config-validation.ts`
- `src/commands/configure.daemon.test.ts`
- `src/commands/configure.daemon.ts`
- `src/commands/configure.gateway-auth.prompt-auth-config.test.ts`
- `src/commands/configure.gateway-auth.ts`
- `src/commands/configure.gateway.ts`
- `src/commands/configure.shared.ts`
- `src/commands/configure.wizard.test.ts`
- `src/commands/configure.wizard.ts`
- `src/commands/daemon-install-auth-profiles-source.runtime.ts`
- `src/commands/daemon-install-auth-profiles-store.runtime.ts`
- `src/commands/daemon-install-helpers.test.ts`
- `src/commands/daemon-install-helpers.ts`
- `src/commands/daemon-install-plan.shared.ts`
- `src/commands/doctor-auth.deprecated-cli-profiles.test.ts`
- `src/commands/doctor-auth.hints.test.ts`
- `src/commands/doctor-auth.profile-health.test.ts`
- `src/commands/doctor-auth.ts`
- `src/commands/doctor-bootstrap-size.ts`
- `src/commands/doctor-browser.facade.test.ts`
- `src/commands/doctor-browser.ts`
- `src/commands/doctor-bundled-plugin-runtime-deps.test.ts`
- `src/commands/doctor-bundled-plugin-runtime-deps.ts`
- `src/commands/doctor-claude-cli.test.ts`
- `src/commands/doctor-claude-cli.ts`
- `src/commands/doctor-completion.ts`
- `src/commands/doctor-config-analysis.ts`
- `src/commands/doctor-config-flow.include-warning.test.ts`
- `src/commands/doctor-config-flow.missing-default-account-bindings.integration.test.ts`
- `... 另有 150 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->
