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
