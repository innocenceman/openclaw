# Tool and Capability Plugins

Coverage: `verified`
Freshness: 2026-05-09 G006 extension plugin wave evidence recorded

## Purpose

Tool/search/control/capability plugins that are not primarily channel or model-provider packages.

## Canonical status

This is the canonical leaf home for these packages.

## Files

- `leaf-index.md` — package-level leaves in this category.
- Each leaf directory contains `README.md`, `file-roles.md`, `code-paths.md`, and `change-to-test.md`.

## Boundary

Extension production code should depend on `openclaw/plugin-sdk/*`, local extension files, and package-local runtime dependencies only.

## 2026-05-08 P0 refresh-to-verified evidence

Priority leaves `llm-task/` and `thread-ownership/` are now `verified` for the bounded P0 slice. The family aggregate remains `partial` because residual tool/capability leaves remain `partial`.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-REFRESH-TO-VERIFIED.md`.

## 2026-05-09 G006 extension plugin wave

Decision: `verified`.

All tool/capability leaf tests and package boundary checks passed in G006, so this family is verified.

Evidence: `.planning/impact-map/evidence/extensions-all-verified-wave-2026-05-09/EXTENSIONS-ALL-VERIFIED-WAVE.md`.
