# Thread Ownership Plugin

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

## Scope

Bundled integration/tool plugin `extensions/thread-ownership/` coordinating Slack thread claims so multiple agents do not answer in the same thread.

## Why this remains one leaf

Thread ownership is implemented in a single small leaf, but it is high leverage because it hooks directly into incoming/outgoing Slack events and can cancel sends based on external ownership API responses.

## Entry contracts

- Plugin id: `thread-ownership` from `extensions/thread-ownership/openclaw.plugin.json` and `index.ts`.
- No local `package.json` is present; this is a manifest-backed bundled plugin without its own npm package file.
- Loader boundary: `extensions/thread-ownership/index.ts` registers `message_received` and `message_sending` hooks.

## Primary behavior surfaces

- `extensions/thread-ownership/index.ts`: config/env resolution, ownership-agent selection, in-memory mention tracking, Slack thread claim POSTs, and fail-open cancellation behavior.
- `extensions/thread-ownership/api.ts`: local barrel re-exporting the narrow plugin-SDK seam.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## Current validation state

This map was deepened from repo-native source and test-path inspection only. No product code was modified, and no product tests/builds were run during this documentation pass.

## 2026-05-08 P0 original wave evidence

Decision: `validated-deep-partial`.

Reason: GN-STALE + CRG-STALE; thread-ownership and channel contracts passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-VERIFIED-WAVE.md` and validation logs `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/extensions-thread-ownership.log`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/test-contracts-channels.log`.

No product source was changed during this wave.

## 2026-05-08 P0 refresh-to-verified evidence

Decision: `verified`.

Reason: GitNexus and code-review-graph are fresh; thread-ownership and channel contract tests passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-REFRESH-TO-VERIFIED.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/gitnexus-refresh.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/code-review-graph-refresh.md`.

No product source was changed during this refresh pass.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `model-provider-plugins`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `2` (修改 2).
- Target-existing changed paths listed here: `2`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `extensions/thread-ownership/index.test.ts`
- `extensions/thread-ownership/index.ts`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
