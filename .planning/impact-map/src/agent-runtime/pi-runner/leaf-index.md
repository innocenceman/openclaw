# Pi Runner Leaf Index

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 final cross-module audit

| Leaf directory              | Coverage                   | Purpose                                                                                    |
| --------------------------- | -------------------------- | ------------------------------------------------------------------------------------------ |
| `core-run-loop/`            | `verified`                 | Model resolution, run loop, compaction overflow, lanes, and usage/runtime state.           |
| `provider-params-streams/`  | `exceptioned-deep-partial` | Provider-specific params, stream wrappers, tool payload shaping, and model capabilities.   |
| `subscriptions-extensions/` | `verified`                 | Embedded subscribe lifecycle, Pi extensions, context pruning, and extension hook surfaces. |
