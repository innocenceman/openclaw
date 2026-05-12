# macOS Menu, Canvas, and Chat Code Paths

Coverage: `exceptioned-deep-partial`

| Path | Trace start | Validation risk |
| --- | --- | --- |
| User-facing entry | `Menu*.swift`, `Canvas*.swift`, `WebChat*.swift`, `Session*.swift`, `Usage*.swift`, `Context*.swift` | UI state, persisted config, process/runtime state, and platform permission behavior can diverge without macOS test/smoke evidence. |
| Shared protocol/config edge | `apps/shared/OpenClawKit/**` and generated gateway models | Cross-platform protocol drift must be paired with package/protocol checks. |

## Trace rule

Start from the smallest Swift view/store/manager in this leaf, then widen to shared kit or gateway protocol only when the change crosses that boundary.
