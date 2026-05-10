# Scripts and Packaging Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

## Wrapper-to-leaf path

1. Root package scripts, direct shell use, or docs examples invoke a packaging leaf.
2. The child leaf scripts run helper logic, sometimes via `scripts/lib/**` or top-level wrappers.
3. Validation then flows into the nearest wrapper command, docs guide, or targeted test.

## Trace rule

Start from the real entrypoint that operators or CI use, not only from the deepest helper file. Packaging drift often comes from stale wrappers or docs, not from the inner shell script alone.
