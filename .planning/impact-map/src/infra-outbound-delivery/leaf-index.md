# Infra / Outbound Delivery Leaf Index

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Leaf directory       | Coverage   | Purpose                                                                             |
| -------------------- | ---------- | ----------------------------------------------------------------------------------- |
| `outbound-delivery/` | `verified` | Delivery queueing, send service, recovery, and direct outbound runtime behavior.    |
| `outbound-routing/`  | `verified` | Channel selection, target resolution, session binding, and outbound policy.         |
| `outbound-actions/`  | `verified` | Message action specs, params, normalization, runner, and threading helpers.         |
| `outbound-identity/` | `verified` | Identity, conversation-id, base session key, outbound session, and cache helpers.   |
| `network/`           | `verified` | Proxy, SSRF, hostname, and fetch/runtime dispatcher helpers.                        |
| `tls/`               | `verified` | TLS fingerprint and gateway TLS helpers.                                            |
| `formatting/`        | `verified` | Envelope, payload, text sanitization, and formatting helpers for outbound delivery. |

## Split rule

Split deeper only when a child file group gains independent behavior, ownership, or a distinct first-test ladder.
