# Technology Stack

**Analysis Date:** 2026-05-09

## Languages

**Primary:**

- TypeScript - CLI, gateway, plugin runtime, agents, providers, channels, scripts, and most tests in `src/`, `extensions/`, `scripts/`, `packages/`, and `test/`.
- Swift 6 - macOS app, iOS app, shared Apple libraries, widgets, watch extension, and tests in `apps/macos/`, `apps/ios/`, and `apps/shared/OpenClawKit/`.
- Kotlin - Android app, Android node bridge, Jetpack Compose UI, and Android unit tests in `apps/android/app/src/main/java/ai/openclaw/app/` and `apps/android/app/src/test/java/ai/openclaw/app/`.

**Secondary:**

- JavaScript / MJS - CLI shim and build/test orchestration in `openclaw.mjs`, `scripts/*.mjs`, and package tooling.
- Shell - installer, Docker, release, smoke-test, and platform scripts in `scripts/`, `scripts/e2e/`, and `git-hooks/`.
- Markdown / MDX - product documentation in `docs/` and repository docs such as `README.md`.
- HTML/CSS - exported templates and Control UI assets in `ui/`, `src/canvas-host/`, and `src/gateway/control-ui.ts`.

## Runtime

**Environment:**

- Node.js `>=22.14.0` for development and npm package runtime, declared in `package.json`.
- Docker runtime uses pinned Node 24 Bookworm images in `Dockerfile`; default gateway container command runs `node dist/index.js gateway`.
- Bun is a supported development execution path and is installed in Docker build stages for build scripts, but production runtime remains Node.
- Swift Package Manager and Xcode build iOS/macOS targets from `apps/macos/Package.swift` and `apps/ios/project.yml`.
- Android Gradle Plugin `9.1.0`, Kotlin `2.2.21`, Java 17 bytecode, minSdk 31, target/compileSdk 36 in `apps/android/build.gradle.kts` and `apps/android/app/build.gradle.kts`.

**Package Manager:**

- pnpm `10.33.2`, declared in `package.json`.
- Lockfile: `pnpm-lock.yaml` present.
- Workspace manifest: `pnpm-workspace.yaml` includes `.`, `ui`, `packages/*`, and `extensions/*`.
- Bun install is supported for local development; keep `pnpm-lock.yaml` authoritative for dependency resolution.
- `.npmrc` is present; contents were not inspected because package-manager auth files are treated as sensitive.

## Frameworks

**Core:**

- Commander `^14.0.3` - CLI command registration and argument parsing through `src/cli/` and `src/commands/`.
- Express `^5.2.1` - HTTP surfaces such as media serving in `src/media/server.ts` and several channel webhook integrations.
- Hono `4.12.8` - lightweight HTTP/server utility dependency for gateway and plugin surfaces.
- WebSocket `ws ^8.20.0` - gateway, voice-call, Discord gateway, browser CDP, and OpenAI realtime WebSocket paths in `src/gateway/`, `src/agents/openai-ws-connection.ts`, and `extensions/voice-call/`.
- Agent Client Protocol SDK `@agentclientprotocol/sdk 0.16.1` - ACP client/server and translation layer in `src/acp/`.
- Model Context Protocol SDK `@modelcontextprotocol/sdk 1.27.1` - bundled MCP tool client support in `src/agents/pi-bundle-mcp-tools.ts`.
- Pi agent packages `@mariozechner/pi-agent-core`, `@mariozechner/pi-ai`, `@mariozechner/pi-coding-agent`, and `@mariozechner/pi-tui` at `0.61.1` - embedded coding agent, model, and TUI runtime integration in `src/agents/` and `src/tui/`.
- Lit `^3.3.2` and Vite `8.0.1` - web Control UI in `ui/`.
- SwiftUI / Observation - Apple app UI and state management in `apps/macos/`, `apps/ios/`, and `apps/shared/OpenClawKit/`.
- Jetpack Compose - Android UI in `apps/android/app/src/main/java/ai/openclaw/app/ui/`.

**Testing:**

- Vitest `^4.1.0` - TypeScript unit, gateway, extension, e2e, live, and coverage suites configured by `vitest.config.ts`, `vitest.unit.config.ts`, `vitest.gateway.config.ts`, `vitest.extensions.config.ts`, `vitest.e2e.config.ts`, and `vitest.live.config.ts`.
- V8 coverage via `@vitest/coverage-v8 ^4.1.0`; thresholds in `vitest.config.ts` require 70% lines/functions/statements and 55% branches for covered core files.
- Android unit tests use Gradle/JUnit/Robolectric-style Android resources through `apps/android/app/build.gradle.kts`.
- Swift tests use SwiftPM/Xcode targets in `apps/macos/Package.swift` and `apps/ios/project.yml`.

**Build/Dev:**

- TypeScript `^5.9.3` with `module`/`moduleResolution` set to `NodeNext` and strict checking in `tsconfig.json`.
- `@typescript/native-preview 7.0.0-dev.20260322.1` is used by `pnpm tsgo`.
- tsdown `0.21.4` bundles core, plugin SDK subpaths, bundled plugins, and bundled hooks from `tsdown.config.ts`.
- Oxfmt `0.41.0` and Oxlint `^1.56.0` provide formatting and type-aware linting through `pnpm format:check` and `pnpm lint`.
- Knip config in `knip.config.ts`, jscpd `4.0.8`, `ts-prune`, and `ts-unused-exports` support dead-code and duplication checks.
- Mintlify docs workflow uses `docs/` with commands in `package.json` such as `docs:dev`, `check:docs`, `docs:check-links`, and `docs:check-i18n-glossary`.

## Key Dependencies

**Critical:**

- `@sinclair/typebox 0.34.48`, `zod ^4.3.6`, and `ajv ^8.18.0` - config, plugin schema, channel schema, gateway payload, and tool schema validation across `src/config/`, `src/plugins/`, and `extensions/*/src/config-schema.ts`.
- `undici ^7.24.5` - HTTP fetch, proxy dispatchers, SSRF-guarded remote calls, and provider/channel HTTP transport in `src/infra/net/`, `extensions/telegram/src/fetch.ts`, and `extensions/zalo/src/proxy.ts`.
- `playwright-core 1.58.2` - browser control, session reuse, web screenshots, and Diffs plugin browser automation in `src/browser/` and `extensions/diffs/src/browser.ts`.
- `sharp ^0.34.5`, `file-type 21.3.4`, `pdfjs-dist ^5.5.207`, `@mozilla/readability ^0.6.0`, and `linkedom ^0.18.12` - media, document, PDF, web-page, and content-understanding pipelines in `src/media/`, `src/media-understanding/`, and `src/agents/tools/`.
- `node:sqlite` plus `sqlite-vec 0.1.7` - built-in SQLite memory backend and vector extension loading in `src/memory/sqlite.ts` and `src/memory/sqlite-vec.ts`.
- `@lydell/node-pty 1.2.0-beta.3` - terminal process integration for agent/TUI/shell features.
- `jiti ^2.6.1` - runtime TypeScript/extension loading and plugin SDK alias support.
- `tslog ^4.10.2`, `chalk ^5.6.2`, `@clack/prompts ^1.1.0`, and `osc-progress ^0.3.0` - structured logs, terminal output, prompts, and CLI progress surfaces.

**Infrastructure:**

- `dotenv ^17.3.1` and JSON5 - config/environment loading in `src/config/io.ts` and `src/infra/dotenv.js`.
- `tar 7.5.12`, `jszip ^3.10.1`, `yaml ^2.8.3`, and `json5 ^2.2.3` - package, archive, config, and docs tooling.
- `@aws-sdk/client-bedrock ^3.1014.0` and `@anthropic-ai/vertex-sdk ^0.14.4` - Bedrock and Anthropic Vertex provider integrations in `src/agents/bedrock-discovery.ts` and `src/agents/anthropic-vertex-stream.ts`.
- `gaxios 7.1.4` - Google API fetch compatibility in `src/infra/gaxios-fetch-compat.ts`.
- Channel SDKs are kept inside plugin packages, for example `extensions/slack/package.json`, `extensions/telegram/package.json`, `extensions/discord/package.json`, `extensions/matrix/package.json`, `extensions/line/package.json`, and `extensions/msteams/package.json`.
- Optional runtime dependency `openshell 0.1.0` supports the OpenShell sandbox plugin in `extensions/openshell/`.

## Configuration

**Environment:**

- Main config file: `openclaw.json`, resolved under the OpenClaw state directory by `src/config/paths.ts`.
- Default state directory: `.openclaw` under the user home, with overrides through `OPENCLAW_STATE_DIR` and `OPENCLAW_CONFIG_PATH` in `src/config/paths.ts`.
- Config supports JSON/JSON5, includes, env substitution, runtime overrides, backups, migrations, and schema validation in `src/config/io.ts`, `src/config/includes.ts`, `src/config/env-substitution.ts`, `src/config/runtime-overrides.ts`, and `src/config/schema.ts`.
- Provider and channel credentials are accepted through config, environment variables, and auth profiles; common keys are enumerated in `src/config/io.ts` and bundled plugin metadata such as `extensions/openai/openclaw.plugin.json`.
- Auth profile credentials live in `auth-profiles.json` under the agent directory, resolved by `src/agents/auth-profiles/paths.ts` and loaded by `src/agents/auth-profiles/store.ts`.
- Secrets are redacted through the sensitive registry in `src/config/zod-schema.sensitive.ts` and runtime secret references in `src/secrets/`.
- `.env.example` and `openclaw.podman.env` are present as environment examples; no env file contents were inspected.

**Build:**

- `tsconfig.json` sets strict ES2023 TypeScript, NodeNext modules, generated declarations, and `openclaw/plugin-sdk/*` path aliases.
- `tsconfig.plugin-sdk.dts.json` drives public plugin SDK declaration generation.
- `tsdown.config.ts` emits `dist/` entries for `src/index.ts`, `src/entry.ts`, CLI runtime boundaries, plugin SDK subpaths, bundled plugins, and bundled hooks.
- `vitest.config.ts` defines shared test defaults, plugin SDK aliases, fork worker pool, coverage thresholds, and test inclusion/exclusion rules.
- `Dockerfile`, `Dockerfile.sandbox`, `Dockerfile.sandbox-browser`, `Dockerfile.sandbox-common`, and `docker-compose.yml` define container, sandbox, and local gateway deployment.
- `ui/package.json`, `ui/vite.config.ts`, `ui/vitest.config.ts`, and `ui/vitest.node.config.ts` define the Control UI build/test toolchain.
- `apps/android/build.gradle.kts`, `apps/android/app/build.gradle.kts`, `apps/ios/project.yml`, and `apps/macos/Package.swift` define mobile and desktop app builds.

## Platform Requirements

**Development:**

- Node.js `>=22.14.0`, pnpm `10.33.2`, and Corepack for the TypeScript CLI/gateway.
- Bun for preferred TypeScript script/dev execution and Docker build scripts.
- Docker/Podman for install smoke tests, sandbox images, and gateway container deployment.
- Xcode, XcodeGen, Swift 6 tooling, SwiftFormat, and SwiftLint for iOS/macOS app work.
- Android Studio/Gradle with JDK 17, Android SDK 36, and Kotlin `2.2.21` for Android app work.
- Playwright-compatible Chromium for browser control and browser-backed tests.

**Production:**

- npm package exports `openclaw` via `openclaw.mjs` and built output in `dist/`, declared in `package.json`.
- Gateway process runs as a Node service locally, in Docker, or under the macOS companion app.
- Docker image runs as non-root `node` user, exposes gateway port `18789` and bridge port `18790`, and healthchecks `/healthz` in `Dockerfile` and `docker-compose.yml`.
- macOS app packages from `apps/macos/`; iOS app targets iOS 18.0 from `apps/ios/project.yml`; Android app targets SDK 36 from `apps/android/app/build.gradle.kts`.

---

_Stack analysis: 2026-05-09_
