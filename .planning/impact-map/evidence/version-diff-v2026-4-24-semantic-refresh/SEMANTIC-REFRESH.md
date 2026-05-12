# v2026.4.24 Impact Map Semantic Refresh

- Transition: `v2026.3.28 -> v2026.4.24`
- Source of truth: `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`
- Changed paths: `13746`
- Final leaves refreshed: `246`
- Feature groups: `13`
- Unclassified paths: `0`
- Missing impact-map dirs: `0`
- Leaf files touched by refresh: `716`

## Tool evidence

- GitNexus: `gitnexus analyze --max-file-size 10240 --embeddings` completed after target source stabilization.
- GitNexus detect changes: available; current unrelated local edits are low risk and outside version-diff artifacts.
- code-review-graph: build completed for target source (`14109 files`, `130354 nodes`, `1195738 edges`).
- Deleted-path reference check: active impact-map generated sections list only target-existing paths; deleted or renamed-away paths stay in version-diff artifacts.

## Coverage mix for refreshed leaves

- `exceptioned-deep-partial`: 124
- `fallback`: 12
- `verified`: 110

## Feature groups after semantic refresh

- `docs-generated-baselines`: 3121 paths, 26 leaves, risk=`medium`, compatibility=`docs-only`
- `channel-plugins`: 2613 paths, 27 leaves, risk=`high`, compatibility=`behavior-change`
- `agent-acp-runtime`: 1940 paths, 36 leaves, risk=`high`, compatibility=`behavior-change`
- `memory-media-ui`: 975 paths, 23 leaves, risk=`medium`, compatibility=`behavior-change`
- `build-ci-tests`: 934 paths, 19 leaves, risk=`medium`, compatibility=`compatible`
- `cli-command-surface`: 871 paths, 9 leaves, risk=`medium`, compatibility=`behavior-change`
- `model-provider-plugins`: 722 paths, 47 leaves, risk=`high`, compatibility=`behavior-change`
- `shared-runtime-support`: 676 paths, 8 leaves, risk=`medium`, compatibility=`behavior-change`
- `gateway-config-security`: 636 paths, 16 leaves, risk=`high`, compatibility=`behavior-change`
- `mobile-desktop-apps`: 539 paths, 12 leaves, risk=`high`, compatibility=`behavior-change`
- `plugin-sdk-core`: 388 paths, 10 leaves, risk=`high`, compatibility=`behavior-change`
- `skill-plugins`: 199 paths, 6 leaves, risk=`high`, compatibility=`behavior-change`
- `infra-outbound-delivery`: 132 paths, 7 leaves, risk=`medium`, compatibility=`behavior-change`

## Refresh method

The refresh appends generated target-version semantic blocks to each impacted leaf packet (`README.md`, `code-paths.md`, and `change-to-test.md` when present). Blocks list only target-existing source paths so active `.planning/impact-map` remains clean for the target source version. Deleted and renamed-away paths remain canonical in `.planning/version-diff/v2026.3.28...v2026.4.24/` and its obsolete-reference archive.
