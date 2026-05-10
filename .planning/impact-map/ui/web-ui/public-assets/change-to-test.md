# Web UI Public Assets Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type               | First validation | Escalation trigger                                                                                 |
| ------------------------- | ---------------- | -------------------------------------------------------------------------------------------------- |
| HTML boot shell changed   | `pnpm ui:build`  | Escalate to browser smoke when theme bootstrapping, document metadata, or script mounting changes. |
| Static icon asset changed | `pnpm ui:build`  | Escalate to manual browser refresh/install checks when branding assets change.                     |

## Validation evidence

No UI builds were run while promoting this leaf. Command references were verified from root `package.json` and `ui/package.json`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `2` (新增 2).
- Target-existing path refs in active map: `2`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
