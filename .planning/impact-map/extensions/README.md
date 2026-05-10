# Extensions Impact Map

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G006 extension plugin wave evidence recorded

This module covers workspace plugins under `extensions/*`, including channel plugins, provider plugins, tool/search/media plugins, diagnostics plugins, and shared extension support.

## Repo-native evidence snapshot

Inspected without graph indexes:

- `find extensions -mindepth 2 -maxdepth 2 -name openclaw.plugin.json -o -name package.json`
- Python JSON scans over `extensions/*/openclaw.plugin.json`, `extensions/*/package.json`, and root `package.json` scripts
- `rg` scans for plugin entry helpers, `openclaw/plugin-sdk/*` imports, channel plugin files, provider helpers, and plugin/channel contract tests

Observed facts:

- 80 extension manifests under `extensions/*/openclaw.plugin.json`.
- 75 extension `package.json` files.
- 80 extension `index.ts` entrypoints.
- 37 extensions have a `src/` directory; many provider/config-only plugins are root-entrypoint-only.
- Manifest categories include 21 channel plugins, 35 provider plugins, and 6 skill-bearing plugins.
- Manifest keys observed include `id`, `configSchema`, `channels`, `providers`, `providerAuthEnvVars`, `providerAuthChoices`, `skills`, `uiHints`, `enabledByDefault`, and `kind`.
- Only `workspace:*` dependency observations were `openclaw` in extension `devDependencies`; affected packages also declare `openclaw` in `peerDependencies` with `>=2026.3.22`.
- `extensions/shared/` and `extensions/anthropic-vertex/` are support-only helper directories with no manifest-backed leaf row in the current taxonomy. They need explicit controller-ledger treatment if Wave 2R requires non-leaf residue accounting.

Historical Wave 2/Wave 2R setup was repo-native only. G006 adds targeted extension/package validation evidence and keeps the overall module `exceptioned-deep-partial` because several leaves still have failures, timeouts, or no dedicated tests.

## Submodules

| Submodule                  | Directory                     | Coverage                   | Primary risk                                                                             | First validation                                  |
| -------------------------- | ----------------------------- | -------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------- |
| Plugin boundaries          | `plugin-boundaries/`          | `verified`                 | public SDK/import boundaries, manifest/package naming, internal self-imports             | `plugin-boundaries/change-to-test.md`             |
| Channel plugins            | `channel-plugins/`            | `exceptioned-deep-partial` | inbound/outbound message contracts, setup/status forms, channel IDs                      | `channel-plugins/change-to-test.md`               |
| Provider plugins           | `provider-plugins/`           | `exceptioned-deep-partial` | model/provider auth, catalog, stream, usage, and onboarding behavior                     | provider leaf tests and provider/plugin contracts |
| Tool/capability plugins    | `tool-capability-plugins/`    | `verified`                 | tool/search/control/capability plugin behavior                                           | category leaf first                               |
| Memory/media/voice plugins | `memory-media-voice-plugins/` | `exceptioned-deep-partial` | memory/media/speech/voice plugin behavior                                                | category leaf first                               |
| Auth/integration plugins   | `auth-integration-plugins/`   | `exceptioned-deep-partial` | auth/diagnostics/integration plugin behavior                                             | category leaf first                               |
| Skill plugins              | `skill-plugins/`              | `exceptioned-deep-partial` | skill directory/export behavior and skill command UX                                     | skill leaf tests and skill refresh checks         |
| Runtime dependencies       | `package-runtime-deps/`       | `exceptioned-deep-partial` | runtime deps in extension packages, `workspace:*` install breakage, lazy/runtime loading | `package-runtime-deps/change-to-test.md`          |

## Extension taxonomy

| Type                                | Count | Examples                                                                 | Notes                                                                                   |
| ----------------------------------- | ----: | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| Channel plugins                     |    21 | `discord`, `matrix`, `slack`, `telegram`, `whatsapp`, `zalo`, `zalouser` | Use `defineChannelPluginEntry` and channel contract tests when shared behavior changes. |
| Provider plugins                    |    35 | `anthropic`, `openai`, `ollama`, `xai`, `zai`, `qianfan`                 | Use provider/plugin contracts plus provider-specific targeted tests.                    |
| Skill-bearing plugins               |     6 | `acpx`, `diffs`, `feishu`, `open-prose`, `tavily`, `tlon`                | Skill directory or command-surface changes can affect agent/tool UX and docs.           |
| Root-entrypoint/config-only plugins |  many | `amazon-bedrock`, `brave`, `deepseek`, `openrouter`                      | Many have no `src/`; impact starts at `index.ts`, manifest, and package metadata.       |

## Boundary rules

- Keep plugin-only runtime deps in the extension `package.json`.
- Do not put `workspace:*` in extension `dependencies`; install-on-demand runs `npm install --omit=dev` inside the plugin directory.
- Extension production code should import via `openclaw/plugin-sdk/*` or local `api.ts` / `runtime-api.ts` barrels, not core `src/**` or another extension's `src/**`.
- Built-in and extension channel behavior must be considered together for routing, allowlists, pairing, command gating, onboarding, docs, and UI lists.

## Aggregate validation

Aggregate extension validation starts at `change-to-test.md`.

## Leaf indexes

| Leaf family                | Index                                      | Split rule                                                 |
| -------------------------- | ------------------------------------------ | ---------------------------------------------------------- |
| Channel plugins            | `channel-plugins/leaf-index.md`            | one leaf per manifest-declared channel plugin              |
| Provider plugins           | `provider-plugins/leaf-index.md`           | one leaf per provider plugin package                       |
| Skill plugins              | `skill-plugins/leaf-index.md`              | one leaf per skill-bearing plugin package                  |
| Tool/capability plugins    | `tool-capability-plugins/leaf-index.md`    | one leaf per tool/search/control/capability plugin package |
| Memory/media/voice plugins | `memory-media-voice-plugins/leaf-index.md` | one leaf per memory/media/speech/voice plugin package      |
| Auth/integration plugins   | `auth-integration-plugins/leaf-index.md`   | one leaf per auth/diagnostics/integration-style package    |

## 2026-05-09 G006 extension plugin wave

Decision: `exceptioned-deep-partial` overall.

This wave reused the existing per-plugin leaf taxonomy; no additional split was needed because channel, provider, tool, memory/media/voice, auth/integration, and skill rows already map to one plugin package or one narrow plugin family. The wave promoted leaves with fresh targeted passing evidence, preserved prior verified rows where still covered, and marked leaves with no dedicated tests, network-dependent failures, or bounded-command timeouts as `exceptioned-deep-partial` instead of over-promoting them.

Evidence: `.planning/impact-map/evidence/extensions-all-verified-wave-2026-05-09/EXTENSIONS-ALL-VERIFIED-WAVE.md`.
