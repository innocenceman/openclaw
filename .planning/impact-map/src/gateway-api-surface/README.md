# Gateway / API Surface Impact Map

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

## Parent module

- Large module: `src/`
- Canonical impact-map slice: `src/gateway-api-surface/`
- Source roots: `src/gateway/`, `src/gateway/server-methods/`, `src/gateway/protocol/`

## Purpose

Gateway lifecycle, protocol, auth/session handling, client/call helpers, and server-method API handlers.

## Risk profile

High: user/app/CLI-facing API and control-plane behavior.

## Wave 1R leaf status

| Leaf              | Coverage                   | Queue class | Source evidence                                                                               |
| ----------------- | -------------------------- | ----------- | --------------------------------------------------------------------------------------------- |
| `server-runtime/` | `verified`                 | priority    | `src/gateway/boot.ts`, `src/gateway/server-http.ts`, `src/gateway/server-close.ts`...         |
| `server-methods/` | `exceptioned-deep-partial` | priority    | `src/gateway/server-methods.ts`, `src/gateway/server-methods/**`                              |
| `protocol/`       | `verified`                 | priority    | `src/gateway/protocol/**`                                                                     |
| `client-call/`    | `verified`                 | residual    | `src/gateway/client.ts`, `src/gateway/call.ts`, `src/cli/gateway-rpc.ts`                      |
| `auth-session/`   | `exceptioned-deep-partial` | residual    | `src/gateway/auth.ts`, `src/gateway/auth-mode-policy.ts`, `src/gateway/connection-auth.ts`... |

## Cross-module links

- ../cli-commands/README.md
- ../channel-abstraction/README.md
- ../channel-abstraction/routing/README.md

## 2026-05-08 P0 original wave evidence

Decision: `exceptioned-deep-partial`.

Reason: GN-STALE + CRG-STALE; src-gateway-methods failed due missing subagent-registry mock export.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-VERIFIED-WAVE.md` and validation logs `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/src-gateway-runtime.log`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/src-gateway-methods.log`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/src-gateway-protocol.log`.

No product source was changed during this wave.

## 2026-05-08 P0 refresh-to-verified evidence

Decision: `exceptioned-deep-partial`.

Reason: Graph freshness is now fresh, but `refresh-src-gateway-methods.log` still fails because the server-methods test mock lacks `getLatestSubagentRunByChildSessionKey`. `server-runtime` and `protocol` leaves are verified; `server-methods` remains exceptioned.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-REFRESH-TO-VERIFIED.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/gitnexus-refresh.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/code-review-graph-refresh.md`.

No product source was changed during this refresh pass.
