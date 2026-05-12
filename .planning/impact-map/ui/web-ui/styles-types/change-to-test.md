# Web UI Styles and Types Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type                          | First validation                   | Escalation trigger                                                                                                      |
| ------------------------------------ | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Global or feature stylesheet changed | `pnpm ui:build`                    | Escalate to `pnpm test:ui` or browser smoke when the style change affects interactive layout or view logic assumptions. |
| UI type declaration changed          | `pnpm test:ui` and `pnpm ui:build` | Escalate to repo-wide `pnpm build` when import typing or bundled UI output changes.                                     |

## Validation evidence

No UI tests or builds were run while promoting this leaf. Commands were verified from root `package.json` and `ui/package.json`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `18` (修改 11，新增 7).
- Target-existing path refs in active map: `18`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `ui/src/styles/base.css`
- `ui/src/styles/chat/grouped.css`
- `ui/src/styles/chat/layout.css`
- `ui/src/styles/chat/sidebar.css`
- `ui/src/styles/chat/text.css`
- `ui/src/styles/chat/tool-cards.css`
- `ui/src/styles/components.css`
- `ui/src/styles/components.test.ts`
- `ui/src/styles/config-quick.css`
- `ui/src/styles/config-quick.test.ts`
- `ui/src/styles/config.css`
- `ui/src/styles/layout.css`
- `ui/src/styles/layout.mobile.css`
- `ui/src/styles/layout.mobile.test.ts`
- `ui/src/styles/markdown-preview.test.ts`
- `ui/src/styles/usage.css`
<!-- version-diff-refresh:v2026.5.4:end -->
