# Architecture

**Analysis Date:** 2026-05-09

## Pattern Overview

**Overall:** Modular TypeScript monorepo with a lazy-loaded CLI, a long-running gateway/control-plane server, plugin-based capability registration, and native mobile/desktop client apps.

**Key Characteristics:**

- CLI startup is intentionally thin: `openclaw.mjs` validates Node, prints fast root help when possible, then imports `dist/entry.js`; source development goes through `scripts/run-node.mjs`.
- Core Node behavior lives under `src/`, with command orchestration in `src/cli/`, business operations in `src/commands/`, gateway RPC in `src/gateway/`, agents in `src/agents/`, and plugin runtime/loader code in `src/plugins/`.
- Plugins are first-class workspace packages under `extensions/*`; they register providers, channels, tools, hooks, HTTP routes, CLI commands, services, and setup surfaces through `src/plugins/registry.ts` and runtime facades from `src/plugins/runtime/index.ts`.
- Channel handling is adapter-driven: built-in and extension channel plugins expose the same `ChannelPlugin` contract from `src/channels/plugins/types.ts`.
- Gateway and CLI code use lazy runtime boundaries such as `src/cli/deps.ts`, `src/plugins/runtime/index.ts`, and explicit `*.runtime.ts` files to avoid heavy startup imports and stale hashed chunks.

## Layers

**CLI Bootstrap Layer:**

- Purpose: Validate runtime, normalize process state, handle fast help/version paths, and dispatch into the command program.
- Location: `openclaw.mjs`, `src/entry.ts`, `src/index.ts`, `scripts/run-node.mjs`
- Contains: Node version checks, compile-cache setup, root help fast path, dev build wrapper, legacy library exports.
- Depends on: `src/infra/*`, `src/cli/run-main.ts`, `src/cli/argv.ts`, `src/entry.respawn.ts`
- Used by: npm bin `openclaw`, dev commands such as `pnpm openclaw ...`, and package root consumers via `src/index.ts`.

**CLI Program and Commands Layer:**

- Purpose: Build the Commander command tree, register only the needed primary command, and route command execution to implementation modules.
- Location: `src/cli/`, `src/commands/`
- Contains: Commander setup, command registrars, CLI options, command-specific helpers, non-interactive setup/status/onboarding logic.
- Depends on: `commander`, `src/config/`, `src/runtime.ts`, `src/plugins/cli.ts`, `src/commands/*`
- Used by: `src/cli/run-main.ts`, gateway command helpers, tests colocated in `src/cli/*.test.ts` and `src/commands/**/*.test.ts`.
- Pattern: Add root commands through descriptors/registrars in `src/cli/program/command-registry.ts`; put business logic under `src/commands/<area>.ts` or `src/commands/<area>/`.

**Gateway Control Plane Layer:**

- Purpose: Run the long-lived WebSocket/HTTP gateway, authenticate clients, expose RPC methods/events, manage channels, and connect UI/mobile/node clients to local agent operations.
- Location: `src/gateway/`
- Contains: `startGatewayServer` in `src/gateway/server.impl.ts`, WebSocket runtime in `src/gateway/server-ws-runtime.ts`, method dispatch in `src/gateway/server-methods.ts`, protocol schemas in `src/gateway/protocol/`, handler groups in `src/gateway/server-methods/`.
- Depends on: `ws`, `express`/HTTP helpers, `ajv`, `src/plugins/`, `src/channels/`, `src/agents/`, `src/config/`, `src/secrets/`, `src/sessions/`, `src/infra/`
- Used by: CLI gateway commands in `src/cli/gateway-cli.ts`, desktop/mobile clients, node clients, control UI, and plugin HTTP/gateway method extensions.
- Pattern: Add gateway RPC methods as focused handler modules under `src/gateway/server-methods/`, register them in `src/gateway/server-methods.ts`, and add protocol schemas/types in `src/gateway/protocol/schemas.ts` or adjacent protocol files.

**Agent Runtime Layer:**

- Purpose: Execute user prompts, maintain sessions, choose models/providers, run tools, manage subagents, and deliver replies back to channels or gateway clients.
- Location: `src/agents/`, `src/acp/`, `src/auto-reply/reply/agent-runner.ts`, `src/commands/agent.ts`
- Contains: agent command implementation, ACP spawning/control plane, embedded Pi runner integration, model selection/fallback, tool definitions, session/workspace helpers.
- Depends on: `@mariozechner/pi-coding-agent`, `@mariozechner/pi-agent-core`, `src/config/sessions/`, `src/auto-reply/`, `src/infra/outbound/`, `src/plugins/runtime/`
- Used by: CLI `agent` command, gateway `agent` RPC in `src/gateway/server-methods/agent.ts`, channel auto-reply flows, boot automation in `src/gateway/boot.ts`, and plugin runtime agent/subagent APIs.
- Pattern: Use `src/agents/agent-command.ts` as the main entry for command execution; keep low-level tool parsing/shared errors in `src/agents/tools/common.ts`.

**Inbound Reply and Channel Layer:**

- Purpose: Convert inbound channel messages into finalized context, queue or stream agent runs, and send replies through channel adapters.
- Location: `src/auto-reply/`, `src/channels/`, `extensions/*/src/channel*.ts`
- Contains: inbound dispatch wrappers in `src/auto-reply/dispatch.ts`, reply resolver exports in `src/auto-reply/reply.ts`, reply runner in `src/auto-reply/reply/agent-runner.ts`, channel metadata in `src/channels/registry.ts`, plugin channel registry in `src/channels/plugins/registry.ts`.
- Depends on: `src/config/`, `src/agents/`, `src/infra/outbound/`, `src/plugins/runtime.ts`, channel plugin adapters from `src/channels/plugins/types.ts`
- Used by: gateway channel manager in `src/gateway/server-channels.ts`, channel plugins such as `extensions/discord/src/channel.ts`, `extensions/telegram/src/channel.ts`, and outbound send paths.
- Pattern: Treat all channels as plugins. Use `ChannelPlugin` adapters instead of importing channel implementations directly from shared code.

**Plugin System Layer:**

- Purpose: Discover, validate, load, cache, and activate OpenClaw plugins and expose safe runtime APIs to plugin code.
- Location: `src/plugins/`, `src/plugin-sdk/`, `extensions/*`
- Contains: loader in `src/plugins/loader.ts`, registry in `src/plugins/registry.ts`, active registry state in `src/plugins/runtime.ts`, plugin runtime facade in `src/plugins/runtime/index.ts`, public SDK subpaths in `src/plugin-sdk/*.ts`, plugin manifests in `extensions/*/openclaw.plugin.json`.
- Depends on: `jiti`, `src/config/`, `src/channels/plugins/`, `src/hooks/`, `src/memory/`, provider/runtime modules, package export mapping in `package.json`.
- Used by: CLI plugin command registration in `src/plugins/cli.ts`, gateway startup in `src/gateway/server-plugin-bootstrap.ts`, channel registry in `src/channels/plugins/registry.ts`, and extension packages.
- Pattern: Extension production code imports `openclaw/plugin-sdk/*` and local barrels such as `extensions/discord/api.ts`; do not import core `src/**` from extension production code.

**Configuration, Secrets, and Session State Layer:**

- Purpose: Load, validate, migrate, and persist OpenClaw configuration, auth/secrets state, session mappings, transcripts, and runtime snapshots.
- Location: `src/config/`, `src/secrets/`, `src/sessions/`, `src/routing/`
- Contains: config facade in `src/config/config.ts`, IO/validation under `src/config/io.ts` and `src/config/validation.ts`, session store helpers under `src/config/sessions/`, route/account/session-key helpers under `src/routing/`, runtime secret snapshots under `src/secrets/runtime.ts`.
- Depends on: filesystem utilities, JSON5/YAML validation, plugin schema validation, runtime config overrides.
- Used by: CLI, gateway, agents, channels, setup wizard, plugin loader, and mobile/desktop pairing flows.
- Pattern: Load configuration through `loadConfig`/snapshot helpers from `src/config/config.ts`; avoid direct ad-hoc JSON reads outside config/session modules.

**Infrastructure and Shared Utilities Layer:**

- Purpose: Provide OS/process/network/logging primitives shared across CLI, gateway, plugins, and agents.
- Location: `src/infra/`, `src/process/`, `src/logging/`, `src/terminal/`, `src/shared/`, `src/utils.ts`
- Contains: network/TLS helpers, restart handling, diagnostic events, outbound delivery, process queues, subsystem logging, terminal tables/progress, lazy runtime helpers.
- Depends on: Node built-ins, `tslog`, terminal/ANSI utilities, selected external packages.
- Used by: All higher layers.
- Pattern: Put cross-cutting reusable primitives here only when they are not specific to CLI, gateway, plugin, or channel behavior.

**Client App Layer:**

- Purpose: Provide native UI clients and shared protocol models for macOS, iOS/watchOS, Android, and shared Swift code.
- Location: `apps/macos/`, `apps/ios/`, `apps/android/`, `apps/shared/`
- Contains: macOS app and CLI targets under `apps/macos/Sources/`, iOS app features under `apps/ios/Sources/`, Android Gradle app under `apps/android/app/`, shared Swift protocol/client code under `apps/shared/OpenClawKit/`.
- Depends on: Gateway protocol generated from `src/gateway/protocol/`, Swift/Gradle platform frameworks, shared OpenClawKit.
- Used by: Desktop/mobile UI surfaces that connect to the gateway.
- Pattern: Keep protocol generation aligned via `pnpm protocol:gen` and `pnpm protocol:gen:swift` when gateway protocol shapes change.

## Data Flow

**CLI Command Flow:**

1. `openclaw.mjs` checks Node 22.12+, enables compile cache, handles precomputed root help, then imports `dist/entry.js`.
2. `src/entry.ts` normalizes argv/env, applies profile/container handling, performs fast root version/help checks, and dynamically imports `src/cli/run-main.ts`.
3. `src/cli/run-main.ts` loads `.env` through `src/cli/dotenv.ts`, ensures runtime support, optionally routes direct commands via `src/cli/route.ts`, builds the Commander tree through `src/cli/program.ts`, then registers the primary command through `src/cli/program/command-registry.ts`.
4. Command registrars call focused CLI modules under `src/cli/` and business modules under `src/commands/`.

**Gateway RPC Flow:**

1. Gateway startup enters `startGatewayServer` in `src/gateway/server.impl.ts`.
2. Startup loads config, secrets, plugin registry, channel manager, sidecars, health monitors, HTTP routes, and WebSocket handlers.
3. `src/gateway/server-ws-runtime.ts` delegates connection handling to `src/gateway/server/ws-connection.ts`.
4. Incoming frames are validated against `src/gateway/protocol/index.ts`, authorized in `src/gateway/server-methods.ts`, and dispatched to handler groups such as `src/gateway/server-methods/agent.ts`, `src/gateway/server-methods/config.ts`, and `src/gateway/server-methods/sessions.ts`.
5. Handlers respond with RPC response frames and may broadcast gateway events listed in `src/gateway/server-methods-list.ts`.

**Inbound Channel to Agent Reply Flow:**

1. A channel runtime starts through `src/gateway/server-channels.ts` using adapters returned by `src/channels/plugins/registry.ts`.
2. Channel plugin code, for example `extensions/discord/src/monitor.ts` or `extensions/telegram/src/channel.ts`, converts provider messages into OpenClaw inbound context.
3. `src/auto-reply/dispatch.ts` finalizes inbound context and calls `src/auto-reply/reply/dispatch-from-config.ts`.
4. Reply logic resolves command directives, session keys, queue policy, typing/block streaming, model/provider selection, and memory/session state under `src/auto-reply/reply/`.
5. `src/auto-reply/reply/agent-runner.ts` invokes agent execution and emits reply payloads through channel/outbound adapters in `src/infra/outbound/`.

**Gateway Agent Flow:**

1. A WebSocket client sends the `agent` method defined in `src/gateway/server-methods-list.ts`.
2. `src/gateway/server-methods/agent.ts` validates request schemas, resolves identity/session/delivery fields, and calls `agentCommandFromIngress`.
3. `src/agents/agent-command.ts` resolves config, workspace, auth profiles, model/provider selection, and session store state.
4. Execution runs through ACP or embedded Pi agent paths, records session/transcript updates, emits agent events through `src/infra/agent-events.js`, and returns final results to the gateway response path.

**Plugin Load Flow:**

1. `src/gateway/server-plugin-bootstrap.ts` installs gateway-specific plugin runtime state, then calls `loadGatewayPlugins` from `src/gateway/server-plugins.ts`.
2. `src/plugins/loader.ts` discovers manifests, configures `jiti` aliases for `openclaw/plugin-sdk/*`, validates config schema, creates `PluginRuntime`, and registers plugin contributions.
3. `src/plugins/registry.ts` stores contributions as typed registry arrays: tools, channels, providers, HTTP routes, hooks, CLI registrars, services, memory prompt sections, and diagnostics.
4. `src/plugins/runtime.ts` exposes the active registry and pins channel/HTTP route registry views so later config-schema loads do not replace gateway startup channel state.

**State Management:**

- Config state is read/written through `src/config/config.ts` and lower-level `src/config/io.ts`.
- Session mapping and transcript state live behind helpers in `src/config/sessions/` and gateway session utilities in `src/gateway/session-utils.ts`.
- Runtime plugin registry state is process-global in `src/plugins/runtime.ts`.
- Gateway runtime state is assembled in `src/gateway/server-runtime-state.ts`.
- Agent run events and transcript updates flow through `src/infra/agent-events.ts` and `src/sessions/transcript-events.ts`.

## Key Abstractions

**RuntimeEnv:**

- Purpose: Decouple command/business logic from direct console/process exits.
- Examples: `src/runtime.ts`, `src/gateway/boot.ts`, `src/agents/agent-command.ts`
- Pattern: Pass `defaultRuntime` for real CLI execution and test/non-exiting runtimes for tests or gateway-managed execution.

**ProgramContext and Command Registration:**

- Purpose: Share CLI version/channel option metadata while lazily registering only needed command surfaces.
- Examples: `src/cli/program/context.ts`, `src/cli/program/build-program.ts`, `src/cli/program/command-registry.ts`
- Pattern: Add command metadata to core descriptors and put registrar implementations under `src/cli/program/register.*.ts` or focused `src/cli/*-cli.ts` files.

**Gateway Protocol Frames and Handlers:**

- Purpose: Keep WebSocket request/response/event shapes validated and handler dispatch uniform.
- Examples: `src/gateway/protocol/index.ts`, `src/gateway/server-methods/types.ts`, `src/gateway/server-methods.ts`
- Pattern: Every RPC method handler receives `{ req, params, client, context, respond }` and returns through `respond`.

**PluginRegistry:**

- Purpose: Aggregate all plugin contributions into one typed activation snapshot.
- Examples: `src/plugins/registry.ts`, `src/plugins/registry-empty.ts`, `src/plugins/runtime.ts`
- Pattern: Register contribution arrays by capability; use active/pinned registry helpers instead of storing plugin state in local module variables.

**PluginRuntime:**

- Purpose: Provide plugin-safe facades for config, agents, subagents, system, media, TTS, events, logging, tools, and model auth.
- Examples: `src/plugins/runtime/index.ts`, `src/plugins/runtime/types.ts`, `src/plugin-sdk/plugin-runtime.ts`
- Pattern: Add new plugin capabilities by extending `PluginRuntime` and exposing a public SDK subpath before extensions use it.

**ChannelPlugin:**

- Purpose: Normalize channel lifecycle, status, outbound, directory, setup, pairing, and gateway behavior across built-in and extension channels.
- Examples: `src/channels/plugins/types.ts`, `src/channels/plugins/types.plugin.ts`, `extensions/discord/src/channel.ts`, `extensions/telegram/src/channel.ts`
- Pattern: Add channel behavior through adapter fields on `ChannelPlugin`; resolve channel IDs through `src/channels/registry.ts` and `src/channels/plugins/registry.ts`.

**Session Keys and Delivery Context:**

- Purpose: Keep multi-agent, multi-channel, account, thread, and subagent routing consistent.
- Examples: `src/routing/session-key.ts`, `src/utils/delivery-context.ts`, `src/config/sessions/`, `src/infra/outbound/session-context.ts`
- Pattern: Normalize and parse session/delivery fields with routing utilities; avoid hand-built session-key strings in feature code.

## Entry Points

**npm CLI Binary:**

- Location: `openclaw.mjs`
- Triggers: `openclaw ...` from npm/global install.
- Responsibilities: Validate runtime, load dist entry, provide build-missing guidance.

**Source CLI Entry:**

- Location: `src/entry.ts`
- Triggers: Built `dist/entry.js` imported by `openclaw.mjs`.
- Responsibilities: Normalize env/argv, container/profile routing, respawn plan, fast version/help, and lazy CLI import.

**Library Export Entry:**

- Location: `src/index.ts`
- Triggers: Package root import `openclaw`.
- Responsibilities: Re-export legacy library symbols from `src/library.ts` only when imported as a library; preserve legacy CLI execution when run directly.

**Commander Program Entry:**

- Location: `src/cli/run-main.ts`
- Triggers: `src/entry.ts`, `src/index.ts` legacy entry, and dev wrapper.
- Responsibilities: Load environment, guard runtime, register CLI commands/plugins, parse argv, and clean up memory managers.

**Gateway Server Entry:**

- Location: `src/gateway/server.ts`, `src/gateway/server.impl.ts`
- Triggers: Gateway CLI commands and macOS app gateway lifecycle.
- Responsibilities: Start HTTP/WebSocket gateway, authenticate clients, load plugins/channels, expose RPC methods/events, and manage shutdown/restart.

**Agent Command Entry:**

- Location: `src/commands/agent.ts`, `src/agents/agent-command.ts`
- Triggers: CLI `agent`, gateway `agent`, boot check, auto-reply.
- Responsibilities: Run an agent turn, manage model/session/tool state, deliver reply payloads, and persist session accounting.

**Plugin Package Entry:**

- Location: `extensions/*/index.ts`, `extensions/*/openclaw.plugin.json`
- Triggers: Plugin discovery and loader activation.
- Responsibilities: Register plugin capabilities using the Plugin SDK and local package implementation.

**Native App Entries:**

- Location: `apps/macos/Sources/OpenClaw/`, `apps/ios/Sources/`, `apps/android/app/src/`
- Triggers: Platform app launch.
- Responsibilities: Provide user-facing control/chat/device UI and connect to the gateway protocol.

## Error Handling

**Strategy:** Use typed validation/authorization at boundaries, return structured errors over gateway RPC, and throw exceptions inside command/runtime code where callers own presentation.

**Patterns:**

- CLI startup catches dynamic import failures in `openclaw.mjs` and `src/entry.ts` and prints actionable messages.
- Gateway handlers return `errorShape(...)` from `src/gateway/protocol/index.ts`; `src/gateway/server-methods.ts` handles unknown methods, scope errors, and rate-limit errors before invoking handlers.
- Tool input and authorization failures use typed errors such as `ToolInputError` and `ToolAuthorizationError` in `src/agents/tools/common.ts`.
- Config loading validates snapshots in `src/gateway/server.impl.ts` and reports formatted config issues from `src/config/issue-format.ts`.
- Plugin loading stores diagnostics in `PluginRegistry["diagnostics"]` and logs them from `src/gateway/server-plugin-bootstrap.ts`.

## Cross-Cutting Concerns

**Logging:** Use subsystem loggers from `src/logging/subsystem.ts`; gateway creates child loggers in `src/gateway/server.impl.ts` such as `gateway`, `gateway/health`, `gateway/plugins`, and `gateway/secrets`.

**Validation:** Use config validation from `src/config/validation.ts`, gateway protocol schemas from `src/gateway/protocol/`, plugin schema validation from `src/plugins/schema-validator.ts`, and adapter-specific validation inside `extensions/*/src/*.ts`.

**Authentication:** Gateway authentication/roles/scopes live in `src/gateway/auth.ts`, `src/gateway/role-policy.ts`, `src/gateway/method-scopes.ts`, `src/gateway/device-auth.ts`, and `src/secrets/runtime-gateway-auth-surfaces.ts`; channel allowlists and sender ownership flow through `src/channels/allowlists/`, `src/auto-reply/command-auth.ts`, and channel plugin adapters.

**Lazy Loading:** Use dynamic imports at explicit runtime boundaries: CLI command registration in `src/cli/program/command-registry.ts`, channel senders in `src/cli/deps.ts`, plugin runtime heavy surfaces in `src/plugins/runtime/index.ts`, and stable build entries in `tsdown.config.ts`.

**Generated/Public Contracts:** Keep `package.json` exports, `src/plugin-sdk/*.ts`, `docs/.generated/`, and Swift protocol output under `apps/macos/Sources/OpenClawProtocol/` and `apps/shared/OpenClawKit/Sources/OpenClawProtocol/` aligned when public surfaces or gateway protocol change.

---

_Architecture analysis: 2026-05-09_
