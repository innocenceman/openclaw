# Filesystem Bridge Impact Subtree

Coverage: `deep-partial`
Freshness: 2026-05-08 remaining runtime split wave

## Parent module

- Impact module: `agent-runtime/sandbox/`
- Subtree: `filesystem-bridge/`

## Purpose

Sandbox filesystem bridge, shell command bridge, path safety, host path helpers, and anchored operations.

## Split basis

`sandbox-core.log` validates the shell bridge path through `fs-bridge.shell.test.ts`, but the broader fs/path aggregation failed and this subtree also claimed `fs-paths.ts` and `host-paths.ts`. The subtree is split to avoid over-promoting path-safety residuals.
