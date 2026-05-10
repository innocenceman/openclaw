# Root Scripts Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

## Invocation path

1. Root package scripts, direct shell use, or neighboring wrappers invoke this leaf.
2. Files under `scripts/*` perform the leaf-specific automation.
3. Validation then flows into the closest wrapper script, docs page, or test called out in this leaf's file roles.

## Trace rule

Start from the entry command or wrapper that actually invokes the script, then walk into helpers and downstream artifacts before deciding how broad validation must be.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `197` changed path(s) to this final leaf. `183` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 101, 'M': 80, 'R': 2, 'D': 14}`.

- `Makefile`
- `fix2.py`
- `scripts/AGENTS.md`
- `scripts/CLAUDE.md`
- `scripts/anthropic-prompt-probe.ts`
- `scripts/audit-seams.mjs`
- `scripts/bench-cli-startup.ts`
- `scripts/bench-gateway-startup.ts`
- `scripts/bench-model.ts`
- `scripts/bench-test-changed.mjs`
- `scripts/build-all.mjs`
- `scripts/bundle-a2ui.mjs`
- `scripts/bundle-a2ui.sh`
- `scripts/canvas-a2ui-copy.ts`
- `scripts/changed-lanes.mjs`
- `scripts/changelog-add-unreleased.ts`
- `scripts/check-architecture-smells.mjs`
- `scripts/check-changed.mjs`
- `scripts/check-channel-agnostic-boundaries.mjs`
- `scripts/check-codex-app-server-protocol.ts`
- `scripts/check-docs-mdx.mjs`
- `scripts/check-dynamic-import-warts.mjs`
- `scripts/check-extension-package-tsc-boundary.mjs`
- `scripts/check-extension-plugin-sdk-boundary.mjs`
- `scripts/check-file-utils.ts`
- `scripts/check-gateway-watch-regression.mjs`
- `scripts/check-import-cycles.ts`
- `scripts/check-ingress-agent-owner-context.mjs`
- `scripts/check-live-cache.ts`
- `scripts/check-madge-import-cycles.ts`
- `... 另有 153 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->
