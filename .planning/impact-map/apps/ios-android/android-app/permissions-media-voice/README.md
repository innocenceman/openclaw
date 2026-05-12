# Android Permissions, Media, and Voice

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 GitNexus/code-review-graph bounded slice plus targeted Android validation

## Scope

Camera/location/notifications/photos/SMS/system handlers, talk mode, wake words, and media encoding.

## Leaf status

G007 attempted Android unit, lint, and assemble checks, but this host has no `java`/`JAVA_HOME`; raw logs are recorded under `evidence/apps-ui-verified-wave-2026-05-09/logs/`.

## Detail files

- `file-roles.md`: concrete path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.
