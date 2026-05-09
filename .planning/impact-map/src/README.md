# `src/` Impact Map

Coverage: `partial`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

`src/` owns the core OpenClaw runtime. This impact map is organized by the logical Core Runtime modules used by `.planning/architecture/ARCHITECTURE-ATLAS.md` and `.planning/architecture/OPENCLAW-ARCHITECTURE-BLUEPRINT.md`. It is a planning/ownership view only; product source directories were not moved.

## Canonical shape

The `src/` impact-map tree is logical, not a mirror of product source paths:

- Navigation/parent modules keep only `README.md` and `leaf-index.md`.
- Final leaf modules keep the detailed four-file packet: `README.md`, `code-paths.md`, `file-roles.md`, and `change-to-test.md`.
- Physical `src/<root>/**` paths are recorded inside the owning leaf's `code-paths.md`, rather than in separate physical-root fallback directories.

## Canonical logical modules

| Impact-map directory           | Source roots                                                                                                                        | Coverage                   | Purpose                                                                                      | First validation                                                                                |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `agent-runtime/`               | `src/agents/`                                                                                                                       | `deep-partial`             | Agent runtime, tools, providers/auth, sandbox, Pi runner, skills, schema                     | targeted src/agents tests; `pnpm build` for tool schema/runtime boundaries                      |
| `reply-orchestration/`         | `src/auto-reply/`                                                                                                                   | `deep-partial`             | Message-to-agent orchestration, runner, commands, streaming, queue, exec, export             | targeted src/auto-reply tests; channel tests when message semantics change                      |
| `gateway-api-surface/`         | `src/gateway/`                                                                                                                      | `deep-partial`             | Gateway server, protocol, server methods, auth/session, client/call helpers                  | targeted gateway tests; GitNexus `api_impact` before handler changes                            |
| `channel-abstraction/`         | `src/channels/`, `src/bindings/`, `src/routing/`                                                                                    | `verified`                 | Shared channels, plugin bridge, bindings, allowlists, transport, routing                     | targeted channel/routing tests; channel/plugin contract tests when shared behavior changes      |
| `plugin-runtime-sdk/`          | `src/plugin-sdk/`, `src/plugins/`, `src/extensions/`                                                                                | `exceptioned-deep-partial` | Public Plugin SDK plus internal plugin runtime/contracts/loading/boundary enforcement        | `pnpm plugin-sdk:api:check`; targeted plugin runtime tests; `pnpm build` for published surfaces |
| `infra-outbound-delivery/`     | `src/infra/`                                                                                                                        | `verified`                 | Outbound delivery/routing/actions/identity, network, TLS, formatting                         | targeted infra/outbound tests; channel tests for cross-channel delivery behavior                |
| `config-secrets-security/`     | `src/config/`, `src/secrets/`, `src/security/`, `src/sessions/`                                                                     | `verified`                 | Config, sessions, secrets, legacy migration, security guards                                 | targeted tests; config/schema docs checks when schema/help changes                              |
| `capability-modules/`          | `src/acp/`, `src/browser/`, `src/context-engine/`, `src/cron/`, `src/media/`, `src/media-understanding/`, `src/memory/`, `src/tts/` | `exceptioned-deep-partial` | Cross-cutting agent/runtime capabilities                                                     | targeted capability tests; `pnpm build` for lazy/runtime/public boundaries                      |
| `cli-commands/`                | `src/cli/`, `src/commands/`, `src/terminal/`, `src/tui/`                                                                            | `deep-partial`             | CLI, command wiring, status/gateway/channel commands, terminal UI/output                     | targeted CLI/command tests; build for command/export surfaces                                   |
| `shared-misc-runtime-support/` | support roots such as `src/bootstrap/`, `src/compat/`, `src/daemon/`, `src/hooks/`, `src/shared/`, `src/utils/`, `src/types/`       | `exceptioned-deep-partial` | Cross-cutting support, compatibility, process/bootstrap, logging/markdown/i18n, test helpers | targeted root card plus nearest consumer tests                                                  |

## Leaf index

Use [`leaf-index.md`](leaf-index.md) as the root `src/` locator, then follow the selected module's `leaf-index.md` until you reach a final leaf.

## Tool coverage

- Wave 1R leaf promotions in `src/**` were refreshed from repo-native structural inspection only.
- The P0 verified wave added bounded GitNexus/code-review-graph/test evidence for selected priority leaves; see `../evidence/p0-verified-wave-2026-05-08/`.
- `verified` applies only to named leaves with fresh evidence. Aggregate modules remain `partial` or `deep-partial` when residual leaves lack full validation evidence.

## Change workflow

Start with [`leaf-index.md`](leaf-index.md), continue to the owning logical module's `leaf-index.md`, then use the final leaf's `README.md`, `code-paths.md`, `file-roles.md`, and `change-to-test.md`.
