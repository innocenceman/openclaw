# Scripts dev Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| Change type                       | First validation                                                        | Escalation trigger                                                                                   |
| --------------------------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Script implementation changed     | Run the narrowest wrapper or direct script check that owns the behavior | Escalate to broader package/build/test flows when shared helpers or published surfaces are affected. |
| Script path or flag shape changed | Inspect package.json wrappers, docs examples, and nearby shell callers  | Update all direct invocations in the same change; path drift is a common failure mode.               |

## Validation evidence

No commands above were executed for this leaf during Wave 4 promotion. They were selected from the current repo tree, wrapper references, and root `package.json` scripts without claiming fresh runtime success.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `2` (修改 2).
- Target-existing path refs in active map: `2`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `medium`; compatibility: `compatible`.
- First validation move: Run the smallest build/test/tooling check that exercises this leaf, then rely on broader CI only for packaging surfaces.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `compatible`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `scripts/dev/realtime-talk-live-smoke.ts`
- `scripts/dev/test-device-pair-telegram.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
