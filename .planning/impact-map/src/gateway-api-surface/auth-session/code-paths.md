# Auth Session Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

- Primary paths: `src/gateway/auth.ts`, `src/gateway/auth-mode-policy.ts`, `src/gateway/connection-auth.ts`, `src/gateway/device-auth.ts`, `src/gateway/origin-check.ts`, `src/gateway/probe-auth.ts`
- Runtime handoff: Auth/session guards run ahead of serving and method dispatch to gate every incoming request.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `21` changed path(s) to this final leaf. `21` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 17, 'A': 4}`.

- `src/gateway/auth-mode-policy.ts`
- `src/gateway/auth.test.ts`
- `src/gateway/auth.ts`
- `src/gateway/connection-auth.test.ts`
- `src/gateway/connection-auth.ts`
- `src/gateway/origin-check.ts`
- `src/gateway/probe-auth.test.ts`
- `src/gateway/probe-auth.ts`
- `src/infra/node-pairing.test.ts`
- `src/infra/node-pairing.ts`
- `src/pairing/allow-from-store-file.ts`
- `src/pairing/allow-from-store-read.test.ts`
- `src/pairing/allow-from-store-read.ts`
- `src/pairing/pairing-challenge.test.ts`
- `src/pairing/pairing-labels.ts`
- `src/pairing/pairing-messages.ts`
- `src/pairing/pairing-store.test.ts`
- `src/pairing/pairing-store.ts`
- `src/pairing/pairing-store.types.ts`
- `src/pairing/setup-code.test.ts`
- `src/pairing/setup-code.ts`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `src/gateway/auth.test.ts`
- `src/gateway/auth.ts`
- `src/gateway/device-auth.ts`
- `src/gateway/probe-auth.test.ts`
- `src/gateway/probe-auth.ts`
- `src/infra/node-pairing.test.ts`
- `src/infra/node-pairing.ts`
- `src/pairing/allow-from-store-file.test.ts`
- `src/pairing/allow-from-store-file.ts`
- `src/pairing/allow-from-store-read.test.ts`
- `src/pairing/allow-from-store-read.ts`
- `src/pairing/pairing-messages.test.ts`
- `src/pairing/pairing-store.test.ts`
- `src/pairing/pairing-store.ts`
- `src/pairing/setup-code.test.ts`
- `src/pairing/setup-code.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
