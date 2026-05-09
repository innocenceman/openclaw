# Routing Submodule

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

## Parent module

- Large module: `src/`
- Canonical impact-map slice: `src/channel-abstraction/routing/`
- Source roots: `src/routing/`

## Purpose

Recipient/account/session routing and compatibility behavior shared by CLI, gateway, channels, and outbound delivery.

## Risk profile

High: route resolution drift can redirect replies, default-account selection, or session continuity.

## Wave 1R leaf status

| Leaf                   | Coverage   | Queue class | Source evidence                                                                                 |
| ---------------------- | ---------- | ----------- | ----------------------------------------------------------------------------------------------- |
| `target-resolution/`   | `verified` | priority    | `src/routing/resolve-route.ts`, `src/routing/account-id.ts`, `src/routing/account-lookup.ts`... |
| `compatibility-paths/` | `verified` | priority    | `src/routing/bindings.ts`, `src/routing/default-account-warnings.ts`                            |

## Cross-module links

- ../README.md
- ../../infra-outbound-delivery/README.md
- ../../cli-commands/README.md

## 2026-05-08 P0 original wave evidence

Decision: `validated-deep-partial`.

Reason: GN-STALE + CRG-STALE; tests passed; impact risk CRITICAL for buildAgentSessionKey.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-VERIFIED-WAVE.md` and validation logs `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/src-routing.log`.

No product source was changed during this wave.

## 2026-05-08 P0 refresh-to-verified evidence

Decision: `verified`.

Reason: GitNexus and code-review-graph are fresh; `src-routing` validation passed; GitNexus still flags `buildAgentSessionKey` as CRITICAL impact, so changes must continue to use targeted routing tests.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-REFRESH-TO-VERIFIED.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/gitnexus-refresh.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/code-review-graph-refresh.md`.

No product source was changed during this refresh pass.
