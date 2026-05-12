# Anthropic Provider Plugin Code Paths

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

## 1. Plugin registration and auth choices

```text
openclaw.plugin.json -> package.json -> index.ts
  -> auth methods (setup-token, api-key)
  -> wizard setup/model picker metadata
```

Impact: Provider discovery, onboarding choices, CLI flags, and auth profile defaults.

## 2. Setup-token and API-key auth path

```text
index.ts
  -> validateAnthropicSetupToken / promptSecretRefForSetup / upsertAuthProfile
  -> createProviderApiKeyAuthMethod
```

Impact: Interactive auth, secret-ref support, auth profile writes, and API-key fallback behavior.

## 3. Model alias and doctor-hint path

```text
index.ts
  -> resolveAnthropicForwardCompatModel
  -> buildAnthropicAuthDoctorHint
```

Impact: Forward-compat model ids, legacy default-profile repair hints, and status/list output.

## 4. Media-understanding path

```text
media-understanding-provider.ts
  -> describeImageWithModel / describeImagesWithModel
```

Impact: Anthropic image analysis registration in the shared media registry.

## Trace rule

Start with repo-native file inspection and the nearest local tests named in `change-to-test.md`. Use graph tools only after fresh bounded graph coverage is recorded for the exact slice.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `29` changed path(s) to this final leaf. `27` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 11, 'A': 16, 'D': 2}`.

- `extensions/anthropic/api.ts`
- `extensions/anthropic/cli-auth-seam.ts`
- `extensions/anthropic/cli-backend-api.ts`
- `extensions/anthropic/cli-backend.ts`
- `extensions/anthropic/cli-constants.ts`
- `extensions/anthropic/cli-migration.test.ts`
- `extensions/anthropic/cli-migration.ts`
- `extensions/anthropic/cli-shared.test.ts`
- `extensions/anthropic/cli-shared.ts`
- `extensions/anthropic/config-defaults.ts`
- `extensions/anthropic/contract-api.ts`
- `extensions/anthropic/index.test.ts`
- `extensions/anthropic/index.ts`
- `extensions/anthropic/media-understanding-provider.ts`
- `extensions/anthropic/openclaw.plugin.json`
- `extensions/anthropic/package.json`
- `extensions/anthropic/provider-contract-api.ts`
- `extensions/anthropic/provider-policy-api.test.ts`
- `extensions/anthropic/provider-policy-api.ts`
- `extensions/anthropic/provider-runtime.contract.test.ts`
- `extensions/anthropic/register.runtime.ts`
- `extensions/anthropic/replay-policy.ts`
- `extensions/anthropic/setup-api.ts`
- `extensions/anthropic/stream-wrappers.test.ts`
- `extensions/anthropic/stream-wrappers.ts`
- `extensions/anthropic/test-api.ts`
- `extensions/anthropic/tsconfig.json`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `extensions/anthropic/cli-backend.ts`
- `extensions/anthropic/cli-migration.test.ts`
- `extensions/anthropic/cli-migration.ts`
- `extensions/anthropic/cli-shared.test.ts`
- `extensions/anthropic/cli-shared.ts`
- `extensions/anthropic/config-defaults.ts`
- `extensions/anthropic/doctor-contract-api.ts`
- `extensions/anthropic/index.test.ts`
- `extensions/anthropic/openclaw.plugin.json`
- `extensions/anthropic/package.json`
- `extensions/anthropic/provider-discovery.ts`
- `extensions/anthropic/provider-policy-api.test.ts`
- `extensions/anthropic/provider-policy-api.ts`
- `extensions/anthropic/provider-runtime.contract.test.ts`
- `extensions/anthropic/register.runtime.ts`
- `extensions/anthropic/stream-wrappers.test.ts`
- `extensions/anthropic/stream-wrappers.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
