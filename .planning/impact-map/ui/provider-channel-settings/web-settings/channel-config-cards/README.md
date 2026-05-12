# Web Channel Config Cards

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 GitNexus/code-review-graph bounded slice plus targeted UI validation

## Scope

Channel status/config snapshot, save/reload/start/wait/logout handlers, and channel card rendering.

## Leaf status

G007 passed web build/static checks, but web UI tests exited 1 with unhandled Vitest errors; native parity remains exceptioned under `apps/provider-channel-settings/native-settings/` because macOS/iOS platform checks are unavailable.

## Detail files

- `file-roles.md`: concrete path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `memory-media-ui`.
- Risk: `medium`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `12` (修改 12).
- Target-existing changed paths listed here: `12`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `ui/src/ui/views/channels.discord.ts`
- `ui/src/ui/views/channels.googlechat.ts`
- `ui/src/ui/views/channels.imessage.ts`
- `ui/src/ui/views/channels.nostr-profile-form.ts`
- `ui/src/ui/views/channels.nostr.ts`
- `ui/src/ui/views/channels.shared.ts`
- `ui/src/ui/views/channels.signal.ts`
- `ui/src/ui/views/channels.slack.ts`
- `ui/src/ui/views/channels.telegram.ts`
- `ui/src/ui/views/channels.test.ts`
- `ui/src/ui/views/channels.ts`
- `ui/src/ui/views/channels.whatsapp.ts`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
