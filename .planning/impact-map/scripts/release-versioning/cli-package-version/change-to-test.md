# CLI Package Version Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| Change type                         | First validation                           | Escalation trigger                                                             |
| ----------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------ |
| CLI release guard script changed    | `pnpm release:openclaw:npm:check`          | Escalate to broader release verification only in an approved release workflow. |
| CLI version metadata helper changed | `pnpm build` when build output is affected | Add release checks if the change alters published version semantics.           |

## Validation evidence

No commands above were executed for this leaf during Wave 4 promotion. They were selected from the current repo tree, wrapper references, and root `package.json` scripts without claiming fresh runtime success.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `3` (修改 3).
- Target-existing path refs in active map: `3`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `medium`; compatibility: `compatible`.
- First validation move: Run the smallest build/test/tooling check that exercises this leaf, then rely on broader CI only for packaging surfaces.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
