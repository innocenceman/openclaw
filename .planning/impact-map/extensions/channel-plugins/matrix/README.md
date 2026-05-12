# Matrix Channel Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for the bundled Matrix channel plugin in `extensions/matrix/`.

Covers plugin registration, crypto runtime bootstrap/gateway methods, CLI registration, setup/onboarding/config/credentials, Matrix client lifecycle, encrypted media/device/backup health, monitor/send/outbound routing, direct room and target resolution, thread bindings, actions/tools, polls/reactions/profile/pins/verification, and Matrix-specific storage paths.

## Entry contracts

- Plugin id/channel id: `matrix`.
- Package contract: `@openclaw/matrix` with Matrix SDK/crypto deps and release dependency mirror allowlist.
- Loader boundary: `extensions/matrix/index.ts` registers channel, runtime, crypto bootstrap gateway methods, and Matrix CLI.

## Primary behavior surfaces

- `extensions/matrix/src/channel.ts`: plugin composition.
- `extensions/matrix/src/plugin-entry.runtime.ts`: crypto runtime/bootstrap gateway methods.
- `extensions/matrix/src/matrix/client-bootstrap.ts`, `client.ts`, `sdk.ts`: client lifecycle and Matrix SDK wrapper.
- `extensions/matrix/src/matrix/credentials*.ts`, `account-config.ts`, `accounts.ts`: credentials/account config.
- `extensions/matrix/src/matrix/send.ts`, `outbound.ts`, `resolve-targets.ts`: send/outbound target path.
- `extensions/matrix/src/matrix/actions/**`: Matrix action tools.

## Current validation state

Source inspection only; no product code, tests/builds, or graph indexes were run.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `channel-plugins`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `285` (新增 94，修改 176，删除 5，重命名/移动 10).
- Target-existing changed paths listed here: `280`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `5`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `extensions/matrix/CHANGELOG.md`
- `extensions/matrix/SPEC-SUPPORT.md`
- `extensions/matrix/api.ts`
- `extensions/matrix/auth-presence.ts`
- `extensions/matrix/channel-plugin-api.ts`
- `extensions/matrix/cli-metadata.ts`
- `extensions/matrix/contract-api.ts`
- `extensions/matrix/index.test.ts`
- `extensions/matrix/index.ts`
- `extensions/matrix/openclaw.plugin.json`
- `extensions/matrix/package.json`
- `... 另有 268 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `channel-plugins`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `147`
- Target-existing changed paths reflected here: `145`
- Deleted or renamed-away paths omitted from active impact-map: `2`

### Target-version changed paths

- `extensions/matrix/CHANGELOG.md`
- `extensions/matrix/api.ts`
- `extensions/matrix/auth-presence.ts`
- `extensions/matrix/doctor-contract-api.ts`
- `extensions/matrix/index.test.ts`
- `extensions/matrix/index.ts`
- `extensions/matrix/openclaw.plugin.json`
- `extensions/matrix/package.json`
- `extensions/matrix/runtime-api.ts`
- `extensions/matrix/src/account-selection.test.ts`
- `extensions/matrix/src/account-selection.ts`
- `extensions/matrix/src/actions.test.ts`
- `extensions/matrix/src/approval-handler.runtime.test.ts`
- `extensions/matrix/src/approval-handler.runtime.ts`
- `extensions/matrix/src/approval-native.test.ts`
- `extensions/matrix/src/approval-native.ts`
- `extensions/matrix/src/approval-reactions.test.ts`
- `extensions/matrix/src/approval-reactions.ts`
- `extensions/matrix/src/channel-account-paths.ts`
- `extensions/matrix/src/channel.directory.test.ts`
- `extensions/matrix/src/channel.resolve.test.ts`
- `extensions/matrix/src/channel.setup.test.ts`
- `extensions/matrix/src/channel.setup.ts`
- `extensions/matrix/src/channel.ts`
- `extensions/matrix/src/cli.test.ts`
- `extensions/matrix/src/cli.ts`
- `extensions/matrix/src/config-schema.test.ts`
- `extensions/matrix/src/config-schema.ts`
- `extensions/matrix/src/config-ui-hints.ts`
- `extensions/matrix/src/doctor-contract.ts`
- `extensions/matrix/src/doctor.ts`
- `extensions/matrix/src/exec-approval-resolver.ts`
- `extensions/matrix/src/exec-approvals.test.ts`
- `extensions/matrix/src/exec-approvals.ts`
- `extensions/matrix/src/group-mentions.test.ts`
- `extensions/matrix/src/legacy-crypto-inspector-availability.test.ts`
- `extensions/matrix/src/legacy-crypto.test.ts`
- `extensions/matrix/src/legacy-crypto.ts`
- `extensions/matrix/src/legacy-state.test.ts`
- `extensions/matrix/src/legacy-state.ts`
- … plus 105 more target-existing changed paths.

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
