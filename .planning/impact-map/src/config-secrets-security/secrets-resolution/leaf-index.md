# Secrets Resolution Leaf Index

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Leaf directory                   | Coverage   | Purpose                                                         |
| -------------------------------- | ---------- | --------------------------------------------------------------- |
| `secret-ref-contracts/`          | `verified` | Secret input/ref contracts, parsing, JSON pointer, and schema.  |
| `secret-target-registry/`        | `verified` | Secret target registry, target query, and credential matrix.    |
| `runtime-secret-collection/`     | `verified` | Runtime/provider/gateway/web secret collection and env policy.  |
| `gateway-cli-secret-resolution/` | `verified` | CLI/gateway command secret resolution and message secret scope. |
| `secret-storage-audit/`          | `verified` | Secret storage paths, apply/configure/audit, and scan helpers.  |

## Split rule

Contract changes start at `secret-ref-contracts/`; command-facing resolution starts at `gateway-cli-secret-resolution/`; runtime injection starts at `runtime-secret-collection/`.
