# Bindings Change-to-Test

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Change scope | First validation                                                                                                                                                                                | Escalation trigger                                                                                       | Notes                    |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------ |
| `bindings/`  | pnpm test -- src/channels/plugins/acp-bindings.test.ts src/channels/plugins/binding-targets.test.ts src/channels/plugins/target-resolvers.test.ts src/channels/plugins/pairing-adapters.test.ts | Escalate to routing and channel suites when binding resolution changes target/account/session semantics. | Priority completion unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `9` (新增 1，修改 8).
- Target-existing path refs in active map: `9`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/channels/plugins/binding-provider.ts`
- `src/channels/plugins/binding-routing.test.ts`
- `src/channels/plugins/binding-routing.ts`
- `src/channels/plugins/configured-binding-builtins.ts`
- `src/channels/plugins/configured-binding-compiler.ts`
- `src/channels/plugins/configured-binding-consumers.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
