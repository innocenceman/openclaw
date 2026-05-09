# CLI and Commands Leaf Index

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

| Leaf directory             | Coverage                   | Purpose                                                                                                                                  |
| -------------------------- | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `program-registration/`    | `verified`                 | Commander program tree wiring, argument parsing, and route registration.                                                                 |
| `command-implementations/` | `exceptioned-deep-partial` | Command implementation subtree split into agent, channel/plugin, auth/provider, config/doctor, secret/gateway, and maintenance families. |
| `status-gateway-channel/`  | `verified`                 | Status/probe surfaces, gateway lifecycle commands, and channel status/config command flows.                                              |
| `terminal-output/`         | `verified`                 | ANSI-safe tables, palette, prompts, and progress rendering.                                                                              |

## Split rule

Split deeper only when a child file group gains independent behavior, ownership, or a distinct first-test ladder.
