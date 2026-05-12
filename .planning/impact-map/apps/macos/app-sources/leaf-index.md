# macOS App Sources Leaf Index

Coverage: `exceptioned-deep-partial`

| Leaf directory | Coverage | Entry |
| --- | --- | --- |
| `gateway-runtime/` | `exceptioned-deep-partial` | `gateway-runtime/README.md` |
| `settings-providers/` | `exceptioned-deep-partial` | `settings-providers/README.md` |
| `menu-canvas-chat/` | `exceptioned-deep-partial` | `menu-canvas-chat/README.md` |
| `voice-permissions/` | `exceptioned-deep-partial` | `voice-permissions/README.md` |

Split rationale: the previous `app-sources/` leaf was too broad for a single verified wave because menu/UI, gateway process control, provider/channel settings, and voice/permission runtime have different risk centers and test ladders.
