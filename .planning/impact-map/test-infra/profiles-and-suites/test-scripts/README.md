# Test Scripts

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G009 targeted validation

## Scope

Leaf module for `test/scripts/*.test.ts` and support scripts.

## Boundary

Script-level validation for repo automation, packaging, release checks, and safety guardrails.

## Evidence

Repo-native path inspection of the relevant `test/**`, package script, and fixture/helper roots. No broad test suite was run for this documentation-only wave.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## 2026-05-08 P0 original wave evidence

Decision: `validated-deep-partial`.

Reason: GN-STALE + CRG-STALE; tests passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-VERIFIED-WAVE.md` and validation logs `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/test-infra-test-scripts.log`.

No product source was changed during this wave.

## 2026-05-08 P0 refresh-to-verified evidence

Decision: `verified`.

Reason: GitNexus and code-review-graph are fresh; selected test script tests passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-REFRESH-TO-VERIFIED.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/gitnexus-refresh.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/code-review-graph-refresh.md`.

No product source was changed during this refresh pass.

## 2026-05-09 G009 targeted validation

Decision: `exceptioned-deep-partial`.

Evidence: `.planning/impact-map/evidence/packages-test-infra-verified-wave-2026-05-09/PACKAGES-TEST-INFRA-VERIFIED-WAVE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `build-ci-tests`.
- Risk: `medium`.
- Compatibility: `compatible`.
- Changed paths in this leaf: `77` (新增 77).
- Target-existing changed paths listed here: `77`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `qa/README.md`
- `qa/convex-credential-broker/.gitignore`
- `qa/convex-credential-broker/README.md`
- `qa/convex-credential-broker/convex.json`
- `qa/convex-credential-broker/convex/credentials.ts`
- `qa/convex-credential-broker/convex/crons.ts`
- `qa/convex-credential-broker/convex/http.ts`
- `qa/convex-credential-broker/convex/payload-validation.ts`
- `qa/convex-credential-broker/convex/schema.ts`
- `qa/convex-credential-broker/convex/tsconfig.json`
- `qa/convex-credential-broker/package.json`
- `qa/frontier-harness-plan.md`
- `... 另有 65 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `build-ci-tests`
- Risk: `medium`
- Compatibility: `compatible`
- Coverage: `fallback`
- Changed paths in diff: `24`
- Target-existing changed paths reflected here: `23`
- Deleted or renamed-away paths omitted from active impact-map: `1`

### Target-version changed paths

- `qa/scenarios/agents/subagent-completion-direct-fallback.md`
- `qa/scenarios/channels/dm-chat-baseline.md`
- `qa/scenarios/channels/group-message-tool-unavailable-fallback.md`
- `qa/scenarios/channels/group-visible-reply-tool.md`
- `qa/scenarios/config/config-restart-capability-flip.md`
- `qa/scenarios/config/crestodian-ring-zero-setup.md`
- `qa/scenarios/memory/commitments-heartbeat-target-none.md`
- `qa/scenarios/memory/memory-failure-fallback.md`
- `qa/scenarios/memory/session-memory-ranking.md`
- `qa/scenarios/models/codex-harness-no-meta-leak.md`
- `qa/scenarios/models/gpt55-thinking-visibility-switch.md`
- `qa/scenarios/models/model-switch-follow-up.md`
- `qa/scenarios/models/openai-native-web-search-live.md`
- `qa/scenarios/models/thinking-slash-model-remap.md`
- `qa/scenarios/plugins/kitchen-sink-live-openai.md`
- `qa/scenarios/runtime/compaction-retry-mutating-tool.md`
- `qa/scenarios/runtime/docker-prometheus-smoke.md`
- `qa/scenarios/runtime/otel-trace-smoke.md`
- `qa/scenarios/runtime/reasoning-only-no-auto-retry-after-write.md`
- `qa/scenarios/runtime/update-run-package-self-upgrade.md`
- `qa/scenarios/workspace/long-running-release-audit.md`
- `qa/scenarios/workspace/medium-game-plan-codex-harness.md`
- `qa/scenarios/workspace/medium-game-plan-pi-harness.md`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
