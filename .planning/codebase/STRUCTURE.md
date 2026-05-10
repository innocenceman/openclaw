# Codebase Structure

**Analysis Date:** 2026-05-09

## Directory Layout

```text
[project-root]/
├── openclaw.mjs                  # npm CLI wrapper that loads built dist entry
├── package.json                  # Node package metadata, exports, scripts, dependencies
├── pnpm-workspace.yaml           # Workspace packages: root, ui, packages/*, extensions/*
├── tsdown.config.ts              # Build graph for core, Plugin SDK, bundled plugins, bundled hooks
├── src/                          # Core TypeScript CLI, gateway, agents, plugins, infra
├── extensions/                   # Repo-owned OpenClaw plugin workspace packages
├── apps/                         # Native Android, iOS/watchOS, macOS, and shared Swift clients
├── ui/                           # Control UI package referenced by workspace/build scripts
├── packages/                     # Small published/auxiliary npm packages
├── scripts/                      # Build, release, docs, tests, packaging, smoke, and maintenance scripts
├── docs/                         # Mintlify documentation and generated docs baselines
├── skills/                       # OpenClaw user-facing skill assets/packages
├── assets/                       # Static assets such as Chrome extension files
├── patches/                      # pnpm patch files for approved patched dependencies
├── .github/                      # GitHub workflows, labels, templates, actions, CodeQL config
└── .planning/codebase/           # GSD codebase analysis documents
```

## Directory Purposes

**`src/`:**

- Purpose: Core OpenClaw Node/TypeScript implementation.
- Contains: CLI bootstrap, command modules, gateway server, agent runtime, auto-reply, config/session stores, channel contracts, plugin loader/runtime, infra utilities, media/memory/security subsystems.
- Key files: `src/entry.ts`, `src/index.ts`, `src/cli/run-main.ts`, `src/gateway/server.impl.ts`, `src/plugins/loader.ts`, `src/agents/agent-command.ts`, `src/auto-reply/dispatch.ts`

**`src/cli/`:**

- Purpose: CLI argument normalization, Commander program construction, command registration, CLI UI helpers, and command-specific CLI wrappers.
- Contains: `*-cli.ts` modules, option parsers, command routing, root help, progress/table helpers, runtime send boundaries.
- Key files: `src/cli/run-main.ts`, `src/cli/program.ts`, `src/cli/program/command-registry.ts`, `src/cli/deps.ts`, `src/cli/gateway-cli.ts`, `src/cli/config-cli.ts`

**`src/cli/program/`:**

- Purpose: Commander tree infrastructure and lazy command registration.
- Contains: command descriptors, registrar modules, help/preaction/context helpers, root help.
- Key files: `src/cli/program/build-program.ts`, `src/cli/program/command-registry.ts`, `src/cli/program/core-command-descriptors.ts`, `src/cli/program/register.subclis.ts`

**`src/commands/`:**

- Purpose: Command implementation layer below CLI parsing.
- Contains: agent, channels, doctor, gateway status, models, setup, onboarding, and status-all command logic.
- Key files: `src/commands/agent.ts`, `src/commands/gateway-status/`, `src/commands/doctor/`, `src/commands/setup/`

**`src/gateway/`:**

- Purpose: WebSocket/HTTP gateway server, control-plane RPC, protocol schemas, client implementation, health/status, node/mobile pairing, sessions, and control UI endpoints.
- Contains: server startup, WS connection handling, RPC method groups, protocol schemas, auth/rate-limit/origin checks, node/client registries, gateway tests.
- Key files: `src/gateway/server.ts`, `src/gateway/server.impl.ts`, `src/gateway/client.ts`, `src/gateway/protocol/index.ts`, `src/gateway/server-methods.ts`, `src/gateway/server-methods-list.ts`

**`src/gateway/server-methods/`:**

- Purpose: Focused RPC method handler groups.
- Contains: handlers for `agent`, `agents`, `browser`, `channels`, `chat`, `config`, `cron`, `devices`, `health`, `models`, `nodes`, `send`, `sessions`, `skills`, `system`, `tts`, `wizard`, and related helpers.
- Key files: `src/gateway/server-methods/agent.ts`, `src/gateway/server-methods/config.ts`, `src/gateway/server-methods/sessions.ts`, `src/gateway/server-methods/types.ts`

**`src/agents/`:**

- Purpose: Agent execution, model/provider selection, tools, subagent/ACP spawning, workspaces, auth profiles, sandbox helpers, embedded Pi agent integration.
- Contains: command runner, ACP spawn support, CLI runner, tools, schemas, skills, session/workspace helpers.
- Key files: `src/agents/agent-command.ts`, `src/agents/acp-spawn.ts`, `src/agents/model-selection.ts`, `src/agents/tools/common.ts`, `src/agents/workspace.ts`

**`src/acp/`:**

- Purpose: ACP control-plane and runtime management for external agent sessions.
- Contains: ACP client, commands, manager, runtime controls, identity reconciliation, policy/runtime support.
- Key files: `src/acp/client.ts`, `src/acp/manager.ts`, `src/acp/control-plane/manager.ts`, `src/acp/runtime/`

**`src/auto-reply/`:**

- Purpose: Inbound message processing, command detection, reply generation, streaming/block reply handling, queueing, directives, model/runtime handling.
- Contains: dispatch wrappers, templating/envelope context, command registries, reply pipeline, agent runner, command handlers, ACP/subagent commands.
- Key files: `src/auto-reply/dispatch.ts`, `src/auto-reply/reply.ts`, `src/auto-reply/reply/agent-runner.ts`, `src/auto-reply/reply/reply-dispatcher.ts`, `src/auto-reply/commands-registry.ts`

**`src/channels/`:**

- Purpose: Channel metadata, plugin channel registry, common channel contracts, allowlists, transport helpers, threading/pairing behavior.
- Contains: core channel IDs/order, registered channel metadata, plugin adapter types, plugin registry, transport abstractions, web channel helpers.
- Key files: `src/channels/registry.ts`, `src/channels/ids.ts`, `src/channels/plugins/types.ts`, `src/channels/plugins/registry.ts`, `src/channels/thread-bindings-policy.ts`

**`src/plugins/`:**

- Purpose: Plugin discovery/loading, registry, runtime surfaces, schema validation, CLI registration, provider/channel/tool/hook/service registration.
- Contains: plugin loader, registry state, runtime facades, SDK aliasing, manifest registry, config state, provider auth/setup support.
- Key files: `src/plugins/loader.ts`, `src/plugins/registry.ts`, `src/plugins/runtime.ts`, `src/plugins/runtime/index.ts`, `src/plugins/types.ts`, `src/plugins/cli.ts`

**`src/plugin-sdk/`:**

- Purpose: Public Plugin SDK subpath source files exported as `openclaw/plugin-sdk/*`.
- Contains: SDK barrels for channel/runtime/config/provider/media/speech/security/gateway/helper APIs and guardrail tests.
- Key files: `src/plugin-sdk/index.ts`, `src/plugin-sdk/plugin-runtime.ts`, `src/plugin-sdk/channel-runtime.ts`, `src/plugin-sdk/provider-entry.ts`, `src/plugin-sdk/package-contract-guardrails.test.ts`

**`src/config/`:**

- Purpose: Configuration loading, validation, migration, paths, runtime overrides, sessions facade, plugin config typing.
- Contains: config IO, schema validation, legacy migration, config paths, session store subpackage.
- Key files: `src/config/config.ts`, `src/config/io.ts`, `src/config/validation.ts`, `src/config/paths.ts`, `src/config/sessions.ts`, `src/config/sessions/`

**`src/config/sessions/`:**

- Purpose: Session key mapping, session store persistence, transcript paths, main-session helpers.
- Contains: session store read/write, paths, transcript handling, types.
- Key files: `src/config/sessions/store.ts`, `src/config/sessions/paths.ts`, `src/config/sessions/transcript.ts`, `src/config/sessions/main-session.ts`

**`src/infra/`:**

- Purpose: Shared infrastructure primitives.
- Contains: environment normalization, outbound delivery, diagnostic/heartbeat/system events, TLS/network helpers, restart/update support, path/env utilities.
- Key files: `src/infra/env.ts`, `src/infra/outbound/`, `src/infra/agent-events.ts`, `src/infra/restart.ts`, `src/infra/tls/`

**`src/secrets/`:**

- Purpose: Secrets resolution and runtime snapshots for command/provider/gateway auth surfaces.
- Contains: command config, runtime secret activation, web tools secret state, gateway auth surface analysis.
- Key files: `src/secrets/runtime.ts`, `src/secrets/command-config.ts`, `src/secrets/runtime-gateway-auth-surfaces.ts`

**`src/sessions/`:**

- Purpose: Higher-level session lifecycle, send policies, model/level overrides, transcript events.
- Contains: lifecycle events, transcript updates, usage/model override helpers.
- Key files: `src/sessions/session-lifecycle-events.ts`, `src/sessions/send-policy.ts`, `src/sessions/transcript-events.ts`

**`src/routing/`:**

- Purpose: Shared account/session/channel routing normalization.
- Contains: session-key parsing/normalization and account lookup helpers.
- Key files: `src/routing/session-key.ts`, `src/routing/account-lookup.ts`

**`src/media/`, `src/media-understanding/`, `src/image-generation/`, `src/tts/`, `src/memory/`:**

- Purpose: Capability subsystems used by agents, plugins, and gateway methods.
- Contains: media staging/MIME helpers, media understanding runtime/providers, image generation runtime/providers, speech/TTS providers, memory stores/search/prompt sections.
- Key files: `src/media/mime.ts`, `src/media-understanding/`, `src/image-generation/runtime.ts`, `src/tts/`, `src/memory/prompt-section.ts`

**`src/browser/`, `src/canvas-host/`, `src/tui/`, `src/wizard/`:**

- Purpose: Specialized user interaction and UI-adjacent subsystems.
- Contains: browser control routes/helpers, canvas host, terminal UI components, setup/configuration wizard.
- Key files: `src/browser/bridge-server.ts`, `src/canvas-host/server.ts`, `src/tui/`, `src/wizard/setup.ts`

**`extensions/`:**

- Purpose: Bundled plugin workspace packages.
- Contains: one plugin per directory, usually with `openclaw.plugin.json`, `package.json`, `index.ts`, public local barrels (`api.ts`, `runtime-api.ts`), and implementation under `src/`.
- Key files: `extensions/discord/openclaw.plugin.json`, `extensions/discord/index.ts`, `extensions/discord/src/channel.ts`, `extensions/openai/index.ts`, `extensions/telegram/src/channel.ts`

**`apps/macos/`:**

- Purpose: macOS app, menubar gateway lifecycle, IPC, protocol, and Mac CLI target.
- Contains: Swift package/Xcode sources under `apps/macos/Sources/`, tests under `apps/macos/Tests/`.
- Key files: `apps/macos/Sources/OpenClaw/`, `apps/macos/Sources/OpenClawProtocol/`, `apps/macos/Sources/OpenClawIPC/`, `apps/macos/Sources/OpenClawMacCLI/`

**`apps/ios/`:**

- Purpose: iOS, watchOS, widgets, share extension, and platform feature integrations.
- Contains: Swift feature directories under `apps/ios/Sources/`, watch app/extension, tests, fastlane metadata.
- Key files: `apps/ios/Sources/Chat/`, `apps/ios/Sources/Gateway/`, `apps/ios/Sources/Onboarding/`, `apps/ios/Tests/`

**`apps/android/`:**

- Purpose: Android app and benchmark project.
- Contains: Gradle app module under `apps/android/app/`, benchmark module, wrapper/config, scripts.
- Key files: `apps/android/app/build.gradle.kts`, `apps/android/app/src/`, `apps/android/benchmark/`

**`apps/shared/OpenClawKit/`:**

- Purpose: Shared Swift protocol/client kit for native apps.
- Contains: Swift package sources, tests, and tools.
- Key files: `apps/shared/OpenClawKit/Sources/`, `apps/shared/OpenClawKit/Tests/`, `apps/shared/OpenClawKit/Tools/`

**`scripts/`:**

- Purpose: Repo automation for build, tests, docs, release, packaging, smoke tests, and guardrails.
- Contains: Node scripts, shell scripts, e2e/parallels/docker flows, docs i18n pipeline, pre-commit scripts.
- Key files: `scripts/run-node.mjs`, `scripts/test-parallel.mjs`, `scripts/tsdown-build.mjs`, `scripts/protocol-gen.ts`, `scripts/protocol-gen-swift.ts`

**`docs/`:**

- Purpose: Mintlify documentation and generated baselines.
- Contains: user docs, channel/provider/plugin docs, install/update docs, generated config/API docs, i18n artifacts.
- Key files: `docs/channels/`, `docs/plugins/`, `docs/providers/`, `docs/.generated/`, `docs/.i18n/`

**`packages/`:**

- Purpose: Small package wrappers/distribution packages separate from core.
- Contains: `packages/clawdbot/`, `packages/moltbot/`.
- Key files: `packages/clawdbot/package.json`, `packages/moltbot/package.json`

## Key File Locations

**Entry Points:**

- `openclaw.mjs`: npm binary wrapper for built CLI.
- `src/entry.ts`: main source entry for built CLI startup.
- `src/index.ts`: package root/library entry and legacy direct CLI entry.
- `src/cli/run-main.ts`: CLI execution entry after bootstrap.
- `src/gateway/server.ts`: gateway public server exports.
- `src/gateway/server.impl.ts`: gateway startup implementation.
- `src/commands/agent.ts`: command export for agent execution.
- `src/agents/agent-command.ts`: core agent command implementation.

**Configuration:**

- `package.json`: package exports, scripts, runtime/dev dependencies.
- `pnpm-workspace.yaml`: workspace membership.
- `tsconfig.json`: TypeScript project configuration.
- `tsdown.config.ts`: build entries and stable lazy runtime boundaries.
- `vitest.config.ts`, `vitest.unit.config.ts`, `vitest.gateway.config.ts`, `vitest.extensions.config.ts`: test configurations.
- `.oxlintrc.json`, `.oxfmtrc.jsonc`: lint/format configuration.
- `src/config/config.ts`: public config facade.
- `src/config/validation.ts`: config validation.

**Core Logic:**

- `src/cli/program/command-registry.ts`: root command metadata and lazy registration.
- `src/gateway/server-methods.ts`: gateway RPC authorization and dispatch.
- `src/gateway/protocol/index.ts`: gateway protocol validation exports.
- `src/gateway/server-channels.ts`: gateway channel runtime manager.
- `src/plugins/loader.ts`: plugin discovery/load/cache.
- `src/plugins/registry.ts`: plugin contribution registry.
- `src/plugins/runtime/index.ts`: PluginRuntime facade factory.
- `src/channels/registry.ts`: channel metadata/normalization.
- `src/auto-reply/dispatch.ts`: inbound channel dispatch wrapper.
- `src/auto-reply/reply/agent-runner.ts`: reply execution path.
- `src/infra/outbound/`: outbound send/delivery routing.

**Testing:**

- `*.test.ts`: colocated unit/integration tests beside source files.
- `*.e2e.test.ts`: colocated e2e tests, for example `src/docker-setup.e2e.test.ts`.
- `src/test-helpers/`, `src/test-utils/`: shared core test helpers.
- `src/plugins/test-helpers/`, `src/daemon/test-helpers/`, `src/logging/test-helpers/`: subsystem-specific test helpers.
- `extensions/*/**/*.test.ts`: extension/plugin tests.
- `apps/macos/Tests/`, `apps/ios/Tests/`, `apps/shared/OpenClawKit/Tests/`: native app tests.

## Naming Conventions

**Files:**

- Use kebab-case for most TypeScript modules: `src/gateway/server-methods-list.ts`, `src/auto-reply/reply/block-reply-pipeline.ts`.
- Use `*.test.ts` for colocated Vitest tests: `src/cli/run-main.test.ts`, `extensions/discord/src/channel.test.ts`.
- Use `*.e2e.test.ts` for e2e tests: `src/docker-setup.e2e.test.ts`.
- Use `*.runtime.ts` for lazy/heavy runtime boundaries: `extensions/openai/openai-codex-provider.runtime.ts`, `src/plugins/runtime/runtime-tts.runtime.ts`, `src/auto-reply/reply/agent-runner-execution.runtime.ts`.
- Use `register.<area>.ts` in `src/cli/program/` for CLI command registrar modules: `src/cli/program/register.setup.ts`.
- Use `types.ts` or `types.<domain>.ts` for shared type-only surfaces: `src/channels/plugins/types.ts`, `src/plugins/types.ts`.

**Directories:**

- Use domain directories under `src/` for subsystems: `src/gateway/`, `src/plugins/`, `src/agents/`, `src/auto-reply/`.
- Use one directory per bundled plugin under `extensions/<plugin-id>/`: `extensions/discord/`, `extensions/openai/`, `extensions/telegram/`.
- Use feature directories in native apps: `apps/ios/Sources/Chat/`, `apps/ios/Sources/Gateway/`, `apps/macos/Sources/OpenClaw/`.

**Plugins:**

- Canonical plugin identity should align across `extensions/<id>/`, `extensions/<id>/openclaw.plugin.json`, package name, `openclaw.install.npmSpec`, and `openclaw.channel.id` when present.
- Extension packages should keep production public barrels at package root when needed: `extensions/discord/api.ts`, `extensions/discord/runtime-api.ts`, `extensions/telegram/api.ts`.
- Extension implementation usually lives under `extensions/<id>/src/` for larger plugins; simple plugins may keep root files such as `extensions/device-pair/index.ts`.

## Where to Add New Code

**New CLI Command:**

- Primary code: `src/commands/<command>.ts` or `src/commands/<command>/`
- CLI wiring: `src/cli/program/command-registry.ts` and either `src/cli/program/register.<command>.ts` or `src/cli/<command>-cli.ts`
- Tests: colocate near CLI wiring and command logic, for example `src/cli/<command>-cli.test.ts` and `src/commands/<command>.test.ts`

**New Gateway RPC Method:**

- Protocol schema/types: `src/gateway/protocol/`
- Handler: `src/gateway/server-methods/<area>.ts`
- Registration: `src/gateway/server-methods.ts`
- Method list/events: `src/gateway/server-methods-list.ts`
- Tests: `src/gateway/<area>.test.ts` or `src/gateway/server-methods/<area>.test.ts`
- Native clients: update generated Swift protocol outputs through `scripts/protocol-gen.ts` and `scripts/protocol-gen-swift.ts` when protocol contracts change.

**New Agent Tool or Agent Behavior:**

- Tool implementation: `src/agents/tools/`
- Shared parsing/errors: `src/agents/tools/common.ts`
- Agent command/session behavior: `src/agents/agent-command.ts` or focused modules under `src/agents/command/`
- Reply-command surface: `src/auto-reply/reply/commands-*.ts`
- Tests: colocated `src/agents/**/*.test.ts` or `src/auto-reply/reply/commands-*.test.ts`

**New Channel Plugin:**

- Plugin package: `extensions/<id>/`
- Manifest: `extensions/<id>/openclaw.plugin.json`
- Package metadata: `extensions/<id>/package.json`
- Entry: `extensions/<id>/index.ts`
- Channel adapter: `extensions/<id>/src/channel.ts` or `extensions/<id>/src/channel.runtime.ts`
- Public barrels: `extensions/<id>/api.ts` and/or `extensions/<id>/runtime-api.ts`
- SDK/public subpath if needed: `src/plugin-sdk/<id>.ts`
- Docs/labels: `docs/channels/`, `docs/plugins/`, `.github/labeler.yml`

**New Model Provider Plugin:**

- Plugin package: `extensions/<provider-id>/`
- Provider entry: `extensions/<provider-id>/index.ts`
- Provider implementation: `extensions/<provider-id>/<provider-id>-provider.ts` or `extensions/<provider-id>/src/`
- SDK/provider helpers if generic: `src/plugin-sdk/provider-*.ts`
- Catalog/setup integration: follow existing patterns in `extensions/openai/`, `extensions/anthropic/`, and `extensions/google/`

**New Plugin Runtime Capability:**

- Internal runtime type: `src/plugins/runtime/types.ts`
- Runtime implementation: `src/plugins/runtime/runtime-<capability>.ts` or `src/plugins/runtime/runtime-<capability>.runtime.ts` when heavy/lazy.
- Facade registration: `src/plugins/runtime/index.ts`
- Public SDK subpath: `src/plugin-sdk/<capability>-runtime.ts`
- Export mapping: `package.json` and plugin SDK export generation scripts.

**New Config Field:**

- Types/schema: `src/config/types.ts`, `src/config/validation.ts`
- Defaults/migration as needed: `src/config/legacy-migrate.ts`, `src/config/runtime-overrides.ts`
- CLI docs/help: relevant `src/cli/config-*` and generated docs under `docs/.generated/`
- Drift checks: `pnpm config:docs:gen` / `pnpm config:docs:check`

**New Native App Gateway Feature:**

- Gateway protocol/server: `src/gateway/protocol/`, `src/gateway/server-methods/`
- macOS protocol/client: `apps/macos/Sources/OpenClawProtocol/`, `apps/macos/Sources/OpenClawIPC/`
- Shared Swift kit: `apps/shared/OpenClawKit/Sources/`
- iOS feature UI/services: `apps/ios/Sources/<Feature>/`
- Android feature UI/services: `apps/android/app/src/`

**Utilities:**

- Cross-cutting infrastructure: `src/infra/`
- Terminal rendering: `src/terminal/`
- Shared lazy runtime/global helpers: `src/shared/`
- Domain-specific helpers: keep in the owning domain directory, for example `src/gateway/`, `src/plugins/`, or `src/agents/`.

## Special Directories

**`dist/`:**

- Purpose: Built Node output consumed by `openclaw.mjs` and package exports.
- Generated: Yes
- Committed: Build output is present in release/package flows; source changes should target `src/` and build scripts, not hand-edit `dist/`.

**`docs/.generated/`:**

- Purpose: Generated docs/baseline artifacts for config and Plugin SDK drift checks.
- Generated: Yes
- Committed: Yes

**`docs/zh-CN/`, `docs/ja-JP/`:**

- Purpose: Generated localized documentation.
- Generated: Yes
- Committed: Yes
- Guidance: Update English docs first; do not edit generated zh-CN unless explicitly requested.

**`src/canvas-host/a2ui/.bundle.hash`:**

- Purpose: Generated A2UI bundle hash tracked for canvas host assets.
- Generated: Yes
- Committed: Yes
- Guidance: Regenerate only through `pnpm canvas:a2ui:bundle` or `scripts/bundle-a2ui.sh`.

**`patches/`:**

- Purpose: Approved pnpm dependency patches.
- Generated: No
- Committed: Yes
- Guidance: Do not add or modify dependency patches without explicit approval.

**`.planning/`:**

- Purpose: GSD planning/codebase intelligence artifacts.
- Generated: Partly
- Committed: Workflow-dependent
- Guidance: Codebase mappers write only assigned docs under `.planning/codebase/`.

**`.omx/`:**

- Purpose: OMX runtime state, logs, and local workflow state.
- Generated: Yes
- Committed: No for normal source changes.

**`skills/`:**

- Purpose: OpenClaw skill packages/assets shipped or used by agent workflows.
- Generated: No
- Committed: Yes

**`extensions/*/`:**

- Purpose: Bundled plugin workspace packages.
- Generated: No
- Committed: Yes
- Guidance: Keep plugin-only runtime dependencies in the extension package and import core-facing APIs through `openclaw/plugin-sdk/*` or local package barrels.

---

_Structure analysis: 2026-05-09_
