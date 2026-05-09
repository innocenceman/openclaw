# Plugin Runtime Leaf Index

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Leaf directory          | Coverage   | Purpose                                                                                |
| ----------------------- | ---------- | -------------------------------------------------------------------------------------- |
| `runtime-loader/`       | `verified` | Plugin discovery, install/update/uninstall, registry loading, and runtime entry setup. |
| `runtime-adapters/`     | `verified` | Runtime adapters for channels, providers, media, TTS, tools, and system services.      |
| `contracts/`            | `verified` | Plugin metadata, manifest, contract suites, and schema validation.                     |
| `boundary-enforcement/` | `verified` | Runtime/plugin boundary guardrails, naming checks, and install security scan helpers.  |
| `test-helpers/`         | `verified` | Plugin runtime test fixtures and shared helper scaffolding.                            |

## Split rule

Split deeper only when a child file group gains independent behavior, ownership, or a distinct first-test ladder.
