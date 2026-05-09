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
