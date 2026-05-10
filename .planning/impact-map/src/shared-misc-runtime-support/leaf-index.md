# Shared / Misc Runtime Support Leaf Index

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

| Leaf directory        | Coverage                   | Purpose                                                                      |
| --------------------- | -------------------------- | ---------------------------------------------------------------------------- |
| `root-entrypoints/`   | `verified`                 | Root package entrypoints, runtime/bootstrap entry files, and global state.   |
| `web-provider-root/`  | `verified`                 | Root web provider/channel-web and bundled web-search registry surfaces.      |
| `startup-process/`    | `exceptioned-deep-partial` | Bootstrap, daemon, process, and node-host runtime support.                   |
| `compat-hooks/`       | `verified`                 | Compatibility helpers and workspace hook integration.                        |
| `docs-i18n-markdown/` | `verified`                 | Local docs helpers, i18n utilities, and Markdown support under `src/`.       |
| `shared-primitives/`  | `verified`                 | Shared primitives, utilities, and types used across runtime modules.         |
| `logging-support/`    | `verified`                 | Logging support surfaces that do not own a primary runtime flow.             |
| `test-support/`       | `verified`                 | Test helpers and test utilities consumed by colocated and integration tests. |

## Split rule

Use this module for support/compatibility/helper surfaces rather than primary runtime flows. Escalate to the consuming logical module when a helper change crosses a runtime boundary.
