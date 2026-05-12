# Config Doctor Commands Impact Leaf

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

## Parent module

- Impact module: `cli-commands/command-implementations/`
- Leaf: `config-doctor-commands/`

## Purpose

Configure, doctor, repair, daemon install, and config-analysis command flows.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `cli-command-surface`.
- Risk: `medium`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `192` (重命名/移动 12，修改 116，新增 55，删除 9).
- Target-existing changed paths listed here: `180`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `12`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

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
- `... 另有 168 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `cli-command-surface`
- Risk: `medium`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `162`
- Target-existing changed paths reflected here: `158`
- Deleted or renamed-away paths omitted from active impact-map: `4`

### Target-version changed paths

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

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
