# Workspace Browser Ssh Impact Leaf

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 final cross-module audit

## Parent module

- Impact module: `agent-runtime/sandbox/`
- Leaf: `workspace-browser-ssh/`

## Purpose

Workspace mounts, browser/noVNC, Docker/SSH adapters, and remote runtime operations.

## 2026-05-08 result

Split only. No verified promotion because grouped sandbox commands failed without actionable Vitest output.

## 2026-05-09 final audit result

Exceptioned. The non-Docker workspace/browser/SSH targeted test set passed, but Docker/container/browser runtime smoke coverage is not available in this environment. The leaf is explicit `exceptioned-deep-partial` until container/remote smoke evidence is recorded. Evidence: `../../../../evidence/final-cross-module-audit-2026-05-09/FINAL-CROSS-MODULE-AUDIT.md`.
