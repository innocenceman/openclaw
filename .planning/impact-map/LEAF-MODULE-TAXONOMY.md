# Leaf Module Taxonomy

Coverage: `partial`
Freshness: 2026-05-07 architecture-aligned planning restructure

A leaf module is the smallest planning unit that still has coherent ownership and a distinct validation ladder. Do not split merely because a directory has many files; split when a child path has independent behavior, independent owners, or a different first-test strategy.

## Current leaf strategy

| Large module                              | Leaf split rule                                                                                                 | Current leaf index                                     |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| `src/agent-runtime/`                      | Split by agent execution/runtime, tools, provider/auth, sandbox, Pi runner, skills, and schema.                 | `src/agent-runtime/leaf-index.md`                      |
| `src/reply-orchestration/`                | Split by runner, commands, streaming, exec, queue, export, and channel shaping.                                 | `src/reply-orchestration/leaf-index.md`                |
| `src/gateway-api-surface/`                | Split by server runtime, server methods, protocol, client/call, and auth/session.                               | `src/gateway-api-surface/leaf-index.md`                |
| `src/channel-abstraction/`                | Split by core abstractions, plugin bridge, bindings, allowlists, transport, and routing.                        | `src/channel-abstraction/leaf-index.md`                |
| `src/channel-abstraction/routing/`        | Split routing by target resolution and compatibility paths when routing needs a deeper owner.                   | `src/channel-abstraction/routing/leaf-index.md`        |
| `src/plugin-runtime-sdk/`                 | Split by public Plugin SDK and internal plugin runtime ownership.                                               | `src/plugin-runtime-sdk/leaf-index.md`                 |
| `src/plugin-runtime-sdk/plugin-sdk/`      | Split by public SDK subpaths and SDK contract families.                                                         | `src/plugin-runtime-sdk/plugin-sdk/leaf-index.md`      |
| `src/plugin-runtime-sdk/plugins-runtime/` | Split by runtime loader, adapters, contracts, boundary enforcement, and test helpers.                           | `src/plugin-runtime-sdk/plugins-runtime/leaf-index.md` |
| `src/infra-outbound-delivery/`            | Split by outbound delivery/routing/actions/identity and lower-level net/TLS/formatting.                         | `src/infra-outbound-delivery/leaf-index.md`            |
| `src/config-secrets-security/`            | Split by config IO, schema/validation, sessions, legacy migration, secrets, and security guards.                | `src/config-secrets-security/leaf-index.md`            |
| `src/capability-modules/`                 | Split by browser, memory, media, media-understanding, context-engine, cron, TTS, and verified ACP child leaves. | `src/capability-modules/leaf-index.md`                 |
| `src/cli-commands/`                       | Split by program registration, command implementations, status/gateway/channel surfaces, and terminal output.   | `src/cli-commands/leaf-index.md`                       |
| `src/shared-misc-runtime-support/`        | Split by support/runtime/process, compatibility/hooks, docs/i18n/markdown, shared primitives, logging, tests.   | `src/shared-misc-runtime-support/leaf-index.md`        |
| `extensions/channel-plugins/`             | One leaf per manifest-declared channel plugin.                                                                  | `extensions/channel-plugins/leaf-index.md`             |
| `extensions/provider-plugins/`            | One leaf per provider plugin package.                                                                           | `extensions/provider-plugins/leaf-index.md`            |
| `extensions/tool-capability-plugins/`     | One leaf per tool/search/control/capability plugin package.                                                     | `extensions/tool-capability-plugins/leaf-index.md`     |
| `extensions/memory-media-voice-plugins/`  | One leaf per memory/media/speech/voice plugin package.                                                          | `extensions/memory-media-voice-plugins/leaf-index.md`  |
| `extensions/auth-integration-plugins/`    | One leaf per auth/diagnostics/integration-style package.                                                        | `extensions/auth-integration-plugins/leaf-index.md`    |
| `extensions/skill-plugins/`               | One leaf per skill-bearing plugin package.                                                                      | `extensions/skill-plugins/leaf-index.md`               |
| `apps/`                                   | One leaf per native app platform feature surface.                                                               | `apps/**/leaf-index.md`                                |
| `ui/`                                     | One leaf per web/control UI feature surface.                                                                    | `ui/**/leaf-index.md`                                  |
| `docs/`                                   | One leaf per docs top-level area, generated baseline family, or docs sync surface.                              | `docs/**/leaf-index.md`                                |
| `scripts/`                                | One leaf per script family, automation surface, or release/versioning surface.                                  | `scripts/**/leaf-index.md`                             |
| `packages/`                               | One leaf per package.                                                                                           | `packages/shared-packages/leaf-index.md`               |
| `test-infra/`                             | One leaf per test runner/profile/helper/fixture ownership boundary.                                             | `test-infra/**/leaf-index.md`                          |

## Promotion rule

A leaf can move from `stub` to `partial` only after its file-role and code-path cards cite current repo evidence. Planned `stub` leaves can remain rows in `leaf-index.md` without empty directories. It can move to `verified` only after fresh validation command output is recorded.

## Directory rule

`impact-map/` directories follow logical architecture ownership, not a one-to-one product source mirror. Physical repo paths belong in leaf `code-paths.md`; runtime DAG relationships also belong in `code-paths.md`, not in directory names.

## Compatibility rule

Avoid pointer-only compatibility directories inside `impact-map/` unless an external published link requires them. Prefer updating internal links to canonical directories and deleting redundant pointers.

## Tool rule

Leaf docs are canonical for scope and test selection. Graph tools can support a leaf only after `.planning/tools/GRAPH-COVERAGE.md` records a fresh bounded slice for that leaf.
