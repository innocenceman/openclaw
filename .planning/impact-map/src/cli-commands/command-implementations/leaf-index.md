# Command Implementations Leaf Index

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

| Leaf directory             | Coverage                   | Purpose                                                         |
| -------------------------- | -------------------------- | --------------------------------------------------------------- |
| `agent-command-cli/`       | `exceptioned-deep-partial` | Agent and agents command handlers plus command session helpers. |
| `channel-plugin-commands/` | `exceptioned-deep-partial` | Channels, channel setup, and plugin-facing channel commands.    |
| `auth-provider-commands/`  | `exceptioned-deep-partial` | Auth-choice, provider/model selection, and OAuth command flows. |
| `config-doctor-commands/`  | `exceptioned-deep-partial` | Configure, doctor, repair, and config-analysis command flows.   |
| `secret-gateway-commands/` | `verified`                 | CLI command handlers for secret/gateway resolution surfaces.    |
| `maintenance-commands/`    | `exceptioned-deep-partial` | Backup, cleanup, dashboard, docs, health, and utility commands. |

## Split rule

If a command family crosses a primary runtime module, use this CLI leaf for command UX/flags and the runtime module leaf for behavior ownership.
