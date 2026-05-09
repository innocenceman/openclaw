# Scripts podman File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| File or path                   | Role                                                       | Evidence state | Impact notes                                                                    |
| ------------------------------ | ---------------------------------------------------------- | -------------- | ------------------------------------------------------------------------------- |
| scripts/podman/\*\*            | Primary automation files owned by this leaf.               | partial        | Path changes can break root package scripts, docs examples, or wrapper scripts. |
| scripts/run-openclaw-podman.sh | Runtime wrapper that depends on `scripts/podman/setup.sh`. | partial        | Setup path changes can strand the launcher.                                     |
| docs/install/podman.md         | Operator guide for the Podman setup flow.                  | partial        | Docs examples must stay aligned with the setup script flags and behavior.       |

## Update rule

When a new wrapper, docs guide, or shared helper becomes a stable dependency for this script leaf, record it here so future impact checks do not stop at the first shell file they see.
