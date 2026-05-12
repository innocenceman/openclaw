# CLI and Commands Submodule

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

## Parent module

- Large module: `src/`
- Canonical impact-map slice: `src/cli-commands/`
- Source roots: `src/cli/`, `src/commands/`, `src/terminal/`, `src/tui/`

## Purpose

CLI program registration, command implementations, gateway/status/channel command surfaces, and terminal output helpers.

## Risk profile

High: this slice shapes user-facing command trees, status output, and operational control surfaces.

## Wave 1R leaf status

| Leaf                       | Coverage                   | Queue class | Source evidence                                                                               |
| -------------------------- | -------------------------- | ----------- | --------------------------------------------------------------------------------------------- |
| `program-registration/`    | `verified`                 | priority    | `src/cli/program/**`, `src/cli/program.ts`, `src/cli/argv.ts`                                 |
| `command-implementations/` | `exceptioned-deep-partial` | priority    | `src/commands/**`, `src/cli/*-cli/**`                                                         |
| `status-gateway-channel/`  | `verified`                 | priority    | `src/commands/gateway-status/**`, `src/commands/channels/**`, `src/commands/status-all/**`... |
| `terminal-output/`         | `verified`                 | residual    | `src/terminal/**`, `src/cli/progress.ts`                                                      |

## Cross-module links

- ../../gateway-api-surface/README.md
- ../../channel-abstraction/README.md
- ../config-secrets-security/README.md

## 2026-05-08 P0 original wave evidence

Decision: `exceptioned-deep-partial`.

Reason: GN-STALE + CRG-STALE; src-cli-commands failed due src/commands/agent.test.ts missing Anthropic auth; other CLI tests passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-VERIFIED-WAVE.md` and validation logs `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/src-cli-program.log`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/src-cli-commands.log`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/src-cli-status.log`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/src-cli-terminal.log`.

No product source was changed during this wave.

## 2026-05-08 P0 refresh-to-verified evidence

Decision: `exceptioned-deep-partial`.

Reason: Graph freshness is now fresh, but `refresh-src-cli-commands.log` still fails because `src/commands/agent.test.ts` requires missing Anthropic/OpenAI auth. Other CLI/status/terminal validations passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-REFRESH-TO-VERIFIED.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/gitnexus-refresh.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/code-review-graph-refresh.md`.

No product source was changed during this refresh pass.
