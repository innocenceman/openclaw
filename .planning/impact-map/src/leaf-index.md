# `src/` Logical Module Index

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

Use this index to choose the logical Core Runtime owner for a changed `src/**` path. Parent directories in this tree are navigation nodes and keep only `README.md` plus `leaf-index.md`; final leaf directories own the detailed `README.md`, `code-paths.md`, `file-roles.md`, and `change-to-test.md` files.

| Module directory               | Coverage                   | Primary source ownership                                                                                                                | Purpose                                                                                      |
| ------------------------------ | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `agent-runtime/`               | `exceptioned-deep-partial` | `src/agents/`                                                                                                                           | Agent runtime, tools, providers/auth, sandbox, Pi runner, skills, schema                     |
| `reply-orchestration/`         | `exceptioned-deep-partial` | `src/auto-reply/`                                                                                                                       | Message-to-agent orchestration, runner, commands, streaming, queue, exec, export             |
| `gateway-api-surface/`         | `exceptioned-deep-partial` | `src/gateway/`                                                                                                                          | Gateway server, protocol, server methods, auth/session, client/call helpers                  |
| `channel-abstraction/`         | `verified`                 | `src/channels/`, `src/bindings/`, `src/routing/`                                                                                        | Shared channels, plugin bridge, bindings, allowlists, transport, routing                     |
| `plugin-runtime-sdk/`          | `exceptioned-deep-partial` | `src/plugin-sdk/`, `src/plugins/`, `src/extensions/`                                                                                    | Public Plugin SDK plus internal plugin runtime/contracts/loading/boundary enforcement        |
| `infra-outbound-delivery/`     | `verified`                 | `src/infra/`                                                                                                                            | Outbound delivery/routing/actions/identity, network, TLS, formatting                         |
| `config-secrets-security/`     | `verified`                 | `src/config/`, `src/secrets/`, `src/security/`, `src/sessions/`                                                                         | Config, sessions, secrets, legacy migration, security guards                                 |
| `capability-modules/`          | `exceptioned-deep-partial` | `src/acp/`, `src/browser/`, `src/context-engine/`, `src/cron/`, `src/media/`, `src/media-understanding/`, `src/memory/`, `src/tts/`     | Cross-cutting agent/runtime capabilities                                                     |
| `cli-commands/`                | `exceptioned-deep-partial` | `src/cli/`, `src/commands/`, `src/terminal/`, `src/tui/`                                                                                | CLI, command wiring, status/gateway/channel commands, terminal UI/output                     |
| `shared-misc-runtime-support/` | `exceptioned-deep-partial` | `src/bootstrap/`, `src/compat/`, `src/daemon/`, `src/hooks/`, `src/shared/`, `src/utils/`, `src/types/`, and other support/helper roots | Cross-cutting support, compatibility, process/bootstrap, logging/markdown/i18n, test helpers |

## Lookup rule

1. Start at this index and pick the narrowest logical module.
2. Continue through that module's `leaf-index.md` until a final leaf is selected.
3. Use the final leaf's four files for impact analysis: `README.md`, `code-paths.md`, `file-roles.md`, and `change-to-test.md`.
4. If a physical `src/<root>/**` path is not obvious, choose the logical owner by source ownership in this table and confirm with the leaf `code-paths.md`; do not create physical-root fallback directories.
