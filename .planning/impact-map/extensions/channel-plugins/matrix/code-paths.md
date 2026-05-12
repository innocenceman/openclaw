# Matrix Channel Plugin Code Paths

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Registration and crypto runtime

```text
openclaw.plugin.json -> package.json -> index.ts
  -> matrixPlugin + setMatrixRuntime
  -> plugin-entry.runtime crypto bootstrap/verification gateway methods
  -> registerMatrixCli
```

Impact: plugin load, crypto readiness, CLI/gateway methods.

## Setup/credentials/client

```text
setup/onboarding -> account-selection/auth-precedence/env-vars
  -> matrix/account-config + credentials-read/write
  -> client-bootstrap/sdk/client
```

Impact: login credentials, account precedence, storage paths, Matrix SDK lifecycle.

## Send/outbound/threading

```text
OpenClaw outbound -> outbound.ts/resolve-targets/session-route
  -> matrix/send.ts -> MatrixClient
  -> thread-bindings/direct-room/media-text
```

Impact: room/user target resolution, direct rooms, encrypted media, thread/session continuity.

## Actions/tools/diagnostics

```text
actions/tool-actions/cli
  -> matrix/actions/**
  -> backup/device/profile/poll/verification helpers
```

Impact: Matrix side-effect tools and crypto/device diagnostics.

## Graph-use rule

Use graph tools only after fresh bounded coverage is recorded in `.planning/tools/GRAPH-COVERAGE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `285` changed path(s) to this final leaf. `280` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 94, 'M': 176, 'D': 5, 'R': 10}`.

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
- `extensions/matrix/plugin-entry.handlers.runtime.ts`
- `extensions/matrix/runtime-api.ts`
- `extensions/matrix/runtime-heavy-api.ts`
- `extensions/matrix/runtime-setter-api.ts`
- `extensions/matrix/secret-contract-api.ts`
- `extensions/matrix/setup-entry.ts`
- `extensions/matrix/setup-plugin-api.ts`
- `extensions/matrix/src/account-selection.test.ts`
- `extensions/matrix/src/account-selection.ts`
- `extensions/matrix/src/actions.account-propagation.test.ts`
- `extensions/matrix/src/actions.test.ts`
- `extensions/matrix/src/actions.ts`
- `extensions/matrix/src/approval-auth.test.ts`
- `extensions/matrix/src/approval-auth.ts`
- `extensions/matrix/src/approval-handler.runtime.test.ts`
- `extensions/matrix/src/approval-handler.runtime.ts`
- `extensions/matrix/src/approval-ids.ts`
- `extensions/matrix/src/approval-native.test.ts`
- `... 另有 250 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

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

Deleted or renamed-away paths omitted from this active leaf: `2`. See the transition directory under `.planning/version-diff/` for historical evidence.

<!-- version-diff-refresh:v2026.5.4:end -->
