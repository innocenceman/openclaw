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
- `src/commands/doctor-claude-cli.test.ts`
- `src/commands/doctor-claude-cli.ts`
- `src/commands/doctor-completion.ts`
- `src/commands/doctor-config-analysis.ts`
- `src/commands/doctor-config-flow.include-warning.test.ts`
- `src/commands/doctor-config-flow.missing-default-account-bindings.integration.test.ts`
- `... 另有 150 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `src/commands/configure.commands.ts`
- `src/commands/configure.daemon.test.ts`
- `src/commands/configure.daemon.ts`
- `src/commands/configure.gateway-auth.prompt-auth-config.test.ts`
- `src/commands/configure.gateway-auth.ts`
- `src/commands/configure.ts`
- `src/commands/configure.wizard.test.ts`
- `src/commands/configure.wizard.ts`
- `src/commands/daemon-install-helpers.test.ts`
- `src/commands/daemon-install-helpers.ts`
- `src/commands/doctor-auth-flat-profiles.test.ts`
- `src/commands/doctor-auth-flat-profiles.ts`
- `src/commands/doctor-auth-profile-config.ts`
- `src/commands/doctor-auth.ts`
- `src/commands/doctor-claude-cli.test.ts`
- `src/commands/doctor-claude-cli.ts`
- `src/commands/doctor-command-owner.test.ts`
- `src/commands/doctor-command-owner.ts`
- `src/commands/doctor-config-flow.test.ts`
- `src/commands/doctor-config-flow.ts`
- `src/commands/doctor-config-preflight.test.ts`
- `src/commands/doctor-config-preflight.ts`
- `src/commands/doctor-cron-dreaming-payload-migration.constants-drift.test.ts`
- `src/commands/doctor-cron-dreaming-payload-migration.ts`
- `src/commands/doctor-cron-legacy-delivery.ts`
- `src/commands/doctor-cron.test.ts`
- `src/commands/doctor-cron.ts`
- `src/commands/doctor-device-pairing.test.ts`
- `src/commands/doctor-device-pairing.ts`
- `src/commands/doctor-format.ts`
- `src/commands/doctor-gateway-daemon-flow.test.ts`
- `src/commands/doctor-gateway-daemon-flow.ts`
- `src/commands/doctor-gateway-health.test.ts`
- `src/commands/doctor-gateway-health.ts`
- `src/commands/doctor-gateway-services.test.ts`
- `src/commands/doctor-gateway-services.ts`
- `src/commands/doctor-install.ts`
- `src/commands/doctor-memory-search.test.ts`
- `src/commands/doctor-memory-search.ts`
- `src/commands/doctor-plugin-manifests.test.ts`
- … plus 118 more target-existing changed paths.

Deleted or renamed-away paths omitted from this active leaf: `4`. See the transition directory under `.planning/version-diff/` for historical evidence.

<!-- version-diff-refresh:v2026.5.4:end -->
