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
