# Plugin Runtime Impact Map

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

## Parent module

- Large module: `src/`
- Canonical impact-map slice: `src/plugin-runtime-sdk/plugins-runtime/`
- Source roots: `src/plugins/`

## Purpose

Plugin loading/discovery, runtime adapters, contract validation, and boundary enforcement for bundled and installed plugins.

## Risk profile

High: runtime-loader or boundary mistakes can break installation, discovery, or shared channel/provider behavior across all plugins.

## Wave 1R leaf status

| Leaf                    | Coverage   | Queue class | Source evidence                                                                                                     |
| ----------------------- | ---------- | ----------- | ------------------------------------------------------------------------------------------------------------------- |
| `runtime-loader/`       | `verified` | priority    | `src/plugins/loader.ts`, `src/plugins/discovery.ts`, `src/plugins/install*.ts`...                                   |
| `runtime-adapters/`     | `verified` | residual    | `src/plugins/runtime/**`, `src/plugins/provider-runtime.ts`, `src/plugins/services.ts`                              |
| `contracts/`            | `verified` | priority    | `src/plugins/contracts/**`, `src/plugins/manifest.ts`, `src/plugins/schema-validator.ts`                            |
| `boundary-enforcement/` | `verified` | priority    | `src/plugins/sdk-alias.ts`, `src/plugins/bundled-plugin-naming.test.ts`, `src/plugins/install-security-scan.ts`...  |
| `test-helpers/`         | `verified` | residual    | `src/plugins/test-helpers/**`, `src/plugins/generated-plugin-test-helpers.ts`, `src/plugins/status.test-helpers.ts` |

## Cross-module links

- ../README.md
- ../../channel-abstraction/README.md
- ../../cli-commands/README.md
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `plugin-sdk-core`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `156` (删除 30，修改 41，新增 79，重命名/移动 6).
- Target-existing changed paths listed here: `124`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `32`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/plugins/bundled-plugin-naming.test.ts`
- `src/plugins/contracts/boundary-invariants.test.ts`
- `src/plugins/contracts/bundled-extension-config-api-guardrails.test.ts`
- `src/plugins/contracts/config-footprint-guardrails.test.ts`
- `src/plugins/contracts/core-extension-facade-boundary.test.ts`
- `src/plugins/contracts/extension-package-project-boundaries.test.ts`
- `src/plugins/contracts/extension-runtime-dependencies.contract.test.ts`
- `src/plugins/contracts/inventory/bundled-capability-metadata.ts`
- `src/plugins/contracts/loader.contract.test.ts`
- `src/plugins/contracts/memory-embedding-provider.contract.test.ts`
- `... 另有 112 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `plugin-sdk-core`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `139`
- Target-existing changed paths reflected here: `135`
- Deleted or renamed-away paths omitted from active impact-map: `4`

### Target-version changed paths

- `src/plugins/bundled-plugin-naming.test.ts`
- `src/plugins/contracts/auth-choice.contract.test.ts`
- `src/plugins/contracts/boundary-invariants.test.ts`
- `src/plugins/contracts/bundled-extension-config-api-guardrails.test.ts`
- `src/plugins/contracts/config-boundary-guard.test.ts`
- `src/plugins/contracts/config-footprint-guardrails.test.ts`
- `src/plugins/contracts/core-extension-facade-boundary.test.ts`
- `src/plugins/contracts/deprecated-internal-config-api.test.ts`
- `src/plugins/contracts/extension-package-project-boundaries.test.ts`
- `src/plugins/contracts/extension-runtime-dependencies.contract.test.ts`
- `src/plugins/contracts/host-hook-fixture.ts`
- `src/plugins/contracts/host-hooks.contract.test.ts`
- `src/plugins/contracts/inventory/bundled-capability-metadata.ts`
- `src/plugins/contracts/loader.contract.test.ts`
- `src/plugins/contracts/memory-embedding-provider.contract.test.ts`
- `src/plugins/contracts/package-manifest.contract.test.ts`
- `src/plugins/contracts/plugin-registration.anthropic.contract.test.ts`
- `src/plugins/contracts/plugin-registration.brave.contract.test.ts`
- `src/plugins/contracts/plugin-registration.comfy.contract.test.ts`
- `src/plugins/contracts/plugin-registration.deepgram.contract.test.ts`
- `src/plugins/contracts/plugin-registration.duckduckgo.contract.test.ts`
- `src/plugins/contracts/plugin-registration.elevenlabs.contract.test.ts`
- `src/plugins/contracts/plugin-registration.exa.contract.test.ts`
- `src/plugins/contracts/plugin-registration.fal.contract.test.ts`
- `src/plugins/contracts/plugin-registration.firecrawl.contract.test.ts`
- `src/plugins/contracts/plugin-registration.google.contract.test.ts`
- `src/plugins/contracts/plugin-registration.groq.contract.test.ts`
- `src/plugins/contracts/plugin-registration.microsoft.contract.test.ts`
- `src/plugins/contracts/plugin-registration.minimax.contract.test.ts`
- `src/plugins/contracts/plugin-registration.mistral.contract.test.ts`
- `src/plugins/contracts/plugin-registration.moonshot.contract.test.ts`
- `src/plugins/contracts/plugin-registration.openai.contract.test.ts`
- `src/plugins/contracts/plugin-registration.openrouter.contract.test.ts`
- `src/plugins/contracts/plugin-registration.perplexity.contract.test.ts`
- `src/plugins/contracts/plugin-registration.senseaudio.contract.test.ts`
- `src/plugins/contracts/plugin-registration.tavily.contract.test.ts`
- `src/plugins/contracts/plugin-registration.tts-local-cli.contract.test.ts`
- `src/plugins/contracts/plugin-registration.xai.contract.test.ts`
- `src/plugins/contracts/plugin-registration.zai.contract.test.ts`
- `src/plugins/contracts/plugin-sdk-index.bundle.test.ts`
- … plus 95 more target-existing changed paths.

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
