# Sandbox Impact Subtree

Coverage: `deep-partial`
Freshness: 2026-05-08 remaining runtime split wave

## Parent module

- Impact module: `agent-runtime/`
- Subtree: `sandbox/`

## Purpose

Sandbox backends, filesystem bridges, workspace mounts, browser bridges, SSH/Docker adapters, and sandbox policy.

## Split basis

This slice was too large to keep as one verified leaf: backend/policy, filesystem bridge, and workspace/browser/SSH behavior have different tests and code-review-graph risk centers. Core backend/filesystem/security validation passed, but broader grouped sandbox commands exited non-zero without Vitest failure output, so only passing child leaves are promoted.
