# Config / Secrets / Security Leaf Index

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Leaf directory              | Coverage   | Purpose                                                                                                                          |
| --------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `config-io/`                | `verified` | Config read/write, path resolution, includes, runtime snapshot, and merge behavior.                                              |
| `config-schema-validation/` | `verified` | Schema contracts, help/docs generation baselines, and fail-closed validation behavior.                                           |
| `sessions/`                 | `verified` | Session config defaults, main session state, and session-path helpers.                                                           |
| `legacy-migration/`         | `verified` | Legacy config/service migration helpers and doctor-facing compatibility repair.                                                  |
| `secrets-resolution/`       | `verified` | Secrets subtree split into ref contracts, target registry, runtime collection, gateway/CLI resolution, and storage/audit leaves. |
| `security-guards/`          | `verified` | Audit/fix helpers, safe-regex/temp-path guards, skill scanning, and security policy enforcement.                                 |

## Split rule

Split deeper only when a child file group gains independent behavior, ownership, or a distinct first-test ladder.
