# Config Doctor Commands Change-to-Test Ladder

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

1. Run targeted configure/doctor tests for changed command files.
2. Run `config-secrets-security/` tests when config/schema/security behavior changes.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `192` (重命名/移动 12，修改 116，新增 55，删除 9).
- Target-existing path refs in active map: `180`; deleted/renamed-away refs kept only in transition artifacts: `12`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

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
<!-- version-diff-refresh:v2026.5.4:end -->
