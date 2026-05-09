# GitNexus evidence for G009 packages/test-infra

Scope: `packages/` compatibility packages and `test-infra/` profile/helper/mock surfaces.

## Query

- `query("packages clawdbot moltbot compatibility package exports postinstall package metadata")` returned no process results. This is expected for tiny package-shim JavaScript surfaces that are mostly package metadata.
- `query("test runner profile mocks helpers vitest test-parallel run-vitest-profile")` returned no process results. The indexed graph does contain individual script/mock symbols, so context and Cypher fallback were used below.

## Context findings

- `parseReleaseVersion` (`scripts/openclaw-npm-release-check.ts`) is called by release-check helpers, plugin release library helpers, postpublish install scenario building, and `test/openclaw-npm-release-check.test.ts`.
- `buildVitestProfileCommand` (`scripts/run-vitest-profile.mjs`) is called by `scripts/run-vitest-profile.mjs` main and `test/scripts/run-vitest-profile.test.ts`.
- `createMockBaileys` (`test/mocks/baileys.ts`) is called by `extensions/whatsapp/src/test-helpers.ts` and calls the individual mock normalization/content helpers in `test/mocks/baileys.ts`.

## Impact status

GitNexus `impact` was invoked for `parseReleaseVersion`, `buildVitestProfileCommand`, and `createMockBaileys`, but the MCP impact tool returned `user cancelled MCP tool call` immediately for each target, including target-UID and reduced-depth retries. This wave therefore does not use impact output for any verified promotion. It uses GitNexus `context` plus Cypher fallback only, and failed standard validations remain exceptioned.

## Cypher fallback

| targetName                | targetFile                            | callerName                            | callerFile                                 |
| ------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------------ |
| createMockBaileys         | test/mocks/baileys.ts                 | resetBaileysMocks                     | extensions/whatsapp/src/test-helpers.ts    |
| createMockBaileys         | test/mocks/baileys.ts                 | test-helpers.ts                       | extensions/whatsapp/src/test-helpers.ts    |
| parseReleaseVersion       | scripts/openclaw-npm-release-check.ts | collectPublishablePluginPackageErrors | scripts/lib/plugin-npm-release.ts          |
| parseReleaseVersion       | scripts/openclaw-npm-release-check.ts | collectPublishablePluginPackages      | scripts/lib/plugin-npm-release.ts          |
| parseReleaseVersion       | scripts/openclaw-npm-release-check.ts | parseReleaseTagVersion                | scripts/openclaw-npm-release-check.ts      |
| parseReleaseVersion       | scripts/openclaw-npm-release-check.ts | collectReleaseTagErrors               | scripts/openclaw-npm-release-check.ts      |
| parseReleaseVersion       | scripts/openclaw-npm-release-check.ts | main                                  | scripts/openclaw-npm-release-check.ts      |
| parseReleaseVersion       | scripts/openclaw-npm-release-check.ts | buildPublishedInstallScenarios        | scripts/openclaw-npm-postpublish-verify.ts |
| parseReleaseVersion       | scripts/openclaw-npm-release-check.ts | openclaw-npm-release-check.test.ts    | test/openclaw-npm-release-check.test.ts    |
| buildVitestProfileCommand | scripts/run-vitest-profile.mjs        | main                                  | scripts/run-vitest-profile.mjs             |
| buildVitestProfileCommand | scripts/run-vitest-profile.mjs        | run-vitest-profile.test.ts            | test/scripts/run-vitest-profile.test.ts    |
