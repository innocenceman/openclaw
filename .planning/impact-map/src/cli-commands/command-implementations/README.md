# Command Implementations Impact Subtree

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

## Parent module

- Impact module: `cli-commands/`
- Subtree: `command-implementations/`

## Purpose

Concrete CLI command handlers grouped by command family instead of one broad exceptioned leaf.

## Split basis

The previous broad leaf stayed `exceptioned-deep-partial` because command handlers span agent, channels, auth, doctor/config, gateway/status, and maintenance surfaces. code-review-graph also highlighted CLI secret gateway behavior as a separate high-risk path. The subtree now gives those families independent impact cards.

Use `leaf-index.md` to choose the narrowest CLI command-family leaf.
