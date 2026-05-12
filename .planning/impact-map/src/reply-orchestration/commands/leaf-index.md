# Reply Commands Leaf Index

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

| Leaf directory               | Coverage                   | Purpose                                                    |
| ---------------------------- | -------------------------- | ---------------------------------------------------------- |
| `command-auth-gates/`        | `verified`                 | Command detection, owner/auth checks, and rejection gates. |
| `command-registry-families/` | `verified`                 | Command registry data/runtime wiring and argument parsing. |
| `command-handlers/`          | `exceptioned-deep-partial` | Reply command handlers for ACP, plugins, subagents, etc.   |

## Split rule

Policy changes belong in `command-auth-gates/`; registry shape changes belong in `command-registry-families/`; execution handlers belong in `command-handlers/`.
